jQuery(document).ready(function(){
	var options = {
		'speed' : 500,			// 스피드
		'initTop' : 350,		// 기본 top위치
		'alwaysTop' : false,	// 항상고정 : true, 이동 : false
	}
	
	$('.continue').click(function(){
		$('html, body').animate({scrollTop: $('#profile').offset().top-0},800);
	});
	$('.foot1').click(function(){
		$('html, body').animate({scrollTop: $('#wrap').offset().top-0},800);
	});
	$('.foot2').click(function(){
		$('html, body').animate({scrollTop: $('#profile').offset().top-0},800);
	});
	$('.foot3').click(function(){
		$('html, body').animate({scrollTop: $('#skill').offset().top-0},800);
	});
	$('.foot4').click(function(){
		$('html, body').animate({scrollTop: $('#web1').offset().top-0},800);
	});
	$('.foot5').click(function(){
		$('html, body').animate({scrollTop: $('#web2').offset().top-0},800);
	});
	$('.foot6').click(function(){
		$('html, body').animate({scrollTop: $('#web3').offset().top-0},800);
	});
	$('.foot7').click(function(){
		$('html, body').animate({scrollTop: $('#web4').offset().top-0},800);
	});
	$('.foot8').click(function(){
		$('html, body').animate({scrollTop: $('#web5').offset().top-0},800);
	});
	$('.foot9').click(function(){
		$('html, body').animate({scrollTop: $('#work').offset().top-0},800);
	});
	$('.foot10').click(function(){
		$('html, body').animate({scrollTop: $('#contact').offset().top-0},800);
	});
	
	/* 오른쪽 float 버튼 */
	
	$('#floatDiv').Floater(options);
	
	$('.btn00').click(function(){
		$('html, body').animate({scrollTop: $('#wrap').offset().top-0},800);
	});
	$('.btn01').click(function(){
		$('html, body').animate({scrollTop: $('#profile').offset().top-0},800);
	});
	$('.btn02').click(function(){
		$('html, body').animate({scrollTop: $('#skill').offset().top-0},800);
	});
	$('.btn03').click(function(){
		$('html, body').animate({scrollTop: $('#web1').offset().top-0},800);
	});
	$('.btn04').click(function(){
		$('html, body').animate({scrollTop: $('#web2').offset().top-0},800);
	});
	$('.btn05').click(function(){
		$('html, body').animate({scrollTop: $('#web3').offset().top-0},800);
	});
	$('.btn06').click(function(){
		$('html, body').animate({scrollTop: $('#web4').offset().top-0},800);
	});
	$('.btn07').click(function(){
		$('html, body').animate({scrollTop: $('#web5').offset().top-0},800);
	});
	$('.btn08').click(function(){
		$('html, body').animate({scrollTop: $('#work').offset().top-0},800);
	});
	$('.btn09').click(function(){
		$('html, body').animate({scrollTop: $('#contact').offset().top-0},800);
	});

	$(window).scroll(function(){
		var button = $('#floatDiv > ul > li');
		var sct = $(window).scrollTop();
		$('#contain > div').each(function(){
			var tg = $(this);
			var i = tg.index();
			if(tg.offset().top <= sct){
					button.removeClass('active');
					button.eq(i).addClass('active');
			}
		});
	});
	
});	