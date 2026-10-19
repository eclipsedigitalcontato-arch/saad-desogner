// Personalize seus links aqui. Não publique contatos fictícios como se fossem reais.
const CONTACT = {
  email: "", // Exemplo: "seunome@dominio.com"
  instagram: "", // Exemplo: "https://instagram.com/seuperfil"
};

const menuButton = document.querySelector("#menuToggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  menuButton.textContent = open ? "✕" : "☰";
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  menuButton.textContent = "☰";
}));
document.querySelector("#year").textContent = new Date().getFullYear();

const emailLink = document.querySelector("[data-placeholder-email]");
const instagramLink = document.querySelector("[data-placeholder-social]");
if (CONTACT.email) {
  emailLink.href = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("Vamos criar um projeto");
} else {
  emailLink.href = "#contato";
  emailLink.textContent = "E-mail em breve";
  emailLink.setAttribute("aria-label", "E-mail ainda não configurado");
  emailLink.addEventListener("click", e => e.preventDefault());
}
if (CONTACT.instagram) {
  instagramLink.href = CONTACT.instagram;
} else {
  instagramLink.removeAttribute("target");
  instagramLink.removeAttribute("rel");
  instagramLink.removeAttribute("href");
  instagramLink.textContent = "Instagram em breve";
}
