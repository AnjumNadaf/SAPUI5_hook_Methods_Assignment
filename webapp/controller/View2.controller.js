sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sapui5app.controller.View2", {
			onInit: function () {
				debugger;
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			alert(" 2 OnInit"); 
			},
			onBeforeRendering:function(){
				debugger;
				alert("on 2 Before Rendering");
			},
			onAfterRendering:function(){
				debugger;
				alert("on 2 After Rendering");
			},
            OnView1:function(){
				debugger;
				this.oRouter.navTo("RouteView1");
			},
			onExit:function(){
				debugger;
				alert("on 2 exit");
			},
			
		});
	});
