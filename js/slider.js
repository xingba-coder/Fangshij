$(function(){
	var $expand = $("#expand");
	var $left = $("#left");
	var $right = $("#right");
	var size = $("#expand img").size();
	var i = 0;
	$left.click(function(){
		i--;
		if(i<0){
			//alert("已经是第一张了");
			i=0;
		}
		else{
			$expand.animate({left:-(i*180)});
		}
	});
	$right.click(function(){
		i++;
		if(i>size-6){
			//alert("已经是最后一张了");
			i=size-6;
		}
		else{
			$expand.animate({left:-(i*180)});
		}
	});
})