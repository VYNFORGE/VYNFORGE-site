// Translations Data
const translations = {
    ua: {
        slogan: "ВИРІЗАЄМО ІДЕЇ",
        hero_desc: "Прецизійна плоттерна порізка вінілових плівок. Векторні авто-наклейки, брендування вітрин та графічна зовнішня реклама у Запоріжжі.",
        btn_telegram: "НАПИСАТИ В TELEGRAM // FAST CHAT",
        services_title: "НАПРЯМКИ РОБІТ",
        s1_title: "AUTOMOTIVE & MOTORSPORT",
        s1_desc: "Написи на лобове скло, бокові смуги, нікнейми, кастомні елементи, плоттерні полоси та вінілова графіка на кузов та мототехніку.",
        s2_title: "STOREFRONTS & GLASS",
        s2_desc: "Брендування вітрин магазинів, кафе та студій. Фасадна графіка, графіки роботи, векторні логотипи та акційні написи з винілу.",
        s3_title: "COMMERCIAL & OUTDOOR",
        s3_desc: "Зовнішня реклама з векторних наклейок, брендування комерційного транспорту, покажчики та текстові рекламні блоки.",
        s4_title: "CUSTOM & DECALS",
        s4_desc: "Плотерна порізка авторських стікерпаків, кастомних векторних знаків, наклейок на гаджети, інструмент та екіпірування.",
        portfolio_title: "ГАЛЕРЕЯ ПРОЄКТІВ",
        f_all: "УСІ РОБОТИ",
        f_auto: "АВТО / МОТО",
        f_glass: "ВІТРИНИ",
        f_custom: "КАСТОМ",
        flow_title: "ПОРЯДОК РОБОТИ",
        w1_title: "МАКЕТ ТА РОЗМІРИ",
        w1_desc: "Надсилаєте векторний файл (.ai, .cdr, .eps, .svg) або фото із бажаними розмірами в Telegram.",
        w2_title: "ПОРІЗКА ТА ВИБІРКА",
        w2_desc: "Виконуємо точну порізку на плотері, професійну вибірку облою та затяжку в монтажну плівку.",
        w3_title: "ОТРИМАННЯ",
        w3_desc: "Забираєте готові до поклейки вироби у Запоріжжі або отримуєте Новою Поштою."
    },
    ru: {
        slogan: "ВЫРЕЗАЕМ ИДЕИ",
        hero_desc: "Прецизионная плоттерная порезка виниловых пленок. Векторные авто-наклейки, брендирование витрин и графическая наружная реклама в Запорожье.",
        btn_telegram: "НАПИСАТЬ В TELEGRAM // FAST CHAT",
        services_title: "НАПРАВЛЕНИЯ РАБОТ",
        s1_title: "AUTOMOTIVE & MOTORSPORT",
        s1_desc: "Надписи на лобовое стекло, боковые полосы, никнеймы, кастомные элементы, плоттерные полосы и виниловая графика на кузов и мототехнику.",
        s2_title: "STOREFRONTS & GLASS",
        s2_desc: "Брендирование витрин магазинов, кафе и студий. Фасадная графика, графики работы, векторные логотипы и акционные надписи из винила.",
        s3_title: "COMMERCIAL & OUTDOOR",
        s3_desc: "Наружная реклама из векторных наклеек, брендирование коммерческого транспорта, указатели и текстовые рекламные блоки.",
        s4_title: "CUSTOM & DECALS",
        s4_desc: "Плоттерная порезка авторских стикерпаков, кастомных векторных знаков, наклеек на гаджеты, инструмент и экипировку.",
        portfolio_title: "ГАЛЕРЕЯ ПРОЕКТОВ",
        f_all: "ВСЕ РАБОТЫ",
        f_auto: "АВТО / МОТО",
        f_glass: "ВИТРИНЫ",
        f_custom: "КАСТОМ",
        flow_title: "ПОРЯДОК РАБОТЫ",
        w1_title: "МАКЕТ И РАЗМЕРЫ",
        w1_desc: "Отправляете векторный файл (.ai, .cdr, .eps, .svg) или фото с желаемыми размерами в Telegram.",
        w2_title: "ПОРЕЗКА И ВЫБОРКА",
        w2_desc: "Выполняем точную порезку на плоттере, профессиональную выборку облоя и затяжку в монтажную пленку.",
        w3_title: "ПОЛУЧЕНИЕ",
        w3_desc: "Забираете готовые к поклейке изделия в Запорожье или получаете Новой Почтой."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');

            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
        });
    });

    // Portfolio Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
