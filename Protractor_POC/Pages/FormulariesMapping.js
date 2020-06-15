    /****************************************************************************************************
     *                                                                                                  *
     *                                           Required                                               *
     *                                                                                                  *
     ****************************************************************************************************/

var constant = require('../Constants/Constant.json');
var LoginPage = require('./LoginPage.js');
var MappingPage = require('./MappingPage.js');
	/****************************************************************************************************
	 *                                                                                                  *
	 *                                           Variables                                              *
	 *                                                                                                  *
	 ****************************************************************************************************/
var LoginOb = new LoginPage();
var MappingOb = new MappingPage();

var FormulariesMapping =  function() { 
	/****************************************************************************************************
     *                                                                                                  *
     *                                           Locators                                               *
     *                                                                                                  *
     ****************************************************************************************************/
	
	var ActingAs = element(by.id(constant.ActingAs));
	var Home_Page = element(by.className(constant.Home_Page));
	var EX_Time = Number(constant.EX_Time);
	var Mapping = element(by.css(constant.Mapping));
	var Formularies = element(by.css(constant.Formularies));	
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
	 *   Method Name : NavigateToMappingFormularies()                                                   			*
	 *   Inputs      : Null                                                                             *
	 *   Outputs     : Text string                                                                      *
	 *   Description : This Method is to:												                *
	 *   			   1. Navigate to Mapping Page                                                      *
	 *   			   2. Navigate to Formularies Tab					        						*
	 *   			   3. Select specific Formulary item and Enter a specific Customer notes			*
	 *                                                                                                  *
	 ****************************************************************************************************/	    

		this.NavigateToMappingFormularies = function() {	
			var EC = protractor.ExpectedConditions;
			var IDNName = MappingOb.Impersonate();
			browser.wait(EC.visibilityOf(Mapping), EX_Time);
			browser.sleep(5000);
			Mapping.click()
			browser.wait(EC.visibilityOf(Formularies), EX_Time);
			browser.sleep(5000);			
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
module.exports = FormulariesMapping;