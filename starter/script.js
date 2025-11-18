'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window
// all tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
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
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('CLICK');
//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element orginated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});

const h1 = document.querySelector('h1');

h1.lastElementChild.style.color = 'white';
h1.firstElementChild.style.color = 'black';

// tabbed component

// event handler for individual tabs
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  // Active Tab
  tabs.forEach(el => el.classList.remove('operations__tab--active'));

  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(el => el.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

// Menu Fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// DOM traversing

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });

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

// // Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//     // console.log(initialCoords);
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// const obsCallback = function (entries, observer) {
//   // IntersectionObsever wordt automatisch met 2 argumenten gecalled
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null, //default viewport
//   treshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions); // obsCallback word door de browser API geprovide met 2 argumenten
// observer.observe(section1); // functie invoken zodat de obsCallback functie wordt uitgeropen met obsOtions wanneer section 1 kruist (intersect) met de root

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0.1, 0.3], // tresholds wanneer de gebruiker in view scrollt en uit de view scrollt
};

const observer = new IntersectionObserver(obsCallback, obsOptions); // obsCallback word door de browser API geprovide (new intersectionObserver) met 2 argumenten
observer.observe(section1); // functie invoken zodat de obsCallback functie wordt uitgeropen met obsOtions wanneer section 1 kruist (intersect) met de root
