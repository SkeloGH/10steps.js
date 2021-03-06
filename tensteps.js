var fx = {
    flash: {
        'duration': 2000,
        'step0': {'opacity': '1'},
        'step1': {'opacity': '1'},
        'step2': {'opacity': '0'},
        'step3': {'opacity': '1'},
        'step4': {'opacity': '0'},
        'step5': {'opacity': '1'},
        'step6': {'opacity': '1'},
        'step7': {'opacity': '1'},
        'step8': {'opacity': '1'},
        'step9': {'opacity': '1'},
        'step10': {'opacity': '1'}
    },
    bounce: {
        'duration': 1500,
        'step0': {'top': '0'},
        'step1': {'top': '0'},
        'step2': {'top': '0'},
        'step3': {'top': '0'},
        'step4': {'top': '-30px'},
        'step5': {'top': '0px'},
        'step6': {'top': '-15px'},
        'step7': {'top': '0'},
        'step8': {'top': '0'},
        'step9': {'top': '0'},
        'step10': {'top': '0'}
    },
    shake: {
        'duration': 1500,
        'step0': {'left':'0px'},
        'step1': {'left':'-10px'},
        'step2': {'left':'10px'},
        'step3': {'left':'-10px'},
        'step4': {'left':'10px'},
        'step5': {'left':'-10px'},
        'step6': {'left':'10px'},
        'step7': {'left':'-10px'},
        'step8': {'left':'10px'},
        'step9': {'left':'-10px'},
        'step10': {'left':'0px'}
    },
    pulse: {
        'duration': 3000,
        'step0': {'width': '+=0', 'left':'0'},
        'step1': {'width': '+=0', 'left':'0'},
        'step2': {'width': '+=0', 'left':'0'},
        'step3': {'width': '+=0', 'left':'0'},
        'step4': {'width': '+=0', 'left':'0'},
        'step5': {'width': '+=5%', 'left':'-=2.5%'},
        'step6': {'width': '-=7.04%', 'left':'0'},
        'step7': {'width': '-=0', 'left':'0'},
        'step8': {'width': '-=0', 'left':'0'},
        'step9': {'width': '-=0', 'left':'0'},
        'step10': {'width': '-=0', 'left':'0'}
    },
    fadeIn: {
        'duration': 800,
        'step0': {'opacity': '0'},
        'step1': {'opacity': '0.1'},
        'step2': {'opacity': '0.2'},
        'step3': {'opacity': '0.3'},
        'step4': {'opacity': '0.4'},
        'step5': {'opacity': '0.5'},
        'step6': {'opacity': '0.6'},
        'step7': {'opacity': '0.7'},
        'step8': {'opacity': '0.8'},
        'step9': {'opacity': '0.9'},
        'step10': {'opacity': '1'}
    },
    fadeInUp: {
        'duration': 800,
        'step0': {'opacity': '0', 'top':'20px'},
        'step1': {'opacity': '0.1', 'top':'18px'},
        'step2': {'opacity': '0.2', 'top':'16px'},
        'step3': {'opacity': '0.3', 'top':'14px'},
        'step4': {'opacity': '0.4', 'top':'12px'},
        'step5': {'opacity': '0.5', 'top':'10px'},
        'step6': {'opacity': '0.6', 'top':'8px'},
        'step7': {'opacity': '0.7', 'top':'6px'},
        'step8': {'opacity': '0.8', 'top':'4px'},
        'step9': {'opacity': '0.9', 'top':'2px'},
        'step10': {'opacity': '1', 'top':'0'}
    },
    fadeInDown: {
        'duration': 800,
        'step0': {'opacity': '0', 'top':'-20px'},
        'step1': {'opacity': '0.1', 'top':'-18px'},
        'step2': {'opacity': '0.2', 'top':'-16px'},
        'step3': {'opacity': '0.3', 'top':'-14px'},
        'step4': {'opacity': '0.4', 'top':'-12px'},
        'step5': {'opacity': '0.5', 'top':'-10px'},
        'step6': {'opacity': '0.6', 'top':'-8px'},
        'step7': {'opacity': '0.7', 'top':'-6px'},
        'step8': {'opacity': '0.8', 'top':'-4px'},
        'step9': {'opacity': '0.9', 'top':'-2px'},
        'step10': {'opacity': '1', 'top':'0'}
    },
    fadeInLeft: {
        'duration': 800,
        'step0': {'opacity': '0', 'left':'-20px'},
        'step1': {'opacity': '0.1', 'left':'-18px'},
        'step2': {'opacity': '0.2', 'left':'-16px'},
        'step3': {'opacity': '0.3', 'left':'-14px'},
        'step4': {'opacity': '0.4', 'left':'-12px'},
        'step5': {'opacity': '0.5', 'left':'-10px'},
        'step6': {'opacity': '0.6', 'left':'-8px'},
        'step7': {'opacity': '0.7', 'left':'-6px'},
        'step8': {'opacity': '0.8', 'left':'-4px'},
        'step9': {'opacity': '0.9', 'left':'-2px'},
        'step10': {'opacity': '1', 'left':'0'}
    },
    fadeInRight: {
        'duration': 800,
        'step0': {'opacity': '0', 'left':'20px'},
        'step1': {'opacity': '0.1', 'left':'18px'},
        'step2': {'opacity': '0.2', 'left':'16px'},
        'step3': {'opacity': '0.3', 'left':'14px'},
        'step4': {'opacity': '0.4', 'left':'12px'},
        'step5': {'opacity': '0.5', 'left':'10px'},
        'step6': {'opacity': '0.6', 'left':'8px'},
        'step7': {'opacity': '0.7', 'left':'6px'},
        'step8': {'opacity': '0.8', 'left':'4px'},
        'step9': {'opacity': '0.9', 'left':'2px'},
        'step10': {'opacity': '1', 'left':'0'}
    },
    fadeInUpBig: {
        'duration': 800,
        'step0': {'opacity': '0', 'top':'2000px'},
        'step1': {'opacity': '0.1', 'top':'1800px'},
        'step2': {'opacity': '0.2', 'top':'1600px'},
        'step3': {'opacity': '0.3', 'top':'1400px'},
        'step4': {'opacity': '0.4', 'top':'1200px'},
        'step5': {'opacity': '0.5', 'top':'1000px'},
        'step6': {'opacity': '0.6', 'top':'800px'},
        'step7': {'opacity': '0.7', 'top':'600px'},
        'step8': {'opacity': '0.8', 'top':'400px'},
        'step9': {'opacity': '0.9', 'top':'200px'},
        'step10': {'opacity': '1', 'top':'0'}
    },
    fadeInDownBig: {
        'duration': 800,
        'step0': {'opacity': '0', 'top':'-2000px'},
        'step1': {'opacity': '0.1', 'top':'-1800px'},
        'step2': {'opacity': '0.2', 'top':'-1600px'},
        'step3': {'opacity': '0.3', 'top':'-1400px'},
        'step4': {'opacity': '0.4', 'top':'-1200px'},
        'step5': {'opacity': '0.5', 'top':'-1000px'},
        'step6': {'opacity': '0.6', 'top':'-800px'},
        'step7': {'opacity': '0.7', 'top':'-600px'},
        'step8': {'opacity': '0.8', 'top':'-400px'},
        'step9': {'opacity': '0.9', 'top':'-200px'},
        'step10': {'opacity': '1', 'top':'0'}
    },
    fadeInLeftBig: {
        'duration': 800,
        'step0': {'opacity': '0', 'left':'-2000px'},
        'step1': {'opacity': '0.1', 'left':'-1800px'},
        'step2': {'opacity': '0.2', 'left':'-1600px'},
        'step3': {'opacity': '0.3', 'left':'-1400px'},
        'step4': {'opacity': '0.4', 'left':'-1200px'},
        'step5': {'opacity': '0.5', 'left':'-1000px'},
        'step6': {'opacity': '0.6', 'left':'-800px'},
        'step7': {'opacity': '0.7', 'left':'-600px'},
        'step8': {'opacity': '0.8', 'left':'-400px'},
        'step9': {'opacity': '0.9', 'left':'-200px'},
        'step10': {'opacity': '1', 'left':'0'}
    },
    fadeInRightBig: {
        'duration': 800,
        'step0': {'opacity': '0', 'left':'2000px'},
        'step1': {'opacity': '0.1', 'left':'1800px'},
        'step2': {'opacity': '0.2', 'left':'1600px'},
        'step3': {'opacity': '0.3', 'left':'1400px'},
        'step4': {'opacity': '0.4', 'left':'1200px'},
        'step5': {'opacity': '0.5', 'left':'1000px'},
        'step6': {'opacity': '0.6', 'left':'800px'},
        'step7': {'opacity': '0.7', 'left':'600px'},
        'step8': {'opacity': '0.8', 'left':'400px'},
        'step9': {'opacity': '0.9', 'left':'200px'},
        'step10': {'opacity': '1', 'left':'0'}
    },
    bounceInDown: {
        'duration': 1800,
        'step0': {'top':'-2000px'},
        'step1': {'top':'-1800px'},
        'step2': {'top':'-1600px'},
        'step3': {'top':'-1400px'},
        'step4': {'top':'-1200px'},
        'step5': {'top':'-1000px'},
        'step6': {'top':'-800px'},
        'step7': {'top':'-400px'},
        'step8': {'top':'20px'},
        'step9': {'top':'-20px'},
        'step10': {'top':'0'}
    },
    bounceInUp: {
        'duration': 1800,
        'step0': {'top':'2000px'},
        'step1': {'top':'1800px'},
        'step2': {'top':'1600px'},
        'step3': {'top':'1400px'},
        'step4': {'top':'1200px'},
        'step5': {'top':'1000px'},
        'step6': {'top':'800px'},
        'step7': {'top':'600px'},
        'step8': {'top':'0px'},
        'step9': {'top':'-100px'},
        'step10': {'top':'0'}
    },
    bounceInLeft: {
        'duration': 1000,
        'step0': {'left':'-1800px'},
        'step1': {'left':'-1600px'},
        'step2': {'left':'-1400px'},
        'step3': {'left':'-1200px'},
        'step4': {'left':'-1000px'},
        'step5': {'left':'-800px'},
        'step6': {'left':'-600px'},
        'step7': {'left':'0px'},
        'step8': {'left':'40px'},
        'step9': {'left':'-20px'},
        'step10': {'left':'0'}
    },
    bounceInRight: {
        'duration': 1000,
        'step0': {'left':'1800px'},
        'step1': {'left':'1600px'},
        'step2': {'left':'1400px'},
        'step3': {'left':'1200px'},
        'step4': {'left':'1000px'},
        'step5': {'left':'800px'},
        'step6': {'left':'600px'},
        'step7': {'left':'0px'},
        'step8': {'left':'-40px'},
        'step9': {'left':'20px'},
        'step10': {'left':'0'}
    }
}

var applyFx = function () {
    var attentionApp    =   this,
    	$element        =   $('.selector'),
        chosenFx        =   'bounceInLeft',
        steps           =   10,
        duration        =   tenSteps.fx[chosenFx].duration / steps,
        transition      =   tenSteps.fx[chosenFx],
        currentStep;

    $element.css(transition['step0']);
    
    for (var i = 1; i <= steps; i++) {
        currentStep = 'step' + i;
        $element.animate(transition[currentStep], duration);
    }
}

applyFx();
