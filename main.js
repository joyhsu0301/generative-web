$(document).ready(function(){
	// console.log('whats up');

	$.getJSON("http://worldtimeapi.org/api/timezone/Asia/Shanghai", function(json){
		console.log(json);
		if(json.day_of_week <= 5) {
			console.log("it is a weekday");
			$("#blue, #blue2, #blue3, #blue4").css({"width": +json.day_of_week*10+"%"});
			$("#red, #red2, #red3, #red4").css({"height": +json.day_of_week*5+"px"});
			$("#green, #green2, #green3").css({"height": +json.week_number*1.5+"px"});
			$("#yellow, #yellow2, #yellow3").css({"width": +json.week_number*1.5+"%"});
		} else {
			console.log("it's the weekend!");
			$("#blue, #blue2, #blue3, #blue4").css({"height": +json.week_number*1.5+"px"});
			$("#red, #red2, #red3, #red4").css({"width": +json.week_number*1.5+"%"});
			$("#green, #green2, #green3").css({"width": +json.day_of_week*10+"%"});
			$("#yellow, #yellow2, #yellow3").css({"height": +json.day_of_week*5+"px"});
		}
	});

});