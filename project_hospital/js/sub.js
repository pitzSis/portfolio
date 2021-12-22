$(function(){
	$('.tabSet').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('ul.tabs>li>a');
		var panelDivs=topDiv.find('.panels>div.panel');
		
		var lastAnchor;
		var lastPanel;
		anchors.show(); //css에서 display:none 했던 tab이 보여짐
		lastAnchor=anchors.filter('.active');
		lastPanel=$(lastAnchor.attr('href'));
		//lastPanel=#panel2-3
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(event){
			event.preventDefault(); //하이퍼링크 동작 무효화
			var currentAnchor=$(this);
			var currentPanel=$(currentAnchor.attr('href'));
			lastAnchor.removeClass('active');
			currentAnchor.addClass('active');
			lastPanel.hide();
			currentPanel.show();
			lastAnchor=currentAnchor;
			lastPanel=currentPanel;
		});
	});
});