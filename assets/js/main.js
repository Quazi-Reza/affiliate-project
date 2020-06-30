/*
	Hielo by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

var settings = {

	banner: {

		// Indicators (= the clickable dots at the bottom).
			indicators: true,

		// Transition speed (in ms)
		// For timing purposes only. It *must* match the transition speed of "#banner > article".
			speed: 1500,

		// Transition delay (in ms)
			delay: 5000,

		// Parallax intensity (between 0 and 1; higher = more intense, lower = less intense; 0 = off)
			parallax: 0.25

	}

};

$(document).ready(function() {
	$('.custom-select').select2();
});
$(document).ready(function() {
    $('.custom-select').select2();
});


$(function() {
	$('#btnAddsite').click(function(){
		$( "#mySite" ).append( "<div class=\"col-md-12 mb-5\">\n" +
			"                       <div class=\"card bg-transparent\">\n" +
			"                           <div class=\"card-header bg-transparent\">\n" +
			"                               <h4 class=\"card-title text-justify\">Add new website</h4>\n" +
			"                           </div>\n" +
			"                           <div class=\"card-body\">\n" +
			"                               <div class=\"form-group\">\n" +
			"                                   <label for=\"media_type\">Media Type</label>\n" +
			"                                   <select name=\"media_type\" id=\"media_type\" class=\"custom-select\">\n" +
			"                                       <option value=\"\" style=\"display: none;color: #999999;\">Select Media Type</option><option value=\"1\">network</option><option value=\"12\">social</option><option value=\"13\">content</option><option value=\"14\">shopping</option><option value=\"15\">email</option><option value=\"16\">search</option><option value=\"17\">media buy</option><option value=\"18\">dropshipping</option><option value=\"19\">3rd party tools</option><option value=\"20\">O2O</option><option value=\"21\">others</option>\n" +
			"                                   </select>\n" +
			"                               </div>\n" +
			"                               <div class=\"row\">\n" +
			"                                   <div class=\"col-md-6\">\n" +
			"                                       <div class=\"form-group\">\n" +
			"                                           <label for=\"site_name\">Website name</label>\n" +
			"                                           <input type=\"text\" name=\"site_name\" id=\"site_name\" class=\"form-control\" placeholder=\"Site name\">\n" +
			"                                       </div>\n" +
			"                                   </div>\n" +
			"                                   <div class=\"col-md-6\">\n" +
			"                                       <div class=\"form-group\">\n" +
			"                                           <label for=\"url\">URL</label>\n" +
			"                                           <input type=\"text\" name=\"url\" id=\"url\" class=\"form-control\" placeholder=\"www.example.domain\">\n" +
			"                                       </div>\n" +
			"                                   </div>\n" +
			"                               </div>\n" +
			"                               <div class=\"form-group\">\n" +
			"                                   <label for=\"traffic\">Traffic Distribution(The region you primarily operate in)</label>\n" +
			"                                   <select name=\"traffic\" id=\"traffic\" class=\"select2 custom-select\"  multiple=\"multiple\">\n" +
			"\n" +
			"                                       <option value=\"America\">America</option><option value=\"Andorra\">Andorra</option><option value=\"Afghanistan\">Afghanistan</option><option value=\"Antigua\" and=\"\" barbuda=\"\">Antigua and Barbuda</option><option value=\"Albania\">Albania</option><option value=\"Armenia\">Armenia</option><option value=\"Angola\">Angola</option><option value=\"Argentina\">Argentina</option><option value=\"Austria\">Austria</option><option value=\"Australia\">Australia</option><option value=\"Aruba\">Aruba</option><option value=\"Azerbaijan\">Azerbaijan</option><option value=\"Algeria\">Algeria</option><option value=\"Bosnia\" and=\"\" herzegovina=\"\">Bosnia and Herzegovina</option><option value=\"Barbados\">Barbados</option><option value=\"Bangladesh\">Bangladesh</option><option value=\"Belgium\">Belgium</option><option value=\"Burkina\" faso=\"\">Burkina Faso</option><option value=\"Bulgaria\">Bulgaria</option><option value=\"Bahrain\">Bahrain</option><option value=\"Burundi\">Burundi</option><option value=\"Benin\">Benin</option><option value=\"Bermuda\">Bermuda</option><option value=\"Brunei\">Brunei</option><option value=\"Bolivia\">Bolivia</option><option value=\"Brazil\">Brazil</option><option value=\"Bahamas\">Bahamas</option><option value=\"Bhutan\">Bhutan</option><option value=\"Botswana\">Botswana</option><option value=\"Belarus\">Belarus</option><option value=\"Belize\">Belize</option><option value=\"Canada\">Canada</option><option value=\"Cayman\" islands=\"\">Cayman Islands</option><option value=\"Central\" african=\"\" republic=\"\">Central African Republic</option><option value=\"Chile\">Chile</option><option value=\"Cameroon\">Cameroon</option><option value=\"China\">China</option><option value=\"Colombia\">Colombia</option><option value=\"Costa\" rica=\"\">Costa Rica</option><option value=\"Cuba\">Cuba</option><option value=\"Cape\" verde=\"\">Cape Verde</option><option value=\"Cyprus\">Cyprus</option><option value=\"Czech\" republic=\"\">Czech Republic</option><option value=\"Croatia\">Croatia</option><option value=\"Cambodia\">Cambodia</option><option value=\"Comoros\">Comoros</option><option value=\"Democratic\" republic=\"\" of=\"\" the=\"\" congo=\"\">Democratic Republic of the Congo</option><option value=\"Djibouti\">Djibouti</option><option value=\"Denmark\">Denmark</option><option value=\"Dominica\">Dominica</option><option value=\"Dominican\" republic=\"\">Dominican Republic</option><option value=\"Ecuador\">Ecuador</option><option value=\"Estonia\">Estonia</option><option value=\"Egypt\">Egypt</option><option value=\"Eritrea\">Eritrea</option><option value=\"Ethiopia\">Ethiopia</option><option value=\"Equatorial\" guinea=\"\">Equatorial Guinea</option><option value=\"Finland\">Finland</option><option value=\"Fiji\">Fiji</option><option value=\"Falkland\" islands=\"\">Falkland Islands</option><option value=\"Micronesia\">Micronesia</option><option value=\"Faroe\" islands=\"\">Faroe Islands</option><option value=\"France\">France</option><option value=\"Germany\">Germany</option><option value=\"Gabon\">Gabon</option><option value=\"Grenada\">Grenada</option><option value=\"Georgia\">Georgia</option><option value=\"Ghana\">Ghana</option><option value=\"Gibraltar\">Gibraltar</option><option value=\"Gambia\">Gambia</option><option value=\"Guinea\">Guinea</option><option value=\"Greece\">Greece</option><option value=\"Guatemala\">Guatemala</option><option value=\"Guinea-Bissau\">Guinea-Bissau</option><option value=\"Guyana\">Guyana</option><option value=\"Hong\" kong=\"\">Hong Kong</option><option value=\"Honduras\">Honduras</option><option value=\"Haiti\">Haiti</option><option value=\"Hungary\">Hungary</option><option value=\"Indonesia\">Indonesia</option><option value=\"Ireland\">Ireland</option><option value=\"Israel\">Israel</option><option value=\"India\">India</option><option value=\"Iraq\">Iraq</option><option value=\"Iran\">Iran</option><option value=\"Iceland\">Iceland</option><option value=\"Italy\">Italy</option><option value=\"Jamaica\">Jamaica</option><option value=\"Jordan\">Jordan</option><option value=\"Japan\">Japan</option><option value=\"Kenya\">Kenya</option><option value=\"Kyrgyzstan\">Kyrgyzstan</option><option value=\"Kiribati\">Kiribati</option><option value=\"Kuwait\">Kuwait</option><option value=\"Kazakhstan\">Kazakhstan</option><option value=\"Laos\">Laos</option><option value=\"Lebanon\">Lebanon</option><option value=\"Liechtenstein\">Liechtenstein</option><option value=\"Liberia\">Liberia</option><option value=\"Lesotho\">Lesotho</option><option value=\"Lithuania\">Lithuania</option><option value=\"Luxembourg\">Luxembourg</option><option value=\"Latvia\">Latvia</option><option value=\"Libya\">Libya</option><option value=\"Morocco\">Morocco</option><option value=\"Monaco\">Monaco</option><option value=\"Moldova\">Moldova</option><option value=\"Montenegro\">Montenegro</option><option value=\"Madagascar\">Madagascar</option><option value=\"Macedonia\">Macedonia</option><option value=\"Mali\">Mali</option><option value=\"Myanmar\">Myanmar</option><option value=\"Mongolia\">Mongolia</option><option value=\"Macao\">Macao</option><option value=\"Mauritania\">Mauritania</option><option value=\"Malta\">Malta</option><option value=\"Mauritius\">Mauritius</option><option value=\"Maldives\">Maldives</option><option value=\"Malawi\">Malawi</option><option value=\"Mexico\">Mexico</option><option value=\"Malaysia\">Malaysia</option><option value=\"Mozambique\">Mozambique</option><option value=\"Namibia\">Namibia</option><option value=\"North\" korea=\"\">North Korea</option><option value=\"Niger\">Niger</option><option value=\"Nigeria\">Nigeria</option><option value=\"Nicaragua\">Nicaragua</option><option value=\"Netherlands\">Netherlands</option><option value=\"Norway\">Norway</option><option value=\"Nepal\">Nepal</option><option value=\"Nauru\">Nauru</option><option value=\"New\" zealand=\"\">New Zealand</option><option value=\"Oman\">Oman</option><option value=\"Panama\">Panama</option><option value=\"Peru\">Peru</option><option value=\"Papua\" new=\"\" guinea=\"\">Papua New Guinea</option><option value=\"Philippines\">Philippines</option><option value=\"Pakistan\">Pakistan</option><option value=\"Poland\">Poland</option><option value=\"Puerto\" rico=\"\">Puerto Rico</option><option value=\"Palestine\">Palestine</option><option value=\"Portugal\">Portugal</option><option value=\"Palau\">Palau</option><option value=\"Paraguay\">Paraguay</option><option value=\"Qatar\">Qatar</option><option value=\"Romania\">Romania</option><option value=\"Republic\" of=\"\" congo=\"\">Republic of Congo</option><option value=\"Russia\">Russia</option><option value=\"Rwanda\">Rwanda</option><option value=\"Singapore\">Singapore</option><option value=\"Saudi\" arabia=\"\">Saudi Arabia</option><option value=\"Turkey\">Turkey</option><option value=\"Sri\" lanka=\"\">Sri Lanka</option><option value=\"Solomon\" islands=\"\">Solomon Islands</option><option value=\"Serbia\">Serbia</option><option value=\"Switzerland\">Switzerland</option><option value=\"Spain\">Spain</option><option value=\"Saint\" kitts=\"\" and=\"\" nevis=\"\">Saint Kitts and Nevis</option><option value=\"Saint\" lucia=\"\">Saint Lucia</option><option value=\"South\" korea=\"\">South Korea</option><option value=\"United\" arab=\"\" emirates=\"\">United Arab Emirates</option><option value=\"United\" kingdom=\"\">United Kingdom</option><option value=\"Ukraine\">Ukraine</option>\n" +
			"                                   </select>\n" +
			"                               </div>\n" +
			"                               <div class=\"form-group\">\n" +
			"                                   <label for=\"category\">Prefer Category(The topics best describe the content of your website or mobile app)</label>\n" +
			"                                   <select name=\"category\" id=\"category\" class=\"select2 custom-select\"  multiple=\"multiple\">\n" +
			"                                       <option value=\"\"  style=\"display: none;color: #999999;\">Select Category</option><option value=\"21\">Office &amp; School Supplies</option><option value=\"200574005\">Underwear</option><option value=\"34\">Automobiles &amp; Motorcycles</option><option value=\"66\">Beauty &amp; Health</option><option value=\"7\">Computer &amp; Office</option><option value=\"44\">Consumer Electronics</option><option value=\"502\">Electronic Components &amp; Supplies</option><option value=\"2\">Food</option><option value=\"1503\">Furniture</option><option value=\"200165144\">Hair Extensions &amp; Wigs</option><option value=\"15\">Home &amp; Garden</option><option value=\"6\">Home Appliances</option><option value=\"13\">Home Improvement</option><option value=\"36\">Jewelry &amp; Accessories</option><option value=\"39\">Lights &amp; Lighting</option><option value=\"1524\">Luggage &amp; Bags</option><option value=\"1501\">Mother &amp; Kids</option><option value=\"509\">Phones &amp; Telecommunications</option><option value=\"30\">Security &amp; Protection</option><option value=\"322\">Shoes</option><option value=\"200001075\">Special Category</option><option value=\"18\">Sports &amp; Entertainment</option><option value=\"1420\">Tools</option><option value=\"26\">Toys &amp; Hobbies</option><option value=\"1511\">Watches</option><option value=\"320\">Weddings &amp; Events</option><option value=\"200000343\">Men's Clothing</option><option value=\"200000532\">Novelty &amp; Special Use</option><option value=\"200000297\">Apparel Accessories</option><option value=\"200000345\">Women's Clothing</option>\n" +
			"                                   </select>\n" +
			"                               </div>\n" +
			"                               <div class=\"form-group\">\n" +
			"                                   <label for=\"desc\">Site Description</label>\n" +
			"                                   <textarea name=\"desc\" id=\"desc\" cols=\"30\" rows=\"2\"  class=\"form-control\">Write about your website..</textarea>\n" +
			"                               </div>\n" +
			"                           </div>\n" +
			"                   </div>\n" +
			"                </div>" );
        setTimeout(function(){
            $('.select2').select2();
        }, 100);
	});
});

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	/**
	 * Custom banner slider for Slate.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._slider = function(options) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._slider(options);

			return $this;

		}

		// Vars.
			var	current = 0, pos = 0, lastPos = 0,
				slides = [], indicators = [],
				$indicators,
				$slides = $this.children('article'),
				intervalId,
				isLocked = false,
				i = 0;

		// Turn off indicators if we only have one slide.
			if ($slides.length == 1)
				options.indicators = false;

		// Functions.
			$this._switchTo = function(x, stop) {

				if (isLocked || pos == x)
					return;

				isLocked = true;

				if (stop)
					window.clearInterval(intervalId);

				// Update positions.
					lastPos = pos;
					pos = x;

				// Hide last slide.
					slides[lastPos].removeClass('top');

					if (options.indicators)
						indicators[lastPos].removeClass('visible');

				// Show new slide.
					slides[pos].addClass('visible').addClass('top');

					if (options.indicators)
						indicators[pos].addClass('visible');

				// Finish hiding last slide after a short delay.
					window.setTimeout(function() {

						slides[lastPos].addClass('instant').removeClass('visible');

						window.setTimeout(function() {

							slides[lastPos].removeClass('instant');
							isLocked = false;

						}, 100);

					}, options.speed);

			};

		// Indicators.
			if (options.indicators)
				$indicators = $('<ul class="indicators"></ul>').appendTo($this);

		// Slides.
			$slides
				.each(function() {

					var $slide = $(this),
						$img = $slide.find('img');

					// Slide.
						$slide
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', ($slide.data('position') ? $slide.data('position') : 'center'));

					// Add to slides.
						slides.push($slide);

					// Indicators.
						if (options.indicators) {

							var $indicator_li = $('<li>' + i + '</li>').appendTo($indicators);

							// Indicator.
								$indicator_li
									.data('index', i)
									.on('click', function() {
										$this._switchTo($(this).data('index'), true);
									});

							// Add to indicators.
								indicators.push($indicator_li);

						}

					i++;

				})
				._parallax(options.parallax);

		// Initial slide.
			slides[pos].addClass('visible').addClass('top');

			if (options.indicators)
				indicators[pos].addClass('visible');

		// Bail if we only have a single slide.
			if (slides.length == 1)
				return;

		// Main loop.
			intervalId = window.setInterval(function() {

				current++;

				if (current >= slides.length)
					current = 0;

				$this._switchTo(current);

			}, options.delay);

	};

	$(function() {

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header'),
			$banner 	= $('.banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Banner.
			$banner._slider(settings.banner);

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
				});

			}

	});

})(jQuery);