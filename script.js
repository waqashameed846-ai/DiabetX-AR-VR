 // Toggle mobile menu
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navItems = document.querySelectorAll('.nav-item');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Toggle dropdowns on mobile
        navItems.forEach(item => {
            if (item.querySelector('.dropdown')) {
                const navLink = item.querySelector('.nav-link');
                
                navLink.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        const dropdown = item.querySelector('.dropdown');
                        dropdown.classList.toggle('active');
                        
                        // Rotate chevron icon
                        const icon = navLink.querySelector('i');
                        if (icon) {
                            icon.classList.toggle('fa-chevron-down');
                            icon.classList.toggle('fa-chevron-up');
                        }
                    }
                });
            }
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
                if (!e.target.closest('.navbar')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    
                    // Close all dropdowns
                    document.querySelectorAll('.dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                    
                    // Reset all icons
                    document.querySelectorAll('.nav-link i').forEach(icon => {
                        if (icon.classList.contains('fa-chevron-up')) {
                            icon.classList.remove('fa-chevron-up');
                            icon.classList.add('fa-chevron-down');
                        }
                    });
                }
            }
        });

        // Close menu when window is resized above mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                
                // Close all dropdowns
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                
                // Reset all icons
                document.querySelectorAll('.nav-link i').forEach(icon => {
                    if (icon.classList.contains('fa-chevron-up')) {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                });
            }
        });