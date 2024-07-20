/*menu*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () =>  {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () =>  {
        navMenu.classList.remove('show-menu')
    })
}

/* remove menu mobile*/
const navLink = document.querySelectorAll('.navLink')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>  n.addEventListener('click', linkAction))

/*swiper nuevos slider */

let newSwiper = new Swiper (".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
})



/*Background header*/

function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*scroll section*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset 
    sections.forEach(current =>  {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.remove('active-link')
        }
    } )
}
window.addEventListener('scroll', scrollActive)


/*scroll up*/


function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 460 ) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*Animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300
})

sr.reveal(`.home-swiper, .new-swiper, .newslc`)
sr.reveal(`.categorydata, .footercontent`, {interval: 100})
sr.reveal(`.aboutdata, .discountimg`, {origin: 'left'})
sr.reveal(`.aboutimg, .discountdata`, {origin: 'left'})

const h1 = document.getElementById('titulo');

    h1.addEventListener('mouseover', () => {
        // Ajusta la cantidad de burbujas para cubrir completamente el título
        for (let i = 0; i < 30; i++) {
            createBubble(h1);
        }
    });

function createBubble(parent) {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    
    // Aumenta el tamaño de las burbujas
    const size = Math.random() * 40 + 30; // Tamaño aleatorio entre 30 y 70 px
    const positionX = Math.random() * parent.offsetWidth; // Posición aleatoria en el ancho del h1
    const positionY = Math.random() * parent.offsetHeight; // Posición aleatoria en la altura del h1
    const delay = Math.random() * 2;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${positionX}px`;
    bubble.style.top = `${positionY}px`; // Asegúrate de que las burbujas aparezcan en diferentes alturas
    bubble.style.backgroundColor = `rgba(0, 153, 255, ${Math.random()})`; // Color azul con opacidad aleatoria
    bubble.style.animationDelay = `${delay}s`;

    parent.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 4000); // Remueve la burbuja después de 4 segundos (duración de la animación)
}