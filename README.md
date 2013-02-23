10steps.js
==========

Pre-defined animations using 10 animation steps, based on the work of this 2 guys:

Daniel Eden
http://daneden.me/animate/

Louis Remi
http://louisremi.github.com/jquery.transform.js/index.html

Included animations<br>
	- Bounce<br>
	- Shake<br>
	- Tada<br>
	- Swing<br>
	- Wobble<br>
	- Wiggle<br>
	- Pulse<br>
	- Bounce in<br>
	- Bounce in up<br>
	- Bounce in down<br>
	- Bounce in left<br>
	- Bounce in right<br>
	- Lightspeed in<br>
	- Roll in<br>
	- Roll out


Usage
==========

1. Download and set the jQuery transfrom plugin from http://louisremi.github.com/jquery.transform.js/index.html

2. Change these 2 vars to fit your needs<br>
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
// let's bind it to some button<br>
$('.myButton').on('click', function() {<br>
	$element.animate(fxPattern[0], fxPattern[1], fxPattern[2]); // wherever you want it to be triggered<br>
});