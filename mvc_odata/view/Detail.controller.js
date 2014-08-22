jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},

	onBeforeRendering:function(){
	//	this.byId("SupplierForm").bindElement("ZSORDERDETAILSSet01");
	},
		
	handleLineItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem", context);
	}
});