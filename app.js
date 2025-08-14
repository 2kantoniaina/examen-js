// ========================
// Variables globales avec données fictives
// ========================
let currentData = {
    users: [
      // Données mises à jour selon votre demande, avec l'ID 1 ajouté pour la cohérence
      { "id": 1, "name": "Alice Dupont", "username": "alice_d", "email": "alice@example.com", "age": 28, "city": "Paris", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 2, "name": "Bob Dupont", "username": "bob_d", "email": "bob@example.com", "age": 32, "city": "Lyon", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 3, "name": "Claire Moreau", "username": "claire_m", "email": "claire@example.com", "age": 25, "city": "Marseille", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 4, "name": "David Bernard", "username": "david_b", "email": "david@example.com", "age": 29, "city": "Toulouse", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 5, "name": "Emma Petit", "username": "emma_p", "email": "emma@example.com", "age": 31, "city": "Nice", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 6, "name": "Felix Roux", "username": "felix_r", "email": "felix@example.com", "age": 27, "city": "Nantes", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 7, "name": "Grace Simon", "username": "grace_s", "email": "grace@example.com", "age": 24, "city": "Strasbourg", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 8, "name": "Hugo Michel", "username": "hugo_m", "email": "hugo@example.com", "age": 33, "city": "Montpellier", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 9, "name": "Iris Leroy", "username": "iris_l", "email": "iris@example.com", "age": 26, "city": "Bordeaux", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 10, "name": "Jules Moreau", "username": "jules_m", "email": "jules@example.com", "age": 30, "city": "Lille", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 11, "name": "Karine Blanc", "username": "karine_b", "email": "karine@example.com", "age": 28, "city": "Rennes", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 12, "name": "Louis Garcia", "username": "louis_g", "email": "louis@example.com", "age": 35, "city": "Reims", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 13, "name": "Marie Dubois", "username": "marie_d", "email": "marie@example.com", "age": 22, "city": "Le Havre", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 14, "name": "Nicolas Faure", "username": "nicolas_f", "email": "nicolas@example.com", "age": 29, "city": "Saint-Étienne", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 15, "name": "Olivia Girard", "username": "olivia_g", "email": "olivia@example.com", "age": 27, "city": "Toulon", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 16, "name": "Pierre Morel", "username": "pierre_m", "email": "pierre@example.com", "age": 31, "city": "Grenoble", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 17, "name": "Quentin Andre", "username": "quentin_a", "email": "quentin@example.com", "age": 26, "city": "Dijon", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 18, "name": "Rose Mercier", "username": "rose_m", "email": "rose@example.com", "age": 24, "city": "Angers", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 19, "name": "Samuel Lefebvre", "username": "samuel_l", "email": "samuel@example.com", "age": 32, "city": "Villeurbanne", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 20, "name": "Tina Rousseau", "username": "tina_r", "email": "tina@example.com", "age": 28, "city": "Aix-en-Provence", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 21, "name": "Ugo Clement", "username": "ugo_c", "email": "ugo@example.com", "age": 25, "city": "Brest", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 22, "name": "Valerie Joly", "username": "valerie_j", "email": "valerie@example.com", "age": 30, "city": "Limoges", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 23, "name": "William Roy", "username": "william_r", "email": "william@example.com", "age": 29, "city": "Tours", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 24, "name": "Xavier Caron", "username": "xavier_c", "email": "xavier@example.com", "age": 27, "city": "Amiens", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 25, "name": "Yasmine Guerin", "username": "yasmine_g", "email": "yasmine@example.com", "age": 23, "city": "Metz", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 26, "name": "Zacharie Muller", "username": "zacharie_m", "email": "zacharie@example.com", "age": 34, "city": "Besançon", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 27, "name": "Amélie Bonnet", "username": "amelie_b", "email": "amelie@example.com", "age": 26, "city": "Orléans", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 28, "name": "Bastien Dupuis", "username": "bastien_d", "email": "bastien@example.com", "age": 28, "city": "Mulhouse", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 29, "name": "Camille Fontaine", "username": "camille_f", "email": "camille@example.com", "age": 25, "city": "Rouen", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 30, "name": "Damien Chevalier", "username": "damien_c", "email": "damien@example.com", "age": 31, "city": "Nancy", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 31, "name": "Elise Gauthier", "username": "elise_g", "email": "elise@example.com", "age": 27, "city": "Argenteuil", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 32, "name": "Fabien Perrin", "username": "fabien_p", "email": "fabien@example.com", "age": 29, "city": "Montreuil", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 33, "name": "Gabrielle Morin", "username": "gabrielle_m", "email": "gabrielle@example.com", "age": 24, "city": "Caen", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 34, "name": "Henri Barbier", "username": "henri_b", "email": "henri@example.com", "age": 33, "city": "Saint-Denis", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 35, "name": "Inès Brun", "username": "ines_b", "email": "ines@example.com", "age": 22, "city": "Nîmes", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 36, "name": "Julien Dufour", "username": "julien_d", "email": "julien@example.com", "age": 30, "city": "Clermont-Ferrand", "createdAt": "2025-08-11T20:48:55.000Z", "updatedAt": "2025-08-11T20:48:55.000Z" },
      { "id": 37, "name": "John Smith", "username": "johnsmith", "email": "john.smith@example.com", "age": 32, "city": "Boston", "createdAt": "2025-08-12T05:57:11.000Z", "updatedAt": "2025-08-12T05:58:36.000Z" }
    ],
    messages: [
           // Données messages mises à jour selon votre demande
      { "id": 6, "content": "Comment allez-vous?", "userId": 2, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 7, "content": "À bientôt!", "userId": 2, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 8, "content": "Merci beaucoup", "userId": 2, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 9, "content": "Excellente idée", "userId": 2, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 10, "content": "Bonne soirée", "userId": 2, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 11, "content": "Quelqu'un pour un café?", "userId": 3, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 12, "content": "Félicitations!", "userId": 3, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 13, "content": "Super travail", "userId": 3, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 14, "content": "On se voit demain", "userId": 3, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 15, "content": "Parfait!", "userId": 3, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 16, "content": "Merci pour votre aide", "userId": 4, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 17, "content": "Très intéressant", "userId": 4, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 18, "content": "Je suis d'accord", "userId": 4, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 19, "content": "Bonne chance", "userId": 4, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 20, "content": "À demain", "userId": 4, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 21, "content": "Excellente présentation", "userId": 5, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 22, "content": "Bravo pour le projet", "userId": 5, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 23, "content": "Très bien expliqué", "userId": 5, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 24, "content": "Merci du partage", "userId": 5, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 25, "content": "Impressionnant", "userId": 5, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 26, "content": "Nouveau projet en cours", "userId": 6, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 27, "content": "Ça avance bien", "userId": 6, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 28, "content": "Besoin d'aide?", "userId": 6, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 29, "content": "Presque fini", "userId": 6, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 30, "content": "Mission accomplie", "userId": 6, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 31, "content": "Salut les amis", "userId": 7, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 32, "content": "Quoi de neuf?", "userId": 7, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 33, "content": "Super journée", "userId": 7, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 34, "content": "À la prochaine", "userId": 7, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 35, "content": "Bonne nuit", "userId": 7, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 36, "content": "Hello everyone", "userId": 8, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 37, "content": "Great job team", "userId": 8, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 38, "content": "See you later", "userId": 8, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 39, "content": "Thanks a lot", "userId": 8, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 40, "content": "Have a nice day", "userId": 8, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 41, "content": "Réunion à 14h", "userId": 9, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 42, "content": "N'oubliez pas", "userId": 9, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 43, "content": "Rappel important", "userId": 9, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 44, "content": "Merci de confirmer", "userId": 9, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 45, "content": "À tout à l'heure", "userId": 9, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 46, "content": "Pause déjeuner", "userId": 10, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 47, "content": "Qui vient manger?", "userId": 10, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 48, "content": "Restaurant sympa", "userId": 10, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 49, "content": "On y va?", "userId": 10, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" },
      { "id": 50, "content": "C'était délicieux", "userId": 10, "createdAt": "2025-08-11T20:48:56.000Z", "updatedAt": "2025-08-11T20:48:56.000Z" }
    ],

    tasks: [
        { id: 1, title: "Préparer la réunion", status: "in_progress", createdAt: "2025-08-10T08:00:00Z" },
        { id: 2, title: "Réviser le rapport", status: "pending", createdAt: "2025-08-09T08:00:00Z" },
        { id: 3, title: "Envoyer l'email client", status: "completed", createdAt: "2025-08-08T08:00:00Z" },
    ],
    currentEditId: null
};

// ========================
// Fonctions utilitaires
// ========================
function showAlert(message, type = 'success') {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = `alert ${type === 'success' ? 'success' : 'error'}`
    alert.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i> ${message}`;
    alertContainer.appendChild(alert);
    setTimeout(() => { alert.style.opacity = '0'; setTimeout(() => alert.remove(), 500); }, 5000);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });
}

function getStatusBadge(status) {
    const badges = {
        pending: '<span style="background:#fbbf24;color:white;padding:4px 8px;border-radius:12px;font-size:0.8rem;">En attente</span>',
        in_progress: '<span style="background:#3b82f6;color:white;padding:4px 8px;border-radius:12px;font-size:0.8rem;">En cours</span>',
        completed: '<span style="background:#10b981;color:white;padding:4px 8px;border-radius:12px;font-size:0.8rem;">Terminé</span>'
    };
    return badges[status] || status;
}

// ========================
// Navigation et Modals
// ========================
function switchTab(tabName, event) {
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    const clickedTab = document.querySelector(`button[onclick^="switchTab('${tabName}')"]`);
    if(clickedTab) clickedTab.classList.add('active');

    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Charger les données de l'onglet actif
    const loadFunction = window[`load${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`];
    if (typeof loadFunction === 'function') {
        loadFunction();
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.querySelector(`#${modalId} form`)?.reset();
    currentData.currentEditId = null;

    // Reset titles
    document.getElementById('user-modal-title').textContent = 'Nouvel Utilisateur';
    document.getElementById('message-modal-title').textContent = 'Nouveau Message';
    document.getElementById('task-modal-title').textContent = 'Nouvelle Tâche';

    if (modalId === 'message-modal') {
        populateUserSelect();
        document.getElementById('message-user').disabled = false;
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// ========================
// Dashboard
// ========================
function loadDashboard() {
    document.getElementById('users-count').textContent = currentData.users.length;
    document.getElementById('messages-count').textContent = currentData.messages.length;
    document.getElementById('tasks-count').textContent = currentData.tasks.length;
    loadRecentActivity('all');
}

// [BONUS 8] Fonction améliorée pour l'activité récente avec filtre
function loadRecentActivity(filter = 'all') {
    const container = document.getElementById('recent-activity');
    container.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i></div>';

    const allActivities = [
        ...currentData.users.map(i => ({ ...i, type: 'user', date: i.createdAt })),
        ...currentData.messages.map(i => ({ ...i, type: 'message', date: i.createdAt })),
        ...currentData.tasks.map(i => ({ ...i, type: 'task', date: i.createdAt }))
    ];

    const filtered = (filter === 'all') ? allActivities : allActivities.filter(item => item.type === filter);
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (filtered.length === 0) {
        container.innerHTML = "<p>Aucune activité à afficher.</p>";
        return;
    }
    
    let html = '<ul>';
    filtered.slice(0, 10).forEach(item => {
        let icon, text;
        switch(item.type) {
            case 'user':
                icon = '<i class="fas fa-user-plus" style="color: #667eea;"></i>';
                text = `Utilisateur ajouté : <strong>${item.name}</strong>`;
                break;
            case 'message':
                const user = currentData.users.find(u => u.id === item.userId);
                icon = '<i class="fas fa-comment" style="color: #10b981;"></i>';
                text = `Message de <strong>${user?.name || 'Inconnu'}</strong>: "${item.content.substring(0, 40)}..."`;
                break;
            case 'task':
                icon = '<i class="fas fa-tasks" style="color: #fbbf24;"></i>';
                text = `Tâche créée : <strong>${item.title}</strong>`;
                break;
        }
        html += `<li>${icon}<span>${text}</span><span style="margin-left:auto;color:#888;font-size:0.9em;">${formatDate(item.date)}</span></li>`;
    });
    container.innerHTML = html + '</ul>';
}

// ========================
// Utilisateurs (CRUD complet)
// ========================
// [BONUS 2] Read: Afficher les utilisateurs avec nom cliquable
function loadUsers() {
    const container = document.getElementById('users-list');
    let html = `<table class="data-table"><thead><tr><th>ID</th><th>Nom</th><th>Username</th><th>Email</th><th>Actions</th></tr></thead><tbody>`;
    currentData.users.forEach(u => {
        html += `<tr>
            <td>${u.id}</td>
            <td><a href="#" onclick="event.preventDefault(); viewUserProfile(${u.id})">${u.name}</a></td>
            <td>${u.username}</td>
            <td>${u.email}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editUser(${u.id})">Modifier</button>
                <button class="btn btn-sm btn-danger" onclick="deleteUser(${u.id})">Supprimer</button>
            </td></tr>`;
    });
    container.innerHTML = html + "</tbody></table>";
}

// [BONUS 4] Update: Pré-remplir le formulaire pour modification
function editUser(id) {
    const u = currentData.users.find(user => user.id === id);
    if (!u) return;
    openModal('user-modal');
    currentData.currentEditId = id;
    document.getElementById('user-modal-title').textContent = "Modifier l'Utilisateur";
    document.getElementById('user-name').value = u.name;
    document.getElementById('user-username').value = u.username;
    document.getElementById('user-email').value = u.email;
    document.getElementById('user-age').value = u.age;
    document.getElementById('user-city').value = u.city;
}

// [BONUS 5] Delete: Supprimer avec confirmation et suppression des données liées
function deleteUser(id) {
    const user = currentData.users.find(u => u.id === id);
    const messageCount = currentData.messages.filter(m => m.userId === id).length;
    const confirmation = confirm(`Voulez-vous vraiment supprimer ${user.name} ?\nCette action supprimera également ses ${messageCount} message(s) et est irréversible.`);
    
    if (confirmation) {
        currentData.users = currentData.users.filter(u => u.id !== id);
        currentData.messages = currentData.messages.filter(m => m.userId !== id); // Supprime les messages
        showAlert(`Utilisateur ${user.name} et ses messages ont été supprimés.`);
        loadUsers();
        loadDashboard();
    }
}

// [BONUS 6] Voir le profil utilisateur
function viewUserProfile(userId) {
    const user = currentData.users.find(u => u.id === userId);
    if (!user) return;

    // Affiche l'onglet de profil
    switchTab('profile');

    const container = document.getElementById('profile-tab');
    const userMessages = currentData.messages
        .filter(m => m.userId === userId)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    let messagesHtml = '<h4>Aucun message récent</h4>';
    if (userMessages.length > 0) {
        messagesHtml = '<ul>' + userMessages.slice(0, 5).map(m => 
            `<li style="padding: 8px; border-bottom: 1px solid #eee;">"${m.content}"<br><small style="color: #777;">${formatDate(m.createdAt)}</small></li>`
        ).join('') + '</ul>';
    }

    container.innerHTML = `
        <button class="btn btn-sm btn-secondary" onclick="switchTab('users')"><i class="fas fa-arrow-left"></i> Retour à la liste</button>
        <div class="profile-header" style="margin-top:20px;">
            <div class="profile-avatar">${user.name.charAt(0)}</div>
            <div>
                <h2>${user.name}</h2>
                <p style="color:#555;">@${user.username} - ${user.city || 'Ville non spécifiée'}</p>
            </div>
        </div>
        <div class="section">
            <h3>5 Derniers Messages</h3>
            ${messagesHtml}
            ${userMessages.length > 5 ? `<button class="btn btn-sm" style="margin-top:10px;" onclick="seeAllUserMessages(${userId})">Voir tous les ${userMessages.length} messages</button>` : ''}
        </div>`;
}

function seeAllUserMessages(userId) {
    switchTab('messages');
    document.getElementById('user-filter').value = userId;
    loadMessages(); // Pour appliquer le filtre
}

// ========================
// Messages
// ========================
// [BONUS 1] Fonction de chargement améliorée avec tri
function loadMessages() {
    const filterId = document.getElementById('user-filter').value;
    const sortOrder = document.getElementById('message-sort-order').value;
    
    let messagesToDisplay = currentData.messages;

    if (filterId) {
        messagesToDisplay = messagesToDisplay.filter(m => m.userId === parseInt(filterId));
    }
    
    messagesToDisplay.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    populateUserFilter();
    displayMessages(messagesToDisplay);
}

function populateUserFilter() {
    const sel = document.getElementById('user-filter');
    const currentValue = sel.value;
    sel.innerHTML = '<option value="">Tous les utilisateurs</option>';
    currentData.users.sort((a, b) => a.name.localeCompare(b.name)).forEach(u => {
        sel.innerHTML += `<option value="${u.id}">${u.name}</option>`;
    });
    sel.value = currentValue;
}

function displayMessages(messages) {
    const container = document.getElementById('messages-list');
    if (messages.length === 0) {
        container.innerHTML = "<p>Aucun message à afficher pour cette sélection.</p>";
        return;
    }
    let html = `<table class="data-table"><thead><tr><th>Utilisateur</th><th>Contenu</th><th>Date</th><th>Actions</th></tr></thead><tbody>`;
    messages.forEach(m => {
        const u = currentData.users.find(user => user.id === m.userId);
        html += `<tr>
            <td>${u ? u.name : "<i>Utilisateur supprimé</i>"}</td>
            <td>${m.content}</td>
            <td>${formatDate(m.createdAt)}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editMessage(${m.id})">Modifier</button>
                <button class="btn btn-sm btn-danger" onclick="deleteMessage(${m.id})">Supprimer</button>
            </td>
        </tr>`;
    });
    container.innerHTML = html + "</tbody></table>";
}

function populateUserSelect() {
    const sel = document.getElementById('message-user');
    sel.innerHTML = '<option value="">Sélectionnez un utilisateur</option>';
    currentData.users.sort((a, b) => a.name.localeCompare(b.name)).forEach(u => {
        sel.innerHTML += `<option value="${u.id}">${u.name}</option>`;
    });
}

function editMessage(id) {
    const m = currentData.messages.find(msg => msg.id === id);
    if (!m) return;
    openModal('message-modal');
    currentData.currentEditId = id;
    document.getElementById('message-modal-title').textContent = "Modifier le Message";
    document.getElementById('message-user').value = m.userId;
    document.getElementById('message-content').value = m.content;
    document.getElementById('message-user').disabled = true;
}

function deleteMessage(id) {
    if (confirm("Voulez-vous vraiment supprimer ce message ?")) {
        currentData.messages = currentData.messages.filter(m => m.id !== id);
        showAlert("Message supprimé");
        loadMessages();
        loadDashboard();
    }
}

// ========================
// Tâches
// ========================
function loadTasks() {
    const container = document.getElementById('tasks-list');
    let html = `<table class="data-table"><thead><tr><th>Titre</th><th>Statut</th><th>Actions</th></tr></thead><tbody>`;
    currentData.tasks.forEach(t => {
        html += `<tr>
            <td>${t.title}</td>
            <td>${getStatusBadge(t.status)}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editTask(${t.id})">Modifier</button>
                <button class="btn btn-sm btn-danger" onclick="deleteTask(${t.id})">Supprimer</button>
            </td>
        </tr>`;
    });
    container.innerHTML = html + "</tbody></table>";
}

function editTask(id) {
    const t = currentData.tasks.find(task => task.id === id);
    if (!t) return;
    openModal('task-modal');
    currentData.currentEditId = id;
    document.getElementById('task-modal-title').textContent = "Modifier la Tâche";
    document.getElementById('task-title').value = t.title;
    document.getElementById('task-description').value = t.description;
    document.getElementById('task-status').value = t.status;
}

function deleteTask(id) {
    if (confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
        currentData.tasks = currentData.tasks.filter(t => t.id !== id);
        showAlert("Tâche supprimée");
        loadTasks();
        loadDashboard();
    }
}

// ========================
// Gestion des formulaires (Create/Update)
// ========================
document.addEventListener('DOMContentLoaded', function() {
    // Formulaire Utilisateur
    document.getElementById('user-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const fd = new FormData(this);
        const username = fd.get('username');
        const now = new Date().toISOString();

        // [BONUS 3] Validation de l'username unique
        const isUsernameTaken = currentData.users.some(u => u.username === username && u.id !== currentData.currentEditId);
        if (isUsernameTaken) {
            showAlert(`Le nom d'utilisateur "${username}" est déjà pris.`, 'error');
            return;
        }

        if (currentData.currentEditId) {
            const user = currentData.users.find(u => u.id === currentData.currentEditId);
            Object.assign(user, { name: fd.get('name'), username, email: fd.get('email'), age: fd.get('age'), city: fd.get('city'), updatedAt: now });
        } else {
            const newId = (currentData.users.length > 0) ? Math.max(...currentData.users.map(u => u.id)) + 1 : 1;
            currentData.users.push({ id: newId, name: fd.get('name'), username, email: fd.get('email'), age: fd.get('age'), city: fd.get('city'), createdAt: now, updatedAt: now });
        }
        closeModal('user-modal');
        loadUsers();
        loadDashboard();
        showAlert("Utilisateur enregistré.");
    });

    // Formulaire Message
    document.getElementById('message-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const fd = new FormData(this);
        const now = new Date().toISOString();
        if (currentData.currentEditId) {
            const msg = currentData.messages.find(m => m.id === currentData.currentEditId);
            msg.content = fd.get('content');
            msg.updatedAt = now;
        } else {
            const newId = (currentData.messages.length > 0) ? Math.max(...currentData.messages.map(m => m.id)) + 1 : 1;
            currentData.messages.push({ id: newId, content: fd.get('content'), userId: parseInt(fd.get('userId')), createdAt: now, updatedAt: now });
        }
        closeModal('message-modal');
        loadMessages();
        loadDashboard();
        showAlert("Message enregistré.");
    });

    // Formulaire Tâche
    document.getElementById('task-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const fd = new FormData(this);
        const now = new Date().toISOString();
        if (currentData.currentEditId) {
            const task = currentData.tasks.find(t => t.id === currentData.currentEditId);
            Object.assign(task, { title: fd.get('title'), description: fd.get('description'), status: fd.get('status'), updatedAt: now });
        } else {
            const newId = (currentData.tasks.length > 0) ? Math.max(...currentData.tasks.map(t => t.id)) + 1 : 1;
            currentData.tasks.push({ id: newId, title: fd.get('title'), description: fd.get('description'), status: fd.get('status'), createdAt: now, updatedAt: now });
        }
        closeModal('task-modal');
        loadTasks();
        loadDashboard();
        showAlert("Tâche enregistrée.");
    });

    // Chargement initial
    loadDashboard();
});