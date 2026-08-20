// Status bar clock — small nod to the waybar/system-monitor aesthetic.
function tickClock() {
  const el = document.querySelector("[data-clock]");
  if (!el) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  el.textContent = `${hh}:${mm}`;
}
tickClock();
setInterval(tickClock, 15000);
