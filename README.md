10steps.js
==========

pre-defined animations using 10 animation steps

Usage
==========

If you want to add a new effect, you can just do the following:

fx.myNewEffect = {
		step0: 'your transform effect at 0%',\
		step1: 'your transform effect at 10%',\
		step2: 'your transform effect at 20%',\
		step3: 'your transform effect at 30%',\
		step4: 'your transform effect at 40%',\
		step5: 'your transform effect at 50%',\
		step6: 'your transform effect at 60%',\
		step7: 'your transform effect at 70%',\
		step8: 'your transform effect at 80%',\
		step9: 'your transform effect at 90%',\
		step10: 'your transform effect at 100%'\
	}
	
Example
==========
Override default bouncing effect:

fx.bounce = {
		step0: 'translateY(0px)',
		step1: 'translateY(1px)',
		step2: 'translateY(2px)',
		step3: 'translateY(3px)',
		step4: 'translateY(-30px)',
		step5: 'translateY(0px)',
		step6: 'translateY(-15px)',
		step7: 'translateY(-14px)',
		step8: 'translateY(-12px)',
		step9: 'translateY(-5px)',
		step10: 'translateY(0px)'
	}