SealForm=Ext.extend(Ext.Window,{constructor:function(a){Ext.applyIf(this,a);this.initUIComponents();SealForm.superclass.constructor.call(this,{id:"SealFormWin",layout:"fit",items:this.formPanel,modal:true,height:200,width:440,maximizable:true,title:"印章详细信息",buttonAlign:"center",buttons:[{text:"保存",iconCls:"btn-save",scope:this,handler:this.save},{text:"重置",iconCls:"btn-reset",scope:this,handler:this.reset},{text:"取消",iconCls:"btn-cancel",scope:this,handler:this.cancel}]});},initUIComponents:function(){this.formPanel=new Ext.FormPanel({layout:"form",bodyStyle:"padding:10px",border:false,autoScroll:true,defaults:{anchor:"96%,96%"},defaultType:"textfield",items:[{name:"seal.sealId",xtype:"hidden",value:this.sealId==null?"":this.sealId},{fieldLabel:"",name:"seal.fileId",xtype:"hidden"},{fieldLabel:"印章名称",name:"seal.sealName",allowBlank:false,maxLength:64},{xtype:"hidden",name:"seal.belongId",value:curUserInfo.userId},{xtype:"compositefield",fieldLabel:"所属人员",items:[{xtype:"textfield",allowBlank:false,readOnly:true,name:"seal.belongName",value:curUserInfo.fullname},{xtype:"button",text:"选择人员",scope:this,handler:function(){var a=this.formPanel;UserSelector.getView(function(c,b){a.getCmpByName("seal.belongId").setValue(c);a.getCmpByName("seal.belongName").setValue(b);},true).show();}}]},{xtype:"container",layout:"column",style:"padding-left:0px;margin-left:0px;",defaults:{border:false},items:[{width:280,height:36,style:"padding-left:0px;",layout:"form",items:{fieldLabel:"印章路途",name:"seal.sealPath",maxLength:128,xtype:"textfield",readOnly:true,anchor:"98%,98%"}},{xtype:"button",text:"上传印章文件",iconCls:"btn-upload",scope:this,handler:function(){var a=this.formPanel;var b=App.createUploadDialog({file_cat:"document",callback:function(c){if(c.length>0){a.getCmpByName("seal.fileId").setValue(c[0].fileId);a.getCmpByName("seal.sealPath").setValue(c[0].filePath);}}});b.show();}}]}]});if(this.sealId!=null&&this.sealId!="undefined"){this.formPanel.loadData({url:__ctxPath+"/document/getSeal.do?sealId="+this.sealId,root:"data",preName:"seal"});}},reset:function(){this.formPanel.getForm().reset();},cancel:function(){this.close();},save:function(){$postForm({formPanel:this.formPanel,scope:this,url:__ctxPath+"/document/saveSeal.do",callback:function(a,c){var b=Ext.getCmp("SealGrid");if(b!=null){b.getStore().reload();}this.close();}});}});