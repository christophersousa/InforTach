export function createMenu(){
	$("body").on("load", access());
	function access(){
		scrollRols()
	}

	$(document).ready(function(){

		var flag=false;
		var scroll;

		$(window).scroll(function(){
			scroll = $(window).scrollTop();

			if (scroll >120) {
				if(!flag){
					$("#logo").css({"margin-top": "-5px", "width": "80px","height": "60px", "-webkit-transition": "background-color .5s;"});
					$(".containerHeader").css({"background-color":"#3c3c3c"});
					$("#home").css({"left": "-5px"});
					flag = true;
				}
			}else{
				if (flag){
					scrollRols()
					flag = false;
				}
			}

		});
	});

	function scrollRols(){
		$("#logo").css({"margin-top": "150px","width":"300px","height": "300px"});
		$(".containerHeader").css({"background-color":"transparent"});
		$("#home").css({"left": "-200px", "-webkit-animation": "margin-left 1.5s"});
	}
}