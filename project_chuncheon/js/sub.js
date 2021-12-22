/* ------------------------- lnb ------------------------- */

$(document).ready(function(){
	
	$(".lnb>li").click(function(){ //주메뉴 클릭했을 때
		$(".lnb>li").removeClass("lnb_active1");
		$(this).addClass("lnb_active1");
		$(".lnb>li").not(this).find("ul").stop(true,true).slideUp(200);
		$(this).find(">ul").stop(true,true).slideToggle(200);		
	});
	
});

/* ------------------------- sub 2-1 제이쿼리 ------------------------- */

$(document).ready(function(){
	
	$("ul.mountain_panel>li:not("+$("ul.mountain_title>li a.s_selected").attr("href")+")").hide();
	
	$("ul.mountain_title>li>a").click(function(){
		$("ul.mountain_title>li>a").removeClass("s_selected");
		$(this).addClass("s_selected");
		$("ul.mountain_panel>li").hide();
		$($(this).attr("href")).show();
		
		return false;  //a태그에 대해서 이벤트를 설정하는 경우에는 반드시 삽입함.
	});
	
	//#stab20 호버시 이미지 변경
	
	snum=0;
	
	$("#stab20>ul.mpost_all>li").hover(function(){
		var snum=$(this).index();
		$(this).find(">img").attr({"src":"../img/sub/sub2/all/mount_over_0"+snum+".png"});
	},function(){
	 	var snum=$(this).index(); 
		$(this).find(">img").attr({"src":"../img/sub/sub2/all/mount_off_0"+snum+".png"});
		
	});
	
	//#stab21 호버시 이미지 변경
	
	ssnum=0;
	
	$("#stab21>ul.mpost_moun>li").hover(function(){
		var ssnum=$(this).index();
		$(this).find(">img").attr({"src":"../img/sub/sub2/mountain/mount_over_0"+ssnum+".png"});
	},function(){
	 	var ssnum=$(this).index(); 
		$(this).find(">img").attr({"src":"../img/sub/sub2/mountain/mount_off_0"+ssnum+".png"});
		
	});
	
	//#stab22 호버시 이미지 변경
	
	sssnum=0;
	
	$("#stab22>ul.mpost_water>li").hover(function(){
		var sssnum=$(this).index();
		$(this).find(">img").attr({"src":"../img/sub/sub2/waterfall/mount_over_0"+sssnum+".png"});
	},function(){
	 	var sssnum=$(this).index(); 
		$(this).find(">img").attr({"src":"../img/sub/sub2/waterfall/mount_off_0"+sssnum+".png"});
		
	});
	
});

/* ------------------------- sub 3-1 제이쿼리 ------------------------- */

//#stab30 호버시 이미지 변경
	
$(document).ready(function(){	
	
	festanum=0;
	
	$("#stab30>ul.fpost_all>li").hover(function(){
		var festanum=$(this).index();
		$(this).find(">img").attr({"src":"../img/sub/sub3/all/festa_over_0"+festanum+".png"});
	},function(){
	 	var festanum=$(this).index(); 
		$(this).find(">img").attr({"src":"../img/sub/sub3/all/festa_off_0"+festanum+".png"});
		
	});
	
});








/* ------------------------- sub 4-1 제이쿼리 ------------------------- */

//#stab40 호버시 이미지 변경
	
$(document).ready(function(){	
	
	$("#stab40>.food_top").hover(function(){
		$(this).find("a>img").attr({"src":"../img/sub/sub4/alltop_over.png"});
	},function(){
		$(this).find("a>img").attr({"src":"../img/sub/sub4/alltop_off.png"});
	});
	
	foodnum=0;
	
	$("#stab40>ul.foodpost_etc>li").hover(function(){
		var foodnum=$(this).index();
		$(this).find("a>img").attr({"src":"../img/sub/sub4/allover_0"+foodnum+".png"});
	},function(){
	 	var foodnum=$(this).index(); 
		$(this).find("a>img").attr({"src":"../img/sub/sub4/all_0"+foodnum+".png"});
		
	});
	
});




















