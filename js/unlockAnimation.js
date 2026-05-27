const coverPaper = document.getElementById("folderCover");

function unlockAnimation() {

        coverPaper.classList.add("folder-cover-open");

        setTimeout(() => {
            coverPaper.style.display = "none";
        }, 2700);

        sessionStorage.setItem("animationPlayed", "true")
}

const animationPlayed = sessionStorage.getItem("animationPlayed")

if(animationPlayed !== "true") {
    setTimeout(() => {
        unlockAnimation();
    }, 500);
} else {
    coverPaper.style.display = "none";
}