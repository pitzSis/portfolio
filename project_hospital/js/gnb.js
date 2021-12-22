$(function(){
    var menu = $('#gnb > li');
	// 1뎁스 메뉴를 선택하여 변수 menu에 할당
	var wrap = $('#gnbWrap');
	// 1뎁스와 2뎁스 메뉴를 감싸고 있는 엘리먼트를 wrap 변수에 할당
	var menuHeight = menu.children('#gnbWrap>#gnb>li>a').height()+0;
	// 1뎁스 메뉴의 높이를 얻어 menuHeight 변수에 할당
	var pageURL = location.href;
	var activeMenu;
	
	menu.on({
		mouseover:function(){
			var tg = $(this);
			menu.removeClass('on');
			tg.addClass('on');
			var th = menuHeight + tg.find('>.sGnbArea').height();
			wrap.stop().animate({height:th});
		},
		mouseout:function(){
			var tg = $(this);
			menu.removeClass('on');
			var th = menuHeight + tg.find('>.sGnbArea').height();
			wrap.stop().animate({height:menuHeight});			
		}
	});
	
	menu.each(function(i){
		var tg = $(this);
		var sub = tg.find('> .sGnbArea > ul > li');
		var menuURL = tg.children('a').attr('href');
		active = pageURL.indexOf(menuURL);
		if(active > -1) activeMenu = tg;
		// active > -1 크다면 문자열이 존재한다면
		sub.each(function(j){
			var tg = $(this);
			var subURL = tg.children('a').attr('href');
			active = pageURL.indexOf(subURL);
			if(active > -1) activeMenu = tg;
		});
	
		sub.on({
			mouseover:function(event){
				var tg = $(this);
				sub.removeClass('on');
				tg.addClass('on');
			},
			mouseout:function(){
				var tg = $(this);
				sub.removeClass('on');
			}
		});
	
	});	
});





