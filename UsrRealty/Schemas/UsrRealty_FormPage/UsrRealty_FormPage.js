define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "44f0fc17-73b6-4e55-98ac-632929d8a08d",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_yqf9r8u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_yqf9r8u_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"clickMode": "default",
					"icon": "relationship-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_lwx4xzk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_lwx4xzk_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {},
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_cau1w0f",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_cau1w0f_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddRealtyVisitsProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "box-icon"
				},
				"parentName": "Button_lwx4xzk",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_0jjp8m8",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_0jjp8m8_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcRealtyAvgPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "ProcessSchemaParameter1"
						}
					},
					"icon": "calculator-button-icon"
				},
				"parentName": "Button_lwx4xzk",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_9vrmcri_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_xwunfcc",
					"labelPosition": "auto",
					"control": "$NumberAttribute_xwunfcc"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_daqk5rl",
					"labelPosition": "auto",
					"control": "$NumberAttribute_daqk5rl"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_mjklbc9",
					"labelPosition": "auto",
					"control": "$NumberAttribute_mjklbc9",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_2zr3po1",
					"labelPosition": "auto",
					"control": "$LookupAttribute_2zr3po1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_bql97sn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_bql97sn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_6vnoapv",
					"labelPosition": "auto",
					"control": "$LookupAttribute_6vnoapv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_mgv4ua0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mgv4ua0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_owb4k0l",
					"labelPosition": "auto",
					"control": "$StringAttribute_owb4k0l",
					"multiline": false,
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_w0r8mky",
					"labelPosition": "auto",
					"control": "$LookupAttribute_w0r8mky",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_na70b6o",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_na70b6o_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCommissionMultiplier",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferTypeUsrCommissionMultiplier",
					"control": "$UsrOfferTypeUsrCommissionMultiplier",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_bcb815h",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_bcb815h_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_nsftwj4",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_bcb815h",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ywotjww",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_nsftwj4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_n5f9zyi",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_n5f9zyi_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ywotjww",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_tg0lm7q",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_tg0lm7q_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "GridDetail_rt54yw8DS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ywotjww",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_fxf6l5q",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_fxf6l5q_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ywotjww",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_o4gv0b0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_o4gv0b0_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_rt54yw8"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fxf6l5q",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_763iqn5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_763iqn5_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fxf6l5q",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_kwc7ixz",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_kwc7ixz_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_rt54yw8"
					]
				},
				"parentName": "FlexContainer_ywotjww",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_zfi1y27",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_bcb815h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_rt54yw8",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"selectedRows": "$GridDetail_rt54yw8_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "GridDetail_rt54yw8_SelectedRows"
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_rt54yw8",
					"primaryColumnName": "GridDetail_rt54yw8DS_Id",
					"columns": [
						{
							"id": "1ab96282-da51-6dfc-214f-9f56ae8df1ab",
							"code": "GridDetail_rt54yw8DS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_rt54yw8DS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "1fc7653b-40b5-85bd-364b-e0cc61f63061",
							"code": "GridDetail_rt54yw8DS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_rt54yw8DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "4a6a7054-5160-79b3-654f-805a3fae0a24",
							"code": "GridDetail_rt54yw8DS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_rt54yw8DS_UsrComment)#",
							"dataValueType": 30
						},
						{
							"id": "be0dd046-6761-6211-9b20-4d74aa207339",
							"code": "GridDetail_rt54yw8DS_UsrManager",
							"path": "UsrManager",
							"caption": "#ResourceString(GridDetail_rt54yw8DS_UsrManager)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					]
				},
				"parentName": "GridContainer_zfi1y27",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"NumberAttribute_xwunfcc": {
					"modelConfig": {
						"path": "PDS.UsrPriceUSD"
					},
					"validators": {
						"MySuperValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 30,
								"message": "Price can not be less than 30.0"
							}
						}
					}
				},
				"NumberAttribute_daqk5rl": {
					"modelConfig": {
						"path": "PDS.UsrArea"
					},
					"validators": {
						"MySuperValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 10,
								"message": "Area can not be less than 10.0"
							}
						}
					}
				},
				"LookupAttribute_2zr3po1": {
					"modelConfig": {
						"path": "PDS.UsrType"
					}
				},
				"LookupAttribute_6vnoapv": {
					"modelConfig": {
						"path": "PDS.UsrOfferType"
					}
				},
				"StringAttribute_owb4k0l": {
					"modelConfig": {
						"path": "PDS.UsrComment"
					}
				},
				"LookupAttribute_w0r8mky": {
					"modelConfig": {
						"path": "PDS.UsrManager"
					}
				},
				"NumberAttribute_mjklbc9": {
					"modelConfig": {
						"path": "PDS.UsrCommissionUSD"
					}
				},
				"UsrOfferTypeUsrCommissionMultiplier": {
					"modelConfig": {
						"path": "PDS.UsrOfferTypeUsrCommissionMultiplier"
					}
				},
				"GridDetail_rt54yw8": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_rt54yw8DS"
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_rt54yw8DS_UsrVisitDateTime": {
								"modelConfig": {
									"path": "GridDetail_rt54yw8DS.UsrVisitDateTime"
								}
							},
							"GridDetail_rt54yw8DS_UsrPotentialCustomer": {
								"modelConfig": {
									"path": "GridDetail_rt54yw8DS.UsrPotentialCustomer"
								}
							},
							"GridDetail_rt54yw8DS_UsrComment": {
								"modelConfig": {
									"path": "GridDetail_rt54yw8DS.UsrComment"
								}
							},
							"GridDetail_rt54yw8DS_UsrManager": {
								"modelConfig": {
									"path": "GridDetail_rt54yw8DS.UsrManager"
								}
							},
							"GridDetail_rt54yw8DS_Id": {
								"modelConfig": {
									"path": "GridDetail_rt54yw8DS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrRealty",
						"attributes": {
							"UsrOfferTypeUsrCommissionMultiplier": {
								"path": "UsrOfferType.UsrCommissionMultiplier",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"GridDetail_rt54yw8DS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrRealtyVisit",
						"attributes": {
							"UsrVisitDateTime": {
								"path": "UsrVisitDateTime"
							},
							"UsrPotentialCustomer": {
								"path": "UsrPotentialCustomer"
							},
							"UsrComment": {
								"path": "UsrComment"
							},
							"UsrManager": {
								"path": "UsrManager"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_rt54yw8DS": [
					{
						"attributePath": "UsrParentRealty",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Run web service button works...");

					var typeObject = await request.$context.LookupAttribute_2zr3po1;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}
					// get id from type lookup type object

					var offerTypeObject = await request.$context.LookupAttribute_6vnoapv;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
					// get id from type lookup offer type object

					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetTotalAmountByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/D5_8.0.8.4758/0/rest/RealtyService/GetTotalAmountByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId,
						entityName: "UsrRealty"
					};
					const response = await httpClientService.post(endpoint, params);
					
					this.console.log("response total price = " + response.body.GetTotalAmountByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},	

			{
				request: "usr.MyButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.NumberAttribute_xwunfcc;
					this.console.log("Price = " + price);
					request.$context.NumberAttribute_xwunfcc = price * 2;
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					/* If the UsrPriceUSD field changes, take the following steps. */
					if (request.attributeName === 'NumberAttribute_xwunfcc' || 					// if price changed
					   request.attributeName === 'UsrOfferTypeUsrCommissionMultiplier' ) { 		// or multiplier changed
						var price = await request.$context.NumberAttribute_xwunfcc;
						var multiplier = await request.$context.UsrOfferTypeUsrCommissionMultiplier;
						var commission = price * multiplier;
						request.$context.NumberAttribute_mjklbc9 = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});