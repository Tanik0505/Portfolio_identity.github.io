$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  // Select all navigation links
const links = document.querySelectorAll('nav a');

// Iterate through each link
for (const link of links) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let start = null;
    
    // Animate the scrolling
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    });
  });
}

// Easing function for smooth scrolling
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}
});

// Add to google sheet 

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxgQMI02s7ejGGL4DSzbPXtkrIdciWJHbytE5oCm4hANKgyuoNWSKa-EWbgF6WmK4VrcQ/exec'
    const form = document.forms['submit-to-google-sheet']
          const submit = document.getElementById("submit")
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
                      submit.innerHTML = "Thanks for contacting."
                      setTimeout(function(){
                          submit.innerHTML =""
                      },1000)
                      form.reset()
              })
      .catch(error => console.error('Error!', error.message))
    })

// gallery added

    const gallery = document.querySelector('.gallery');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    // Open the lightbox when an image is clicked
    gallery.addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
        lightboxImage.src = event.target.src;
        lightbox.classList.add('active');
      }
    });
    
    // Close the lightbox when the close button is clicked
    lightboxClose.addEventListener('click', function() {
      lightbox.classList.remove('active');
    });
    
    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', function(event) {
      if (event.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });