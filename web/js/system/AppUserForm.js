var AppUserForm=function(a,c,d,b){return this.setup(a,c,d,b);};AppUserForm.prototype.setup=function(q,j,l,m){var g=this.initDepSelectPanel(j);var o=g.findByType("editorgrid")[0];var n=this.initJopSelectPanel(j);var e=n.findByType("editorgrid")[0];var h=this.initRoleSelectPanel(j);var c=h.findByType("editorgrid")[0];var f=this.initFooterToolbar(j,o,e,c);var k=__ctxPath+"/system/listDepartment.do?opt=appUser";var p=new TreeSelector("depTreeSelector",k,null,"appUser.depId",false);var b=__ctxPath+"/hrm/treeLoadJob.do";var a=new TreeSelector("jobTreeSelector",b,null,"appUser.jobId",false);var d=new Ext.form.FormPanel({reader:new Ext.data.JsonReader({root:"data"},[{name:"appUser.userId",mapping:"userId"},{name:"appUser.jobId",mapping:"jobId"},{name:"appUser.jobName",mapping:"jobName"},{name:"appUser.username",mapping:"username"},{name:"appUser.password",mapping:"password"},{name:"appUser.fullname",mapping:"fullname"},{name:"appUser.email",mapping:"email"},{name:"appUser.depName",mapping:"department.depName"},{name:"appUser.accessionTime",mapping:"accessionTime"},{name:"appUserStatus",mapping:"status"},{name:"appUserTitle",mapping:"title"},{name:"appUser.phone",mapping:"phone"},{name:"appUser.mobile",mapping:"mobile"},{name:"appUser.fax",mapping:"fax"},{name:"appUser.address",mapping:"address"},{name:"appUser.zip",mapping:"zip"},{name:"appUser.photo",mapping:"photo"},{name:"appUser.dynamicPwd",mapping:"dynamicpwd"},{name:"appUser.dyPwdStatus",mapping:"dyPwdStatus"}]),id:"AppUserForm",title:q,iconCls:"menu-customer",border:false,autoScroll:true,bodyStyle:"background-color: transparent;",labelAlign:"right",tbar:f,defaults:{anchor:"98%,100%",xtype:"panel"},url:__ctxPath+"/system/saveAppUser.do",layout:"form",items:[{xtype:"fieldset",title:"基本信息",collapsible:true,autoHeight:true,defaults:{anchor:"96%,96%"},items:{xtype:"panel",border:false,layout:"hbox",layoutConfig:{padding:"5",align:"middle"},defaults:{style:"padding:0px 5px 0px 5px;",anchor:"98%,98%",height:250,width:"38%"},items:[{id:"displayUserPhoto",xtype:"panel",bodyStyle:"MARGIN-RIGHT: auto; MARGIN-LEFT: auto;",title:"个人照片",width:"20%",html:'<div style="MARGIN-RIGHT: auto; MARGIN-LEFT: auto;"><img src="'+__ctxPath+'/images/default_image_male.jpg" style=""/></div>',tbar:new Ext.Toolbar({height:30,items:[{text:"上传",iconCls:"btn-upload",handler:function(){AppUserForm.uploadPhotoBtn(j);}},{text:"删除",iconCls:"btn-delete",handler:function(){AppUserForm.deletePhotoBtn(j);}}]})},{id:"AppUserMustInfo",xtype:"panel",title:"必填信息",labelWidth:55,defaults:{anchor:"98%,98%"},bodyStyle:"padding:5px;",layout:"form",defaultType:"textfield",labelAlign:"right",hideLabels:false,items:[{xtype:"hidden",fieldLabel:"账号ID",name:"appUser.userId",id:"appUser.userId"},{fieldLabel:"登录账号",name:"appUser.username",id:"appUser.username",allowBlank:false,blankText:"登录账号不能为空!"},{fieldLabel:"登录密码",name:"appUser.password",id:"appUser.password",inputType:"password",allowBlank:false,blankText:"登录密码不能为空!"},{fieldLabel:"账号姓名",name:"appUser.fullname",id:"appUser.fullname",allowBlank:false,blankText:"账号姓名不能为空!"},{fieldLabel:"E-mail",name:"appUser.email",id:"appUser.email",vtype:"email",allowBlank:false,blankText:"邮箱不能为空!",vtypeText:"邮箱格式不正确!"},{layout:"hbox",hideLabel:true,xtype:"compositefield",width:300,items:[{xtype:"label",text:"主部门:",style:"padding:0px 0px 0px 15px;",width:55},p,{xtype:"button",text:"更多部门",handler:function(r,u){var t=Ext.getCmp("AppUserForm");var s=t.findByType("fieldset");for(i=0;i<s.length;i++){if(s[i].getId()!="depFieldset"){s[i].collapse();}}Ext.getCmp("depFieldset").expand();}}]},{layout:"hbox",hideLabel:true,xtype:"compositefield",width:300,items:[{xtype:"label",text:"主职位:",style:"padding:0px 0px 0px 15px;",width:55},a,{xtype:"button",text:"更多职位",handler:function(r,u){var t=Ext.getCmp("AppUserForm");var s=t.findByType("fieldset");for(i=0;i<s.length;i++){if(s[i].getId()!="jobFieldset"){s[i].collapse();}}Ext.getCmp("jobFieldset").expand();}}]},{fieldLabel:"入职时间",xtype:"datefield",format:"Y-m-d",name:"appUser.accessionTime",id:"appUser.accessionTime",allowBlank:false,blankText:"入职时间不能为空!",length:50},{fieldLabel:"状态",id:"appUserStatus",hiddenName:"appUser.status",xtype:"combo",mode:"local",editable:false,triggerAction:"all",store:[["1","激活"],["0","禁用"]],value:1},{xtype:"hidden",name:"appUser.department.depId",id:"appUser.depId"},{xtype:"hidden",name:"appUser.jobId",id:"appUser.jobId"}]},{xtype:"panel",title:"选填信息",layout:"form",defaultType:"textfield",labelWidth:55,defaults:{anchor:"98%,98%"},hideLabel:false,labelAlign:"right",items:[{fieldLabel:"性别",xtype:"combo",hiddenName:"appUser.title",id:"appUserTitle",mode:"local",editable:false,triggerAction:"all",store:[["1","先生"],["0","女士"]],value:"1",listeners:{select:function(v,r,t){var s=Ext.getCmp("appUser.photo");if(s.value==""||s.value=="undefined"||s.value==null){var u=Ext.getCmp("displayUserPhoto");if(v.value=="0"){u.body.update('<img src="'+__ctxPath+'/images/default_image_female.jpg"/>');}else{u.body.update('<img src="'+__ctxPath+'/images/default_image_male.jpg"/>');}}}}},{fieldLabel:"家庭电话",name:"appUser.phone",id:"appUser.phone"},{fieldLabel:"移动电话",xtype:"numberfield",name:"appUser.mobile",id:"appUser.mobile"},{fieldLabel:"传真",name:"appUser.fax",id:"appUser.fax"},{fieldLabel:"家庭住址",name:"appUser.address",id:"appUser.address"},{fieldLabel:"邮编",xtype:"numberfield",name:"appUser.zip",id:"appUser.zip"},{filedLabel:"照片",xtype:"hidden",id:"appUser.photo",name:"appUser.photo"}]}]}},{xtype:"fieldset",id:"rolesFieldset",columnWidth:0.5,title:"角色信息",collapsed:true,collapsible:true,autoHeight:true,defaults:{anchor:"96%,96%"},items:h},{xtype:"fieldset",id:"depFieldset",columnWidth:0.5,title:"部门信息",collapsed:true,collapsible:true,autoHeight:true,defaults:{anchor:"96%,96%"},items:g},{xtype:"fieldset",id:"jobFieldset",columnWidth:0.5,title:"职位信息",collapsed:true,collapsible:true,autoHeight:true,defaults:{anchor:"96%,96%"},items:n}]});if(l){Ext.getCmp("appUser.depId").setValue(l);Ext.getCmp("depTreeSelector").setValue(m);}return d;};AppUserForm.prototype.initFooterToolbar=function(b,d,e,a){var c=new Ext.Toolbar({id:"AppUserFormToolbar",height:30,items:[{text:"保存",iconCls:"btn-save",handler:function(){var o=Ext.getCmp("AppUserForm");if(o.getForm().isValid()){var k=d.getStore();var r=[];var t=k.getCount();var n=o.getForm().findField("appUser.depId").getValue();var f=true;for(i=0;i<t;i++){var p=k.getAt(i);if((p.data.department.depId*1)==(n*1)){f=false;p.data.isMain=1;}r.push(p.data);}if(f==true){var w={};Ext.apply(w,{depId:o.getForm().findField("appUser.depId").getValue()});var u=new k.recordType();u.data={};u.data.isMain=1;u.data.sn=0;Ext.apply(u.data,{department:w});r.push(u.data);}var l=e.getStore();var x=[];var v=l.getCount();var s=o.getForm().findField("appUser.jobId").getValue();var g=true;for(i=0;i<v;i++){var p=l.getAt(i);if((p.data.job.jobId*1)==(s*1)){g=false;p.data.isMain=1;}x.push(p.data);}if(g==true){var q={};Ext.apply(q,{jobId:o.getForm().findField("appUser.jobId").getValue()});var u=new l.recordType();u.data={};u.data.isMain=1;Ext.apply(u.data,{job:q});x.push(u.data);}var h=a.getStore();var m=[];var j=h.getCount();for(i=0;i<j;i++){var p=h.getAt(i);m.push(p.data);}o.getForm().submit({waitMsg:"正在提交用户信息",params:{depParams:Ext.encode(r),jobParams:Ext.encode(x),roleParams:Ext.encode(m)},success:function(y,A){Ext.ux.Toast.msg("操作信息","保存成功！");var z=Ext.getCmp("AppUserGrid");if(z!=null){z.getStore().reload({start:0,limit:25});}AppUtil.removeTab("AppUserForm");},failure:function(y,z){Ext.ux.Toast.msg("错误信息",z.result.msg);Ext.getCmp("appUser.username").setValue("");}});}}},{text:"取消",iconCls:"reset",handler:function(){var f=Ext.getCmp("centerTabPanel");f.remove("AppUserForm");}},{text:"修改密码",id:"resetPassword",iconCls:"btn-password",hidden:true,handler:function(){new ResetPasswordForm(b);}},{text:"令牌设置",iconCls:"btn-dynamic-pwd",hidden:sysConfigInfo.dynamicPwd=="2"?true:false,handler:function(){new DynamicPwdForm({userId:b}).show();}}]});return c;};AppUserForm.uploadPhotoBtn=function(c){var a=Ext.getCmp("appUser.photo");var b=App.createUploadDialog({file_cat:"system/appUser",callback:uploadUserPhoto,permitted_extensions:["jpg"]});if(a.value!=""&&a.value!=null&&a.value!="undefined"){var d="再次上传需要先删除原有图片,";Ext.Msg.confirm("信息确认",d+"是否删除？",function(e){if(e=="yes"){Ext.Ajax.request({url:__ctxPath+"/system/deleteFileAttach.do",method:"post",params:{filePath:a.value},success:function(){if(c!=""&&c!=null&&c!="undefined"){Ext.Ajax.request({url:__ctxPath+"/system/photoAppUser.do",method:"post",params:{userId:c},success:function(){a.setValue("");var h=Ext.getCmp("appUserTitle");var j=Ext.getCmp("displayUserPhoto");if(h.value==1){j.body.update('<img src="'+__ctxPath+'/images/default_image_male.jpg"  width="100%" height="100%"/>');}else{j.body.update('<img src="'+__ctxPath+'/images/default_image_female.jpg"  width="100%" height="100%"/>');}b.show("queryBtn");}});}else{a.setValue("");var f=Ext.getCmp("appUserTitle");var g=Ext.getCmp("displayUserPhoto");if(f.value==1){g.body.update('<img src="'+__ctxPath+'/images/default_image_male.jpg"  width="100%" height="100%"/>');}else{g.body.update('<img src="'+__ctxPath+'/images/default_image_female.jpg"  width="100%" height="100%"/>');}b.show("queryBtn");}}});}});}else{b.show("queryBtn");}};AppUserForm.deletePhotoBtn=function(b){var a=Ext.getCmp("appUser.photo");if(a.value!=null&&a.value!=""&&a.value!="undefined"){Ext.Msg.confirm("确认信息","照片一旦删除将不可恢复, 是否删除?",function(c){if(c=="yes"){Ext.Ajax.request({url:__ctxPath+"/system/deleteFileAttach.do",method:"post",params:{filePath:a.value},success:function(){if(b!=""&&b!=null&&b!="undefined"){Ext.Ajax.request({url:__ctxPath+"/system/photoAppUser.do",method:"post",params:{userId:b},success:function(){a.setValue("");var f=Ext.getCmp("appUserTitle");var g=Ext.getCmp("displayUserPhoto");if(f.value==1){g.body.update('<img src="'+__ctxPath+'/images/default_image_male.jpg"  width="100%" height="100%"/>');}else{g.body.update('<img src="'+__ctxPath+'/images/default_image_female.jpg"  width="100%" height="100%"/>');}}});}else{a.setValue("");var d=Ext.getCmp("appUserTitle");var e=Ext.getCmp("displayUserPhoto");if(d.value==1){e.body.update('<img src="'+__ctxPath+'/images/default_image_male.jpg"  width="100%" height="100%"/>');}else{e.body.update('<img src="'+__ctxPath+'/images/default_image_female.jpg"  width="100%" height="100%"/>');}}}});}});}else{Ext.ux.Toast.msg("提示信息","您还未增加照片.");}};function uploadUserPhoto(b){var a=Ext.getCmp("appUser.photo");var c=Ext.getCmp("displayUserPhoto");a.setValue(b[0].filePath);c.body.update('<img src="'+__ctxPath+"/attachFiles/"+b[0].filePath+'"  width="100%" height="100%"/>');}AppUserForm.prototype.initDepSelectPanel=function(j){Ext.QuickTips.init();var e=null;var l=__ctxPath+"/system/listDepartment.do";var m=new Ext.tree.TreePanel({height:220,flex:7,useArrows:false,autoScroll:true,animate:false,enableDD:false,containerScroll:true,border:true,dataUrl:l,rootVisible:false,root:{nodeType:"async",text:"Ext JS",draggable:false,id:"source"},listeners:{"click":function(s){e=s;},"beforeload":function(s){s.attributes.qtip="双击添加";s.attributes.description="双击添加";}}});var f=function(s){Ext.Ajax.request({url:__ctxPath+"/system/multiDelDepUsers.do",params:{ids:s},method:"POST",success:function(t,u){Ext.ux.Toast.msg("操作信息","成功删除该明细！");},failure:function(t,u){Ext.ux.Toast.msg("操作信息","操作出错，请联系管理员！");}});};var q=function(){if(e==null){Ext.ux.Toast.msg("信息","请选择要添加的部门！");return;}var s=false;for(i=0;i<d.getCount();i++){var v=d.getAt(i);if(v.data.department.depId==e.id){s=true;}}if(s==true){Ext.ux.Toast.msg("信息","部门重复，请选择其它部门！");return;}var t={};Ext.apply(t,{depId:e.id,depName:e.text});var u=new d.recordType();u.data={};u.data.isMain=0;u.data.sn=0;Ext.apply(u.data,{department:t});d.insert(0,u);d.commitChanges();e=null;};var o=function(){var s=n.getSelectionModel().getSelections();if(s.length==0){Ext.ux.Toast.msg("信息","请选择要删除的记录！");return;}if(s[0].data.depUserId!=null&&s[0].data.depUserId!=""){f(s[0].data.depUserId);}d.remove(s[0]);d.commitChanges();};var b=new Ext.Panel({frame:false,border:false,hideBorders:true,height:220,flex:0.4,layout:{type:"vbox",pack:"center",align:"stretch"},defaults:{anchor:"96%,96%"},defaults:{margins:"0 3 0 0"},items:[{xtype:"button",iconCls:"btn-right",scope:this,handler:q},{xtype:"button",iconCls:"btn-left",scope:this,handler:o}]});var g=function(){var s=Array();for(i=0;i<d.getCount();i++){var t=d.getAt(i);if(t.data.depUserId!=null&&t.data.depUserId!=""){s.push(t.data.depUserId);}}if(s.length>0){f(s);}d.removeAll();d.commitChanges();};var h=new Ext.Toolbar({items:[{text:"清除所选",scope:this,handler:g}]});var k=Ext.data.Record.create([{name:"depUserId",type:"int"},"department","appUser","isMain","sn"]);var p=new Ext.data.HttpProxy({url:__ctxPath+"/system/listDepUsers.do"});var r=new Ext.data.JsonReader({root:"result",totalProperty:"totalCounts",idProperty:"depUserId"},k);var d=new Ext.data.Store({id:"AppUserForm.depStore",proxy:p,reader:r});d.on("beforeload",function(s){s.baseParams={start:0,limit:10000,"Q_appUser.userId_L_EQ":j};});d.setDefaultSort("sn");if(j!=""&&j!=null&&j!="undefined"){d.load();}var c=new Ext.grid.CheckboxSelectionModel({singleSelect:true});var n=new Ext.grid.EditorGridPanel({frame:false,border:true,flex:6,height:220,tbar:h,store:d,clicksToEdit:1,sm:c,viewConfig:{forceFit:true,autoFill:true},columns:[{header:"depUserId",dataIndex:"depUserId",sortable:true,hidden:true},{header:"部门",sortable:true,dataIndex:"department",renderer:function(s){if(s){return'<font qtip="双击删除">'+s.depName+"</font>";}}},{header:"是否主部门",sortable:true,width:55,dataIndex:"isMain",editable:true,renderer:function(s){return s==1?"是":"否";}}]});Ext.QuickTips.init();n.on("dblclick",function(t){var s=n.getSelectionModel().getSelections();if(s.length==0){Ext.ux.Toast.msg("信息","请选择要删除的记录！");return;}if(s[0].data.depUserId!=null&&s[0].data.depUserId!=""){f(s[0].data.depUserId);}d.remove(s[0]);d.commitChanges();},this);m.on("dblclick",function(u){if(u==null){Ext.ux.Toast.msg("信息","请选择要添加的部门！");return;}var s=false;for(i=0;i<d.getCount();i++){var w=d.getAt(i);if(w.data.department.depId==u.id){s=true;}}if(s==true){Ext.ux.Toast.msg("信息","部门重复，请选择其它部门！");return;}var t={};Ext.apply(t,{depId:u.id,depName:u.text});var v=new d.recordType();v.data={};v.data.isMain=0;v.data.sn=0;Ext.apply(v.data,{department:t});d.insert(0,v);d.commitChanges();u=null;},this);var a=new Ext.Panel({xtype:"panel",height:220,border:false,layout:{type:"hbox",align:"stretch"},height:220,items:[m,b,n]});return a;};AppUserForm.prototype.initJopSelectPanel=function(h){Ext.QuickTips.init();var d=null;var k=__ctxPath+"/hrm/treeLoadJob.do";var n=new Ext.tree.TreePanel({height:220,flex:7,useArrows:false,autoScroll:true,animate:false,enableDD:false,containerScroll:true,border:true,dataUrl:k,rootVisible:false,root:{nodeType:"async",text:"Ext JS",draggable:false},listeners:{"click":function(s){d=s;},"beforeload":function(s){s.attributes.qtip="双击添加";s.attributes.description="双击添加";}}});var e=function(s){Ext.Ajax.request({url:__ctxPath+"/system/multiDelUserJob.do",params:{ids:s},method:"POST",success:function(t,u){Ext.ux.Toast.msg("操作信息","成功删除该明细！");},failure:function(t,u){Ext.ux.Toast.msg("操作信息","操作出错，请联系管理员！");}});};var q=function(){if(d==null){Ext.ux.Toast.msg("信息","请选择要添加的部门！");return;}var s=false;for(i=0;i<l.getCount();i++){var u=l.getAt(i);if(u.data.job.jobId==d.id){s=true;}}if(s==true){Ext.ux.Toast.msg("信息","部门重复，请选择其它部门！");return;}var v={};Ext.apply(v,{jobId:d.id,jobName:d.text});var t=new l.recordType();t.data={};t.data.isMain=0;Ext.apply(t.data,{job:v});l.insert(0,t);l.commitChanges();d=null;};var m=function(){var s=o.getSelectionModel().getSelections();if(s.length==0){Ext.ux.Toast.msg("信息","请选择要删除的记录！");return;}if(s[0].data.userJobId!=null&&s[0].data.userJobId!=""){e(s[0].data.userJobId);}l.remove(s[0]);l.commitChanges();};var b=new Ext.Panel({frame:false,border:false,hideBorders:true,height:220,flex:0.4,layout:{type:"vbox",pack:"center",align:"stretch"},defaults:{anchor:"96%,96%"},defaults:{margins:"0 3 0 0"},items:[{xtype:"button",iconCls:"btn-right",scope:this,handler:q},{xtype:"button",iconCls:"btn-left",scope:this,handler:m}]});var f=function(){var s=Array();for(i=0;i<l.getCount();i++){var t=l.getAt(i);if(t.data.userJobId!=null&&t.data.userJobId!=""){s.push(t.data.userJobId);}}if(s.length>0){e(s);}l.removeAll();l.commitChanges();};var g=new Ext.Toolbar({items:[{text:"清除所选",scope:this,handler:f}]});var j=Ext.data.Record.create([{name:"userJobId",type:"int"},"isMain","job","appUser"]);var p=new Ext.data.HttpProxy({url:__ctxPath+"/system/listUserJob.do"});var r=new Ext.data.JsonReader({root:"result",totalProperty:"totalCounts",idProperty:"userJobId"},j);var l=new Ext.data.Store({id:"AppUserForm.JopStore",proxy:p,reader:r});l.on("beforeload",function(s){s.baseParams={start:0,limit:10000,"Q_appUser.userId_L_EQ":h};});l.setDefaultSort("userJobId");if(h!=""&&h!=null&&h!="undefined"){l.load();}var c=new Ext.grid.CheckboxSelectionModel({singleSelect:true});var o=new Ext.grid.EditorGridPanel({frame:false,border:true,flex:6,height:220,tbar:g,store:l,clicksToEdit:1,sm:c,viewConfig:{forceFit:true,autoFill:true},columns:[{header:"userJobId",dataIndex:"userJobId",sortable:true,hidden:true},{header:"职位",sortable:true,dataIndex:"job",renderer:function(s){if(s){return'<font qtip="双击删除">'+s.jobName+"</font>";}}},{header:"是否主职位",sortable:true,width:55,dataIndex:"isMain",editable:true,renderer:function(s){return s==1?"是":"否";}}]});Ext.QuickTips.init();o.on("dblclick",function(t){var s=o.getSelectionModel().getSelections();if(s.length==0){Ext.ux.Toast.msg("信息","请选择要删除的记录！");return;}if(s[0].data.userJobId!=null&&s[0].data.userJobId!=""){e(s[0].data.userJobId);}l.remove(s[0]);l.commitChanges();},this);n.on("dblclick",function(t){if(t==null){Ext.ux.Toast.msg("信息","请选择要添加的部门！");return;}var s=false;for(i=0;i<l.getCount();i++){var v=l.getAt(i);if(v.data.job.jobId==t.id){s=true;}}if(s==true){Ext.ux.Toast.msg("信息","部门重复，请选择其它部门！");return;}var w={};Ext.apply(w,{jobId:t.id,jobName:t.text});var u=new l.recordType();u.data={};u.data.isMain=0;Ext.apply(u.data,{job:w});l.insert(0,u);l.commitChanges();t=null;},this);var a=new Ext.Panel({xtype:"panel",height:220,border:false,layout:{type:"hbox",align:"stretch"},height:220,items:[n,b,o]});return a;};AppUserForm.prototype.initRoleSelectPanel=function(l){Ext.QuickTips.init();var g=null;var b=__ctxPath+"/system/chooseRolesAppUser.do";var c=new Ext.tree.TreePanel({height:220,flex:7,useArrows:false,autoScroll:true,animate:false,enableDD:false,containerScroll:true,border:true,dataUrl:b,rootVisible:false,root:{nodeType:"async",text:"Ext JS",draggable:false},listeners:{"click":function(s){g=s;},"beforeload":function(s){s.attributes.qtip="双击添加";s.attributes.description="双击添加";}}});var h=function(s){Ext.Ajax.request({url:__ctxPath+"/system/multiDelRoleAppUser.do",params:{ids:s,userId:l},method:"POST",success:function(t,u){Ext.ux.Toast.msg("操作信息","成功删除该明细！");},failure:function(t,u){Ext.ux.Toast.msg("操作信息","操作出错，请联系管理员！");}});};var q=function(){if(g==null){Ext.ux.Toast.msg("信息","请选择要添加的角色！");return;}var s=false;for(i=0;i<m.getCount();i++){var u=m.getAt(i);if(u.data.role.roleId==g.id){s=true;}}if(s==true){Ext.ux.Toast.msg("信息","部门重复，请选择其它部门！");return;}var t=new m.recordType();t.data={};t.data.isMain=0;Ext.apply(t.data,{roleId:g.id,roleName:g.text});m.insert(0,t);m.commitChanges();g=null;};var o=function(){var s=d.getSelectionModel().getSelections();if(s.length==0){Ext.ux.Toast.msg("信息","请选择要删除的记录！");return;}if(s[0].data.roleId!=null&&s[0].data.roleId!=""){h(s[0].data.roleId);}m.remove(s[0]);m.commitChanges();};var e=new Ext.Panel({frame:false,border:false,hideBorders:true,height:220,flex:0.4,layout:{type:"vbox",pack:"center",align:"stretch"},defaults:{anchor:"96%,96%"},defaults:{margins:"0 3 0 0"},items:[{xtype:"button",iconCls:"btn-right",scope:this,handler:q},{xtype:"button",iconCls:"btn-left",scope:this,handler:o}]});var j=function(){var s=Array();for(i=0;i<m.getCount();i++){var t=m.getAt(i);if(t.data.roleId!=null&&t.data.roleId!=""){s.push(t.data.roleId);}}if(s.length>0){h(s);}m.removeAll();m.commitChanges();};var k=new Ext.Toolbar({items:[{text:"清除所选",scope:this,handler:j}]});var n=Ext.data.Record.create([{name:"roleId",type:"int"},"roleName","appUser"]);var p=new Ext.data.HttpProxy({url:__ctxPath+"/system/selectedRolesAppUser.do"});var r=new Ext.data.JsonReader({root:"result",totalProperty:"totalCounts",idProperty:"roleId"},n);var m=new Ext.data.Store({id:"AppUserForm.RoleStore",proxy:p,reader:r});m.on("beforeload",function(s){s.baseParams={start:0,limit:10000,userId:l};});m.setDefaultSort("roleId");if(l!=""&&l!=null&&l!="undefined"){m.load();}var f=new Ext.grid.CheckboxSelectionModel({singleSelect:true});var d=new Ext.grid.EditorGridPanel({frame:false,border:true,flex:6,height:220,tbar:k,store:m,clicksToEdit:1,sm:f,viewConfig:{forceFit:true,autoFill:true},columns:[{header:"roleId",dataIndex:"roleId",sortable:true,hidden:true},{header:"角色",sortable:true,dataIndex:"roleName"}]});Ext.QuickTips.init();d.on("dblclick",function(t){var s=d.getSelectionModel().getSelections();if(s.length==0){Ext.ux.Toast.msg("信息","请选择要删除的记录！");return;}if(s[0].data.roleId!=null&&s[0].data.roleId!=""){h(s[0].data.roleId);}m.remove(s[0]);m.commitChanges();},this);c.on("dblclick",function(t){if(t==null){Ext.ux.Toast.msg("信息","请选择要添加的部门！");return;}var s=false;for(i=0;i<m.getCount();i++){var v=m.getAt(i);if(v.data.roleId==t.id){s=true;}}if(s==true){Ext.ux.Toast.msg("信息","角色重复，请选择其它角色！");return;}var u=new m.recordType();u.data={};Ext.apply(u.data,{roleId:t.id,roleName:t.text});m.insert(0,u);m.commitChanges();t=null;},this);var a=new Ext.Panel({xtype:"panel",height:220,border:false,layout:{type:"hbox",align:"stretch"},height:220,items:[c,e,d]});return a;};