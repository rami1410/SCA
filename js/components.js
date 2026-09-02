document.addEventListener("DOMContentLoaded", function () {
    // טעינת תפריט העליון
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        });

    // טעינת הפוטר
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});

// מנגנון החלפת שפות בסיסי
function switchLanguage(lang) {
    if (lang === 'he') {
        document.dir = 'rtl';
        document.lang = 'he';
    } else if (lang === 'ar') {
        document.dir = 'rtl';
        document.lang = 'ar';
    } else if (lang === 'en') {
        document.dir = 'ltr';
        document.lang = 'en';
    }
    alert('שפת האתר שונתה ל: ' + lang);
}
