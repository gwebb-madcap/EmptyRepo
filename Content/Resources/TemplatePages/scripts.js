
// search tips
$(document).ready(function() {
		var searchLinks = '<p class="search-tips"><span id="searchtips">Search tips</span><span id="searchpopular">Popular searches on popular topics</span></p>';
		$('div.search-bar').append($('.tip'));
		$('div.search-bar').append($('.pop'));
		$('div.search-bar').append(searchLinks);
	});


// show tips 
//function deselect(e) {
//	$('.pop').slideFadeToggle(function() {
//	e.removeClass('selected');
//		});    
//}

$(function() {
		$('#searchtips').on('click', function() {
				if ($('#searchpopular').hasClass('selected')) {
					$('#searchpopular').removeClass('selected');              
					$('.pop').slideFadeToggle("linear", 0);
				}
				
				if($(this).hasClass('selected')) {
					$(this).removeClass('selected');               
					$('.tip').slideFadeToggle("linear", 0);
				} else {
					$(this).addClass('selected');
					$('.tip').slideFadeToggle("linear", 0);
				}
			});

		$('#searchpopular').on('click', function() {
				if ($('#searchtips').hasClass('selected')) {
					$('#searchtips').removeClass('selected');              
					$('.tip').slideFadeToggle("linear", 0);
				}
				
				if($(this).hasClass('selected')) {
					$(this).removeClass('selected');              
					$('.pop').slideFadeToggle("linear", 0);
				} else {
					$(this).addClass('selected');
					$('.pop').slideFadeToggle("linear", 0);
				}
			});
	
		$('.close').on('click', function() {
				//		deselect($('#searchtips'));
				return false;
			});
	});

$.fn.slideFadeToggle = function(easing, callback) {
		return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
	};
	

	// tabs
	$(document).ready(function() {	
		$('ul.tabs li').click(function() {
				var tab_id = $(this).attr('data-tab');
				$('ul.tabs li').removeClass('current');
				$('.tab-content').removeClass('current');
				$(this).addClass('current');
				$("#" + tab_id).addClass('current');
			})
	});
