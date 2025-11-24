const DEFAULT_CLOCKS = 5;
const TIMEZONE_OPTIONS = [
  { label: "北京 🇨🇳", zone: "Asia/Shanghai" },
  { label: "东京 🇯🇵", zone: "Asia/Tokyo" },
  { label: "首尔 🇰🇷", zone: "Asia/Seoul" },
  { label: "悉尼 🇦🇺", zone: "Australia/Sydney" },
  { label: "惠灵顿 🇳🇿", zone: "Pacific/Auckland" },
  { label: "新加坡 🇸🇬", zone: "Asia/Singapore" },
  { label: "曼谷 🇹🇭", zone: "Asia/Bangkok" },
  { label: "迪拜 🇦🇪", zone: "Asia/Dubai" },
  { label: "新德里 🇮🇳", zone: "Asia/Kolkata" },
  { label: "莫斯科 🇷🇺", zone: "Europe/Moscow" },
  { label: "伊斯坦布尔 🇹🇷", zone: "Europe/Istanbul" },
  { label: "约翰内斯堡 🇿🇦", zone: "Africa/Johannesburg" },
  { label: "开罗 🇪🇬", zone: "Africa/Cairo" },
  { label: "巴黎 🇫🇷", zone: "Europe/Paris" },
  { label: "伦敦 🇬🇧", zone: "Europe/London" },
  { label: "柏林 🇩🇪", zone: "Europe/Berlin" },
  { label: "圣保罗 🇧🇷", zone: "America/Sao_Paulo" },
  { label: "纽约 🇺🇸", zone: "America/New_York" },
  { label: "芝加哥 🇺🇸", zone: "America/Chicago" },
  { label: "丹佛 🇺🇸", zone: "America/Denver" },
  { label: "洛杉矶 🇺🇸", zone: "America/Los_Angeles" },
  { label: "温哥华 🇨🇦", zone: "America/Vancouver" },
  { label: "墨西哥城 🇲🇽", zone: "America/Mexico_City" },
  { label: "布宜诺斯艾利斯 🇦🇷", zone: "America/Argentina/Buenos_Aires" },
  { label: "夏威夷 🇺🇸", zone: "Pacific/Honolulu" },
];

const state = {
  clocks: [],
  use24h: true,
  darkMode: false,
  rendered: [],
};

const clockGrid = document.getElementById("clockGrid");
const template = document.getElementById("clockTemplate");
const formatToggle = document.getElementById("formatToggle");
const themeToggle = document.getElementById("themeToggle");
const addClockBtn = document.getElementById("addClockBtn");

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
  formatToggle.addEventListener("change", handleFormatToggle);
  themeToggle.addEventListener("change", handleThemeToggle);
  addClockBtn.addEventListener("click", handleAddClock);
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
  const nextIndex = state.clocks.length % TIMEZONE_OPTIONS.length;
  const nextZone = TIMEZONE_OPTIONS[nextIndex]?.zone ?? TIMEZONE_OPTIONS[0].zone;
  state.clocks.push(createClock(nextZone));
  renderCards();
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

