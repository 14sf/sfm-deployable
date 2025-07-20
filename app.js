const translations = {
  fr: {
    heroTitle: "<span class='highlight'>SFM</span> – Songa Finance Manager",
    heroSubtitle: "Votre assistant personnel pour une gestion simple et efficace de vos finances.",
    startBtn: "Commencer",
    featuresTitle: "Fonctionnalités de SFM",
    feature1Title: "📊 Suivi des dépenses",
    feature1Text: "Visualisez où va votre argent en temps réel.",
    feature2Title: "💡 Budgets intelligents",
    feature2Text: "Créez et suivez des budgets personnalisés.",
    feature3Title: "🔒 Sécurité renforcée",
    feature3Text: "Vos données sont chiffrées et protégées.",
    feature4Title: "📈 Analytique financière",
    feature4Text: "Visualisez vos habitudes de dépense et économisez.",
    footer: "&copy; 2025 SFM – Tous droits réservés."
  },
  en: {
    heroTitle: "<span class='highlight'>SFM</span> – Songa Finance Manager",
    heroSubtitle: "Your personal assistant for simple and effective money management.",
    startBtn: "Get Started",
    featuresTitle: "SFM Features",
    feature1Title: "📊 Expense Tracking",
    feature1Text: "See where your money goes in real-time.",
    feature2Title: "💡 Smart Budgets",
    feature2Text: "Create and track custom budgets.",
    feature3Title: "🔒 Enhanced Security",
    feature3Text: "Your data is encrypted and protected.",
    feature4Title: "📈 Financial Analytics",
    feature4Text: "Analyze your spending habits and save.",
    footer: "&copy; 2025 SFM – All rights reserved."
  },
  rw: {
    heroTitle: "<span class='highlight'>SFM</span> – Songa Finance Manager",
    heroSubtitle: "Umufasha wawe mu micungire y’imari mu buryo bworoshye kandi bunoze.",
    startBtn: "Tangira",
    featuresTitle: "Ibyo SFM ikora",
    feature1Title: "📊 Gukurikirana amafaranga asohoka",
    feature1Text: "Reba aho amafaranga yawe ajya ako kanya.",
    feature2Title: "💡 Ingengo y’imari ifatika",
    feature2Text: "Tegura ingengo y’imari yawe uko ubyifuza.",
    feature3Title: "🔒 Umutekano w’amakuru",
    feature3Text: "Amakuru yawe ararinzwe kandi ntakuka.",
    feature4Title: "📈 Isesengura ry’imikoreshereze y’amafaranga",
    feature4Text: "Sobanukirwa n’imikoreshereze yawe, ubike.",
    footer: "&copy; 2025 SFM – Uburenganzira bwose burabitswe."
  },
  sw: {
    heroTitle: "<span class='highlight'>SFM</span> – Songa Finance Manager",
    heroSubtitle: "Msaidizi wako wa fedha rahisi na bora kusimamia matumizi.",
    startBtn: "Anza",
    featuresTitle: "Vipengele vya SFM",
    feature1Title: "📊 Ufuatiliaji wa matumizi",
    feature1Text: "Angalia matumizi yako papo hapo.",
    feature2Title: "💡 Bajeti za kisasa",
    feature2Text: "Unda na fuatilia bajeti zako kwa urahisi.",
    feature3Title: "🔒 Usalama wa data",
    feature3Text: "Taarifa zako zinalindwa na salama.",
    feature4Title: "📈 Takwimu za kifedha",
    feature4Text: "Tazama mwenendo wako wa matumizi na uokoe.",
    footer: "&copy; 2025 SFM – Haki zote zimehifadhiwa."
  }
};

const elements = {
  title: document.getElementById('hero-title'),
  subtitle: document.getElementById('hero-subtitle'),
  startBtn: document.getElementById('start-btn'),
  featuresTitle: document.getElementById('features-title'),
  f1t: document.getElementById('feature-1-title'),
  f1d: document.getElementById('feature-1-text'),
  f2t: document.getElementById('feature-2-title'),
  f2d: document.getElementById('feature-2-text'),
  f3t: document.getElementById('feature-3-title'),
  f3d: document.getElementById('feature-3-text'),
  f4t: document.getElementById('feature-4-title'),
  f4d: document.getElementById('feature-4-text'),
  footer: document.getElementById('footer-text')
};

document.getElementById('language').addEventListener('change', function () {
  const lang = this.value;
  const t = translations[lang];
  elements.title.innerHTML = t.heroTitle;
  elements.subtitle.textContent = t.heroSubtitle;
  elements.startBtn.textContent = t.startBtn;
  elements.featuresTitle.textContent = t.featuresTitle;
  elements.f1t.textContent = t.feature1Title;
  elements.f1d.textContent = t.feature1Text;
  elements.f2t.textContent = t.feature2Title;
  elements.f2d.textContent = t.feature2Text;
  elements.f3t.textContent = t.feature3Title;
  elements.f3d.textContent = t.feature3Text;
  elements.f4t.textContent = t.feature4Title;
  elements.f4d.textContent = t.feature4Text;
  elements.footer.innerHTML = t.footer;
});

// Carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();
