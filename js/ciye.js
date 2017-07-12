$(document).ready(function(){
	var i=0;
	$(".list li").mouseover(function() {
		var i=0;
				var i=$(this).index();
				$(".pic-list").stop().animate({marginLeft:i*-1280+"px"}, 300)
				$(this).addClass('click_after')
					.siblings()
					.removeClass('click_after')
			})


		$(".next").click(function (){

       $(".pic-list").animate({marginLeft:"-1290px"},500,
       function(){

            $(".pic-list li:first").appendTo(".pic-list");

            $(".pic-list").css("marginLeft","0");

       });
})

    //left

    $(".prev").click(function(){

        $(".pic-list li:last").prependTo(".pic-list:last");

        $(".pic-list").css("marginLeft","-1290px");

        $(".pic-list").animate({marginLeft:0},500);
    })

})