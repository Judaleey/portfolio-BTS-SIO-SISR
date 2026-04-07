// Données des articles
const articles = {
    E5: {
        title: "Support et mise à disposition de services (E5)",
        banner: "/public_html/components/images/E55.png",
        meta: {
            projet: "Déploiement d'un site",
            equipe: "Équipe: 1 personne",
            duree: "Durée: 24 mois"
        },
        context: {
            mission: "Conception et déploiement d'un réseau FTTH pour une zone urbaine de 50 000 habitants...",
            documents: [
                "Cahier des charges technique (PDF)",
                "Plans de déploiement (AutoCAD)",
                "Rapport d'audit réseau (Excel)"
            ],
            objectifs: [
                "Atteindre un taux de couverture de 95% en 12 mois",
                "Garantir un débit minimal de 1 Gbps par abonné",
                "Respecter les normes FTTH européennes (EN 50700)"
            ]
        },
        corpus: [
            {
                date: "Phase 1 - 2022/Q1",
                title: "Étude de faisabilité",
                content: "Analyse des besoins clients, étude topographique du territoire..."
            },
            // ... (reste de vos données E5)
        ],
        actions: {
            text: "Accéder au dépôt GitHub",
            link: "https://github.com/votre-utilisateur/ftth-project"
        }
    },
    E6: {
        title: "Épreuve E6 - Administration des systèmes et des réseaux (option SISR)",
        banner: "/Portfolio/public_html/components/images/F005_5560.jpg",
        meta: {
            projet: "BAIE D",
            equipe: "Équipe: 3 personnes",
            duree: "Durée: 1 an"
        },
        context: {
            mission: "Conception et déploiement d'un réseau FTTH pour une zone urbaine de 50 000 habitants...",
            documents: [
                "Cahier des charges technique (PDF)",
                "Plans de déploiement (AutoCAD)",
                "Rapport d'audit réseau (Excel)"
            ],
            objectifs: [
                "Atteindre un taux de couverture de 95% en 12 mois",
                "Garantir un débit minimal de 1 Gbps par abonné",
                "Respecter les normes FTTH européennes (EN 50700)"
            ]
        },
        corpus: [
            {
                date: "Phase 1 - 2022/Q1",
                title: "Étude de faisabilité",
                content: "Analyse des besoins clients, étude topographique du territoire..."
            },
            // ... (reste de vos données E6)
        ],
        actions: {
            text: "Accéder au document E6",
            link: "https://github.com/votre-utilisateur/ftth-project"
        }
    }
};

// Fonction principale
document.addEventListener('DOMContentLoaded', function () {
    // Éléments de la modale
    const modalContainer = document.getElementById('minipedia-container');
    const modal = modalContainer.querySelector('div'); // Le contenu de la modale
    const closeButton = document.getElementById('close-minipedia');

    // Fonction pour ouvrir la modale
    function openModal(articleId) {
        const article = articles[articleId];
        if (!article) return;

        // Mise à jour du contenu
        document.getElementById('minipedia-title').textContent = article.title;
        document.getElementById('minipedia-banner').style.backgroundImage = `url('${article.banner}')`;
        document.getElementById('minipedia-projet').textContent = article.meta.projet;
        document.getElementById('minipedia-equipe').textContent = article.meta.equipe;
        document.getElementById('minipedia-duree').textContent = article.meta.duree;

        // Contexte
        document.getElementById('minipedia-mission').innerHTML = `
            <p><strong>Mission :</strong> ${article.context.mission}</p>
            <p class="mt-2"><strong>Documents clés :</strong></p>
            <ul class="list-disc pl-6 mt-1">
                ${article.context.documents.map(doc => `<li>${doc}</li>`).join('')}
            </ul>
        `;

        document.getElementById('minipedia-objectifs').innerHTML = `
            <p><strong>Objectifs :</strong></p>
            <ul class="list-disc pl-6 mt-1">
                ${article.context.objectifs.map(obj => `<li>${obj}</li>`).join('')}
            </ul>
        `;

        // Timeline
        document.getElementById('minipedia-timeline').innerHTML = article.corpus.map(item => `
            <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
                <div class="flex items-center mb-2">
                    <span class="text-cyan-400 font-semibold">${item.date}</span>
                    <span class="mx-2 text-gray-500">|</span>
                    <span class="font-medium">${item.title}</span>
                </div>
                <p class="text-gray-300">${item.content}</p>
            </div>
        `).join('');

        // Bouton d'action
        document.getElementById('minipedia-actions').innerHTML = `
            <a href="${article.actions.link}"
               target="_blank"
               class="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors">
                ${article.actions.text}
            </a>
        `;

        // Affichage de la modale
        modalContainer.classList.remove('hidden');
        modalContainer.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    // Fonction pour fermer la modale
    function closeModal() {
        modalContainer.classList.add('hidden');
        modalContainer.classList.remove('flex');
        document.body.style.overflow = '';
    }

    // Événements
    document.querySelectorAll('.open-minipedia').forEach(button => {
        button.addEventListener('click', function () {
            const articleId = this.getAttribute('data-minipedia-id');
            openModal(articleId);
        });
    });

    closeButton.addEventListener('click', closeModal);

    // Fermeture via overlay
    modalContainer.addEventListener('click', function (e) {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

    // Fermeture avec Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modalContainer.classList.contains('hidden')) {
            closeModal();
        }
    });
    
});
