MenuView=Ext.extend(Ext.Panel,{constructor:function(a){Ext.applyIf(this,a);this.initUIComponent();MenuView.superclass.constructor.call(this,{id:"menuView",title:"菜单管理",iconCls:"menu-m",layout:"border",region:"center",items:[this.treePanel]});},initUIComponent:function(){this.treePanel=new Ext.tree.TreePanel({id:"menuViewTreePanel",layout:"form",region:"center",anchor:"98% 98%",autoScroll:true,collapsible:true,loadMask:true,split:true,width:"98%",title:"菜单列表",tbar:new Ext.Toolbar({defaultType:"button",items:[{text:"刷新",iconCls:"btn-refresh",handler:function(){Ext.getCmp("menuViewTreePanel").root.reload();}},{text:"展开",iconCls:"btn-expand",handler:function(){Ext.getCmp("menuViewTreePanel").expandAll();}},{text:"收起",iconCls:"btn-collapse",handler:function(){Ext.getCmp("menuViewTreePanel").collapseAll();}}]}),loader:new Ext.tree.TreeLoader({url:__ctxPath+"/menu/listMenu.do"}),root:new Ext.tree.AsyncTreeNode({expanded:true}),rootVisible:false,listeners:{"dblclick":function(f){}}});this.treePanel.on("contextmenu",c,this.treePanel);var e=new Ext.menu.Menu({id:"MenuViewTreeMenu",items:[{text:"新建菜单",iconCls:"btn-add",scope:this,handler:d},{text:"编辑菜单",iconCls:"btn-edit",scope:this,handler:b},{text:"删除菜单",iconCls:"btn-del",scope:this,handler:a}]});function d(){var g=selectedNode;var f=Ext.getCmp("MenuForm");if(f==null||f=="undefined"){f=new MenuForm({parentId:g!=null?g.id:""});}f.show();}function b(){var g=Ext.getCmp("menuViewTreePanel").getSelectionModel().getSelectedNode();if(g==null||g=="undefined"){Ext.ux.Toast.msg("操作提示","请选择，菜单项！");return;}if(g.id=="0"){Ext.ux.Toast.msg("操作提示","对不起，公司名称不能修改！");return;}var f=Ext.getCmp("MenuForm");if(f==null||f=="undefined"){f=new MenuForm({id:g.id,text:g.text,isChild:!g.hasChildNodes()});}f.show();}function a(){var f=selectedNode;if(f==null||f=="undefined"){Ext.ux.Toast.msg("操作提示","请选择，菜单项！");return;}if(f.id=="0"){Ext.ux.Toast.msg("操作提示","对不起，公司名称不能修改！");return;}Ext.Msg.confirm("操作提示","你真的要删除菜单["+f.text+"]吗？",function(g){if(g=="yes"){Ext.Ajax.request({url:__ctxPath+"/menu/deleteMenu.do",params:{id:f.id},method:"post",waitMsg:"数据正在提交，请稍后...",success:function(){Ext.ux.Toast.msg("操作提示","菜单删除成功！");Ext.getCmp("menuViewTreePanel").root.reload();if(curUserInfo.username=="admin"){loadWestMenu("true");}else{Ext.ux.Toast.msg("操作提示","仅对开发用户开放刷新菜单功能!");}}});}});}function c(f,g){selectedNode=new Ext.tree.TreeNode({id:f.id,text:f.text});e.showAt(g.getXY());}}});