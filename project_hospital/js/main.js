/*���� ���־��̹��� �ڵ� �������Ǵ� ������*/

old=0;
num=0;

function visual(){
	num++;
	if(num==3){
		num = 0;
	}
	$(".mvisual_img li").eq(old).stop(true,true).fadeOut(1500);
	$(".mvisual_img li").eq(num).stop(true,true).fadeIn(1500);
		
	$(".mvisual_btn li").eq(old).find("img").attr({"src":"../img/mdot_off.png"});
	$(".mvisual_btn li").eq(num).find("img").attr({"src":"../img/mdot_on.png"});
	old=num;
	
}

auto = setInterval("visual()", 3000);

$(document).ready(function(){

	/*��ưŬ���� �������Ǵ� ������*/

	$(".mvisual_btn li").click(function(){
		num=$(this).index(); 
		clearInterval(auto);
		
 	/* setTimeout("visual()",3000); */
		
			$(".mvisual_img li").eq(old).stop(true,true).fadeOut(500); 
			$(".mvisual_img li").eq(num).stop(true,true).fadeIn(500);
		
		
			$(".mvisual_btn li").eq(old).find("img").attr({"src":"../img/mdot_off.png"});
			$(".mvisual_btn li").eq(num).find("img").attr({"src":"../img/mdot_on.png"});
			old=num; 
	});

});