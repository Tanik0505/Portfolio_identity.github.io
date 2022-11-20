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
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
			const scriptURL = 'https://script.google.com/macros/s/AKfycbxGPIACtV5-XeAJ2oHkQpO2-T5I6R7GAa1bYy6_x4mZ2c7tUSYkGXJacaMvRPeIXQ0/exec'
			const form = document.forms['submit-to-google-sheet']
            const submit = document.getElementById("submit")
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => {
                        submit.innerHTML = "Thanks for contacting."
                        setTimeout(function(){
                            submit.innerHTML =""
                        },2000)
                        form.reset()
                })
				.catch(error => console.error('Error!', error.message))
			})