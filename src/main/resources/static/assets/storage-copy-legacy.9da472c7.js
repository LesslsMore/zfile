System.register(["./admin-storage-legacy.d497775c.js","./index-legacy.5ea4f22b.js","./request-legacy.0ac06176.js"],(function(e){"use strict";var n,t,a,r,o;return{setters:[function(e){n=e.e,t=e.f},function(e){a=e.G,r=e.r},function(e){o=e.E}],execute:function(){e("u",(function(){var e=r(null);return{dialogVisible:l,openDialog:function(e){l.value=!0,i.fromId=e.id,i.toKey=e.key,i.toName=e.name},closeDialog:function(){l.value=!1},formData:i,rules:u,storageCopyFormRef:e,submitForm:function(n){s.value=!0,e.value.validate((function(e){e?t(i).then((function(e){o.success("复制成功"),l.value=!1,n("close")})).finally((function(){s.value=!1})):s.value=!1}))},saveLoading:s}}));var i=a({toName:"",toKey:"",fromId:null}),u={toName:[{required:!0,message:"请输入新存储源名称",trigger:"blur"}],toKey:[{required:!0,message:"请输入新存储源别名",trigger:"blur"},{validator:function(e,t,a){null!=t&&""!==t?["admin","file","login","install","s","onedrive","api","sharepoint","s3","webdav"].includes(t)?a(new Error("不可占用系统级名称，请修改。")):/^[\w\-]+$/.test(t)?n({storageKey:t}).then((function(e){e.data?a(new Error("该存储源别名已存在，请修改。")):a()})):a(new Error("只允许使用字母、数字、下划线、横杠")):a("请输入存储源别名")}}]},l=r(!1),s=r(!1)}}}));
