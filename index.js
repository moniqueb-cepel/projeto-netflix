// Recupera o tema salvo no localStorage, ou define 'dark' como padrão
const currentTheme = localStorage.getItem('theme') || 'dark';

// Aplica o tema ao carregar a página
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('theme-toggle').textContent = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-toggle').textContent = '🌙';
}

// Adiciona evento ao botão para alternar o tema
document.getElementById('theme-toggle').addEventListener('click', function() {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        // Muda para light mode
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('theme-toggle').textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        // Muda para dark mode
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-toggle').textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});
