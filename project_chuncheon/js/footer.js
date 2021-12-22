$(document).ready(function(){
	
	/* TOP 올리기 */
	
	$("#btn_top_wrap>a>img").hover(function(){
		$(this).attr("src", "../img/btn_top_on.png");
	}, function(){
		$(this).attr("src", "../img/btn_top_off.png");
	});
	
	/* 저작권보호정책 */
	$(".footcopy_area>a>img").hover(function(){
		$(this).attr("src", "../img/footer_policy_on.png");
	}, function(){
		$(this).attr("src", "../img/footer_policy_off.png");
	});
	
});