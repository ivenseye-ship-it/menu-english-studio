const data = window.LEARNING_DATA;
const progressKey = "menuEnglishCourseProgress";
const notesKey = "menuEnglishNotes";

let activeCategory = data.vocabulary[0].id;
let activeExamplePage = 0;

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let voicesReady;
let speechRunId = 0;

function loadVoices() {
  const available = window.speechSynthesis.getVoices();
  if (available.length) return Promise.resolve(available);
  if (voicesReady) return voicesReady;

  voicesReady = new Promise(resolve => {
    const finish = () => {
      window.speechSynthesis.removeEventListener("voiceschanged", finish);
      resolve(window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.addEventListener("voiceschanged", finish, { once: true });
    window.setTimeout(finish, 1200);
  });
  return voicesReady;
}

function chooseEnglishVoice(voices) {
  const english = voices.filter(voice => /^en[-_]/i.test(voice.lang));
  const preferredNames = ["Samantha", "Ava", "Evan", "Daniel", "Karen", "Google US English"];
  return preferredNames
    .map(name => english.find(voice => voice.name.includes(name)))
    .find(Boolean)
    || english.find(voice => /^en-US$/i.test(voice.lang) && voice.localService)
    || english.find(voice => /^en-US$/i.test(voice.lang))
    || english[0]
    || null;
}

async function speak(text) {
  if (!("speechSynthesis" in window)) return;
  const cleanText = text.replace(/\s+/g, " ").trim();
  if (!cleanText) return;

  const runId = ++speechRunId;
  const voices = await loadVoices();
  if (runId !== speechRunId) return;
  const voice = chooseEnglishVoice(voices);
  const segments = [];
  cleanText.split(/([/,])/).forEach(part => {
    const value = part.trim();
    if (!value) return;
    if (value === "/" || value === ",") {
      if (segments.length) segments[segments.length - 1].pauseAfter = value === "/" ? 1500 : 1000;
      return;
    }
    segments.push({ text: value, pauseAfter: 0 });
  });
  window.speechSynthesis.cancel();

  const playSegment = index => {
    if (runId !== speechRunId || index >= segments.length) return;
    const utterance = new SpeechSynthesisUtterance(segments[index].text);
    utterance.voice = voice;
    utterance.lang = voice?.lang || "en-US";
    utterance.rate = 0.65;
    utterance.pitch = 1;
    utterance.onend = () => {
      if (index + 1 < segments.length) {
        window.setTimeout(() => playSegment(index + 1), segments[index].pauseAfter);
      }
    };
    window.speechSynthesis.speak(utterance);
  };

  window.setTimeout(() => playSegment(0), 80);
}

function renderProgress() {
  const progress = readJson(progressKey, {});
  const completed = data.weeks.filter(([id]) => progress[id]).length;
  const percent = Math.round((completed / data.weeks.length) * 100);
  qs("#progressText").textContent = `${completed} / ${data.weeks.length}`;
  qs("#progressBar").style.width = `${percent}%`;
}

function renderCourse() {
  const progress = readJson(progressKey, {});
  qs("#courseList").innerHTML = data.weeks.map((week, index) => {
    const [id, title, focus, outcome, target] = week;
    const checked = progress[id] ? "checked" : "";
    return `
      <article class="lesson-card" data-lesson-target="${target}" tabindex="0" role="link" aria-label="進入${id}：${title}">
        <label class="lesson-check">
          <input type="checkbox" data-week="${id}" ${checked}>
          <span>${index + 1}</span>
        </label>
        <div>
          <p class="lesson-id">${id}</p>
          <h3>${title}</h3>
          <p><b>本週學習：</b>${focus}</p>
          <p><b>完成標準：</b>${outcome}</p>
          <span class="lesson-link">進入本週學習 <span aria-hidden="true">→</span></span>
        </div>
      </article>
    `;
  }).join("");

  qsa("[data-week]").forEach(input => {
    input.addEventListener("change", event => {
      const progressNext = readJson(progressKey, {});
      progressNext[event.target.dataset.week] = event.target.checked;
      writeJson(progressKey, progressNext);
      renderProgress();
    });
  });

  qsa("[data-lesson-target]").forEach(card => {
    const openLesson = () => {
      qs(`#${card.dataset.lessonTarget}`).scrollIntoView({ behavior: "smooth", block: "start" });
    };
    card.addEventListener("click", event => {
      if (!event.target.closest("input")) openLesson();
    });
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLesson();
      }
    });
  });
}

function renderExamples() {
  const group = data.examples[activeExamplePage];
  qs("#exampleBoard").innerHTML = `
    <article class="menu-group">
      <h3>${group.title}</h3>
      <div class="menu-example-list">
        ${group.rows.map(row => `
          <div class="menu-example">
            <div>
              <p class="menu-original">${row[0]}</p>
              <p class="menu-zh">${row[1]}</p>
            </div>
            <p>${row[2]}</p>
            <button class="audio-button" type="button" data-speak="${row[0]}">播放</button>
          </div>
        `).join("")}
      </div>
    </article>
  `;

  const pagination = `
    <button class="pagination-arrow" type="button" data-example-page="prev"
      aria-label="上一頁" title="上一頁" ${activeExamplePage === 0 ? "disabled" : ""}>←</button>
    <label class="pagination-select">
      <span>菜單分類</span>
      <select data-example-select aria-label="選擇菜單分類">
        ${data.examples.map((item, index) => `
          <option value="${index}" ${index === activeExamplePage ? "selected" : ""}>
            ${index + 1}. ${item.title.replace("｜完整菜單原文", "").replace("｜加強例句", "")}
          </option>
        `).join("")}
      </select>
    </label>
    <span class="pagination-status">${activeExamplePage + 1} / ${data.examples.length}</span>
    <button class="pagination-arrow" type="button" data-example-page="next"
      aria-label="下一頁" title="下一頁" ${activeExamplePage === data.examples.length - 1 ? "disabled" : ""}>→</button>
  `;

  [qs("#examplePaginationTop"), qs("#examplePaginationBottom")].forEach(container => {
    container.innerHTML = pagination;
  });

  qsa("[data-example-page]").forEach(button => {
    button.addEventListener("click", () => {
      activeExamplePage += button.dataset.examplePage === "next" ? 1 : -1;
      renderExamples();
      qs("#menu-lab").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  qsa("[data-example-select]").forEach(select => {
    select.addEventListener("change", () => {
      activeExamplePage = Number(select.value);
      renderExamples();
      qs("#menu-lab").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderTabs() {
  qs("#categoryTabs").innerHTML = data.vocabulary.map(category => `
    <button class="tab ${category.id === activeCategory ? "active" : ""}" type="button" data-category="${category.id}">
      ${category.label}
    </button>
  `).join("");

  qsa("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderTabs();
      renderVocabulary();
    });
  });
}

function renderVocabulary() {
  const query = qs("#vocabSearch").value.trim().toLowerCase();
  const active = data.vocabulary.find(category => category.id === activeCategory);
  const source = query
    ? data.vocabulary.flatMap(category => category.items.map(item => [...item, category.label]))
    : active.items.map(item => [...item, active.label]);
  const filtered = source.filter(item => item.join(" ").toLowerCase().includes(query));

  qs("#vocabGrid").innerHTML = filtered.map(([term, kk, zh, group]) => `
    <article class="vocab-card">
      <div>
        <span class="tag">${group}</span>
        <h3>${term}</h3>
        <p class="kk">[${kk}]</p>
        <p>${zh}</p>
      </div>
      <button class="audio-button" type="button" data-speak="${term}">播放</button>
    </article>
  `).join("") || `<p class="empty">沒有找到符合的單字。</p>`;
}

function renderPhrases() {
  qs("#phraseDeck").innerHTML = data.phrases.map(group => `
    <article class="phrase-group">
      <h3>${group.title}</h3>
      ${group.items.map(([en, zh]) => `
        <div class="phrase-row">
          <div>
            <p>${en}</p>
            <span>${zh}</span>
          </div>
          <button class="audio-button" type="button" data-speak="${en}">播放</button>
        </div>
      `).join("")}
    </article>
  `).join("");
}

function renderNotes() {
  const notes = readJson(notesKey, []);
  qs("#noteCards").innerHTML = notes.length
    ? notes.map((note, index) => `
      <article class="note-card">
        <button class="delete-note" type="button" data-delete-note="${index}" aria-label="刪除筆記">×</button>
        <h3>${note.title}</h3>
        <p>${note.body}</p>
      </article>
    `).join("")
    : `<p class="empty">還沒有筆記。可以加入新城市、餐廳、菜名或你想反覆練的句子。</p>`;

  qsa("[data-delete-note]").forEach(button => {
    button.addEventListener("click", () => {
      const notesNext = readJson(notesKey, []);
      notesNext.splice(Number(button.dataset.deleteNote), 1);
      writeJson(notesKey, notesNext);
      renderNotes();
    });
  });
}

function bindEvents() {
  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-speak]");
    if (trigger) speak(trigger.dataset.speak);
  });

  qs("#vocabSearch").addEventListener("input", renderVocabulary);

  qs("#resetProgress").addEventListener("click", () => {
    writeJson(progressKey, {});
    qsa("[data-week]").forEach(input => {
      input.checked = false;
    });
    renderProgress();
  });

  qs("#noteForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.target);
    const title = form.get("title").toString().trim();
    const body = form.get("body").toString().trim();
    if (!title || !body) return;
    const notesNext = readJson(notesKey, []);
    notesNext.unshift({ title, body });
    writeJson(notesKey, notesNext);
    event.target.reset();
    renderNotes();
  });

  const links = qsa(".top-nav a");
  const sections = qsa("main section[id]");
  const observer = new IntersectionObserver(entries => {
    const active = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${active.target.id}`);
    });
  }, { rootMargin: "-22% 0px -68% 0px", threshold: [0.1, 0.3, 0.6] });
  sections.forEach(section => observer.observe(section));
}

function init() {
  renderProgress();
  renderCourse();
  renderExamples();
  renderTabs();
  renderVocabulary();
  renderPhrases();
  renderNotes();
  bindEvents();
}

init();
