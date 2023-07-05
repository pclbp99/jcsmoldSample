const loader = document.querySelector('.loader');
const html = document.querySelector('html');

html.style.overflowX = 'hidden';
html.style.overflowY = 'hidden';

window.addEventListener('load', ()=>{

     setTimeout(() => {
    
        loader.style.opacity = '0';
        html.style.overflowY = 'auto';
        
        setTimeout(() => {
          loader.style.display = 'none';
      }, 400);
        
    }, 1500);

});


// Navbar scrolling
const nav = document.querySelector('nav');
let prevScrollPos = window.pageYOffset;

function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
  } else {
    if (prevScrollPos > currentScrollPos) {
      nav.style.top = '0';
    } else {
      nav.style.top = `-${nav.offsetHeight}px`;
    }
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);


// Navbar color change
window.addEventListener('scroll', function() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth > 768) {
      const specialSection05 = document.getElementById('sec05');
      const specialSection07 = document.getElementById('sec07');
      const navbar = document.querySelector('.navbar');
      
      const sectionRect05 = specialSection05.getBoundingClientRect();
      const sectionRect07 = specialSection07.getBoundingClientRect();
      
      if ((sectionRect05.top <= 0 && sectionRect05.bottom > 0) ||
          (sectionRect07.top <= 0 && sectionRect07.bottom > 0)) {
        navbar.classList.add('black');
      } else {
        navbar.classList.remove('black');
      }
    }
  });
  



// Smooth scrolling
$(document).ready(function() {
  $('.scroll-link').on('click', function(event) {
    event.preventDefault();

    const target = $(this).data('scroll-target');
    const $targetSection = $(target);

    if ($targetSection.length) {
      const offset = $targetSection.offset().top;
      const duration = 500;

      ScrollTrigger.getAll().forEach(trigger => trigger.disable());

      $('html, body').animate({
        scrollTop: offset
      }, duration, function() {
        window.location.hash = target;
        ScrollTrigger.getAll().forEach(trigger => trigger.enable());
      });
    }
  });

  if (window.location.hash) {
    const target = window.location.hash;
    const $targetSection = $(target);

    if ($targetSection.length) {
      const offset = $targetSection.offset().top;
      $('html, body').scrollTop(offset);
    }
  }
});

  
/* factory tab slide */
$(function(){
    $('.slideCom').hide();
    $('.list-group a').each(function(){
        $(this).click(function(){
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                var View = $(this).attr('rel'); 
                $('#' + View).hide();
            } else {
                $('.list-group a').removeClass('active');
                $(this).addClass('active');
                $('.slideCom').hide();
                var View = $(this).attr('rel'); 
                $('#' + View).show();
            }
        });
    });
});
