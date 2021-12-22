align=[[],[],[],[],[]];  /*배열-이미지룰링개수만큼 생성*/

align[0][0]=-1236*1;
align[0][1]=-1236*2;
align[0][2]=-1236*3;
align[0][3]=-1236*4;
align[0][4]=-1236*5;
align[0][5]=-1236*6;
align[0][6]=-1236*0;

align[1][0]=-1236*0;
align[1][1]=-1236*1;
align[1][2]=-1236*2;
align[1][3]=-1236*3;
align[1][4]=-1236*4;
align[1][5]=-1236*5;
align[1][6]=-1236*6;

align[2][0]=-1236*6;
align[2][1]=-1236*0;
align[2][2]=-1236*1;
align[2][3]=-1236*2;
align[2][4]=-1236*3;
align[2][5]=-1236*4;
align[2][6]=-1236*5;

align[3][0]=-1236*5;
align[3][1]=-1236*6;
align[3][2]=-1236*0;
align[3][3]=-1236*1;
align[3][4]=-1236*2;
align[3][5]=-1236*3;
align[3][6]=-1236*4;

align[4][0]=-1236*4;
align[4][1]=-1236*5;
align[4][2]=-1236*6;
align[4][3]=-1236*0;
align[4][4]=-1236*1;
align[4][5]=-1236*2;
align[4][6]=-1236*3;

align[4][0]=-1236*3;
align[4][1]=-1236*4;
align[4][2]=-1236*5;
align[4][3]=-1236*6;
align[4][4]=-1236*0;
align[4][5]=-1236*1;
align[4][6]=-1236*2;

align[4][0]=-1236*2;
align[4][1]=-1236*3;
align[4][2]=-1236*4;
align[4][3]=-1236*5;
align[4][4]=-1236*6;
align[4][5]=-1236*0;
align[4][6]=-1236*1;

/*이미지 자동슬라이드*/
mnum=0;
mold=0;
chk=true;

function mslide(){
	mnum++;
	if(mnum==7){
		mnum=0;
	}
		
	$(".mvisual_in ul").stop(true,true).animate({"margin-left":"-=1236px"},2000,function(){
		$(this).append($(".mvisual_in ul li").first());
		$(this).css({"margin-left":"-902px"});
		mold=mnum;
	});
};

$(document).ready(function(){

	auto=setInterval("mslide()",6000); //자동화
	
	/* 다음보기 */
	$(".btn_side .nextbtn").click(function(){
		
		if(chk){
			chk=false;
			mnum++;
			if(mnum==7){
				mnum=0;
			}
		
			clearInterval(auto);
			auto=setInterval("mslide()",6000);
		
			$(".visual_box").stop(true,true).animate({"margin-left":"-=1236px"},500,function(){
				
				$(this).append($(".visual_box li").first());
				$(this).css({"margin-left":"-902px"});
				mold=mnum;
				chk=true;
			});			
		}
	});
	
	/* 이전보기 */	
	$(".btn_side .prevbtn").click(function(){
		
		if(chk){
			chk=false;
			mnum--;
			if(mnum==-1){
				mnum=6;
			}
			clearInterval(auto);
			auto=setInterval("mslide()",6000);
			
			$(".visual_box").stop(true,true).animate({"margin-left":"+=1236px"},500,function(){
				$(this).prepend($(".visual_box li").last());
				$(this).css({"margin-left":"-902px"});
				mold=mnum;
				chk=true;
			});
			
		}
	});
	
	/* play, stop 버튼 */
		
	$(".mvisual_in>.btn_play>.mbtn_stop").click(function(){
		clearInterval(auto);
		$(".mvisual_in>.btn_play").find(">.mbtn_stop").attr({"src":"../img/mstop_btn_on.png"});
		$(".mvisual_in>.btn_play").find(">.mbtn_play").attr({"src":"../img/mplay_btn_off.png"});
	});
	
	$(".mvisual_in>.btn_play>.mbtn_play").click(function(){
		auto=setInterval("mslide()",6000);
		$(".mvisual_in>.btn_play").find(">.mbtn_play").attr({"src":"../img/mplay_btn_on.png"});
		$(".mvisual_in>.btn_play").find(">.mbtn_stop").attr({"src":"../img/mstop_btn_off.png"});
	});
	
});
