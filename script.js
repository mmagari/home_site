const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      contact: "Contact"
    },
    home: {
      title: "Frontend Developer",
      hello: "Hi, I’m Jarosław!",
      description:
        "An aspiring Frontend Developer focused on building responsive, user-friendly web interfaces using modern web technologies. I’m currently preparing for my first professional role in IT, actively looking for a frontend internship or junior position where I can grow through real-world projects and mentorship."
    },
    aboutMe: {
      title: "About me",
      description_p1: "Front-end development has been my long-term focus and passion. I’ve been learning programming consistently on my own and through structured education, developing solid foundations in HTML5, CSS3, SCSS, JavaScript, React, and Responsive Web Design. I pay close attention to clean code, accessibility, performance, and UI consistency.",
      description_p2: "In the past, I studied Computer Science, which gave me early exposure to programming and logical thinking, even though I ultimately chose a different professional path at that time. For several years, I worked as an automotive parts specialist, gaining hands-on experience in sales, customer service, data analysis, and ERP/CRM systems. This background shaped my problem-solving mindset, precision, and strong communication skills — all of which I now bring into front-end development.",
      description_p3: "I’m a curious and open-minded person with interests beyond tech, including dance, automatic watches, and discovering different cultures and places around the world. These interests help me stay creative, disciplined, and detail-oriented — qualities that translate well into UI development.",
      description_p4: "I’m highly motivated, eager to learn, and open to feedback. I’m looking for a supportive team and real project experience where I can develop as a Frontend Developer and contribute meaningful value from day one.",
    },
    projects: {
      project_badge: "Newest one",
      number_1: "Weather App",
      description_1: "Responsive weather application using OpenWeather API. Built with VUE and modern UI practices.",
      number_2: "BOGEA | FORM studio",
      description_2: "Responsive Website. Built with React and modern UI practices.",
      number_3: "Project name",
      description_3: "Short project 3 description",
      number_4: "Project name",
      description_4: "Short project 4 description",
    },
    contact: {
      title: "Let's talk",
      description: "Do you want to talk?<br>You can catch me here:",
    },
    footer: {
      description: "Designed by Jarosław Mankiewicz &copy All rights reserved."
    },
  },

  pl: {
  nav: {
    home: "Home",
    about: "O mnie",
    projects: "Projekty",
    contact: "Kontakt"
  },
  home: {
    title: "Frontend Developer",
    hello: "Cześć, jestem Jarosław!",
    description:
      "Początkujący Frontend Developer skupiony na tworzeniu responsywnych, przyjaznych dla użytkownika interfejsów webowych z wykorzystaniem nowoczesnych technologii. Obecnie przygotowuję się do swojej pierwszej roli zawodowej w IT i aktywnie poszukuję stażu lub stanowiska junior frontend, gdzie mógłbym rozwijać się poprzez realne projekty i pracę z doświadczonym zespołem."
  },
  aboutMe: {
    title: "O mnie",
    description_p1:
      "Front-end development jest moim długofalowym celem i pasją. Programowania uczę się systematycznie — zarówno samodzielnie, jak i w ramach uporządkowanej edukacji — budując solidne podstawy w HTML5, CSS3, SCSS, JavaScript, React oraz Responsive Web Design. Dużą wagę przykładam do czystego kodu, dostępności, wydajności i spójności interfejsu użytkownika.",
    description_p2:
      "W przeszłości studiowałem informatykę, co dało mi pierwsze doświadczenia z programowaniem oraz rozwinęło logiczne myślenie, mimo że ostatecznie obrałem wtedy inną ścieżkę zawodową. Przez kilka lat pracowałem jako specjalista ds. części samochodowych, zdobywając praktyczne doświadczenie w sprzedaży, obsłudze klienta, analizie danych oraz pracy z systemami ERP i CRM. To doświadczenie ukształtowało moje podejście do rozwiązywania problemów, dokładność oraz umiejętności komunikacyjne — które dziś wykorzystuję w front-end developmentcie.",
    description_p3:
      "Jestem osobą ciekawą świata i otwartą na nowe doświadczenia. Poza technologią interesuję się tańcem, zegarkami automatycznymi oraz odkrywaniem różnych kultur i miejsc na świecie. Te pasje pomagają mi zachować kreatywność, dyscyplinę i dbałość o detale — cechy bardzo przydatne w pracy nad interfejsem użytkownika.",
    description_p4:
      "Jestem zmotywowany, chętny do nauki i otwarty na feedback. Szukam zespołu oraz realnego doświadczenia projektowego, w którym mógłbym rozwijać się jako Frontend Developer i wnosić realną wartość od pierwszego dnia."
  },
  projects: {
    project_badge: "Najnowższy projekt",
    number_1: "Aplikacja pogodowa",
    description_1: "Responsive weather application using OpenWeather API. Built with VUE and modern UI practices.",
    number_2: "Bogea | Form studio",
    description_2: "Responsive Website. Built with React and modern UI practices.",
    number_3: "Projekt 3 nazwa",
    description_3: "Krótki opis 3 projektu",
    number_4: "Projekt 4 nazwa",
    description_4: "Krótki opis 4 projektu"
  },
  contact: {
    title: "Porozmawiajmy",
    description: "Chcesz porozmawiać?<br>Znajdziesz mnie tutaj:"
  },
  footer: {
    description: "Zaprojektowane przez J.Mankiewicz &copy; Wszelkie prawa zastrzeżone."
  }
}
};

const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

function showSidebar() {
  document.querySelector('.sidebar').classList.add('active');
  document.querySelector('.overlay').classList.add('active');
}

function hideSidebar() {
  document.querySelector('.sidebar').classList.remove('active');
  document.querySelector('.overlay').classList.remove('active');
}

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n.split(".");
    let text = translations[lang];

    key.forEach(k => text = text[k]);

    el.innerHTML = text; // ⬅️ ważne, patrz PROBLEM 3
  });

  localStorage.setItem("lang", lang);
  updateLangUI(lang); // ⬅️ TU
}


document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

function updateLangUI(lang) {
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

const menuLinks = document.querySelectorAll('[data-section]');
const sections = document.querySelectorAll('.section');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = link.dataset.section;

    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(target)?.classList.add('active');

    menuLinks.forEach(l => l.classList.remove('active'));
    document
      .querySelectorAll(`[data-section="${target}"]`)
      .forEach(l => l.classList.add('active'));

    hideSidebar();
  });
});

// ⬇️ TYLKO RAZ
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button');

  if (!sidebar.classList.contains('active')) return;

  if (
    sidebar.contains(e.target) ||
    menuButton?.contains(e.target)
  ) {
    return;
  }

  hideSidebar();
});

