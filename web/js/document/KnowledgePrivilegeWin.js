KnowledgePrivilegeWin=Ext.extend(Ext.Window,{gridPanel:null,constructor:function(a){Ext.applyIf(this,a);this.initUI();KnowledgePrivilegeWin.superclass.constructor.call(this,{title:this.folderName+"-授权列表",iconCls:"menu-folder-shared",width:710,height:500,modal:true,maximizable:true,layout:"fit",items:[this.gridPanel],buttonAlign:"center",buttons:this.buttons});},initUI:function(){var f=new Ext.grid.CheckboxSelectionModel();var d=function(l,i){if(i.className&&i.className.indexOf("x-grid3-cc-"+this.id)!=-1){l.stopEvent();var h=this.grid.getView().findRowIndex(i);var j=this.grid.getView().findCellIndex(i);var g=this.grid.store.getAt(h);var k=this.grid.colModel.getDataIndex(j);if(isGranted("_DocPrivilegeEdit")){if(k!="rightR"){var l={grid:this.grid,record:g,field:k,originalValue:g.data[this.dataIndex],value:!g.data[this.dataIndex],row:h,column:j,cancel:false};if(this.grid.fireEvent("validateedit",l)!==false&&!l.cancel){delete l.cancel;g.set(this.dataIndex,!g.data[this.dataIndex]);this.grid.fireEvent("afteredit",l);}}else{Ext.ux.Toast.msg("信息提示","可读为基本权限！");}}else{Ext.ux.Toast.msg("信息提示","你没有修改的权限！");}}};var b=new Ext.grid.CheckColumn({id:"read",header:"可读",dataIndex:"rightR",width:55,onMouseDown:d});var e=new Ext.grid.CheckColumn({header:"可修改",dataIndex:"rightU",width:55,onMouseDown:d});var c=new Ext.grid.CheckColumn({header:"可删除",dataIndex:"rightD",width:55,onMouseDown:d});this.rowActions=new Ext.ux.grid.RowActions({header:"管理",width:120,actions:[{iconCls:"btn-del",qtip:"删除",style:"margin:0 3px 0 3px"}]});var a=new Ext.grid.ColumnModel({columns:[f,new Ext.grid.RowNumberer(),{header:"privilegeId",dataIndex:"privilegeId",hidden:true},{header:"名称",dataIndex:"udrName"},{header:"属性",dataIndex:"flag",renderer:function(i,h,g){if(i==1){return'<img title="员工" src="'+__ctxPath+'/images/flag/user.jpg"/>';}if(i==2){return'<img title="部门" src="'+__ctxPath+'/images/flag/department.jpg"/>';}if(i==3){return'<img title="角色" src="'+__ctxPath+'/images/flag/role.jpg"/>';}}},b,e,c,this.rowActions],defaults:{sortable:true,menuDisabled:false,width:100}});this.store=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:__ctxPath+"/document/listDocPrivilege.do"}),baseParams:{"Q_docFolder.folderId_L_EQ":this.folderId},reader:new Ext.data.JsonReader({root:"result",totalProperty:"totalCounts",id:"id",fields:[{name:"privilegeId",type:"int"},{name:"folderName",mapping:"folderName"},"rightR","rightU","rightD","udrId","udrName","flag"]}),remoteSort:true});this.store.setDefaultSort("privilegeId","desc");this.store.load({params:{start:0,limit:25}});this.toolbar=new Ext.Toolbar({height:30,bodyStyle:"text-align:left",items:[]});if(isGranted("_DocPrivilegeAdd")){this.toolbar.add(new Ext.Button({iconCls:"btn-add",text:"添加文件夹权限",scope:this,handler:function(){var g=this.folderId;if(g!=null&&g>0){new DocFolderSharedForm({folderId:this.folderId,folderName:this.folderName,grid:this.gridPanel}).show();}else{Ext.ux.Toast.msg("提示","请选择文件夹!");}}}));}if(isGranted("_DocPrivilegeDel")){this.toolbar.add(new Ext.Button({iconCls:"btn-del",text:"删除文件夹权限",scope:this,handler:this.delRecords}));}this.gridPanel=new Ext.grid.EditorGridPanel({trackMouseOver:true,tbar:this.toolbar,store:this.store,trackMouseOver:true,disableSelection:false,loadMask:true,cm:a,sm:f,plugins:[b,e,c,this.rowActions],clicksToEdit:1,viewConfig:{forceFit:true,enableRowBody:false,showPreview:false},bbar:new HT.PagingBar({store:this.store})});this.rowActions.on("action",this.onRowAction,this);this.gridPanel.addListener("afteredit",function(g){Ext.Ajax.request({url:__ctxPath+"/document/changeDocPrivilege.do",params:{field:g.field,fieldValue:g.value,privilegeId:g.record.data.privilegeId},success:function(){},failure:function(){Ext.Msg.show({title:"错误提示",msg:"修改数据发生错误,操作将被回滚!",fn:function(){g.record.set(g.field,g.originalValue);},buttons:Ext.Msg.OK,icon:Ext.Msg.ERROR});}});});this.buttons=[{xtype:"button",text:"关闭",scope:this,iconCls:"btn-cancel",handler:function(){this.close();}}];},delByIds:function(b,a){Ext.Msg.confirm("信息确认","您确认要删除所选记录吗？",function(c){if(c=="yes"){Ext.Ajax.request({url:__ctxPath+"/document/multiDelDocPrivilege.do",params:{ids:b},method:"POST",success:function(d,e){Ext.ux.Toast.msg("操作信息","成功删除该记录！");a.getStore().reload();},failure:function(d,e){Ext.ux.Toast.msg("操作信息","操作出错，请联系管理员！");}});}});},delRecords:function(){var c=this.gridPanel;var a=c.getSelectionModel().getSelections();if(a.length==0){Ext.ux.Toast.msg("信息","请选择要删除的记录！");return;}var d=Array();for(var b=0;b<a.length;b++){d.push(a[b].data.privilegeId);}this.delByIds(d,c);},onRowAction:function(c,a,d,e,b){switch(d){case"btn-del":this.delByIds(a.data.privilegeId,c);break;default:break;}}});