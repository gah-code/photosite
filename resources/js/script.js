$(document).ready(function () {
  $('.js--section-introduction').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px;',
    }
  );

  $('.js--scroll-to-form').click(function () {
    $('html, body').animate(
      {scrollTop: $('.js--section-form').offset().top},
      1000
    );
  });

  /* Navigation scroll */
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });
});

const slidePage = document.querySelector('.slide-page');
const nextBtnFirst = document.querySelector('.firstNext');
const prevBtnSec = document.querySelector('.prev-1');
const nextBtnSec = document.querySelector('.next-1');
const prevBtnThird = document.querySelector('.prev-2');
const nextBtnThird = document.querySelector('.next-2');
const prevBtnFourth = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');
const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');
let current = 1;

nextBtnFirst.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-25%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnSec.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-50%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnThird.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-75%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
submitBtn.addEventListener('click', function () {
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
  setTimeout(function () {
    alert('Your Form Successfully Signed up');
    location.reload();
  }, 800);
});

prevBtnSec.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '0%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
