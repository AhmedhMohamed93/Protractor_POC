    /****************************************************************************************************
     *                                           Required                                               *
     ****************************************************************************************************/
var LoginPage = require ('./Pages/LoginPage.js')
var constant = require('./Constants/Constant.json')

    /****************************************************************************************************
     *                                           Objects                                                *
     ****************************************************************************************************/
var Base_Login = new LoginPage();
    /****************************************************************************************************
     * 	Test Suite: Authentication                                	                                *
     * 	# of TCs  : 2											*
     ****************************************************************************************************/
describe('Authentication',function() { 

    /****************************************************************************************************
     * Test Case: Verify that BD Super user is able to login successfully                               *
     * Target: check that User is able to login successfully						*
     ****************************************************************************************************/
it('Verify that BD Super user is able to login successfully',function() {	
	expect(Base_Login.loginF()).toBe(constant.Login_Verification);
},220000)

    /****************************************************************************************************
     * Test Case: Verify that BD Super user is able to Sign Out successfully                            *
     * Target: check that User is able to Sign out successfully						*
     ****************************************************************************************************/
it('Verify that BD Super user is able to Sign Out successfully',function() {	
	expect(Base_Login.SignOut()).toBe(constant.SignOut_VerificationText);
},220000)

})
