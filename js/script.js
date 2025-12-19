function openPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = "none";
    });

    document.querySelectorAll('.tablink').forEach(tab => {
        tab.classList.remove("active");
    });

    const activePage = document.getElementById(pageName);
    if (activePage) {
        activePage.style.display = "block";
    }

    const activeTab = document.querySelector(`.tablink[data-page="${pageName}"]`);
    if (activeTab) {
        activeTab.classList.add("active");
    }

    if (window.location.hash !== "#" + pageName) {
        history.pushState(null, "", "#" + pageName);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.tablink').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault()
            const page = tab.dataset.page;
            if (page) openPage(page);
        });
    });

    const pageFromHash = window.location.hash.replace("#", "");
    if (pageFromHash && document.getElementById(pageFromHash)) {
        openPage(pageFromHash);
    } else {
        openPage("home");
    }

    const vid = document.querySelector("video");
    if (vid) {
        vid.muted = true;
        vid.playsInline = true;
        vid.play().catch(() => {});
    }
});

window.addEventListener("popstate", () => {
    const pageFromHash = window.location.hash.replace("#", "");
    if (pageFromHash && document.getElementById(pageFromHash)) {
        openPage(pageFromHash);
    }
});
