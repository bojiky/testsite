        let isDarkTheme = false;
        
        function toggleTheme() {
            isDarkTheme = !isDarkTheme;
            
            if (isDarkTheme) {
                document.body.classList.add('dark-theme');
                document.querySelector('.theme-toggle').textContent = 'Светлая тема';
            } else {
                document.body.classList.remove('dark-theme');
                document.querySelector('.theme-toggle').textContent = 'Тёмная тема';
            }
        }