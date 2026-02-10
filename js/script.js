const header = document.querySelector(".header"); 
window.addEventListener("scroll", () => 
    { if(window.scrollY > 100) 
        { 
            header.classList.add("sticky"); 

        } 
        else 
            { 
                header.classList.remove("sticky"); 
            } 
        });

// subtitle-content
const roles = ["Frontend Developer", "UI Developer"];
    let currentRoleIndex = 0;
    const roleElement = document.getElementById("role");

    function typeWriter(text, element, callback) {
        let i = 0;
        element.textContent = "\u00A0"; // Ensure there is always at least one character (non-breaking space)
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent = text.substring(0, i + 1);
                i++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 100); // Adjust typing speed here
    }

    function loopRoles() {
        typeWriter(roles[currentRoleIndex], roleElement, () => {
            setTimeout(() => {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                loopRoles();
            }, 2000); // Adjust delay between roles here
        });
    }

    loopRoles();
// subtitle-content