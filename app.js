//night mode functionality
let nightModeToggle = document.querySelector(".night-mode-btn");

nightModeToggle.addEventListener("click", ()=> {
    document.documentElement.classList.toggle("night-mode")
})
