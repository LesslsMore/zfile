!function(){var e=document.createElement("style");e.innerHTML=".expression-item[data-v-01d681cd] .el-input__wrapper{width:100%}@media (min-width: 640px){.expression-item[data-v-01d681cd] .el-input__wrapper{width:6rem}}@media (min-width: 768px){.expression-item[data-v-01d681cd] .el-input__wrapper{width:9rem}}@media (min-width: 1024px){.expression-item[data-v-01d681cd] .el-input__wrapper{width:12rem}}@media (min-width: 1280px){.expression-item[data-v-01d681cd] .el-input__wrapper{width:16rem}}.zfile-admin-readme-form[data-v-01d681cd] .z-form-sub-title{max-width:100%}.zfile-admin-readme-form .rules-tips[data-v-01d681cd]{padding:.25rem;font-size:.875rem;line-height:1.25rem;font-weight:700}.zfile-admin-readme-form .rules-tips-link[data-v-01d681cd]{margin-top:.5rem}.zfile-admin-readme-form .rules-tips-link[data-v-01d681cd]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))}.zfile-admin-readme-form .rules-tips-link svg[data-v-01d681cd]{height:1rem;line-height:1.25rem;vertical-align:text-bottom}\n",document.head.appendChild(e),System.register(["./base-legacy.7d1f3d40.js","./loading-legacy.a92cda73.js","./button-legacy.96a0013c.js","./input-legacy.d4357d07.js","./tag-legacy.1f08e7fb.js","./select-legacy.a50661f7.js","./scrollbar-legacy.eb5e22e5.js","./popper-legacy.32f6f574.js","./alert-legacy.073d7a45.js","./tooltip-legacy.7c89f687.js","./switch-legacy.40afaf87.js","./SvgIcon-legacy.244de45d.js","./ZFormItem-legacy.0e955aa1.js","./admin-storage-legacy.d497775c.js","./common-legacy.d314540d.js","./index-legacy.5ea4f22b.js","./sortable.esm-legacy.a574004a.js","./request-legacy.0ac06176.js","./index-legacy.0aa28593.js","./readme-editor-dialog-legacy.47e327c0.js","./route-block-legacy.2d113b05.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.cf4c1618.js","./CheckBadgeIcon-legacy.1bb42a3c.js","./directive-legacy.b7341926.js","./index-legacy.43618343.js","./event-legacy.39ad8904.js","./scroll-legacy.6199b08e.js","./index-legacy.147da8a7.js","./_Uint8Array-legacy.11835a20.js","./debounce-legacy.7084a459.js","./validator-legacy.1adb074b.js","./focus-trap-legacy.66decdab.js","./index-legacy.deb98d42.js","./dialog-legacy.0b695e68.js","./overlay-legacy.50e239f7.js","./refs-legacy.d9214384.js"],(function(e){"use strict";var n,t,a,i,l,o,r,c,d,u,s,f,m,p,g,v,y,b,x,h,j,w,_,k,V,I,E,U,z,C,R,T,q,D,M,S,B,L,F,G,Z,A,H,J,K,N,O,P,Q,W;return{setters:[function(e){n=e.D,t=e.bx,a=e.by,i=e.q,l=e.r,o=e.bh},function(){},function(){},function(){},function(){},function(e){r=e.E,c=e.a},function(){},function(e){d=e.E},function(e){u=e.E},function(){},function(e){s=e.E},function(e){f=e._},function(e){m=e.Z,p=e.a},function(e){g=e.p,v=e.q,y=e.g,b=e.r},function(e){x=e.u,h=e.r},function(e){j=e.r,w=e.J,_=e.N,k=e.o,V=e.a6,I=e.K,E=e.u,U=e.a,z=e.b,C=e.e,R=e.m,T=e.j,q=e.t,D=e.P,M=e.O,S=e.f,B=e.F,L=e.v,F=e.k,G=e.Q,Z=e.R},function(e){A=e.S},function(e){H=e.E},function(e){J=e.E},function(e){K=e.default},function(e){N=e.b},function(e){O=e._},function(e){P=e.E},function(e){Q=e.r},function(e){W=e.v},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var X=j([]),Y=j(!1);function $(e,n){var t=n.params.storageId,a=function(){var e=document.querySelector(".z-form-body");A.create(e,{draggable:".expression-item",filter:".el-button, .editor-input",onEnd:function(e){if(e.oldIndex!==e.newIndex){var n=X.value.splice(e.oldIndex-1,1)[0];X.value.splice(e.newIndex-1,0,n)}}})},i=function(){X.value.push({description:"表达式 - "+(X.value.length+1),expression:"",readmeText:"",displayMode:"top",storageId:t})};return{loading:Y,loadReadmeData:function(){g(t).then((function(e){X.value=e.data,0===X.value.length&&i(),a()}))},readmeList:X,addReadmeItem:i,deleteReadmeItem:function(e){X.value.splice(e,1)},saveReadmeData:function(){if(!X.value.find((function(e){if(x.isEmpty(e.description)||x.isEmpty(e.expression)||x.isEmpty(e.readmeText))return H.warning("请检查数据填写是否完整"),!0}))){Y.value=!0;for(var n=0;n<X.value.length;n++){X.value[n].id=n+1}v(t,X.value).then((function(){J.confirm("保存成功, 是否返回存储源列表？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",callback:function(n){"confirm"===n&&e.push("/admin/storage-list")}})})).finally((function(){Y.value=!1}))}}}}var ee=function(e){return G("data-v-01d681cd"),e=e(),Z(),e},ne={class:"flex justify-between"},te=ee((function(){return R("span",{class:"mr-4 text-sm text-gray-500"},"兼容为读取 readme.md",-1)})),ae=ee((function(){return R("div",{class:"rules-tips"},"Glob 表达式规则：",-1)})),ie=ee((function(){return R("div",{class:"rules-tips"},[R("b",null,"/"),M(": 根目录, 如 "),R("span",{class:"code select-all"},"/"),M(" 表示根路径下会加载此文档显示.")],-1)})),le=ee((function(){return R("div",{class:"rules-tips"},[R("b",null,"*"),M("：单级路径通配符，如表达式 "),R("span",{class:"code select-all"},"/*"),M(" 表示根路径下的直接子文件夹会加载此文档显示.")],-1)})),oe=ee((function(){return R("div",{class:"rules-tips"},[R("b",null,"**"),M("：多级路径通配符，如表达式 "),R("span",{class:"code select-all"},"/music/**"),M(" 表示 /music 文件夹及以下所有文件夹都会加载此文档.")],-1)})),re=ee((function(){return R("div",{class:"rules-tips"},"注：系统匹配到第一个符合的规则就会取文档进行显示，所以请调整好规则顺序，下方规则可进行拖拽排序。",-1)})),ce={class:"rules-tips-link"},de={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},ue=ee((function(){return R("span",null,"参考文章 (Wikipedia)",-1)})),se={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},fe={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},me={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},pe={__name:"[storageId]",setup:function(e){var g=w(),v=_(),x=g.params.storageId,G=$(v,g),Z=G.loading,A=G.loadReadmeData,J=G.readmeList,N=G.addReadmeItem,O=G.deleteReadmeItem,X=G.saveReadmeData;k((function(){A(),ee()}));var Y=j(),ee=function(){y(x).then((function(e){e.data.type=e.data.type.key,Y.value=e.data}))},pe=j(!1);y(g.params.storageId).then((function(e){pe.value=e.data.compatibilityReadme||!1}));var ge=function(){b(g.params.storageId,pe.value).then((function(e){H.success("保存成功")}))},ve=j({}),ye=j(!1);return function(e,g){var v=f,y=V("router-link"),b=s,x=d,j=u,w=P,_=r,k=c,G=n,A=W;return I((U(),z(p,{model:E(J),class:"zfile-admin-readme-form"},{"form-title":C((function(){var e;return[R("div",ne,[R("div",null,[T(y,{to:"/admin/storage-list"},{default:C((function(){return[T(v,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]})),_:1}),R("span",null,"目录文档（"+q(null===(e=E(Y))||void 0===e?void 0:e.name)+"）",1)]),T(x,{placement:"top",content:"启用后下发的规则设置会失效，仅会为读取目录下的 readme.md 文件来渲染文档, 且固定在底部显示."},{default:C((function(){return[R("div",null,[te,T(b,{onChange:ge,"active-text":"是","inline-prompt":"","inactive-text":"否",modelValue:E(pe),"onUpdate:modelValue":g[0]||(g[0]=function(e){return D(pe)?pe.value=e:pe=e})},null,8,["modelValue"])])]})),_:1})])]})),"form-sub-title":C((function(){return[T(j,{closable:!1,type:"info"},{default:C((function(){return[ae,ie,le,oe,re,R("div",ce,[R("a",de,[T(E(t),{class:"inline mr-1"}),ue]),R("a",se,[T(E(t),{class:"inline mr-1"}),M("参考文章 (阮一峰)")]),R("a",fe,[T(E(t),{class:"inline mr-1"}),M("参考文章 (Github)")])])]})),_:1})]})),footer:C((function(){return[T(G,{type:"primary",size:"default",icon:E(Q),onClick:E(X)},{default:C((function(){return[M("保存设置")]})),_:1},8,["icon","onClick"])]})),default:C((function(){return[(U(!0),S(B,null,L(E(J),(function(e,n){return U(),z(m,{required:!0,key:e,class:"expression-item"},{default:C((function(){return[R("div",me,[T(x,{content:"此处可填写表达书描述，用于辅助记忆，防止时间过长后不知道表达式含义.",placement:"top"},{default:C((function(){return[T(w,{"prefix-icon":E(a),placeholder:"请输入表达式描述",modelValue:e.description,"onUpdate:modelValue":function(n){return e.description=n}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])]})),_:2},1024),T(w,{"prefix-icon":E(h),placeholder:"请输入表达式",modelValue:e.expression,"onUpdate:modelValue":function(n){return e.expression=n},modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),T(w,{class:"editor-input",onClick:function(n){return t=e,ye.value=!0,void(ve.value=t);var t},readonly:"","prefix-icon":E(i),placeholder:"请点击编辑文档",modelValue:e.readmeText,"onUpdate:modelValue":function(n){return e.readmeText=n}},null,8,["onClick","prefix-icon","modelValue","onUpdate:modelValue"]),T(k,{class:"editor-input",modelValue:e.displayMode,"onUpdate:modelValue":function(n){return e.displayMode=n}},{default:C((function(){return[T(_,{label:"顶部显示",value:"top"}),T(_,{label:"底部显示",value:"bottom"}),T(_,{label:"弹窗显示",value:"dialog"})]})),_:2},1032,["modelValue","onUpdate:modelValue"]),T(G,{type:"danger",onClick:function(e){return E(O)(n)},icon:E(l)},null,8,["onClick","icon"])])]})),_:2},1024)})),128)),T(m,null,{default:C((function(){return[T(G,{type:"primary",size:"default",icon:E(o),onClick:E(N)},{default:C((function(){return[M("添加更多")]})),_:1},8,["icon","onClick"])]})),_:1}),E(ye)?(U(),z(K,{key:0,modelValue:E(ve).readmeText,"onUpdate:modelValue":g[1]||(g[1]=function(e){return E(ve).readmeText=e}),visible:E(ye),"onUpdate:visible":g[2]||(g[2]=function(e){return D(ye)?ye.value=e:ye=e})},null,8,["modelValue","visible"])):F("",!0)]})),_:1},8,["model"])),[[A,E(Z)]])}}};"function"==typeof N&&N(pe);e("default",O(pe,[["__scopeId","data-v-01d681cd"]]))}}}))}();
