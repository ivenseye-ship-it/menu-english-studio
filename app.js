const data = window.LEARNING_DATA;
const progressKey = "menuEnglishCourseProgress";
const notesKey = "menuEnglishNotes";

let activeCategory = data.vocabulary[0].id;
let activeExamplePage = 0;

const foreignMenuTerms = new Map([
  ["Croque Monsieur", "法式火腿起司烤三明治"], ["béchamel", "法式白醬"],
  ["ciabatta", "義大利巧巴達麵包"], ["hollandaise", "荷蘭醬"],
  ["guacamole", "墨西哥酪梨醬"], ["jalapeños", "墨西哥辣椒"],
  ["pico de gallo", "墨西哥番茄莎莎"], ["Tajín", "墨西哥塔辛香料"],
  ["Huevos Rancheros", "墨西哥牧場蛋"], ["Shakshuka", "北非番茄燉蛋"],
  ["Syrniki", "東歐起司煎餅"], ["Crudité", "法式生鮮冷盤"],
  ["Linguine Mancini", "Mancini 品牌扁麵"], ["Spaghetti Mancini", "Mancini 品牌義大利直麵"],
  ["bottarga", "義大利烏魚子"], ["stracciatella", "義大利絲綢起司"],
  ["Ossobuco", "義式燉小牛膝"], ["Fontina", "義大利芳提娜起司"],
  ["focaccia", "義大利佛卡夏麵包"], ["Parmigiano Reggiano", "義大利帕瑪森起司"],
  ["Niçoise", "法式尼斯風味"], ["velouté", "法式滑順濃湯"],
  ["Bouillabaisse", "法式海鮮湯"], ["Crème Brûlée", "法式烤布蕾"],
  ["Tiramisu", "義大利提拉米蘇"], ["Amaretto", "義大利杏仁利口酒"],
  ["mascarpone", "義大利馬斯卡彭起司"], ["Margherita", "義式瑪格麗特"],
  ["Gaeng Kati Puu Gub Bai Cha Plu", "泰式蒌葉紅咖哩蟹肉"],
  ["Gaeng Phed Ped Yang", "泰式紅咖哩烤鴨"], ["Goong Sarong Buer Tod", "泰式金絲炸蝦"],
  ["Yum Neu Yang", "泰式烤牛肉沙拉"], ["Muek Kratiem Prik Thai", "泰式蒜香胡椒魷魚"],
  ["Plar Goong Yang", "泰式烤蝦沙拉"], ["Massaman Nua", "泰式瑪莎曼牛肉咖哩"],
  ["Pla Sam Rod", "泰式三味魚"], ["Pu Nim Pat Phong Kra Ri", "泰式黃咖哩軟殼蟹"],
  ["Hmoo Ob Nahm Phueng", "泰式蜂蜜烤豬肋排"], ["Nue Yang Chim Chaeo", "泰式烤牛肉配酸辣醬"],
  ["Yum Pla Salmon", "泰式鮭魚沙拉"], ["Larb Gai Thod", "泰式炸雞肉拉帕"],
  ["Yum Ped Nahm Tok", "泰式酸辣烤鴨沙拉"], ["Yum Ma Kuea Yaw Nue Poo", "泰式蟹肉炙燒長茄"],
  ["Po Pia Pak", "泰式蔬菜春捲"], ["Som Tum Puu Nim", "泰式軟殼蟹青木瓜沙拉"],
  ["Tod Man Khaopod", "泰式炸玉米餅"], ["Kluay Tod", "泰式炸香蕉"],
  ["Tub Tim Siam", "泰式紅寶石甜品"], ["pâté en croûte", "法式酥皮肉派"],
  ["Donostiarra", "西班牙聖塞巴斯提安風味"], ["piparra", "巴斯克青辣椒"],
  ["empanada", "西班牙包餡麵點"], ["scamorza", "義大利斯卡莫札起司"],
  ["salchichón", "西班牙熟成香腸"], ["sobrasada", "西班牙可抹式豬肉腸"],
  ["rillettes", "法式慢煮肉醬"], ["Gilda", "巴斯克鯷魚辣椒串"],
  ["pincho", "西班牙一口小食"], ["Piquillo", "西班牙皮奎洛紅椒"],
  ["romesco", "西班牙堅果紅椒醬"], ["Patatas bravas", "西班牙辣味馬鈴薯"],
  ["aioli", "蒜味美乃滋"], ["marinière", "法式白酒海鮮醬"],
  ["Il Tricolore", "義大利三色"], ["pesto", "義大利羅勒青醬"]
]);

const foreignTermPattern = new RegExp(
  [...foreignMenuTerms.keys()]
    .sort((a, b) => b.length - a.length)
    .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|"),
  "giu"
);

function escapeHtml(value) {
  const element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
}

function annotateForeignTerms(text) {
  const meanings = new Map();
  const html = escapeHtml(text).replace(foreignTermPattern, match => {
    const entry = [...foreignMenuTerms].find(([term]) => term.toLocaleLowerCase() === match.toLocaleLowerCase());
    if (!entry) return match;
    meanings.set(entry[0], entry[1]);
    return `<span class="foreign-term" title="${entry[1]}">${match}</span>`;
  });
  return { html, meanings: [...meanings] };
}

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
    utterance.rate = 0.585;
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
        ${group.rows.map(row => {
          const annotated = annotateForeignTerms(row[0]);
          const glossary = annotated.meanings.length
            ? `<span class="foreign-note">非英文詞：${annotated.meanings.map(([term, meaning]) => `${term}＝${meaning}`).join("；")}</span>`
            : "";
          return `
          <div class="menu-example">
            <div>
              <p class="menu-original">${annotated.html}</p>
              <p class="menu-zh">${row[1]}</p>
            </div>
            <p>${row[2]}${glossary}</p>
            <button class="audio-button" type="button" data-speak="${row[0]}">播放</button>
          </div>
        `;
        }).join("")}
      </div>
    </article>
  `;

  qs("#examplePaginationTop").innerHTML = `
    <div class="menu-category-list" role="tablist" aria-label="菜單分類">
      ${data.examples.map((item, index) => {
        const label = item.title.replace("｜完整菜單原文", "").replace("｜加強例句", "");
        return `
          <button class="menu-category-button ${index === activeExamplePage ? "active" : ""}"
            type="button" role="tab" aria-selected="${index === activeExamplePage}"
            data-example-category="${index}">
            <span>${index + 1}</span>${label}
          </button>
        `;
      }).join("")}
    </div>
  `;

  qsa("[data-example-category]").forEach(button => {
    button.addEventListener("click", () => {
      activeExamplePage = Number(button.dataset.exampleCategory);
      renderExamples();
      qs("#exampleBoard").scrollIntoView({ behavior: "smooth", block: "start" });
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
