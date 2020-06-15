    /****************************************************************************************************
     *                                                                                                  *
     *                                           Required                                               *
     *                                                                                                  *
     ****************************************************************************************************/

var constant = require('../Constants/Constant.json');
var LoginPage = require('./LoginPage.js');
   /****************************************************************************************************
    *                                                                                                  *
    *                                           Variables                                              *
    *                                                                                                  *
    ****************************************************************************************************/
var LoginOb = new LoginPage();

var MappingPage =  function() { 
    /****************************************************************************************************
     *                                                                                                  *
     *                                           Locators                                               *
     *                                                                                                  *
     ****************************************************************************************************/
	
	var ActingAs = element(by.id(constant.ActingAs));
	var Home_Page = element(by.className(constant.Home_Page));
	var EX_Time = Number(constant.EX_Time);
	var Mapping = element(by.css(constant.Mapping));
	var Mapping_Page = element(by.css(constant.Mapping_Page));	
	var Notes = element(by.css(constant.Notes));
	var Notes_Modal = element(by.css(constant.Notes_Modal));
	var Cust_Notes = element(by.css(constant.Cust_Notes));
	var Save_Modal = element(by.id(constant.Save_Modal));
	var Notes_Verification = element(by.css(constant.Notes_Verification));

    /****************************************************************************************************
     *                                                                                                  *
     *                                           Methods                                                *
     *                                                                                                  *
     ****************************************************************************************************/
	
    /****************************************************************************************************
     *                                                                                                  *
     *   Method Name : Impersonate()                                                      		*
     *   Inputs      : Null                                                                             *
     *   Outputs     : Text string                                                                      *
     *   Description : This Method is to Launch the Impersonate a specific health system                *
     *                                                                                                  *
     ****************************************************************************************************/
	this.Impersonate = function() {	
		var EC = protractor.ExpectedConditions;
		LoginOb.loginS();
		ActingAs.click();		
		ActingAs.sendKeys(constant.IDN);		
		browser.wait(EC.visibilityOf(Home_Page), EX_Time);
		browser.sleep(5000);
		return Home_Page.getText()
	    };	
	    
	/****************************************************************************************************
	 *                                                                                                  *
	 *   Method Name : NavigateToMapping()                                                   	    *
	 *   Inputs      : Null                                                                             *
	 *   Outputs     : Text string                                                                      *
	 *   Description : This Method is to:							            *
	 *   			   1. Navigate to Mapping Page                                              *
	 *   			   2. Navigate to DERS Data Tab						    *
	 *   			   3. Select specific DERS Data item and Enter a specific Customer notes    *
	 *                                                                                                  *
	 ****************************************************************************************************/	    
		this.NavigateToMapping = function() {	
			var EC = protractor.ExpectedConditions;
			browser.wait(EC.visibilityOf(Mapping), EX_Time);
			browser.sleep(5000);
			Mapping.click()
			browser.wait(EC.visibilityOf(Mapping_Page), EX_Time);
			browser.sleep(5000);
			Mapping_Page.click();
			browser.wait(EC.visibilityOf(Notes), EX_Time);
			browser.sleep(10000);
			Notes.click();
			browser.wait(EC.visibilityOf(Notes_Modal), EX_Time);
			Cust_Notes.clear();
			Cust_Notes.sendKeys(constant.EnteredNotes);
			Save_Modal.click();
			browser.wait(EC.visibilityOf(Notes_Verification), EX_Time);
			browser.sleep(5000);
			return Notes_Verification.getText();
		    };	
};
   /****************************************************************************************************
    *                                                                                                  *
    *                                           Exporting Module                                       *
    *                                                                                                  *
    ****************************************************************************************************/
module.exports = MappingPage;
