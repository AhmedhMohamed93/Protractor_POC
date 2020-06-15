exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Authentication.js','PerformActions.js','FormulariesActions.js'],
 

  onPrepare: function() {
/****************************************************************************************************
 *                               Maximizing the Chrome driver                                       *
 ****************************************************************************************************/
	    browser.driver.manage().window().maximize();
/****************************************************************************************************
 *                              Initialization of Allure report										*
 *                              The generated report located in "Allure-results folder"             *
 ****************************************************************************************************/    
	    var AllureReporter = require('jasmine-allure-reporter');
	    jasmine.getEnv().addReporter(new AllureReporter({
	      resultsDir: 'allure-results'
	    }));
/****************************************************************************************************
*              After each Test case capture a screenshot to be used in the generated	     		*
*                                       allure report												*
****************************************************************************************************/  
	    jasmine.getEnv().afterEach(function(done){
	      browser.takeScreenshot().then(function (png) {
	        allure.createAttachment('Screenshot', function () {
	          return new Buffer(png, 'base64')
	        }, 'image/png')();
	        done();
	      })
	    });
	  }

};