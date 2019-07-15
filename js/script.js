
$(".home").click(function(){
	$("html").animate({scrollTop:$("#headerSection").offset().top},600);
});	

$(".navbar-brand").click(function(){
	$("html").animate({scrollTop:$("#headerSection").offset().top},600);
})
$(".about").click(function(){
	$("html").animate({scrollTop:$("#features").offset().top},600);
});
$(".works").click(function(){
	$("html").animate({scrollTop:$("#caseStudy").offset().top},600);
})

$(".contact").click(function(){
	$("html").animate({scrollTop:$("#contact").offset().top},600);
});