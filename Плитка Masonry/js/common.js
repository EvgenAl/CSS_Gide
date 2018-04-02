$( document ).ready(function() {
	$('.item-masonry').hover(
		function(){
			$(this).find('.cover-item-gallery').fadeIn(1000);
		},
		function(){
			$(this).find('.cover-item-gallery').fadeOut(1000);
		}
		);

	var sizer = '.sizer4';

    var container = $('#gallery');
//imageLoaded and Masonry
    container.imagesLoaded(function(){//проверка загрузки картинок
    	container.masonry({//масонри запускается только когда все картинки загрузятся
    		itemSelector: '.item-masonry',
    		columnWidth: sizer,
    		percentPosition: true//указываем что ширина в процентах
    	});
    });
});