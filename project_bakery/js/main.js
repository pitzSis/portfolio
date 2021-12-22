//GNB_PC버전

$(document).ready(function(){
	
	$(".topmenu>ul>li").hover(function(){
		var gnum=$(this).index();
		$(this).find(">a>img").attr({"src":"../img/main/gnb0"+gnum+"_hover.png"});
	},function(){
	 	var gnum=$(this).index();
		$(this).find(">a>img").attr({"src":"../img/main/gnb0"+gnum+"_off.png"});
	});
	
});

//메인비주얼

old=0;
num=0;

function visual(){
	num++;
	if(num==3){
		num = 0;
	}
	$("#mainvisual>ul>li").eq(old).stop(true,true).fadeOut(1500);
	$("#mainvisual>ul>li").eq(num).stop(true,true).fadeIn(1500, function(){
		old = num;
	});
	
}

$(document).ready(function(){
	auto=setInterval("visual()", 4000);
	
	/*좌우버튼 클릭시*/

	$(".mainnext").click(function(){
		num=old+1;
		snum=$("#mainvisual>ul>li").length; /*이미지 li의 개수선언 */
		
		if(num==3){   /* 이미지총개수*/
			num=0;
		}
			
		if(num<snum){ /*num : 이미지전체개수보다 적으면 수행*/
			$("#mainvisual>ul>li").eq(old).stop(true,true).fadeOut(500);
			$("#mainvisual>ul>li").eq(num).stop(true,true).fadeIn(500); 
		
			old=num; 
		}
	});

	$(".mainprev").click(function(){
		num=old-1;
	
		if(num==-1){
			num=2;  /*총이미지개수-1*/
		}
		
		if(num>=0){
			$("#mainvisual>ul>li").eq(old).stop(true,true).fadeOut(500);
			$("#mainvisual>ul>li").eq(num).stop(true,true).fadeIn(500);
		
			old=num; 
		}
	});

});

// 라뜰리에김가 메뉴소개

$(document).ready(function(){
	
	$(".menu_con>ul>li").hover(function(){
		var mnum=$(this).index();
		$(this).find(">a>img").attr({"src":"../img/main/con02_mobile_hover0"+mnum+".png"});
	},function(){
	 	var mnum=$(this).index()+1;
		$(this).find(">a>img").attr({"src":"../img/main/con02_visual"+mnum+".png"});
	});
	
});

// 라뜰리에김가 베스트메뉴

$(document).ready(function(){
	
	$(".best_con>ul>li").hover(function(){
		var bnum=$(this).index()+1;
		$(this).find(">a>img").attr({"src":"../img/main/con03_visualon"+bnum+".png"});
	},function(){
	 	var bnum=$(this).index()+1;
		$(this).find(">a>img").attr({"src":"../img/main/con03_visual"+bnum+".png"});
	});
	
	// 전체상품 보기 버튼
	$(".best_con>.allmenu_btn>a").hover(function(){
		$(this).find(">img").attr({"src":"../img/main/btn/btn_product_hover.png"});
	},function(){
		$(this).find(">img").attr({"src":"../img/main/btn/btn_product.png"});
	});
	
});

// 재료이야기

iold=0;
inum=0;

$(document).ready(function(){
	
	/*좌우버튼 클릭시*/

	$(".con04_next").click(function(){
		inum=iold+1;
		ssnum=$(".con04_con>li").length; /*이미지 li의 개수선언 */
		
		if(inum==5){   /* 이미지총개수*/
			inum=0;
		}
			
		if(inum<ssnum){
			$(".con04_con>li").eq(iold).stop(true,true).fadeOut(500);
			$(".con04_con>li").eq(inum).stop(true,true).fadeIn(500); 
		
			iold=inum; 
		}
	});

	$(".con04_prev").click(function(){
		inum=iold-1;
	
		if(inum==-1){
			inum=4;  /*총이미지개수-1*/
		}
		
		if(inum>=0){
			$(".con04_con>li").eq(iold).stop(true,true).fadeOut(500);
			$(".con04_con>li").eq(inum).stop(true,true).fadeIn(500); 
		
			iold=inum; 
		}
	});

});