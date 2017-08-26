$(function(){
			var topDistance = 272;
        	var showDistance = 1;
        	// var totop = "<div class='toTop'><i class='iconfont'>&#xe63d;</i>
        	// <div class='fix'>回到顶部</div></div>";
        	var thisTop = $(window).scrollTop() + topDistance;
        	// $(".sevice").append(totop);//在container的div里插入我们前面定义好的html标签元素
        	$(".toTop").css("top",thisTop);//设置goToTop按钮top的css属性和属性值

			// if($(window).scrollTop() < showDistance) {
   //          	$(".toTop").hide();//滚动条距离顶端的距离小于showDistance是隐藏goToTop按钮
   //      	}
			$(window).scroll(function(){
				thisTop = $(this).scrollTop() + topDistance;
				$(".toTop").css("top",thisTop);
				if($(this).scrollTop()>showDistance){
					$(".toTop").fadeIn();
				}
			else{
					$(".toTop").fadeOut();
				}
			});
			$(".toTop").click(function(){
				$("html,body").animate({scrollTop:0},'slow');
			});
		});