
<script>
    (function () {


                const ACTIVITIES = {

        /* ── Programmation ── */
        inventaire: {
        title: "Application de Gestion d'Inventaire",
    banner: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    chips: [
    {label: "Formation", cls: "chip-green" },
    {label: "Programmation", cls: "chip-gray" },
    {label: "01/24 – 03/24", cls: "chip-gray" }
    ],
    mission: "Conception et développement d'une application web full-stack permettant le suivi en temps réel des équipements réseaux d'une infrastructure IT. L'objectif était d'automatiser la gestion du parc matériel, de réduire les erreurs de saisie manuelle et de produire des rapports CSV exportables.",
    skills: [
    {label: "Gérer le patrimoine informatique", cls: "" },
    {label: "Recenser les ressources numériques", cls: "" },
    {label: "Exploiter des référentiels et normes", cls: "" },
    {label: "Mode projet — Planification", cls: "blue" },
    {label: "Déployer un service", cls: "blue" },
    {label: "Dév. professionnel personnel", cls: "blue" }
    ],
    timeline: [
    {date: "Phase 1 — Janv. 2024", title: "Analyse des besoins", content: "Recueil des exigences, modélisation MCD, choix de la stack technique (Python Flask + MySQL + HTML/CSS)." },
    {date: "Phase 2 — Févr. 2024", title: "Développement", content: "Implémentation des modules CRUD, gestion des rôles utilisateurs, interface de visualisation d'inventaire." },
    {date: "Phase 3 — Mars 2024", title: "Tests & déploiement", content: "Tests d'intégration, correction de bugs, déploiement sur serveur local Apache. Documentation technique rédigée." }
    ],
    gallery: [
    {src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", label: "Interface dashboard" },
    {src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", label: "Extrait code Python" },
    {src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", label: "Schéma BDD" }
    ],
    docs: [
    {label: "Cahier des charges (PDF)", href: "#" },
    {label: "Rapport de projet (PDF)", href: "#" },
    {label: "Code source — GitHub", href: "https://github.com/" }
    ],
    actions: [
    {label: "Voir le dépôt GitHub", href: "https://github.com/", primary: true },
    {label: "Télécharger le rapport", href: "#", primary: false }
    ]
                    },

    /* ── FTTx Entreprise générique (template réutilisable) ── */
    ftth_e006: {
        title: "Déploiement Colonne Montante — E006",
    banner: "/public_html/components/img/E006.jpg",
    chips: [
    {label: "Entreprise", cls: "chip-blue" },
    {label: "FTTx", cls: "chip-gray" },
    {label: "Orange IDF", cls: "chip-gray" }
    ],
    mission: "Déploiement d'une colonne montante FTTH dans un immeuble collectif en zone RIP Île-de-France. Réalisation de soudures de fibre optique monomode, pose de boîtiers de raccordement optique (BRO) et mesures de validation photométrique.",
    skills: [
    {label: "Gérer le patrimoine informatique", cls: "" },
    {label: "Collecter et orienter des demandes", cls: "" },
    {label: "Traiter des demandes — Réseau", cls: "" },
    {label: "Déployer un service", cls: "blue" },
    {label: "Accompagner les utilisateurs", cls: "blue" }
    ],
    timeline: [
    {date: "J+0 — Préparation", title: "Prise en charge du ticket", content: "Lecture du bon de travail, vérification du matériel (soudeuse Fujikura, OTDR, kit de nettoyage), coordination avec le gestionnaire d'immeuble." },
    {date: "J+0 — Intervention", title: "Déploiement et soudures", content: "Pose des câbles G.652D en colonne montante, réalisation des épissures par fusion, installation des boîtiers de palier." },
    {date: "J+0 — Validation", title: "Mesures et clôture", content: "Mesures OTDR sur chaque brin, contrôle des pertes d'insertion (< 0,5 dB), saisie des résultats dans l'outil de gestion Orange." }
    ],
    gallery: [
    {src: "/public_html/components/img/E006.jpg", label: "Chantier E006" }
    ],
    docs: [
    {label: "Bon de travail (confidentiel)", href: "#" },
    {label: "Relevé de mesures OTDR", href: "#" }
    ],
    actions: [
    {label: "Retour aux activités", href: "#activites", primary: false }
    ]
                    },

    /* Template pour les autres cartes FTTx — même structure, personnaliser */
    ftth_e009: {title: "Raccordement Client FTTH — F009", banner: "/public_html/components/img/F009.jpg", chips: [{label: "Entreprise", cls: "chip-blue" }, {label: "FTTx", cls: "chip-gray" }], mission: "Raccordement client final (prise optique + ONT) dans le cadre d'un déploiement FTTH en zone dense. Vérification du lien optique de bout en bout et activation du service.", skills: [{label: "Traiter des demandes — Réseau", cls: "" }, {label: "Déployer un service", cls: "blue" }, {label: "Accompagner les utilisateurs", cls: "blue" }], timeline: [{date: "Intervention", title: "Raccordement & test", content: "Tirage du câble drop, raccordement sur PBO, pose de la prise optique, mesures de réflectométrie, activation et test de débit." }], gallery: [{src: "/public_html/components/img/F009.jpg", label: "Raccordement F009" }], docs: [{label: "Bon de travail", href: "#" }], actions: [{label: "Retour aux activités", href: "#activites", primary: false }] },
    ftth_e003: {title: "Colonne Montante — E003", banner: "/public_html/components/images/E003_20250203.jpg", chips: [{label: "Entreprise", cls: "chip-blue" }, {label: "FTTx", cls: "chip-gray" }, {label: "Fév. 2025", cls: "chip-gray" }], mission: "Déploiement d'une colonne montante FTTH en immeuble collectif zone RIP. Soudure fibre monomode, pose BRO, mesures de validation photométrique.", skills: [{label: "Gérer le patrimoine informatique", cls: "" }, {label: "Traiter des demandes — Réseau", cls: "" }, {label: "Déployer un service", cls: "blue" }], timeline: [{date: "02/02/2025", title: "Préparation & déploiement", content: "Lecture du bon de travail, soudures G.652D, pose boîtiers de palier, mesures OTDR." }, {date: "02/02/2025", title: "Validation", content: "Contrôle des pertes < 0,5 dB, saisie dans l'outil Orange." }], gallery: [{src: "/public_html/components/images/E003_20250203.jpg", label: "Chantier E003" }], docs: [{label: "Bon de travail", href: "#" }, {label: "Relevé OTDR", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },
    ftth_e005: {title: "Colonne Montante — E005", banner: "/public_html/components/images/E005_20250303.jpg", chips: [{label: "Entreprise", cls: "chip-blue" }, {label: "FTTx", cls: "chip-gray" }, {label: "Mars 2025", cls: "chip-gray" }], mission: "Intervention identique à E003 — colonne montante en zone RIP, soudures et mesures de validation.", skills: [{label: "Traiter des demandes — Réseau", cls: "" }, {label: "Déployer un service", cls: "blue" }], timeline: [{date: "03/03/2025", title: "Déploiement & mesures", content: "Soudures, pose BRO, validation photométrique." }], gallery: [{src: "/public_html/components/images/E005_20250303.jpg", label: "Chantier E005" }], docs: [{label: "Bon de travail", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },
    ftth_e008: {title: "Colonne Montante — E008", banner: "/public_html/components/images/E008_20250916.jpg", chips: [{label: "Entreprise", cls: "chip-blue" }, {label: "FTTx", cls: "chip-gray" }, {label: "Sept. 2025", cls: "chip-gray" }], mission: "Soudure fibre optique et raccordement client en zone RIP. Mesures de photométrie et validation de lien.", skills: [{label: "Traiter des demandes — Réseau", cls: "" }, {label: "Déployer un service", cls: "blue" }], timeline: [{date: "09/2025", title: "Déploiement", content: "Soudures G.652D, mesures OTDR, activation." }], gallery: [{src: "/public_html/components/images/E008_20250916.jpg", label: "Chantier E008" }], docs: [{label: "Bon de travail", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },
    ftth_e010: {title: "Colonne Montante — E010", banner: "/public_html/components/images/E010_20251127.jpg", chips: [{label: "Entreprise", cls: "chip-blue" }, {label: "FTTx", cls: "chip-gray" }, {label: "Nov. 2025", cls: "chip-gray" }], mission: "Déploiement colonne montante FTTH — zone RIP IDF.", skills: [{label: "Traiter des demandes — Réseau", cls: "" }, {label: "Déployer un service", cls: "blue" }], timeline: [{date: "11/2025", title: "Déploiement & validation", content: "Soudures, mesures OTDR, clôture ticket." }], gallery: [{src: "/public_html/components/images/E010_20251127.jpg", label: "Chantier E010" }], docs: [{label: "Bon de travail", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },
    ftth_e011: {title: "Colonne Montante — E011", banner: "/public_html/components/images/E011_20260204.jpg", chips: [{label: "Entreprise", cls: "chip-blue" }, {label: "FTTx", cls: "chip-gray" }, {label: "Fév. 2026", cls: "chip-gray" }], mission: "Déploiement colonne montante FTTH — zone RIP IDF.", skills: [{label: "Traiter des demandes — Réseau", cls: "" }, {label: "Déployer un service", cls: "blue" }], timeline: [{date: "02/2026", title: "Déploiement & validation", content: "Soudures, mesures OTDR, clôture ticket." }], gallery: [{src: "/public_html/components/images/E011_20260204.jpg", label: "Chantier E011" }], docs: [{label: "Bon de travail", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },
    ftth_e013: {title: "Colonne Montante — E013", banner: "/public_html/components/images/E013_20241114.jpg", chips: [{label: "Entreprise", cls: "chip-blue" }, {label: "FTTx", cls: "chip-gray" }, {label: "Nov. 2024", cls: "chip-gray" }], mission: "Déploiement colonne montante FTTH — zone RIP IDF.", skills: [{label: "Traiter des demandes — Réseau", cls: "" }, {label: "Déployer un service", cls: "blue" }], timeline: [{date: "11/2024", title: "Déploiement & validation", content: "Soudures, mesures OTDR, clôture ticket." }], gallery: [{src: "/public_html/components/images/E013_20241114.jpg", label: "Chantier E013" }], docs: [{label: "Bon de travail", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },
    ftth_f001: {title: "TP Fibre Optique — F001", banner: "/public_html/components/images/F001_20251004.jpg", chips: [{label: "Formation", cls: "chip-green" }, {label: "FTTx", cls: "chip-gray" }, {label: "Oct. 2025", cls: "chip-gray" }], mission: "Travaux pratiques de soudure fibre optique réalisés au CFA UTEC — manipulation de la soudeuse Fujikura, réalisation d'épissures, mesures OTDR.", skills: [{label: "Gérer le patrimoine informatique", cls: "" }, {label: "Déployer un service", cls: "blue" }, {label: "Mettre en place son environnement d'apprentissage", cls: "blue" }], timeline: [{date: "10/2025", title: "TP Soudure", content: "Préparation des fibres, réalisation des épissures par fusion, mesures de validation." }], gallery: [{src: "/public_html/components/images/F001_20251004.jpg", label: "TP F001" }], docs: [{label: "Compte-rendu TP", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },
    ftth_f002: {title: "TP Fibre Optique — F002", banner: "/public_html/components/images/F002_20260312.png", chips: [{label: "Formation", cls: "chip-green" }, {label: "FTTx", cls: "chip-gray" }, {label: "Mars 2026", cls: "chip-gray" }], mission: "TP soudure fibre optique CFA UTEC — mise en pratique des techniques de raccordement optique.", skills: [{label: "Déployer un service", cls: "blue" }, {label: "Mettre en place son environnement d'apprentissage", cls: "blue" }], timeline: [{date: "03/2026", title: "TP Soudure", content: "Épissures par fusion, mesures OTDR, rédaction du compte-rendu." }], gallery: [{src: "/public_html/components/images/F002_20260312.png", label: "TP F002" }], docs: [{label: "Compte-rendu TP", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },
    ftth_f003: {title: "TP Fibre Optique — F003", banner: "/public_html/components/images/F003_20261005.jpg", chips: [{label: "Formation", cls: "chip-green" }, {label: "FTTx", cls: "chip-gray" }, {label: "Oct. 2026", cls: "chip-gray" }], mission: "TP soudure fibre optique CFA UTEC.", skills: [{label: "Déployer un service", cls: "blue" }], timeline: [{date: "10/2026", title: "TP Soudure", content: "Épissures, mesures OTDR." }], gallery: [{src: "/public_html/components/images/F003_20261005.jpg", label: "TP F003" }], docs: [{label: "Compte-rendu TP", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },
    ftth_f004: {title: "TP Fibre Optique — F004", banner: "/public_html/components/images/F004_20260312.jpg", chips: [{label: "Formation", cls: "chip-green" }, {label: "FTTx", cls: "chip-gray" }, {label: "Mars 2026", cls: "chip-gray" }], mission: "TP soudure fibre optique CFA UTEC.", skills: [{label: "Déployer un service", cls: "blue" }], timeline: [{date: "03/2026", title: "TP Soudure", content: "Épissures, mesures OTDR." }], gallery: [{src: "/public_html/components/images/F004_20260312.jpg", label: "TP F004" }], docs: [{label: "Compte-rendu TP", href: "#" }], actions: [{label: "Retour", href: "#activites", primary: false }] },

    /* ── Réseau ── */
    reseau_e015: {
        title: "Configuration Réseau — E015",
    banner: "/public_html/components/images/E015_202603194.jpg",
    chips: [
    {label: "Entreprise", cls: "chip-blue" },
    {label: "Réseau", cls: "chip-gray" },
    {label: "Mars 2026", cls: "chip-gray" }
    ],
    mission: "À compléter — décrire ici le contexte et les objectifs de cette activité réseau.",
    skills: [
    {label: "Gérer le patrimoine informatique", cls: "" },
    {label: "Traiter des demandes — Réseau", cls: "" }
    ],
    timeline: [
    {date: "03/2026", title: "À compléter", content: "Décrire les étapes de l'intervention réseau." }
    ],
    gallery: [
    {src: "/public_html/components/images/E015_202603194.jpg", label: "Intervention E015" }
    ],
    docs: [
    {label: "Bon de travail", href: "#" }
    ],
    actions: [
    {label: "Retour aux activités", href: "#activites", primary: false }
    ]
                    }
                };

    const overlay = document.getElementById('act-modal-overlay');
    const closeBtn = document.getElementById('act-modal-close');

    function openModal(id) {
                    const d = ACTIVITIES[id];
    if (!d) return;

    /* Bannière */
    document.getElementById('act-modal-banner').style.backgroundImage = `url('${d.banner}')`;
    document.getElementById('act-modal-title').textContent = d.title;

    /* Chips */
    document.getElementById('act-modal-chips').innerHTML =
                        d.chips.map(c => `<span class="chip ${c.cls}">${c.label}</span>`).join('');

    /* Mission */
    document.getElementById('act-modal-mission').textContent = d.mission;

    /* Compétences */
    document.getElementById('act-modal-skills').innerHTML =
                        d.skills.map(s => `<span class="skill-tag ${s.cls || ''}">${s.label}</span>`).join('');

    /* Timeline */
    document.getElementById('act-modal-timeline').innerHTML =
                        d.timeline.map(t => `
    <div class="timeline-item">
        <div class="t-date">${t.date}</div>
        <div class="t-title">${t.title}</div>
        <div class="t-content">${t.content}</div>
    </div>`).join('');

    /* Galerie */
    const gal = document.getElementById('act-modal-gallery');
    if (d.gallery && d.gallery.length) {
        gal.innerHTML = d.gallery.map(g =>
            `<div class="annexe-item">
                <img src="${g.src}" alt="${g.label}" loading="lazy">
                <div class="annexe-label">${g.label}</div>
            </div>`).join('');
    document.getElementById('act-sect-gallery').style.display = '';
                    } else {
        document.getElementById('act-sect-gallery').style.display = 'none';
                    }

    /* Documents */
    const docs = document.getElementById('act-modal-docs');
    if (d.docs && d.docs.length) {
        docs.innerHTML = d.docs.map(doc =>
            `<a class="annexe-doc" href="${doc.href}" target="_blank" rel="noopener">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>
                ${doc.label}
            </a>`).join('');
    document.getElementById('act-sect-docs').style.display = '';
                    } else {
        document.getElementById('act-sect-docs').style.display = 'none';
                    }

    /* Actions */
    document.getElementById('act-modal-actions').innerHTML =
                        (d.actions || []).map(a =>
    `<a href="${a.href}" class="${a.primary ? 'btn-primary' : 'btn-secondary'}" ${a.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
        ${a.label}
        ${a.primary ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' : ''}
    </a>`).join('');

    /* Ouverture */
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;
                }

    function closeModal() {
        overlay.classList.remove('open');
    document.body.style.overflow = '';
                }

                /* Événements */
                document.querySelectorAll('.open-activity-modal').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.dataset.article));
                });

                /* Clic sur la carte entière aussi */
                document.querySelectorAll('.activity-card[data-article]').forEach(card => {
        card.style.cursor = 'pointer';
                    card.addEventListener('click', e => {
                        if (e.target.closest('.open-activity-modal')) return; /* évite doublon */
    openModal(card.dataset.article);
                    });
                });

    closeBtn.addEventListener('click', closeModal);
                overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
                document.addEventListener('keydown', e => {
                    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
                });

                document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.activity-card').forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;
                card.style.display = match ? '' : 'none';
            });
        });
                });

            })();
