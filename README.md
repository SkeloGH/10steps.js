10steps.js
==========

Pre-defined animations using 10 animation steps, based on the work of this 2 guys:

Daniel Eden
http://daneden.me/animate/

Louis Remi
http://louisremi.github.com/jquery.transform.js/index.html

Included animations
	- Bounce
	- Shake
	- Tada
	- Swing
	- Wobble
	- Wiggle
	- Pulse
	- Bounce in
	- Bounce in up
	- Bounce in down
	- Bounce in left
	- Bounce in right
	- Lightspeed in
	- Roll in
	- Roll out


Usage
==========

var $element = $('.myClass'); // your jQuery selector <br>
var chosenFx = 'rollOut'; // the effect name camelCased <br>

$element.animate(fxPattern[0], fxPattern[1], fxPattern[2]); // wherever you want it to be triggered


If you want to override/add an effect, you can just do the following:

fx.myNewEffect = {<br>
		step0: 'your transform effect at 0%',<br>
		step1: 'your transform effect at 10%',<br>
		step2: 'your transform effect at 20%',<br>
		step3: 'your transform effect at 30%',<br>
		step4: 'your transform effect at 40%',<br>
		step5: 'your transform effect at 50%',<br>
		step6: 'your transform effect at 60%',<br>
		step7: 'your transform effect at 70%',<br>
		step8: 'your transform effect at 80%',<br>
		step9: 'your transform effect at 90%',<br>
		step10: 'your transform effect at 100%'<br>
	}

That's it.
	
Example
==========
var $element = $('.myClass');<br>
var chosenFx = 'bounceInRight';<br>
// let's bind it to some button
$('.myButton').on('click', function() {
	$element.animate(fxPattern[0], fxPattern[1], fxPattern[2]); // wherever you want it to be triggered
});