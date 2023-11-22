function renvoiUrl1(){
    document.location.href="https://www.linkedin.com/in/florent-n-1a527210b"; 
}

function renvoiUrl2(){
    document.location.href="https://www.instagram.com/01shotit/?hl=fr"; 
}




const scrollingImage = document.querySelector('.scrolling-image');
let lastScrollTop = 0;

function handleScroll() {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // L'utilisateur descend la page, faites l'animation de gauche à droite
    scrollingImage.classList.add('active');
  } else {
    // L'utilisateur remonte la page, faites l'animation de droite à gauche
    scrollingImage.classList.remove('active');
  }

  lastScrollTop = st;
}

window.addEventListener('scroll', handleScroll);

let animationTriggered = false;
const card = document.querySelector('.card');
const triggerOffset = 150; // Ajustez cette valeur pour contrôler à quel point la carte doit apparaître
card.style.display="none";

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const triggerPosition = windowHeight*1.35 - triggerOffset; // Ajustez cette valeur pour contrôler à quel point la carte doit apparaître

    if (!animationTriggered && scrollPosition > triggerPosition) {
        // Retirez la classe qui masque la carte
        card.style.display="block";

        // Animation inversée lorsque vous remontez la page
        card.style.animation = 'none';
        card.offsetHeight; // Réinitialise l'animation
        card.style.animation = 'reverseLaunch 2s ease-in-out forwards';
        animationTriggered = true; // Marque l'animation comme déjà déclenchée
    } else if (scrollPosition <= triggerPosition) {
        // Ajoutez la classe qui masque la carte
        card.classList.add('hidden-card');
    }
});