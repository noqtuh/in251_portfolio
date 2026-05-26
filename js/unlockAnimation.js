function unlockAnimation() {
    const coverPaper = document.getElementById("folderCover");

    coverPaper.classList.add("folder-cover-open");

    setTimeout(() => {
        coverPaper.style.display = "none";
    }, 2700);
}

setTimeout(() => {
    unlockAnimation();
}, 1000);