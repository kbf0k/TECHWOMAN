window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        document.querySelector('header').style.background = 'rgb(255, 96, 122)';
        document.querySelector('header').style.boxShadow = '0 0 30px black';
        document.querySelector('header').style.border = '1px solid rgb(255, 96, 122) ';
    }
    else {
        document.querySelector('header').style.background = 'transparent';
        document.querySelector('header').style.boxShadow = ''
        document.querySelector('header').style.border = '';
    }
});
