/* 통합검색 */

$(document).ready(function(){
	
	bb=true;
	$(".com_search a").click(function(){
		$(this).find(">img").attr({"src":"../img/search_sel_on.png"});
		if(bb){		
			$(this).next().show();
			bb=false;
		}
	else{
		$(this).find(">img").attr({"src":"../img/search_sel.png"});
		$(this).next().hide();
			bb=true;	
		}
	});
	
});

/* 팝업창 롤링 */

pold=0;
pnum=0;
chk=true;

function pvisual(){
	pnum++;
	if(pnum==5){
		pnum=0;
	}
	$(".con01_right .popup_btn>span").eq(pold).removeClass("p_active");
	$(".con01_right .popup_btn>span").eq(pnum).addClass("p_active");
	
	$(".con01_right .popup_visual li").eq(pold).stop(true,true).fadeOut(1000);
	$(".con01_right .popup_visual li").eq(pnum).stop(true,true).fadeIn(1000, function(){
		pold=pnum;
	});
}


$(document).ready(function(){
	
	pauto=setInterval("pvisual()", 3000);
	/* 버튼오버시 롤링멈춤*/	 
	$(".con01_right").hover(function(){
		clearInterval(pauto);
	}, function(){
		pauto=setInterval("pvisual()", 3000);
	});


	/* 비주얼 버튼처리 */
	$(".con01_right .popup_btn>span").click(function(){
		if(chk){
			chk=false;
			pnum=$(this).index();	//0,1,2,3..
			
			$(".con01_right .popup_btn>span").eq(pold).removeClass("p_active");
			$(this).addClass("p_active");
			
			$(".con01_right .popup_visual li").eq(pold).stop(true,true).fadeOut();
			$(".con01_right .popup_visual li").eq(pnum).stop(true,true).fadeIn(function(){
				pold=pnum;
				chk=true;
			});
		}
	});
	
});

/* 영상으로 떠나는 춘천여행 */

vold=0;
vnum=0;

$(document).ready(function(){

	$(".video_tab>li").click(function(){
		vnum=$(this).index(); 
				
			$(".video_panel>li").eq(vold).stop(true,true).fadeOut();
			$(".video_panel>li").eq(vnum).stop(true,true).fadeIn();
				
			$(".video_tab>li").eq(vold).find(">img").attr({"src":"../img/video_off_btn0"+(vold)+".png"});
			$(".video_tab>li").eq(vnum).find(">img").attr({"src":"../img/video_on_btn0"+(vnum)+".png"});
			vold=vnum;
			
	});

});

/* con03_탭메뉴 */

$(document).ready(function(){
	
	$("ul.tab_panel>li:not("+$("ul.tab_title>li>a.tab_selected").attr("href")+")").hide();
	
		$("ul.tab_title>li>a").click(function(){  //탭이 클릭되면
		$("ul.tab_title>li>a").removeClass("tab_selected"); //모든탭(ul.tab_title li a)의 "tab_selected"속성 일단 삭제
		$(this).addClass("tab_selected");  //클릭된 탭에 "tab_selected"속성 처리
		$("ul.tab_panel>li").hide();
		$($(this).attr("href")).show();
		
		return false;  //a태그에 대해서 이벤트를 설정하는 경우에는 반드시 삽입함.
	});
	
});

/* 배너영역 */

$(document).ready(function(){
	
	$("#scroller_roll2").scroller_roll({
		title_show: 'enable',
		time_interval: '30', //롤링속도
		window_padding: '0',
		border_size: '0',
		images_width: '184',
		images_height: '47',
		images_margin: '10',
		show_count: '6'
	});
 
});























