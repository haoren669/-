$(document).ready(function(){
	// var para=document.createElement("home-1_inner");//创建一个标签p节点名为para  
 //    var node=document.createTextNode("");//定义节点元素的内容  
 //    para.appendChild(node);//将元素和内容联系起来  
      
 //    var element=document.getElementById("dowebok");//找到节点为div1的节点  
 //    element.appendChild(para);//向节点div1中添加新节点para  
 // 获取窗口宽度
if (window.innerWidth)
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
winWidth = document.body.clientWidth;
// 获取窗口高度
if (window.innerHeight)
winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight;
// 通过深入 Document 内部对 body 进行检测，获取窗口大小
if (document.documentElement && document.documentElement.clientHeight && document
	.documentElement.clientWidth)
{
winHeight = document.documentElement.clientHeight;
winWidth = document.documentElement.clientWidth;
}

//daohang
		$(".home-1").click(function() {
			//定义一个变量
			var id =$ (this).attr("href");//获取a标签里的属性值   //偏移
			$("html,body").animate({scrollTop:$(id).offset().top},500)
		});						//获取元素与顶部的距离
		$(".home-2").click(function() {
			var id =$ (this).attr("href");
			$("html,body").animate({scrollTop:$(id).offset().top},500)
		});
		$(".home-3").click(function() {
			var id =$ (this).attr("href");
			$("html,body").animate({scrollTop:$(id).offset().top},500)
		});
		$(".home-4").click(function() {
			var id =$ (this).attr("href");
			$("html,body").animate({scrollTop:$(id).offset().top},500)
		});
		$(".home-5").click(function() {
			var id =$ (this).attr("href");
			$("html,body").animate({scrollTop:$(id).offset().top},500)
		});
		$(".home-6").click(function() {
			var id =$ (this).attr("href");
			$("html,body").animate({scrollTop:$(id).offset().top},500)
		});
		$(".home-7").click(function() {
			var id =$ (this).attr("href");
			$("html,body").animate({scrollTop:$(id).offset().top},500)
		});

		//shichagundong

	    $(document).ready(function() {
	      $('.home_1').iosParallax({
	        movementFactor: 200
	      });//拍瑞克斯Parallax效果  ioscell滑动demo

	      $('.bg-1').iosParallax({
	        movementFactor: 50
	      });

	      $('.home_2').iosParallax({
	        movementFactor: 200
	      });

	      $('.bg-3').iosParallax({
	        movementFactor: 100
	      });

	      $('.home_3').iosParallax({
	        movementFactor: 200
	      });

	      $('.bg-4').iosParallax({
	        movementFactor: 100
	      });

	      $('.home_4').iosParallax({
	        movementFactor: 50
	      });

	      $('.bg-5').iosParallax({
	        movementFactor: 100
	      });

	      $('.home_5').iosParallax({
	        movementFactor: 200
	      });

	      $('#home-6 .center .box1').iosParallax({
	        movementFactor: 30
	      });

	      $('#home-6 .center .box2').iosParallax({
	        movementFactor: 10
	      });

	    });

	    //雪花

			 $(".snow-canvas").snow();
		

		//gun
		$(window).scroll(function(){
			//定义一个变量
			var	t=$(this).scrollTop();//获取顶部的距离

			$(".gun").click(function(){

		$("body,html").stop().animate({scrollTop:"0"},1300);
				
	})
		});

		
		

 
})