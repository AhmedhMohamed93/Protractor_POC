var LoginPage = require ('./Pages/LoginPage.js')

var constant = require('./Constants/Constant.json')

var Base_Login = new LoginPage();
describe('Authentication',function() { 
	
it('Verify that BD Super user is able to login successfully',function() {
	
	expect(Base_Login.loginF()).toBe(constant.Login_Verification);
},220000)


it('Verify that BD Super user is able to Sign Out successfully',function() {
	
	expect(Base_Login.SignOut()).toBe(constant.SignOut_VerificationText);
},220000)

})