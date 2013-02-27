var fx = {
	bounce: {
		step0: 'translateY(0px)',
		step1: 'translateY(0px)',
		step2: 'translateY(0px)',
		step3: 'translateY(0px)',
		step4: 'translateY(-30px)',
		step5: 'translateY(0px)',
		step6: 'translateY(-15px)',
		step7: 'translateY(0px)',
		step8: 'translateY(0px)',
		step9: 'translateY(0px)',
		step10: 'translateY(0px)'
	},
	shake: {
		step0: 'translateX(0px)',
		step1: 'translateX(-10px)',
		step2: 'translateX(10px)',
		step3: 'translateX(-10px)',
		step4: 'translateX(10px)',
		step5: 'translateX(-10px)',
		step6: 'translateX(10px)',
		step7: 'translateX(-10px)',
		step8: 'translateX(10px)',
		step9: 'translateX(-10px)',
		step10: 'translateX(0px)'
	},
	tada: {
		step0: 'scale(1)',
		step1: 'scale(0.9) rotate(-3deg)',
		step2: 'scale(0.9) rotate(-3deg)',
		step3: 'scale(1.1) rotate(3deg)',
		step4: 'scale(1.1) rotate(-3deg)',
		step5: 'scale(1.1) rotate(3deg)',
		step6: 'scale(1.1) rotate(-3deg)',
		step7: 'scale(1.1) rotate(3deg)',
		step8: 'scale(1.1) rotate(-3deg)',
		step9: 'scale(1.1) rotate(3deg)',
		step10: 'scale(1) rotate(0)'
	},
	swing: {
		step0: 'rotate(0deg)',
		step1: 'rotate(15deg)',
		step2: 'rotate(15deg)',
		step3: 'rotate(-10deg)',
		step4: 'rotate(-10deg)',
		step5: 'rotate(5deg)',
		step6: 'rotate(5deg)',
		step7: 'rotate(-5deg)',
		step8: 'rotate(-5deg)',
		step9: 'rotate(0deg)',
		step10: 'rotate(0deg)'
	},
	wobble: {
		step0: '',
		step1: 'translateX(0%)',
		step2: 'translateX(-25%) rotate(-5deg)',
		step3: 'translateX(20%) rotate(3deg)',
		step4: 'translateX(-15%) rotate(-3deg)',
		step5: 'translateX(10%) rotate(2deg)',
		step6: 'translateX(-5%) rotate(-1deg)',
		step7: 'translateX(0%)',
		step8: '',
		step9: '',
		step10: ''
	},
	wiggle: {
		step0: 'skewX(9deg)',
		step1: 'skewX(-8deg)',
		step2: 'skewX(7deg)',
		step3: 'skewX(-6deg)',
		step4: 'skewX(5deg)',
		step5: 'skewX(-4deg)',
		step6: 'skewX(3deg)',
		step7: 'skewX(-2deg)',
		step8: 'skewX(1deg)',
		step9: 'skewX(0deg)',
		step10: 'skewX(0deg)'
	},
	pulse: {
		step0: 'scale(1)',
		step1: '',
		step2: '',
		step3: '',
		step4: '',
		step5: 'scale(1.1)',
		step6: '',
		step7: '',
		step8: '',
		step9: '',
		step10: 'scale(1)'
	},
	bounceIn: {
		step0: 'scale(.3)',
		step1: '',
		step2: '',
		step3: '',
		step4: '',
		step5: 'scale(1.05)',
		step6: '',
		step7: 'scale(.9)',
		step8: '',
		step9: '',
		step10: 'scale(1)'
	},
	bounceInUp: {
		step0: '',
		step1: '',
		step2: '',
		step3: '',
		step4: 'translateY(2000px)',
		step5: '',
		step6: 'translateY(-30px)',
		step7: '',
		step8: 'translateY(10px)',
		step9: '',
		step10: 'translateY(0)'
	},
	bounceInDown: {
		step0: '',
		step1: '',
		step2: '',
		step3: '',
		step4: 'translateY(-2000px)',
		step5: '',
		step6: 'translateY(30px)',
		step7: '',
		step8: 'translateY(-10px)',
		step9: '',
		step10: 'translateY(0)'
	},
	bounceInLeft: {
		step0: '',
		step1: '',
		step2: '',
		step3: '',
		step4: 'translateX(-2000px)',
		step5: '',
		step6: 'translateX(30px)',
		step7: '',
		step8: 'translateX(-10px)',
		step9: '',
		step10: 'translateX(0)'
	},
	bounceInRight: {
		step0: '',
		step1: '',
		step2: '',
		step3: '',
		step4: 'translateX(2000px)',
		step5: '',
		step6: 'translateX(-30px)',
		step7: '',
		step8: 'translateX(10px)',
		step9: '',
		step10: 'translateX(0)'
	},
	lightSpeedIn: {
		step0: '',
		step1: '',
		step2: '',
		step3: '',
		step4: 'translateX(100%) skewX(-30deg)',
		step5: 'translateX(100%) skewX(-30deg)',
		step6: 'translateX(-20%) skewX(30deg)',
		step7: 'translateX(0%) skewX(-15deg)',
		step8: 'translateX(0%) skewX(0deg)',
		step9: '',
		step10: ''
	},
	rollIn: {
		step0: '',
		step1: '',
		step2: '',
		step3: '',
		step4: 'translateX(-100%) rotate(-120deg)',
		step5: 'translateX(0px) rotate(0deg)',
		step6: '',
		step7: '',
		step8: '',
		step9: '',
		step10: ''
	},
	rollOut: {
		step0: '',
		step1: '',
		step2: '',
		step3: '',
		step4: 'translateX(0px) rotate(0deg)',
		step5: 'translateX(100%) rotate(120deg)',
		step6: '',
		step7: '',
		step8: '',
		step9: '',
		step10: ''
	}
}

var duration = 2000;
var $element = $('#basic1');
var steps = 10;
var chosenFx = "lightSpeedIn";
var randomArray = [];
var tenSteps = function(chosenFx){
	
	for (var i = 0; i < steps; i++) {
		var walkSteps = window.setTimeout(function(){
            var currentStep = "step"+i;
			
            
            document.write(currentStep+"<br>");
            document.write(i);
            document.write(fx[chosenFx][currentStep]+"<br>");
            randomArray.push(i);
            document.write(randomArray+"<br>");
		}, 2000);
	}
}

tenSteps('rollOut');
