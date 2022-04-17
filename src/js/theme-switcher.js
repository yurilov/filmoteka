const checkboxThemeSwitcher = document.getElementById('checkbox-theme-switcher');

checkboxThemeSwitcher.addEventListener('change', changeStatus);

if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', "false");
}

checkStatus();

function checkStatus() {
    if (localStorage.getItem('darkMode') === "true") {
        checkboxThemeSwitcher.checked = true;
        document.body.classList.add('dark-theme');
    } else {
        checkboxThemeSwitcher.checked = false;
        document.body.classList.remove('dark-theme');
    }
}

function changeStatus(){
    if (localStorage.getItem('darkMode') === "true") {
        localStorage.setItem('darkMode', "false");
        document.body.classList.remove('dark-theme');
    } else {
        localStorage.setItem('darkMode', "true");
        document.body.classList.add('dark-theme');
    }
}
