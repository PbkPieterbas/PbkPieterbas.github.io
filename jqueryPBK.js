$(document).ready(function(){
	
	// main height
	var screenHeight =  $(window).height(); 
	var screenWidth = $(window).width();
	$(".containerDiv").css ("height",screenHeight);
	
	// horizontalGuideLines
	var horizontalGuide1 = screenHeight*0.382
	var belowHorizontalGuide1 = (screenHeight-horizontalGuide1)
	var horizontalGuide2 = horizontalGuide1 + belowHorizontalGuide1*0.618 - 40
	
	
	// Change margins so that text aligns
	var fontHeight1 = parseInt($("h1").css("font-size"))
	var fontHeight2 = parseInt($("h3").css("font-size"))
	var marginTop1 = horizontalGuide2-fontHeight1
	var marginTop2 = horizontalGuide2-fontHeight2
	
	if (screenWidth > 1010) {
		$(".infoTextDiv").css ("margin-top",marginTop1)
		$(".flex-item").css ("margin-top",marginTop2)
	}
	
	
	// Set Image Size
	var heightProfileImage = screenHeight*0.618*0.75
	var widthProfileImage = heightProfileImage
	var xProfileImage = screenWidth*0.382-0.5*widthProfileImage
	var yProfileImage = horizontalGuide1 - heightProfileImage*0.6
	
	$(".profileImageDiv").css ("height",heightProfileImage);
	$(".profileImageDiv").css ("width",widthProfileImage);
	
	if (screenWidth > 1010) {
		$(".profileImageDiv").css ("left",xProfileImage);
		$(".profileImageDiv").css ("top",yProfileImage);
	}
	
});
	
	
$(window).on("resize",function(){
	
		
// main height
	var screenHeight =  $(window).height(); 
	var screenWidth = $(window).width();
	$(".containerDiv").css ("height",screenHeight);
	
	// horizontalGuideLines
	var horizontalGuide1 = screenHeight*0.382
	var belowHorizontalGuide1 = (screenHeight-horizontalGuide1)
	var horizontalGuide2 = horizontalGuide1 + belowHorizontalGuide1*0.618 - 40
	
	
	// Change margins so that text aligns
	var fontHeight1 = parseInt($("h1").css("font-size"))
	var fontHeight2 = parseInt($("h3").css("font-size"))
	var marginTop1 = horizontalGuide2-fontHeight1
	var marginTop2 = horizontalGuide2-fontHeight2
	
	if (screenWidth > 1010) {
		$(".infoTextDiv").css ("margin-top",marginTop1)
		$(".flex-item").css ("margin-top",marginTop2)
	} else {
		$(".infoTextDiv").css ("margin-top",60)
		$(".flex-item").css ("margin-top",50)
	}
	
	
	// Set Image Size
	var heightProfileImage = screenHeight*0.618*0.75
	var widthProfileImage = heightProfileImage
	var xProfileImage = screenWidth*0.382-0.5*widthProfileImage
	var yProfileImage = horizontalGuide1 - heightProfileImage*0.6
	
	$(".profileImageDiv").css ("height",heightProfileImage);
	$(".profileImageDiv").css ("width",widthProfileImage);
	
	if (screenWidth > 1010) {
		$(".profileImageDiv").css ("left",xProfileImage);
		$(".profileImageDiv").css ("top",yProfileImage);
	} else {
		$(".profileImageDiv").css ("left","auto");
		$(".profileImageDiv").css ("top","5%");
	}
	
	
});