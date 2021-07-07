sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sapui5app.controller.View1", {
			onInit: function () {
				debugger;
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.attachRoutePatternMatched(this.onAfterRendering, this);
			//alert("OnInit"); 
			},
			onBeforeRendering:function(){
				debugger;
				//alert("on Before Rendering");
			},
			onAfterRendering:function(){
				debugger;
				//alert("on After Rendering");
			},
			onView2:function(){
				debugger;
				this.oRouter.navTo("RouteView2");
			},
			selectRowdat:function(oEvent){
               debugger;
			//    var oTable = this.getView().byId("table01");
			//    //var selectedCell = oTable.getSelectedIndex();
			//    var oTable = this.getView().byId("table01");
			//    var selectedRows = oTable.getSelectedIndex();
		//	var Data = oEvent.getSource().getSelectedItem().getBinidingContext().getObject().Country;
		//	alert(Data);
			alert(oEvent.getSource().getSelectedItem().getBindingContext().getObject().Country);
    console.log(JSON.stringify(oEvent.getSource().getSelectedItem().getBindingContext().getObject()));
	
         // M table 
				var oItem= this.getView().byId("table01").getSelectedItem();
                var oEntry = oItem.getBindingContext().getObject();
                console.log(oEntry.Country);
	            alert(oEntry.Profit);
	            sap.m.MessageToast.show(oEntry.Country);

		//UI Table

			//   var oTable = this.getView().byId("table1");
			// 	var selectedItem = oTable.getSelectedIndex();
			// 	var Selectedobject = oTable.getContextByIndex(selectedItem).getObject();
			// 	sap.m.MessageToast.show(Selectedobject); 

			},

			onExit:function(){
				debugger;
				alert("on exit");
			},
			
		});
	});
