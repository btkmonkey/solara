const SERVER_IP = "play.solara.example";

const toast = document.getElementById("toast");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");

function showToast(message = "Server IP copied!") {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyIp() {
  try {
    await navigator.clipboard.writeText(SERVER_IP);
    showToast(`Copied ${SERVER_IP}`);
  } catch {
    showToast(`Server IP: ${SERVER_IP}`);
  }
}

["copyIpTop", "copyIpHero", "copyIpCard"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", copyIp);
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...nav.querySelectorAll("a")];

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 130;
  let current = "home";

  sections.forEach(section => {
    if (section.offsetTop <= scrollY) current = section.id;
  });

  navLinks.forEach(link => {
    const target = link.getAttribute("href").replace("#", "");
    link.classList.toggle("active", target === current);
  });
});
