    /****************************************************************************************************
     *                                                                                                  *
     *                                           Required                                               *
     *                                                                                                  *
     ****************************************************************************************************/

var constant = require('../Constants/Constant.json');
var LoginPage =  function() { 

    /****************************************************************************************************
     *                                                                                                  *
     *                                           Variables                                              *
     *                                                                                                  *
     ****************************************************************************************************/
	
	
	
	
    /****************************************************************************************************
     *                                                                                                  *
     *                                           Locators                                               *
     *                                                                                                  *
     ****************************************************************************************************/

	var details_Btn = element(by.id(constant.details_Btn));
	var Proceed_Link = element(by.id(constant.Proceed_Link));
	var Signin_BTN = element(by.id(constant.Signin_BTN));	
	var UserName = element(by.id(constant.UserNameField));	
	var Password = element(by.id(constant.PasswordField));
	var SignIn = element(by.id(constant.signIn));
	var Home_Page = element(by.className(constant.Home_Page));
	var EX_Time = Number(constant.EX_Time);
	// Sign out locators
	var User = element(by.className(constant.User));
	var SignOut = element(by.className(constant.SignOut));
	var SignOut_V = element(by.id(constant.SignOut_Verification));
	
    /****************************************************************************************************
     *                                                                                                  *
     *                                           Methods                                                *
     *                                                                                                  *
     ****************************************************************************************************/
	
    /****************************************************************************************************
     *                                                                                                  *
     *   Method Name : LoginF()                                                                         *
     *   Inputs      : Null                                                                             *
     *   Outputs     : Text string                                                                      *
     *   Description : This Method is to Launch the website and login with valid credentials            *
     *                                                                                                  *
     ****************************************************************************************************/
	this.loginF = function() {		
		var EC = protractor.ExpectedConditions;
		browser.waitForAngularEnabled(false);
		browser.get(constant.url);		
		details_Btn.click();		
		Proceed_Link.click(); 				
		browser.wait(EC.visibilityOf($(constant.Signin_BTN_ID)), EX_Time);
		Signin_BTN.click();
		details_Btn.click();		
		Proceed_Link.click(); 
		browser.wait(EC.visibilityOf($(constant.UserName_ID)), EX_Time);
		UserName.sendKeys(constant.UserName);
		Password.sendKeys(constant.Password);
		SignIn.click();
		browser.wait(EC.visibilityOf(Home_Page), EX_Time);
		browser.sleep(5000);
		return Home_Page.getText();				
	    };

	/****************************************************************************************************
	 *                                                                                                  *
	 *   Method Name : LoginS()                                                                         *
	 *   Inputs      : Null                                                                             *
	 *   Outputs     : Null                                                                             *
	 *   Description : This Method is to Launch the website and login without exceptions with valid     *
	 *                 credentials                                                                      *
	 *   																								*
	 *                                                                                                  *
	 ****************************************************************************************************/
	this.loginS = function() {		
		var EC = protractor.ExpectedConditions;
		browser.waitForAngularEnabled(false);
		browser.get(constant.url);						
		browser.wait(EC.visibilityOf($(constant.Signin_BTN_ID)), EX_Time);
		Signin_BTN.click();
		browser.wait(EC.visibilityOf($(constant.UserName_ID)), EX_Time);
		UserName.sendKeys(constant.UserName);
		Password.sendKeys(constant.Password);
		SignIn.click();
		browser.wait(EC.visibilityOf(Home_Page), EX_Time);
		browser.sleep(5000);
		};

	/****************************************************************************************************
	 *                                                                                                  *
	 *   Method Name : SignOut()                                                                        *
	 *   Inputs      : Null                                                                             *
	 *   Outputs     : Text string                                                                      *
	 *   Description : This Method is to sign out the website           				    *
	 *                                                                                                  *
	 ****************************************************************************************************/
	this.SignOut = function() {
		var EC = protractor.ExpectedConditions;
		User.click();			
		SignOut.click();
		browser.wait(EC.visibilityOf($(constant.SignOut_VerificationID)), EX_Time);			
		return SignOut_V.getText();
			
		};
};
    /****************************************************************************************************
     *                                                                                                  *
     *                                           Exporting Module                                       *
     *                                                                                                  *
     ****************************************************************************************************/
module.exports = LoginPage;
