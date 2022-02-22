/*================ SHOW MENU ===============*/
const navmenu = document.getElementById('nav-menu');
      navtoggle = document.getElementById('nav-toggle');
      navclose = document.getElementById('nav-close');

/*================ MENU SHOW ===============*/
/* Validate if constant exists */
if(navtoggle){
      navtoggle.addEventListener('click', () =>{
            navmenu.classList.add('show-menu')
      })
}

/*================ MENU HIDDEN===============*/
/* Validate if constant exists */
if(navclose){
      navclose.addEventListener('click', () =>{
            navmenu.classList.remove('show-menu')
      })
}

/*================ REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkaction(){
      const navMenu = document.getElementById('nav-menu')
      // Cuando le demos click en cada nav__link, eliminamos la clase de menú show //
      navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkaction))

/*================ CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
      const header = document.getElementById('header')
      // Cuando el desplazamiento sea mayor que 100 de altura de ventana gráfica, se agregue la clase de encabezado de desplazamiento a la etiqueta del encabezado //
      if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*================ VIDEO ===============*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){
      if(videoFile.paused){
            // PLAY VIDEO
            videoFile.play()

            // NOSOTROS CAMBIAREMOS EL ICONO
            videoIcon.classList.add('ri-pause-line')
            videoIcon.classList.remove('ri-play-fill')
      }else{
            // PAUSE VIDEO
            videoFile.pause()

            // NOSOTROS CAMBIAREMOS EL ICONO
            videoIcon.classList.remove('ri-pause-line')
            videoIcon.classList.add('ri-play-fill')
      }
}

videoButton.addEventListener('click', playPause)

function finalVideo(){
      // VIDEO ENDS, ICON CHANGE
      videoIcon.classList.remove('ri-pause-line')
      videoIcon.classList.add('ri-play-fill')
}
// TERMINA CUANDO EL VIDEO TERMINE
videoFile.addEventListener('ended', finalVideo)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
      distance: '60px',
      duration: 2800,
      // reset: true,
  })
  
  
  sr.reveal(`.home__data, .home__social-link, .home__info,
             .discover__container,
             .experience__data, .experience__overlay,
             .place__card,
             .sponsor__content,
             .footer__data, .footer__rights`,{
      origin: 'top',
      interval: 100,
  })
  
  sr.reveal(`.about__data, 
             .video__description,
             .subscribe__description`,{
      origin: 'left',
  })
  
  sr.reveal(`.about__img-overlay, 
             .video__content,
             .subscribe__form`,{
      origin: 'right',
      interval: 100,
})

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
})