var EMailSelector={getView:function(e,c,d){var a=this.initPanel(c);var b=new Ext.Window({title:"选择联系人",iconCls:"menu-appuser",width:460,height:440,layout:"fit",border:false,items:[a],resizable:false,modal:true,buttonAlign:"center",buttons:[{text:"确认",iconCls:"btn-ok",scope:"true",handler:function(){var g=Ext.getCmp("emailContactGrid");var h=g.getSelectionModel().getSelections();var j="";for(var f=0;f<h.length;f++){j+=""+h[f].data.fullname+""+"<"+h[f].data.email+">"+";";}if(e!=null){e.call(this,j);}b.close();}},{text:"关闭",iconCls:"btn-cancel",handler:function(){b.close();}}]});return b;},initPanel:function(g){var b=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:__ctxPath+"/communicate/listPhoneBook.do"}),reader:new Ext.data.JsonReader({root:"result",totalProperty:"totalCounts",id:"id",fields:[{name:"phoneId",type:"int"},"fullname","email","title"]}),remoteSort:true});b.setDefaultSort("id","desc");b.load({params:{start:0,limit:12,"Q_appUser.userId_L_EQ":curUserInfo.userId}});var h=null;if(g){h=new Ext.grid.CheckboxSelectionModel({singleSelect:true});}else{h=new Ext.grid.CheckboxSelectionModel();}var a=new Ext.grid.ColumnModel({columns:[h,new Ext.grid.RowNumberer(),{header:"名称",dataIndex:"fullname",renderer:function(j,k,i){var l=i.data.title;if(l=="先生"){return'<img src="'+__ctxPath+'/images/flag/man.png"/>&nbsp;'+j;}else{return'<img src="'+__ctxPath+'/images/flag/women.png"/>&nbsp;'+j;}},width:60}],defaults:{sortable:true,menuDisabled:true,width:120},listeners:{hiddenchange:function(i,j,k){saveConfig(j,k);}}});var e=new Ext.tree.TreePanel({id:"treePanels",title:"个人录信录",iconCls:"menu-personal-phoneBook",loader:new Ext.tree.TreeLoader({url:__ctxPath+"/communicate/listPhoneGroup.do"}),root:new Ext.tree.AsyncTreeNode({expanded:true}),rootVisible:false,listeners:{"click":this.clickPersonlNode}});var c=new Ext.tree.TreePanel({id:"sharedPanel",iconCls:"menu-phonebook-shared",title:"共享通信录 ",loader:new Ext.tree.TreeLoader({url:__ctxPath+"/communicate/sharePhoneBook.do"}),root:new Ext.tree.AsyncTreeNode({text:"共享通信录",expanded:true}),rootVisible:true,listeners:{"click":this.clickSharedNode}});var f=new Ext.grid.GridPanel({id:"emailContactGrid",height:360,autoWidth:false,store:b,shim:true,trackMouseOver:true,border:false,disableSelection:false,loadMask:true,cm:a,sm:h,viewConfig:{forceFit:true,enableRowBody:false,showPreview:false},bbar:new HT.PagingBar({store:b})});var d=new Ext.Panel({id:"emailContactPanel",width:420,height:410,layout:"border",border:false,items:[{region:"west",split:true,collapsible:true,width:120,margins:"5 0 5 5",layout:"accordion",items:[e,c]},{region:"center",margins:"5 0 5 5",width:230,items:[f]}]});return d;},clickPersonlNode:function(b){if(b!=null){var c=Ext.getCmp("emailContactGrid");var a=c.getStore();a.proxy.conn.url=__ctxPath+"/communicate/listPhoneBook.do";if(b.id!=0&&b.id!="0"){a.load({params:{start:0,limit:12,"Q_appUser.userId_L_EQ":curUserInfo.userId,"Q_phoneGroup.groupId_L_EQ":b.id}});}else{a.load({params:{start:0,limit:12,"Q_appUser.userId_L_EQ":curUserInfo.userId}});}}},clickSharedNode:function(b){if(b!=null){var c=Ext.getCmp("emailContactGrid");var a=c.getStore();a.baseParams={Q_isShared_SN_EQ:1};a.proxy.conn.url=__ctxPath+"/communicate/listPhoneBook.do";a.load({params:{start:0,limit:12,Q_isShared_SN_EQ:1}});}}};