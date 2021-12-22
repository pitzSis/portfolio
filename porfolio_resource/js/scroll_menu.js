$(function(){
	var menu = $('#topmenu > ul > li');
	var contents = $('#contain > div');
    
	menu.click(function(event){
		event.preventDefault();
       
		var tg = $(this);
		var i = tg.index();
		var section = contents.eq(i);
		/* console.log(section); */
		var tt = section.offset().top;
		$('html, body').stop().animate({scrollTop:tt});
	});
    
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
/* 		if(sct >= contents.eq(0).offset().top){
			menu.removeClass('on');
			menu.eq(0).addClass('on');
		}
		if(sct >= contents.eq(1).offset().top){
			menu.removeClass('on');
			menu.eq(1).addClass('on');
		}
		if(sct >= contents.eq(2).offset().top){
			menu.removeClass('on');
			menu.eq(2).addClass('on');
		} */
		contents.each(function(){
			var tg = $(this);
			var i = tg.index();
			if(tg.offset().top <= sct){
			menu.removeClass('on');
			menu.eq(i).addClass('on');
			}
		});
	});
});