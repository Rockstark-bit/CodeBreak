const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');

const cargarimagen = (entradas, observador) =>{
    // console.log('entradas')
    //console.log('observador')
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        } else{
            entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarimagen, {
    root: null,
    rootMargin:"0px 0px 0px 0px",
    threshold: 0.2
});

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);


const header = document.querySelector('header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  } else {
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  }
  prevScrollPos = currentScrollPos;
});