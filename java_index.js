
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