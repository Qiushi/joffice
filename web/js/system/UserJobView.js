UserJobView=Ext.extend(Ext.Panel,{constructor:function(a){Ext.applyIf(this,a);this.initUIComponents();UserJobView.superclass.constructor.call(this,{id:"UserJobView",title:"职位人员管理",region:"center",layout:"border",border:false,iconCls:"menu-job",items:[this.gridPanel,this.searchPanel,this.userJobTreePanel],keys:[{key:Ext.EventObject.ENTER,fn:this.search,scope:this},{key:Ext.EventObject.ESC,fn:this.reset,scope:this}]});},initUIComponents:function(){this.topbar=new Ext.Toolbar({defaultType:"button",items:[{text:"添加",iconCls:"add-user",scope:this,handler:function(){var f=Ext.getCmp("userJobViewJobTreePanel").getSelectionModel().getSelectedNode();if(f!=null&&f.id>0){new UserJobForm({jobId:f.id,jobName:f.text}).show();}else{new UserJobForm({}).show();}}},"-",{text:"删除",iconCls:"btn-del",scope:this,handler:this.removeByIds}]});this.searchPanel=new Ext.FormPanel({id:"UserJobViewSearchPanel",region:"north",layout:"form",border:false,height:40,frame:false,layoutConfig:{padding:"5px",align:"middle"},items:[{fieldLabel:"请输入搜索条件",layout:"column",xtype:"container",style:"margin-top:8px;",border:false,defaults:{xtype:"label",height:25,border:false},layoutConfig:{align:"middle"},items:[{style:"margin:5px 5px 5px 5px;",text:"用户账号"},{columnWidth:0.2,xtype:"textfield",name:"Q_appUser.username_S_LK",maxLength:256},{style:"margin:5px 5px 5px 5px;",text:"用户名称"},{columnWidth:0.2,xtype:"textfield",name:"Q_appUser.fullname_S_LK",maxLength:256},{style:"margin:5px 5px 5px 5px;",text:"主职位(是/否)"},{columnWidth:0.2,xtype:"combo",hiddenName:"Q_isMain_SN_EQ",mode:"local",triggerAction:"all",editable:false,store:[["0","否"],["1","是"]],emptyText:"全部"},{style:"margin-left:5px;",xtype:"button",text:"搜索",iconCls:"search",scope:this,handler:this.search},{xtype:"button",text:"清空",iconCls:"reset",scope:this,handler:this.reset}]}]});this.gridPanel=new HT.GridPanel({id:"userJobUserGrid",title:"职位人员列表",region:"center",tbar:this.topbar,rowActions:true,url:__ctxPath+"/system/listUserJob.do",trackMouseOver:true,disableSelection:false,loadMask:true,viewConfig:{forceFit:true,enableRowBody:false,showPreview:false},fields:[{name:"userJobId",type:"int"},"job","appUser","isMain"],columns:[{header:"userJobId",dataIndex:"userJobId",hidden:true},{header:"状态",menuDisabled:true,sortable:true,dataIndex:"appUser",width:30,renderer:function(h){if(h){var f=h.status;var g="";if(f=="1"){g+='<img title="激活" src="'+__ctxPath+'/images/flag/customer/effective.png"/>';}else{g+='<img title="禁用" src="'+__ctxPath+'/images/flag/customer/invalid.png"/>';}return g;}}},{header:"员工账号",dataIndex:"appUser",menuDisabled:true,sortable:true,renderer:function(f){return f.username;}},{header:"员工名称",dataIndex:"appUser",menuDisabled:true,sortable:true,renderer:function(f){return f.fullname;}},{header:"职位",dataIndex:"job",menuDisabled:true,sortable:true,renderer:function(f){return f.jobName;}},{header:"主职位(是/否)",dataIndex:"isMain",menuDisabled:true,sortable:true,renderer:function(f){return f==1?"是":"否";}},new Ext.ux.grid.RowActions({header:"管理",width:100,actions:[{iconCls:"btn-del",qtip:"删除",style:"margin : 0 3px 0 3px"},{iconCls:"btn-edit",qtip:"编辑",style:"margin : 0 3px 0 3px"},{iconCls:"btn-showDetail",qtip:"查看职位信息",style:"margin : 0 3px 0 3px"}],listeners:{scope:this,"action":this.onRowActions}})]});this.gridPanel.addListener("rowdblclick",function(f,h,g){f.getSelectionModel().each(function(i){new UserJobForm({userJobId:i.data.userJobId,jobName:i.data.job.jobName}).show();});});this.userJobTreePanel=new Ext.tree.TreePanel({id:"userJobViewJobTreePanel",region:"west",border:false,width:200,collapsible:true,autoScroll:true,split:true,title:"职位信息列表",tbar:new Ext.Toolbar({defaultType:"button",items:[{text:"刷新",iconCls:"btn-refresh",handler:function(){Ext.getCmp("userJobViewJobTreePanel").root.reload();}},{text:"展开",iconCls:"btn-expand",handler:function(){Ext.getCmp("userJobViewJobTreePanel").expandAll();}},{text:"收起",iconCls:"btn-collapse",handler:function(){Ext.getCmp("userJobViewJobTreePanel").collapseAll();}}]}),loader:new Ext.tree.TreeLoader({url:__ctxPath+"/hrm/treeLoadJob.do"}),root:new Ext.tree.AsyncTreeNode({expanded:true}),rootVisible:false,listeners:{"click":this.clickNode}});this.userJobTreePanel.on("contextmenu",d,this.userJobTreePanel);var e=new Ext.menu.Menu({id:"userJobTreeMenu",items:[{text:"新增职位信息",iconCls:"btn-add",scope:this,handler:c},{text:"修改职位信息",iconCls:"btn-edit",scope:this,handler:a},{text:"删除职位信息",iconCls:"btn-del",scope:this,handler:b}]});function d(f,g){userJobSelected=new Ext.tree.TreeNode({id:f.id,text:f.text});e.showAt(g.getXY());}function c(){var f=userJobSelected.id;if(f>0){new JobForm({parentId:f}).show();}else{new JobForm({parentId:0}).show();}}function a(){var f=userJobSelected.id;if(f>0){new JobForm({jobId:f}).show();}else{Ext.ux.Toast.msg("操作提示","对不起，公司名称不能修改！");}}function b(){var f=userJobSelected.id;if(f>0){Ext.Msg.confirm("操作提示","你真的要删除该职位信息吗？",function(g){if(g=="yes"){var h=Ext.getCmp("userJobViewJobTreePanel");Ext.Ajax.request({url:__ctxPath+"/hrm/deleteJob.do?jobId="+f,method:"post",waitMsg:"数据正在提交，请稍后...",success:function(i,k){var j=Ext.util.JSON.decode(i.responseText);if(j.success){Ext.ux.Toast.msg("操作提示","删除该职位信息操作成功！");h.root.reload();}else{Ext.ux.Toast.msg("操作提示","对不起，删除该职位信息操作失败！");}}});}});}else{Ext.ux.Toast.msg("操作提示","对不起，公司名称不能删除！");}}},onRowActions:function(c,a,d,e,b){switch(d){case"btn-showDetail":this.showDetail.call(this,a);break;case"btn-edit":this.editById.call(this,a);break;case"btn-del":this.removeById.call(this,a.data.userJobId);break;default:break;}},reset:function(){var a=Ext.getCmp("UserJobViewSearchPanel");a.getForm().reset();},search:function(){this.clickNode(null);},editById:function(a){new UserJobForm({userJobId:a.data.userJobId,jobName:a.data.job.jobName}).show();},showDetail:function(a){var b=a.data.appUser;UserJobDetailForm.show(b.userId,b.username);},removeById:function(a){Ext.Msg.confirm("操作提示","你真的要删除所选数据吗？",function(b){if(b=="yes"){Ext.Ajax.request({url:__ctxPath+"/system/multiDelUserJob.do",params:{ids:a},method:"post",waitMsg:"数据正在提交，请稍后...",success:function(c,d){Ext.ux.Toast.msg("操作提示","数据提交成功！");Ext.getCmp("userJobUserGrid").getStore().reload();},failure:function(){Ext.ux.Toast.msg("操作提示","对不起，数据提交失败！");}});}});},removeByIds:function(){var d=Ext.getCmp("userJobUserGrid");var a=d.getSelectionModel().getSelections();if(a.length>0){var c=new Array();for(var b=0;b<a.length;b++){c.push(a[b].data.userJobId);}this.removeById(c);}else{Ext.ux.Toast.msg("操作提示","对不起，请选择要删除的员工信息！");}},clickNode:function(f){var e=Ext.getCmp("UserJobViewSearchPanel");var b=e.getCmpByName("Q_appUser.username_S_LK").getValue();var g=e.getCmpByName("Q_appUser.fullname_S_LK").getValue();var a=e.getCmpByName("Q_isMain_SN_EQ").getValue();var c=Ext.getCmp("userJobUserGrid").getStore();var d={start:0,limit:25,"Q_appUser.username_S_LK":b,"Q_appUser.fullname_S_LK":g};if(f!=null&&f.id>0){d["userJob.job.jobId"]=f.id;}if(a=="0"){d["Q_isMain_SN_EQ"]="";}else{if(a=="1"){d["Q_isMain_SN_EQ"]="1";}}c.reload({params:d});}});