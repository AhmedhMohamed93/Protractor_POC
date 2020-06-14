var MappingPage = require ('./Pages/MappingPage.js')

var constant = require('./Constants/Constant.json')

var MappingPage = new MappingPage();
describe('PerformActions',function() { 
	
it('Verify that BD Super user is able to Impersonate IDN',function() {
	
	expect(MappingPage.Impersonate()).toBe(constant.Impersonate_Verfication);
},220000)

it('Verify that BD Super user is able to Enter Customer notes',function() {
	
	
	expect(MappingPage.NavigateToMapping()).toBe(constant.EnteredNotes);
},220000)
})
