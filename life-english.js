const lesson = window.LEARNING_DATA.videoLesson;
const deck = document.querySelector("#videoLessonDeck");
let activeGroupIndex = 0;

function escapeHtml(value) {
  const element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices.find(voice => voice.lang.toLowerCase().startsWith("en")) || null;
  utterance.lang = utterance.voice?.lang || "en-US";
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function renderLesson() {
  const activeGroup = lesson.groups[activeGroupIndex];
  deck.innerHTML = `
    <div class="video-lesson-tabs" role="tablist" aria-label="生活英文短句分類">
      ${lesson.groups.map((group, index) => `
        <button class="video-lesson-tab ${index === activeGroupIndex ? "active" : ""}"
          type="button" role="tab" aria-selected="${index === activeGroupIndex}"
          data-video-group="${index}">${escapeHtml(group.label)}</button>
      `).join("")}
    </div>
    <div class="video-lesson-heading">
      <span class="tag">${escapeHtml(activeGroup.tag)}</span>
      <p>${escapeHtml(lesson.description)}</p>
    </div>
    <div class="video-card-grid">
      ${activeGroup.items.map(([en, kk, zh]) => `
        <article class="video-card">
          <h2>${escapeHtml(en)}</h2>
          <p class="kk">[${escapeHtml(kk)}]</p>
          <p>${escapeHtml(zh)}</p>
          <button class="audio-button" type="button" data-speak="${escapeHtml(en)}">播放</button>
        </article>
      `).join("")}
    </div>
  `;
}

deck.addEventListener("click", event => {
  const groupButton = event.target.closest("[data-video-group]");
  if (groupButton) {
    activeGroupIndex = Number(groupButton.dataset.videoGroup);
    renderLesson();
    return;
  }

  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) speak(speakButton.dataset.speak);
});

renderLesson();
