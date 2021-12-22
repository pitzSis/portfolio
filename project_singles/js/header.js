jQuery(document).ready(function(){

	$('.login_wrap>a').on('click',function(){
		$('#login_f').animate({top:'25px'},500);
		return false;
	});
	
	$(".login_wrap .login_close_btn, input[alt='로그인버튼']")
	.on('click',function(){
		$('#login_f').animate({top:'-500px'},500);
		return false;
	});
	
	$('#user_id, #user_pw').on('focus',function(){
		$(this).prev().css('left','-9999px');
	});
	$('#user_id, #user_pw').on('blur',function(){
		if($(this).val()=='') $(this).prev().css('left','8px');
	});

	/* 검색창 안내 가이드 */
	$('#keyword').on('focus',function(){
		$(this).prev().css('left','-9999px');
	});
	$('#keyword').on('blur',function(){
		if($(this).val()=='') $(this).prev().css('left','50px');
	});
	
});































