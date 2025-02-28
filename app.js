//night mode functionality
const nightModeToggle = document.querySelector(".night-mode-btn");



    document.addEventListener("DOMContentLoaded", () => {

                //  let doc = document.documentElement;
                
                //  console.log(nightModeToggle);
                nightModeToggle.addEventListener("click", () => {
                document.body.classList.toggle("night-mode");
                // if (doc.classList.contains("night-mode")) {
                //     doc.style.background = "red";
                // };
                console.log("Night mode toggled!"); 
            });
    });
    
    