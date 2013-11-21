


	/* google search en widget*/
	(function() {
		var cx = '007647021846414703542:xesbis00i-g';
		var gcse = document.createElement('script'); 
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
			'//www.google.com/cse/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);

	})();




	/* sidebar slideDown */
	jQuery(document).ready(function($) {
		var openPanels="";
		var allPanels = $('#adv-custom-field-2 .advcustomvalue, #adv-custom-field-3 .advcustomvalue, #relation-posttypes-3 .relations-list, #relation-posttypes-4 .relations-list, #adv-custom-field-4 .advcustomvalue .advcustomvalue').hide();

		$('#adv-custom-field-2 .title, #adv-custom-field-3 .title, #adv-custom-field-4 .title').click(function() {
			if(this!=openPanels){
				allPanels.slideUp();
				$(this).parent().next().slideDown();
				openPanels = this
			}
		});

		$(' #relation-posttypes-3 .widget-title, #relation-posttypes-4 .widget-title').click(function() {
			if(this!=openPanels){
				allPanels.slideUp();
				$(this).next().slideDown();
				openPanels = this
			}
			return false;
		});
	});



	// Dom Ready
	jQuery(document).ready(function($) {
		
		/*** google ***/
		///placeholder
		var intervalId = setInterval(function() {
			// attendre le chargement
			if($( "input.gsc-input" ).length ){
				$( "input.gsc-input" ).attr( "placeholder" ,"Rechercher sur nos sites…");
				clearInterval(intervalId);
			}
		}, 500);



		

		/***  besoinbas  ***/

		$( "a[href$='besoinbas']" ).on( "click", function(event) {

			$(".besoin-bas").css("margin", "-40px");

			if(event.target.name=="besoin"){
				$("aside.besoin").css("display", "block");
				$("aside.metier").css("display", "none");
				$("aside.colonne .ul-besoin").css("display", "block");
				$("aside.colonne .ul-metier").css("display", "none");
			}else{
				$("aside.besoin").css("display", "none");
				$("aside.metier").css("display", "block");
				$("aside.colonne .ul-besoin").css("display", "none");
				$("aside.colonne .ul-metier").css("display", "block");
			}

			var intervalId_2 = setInterval(function() {
				// attendre le chargement
				if($( ".dropdown li,.dropdown li a" ).length ){
					clearInterval(intervalId_2);
					$( ".dropdown li,.dropdown li a" ).hover(
						function() {
							$(this).addClass("on");console.log("onnnn");
						}, function() {
							$(this).removeClass("on");
						}
					);
				}
			}, 500);
		});
		
		// reparam la lightbox
		// http://docs.dev7studios.com/jquery-plugins/nivo-lightbox
		var oldClass="";
		var newClass="";
		rlArgs.selector = 'lightbox';
		$('a[rel*="'+rlArgs.selector+'"]').nivoLightbox({
			afterShowLightbox : function(lightbox){replaceClose ();},
		});

		$(window).resize(function () {
			replaceClose ();
		});
		function replaceClose (){
			$(".nivo-lightbox-content").removeClass(oldClass).addClass(newClass);
			oldClass= newClass;

			//console.log(lightbox);
			var lightbox = $('.nivo-lightbox-content > div, .nivo-lightbox-content > iframe');
			if(lightbox !== undefined ){
				var vleft	= lightbox.offset().left;
				var vtop = lightbox.offset().top ;
				var vouterWidth	= lightbox.outerWidth();
				$( ".nivo-lightbox-close" ).offset({ top: vtop - 16, left: vleft + vouterWidth - 16});
			}


			$('a[rel*="'+rlArgs.selector+'"]').on( "click", function(event) {
				//$(".nivo-lightbox-content").removeClass(oldClass).addClass(event.target.name);
				//oldClass= event.target.name;
			});
		}
		$('a[rel*="'+rlArgs.selector+'"]').on( "click", function(event) {
			newClass= event.target.name;
		});

	/* fonction lucas
		function cacher(){
			$('.content').fadeOut('slow', function() { //fade out the content
				$('#fermer').fadeOut('slow'); //slides the content into view.
				$('#panel').animate({width:"0", opacity:0.1, right:"10px"}, 500); //slide the #panel back to a width of 0
			});
		}
		function afficher(){
			$('#panel').animate({width:"400px", opacity:0.9, right:"10px"}, 500, function() {//sliding the #panel to 400px
				$('.content').fadeIn('slow'); //slides the content into view.
				$('#fermer').fadeIn('slow'); //slides the content into view.
			});
		}*/

	});

	// Extend jQuery.fn with our new method
	jQuery.extend( jQuery.fn, {
		// Name of our method & one argument (the parent selector)
		hasParent: function( p ) {
			// Returns a subset of items using jQuery.filter
			return this.filter(function () {
				// Return truthy/falsey based on presence in parent
				return $(p).find(this).length;
			});
		}
	});