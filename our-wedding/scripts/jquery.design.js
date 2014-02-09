$(document).ready(function() {
    var LOAD_IN_PROGRESS = false;

	var d1= (new Date()).setMonth(0, 0);
    $('#countdown > span').html(287 - (Math.floor((new Date()-d1)/86400000) + 1) + ' days');

    var currentContent = '#home';
    $(currentContent).addClass('active');

    $('.logo, nav a').click(function(e) {
    	e.preventDefault();
    	var contentDiv = $(this).attr('href');
        var topValue = $('nav').offset().top;

    	if((contentDiv != currentContent) && (LOAD_IN_PROGRESS == false)) {
    		currentContent = contentDiv;

            value = currentContent.substring(1);
            newImageURL = "img/header_" + value + ".jpg";

            var imgHeight = $('.topImage').height();

            /*grabbing the data*/
            $.ajax({
                url: newImageURL,
                cache: true,
                async: true,
                beforeSend: function () {
                    // console.log('--load in progress');
                    // LOAD_IN_PROGRESS = true;
                    $('.topImage').css('height', imgHeight);
                    $('.topImage').append('<div id="ajaxLoader"><span>...</span></div>');
                }
            })
            .fail(function() {
                // console.log("--Cant you see I'm looking for something here?"); 
                $('#ajaxLoader').remove();
            })
            .done(function() {
                // console.log('--load complete');
                var currentImg = $('.topImage img');

                var newImg = $('<img src="' + newImageURL + '" />');
                $('.topImage').append(newImg);

                $(newImg).css({
                    'display': 'none',
                    'position': 'absolute',
                    'height': imgHeight,
                    'top': '0px',
                    'left': '0px'
                }).fadeIn(400, function() {
                    $('.topImage').css('height','auto');
                    $(this).css({
                        'height': 'auto',
                        'position': 'relative'
                    });
                });

                $(currentImg).fadeOut(400, function() {
                    $(this).remove();
                });
                
                $('#ajaxLoader').remove();
                LOAD_IN_PROGRESS = false;
            });

			$('nav a').removeClass('active');
			$(this).addClass('active');

	    	$('.page.active').fadeOut('200').removeClass('active');
	    	$(contentDiv).fadeIn('400', function(e){
                $(this).addClass('active');

                if (contentDiv == '#details') {
                    
                }
            });            
    	}
    });

    $('.gallery#gallery_us').jflickrfeed({
        limit: 20,
        feedapi: 'photoset.gne',
        qstrings: {
            set: '72157630922203522',
            nsid: '73296552@N08'
        },
        itemTemplate: '<a class="fancybox" rel="gallery1" href="{{image_c}}" title="{{title}}">' +
                          '<img src="{{image_q}}" alt="{{title}}" />' +
                       '</a>'
    }, function(data) {
        $(".fancybox").fancybox({
            openEffect  : 'elastic',
            closeEffect : 'elastic'
        });
    });

    $('.gallery#gallery_family').jflickrfeed({
        limit: 20,
        feedapi: 'photoset.gne',
        qstrings: {
            set: '72157630922284690',
            nsid: '73296552@N08'
        },
        itemTemplate: '<a class="fancybox" rel="gallery2" href="{{image_c}}" title="{{title}}">' +
                          '<img src="{{image_q}}" alt="{{title}}" />' +
                       '</a>'
    }, function(data) {
        $(".fancybox").fancybox({
            openEffect  : 'elastic',
            closeEffect : 'elastic'
        });
    });

    $('.gallery#gallery_friends').jflickrfeed({
        limit: 20,
        feedapi: 'photoset.gne',
        qstrings: {
            set: '72157630922155228',
            nsid: '73296552@N08'
        },
        itemTemplate: '<a class="fancybox" rel="gallery3" href="{{image_c}}" title="{{title}}">' +
                          '<img src="{{image_q}}" alt="{{title}}" />' +
                       '</a>'
    }, function(data) {
        $(".fancybox").fancybox({
            openEffect  : 'elastic',
            closeEffect : 'elastic'
        });
    });

    $('.gallery#gallery_girls').jflickrfeed({
        limit: 20,
        feedapi: 'photoset.gne',
        qstrings: {
            set: '72157630922227154',
            nsid: '73296552@N08'
        },
        itemTemplate: '<a class="fancybox" rel="gallery4" href="{{image_c}}" title="{{title}}">' +
                          '<img src="{{image_q}}" alt="{{title}}" />' +
                       '</a>'
    }, function(data) {
        $(".fancybox").fancybox({
            openEffect  : 'elastic',
            closeEffect : 'elastic'
        });
    });

    $('.gallery#gallery_gators').jflickrfeed({
        limit: 20,
        feedapi: 'photoset.gne',
        qstrings: {
            set: '72157630922017492',
            nsid: '73296552@N08'
        },
        itemTemplate: '<a class="fancybox" rel="gallery5" href="{{image_c}}" title="{{title}}">' +
                          '<img src="{{image_q}}" alt="{{title}}" />' +
                       '</a>'
    }, function(data) {
        $(".fancybox").fancybox({
            openEffect  : 'elastic',
            closeEffect : 'elastic'
        });
    });

});