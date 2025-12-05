// Практическая работа 7
// Переключение представлений и состояние страницы

document.addEventListener("DOMContentLoaded", function () {
    const page = document.querySelector(".page");
    const viewLinks = document.querySelectorAll(".nav-link--view");
    const billingButtons = document.querySelectorAll(".billing-btn");

    const DESKTOP_BREAKPOINT = 900; // ширина, ниже которой считаем экран мобильным

    // ----- Переключение Desktop / Mobile -----
    function setView(view, saveToStorage = true) {
        if (!page) return;
        page.dataset.currentView = view;

        viewLinks.forEach((link) => {
            link.classList.toggle("is-active", link.dataset.view === view);
        });

        if (saveToStorage && window.localStorage) {
            localStorage.setItem("lab7-view", view);
        }
    }

    viewLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const view = this.dataset.view;
            setView(view);
        });
    });

    // Автоматическое переключение в зависимости от ширины окна
    function autoSwitchByWidth() {
        const width = window.innerWidth;
        const preferredView = width < DESKTOP_BREAKPOINT ? "mobile" : "desktop";
        setView(preferredView, false); // не перезаписываем сохранённый выбор
    }

    window.addEventListener("resize", autoSwitchByWidth);

    // Восстановление состояния представления из localStorage
    const savedView = window.localStorage && localStorage.getItem("lab7-view");
    if (savedView === "desktop" || savedView === "mobile") {
        setView(savedView, false);
    } else {
        autoSwitchByWidth();
    }

    // ----- Переключение периодичности оплаты (ежемесячно / ежегодно) -----
    function setBilling(mode) {
        if (!page) return;
        page.dataset.billing = mode;

        billingButtons.forEach((btn) => {
            btn.classList.toggle("is-active", btn.dataset.billing === mode);
        });

        if (window.localStorage) {
            localStorage.setItem("lab7-billing", mode);
        }
    }

    billingButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const mode = this.dataset.billing;
            setBilling(mode);
        });
    });

    // Восстановление выбранной периодичности
    const savedBilling = window.localStorage && localStorage.getItem("lab7-billing");
    if (savedBilling === "monthly" || savedBilling === "yearly") {
        setBilling(savedBilling);
    } else {
        setBilling("monthly");
    }
});
