$( document ).ready(function() {
    $("#gotop").hide();

    $("#gotop").click(function(){
		$('html,body').animate({ scrollTop: 0}, 1200);
    });	
    $(window).scroll(function(){
		if ($(this).scrollTop() > 500){
	        $('#gotop').fadeIn();
	    }else {
	        $('#gotop').fadeOut();
	    }
	});
});


