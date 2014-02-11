$(document).ready(function(){
	innt_logo_control();
	innt_continue_reading();
	innt_what_is_the_scroll();
	innt_menu_scroll();
//	Sharing Disabled
//	innt_sharrre();
	innt_wall_wrap_ups();
	innt_article_spacing();
	});

	
function innt_sharrre(){
	$('#twitter').sharrre({share: {twitter: true},enableHover: false,enableTracking: true,buttons: { twitter: {via: '_JulienH'}},click: function(api, options){api.simulateClick();api.openPopup('twitter');}});
	$('#facebook').sharrre({share: {facebook: true},enableHover: false,enableTracking: true,click: function(api, options){api.simulateClick();api.openPopup('facebook');}});
	};
	
function innt_article_spacing(){
	do_article_spacing();
	window.setTimeout(function(){ 
		do_article_spacing(); 
		},1000)
	$(window).afterResize(function(){
		do_article_spacing();
        }, true, 50 );
	};

function innt_menu_scroll(){
	$('#head nav li').each(function(){
		$(this).find('a').on('click',function(){
			$.scrollTo($($(this).attr('href')),1000);
			event.preventDefault();
			});
		});
	};

function innt_wall_wrap_ups(){
	$('#wall .cnt article section .post .post-talk').each(function(){
		if($(this).find('ol li').length>0){
			$(this).find('ol').hide();
			$(this).find('h3').on('click',function(){
				$(this).parent().find('ol').slideToggle(500,function(){
					$(this).parent().find('h3').hasClass('on')?$(this).parent().find('h3').removeClass('on'):$(this).parent().find('h3').addClass('on');
					});
				event.preventDefault();
				});
			}
		else{
			$(this).find('h3').addClass('off');
			$(this).find('ol').hide();
			};
		if(location.hash==('#open_'+$(this).parent().attr('id'))){
			$(this).find('h3').addClass('on');
			$(this).find('ol').show();
			};
		});
	$('#wall .cnt article section .post .comment-respond').each(function(){
		$(this).find('form').hide();
		$(this).find('h3').on('click',function(){
			$(this).parent().find('form').slideToggle(500,function(){
				$(this).parent().find('h3').hasClass('on')?$(this).parent().find('h3').removeClass('on'):$(this).parent().find('h3').addClass('on');
				});
			event.preventDefault();
			});
		});
	$('#wall .cnt article section .post .post-talk:first').click();
	};
	
function innt_continue_reading(){
	$('#main > .cnt > article > header:not(:last)').each(function(){
		$(this).append('<button class="continue-reading">Continue reading</button>');
		$(this).delegate('.continue-reading','click',function(){
			$.scrollTo($(this).parents('article').find('section'),1000);
			});
		});
	$('#main > .cnt > article > section:not(:last)').each(function(){
		$(this).append('<button class="continue-reading">Continue reading</button>');
		$(this).delegate('.continue-reading','click',function(){
			$.scrollTo($(this).parents('article').next('article').find('header'),1000);
			});
		});
	};
	
function innt_logo_control(){
	if($('html').hasClass('no-svg')){
		$('#head .cnt .img').append($('#head .cnt .img img').clone());
		$('#head .cnt .img img:last').attr('src',$('#head .cnt .img img:first').attr('src').substring(0,$('#head .cnt .img img:first').attr('src').lastIndexOf('-dark'))+'.png');
		$('#head .cnt .img img:first').remove();
		logo_flipping = false ;
		}
	else{
		$('#head .cnt .img').append($('#head .cnt .img img').clone());
		$('#head .cnt .img img:first').addClass('dark').addClass('off');
		$('#head .cnt .img img:last').addClass('light').attr('src',$('#head .cnt .img img:first').attr('src').substring(0,$('#head .cnt .img img:first').attr('src').lastIndexOf('-dark'))+'.svg');
		logo_flipping = true ;
		};
	};

var logo_flipping = false
function innt_what_is_the_scroll(){
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		var windowHeightHalf = ($(window).height()*0.66);
		$('#main article').each(function(n) {
			var topDistance = $(this).offset().top;
			if((topDistance-windowHeightHalf) < scrollTop){
				the_index = $(this).index();
				$('#head nav li.on').removeClass('on');
				$('#head nav li').eq(the_index).addClass('on');
				};
			if(logo_flipping){
				if(the_index == n){
					mod_scrollTop = ((scrollTop-windowHeightHalf) + ($('#head img').height()));
					if((mod_scrollTop > topDistance) && (mod_scrollTop > (topDistance + $(this).find('header').height()) ) ){
						$('.light').addClass('off');
						$('.dark').removeClass('off');
						}
					else{
						$('.light').removeClass('off');
						$('.dark').addClass('off');
						};
					};
				};
			});
		});
	};
	
function do_article_spacing(){
	if($(window).width()>480){
		$('#main > .cnt > article').each(function(n){
			if( $(this).find('header').height() > $(this).find('.img').height() ){
				h = 0;
				}
			else{
				h = ( $(this).find('.img').height() - $(this).find('header').height() );
				};
			$(this).find('section').css('margin-top',h);
			});
		}
	else{
		$('#main > .cnt > article').each(function(){
			$(this).find('section').css('margin-top',0);
			});
		};
		$('#main .cnt #register-leeds-data-mill-interest section').css('min-height',$('#main .cnt #register-leeds-data-mill-interest header .contact-form').height());
	};
