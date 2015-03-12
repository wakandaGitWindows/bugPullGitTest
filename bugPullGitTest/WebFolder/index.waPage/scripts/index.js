
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var slider2 = {};	// @slider
	var documentEvent = {};	// @document
	var slider1 = {};	// @slider
// @endregion// @endlock

// eventHandlers// @lock

	slider2.slidecreate = function slider2_slidecreate (event)// @startlock
	{// @endlock
		loading1=140;
		$$('slider2').setValue(loading);
	};// @lock

	slider2.slide = function slider2_slide (event)// @startlock
	{// @endlock
		$$('image1').setHeight(loading1);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		loading=140;
		
		$$('slider1').setValue(loading);
		
	};// @lock

	slider1.slidecreate = function slider1_slidecreate (event)// @startlock
	{// @endlock
		loading=140;
		loading1=140;
		
		$$('image1').setWidth(loading);
		
			
	};// @lock

	slider1.slide = function slider1_slide (event)// @startlock
	{// @endlock
	
			$$('image1').setWidth(loading);
			$$('image1').setHeight(loading1);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("slider2", "slidecreate", slider2.slidecreate, "WAF");
	WAF.addListener("slider2", "slide", slider2.slide, "WAF");
	WAF.addListener("slider1", "slidecreate", slider1.slidecreate, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("slider1", "slide", slider1.slide, "WAF");
// @endregion
};// @endlock
