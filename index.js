const d = document;
const slidesImg = d.querySelectorAll('.slide-image');
const slidesText = d.querySelectorAll('.slide-text');
const btnPerview = d.querySelector('.back');
const btnNext = d.querySelector('.next');
const menuList = d.querySelector('.menu__contain');
let i = 0;

d.addEventListener('click', (e) => {
  if (e.target.matches('.next') || e.target.matches('.next img')) {
    slidesText[i].classList.remove('active');
    slidesImg[i].classList.remove('active');
    i = (i + 1) % slidesText.length;
    slidesText[i].classList.add('active');
    slidesImg[i].classList.add('active');
  }
  if (e.target.matches('.back') || e.target.matches('.back img')) {
    slidesText[i].classList.remove('active');
    slidesImg[i].classList.remove('active');
    i = (i - 1 + slidesText.length) % slidesText.length;
    slidesText[i].classList.add('active');
    slidesImg[i].classList.add('active');
  }
  if (e.target.matches('.menu-open') || e.target.matches('.menu-open img')) {
    menuList.classList.add('active')
  }
  if (e.target.matches('.menu-close') || e.target.matches('.menu-close img')) {
    menuList.classList.remove('active')
  }
});
