$(function(){
	var container_h = $(window).height() - 31;
	var h = container_h/2 - 1;

	console.log(container_h)
	$('.metro li').each(function(i, v){
		$(v).css({height: h + 'px', webkitTransform: 'translate3d(0, '+ i*h +'px, 0)'});
	});
});