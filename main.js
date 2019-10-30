$(document).ready(function() {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        smartBackspace: true
    });
});


$('.nav li').click(function(){
  	$('.nav li').removeClass('active');
	$(this).addClass('active');
})
