10steps.js
==========

pre-defined animations using 10 animation steps

Usage
==========

If you want to add a new effect, you can just do the following:

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
	
Example
==========
Override default bouncing effect:

fx.bounce = {<br>
		step0: 'translateY(0px)',<br>
		step1: 'translateY(1px)',<br>
		step2: 'translateY(2px)',<br>
		step3: 'translateY(3px)',<br>
		step4: 'translateY(-30px)',<br>
		step5: 'translateY(0px)',<br>
		step6: 'translateY(-15px)',<br>
		step7: 'translateY(-14px)',<br>
		step8: 'translateY(-12px)',<br>
		step9: 'translateY(-5px)',<br>
		step10: 'translateY(0px)'<br>
	}