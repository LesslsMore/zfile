!function(){function e(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function o(o){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?e(Object(t),!0).forEach((function(e){r(o,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):e(Object(t)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))}))}return o}function r(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,t,l=[],i=!0,d=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!o||l.length!==o);i=!0);}catch(u){d=!0,t=u}finally{try{i||null==r.return||r.return()}finally{if(d)throw t}}return l}(e,o)||l(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,o){if(e){if("string"==typeof e)return i(e,o);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,o):void 0}}function i(e,o){(null==o||o>e.length)&&(o=e.length);for(var r=0,n=new Array(o);r<o;r++)n[r]=e[r];return n}var d=document.createElement("style");d.innerHTML='.el-button-group{display:inline-block;vertical-align:middle}.el-button-group:before,.el-button-group:after{display:table;content:""}.el-button-group:after{clear:both}.el-button-group>.el-button{float:left;position:relative}.el-button-group>.el-button+.el-button{margin-left:0}.el-button-group>.el-button:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.el-button-group>.el-button:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.el-button-group>.el-button:first-child:last-child{border-top-right-radius:var(--el-border-radius-base);border-bottom-right-radius:var(--el-border-radius-base);border-top-left-radius:var(--el-border-radius-base);border-bottom-left-radius:var(--el-border-radius-base)}.el-button-group>.el-button:first-child:last-child.is-round{border-radius:var(--el-border-radius-round)}.el-button-group>.el-button:first-child:last-child.is-circle{border-radius:50%}.el-button-group>.el-button:not(:first-child):not(:last-child){border-radius:0}.el-button-group>.el-button:not(:last-child){margin-right:-1px}.el-button-group>.el-button:hover,.el-button-group>.el-button:focus,.el-button-group>.el-button:active{z-index:1}.el-button-group>.el-button.is-active{z-index:1}.el-button-group>.el-dropdown>.el-button{border-top-left-radius:0;border-bottom-left-radius:0;border-left-color:var(--el-button-divide-border-color)}.el-button-group .el-button--primary:first-child{border-right-color:var(--el-button-divide-border-color)}.el-button-group .el-button--primary:last-child{border-left-color:var(--el-button-divide-border-color)}.el-button-group .el-button--primary:not(:first-child):not(:last-child){border-left-color:var(--el-button-divide-border-color);border-right-color:var(--el-button-divide-border-color)}.el-button-group .el-button--success:first-child{border-right-color:var(--el-button-divide-border-color)}.el-button-group .el-button--success:last-child{border-left-color:var(--el-button-divide-border-color)}.el-button-group .el-button--success:not(:first-child):not(:last-child){border-left-color:var(--el-button-divide-border-color);border-right-color:var(--el-button-divide-border-color)}.el-button-group .el-button--warning:first-child{border-right-color:var(--el-button-divide-border-color)}.el-button-group .el-button--warning:last-child{border-left-color:var(--el-button-divide-border-color)}.el-button-group .el-button--warning:not(:first-child):not(:last-child){border-left-color:var(--el-button-divide-border-color);border-right-color:var(--el-button-divide-border-color)}.el-button-group .el-button--danger:first-child{border-right-color:var(--el-button-divide-border-color)}.el-button-group .el-button--danger:last-child{border-left-color:var(--el-button-divide-border-color)}.el-button-group .el-button--danger:not(:first-child):not(:last-child){border-left-color:var(--el-button-divide-border-color);border-right-color:var(--el-button-divide-border-color)}.el-button-group .el-button--info:first-child{border-right-color:var(--el-button-divide-border-color)}.el-button-group .el-button--info:last-child{border-left-color:var(--el-button-divide-border-color)}.el-button-group .el-button--info:not(:first-child):not(:last-child){border-left-color:var(--el-button-divide-border-color);border-right-color:var(--el-button-divide-border-color)}.el-dropdown{--el-dropdown-menu-box-shadow: var(--el-box-shadow-light);--el-dropdown-menuItem-hover-fill: var(--el-color-primary-light-9);--el-dropdown-menuItem-hover-color: var(--el-color-primary);--el-dropdown-menu-index: 10;display:inline-flex;position:relative;color:var(--el-text-color-regular);font-size:var(--el-font-size-base);line-height:1;vertical-align:top}.el-dropdown.is-disabled{color:var(--el-text-color-placeholder);cursor:not-allowed}.el-dropdown__popper{--el-dropdown-menu-box-shadow: var(--el-box-shadow-light);--el-dropdown-menuItem-hover-fill: var(--el-color-primary-light-9);--el-dropdown-menuItem-hover-color: var(--el-color-primary);--el-dropdown-menu-index: 10}.el-dropdown__popper.el-popper{background:var(--el-bg-color-overlay);border:1px solid var(--el-border-color-light);box-shadow:var(--el-dropdown-menu-box-shadow)}.el-dropdown__popper.el-popper .el-popper__arrow:before{border:1px solid var(--el-border-color-light)}.el-dropdown__popper.el-popper[data-popper-placement^=top] .el-popper__arrow:before{border-top-color:transparent;border-left-color:transparent}.el-dropdown__popper.el-popper[data-popper-placement^=bottom] .el-popper__arrow:before{border-bottom-color:transparent;border-right-color:transparent}.el-dropdown__popper.el-popper[data-popper-placement^=left] .el-popper__arrow:before{border-left-color:transparent;border-bottom-color:transparent}.el-dropdown__popper.el-popper[data-popper-placement^=right] .el-popper__arrow:before{border-right-color:transparent;border-top-color:transparent}.el-dropdown__popper .el-dropdown-menu{border:none}.el-dropdown__popper .el-dropdown__popper-selfdefine{outline:none}.el-dropdown__popper .el-scrollbar__bar{z-index:calc(var(--el-dropdown-menu-index) + 1)}.el-dropdown__popper .el-dropdown__list{list-style:none;padding:0;margin:0;box-sizing:border-box}.el-dropdown .el-dropdown__caret-button{padding-left:0;padding-right:0;display:inline-flex;justify-content:center;align-items:center;width:32px;border-left:none}.el-dropdown .el-dropdown__caret-button>span{display:inline-flex}.el-dropdown .el-dropdown__caret-button:before{content:"";position:absolute;display:block;width:1px;top:-1px;bottom:-1px;left:0;background:var(--el-overlay-color-lighter)}.el-dropdown .el-dropdown__caret-button.el-button:before{background:var(--el-border-color);opacity:.5}.el-dropdown .el-dropdown__caret-button .el-dropdown__icon{font-size:inherit;padding-left:0}.el-dropdown .el-dropdown-selfdefine{outline:none}.el-dropdown--large .el-dropdown__caret-button{width:40px}.el-dropdown--small .el-dropdown__caret-button{width:24px}.el-dropdown-menu{position:relative;top:0;left:0;z-index:var(--el-dropdown-menu-index);padding:5px 0;margin:0;background-color:var(--el-bg-color-overlay);border:none;border-radius:var(--el-border-radius-base);box-shadow:none;list-style:none}.el-dropdown-menu__item{display:flex;align-items:center;white-space:nowrap;list-style:none;line-height:22px;padding:5px 16px;margin:0;font-size:var(--el-font-size-base);color:var(--el-text-color-regular);cursor:pointer;outline:none}.el-dropdown-menu__item:not(.is-disabled):focus{background-color:var(--el-dropdown-menuItem-hover-fill);color:var(--el-dropdown-menuItem-hover-color)}.el-dropdown-menu__item i{margin-right:5px}.el-dropdown-menu__item--divided{margin:6px 0;border-top:1px solid var(--el-border-color-lighter)}.el-dropdown-menu__item.is-disabled{cursor:not-allowed;color:var(--el-text-color-disabled)}.el-dropdown-menu--large{padding:7px 0}.el-dropdown-menu--large .el-dropdown-menu__item{padding:7px 20px;line-height:22px;font-size:14px}.el-dropdown-menu--large .el-dropdown-menu__item--divided{margin:8px 0}.el-dropdown-menu--small{padding:3px 0}.el-dropdown-menu--small .el-dropdown-menu__item{padding:2px 12px;line-height:20px;font-size:12px}.el-dropdown-menu--small .el-dropdown-menu__item--divided{margin:4px 0}\n',document.head.appendChild(d),System.register(["./base-legacy.7d1f3d40.js","./popper-legacy.32f6f574.js","./scrollbar-legacy.eb5e22e5.js","./dropdown-legacy.8ec24a28.js","./request-legacy.0ac06176.js","./index-legacy.5ea4f22b.js","./refs-legacy.d9214384.js","./focus-trap-legacy.66decdab.js"],(function(e){"use strict";var i,d,u,a,c,p,s,f,b,v,m,g,w,h,y,_,x,I,E,k,F,C,S,T,R,O,D,P,B,j,z,A,$,M,K,L,G,H,N,U,W,Y,q,J,V,Q,X,Z,ee,oe,re,ne,te,le,ie,de,ue,ae,ce,pe,se,fe,be,ve;return{setters:[function(e){i=e.b,d=e.d,u=e.av,a=e._,c=e.L,p=e.D,s=e.E,f=e.a5,b=e.a,v=e.n,m=e.O,g=e.ac,w=e.s,h=e.w,y=e.l},function(e){_=e.d,x=e.E,I=e.O,E=e.w},function(e){k=e.E},function(e){F=e.c,C=e.E,S=e.d,T=e.a,R=e.C,O=e.b,D=e.e,P=e.f,B=e.g,j=e.F,z=e.L},function(e){A=e.u},function(e){$=e.d,M=e.r,K=e.B,L=e.c,G=e.p,H=e.a1,N=e.q,U=e.u,W=e.w,Y=e.i,q=e.a6,J=e.a,V=e.b,Q=e.e,X=e.j,Z=e.y,ee=e.aw,oe=e.W,re=e.D,ne=e.Y,te=e.f,le=e.E,ie=e.x,de=e.g,ue=e.k,ae=e.m,ce=e.l,pe=e.h,se=e.F,fe=e.n},function(e){be=e.c},function(e){ve=e.F}],execute:function(){var me=i({style:{type:d([String,Array,Object])},currentTabId:{type:d(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:d(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),ge=F("RovingFocusGroup"),we=ge.ElCollection,he=ge.ElCollectionItem,ye=ge.COLLECTION_INJECTION_KEY,_e=ge.COLLECTION_ITEM_INJECTION_KEY,xe=Symbol("elRovingFocusGroup"),Ie=Symbol("elRovingFocusGroupItem"),Ee={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},ke=function(e,o,r){var n=function(e,o){if("rtl"!==o)return e;switch(e){case u.right:return u.left;case u.left:return u.right;default:return e}}(e.key,r);if(!("vertical"===o&&[u.left,u.right].includes(n)||"horizontal"===o&&[u.up,u.down].includes(n)))return Ee[n]},Fe=function(e){var o,r=document.activeElement,n=function(e,o){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=l(e))||o&&e&&"number"==typeof e.length){r&&(e=r);var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,d=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return d=e.done,e},e:function(e){u=!0,i=e},f:function(){try{d||null==r.return||r.return()}finally{if(u)throw i}}}}(e);try{for(n.s();!(o=n.n()).done;){var t=o.value;if(t===r)return;if(t.focus(),r!==document.activeElement)return}}catch(i){n.e(i)}finally{n.f()}},Ce="currentTabIdChange",Se="rovingFocusGroup.entryFocus",Te={bubbles:!1,cancelable:!0},Re=$({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:me,emits:[Ce,"entryFocus"],setup:function(e,o){var r,n=o.emit,l=M(null!=(r=e.currentTabId||e.defaultCurrentTabId)?r:null),i=M(!1),d=M(!1),u=M(null),a=K(ye,void 0).getItems,c=L((function(){return[{outline:"none"},e.style]})),p=_((function(o){var r;null==(r=e.onMousedown)||r.call(e,o)}),(function(){d.value=!0})),s=_((function(o){var r;null==(r=e.onFocus)||r.call(e,o)}),(function(e){var o=!U(d),r=e.target,n=e.currentTarget;if(r===n&&o&&!U(i)){var u=new Event(Se,Te);if(null==n||n.dispatchEvent(u),!u.defaultPrevented){var c=a().filter((function(e){return e.focusable})),p=[c.find((function(e){return e.active})),c.find((function(e){return e.id===U(l)}))].concat(t(c)).filter(Boolean).map((function(e){return e.ref}));Fe(p)}}d.value=!1})),f=_((function(o){var r;null==(r=e.onBlur)||r.call(e,o)}),(function(){i.value=!1}));G(xe,{currentTabbedId:H(l),loop:N(e,"loop"),tabIndex:L((function(){return U(i)?-1:0})),rovingFocusGroupRef:u,rovingFocusGroupRootStyle:c,orientation:N(e,"orientation"),dir:N(e,"dir"),onItemFocus:function(e){n(Ce,e)},onItemShiftTab:function(){i.value=!0},onBlur:f,onFocus:s,onMousedown:p}),W((function(){return e.currentTabId}),(function(e){l.value=null!=e?e:null})),A(u,Se,(function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];n.apply(void 0,["entryFocus"].concat(o))}))}});var Oe=$({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:we,ElRovingFocusGroupImpl:a(Re,[["render",function(e,o,r,n,t,l){return Y(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}});var De=a(Oe,[["render",function(e,o,r,n,t,l){var i=q("el-roving-focus-group-impl"),d=q("el-focus-group-collection");return J(),V(d,null,{default:Q((function(){return[X(i,Z(ee(e.$attrs)),{default:Q((function(){return[Y(e.$slots,"default")]})),_:3},16)]})),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]),Pe=$({components:{ElRovingFocusCollectionItem:he},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup:function(e,o){var r=o.emit,n=K(xe,void 0),t=n.currentTabbedId,l=n.loop,i=n.onItemFocus,d=n.onItemShiftTab,a=K(ye,void 0).getItems,p=c(),s=M(null),f=_((function(e){r("mousedown",e)}),(function(o){e.focusable?i(U(p)):o.preventDefault()})),b=_((function(e){r("focus",e)}),(function(){i(U(p))})),v=_((function(e){r("keydown",e)}),(function(e){var o=e.key,r=e.shiftKey,n=e.target,t=e.currentTarget;if(o===u.tab&&r)d();else if(n===t){var i,c,p=ke(e);if(p){e.preventDefault();var s=a().filter((function(e){return e.focusable})).map((function(e){return e.ref}));switch(p){case"last":s.reverse();break;case"prev":case"next":"prev"===p&&s.reverse();var f=s.indexOf(t);s=l.value?(c=f+1,(i=s).map((function(e,o){return i[(o+c)%i.length]}))):s.slice(f+1)}oe((function(){Fe(s)}))}}})),m=L((function(){return t.value===U(p)}));return G(Ie,{rovingFocusGroupItemRef:s,tabIndex:L((function(){return U(m)?0:-1})),handleMousedown:f,handleFocus:b,handleKeydown:v}),{id:p,handleKeydown:v,handleFocus:b,handleMousedown:f}}});var Be=a(Pe,[["render",function(e,o,r,n,t,l){var i=q("el-roving-focus-collection-item");return J(),V(i,{id:e.id,focusable:e.focusable,active:e.active},{default:Q((function(){return[Y(e.$slots,"default")]})),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]),je=Symbol("elDropdown"),ze=p.ButtonGroup,Ae=$({name:"ElDropdown",components:{ElButton:p,ElButtonGroup:ze,ElScrollbar:k,ElDropdownCollection:C,ElTooltip:x,ElRovingFocusGroup:De,ElOnlyChild:I,ElIcon:s,ArrowDown:f},props:S,emits:["visible-change","click","command"],setup:function(e,o){var r=o.emit,t=ne(),l=b("dropdown"),i=v().t,d=M(),a=M(),p=M(null),s=M(null),f=M(null),h=M(null),y=M(!1),_=[u.enter,u.space,u.down],x=L((function(){return{maxHeight:m(e.maxHeight)}})),I=L((function(){return[l.m(C.value)]})),E=c().value,k=L((function(){return e.id||E}));function F(){var e;null==(e=p.value)||e.onClose()}W([d,N(e,"trigger")],(function(e,o){var r,t,l,i=n(e,2),d=i[0],u=i[1],a=n(o,1)[0],c=w(u)?u:[u];(null==(r=null==a?void 0:a.$el)?void 0:r.removeEventListener)&&a.$el.removeEventListener("pointerenter",S),(null==(t=null==d?void 0:d.$el)?void 0:t.removeEventListener)&&d.$el.removeEventListener("pointerenter",S),(null==(l=null==d?void 0:d.$el)?void 0:l.addEventListener)&&c.includes("hover")&&d.$el.addEventListener("pointerenter",S)}),{immediate:!0}),re((function(){var e,o;(null==(o=null==(e=d.value)?void 0:e.$el)?void 0:o.removeEventListener)&&d.value.$el.removeEventListener("pointerenter",S)}));var C=g();function S(){var e,o;null==(o=null==(e=d.value)?void 0:e.$el)||o.focus()}G(je,{contentRef:s,role:L((function(){return e.role})),triggerId:k,isUsingKeyboard:y,onItemEnter:function(){},onItemLeave:function(){var e=U(s);null==e||e.focus(),h.value=null}}),G("elDropdown",{instance:t,dropdownSize:C,handleClick:function(){F()},commandHandler:function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];r.apply(void 0,["command"].concat(o))},trigger:N(e,"trigger"),hideOnClick:N(e,"hideOnClick")});return{t:i,ns:l,scrollbar:f,wrapStyle:x,dropdownTriggerKls:I,dropdownSize:C,triggerId:k,triggerKeys:_,currentTabId:h,handleCurrentTabIdChange:function(e){h.value=e},handlerMainButtonClick:function(e){r("click",e)},handleEntryFocus:function(e){y.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:F,handleOpen:function(){var e;null==(e=p.value)||e.onOpen()},handleBeforeShowTooltip:function(){r("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&s.value.focus()},handleBeforeHideTooltip:function(){r("visible-change",!1)},onFocusAfterTrapped:function(e){var o,r;e.preventDefault(),null==(r=null==(o=s.value)?void 0:o.focus)||r.call(o,{preventScroll:!0})},popperRef:p,contentRef:s,triggeringElementRef:d,referenceElementRef:a}}});var $e=a(Ae,[["render",function(e,o,r,n,t,l){var i,d=q("el-dropdown-collection"),u=q("el-roving-focus-group"),a=q("el-scrollbar"),c=q("el-only-child"),p=q("el-tooltip"),s=q("el-button"),f=q("arrow-down"),b=q("el-icon"),v=q("el-button-group");return J(),te("div",{class:de([e.ns.b(),e.ns.is("disabled",e.disabled)])},[X(p,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(i=e.referenceElementRef)?void 0:i.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:"".concat(e.ns.namespace.value,"-zoom-in-top"),teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},le({content:Q((function(){return[X(a,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:Q((function(){return[X(u,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:Q((function(){return[X(d,null,{default:Q((function(){return[Y(e.$slots,"dropdown")]})),_:3})]})),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]})),_:3},8,["wrap-style","view-class"])]})),_:2},[e.splitButton?void 0:{name:"default",fn:Q((function(){return[X(c,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:Q((function(){return[Y(e.$slots,"default")]})),_:3},8,["id","tabindex"])]}))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(J(),V(v,{key:0},{default:Q((function(){return[X(s,ie({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:Q((function(){return[Y(e.$slots,"default")]})),_:3},16,["size","type","disabled","tabindex","onClick"]),X(s,ie({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:Q((function(){return[X(b,{class:de(e.ns.e("icon"))},{default:Q((function(){return[X(f)]})),_:1},8,["class"])]})),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]})),_:3})):ue("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]),Me=$({name:"DropdownItemImpl",components:{ElIcon:s},props:T,emits:["pointermove","pointerleave","click","clickimpl"],setup:function(e,o){var n=o.emit,t=b("dropdown"),l=K(je,void 0).role,i=K(R,void 0).collectionItemRef,d=K(_e,void 0).collectionItemRef,a=K(Ie,void 0),c=a.rovingFocusGroupItemRef,p=a.tabIndex,s=a.handleFocus,f=a.handleKeydown,v=a.handleMousedown,m=be(i,d,c),g=L((function(){return"menu"===l.value?"menuitem":"navigation"===l.value?"link":"button"})),w=_((function(e){var o=e.code;if(o===u.enter||o===u.space)return e.preventDefault(),e.stopImmediatePropagation(),n("clickimpl",e),!0}),f);return{ns:t,itemRef:m,dataset:r({},O,""),role:g,tabIndex:p,handleFocus:s,handleKeydown:w,handleMousedown:v}}}),Ke=["aria-disabled","tabindex","role"];var Le=a(Me,[["render",function(e,r,n,t,l,i){var d=q("el-icon");return J(),te(se,null,[e.divided?(J(),te("li",ie({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):ue("v-if",!0),ae("li",ie({ref:e.itemRef},o(o({},e.dataset),e.$attrs),{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:r[0]||(r[0]=function(o){return e.$emit("clickimpl",o)}),onFocus:r[1]||(r[1]=function(){return e.handleFocus&&e.handleFocus.apply(e,arguments)}),onKeydown:r[2]||(r[2]=pe((function(){return e.handleKeydown&&e.handleKeydown.apply(e,arguments)}),["self"])),onMousedown:r[3]||(r[3]=function(){return e.handleMousedown&&e.handleMousedown.apply(e,arguments)}),onPointermove:r[4]||(r[4]=function(o){return e.$emit("pointermove",o)}),onPointerleave:r[5]||(r[5]=function(o){return e.$emit("pointerleave",o)})}),[e.icon?(J(),V(d,{key:0},{default:Q((function(){return[(J(),V(ce(e.icon)))]})),_:1})):ue("v-if",!0),Y(e.$slots,"default")],16,Ke)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]),Ge=function(){var e=K("elDropdown",{}),o=L((function(){return null==e?void 0:e.dropdownSize}));return{elDropdown:e,_elDropdownSize:o}},He=$({name:"ElDropdownItem",components:{ElDropdownCollectionItem:D,ElRovingFocusItem:Be,ElDropdownItemImpl:Le},inheritAttrs:!1,props:T,emits:["pointermove","pointerleave","click"],setup:function(e,r){var n=r.emit,t=r.attrs,l=Ge().elDropdown,i=ne(),d=M(null),u=L((function(){var e,o;return null!=(o=null==(e=U(d))?void 0:e.textContent)?o:""})),a=K(je,void 0),c=a.onItemEnter,p=a.onItemLeave,s=_((function(e){return n("pointermove",e),e.defaultPrevented}),E((function(o){if(e.disabled)p(o);else{var r=o.currentTarget;r===document.activeElement||r.contains(document.activeElement)||(c(o),o.defaultPrevented||null==r||r.focus())}}))),f=_((function(e){return n("pointerleave",e),e.defaultPrevented}),E((function(e){p(e)})));return{handleClick:_((function(o){if(!e.disabled)return n("click",o),"keydown"!==o.type&&o.defaultPrevented}),(function(o){var r,n,t;e.disabled?o.stopImmediatePropagation():((null==(r=null==l?void 0:l.hideOnClick)?void 0:r.value)&&(null==(n=l.handleClick)||n.call(l)),null==(t=l.commandHandler)||t.call(l,e.command,i,o))})),handlePointerMove:s,handlePointerLeave:f,textContent:u,propsAndAttrs:L((function(){return o(o({},e),t)}))}}});var Ne=a(He,[["render",function(e,o,r,n,t,l){var i,d=q("el-dropdown-item-impl"),u=q("el-roving-focus-item"),a=q("el-dropdown-collection-item");return J(),V(a,{disabled:e.disabled,"text-value":null!=(i=e.textValue)?i:e.textContent},{default:Q((function(){return[X(u,{focusable:!e.disabled},{default:Q((function(){return[X(d,ie(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:Q((function(){return[Y(e.$slots,"default")]})),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]})),_:3},8,["focusable"])]})),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]),Ue=$({name:"ElDropdownMenu",props:P,setup:function(e){var o=b("dropdown"),r=Ge()._elDropdownSize.value,n=K(ve,void 0),t=n.focusTrapRef,l=n.onKeydown,i=K(je,void 0),d=i.contentRef,a=i.role,c=i.triggerId,p=K(B,void 0),s=p.collectionRef,f=p.getItems,v=K(xe,void 0),m=v.rovingFocusGroupRef,g=v.rovingFocusGroupRootStyle,w=v.tabIndex,h=v.onBlur,y=v.onFocus,x=v.onMousedown,I=K(ye,void 0).collectionRef,E=L((function(){return[o.b("menu"),o.bm("menu",null==r?void 0:r.value)]})),k=be(d,s,t,m,I),F=_((function(o){var r;null==(r=e.onKeydown)||r.call(e,o)}),(function(e){var o=e.currentTarget,r=e.code,n=e.target;if(o.contains(n),u.tab===r&&e.stopImmediatePropagation(),e.preventDefault(),n===U(d)&&j.includes(r)){var t=f().filter((function(e){return!e.disabled})).map((function(e){return e.ref}));z.includes(r)&&t.reverse(),Fe(t)}}));return{size:r,rovingFocusGroupRootStyle:g,tabIndex:w,dropdownKls:E,role:a,triggerId:c,dropdownListWrapperRef:k,handleKeydown:function(e){F(e),l(e)},onBlur:h,onFocus:y,onMousedown:x}}}),We=["role","aria-labelledby"];var Ye=a(Ue,[["render",function(e,o,r,n,t,l){return J(),te("ul",{ref:e.dropdownListWrapperRef,class:de(e.dropdownKls),style:fe(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=function(){return e.onBlur&&e.onBlur.apply(e,arguments)}),onFocus:o[1]||(o[1]=function(){return e.onFocus&&e.onFocus.apply(e,arguments)}),onKeydown:o[2]||(o[2]=pe((function(){return e.handleKeydown&&e.handleKeydown.apply(e,arguments)}),["self"])),onMousedown:o[3]||(o[3]=pe((function(){return e.onMousedown&&e.onMousedown.apply(e,arguments)}),["self"]))},[Y(e.$slots,"default")],46,We)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);e("b",h($e,{DropdownItem:Ne,DropdownMenu:Ye})),e("E",y(Ne)),e("a",y(Ye))}}}))}();
