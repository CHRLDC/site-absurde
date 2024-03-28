// Je récupère les éléments du menu burger:
let burgerMenu = document.getElementById('burger-menu')//le menu
let fenetreMenu = document.getElementById('fenetre-menu')//la fenêtre
// J'ajoute un écouteur d'événement pour le clic sur le menu burger:
burgerMenu.addEventListener('click', function () {
    // Je bascule la classe "open" lorsque le menu est cliqué:
    burgerMenu.classList.toggle('open');
    // Si le menu gurger a la classe open:
    if (burgerMenu.classList.contains('open')) {
        // J'ajoute d-block à la fenêtre:
        fenetreMenu.classList.add('d-block');
        fenetreMenu.classList.remove('d-none');
    } else {
        //sinon j'enlève d-block à la fenêtre:
        fenetreMenu.classList.remove('d-block');
        fenetreMenu.classList.add('d-none');
    }
});


// JavaScript pour le défilement fluide
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let btn = document.querySelectorAll('.rep');
let messages = [
    "Peut-être !",
    "Je ne pense pas...",
    "Bonjour, j'aimerais acheter un toaster pour 2 personnes., quoi ? un quizz ? pff laisse faire...",
    "Franchement je sais même pas si le toast est capable d'une telle chose...",
    "Je ne pense pas que ce toast soit prêt à répondre, il semble être un peu brûlé sur les bords !",
    "Franchement, je ne sais même pas si ce toast est capable de réfléchir à une telle question... Il semble être trop occupé à se faire tartiner de beurre !",
    "Peut-être que ce toast a été grillé un peu trop longtemps !",
    "JUSTE !!!! le blanc... ah bon il a pas de prénom ?",
    "Va te faire toaster un toast ailleurs !",
    "Si tu enlèves le a de toast ca fait toujours tost",
    "Toaster 404",
    "Et sinon, il te plait mon site asburde ?",
    "T O A S T un toss oss yooosss un toyoyossss (qui a la réf ???)"
];

btn.forEach(element => {
    element.addEventListener('click', () => {
        let randomIndex = Math.floor(Math.random() * messages.length);
        let randomMessage = messages[randomIndex];
        alert(randomMessage);
    });
});