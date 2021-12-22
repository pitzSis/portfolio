$(document).ready(function(){

	$(".menu_toggle_btn").click(function(){
		$('.gnb').stop(true.true).slideToggle(500);
	});
	
});

$(document).ready(function(){
	
	numm=0;
	
	/* 탑메뉴 */
	$(".gnb>li").hover(function(){
		numm=$(this).index();
		$(this).find(">a>img").attr({"src":"../img/m_img/gnbover_0"+numm+".png"});
		$(".topmenu>li .smenu").stop(true,true).slideDown();
  
	},function(){
		$(this).find(">a>img").attr({"src":"../img/m_img/gnb_0"+numm+".png"});
	});
 
});