const DEFAULT_CLOCKS = 5;
const TIMEZONE_OPTIONS = [
  { label: "北京 🇨🇳", zone: "Asia/Shanghai" },
  { label: "东京 🇯🇵", zone: "Asia/Tokyo" },
  { label: "大阪 🇯🇵", zone: "Asia/Tokyo" },
  { label: "首尔 🇰🇷", zone: "Asia/Seoul" },
  { label: "新加坡 🇸🇬", zone: "Asia/Singapore" },
  { label: "曼谷 🇹🇭", zone: "Asia/Bangkok" },
  { label: "吉隆坡 🇲🇾", zone: "Asia/Kuala_Lumpur" },
  { label: "雅加达 🇮🇩", zone: "Asia/Jakarta" },
  { label: "马尼拉 🇵🇭", zone: "Asia/Manila" },
  { label: "胡志明市 🇻🇳", zone: "Asia/Ho_Chi_Minh" },
  { label: "加德满都 🇳🇵", zone: "Asia/Kathmandu" },
  { label: "达卡 🇧🇩", zone: "Asia/Dhaka" },
  { label: "新德里 🇮🇳", zone: "Asia/Kolkata" },
  { label: "科伦坡 🇱🇰", zone: "Asia/Colombo" },
  { label: "卡拉奇 🇵🇰", zone: "Asia/Karachi" },
  { label: "迪拜 🇦🇪", zone: "Asia/Dubai" },
  { label: "多哈 🇶🇦", zone: "Asia/Qatar" },
  { label: "利雅得 🇸🇦", zone: "Asia/Riyadh" },
  { label: "特拉维夫 🇮🇱", zone: "Asia/Jerusalem" },
  { label: "安曼 🇯🇴", zone: "Asia/Amman" },
  { label: "伊斯坦布尔 🇹🇷", zone: "Europe/Istanbul" },
  { label: "莫斯科 🇷🇺", zone: "Europe/Moscow" },
  { label: "圣彼得堡 🇷🇺", zone: "Europe/Moscow" },
  { label: "开罗 🇪🇬", zone: "Africa/Cairo" },
  { label: "卡萨布兰卡 🇲🇦", zone: "Africa/Casablanca" },
  { label: "拉各斯 🇳🇬", zone: "Africa/Lagos" },
  { label: "阿克拉 🇬🇭", zone: "Africa/Accra" },
  { label: "内罗毕 🇰🇪", zone: "Africa/Nairobi" },
  { label: "约翰内斯堡 🇿🇦", zone: "Africa/Johannesburg" },
  { label: "巴黎 🇫🇷", zone: "Europe/Paris" },
  { label: "马德里 🇪🇸", zone: "Europe/Madrid" },
  { label: "罗马 🇮🇹", zone: "Europe/Rome" },
  { label: "米兰 🇮🇹", zone: "Europe/Rome" },
  { label: "苏黎世 🇨🇭", zone: "Europe/Zurich" },
  { label: "柏林 🇩🇪", zone: "Europe/Berlin" },
  { label: "慕尼黑 🇩🇪", zone: "Europe/Berlin" },
  { label: "阿姆斯特丹 🇳🇱", zone: "Europe/Amsterdam" },
  { label: "布鲁塞尔 🇧🇪", zone: "Europe/Brussels" },
  { label: "哥本哈根 🇩🇰", zone: "Europe/Copenhagen" },
  { label: "斯德哥尔摩 🇸🇪", zone: "Europe/Stockholm" },
  { label: "赫尔辛基 🇫🇮", zone: "Europe/Helsinki" },
  { label: "雅典 🇬🇷", zone: "Europe/Athens" },
  { label: "布拉格 🇨🇿", zone: "Europe/Prague" },
  { label: "布达佩斯 🇭🇺", zone: "Europe/Budapest" },
  { label: "维也纳 🇦🇹", zone: "Europe/Vienna" },
  { label: "都柏林 🇮🇪", zone: "Europe/Dublin" },
  { label: "里斯本 🇵🇹", zone: "Europe/Lisbon" },
  { label: "雷克雅未克 🇮🇸", zone: "Atlantic/Reykjavik" },
  { label: "伦敦 🇬🇧", zone: "Europe/London" },
  { label: "爱丁堡 🇬🇧", zone: "Europe/London" },
  { label: "圣保罗 🇧🇷", zone: "America/Sao_Paulo" },
  { label: "里约热内卢 🇧🇷", zone: "America/Sao_Paulo" },
  { label: "布宜诺斯艾利斯 🇦🇷", zone: "America/Argentina/Buenos_Aires" },
  { label: "圣地亚哥 🇨🇱", zone: "America/Santiago" },
  { label: "利马 🇵🇪", zone: "America/Lima" },
  { label: "波哥大 🇨🇴", zone: "America/Bogota" },
  { label: "墨西哥城 🇲🇽", zone: "America/Mexico_City" },
  { label: "蒙特利尔 🇨🇦", zone: "America/Toronto" },
  { label: "多伦多 🇨🇦", zone: "America/Toronto" },
  { label: "渥太华 🇨🇦", zone: "America/Toronto" },
  { label: "温哥华 🇨🇦", zone: "America/Vancouver" },
  { label: "纽约 🇺🇸", zone: "America/New_York" },
  { label: "波士顿 🇺🇸", zone: "America/New_York" },
  { label: "华盛顿 🇺🇸", zone: "America/New_York" },
  { label: "迈阿密 🇺🇸", zone: "America/New_York" },
  { label: "亚特兰大 🇺🇸", zone: "America/New_York" },
  { label: "芝加哥 🇺🇸", zone: "America/Chicago" },
  { label: "达拉斯 🇺🇸", zone: "America/Chicago" },
  { label: "丹佛 🇺🇸", zone: "America/Denver" },
  { label: "菲尼克斯 🇺🇸", zone: "America/Phoenix" },
  { label: "洛杉矶 🇺🇸", zone: "America/Los_Angeles" },
  { label: "旧金山 🇺🇸", zone: "America/Los_Angeles" },
  { label: "西雅图 🇺🇸", zone: "America/Los_Angeles" },
  { label: "火奴鲁鲁 🇺🇸", zone: "Pacific/Honolulu" },
  { label: "奥克兰 🇳🇿", zone: "Pacific/Auckland" },
  { label: "惠灵顿 🇳🇿", zone: "Pacific/Auckland" },
  { label: "悉尼 🇦🇺", zone: "Australia/Sydney" },
  { label: "墨尔本 🇦🇺", zone: "Australia/Melbourne" },
  { label: "布里斯班 🇦🇺", zone: "Australia/Brisbane" },
  { label: "阿德莱德 🇦🇺", zone: "Australia/Adelaide" },
  { label: "珀斯 🇦🇺", zone: "Australia/Perth" },
];

const state = {
  clocks: [],
  use24h: true,
  darkMode: false,
  rendered: [],
  cardSize: "md",
};

const clockGrid = document.getElementById("clockGrid");
const template = document.getElementById("clockTemplate");
const formatToggle = document.getElementById("formatToggle");
const themeToggle = document.getElementById("themeToggle");
const addClockBtn = document.getElementById("addClockBtn");
const addModal = document.getElementById("addModal");
const closeAddModalBtn = document.getElementById("closeAddModalBtn");
const citySearchInput = document.getElementById("citySearchInput");
const cityResults = document.getElementById("cityResults");
const cardSizeSelect = document.getElementById("cardSizeSelect");

let clockIdCounter = 0;

init();

function init() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  state.darkMode = prefersDark;
  themeToggle.checked = prefersDark;
  document.body.classList.toggle("dark", prefersDark);

  state.clocks = Array.from({ length: DEFAULT_CLOCKS }, (_, idx) => {
    const fallback = TIMEZONE_OPTIONS[idx] ?? TIMEZONE_OPTIONS[0];
    return createClock(fallback.zone);
  });

  renderCards();
  applyCardSize(state.cardSize);
  cardSizeSelect.value = state.cardSize;
  formatToggle.addEventListener("change", handleFormatToggle);
  themeToggle.addEventListener("change", handleThemeToggle);
  cardSizeSelect.addEventListener("change", handleCardSizeChange);
  addClockBtn.addEventListener("click", handleAddClock);
  closeAddModalBtn.addEventListener("click", closeAddModal);
  addModal.addEventListener("click", (event) => {
    if (event.target === addModal) closeAddModal();
  });
  citySearchInput.addEventListener("input", handleCitySearch);
  citySearchInput.addEventListener("keydown", handleCitySearchKeydown);
  document.addEventListener("keydown", handleEscapeToClose);
  renderSearchResults();
  setInterval(tick, 1000);
  tick();
}

function renderCards() {
  clockGrid.innerHTML = "";
  if (!state.clocks.length) {
    clockGrid.appendChild(createEmptyState());
    state.rendered = [];
    return;
  }

  state.rendered = state.clocks.map((clock) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const select = node.querySelector(".city-select");
    const timezoneLabel = node.querySelector(".timezone-label");
    const timeNode = node.querySelector(".time");
    const dateNode = node.querySelector(".date");
    const removeBtn = node.querySelector(".remove-btn");

    populateSelect(select, clock.zone);
    timezoneLabel.textContent = clock.zone;

    select.addEventListener("change", () => {
      clock.zone = select.value;
      timezoneLabel.textContent = clock.zone;
      updateCard({ zone: clock.zone, timeNode, dateNode });
    });

    removeBtn.addEventListener("click", () => handleRemoveClock(clock.id));

    clockGrid.appendChild(node);
    updateCard({ zone: clock.zone, timeNode, dateNode });
    return { clock, timeNode, dateNode };
  });
}

function createEmptyState() {
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.innerHTML = `
    <p>暂无时钟卡片</p>
    <p>点击「+ 添加地点」开始创建你的列表。</p>
  `;
  return empty;
}

function createClock(zone) {
  return {
    id: `clock-${clockIdCounter++}`,
    zone,
  };
}

function handleAddClock() {
  openAddModal();
}

function handleRemoveClock(id) {
  state.clocks = state.clocks.filter((clock) => clock.id !== id);
  renderCards();
}

function populateSelect(select, activeZone) {
  select.innerHTML = "";
  TIMEZONE_OPTIONS.forEach(({ label, zone }) => {
    const option = document.createElement("option");
    option.value = zone;
    option.textContent = label;
    if (zone === activeZone) option.selected = true;
    select.appendChild(option);
  });
}

function handleFormatToggle() {
  state.use24h = !formatToggle.checked;
  tick();
}

function handleThemeToggle() {
  state.darkMode = themeToggle.checked;
  document.body.classList.toggle("dark", state.darkMode);
}

function handleCardSizeChange() {
  state.cardSize = cardSizeSelect.value;
  applyCardSize(state.cardSize);
}

function tick() {
  const now = new Date();
  state.rendered.forEach(({ clock, timeNode, dateNode }) => {
    updateCard({ zone: clock.zone, timeNode, dateNode, now });
  });
}

function updateCard({ zone, timeNode, dateNode, now = new Date() }) {
  const formatter = new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !state.use24h,
    timeZone: zone,
  });
  const dateFormatter = new Intl.DateTimeFormat("zh-CN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: zone,
  });

  timeNode.textContent = formatter.format(now);
  dateNode.textContent = dateFormatter.format(now);
}

function applyCardSize(size) {
  clockGrid.dataset.size = size;
}

function openAddModal() {
  addModal.classList.add("is-visible");
  addModal.setAttribute("aria-hidden", "false");
  citySearchInput.value = "";
  renderSearchResults();
  setTimeout(() => citySearchInput.focus(), 0);
}

function closeAddModal() {
  addModal.classList.remove("is-visible");
  addModal.setAttribute("aria-hidden", "true");
  citySearchInput.blur();
}

function handleCitySearch(event) {
  renderSearchResults(event.target.value);
}

function handleCitySearchKeydown(event) {
  if (event.key === "Enter") {
    const firstResult = cityResults.querySelector(".result-item");
    if (firstResult) {
      firstResult.click();
    }
  }
}

function handleEscapeToClose(event) {
  if (event.key === "Escape" && addModal.classList.contains("is-visible")) {
    closeAddModal();
  }
}

function renderSearchResults(query = "") {
  const normalized = query.trim().toLowerCase();
  const results = TIMEZONE_OPTIONS.filter(({ label, zone }) => {
    if (!normalized) return true;
    return (
      label.toLowerCase().includes(normalized) ||
      zone.toLowerCase().includes(normalized)
    );
  });

  cityResults.innerHTML = "";
  if (!results.length) {
    const empty = document.createElement("p");
    empty.className = "add-modal__empty";
    empty.textContent = "未找到匹配的城市，请尝试其他关键词。";
    cityResults.appendChild(empty);
    return;
  }

  results.forEach(({ label, zone }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "result-item";
    button.innerHTML = `
      <span class="result-item__label">${label}</span>
      <span class="result-item__zone">${zone}</span>
    `;
    button.addEventListener("click", () => handleCityPick(zone));
    cityResults.appendChild(button);
  });
}

function handleCityPick(zone) {
  state.clocks.push(createClock(zone));
  renderCards();
  closeAddModal();
}

