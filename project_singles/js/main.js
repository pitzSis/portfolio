/* tab */

$(function(){
	$('.tabSet').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('ul.tabs a');
		var panelDivs=topDiv.find('div.panel');
		
		var lastAnchor;
		var lastPanel;
		anchors.show(); //css에서 display:none 했던 tab이 보여짐
		lastAnchor=anchors.filter('.on');
		lastPanel=$(lastAnchor.attr('href'));
		//lastPanel=#panel2-3
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(event){
			event.preventDefault(); //하이퍼링크 동작 무효화
			var currentAnchor=$(this);
			var currentPanel=$(currentAnchor.attr('href'));
			lastAnchor.removeClass('on');
			currentAnchor.addClass('on');
			lastPanel.hide();
			currentPanel.show();
			lastAnchor=currentAnchor;
			lastPanel=currentPanel;
		});
	});
});

/*이미지 자동슬라이드*/
pnum=0;
pold=0;
chk=true;

function slide(){
	pnum++;
	if(pnum==4){
		pnum=0;
	}
		
	$(".pList").stop(true,true).animate({"margin-left":"-=247px"},1000,function(){
		$(this).append($(".pList li").first());
		$(this).css({"margin-left":"-247px"});
		pold=pnum;
	});
};

$(document).ready(function(){

	auto=setInterval("slide()",3000); //자동화
	
	/* 다음보기 */
	$(".p_bt_area .p_right").click(function(){
		if(chk){
			chk=false;
			pnum++;
			if(pnum==4){
				pnum=0;
			}
		
			clearInterval(auto);
			auto=setInterval("slide()",7000);
		
			$(".pList").stop(true,true).animate({"margin-left":"-=247px"},500,function(){
				
				$(this).append($(".pList li").first());
				$(this).css({"margin-left":"-247px"});
				pold=pnum;
				chk=true;
			});			
		}
	});
	
	/* 이전보기 */	
	$(".p_bt_area .p_left").click(function(){
		if(chk){
			chk=false;
			pnum--;
			if(pnum==-1){
				pnum=3;
			}
			clearInterval(auto);
			auto=setInterval("slide()",7000);
			
			$(".pList").stop(true,true).animate({"margin-left":"+=247px"},500,function(){
				$(this).prepend($(".pList li").last());
				$(this).css({"margin-left":"-247px"});
				pold=pnum;
				chk=true;
			});
			
		}
	});	
	
});

jQuery(document).ready(function(){

	/* 검색창 안내 가이드 */
	$('#email_address').on('focus',function(){
		$(this).prev().css('left','-9999px');
	});
	$('#email_address').on('blur',function(){
		if($(this).val()=='') $(this).prev().css('left','180px');
	});
	
});