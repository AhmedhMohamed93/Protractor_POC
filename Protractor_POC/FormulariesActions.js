    /****************************************************************************************************
     *                                           Required                                               *
     ****************************************************************************************************/
var FormulariesMapping = require ('./Pages/FormulariesMapping.js')
var constant = require('./Constants/Constant.json')

	/****************************************************************************************************
     *                                           Objects                                                *
     ****************************************************************************************************/
var FormulariesMapping = new FormulariesMapping();
    /****************************************************************************************************
     * 									Test Suite: PerformActions                                	    *
     * 										   # of TCs  : 1											*
     ****************************************************************************************************/
describe('FormulariesActions',function() { 

    /****************************************************************************************************
     * Test Case: Verify that BD Super user is able to Enter Customer notes                             *
     * Target: check that User is able to:																*
     *         1. Enter customer notes for a specific DERS Data item.									*
     *         2. Check the entered notes successfully displayed on the mapping page					*
     ****************************************************************************************************/
it('Verify that BD Super user is able to Enter Customer notes for PF item',function() {		
	expect(FormulariesMapping.NavigateToMappingFormularies()).toBe(constant.EnteredNotes);
},220000)
})
