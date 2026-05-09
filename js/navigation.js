const tabs = document.querySelectorAll(".folder-tabs button");
const panels = document.querySelectorAll(".paper-page");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Definiert welcher Tab angeklickt wurde
        const target = tab.dataset.tab;

        // Entfernt active styles für alle Tab-Buttons
        tabs.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });

        // Entfernt active styles für alle Panels
        panels.forEach((panel) => {
            panel.classList.remove("active");
            panel.hidden = true;
        });

        // Durch den eventlistener wird der aktuell geklickte Button active gesetzt.
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        // Sucht das passende Panel zum angeklickten Tab
        const activePanel = document.querySelector(`[data-panel="${target}"]`);

        // Blendet das passende Panel ein und setzt den aktiven Style
        activePanel.hidden = false;
        activePanel.classList.add("active");
    });
});