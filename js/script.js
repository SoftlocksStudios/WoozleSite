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

    document.querySelector(`.tablink[data-page="${pageName}"]`)?.classList.add("active");

    window.location.hash = pageName;
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.tablink').forEach(tab => {
        tab.addEventListener('click', () => {
            const page = tab.dataset.page;
            openPage(page);
        });
    });

    let pageFromHash = window.location.hash.replace("#", "");

    if (pageFromHash && document.getElementById(pageFromHash)) {
        openPage(pageFromHash);
    } else {
        openPage("home");
    }
});


window.addEventListener("hashchange", () => {
    location.reload();
});
