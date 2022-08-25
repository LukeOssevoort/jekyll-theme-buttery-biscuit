// Get stored style mode
var mode = localStorage.getItem("mode");

// Check mode and set styling
if (mode === "dark") {
    // Saved darkmode
    document.body.classList.add("dark");
    document.querySelector('#theme-switch').innerHTML = "🌙";
} else if (mode === "light") {
    // Saved lightmode
    document.body.classList.remove("dark");
    document.querySelector('#theme-switch').innerHTML = "☀️";
} else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    // No saved mode, prefers dark
    document.body.classList.add("dark");
    document.querySelector('#theme-switch').innerHTML = "🌙";
    mode = "dark";
} else {
    // No saved mode, prefers light
    mode = "light";
}

// Store mode
localStorage.setItem("mode", mode);

// Button for switching theme
function switchMode(el) {
    const bodyClass = document.body.classList;
    bodyClass.contains("dark")
    ? ((el.innerHTML = "☀️"), bodyClass.remove("dark"), localStorage.setItem("mode", "light"))
    : ((el.innerHTML = "🌙"), bodyClass.add("dark"), localStorage.setItem("mode", "dark"));
}
