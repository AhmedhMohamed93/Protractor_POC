    /****************************************************************************************************
     *                                           Required                                               *
     ****************************************************************************************************/
var MappingPage = require ('./Pages/MappingPage.js')
var constant = require('./Constants/Constant.json')

    /****************************************************************************************************
     *                                           Objects                                                *
     ****************************************************************************************************/
var MappingPage = new MappingPage();
    /****************************************************************************************************
     * 	Test Suite: PerformActions          				                       	        *
     * 	# of TCs  : 2											*
     ****************************************************************************************************/
describe('PerformActions',function() { 

    /****************************************************************************************************
     * Test Case: Verify that BD Super user is able to Impersonate IDN                                  *
     * Target: check that User is able to Impersonate a specific Health System successfully		*
     ****************************************************************************************************/
it('Verify that BD Super user is able to Impersonate IDN',function() {	
	expect(MappingPage.Impersonate()).toBe(constant.Impersonate_Verfication);
},220000)

    /****************************************************************************************************
     * Test Case: Verify that BD Super user is able to Enter Customer notes                             *
     * Target: check that User is able to:								*
     *         1. Enter customer notes for a specific DERS Data item.					*
     *         2. Check the entered notes successfully displayed on the mapping page			*
     ****************************************************************************************************/
it('Verify that BD Super user is able to Enter Customer notes',function() {		
	expect(MappingPage.NavigateToMapping()).toBe(constant.EnteredNotes);
},220000)
})
