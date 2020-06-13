exports.config = {
 seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Authentication.js','PerformActions.js'],
 

  onPrepare: function() {
	    var AllureReporter = require('jasmine-allure-reporter');
	    jasmine.getEnv().addReporter(new AllureReporter({
	      resultsDir: 'allure-results'
	    }));

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