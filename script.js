window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        document.querySelector('header').style.background = 'rgb(100, 3, 19)';
        document.querySelector('header').style.boxShadow = '0 0 25px black';
        document.querySelector('header').style.border = '1px solid rgb(100, 3, 19) ';
    }
    else {
        document.querySelector('header').style.background = 'transparent';
        document.querySelector('header').style.boxShadow = ''
        document.querySelector('header').style.border = '';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".info-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => observer.observe(section));
});
