$(document).ready(function(){
	
	$(".topmenu>li").hover(function(){ //메인메뉴에 마우스를 가져다대면
		$(".topmenu>li>ul").stop(true,true).slideDown(); //서브메뉴 나옴
		$(".topmenu>div").stop(true,true).slideDown(); //가로100%로 사용할 menu0 
		$(".topmenu>li>a").css("color", "#333"); //메인메뉴 글자 색상
		$(".topmenu>li>ul").css("background-color", "#f0f0f0"); //서브메뉴 배경 색상
		$(".topmenu>li>ul>li>a").css("color", "#333"); //서브메뉴 글자 색상
		$(this).find('>a').css("color", "#e71e53"); //호버시 메인메뉴 글자 색상
        $(this).find('ul').css("background-color", "#4f99e2"); //호버시 서브메뉴 배경 색상
		$(this).find('>ul>li>a').css("color", "#fff"); //호버시 서브메뉴 글자 색상
	});
	
	$(".top_nav").mouseleave(function(){ //메인메뉴에 마우스가 떠나면
		$(".topmenu>li>ul").stop(true,true).slideUp(); //서브메뉴 사라짐
		$(".topmenu>div").stop(true,true).slideUp(); //가로100%로 사용할 menu0 사라짐
		$(".topmenu>li>a").css("color", "#333"); //메인메뉴 글자 색상 어둡게 돌아옴
	});
		
	
});