$(function(){
    var menu = $('#gnb > li');
	// 1���� �޴��� �����Ͽ� ���� menu�� �Ҵ�
	var wrap = $('#gnbWrap');
	// 1������ 2���� �޴��� ���ΰ� �ִ� ������Ʈ�� wrap ������ �Ҵ�
	var menuHeight = menu.children('#gnbWrap>#gnb>li>a').height()+0;
	// 1���� �޴��� ���̸� ��� menuHeight ������ �Ҵ�
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
		// active > -1 ũ�ٸ� ���ڿ��� �����Ѵٸ�
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





