document.addEventListener('DOMContentLoaded', () => {
    // 1. ÉLÉMENTS COMMUNS
    const header = document.querySelector('.main-header');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('article, section, div[id]');
    const toTopBtn = document.getElementById('toTop');
    const typingText = document.querySelector(".typing-text");
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.activity-card');
    const modal = document.getElementById('minipedia-container');

    // 2. GESTION DU SCROLL (Header, Bouton Top & ScrollSpy)
    window.addEventListener('scroll', () => {
        // 2.1 Effet Header
        if (window.scrollY > 50) {
            header.classList.add('bg-[#0d1117]/95', 'border-slate-800', 'py-3', 'shadow-2xl');
            header.classList.remove('bg-transparent', 'border-white/10', 'py-5');
        } else {
            header.classList.remove('bg-[#0d1117]/95', 'border-slate-800', 'py-3', 'shadow-2xl');
            header.classList.add('bg-transparent', 'border-white/10', 'py-5');
        }

        // 2.2 Bouton Retour en haut
        if (toTopBtn) {
            if (window.scrollY > 500) {
                toTopBtn.classList.replace('opacity-0', 'opacity-100');
                toTopBtn.classList.replace('translate-y-10', 'translate-y-0');
            } else {
                toTopBtn.classList.replace('opacity-100', 'opacity-0');
                toTopBtn.classList.replace('translate-y-0', 'translate-y-10');
            }
        }

        // 2.3 ScrollSpy AMÉLIORÉ (avec gestion modale)
        if (!modal || modal.classList.contains('hidden')) {
            // Solution 1: Utiliser getBoundingClientRect() plus précis
            let current = "";
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = section.getAttribute("id");
                }
            });

            // Solution 2: Alternative si la première ne fonctionne pas
            if (!current) {
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    if (window.pageYOffset >= sectionTop - 100) {
                        current = section.getAttribute("id");
                    }
                });
            }

            // Mise à jour des liens
            navLinks.forEach((link) => {
                link.classList.remove('text-secondary', 'border-b-2', 'border-secondary');
                if (link.getAttribute("href").includes(current) && current !== "") {
                    link.classList.add('text-secondary', 'border-b-2', 'border-secondary');
                }
            });
        }
    });

    // 3. EFFET DE TAPE (Typing Effect)
    if (typingText) {
        const words = ["Étudiant BTS SIO (SISR)", "Technicien Fibre Optique (FTTH)", "Futur Administrateur Réseau"];
        let wordIdx = 0, charIdx = 0, isDeleting = false;

        function type() {
            const currentWord = words[wordIdx];
            typingText.textContent = isDeleting
                ? currentWord.substring(0, charIdx--)
                : currentWord.substring(0, charIdx++);

            let speed = isDeleting ? 50 : 100;
            if (!isDeleting && charIdx === currentWord.length + 1) {
                isDeleting = true;
                speed = 2000; // Pause en fin de mot
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                wordIdx = (wordIdx + 1) % words.length;
                speed = 500;
            }
            setTimeout(type, speed);
        }
        type();
    }

    // 4. FILTRAGE DES ACTIVITÉS
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Réinitialiser tous les boutons
            filterButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'shadow-md');
                b.classList.add('bg-white', 'text-slate-600');
            });

            // Mettre en surbrillance le bouton actif
            btn.classList.add('bg-primary', 'text-white', 'shadow-md');
            btn.classList.remove('bg-white', 'text-slate-600');

            // Filtrer les cartes
            const filterValue = btn.getAttribute('data-filter');
            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.classList.add('hidden'), 300);
                }
            });
        });
    });

    // 5. BOUTON "RETOUR EN HAUT"
    if (toTopBtn) {
        toTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});


