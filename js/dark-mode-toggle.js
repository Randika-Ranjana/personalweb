const themeToggle = document.getElementById('themeToggle');
const rootElement = document.documentElement;

// Check localStorage for theme preference
if (localStorage.getItem('theme') === 'dark') {
  rootElement.classList.add('dark');
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  rootElement.classList.toggle('dark');
  if (rootElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
