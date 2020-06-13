

var constant = require('../Constants/Constant.json');
var LoginPage = require('./LoginPage.js');

var LoginOb = new LoginPage();
var MappingPage =  function() { 

	var ActingAs = element(by.id(constant.ActingAs));
	
	this.NavigateToMapping = function() {		
		LoginOb.loginS();
		ActingAs.click();		
		ActingAs.sendKeys(constant.IDN);
		browser.sleep(10000);
	    };	
};
module.exports = MappingPage;