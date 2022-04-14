const checkboxThemeSwitcher = document.getElementById('checkbox-theme-switcher');

checkboxThemeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});