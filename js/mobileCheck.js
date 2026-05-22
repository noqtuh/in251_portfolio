const mobileHint = document.getElementById("mobileHint");
const closeHint = document.getElementById("closeHint");
const mobileAccepted = localStorage.getItem("mobileAcknowledge");

if (screen.width <= 3000) {
    console.log("screen to small")
    if (mobileAccepted !== "true" ) {
        mobileHint.classList.add("is-visible");
    }
}

closeHint.addEventListener("click", () => {
    mobileHint.classList.remove("is-visible");
    localStorage.setItem("mobileAcknowledge", "true");
});