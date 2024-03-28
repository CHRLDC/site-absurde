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