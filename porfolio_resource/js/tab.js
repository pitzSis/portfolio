// 탭

$(document).ready(function(){
	
	$("ul.panel>li:not("+$("ul.tab>li>a.selected").attr("href")+")").hide();
	/* css만으로는 모든패널이 펼쳐진상태임->선택된 상태의 패널(a태그의 "selected"속성에 해당하는 패널) 이외의 패널을 hide()
	위의 명령을 풀어서 보면 $("ul.panel li:not(#tab1)").hide();  */
	
	$("ul.tab>li>a").click(function(){  //탭이 클릭되면
		$("ul.tab li a").removeClass("selected"); //모든탭(ul.tab li a)의 "selected"속성 일단 삭제
		$(this).addClass("selected");  //클릭된 탭에 "selected"속성 처리
		$("ul.panel li").hide();
		/* $("ul.panel li").slideUp("fast"); */
		$($(this).attr("href")).show();
		/* $($(this).attr("href")).slideDown("fast"); */
		
		return false;  //a태그에 대해서 이벤트를 설정하는 경우에는 반드시 삽입함.
	});
	
});

// tab4

align=[[],[],[],[],[]];  /*배열-이미지룰링개수만큼 생성*/

align[0][0]=-1011*1;
align[0][1]=-1011*2;
align[0][2]=-1011*0;

align[1][0]=-1011*0;
align[1][1]=-1011*1;
align[1][2]=-1011*2;

align[2][0]=-1011*2;
align[2][1]=-1011*0;
align[2][2]=-1011*1;

iold=0;
inum=0;
imgnum=0;
chk=true;

/* function iplay(){
	inum++
	if(inum==3){
		inum=0;
	}
	$("#tab4>.tab4_in .artbtn>img").eq(iold).attr({"src":"../img/tab/tab_off.png"});
	$("#tab4>.tab4_in .artbtn>img").eq(inum).attr({"src":"../img/tab/tab_on.png"});
	$("#tab4>.tab4_in>.tab4_box").stop(true,true).animate({"margin-left":"-=1011px"},function(){
		$(this).append($("#tab4>.tab4_in>.tab4_box>div").first());
		$(this).css({"margin-left":"-1011px"});
		iold=inum;
		imgnum=inum;
	});
} */


function area(){
	 $("#tab4>.tab4_in>.tab4_box").css({"margin-left":"-1011px"}); 
	if(imgnum==0){
		$("#tab4>.tab4_in>.tab4_box").append(div0, div1, div2);
	}
	else if(imgnum==1){
		$("#tab4>.tab4_in>.tab4_box").append(div1, div2, div0);
	}
	else{
		$("#tab4>.tab4_in>.tab4_box").append(div2, div0, div1);
	}
}

$(document).ready(function(){
	
	//컨텐츠 유용한정보 애니매이션 마진 -
	/* iauto=setInterval("iplay()", 4000); */
	
	div0 = $("#tab4>.tab4_in>.tab4_box>div").eq(0);
	div1 = $("#tab4>.tab4_in>.tab4_box>div").eq(1);
	div2 = $("#tab4>.tab4_in>.tab4_box>div").eq(2);
	
/* 	$("#tab4>.tab4_in").hover(function(){
		clearInterval(iauto);
	}, function(){
		iauto=setInterval("iplay()", 4000);
	}); */
	
	$("#tab4>.tab4_in .artbtn>img").click(function(){
		
		/* clearInterval(iauto); */
		if(chk){
			chk=false;
			inum=$(this).index();
			itgx=align[imgnum][inum];

			$("#tab4>.tab4_in .artbtn>img").eq(iold).attr({"src":"../img/tab/tab_off.png"});
			$(this).attr({"src":"../img/tab/tab_on.png"});
			$("#tab4>.tab4_in>.tab4_box").stop(true,true).animate({"margin-left":itgx}, function(){				
				iold=inum;
				imgnum=inum;
				chk=true;
				area();
			});
		}
		
		
	});
	
});