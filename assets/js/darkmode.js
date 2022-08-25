var mode = localStorage.getItem("mode");

if (mode === "dark") {
    document.body.classList.add("dark");
    document.querySelector('#theme-switch').innerHTML = "🌙";
} else if (mode === "light") {
    document.body.classList.remove("dark");
    document.querySelector('#theme-switch').innerHTML = "☀️";
} else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    document.body.classList.add("dark");
    document.querySelector('#theme-switch').innerHTML = "🌙";
    mode = "dark";
} else {
    mode = "light";
}

localStorage.setItem("mode", mode);

function switchMode(el) {
    const bodyClass = document.body.classList;
    bodyClass.contains("dark")
    ? ((el.innerHTML = "☀️"), bodyClass.remove("dark"), localStorage.setItem("mode", "light"))
    : ((el.innerHTML = "🌙"), bodyClass.add("dark"), localStorage.setItem("mode", "dark"));
}
