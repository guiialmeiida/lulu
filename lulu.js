(function() {
	//nCage 
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(1).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(2).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(3).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(4).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(5).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(6).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(7).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(8).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(9).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(10).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(11).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(12).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(13).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(14).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(15).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(16).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(17).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(18).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(19).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(19).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(20).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(21).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(22).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/a%20(23).png',
			'https://raw.githubusercontent.com/correamth/lulu/master/frases%20lul/image_2019_08_08T17_06_34_937Z.png',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 