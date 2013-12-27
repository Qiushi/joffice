GlobalTypeForm=Ext.extend(Ext.Window,{formPanel:null,constructor:function(a){Ext.applyIf(this,a);this.initUIComponents();GlobalTypeForm.superclass.constructor.call(this,{layout:"fit",items:this.formPanel,modal:true,height:180,width:400,maximizable:true,title:"分类详细信息",buttonAlign:"center",buttons:this.buttons});},initUIComponents:function(){this.formPanel=new Ext.FormPanel({layout:"form",bodyStyle:"padding:10px 10px 10px 10px",border:false,url:__ctxPath+"/system/saveGlobalType.do",id:"GlobalTypeForm",defaults:{anchor:"98%,98%"},defaultType:"textfield",items:[{name:"globalType.proTypeId",id:"proTypeId",xtype:"hidden",value:this.proTypeId==null?"":this.proTypeId},{fieldLabel:"名称",name:"globalType.typeName",id:"typeName",allowBlank:false},{fieldLabel:"父节点",value:this.parentId,xtype:"hidden",name:"globalType.parentId",id:"parentId"},{fieldLabel:"节点Key",name:"globalType.nodeKey",allowBlank:false,id:"nodeKey"},{fieldLabel:"节点分类Key",name:"globalType.catKey",allowBlank:false,xtype:"hidden",id:"catKey",value:this.catKey}]});if(this.proTypeId!=null&&this.proTypeId!="undefined"){this.formPanel.getForm().load({deferredRender:false,url:__ctxPath+"/system/getGlobalType.do?proTypeId="+this.proTypeId,waitMsg:"正在载入数据...",success:function(a,b){},failure:function(a,b){}});}this.buttons=[{text:"保存",iconCls:"btn-save",handler:this.save.createCallback(this.formPanel,this)},{text:"重置",iconCls:"btn-reset",handler:this.reset.createCallback(this.formPanel)},{text:"取消",iconCls:"btn-cancel",handler:this.cancel.createCallback(this)}];},reset:function(a){a.getForm().reset();},cancel:function(a){a.close();},save:function(a,b){var c=b.callback;if(a.getForm().isValid()){a.getForm().submit({method:"POST",waitMsg:"正在提交数据...",success:function(d,f){Ext.ux.Toast.msg("操作信息","成功保存信息！");var e=Ext.getCmp("GlobalTypeGrid");if(e!=null){e.getStore().reload();}if(c!=null&&c!=undefined){c.call(this);}b.close();},failure:function(d,e){Ext.MessageBox.show({title:"操作信息",msg:"信息保存出错，请联系管理员！",buttons:Ext.MessageBox.OK,icon:Ext.MessageBox.ERROR});b.close();}});}}});