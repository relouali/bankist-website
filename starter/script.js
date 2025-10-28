'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('scroll X/Y', window.scrollY, scrollX);
  console.log(
    'height/width/viewport',
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////
// page navigation

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie"> Got it! </button>';

// // header.before(message);
// // header.prepend(message); // as first child
// header.append(message); // as last child
// // header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', () =>
//     message.parentElement.removeChild(message)()
//   );

// // styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).width);
// console.log(Number.parseFloat(getComputedStyle(message).width + 30 + 'px'));

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 40 + '10px';
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('designer'));
// console.log(logo.dataset.versionNumber);

// // //classes
// // logo.classList.add('');
// // logo.classList.remove('');
// // logo.classList.toggle('');
// // logo.classList.contains('');

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('This is a heading!');
//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// // rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
//     0,
//     255
//   )})`;
// };
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   e.preventDefault();
//   console.log('LINK', e.target, e.currentTarget);
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('click');
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });
