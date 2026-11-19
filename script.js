// ===== TROCA DE IDIOMA: PORTUGUÊS <-> INGLÊS =====
// Cada linha diz: "onde está o texto" e "como fica em inglês" (pela mesma ordem da página).

const botao = document.getElementById("idioma");
let idioma = "pt";

const traducoes = [
  // Menu
  ["nav ul li a", ["Home", "About Me", "Skills", "Projects", "Contacts"]],

  // Início
  [".hero h1", ["Hello, I am Dirson A.D Zita"]],
  [".hero p", ["IT Support Technician"]],
  [".botao", ["View projects"]],

  // Sobre Mim
  ["#sobre h2", ["About Me"]],
  ["#sobre p", [
"I am an IT Support Technician student, and I like being the person people turn to when the computer will not turn on, the network goes down or the page will not open. I learn to diagnose the problem, find the cause and get everything working again. That is the same way of thinking I use in another area where I work: electricity. As an electrician, in industrial and residential installations, I learned that a good technician does not guess: he tests, finds the source of the fault and only leaves when everything works again. I bring these two worlds together because the logic is the same: when they work well, nobody notices; when they fail, everything stops. I am interested in technical support, networks and web development, and this portfolio shows what I have already built and what I still plan to build."
  ]],

  // Habilidades
  ["#habilidades h2", ["Skills"]],
  ["th", ["Area", "Skill"]],
  ["td", [
"IT", "Technical support and maintenance",
"IT", "HTML and CSS",
"IT", "Computer networks",
"IT", "Microsoft Office",
"Electricity", "Electrical installations",
"Administration", "Data entry"
  ]],

  // Projectos
  ["#projectos h2", ["Projects"]],
  [".projecto h3", [
"Inventory Management with QR Code",
"DZIT Technologies",
"DZ Multi Service DZ"
  ]],
  [".projecto p", [
"A system to manage the inventory and technical support requests of the ICT Laboratory, with a QR Code on each piece of equipment. Built with PHP, MySQL, HTML, CSS and JavaScript.",
"Poster promoting computer maintenance services: cleaning, operating system installation, virus removal and network configuration.",
"Website presenting construction, electrical, plumbing and painting services, with a button to request a quote."
  ]],

  // Contactos
  ["#contactos h2", ["Contacts"]],
  ["#contactos > p", ["Stop keeping your ideas only on paper. Get in touch and let's work together!"]],
  [".contactos li:nth-child(3) a", ["Send Message"]],
  [".contactos li:nth-child(4) a", ["My profile"]],

  // Rodapé
  ["footer p", ["© 2026 Dirson Zita. All rights reserved."]]
];

// Texto alternativo das imagens
const alternativos = [
  [".foto", ["Photo of Dirson Zita"]],
  [".projecto img", [
"Integrated Project: Inventory Management with QR Code",
"DZIT Technologies poster",
"DZ Multi Service DZ website"
  ]]
];

// Nomes dos contactos (o texto que vem antes do link)
const rotulos = ["Email: ", "Phone: ", "WhatsApp: ", "Facebook: "];

const tituloPt = document.title;

function aplicarIdioma(lingua) {
  const ingles = lingua === "en";

  // textos
  traducoes.forEach(function (grupo) {
    const elementos = document.querySelectorAll(grupo[0]);
    elementos.forEach(function (el, i) {
      if (el.dataset.pt === undefined) el.dataset.pt = el.textContent;
      if (grupo[1][i] !== undefined) {
        el.textContent = ingles ? grupo[1][i] : el.dataset.pt;
      }
    });
  });

  // texto alternativo das imagens
  alternativos.forEach(function (grupo) {
    document.querySelectorAll(grupo[0]).forEach(function (img, i) {
      if (img.dataset.pt === undefined) img.dataset.pt = img.alt;
      if (grupo[1][i] !== undefined) {
        img.alt = ingles ? grupo[1][i] : img.dataset.pt;
      }
    });
  });

  // nomes dos contactos (E-mail, Telefone...)
  document.querySelectorAll(".contactos li").forEach(function (li, i) {
    const no = li.firstChild;
    if (no && no.nodeType === 3 && rotulos[i]) {
      if (li.dataset.pt === undefined) li.dataset.pt = no.nodeValue;
      no.nodeValue = ingles ? rotulos[i] : li.dataset.pt;
    }
  });

  document.title = ingles ? "Portfolio - Dirson Zita" : tituloPt;
  document.documentElement.lang = lingua;
  botao.textContent = ingles ? "PT" : "EN";
  idioma = lingua;

  try {
    localStorage.setItem("idioma", lingua);
  } catch (erro) {}
}

botao.addEventListener("click", function () {
  aplicarIdioma(idioma === "pt" ? "en" : "pt");
});

// lembra a escolha da última visita
try {
  if (localStorage.getItem("idioma") === "en") {
    aplicarIdioma("en");
  }
} catch (erro) {}

