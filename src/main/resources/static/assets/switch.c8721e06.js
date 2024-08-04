var ee=Object.defineProperty,ae=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var K=(i,s,o)=>s in i?ee(i,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[s]=o,h=(i,s)=>{for(var o in s||(s={}))ie.call(s,o)&&K(i,o,s[o]);if(A)for(var o of A(s))ne.call(s,o)&&K(i,o,s[o]);return i},H=(i,s)=>ae(i,te(s));import{d as J,c as v,r as V,w as S,o as oe,a as r,f,m as E,u as a,g as u,z as se,b as p,e as k,l as T,k as d,t as N,j as le,n as W,h as re,Y as ce,W as ue}from"./index.a2819361.js";import{b as de,I as j,d as ve,J as C,k as B,ae as P,an as fe,ac as pe,a as me,H as he,ao as ye,o as be,O as ge,y as ke,E as w,ah as we,_ as Ce,bp as G,t as Ie,w as Ve}from"./base.b67810a8.js";import{i as Se}from"./validator.efe076db.js";import{U as _,C as z,I as D}from"./event.776e7e11.js";const Ee=de({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:j},inactiveIcon:{type:j},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:ve(Function)},size:{type:String,validator:Se},tabindex:{type:[String,Number]}}),Te={[_]:i=>C(i)||B(i)||P(i),[z]:i=>C(i)||B(i)||P(i),[D]:i=>C(i)||B(i)||P(i)},Ne=["onClick"],Be=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Pe=["aria-hidden"],_e=["aria-hidden"],ze=["aria-hidden"],O="ElSwitch",De=J({name:O}),Oe=J(H(h({},De),{props:Ee,emits:Te,setup(i,{expose:s,emit:o}){const t=i,L=ce(),{formItem:y}=fe(),Y=pe(),n=me("switch");he({from:'"value"',replacement:'"model-value" or "v-model"',scope:O,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},v(()=>{var e;return!!((e=L.vnode.props)!=null&&e.value)}));const{inputId:q}=ye(t,{formItemContext:y}),b=be(v(()=>t.loading)),I=V(t.modelValue!==!1),m=V(),Q=V(),R=v(()=>[n.b(),n.m(Y.value),n.is("disabled",b.value),n.is("checked",l.value)]),X=v(()=>({width:ge(t.width)}));S(()=>t.modelValue,()=>{I.value=!0}),S(()=>t.value,()=>{I.value=!1});const F=v(()=>I.value?t.modelValue:t.value),l=v(()=>F.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(F.value)||(o(_,t.inactiveValue),o(z,t.inactiveValue),o(D,t.inactiveValue)),S(l,e=>{var c;m.value.checked=e,t.validateEvent&&((c=y==null?void 0:y.validate)==null||c.call(y,"change").catch(x=>ke()))});const g=()=>{const e=l.value?t.inactiveValue:t.activeValue;o(_,e),o(z,e),o(D,e),ue(()=>{m.value.checked=l.value})},M=()=>{if(b.value)return;const{beforeChange:e}=t;if(!e){g();return}const c=e();[G(c),C(c)].includes(!0)||Ie(O,"beforeChange must return type `Promise<boolean>` or `boolean`"),G(c)?c.then(U=>{U&&g()}).catch(U=>{}):c&&g()},Z=v(()=>n.cssVarBlock(h(h(h({},t.activeColor?{"on-color":t.activeColor}:null),t.inactiveColor?{"off-color":t.inactiveColor}:null),t.borderColor?{"border-color":t.borderColor}:null))),$=()=>{var e,c;(c=(e=m.value)==null?void 0:e.focus)==null||c.call(e)};return oe(()=>{m.value.checked=l.value}),s({focus:$,checked:l}),(e,c)=>(r(),f("div",{class:u(a(R)),style:W(a(Z)),onClick:re(M,["prevent"])},[E("input",{id:a(q),ref_key:"input",ref:m,class:u(a(n).e("input")),type:"checkbox",role:"switch","aria-checked":a(l),"aria-disabled":a(b),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(b),tabindex:e.tabindex,onChange:g,onKeydown:se(M,["enter"])},null,42,Be),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(r(),f("span",{key:0,class:u([a(n).e("label"),a(n).em("label","left"),a(n).is("active",!a(l))])},[e.inactiveIcon?(r(),p(a(w),{key:0},{default:k(()=>[(r(),p(T(e.inactiveIcon)))]),_:1})):d("v-if",!0),!e.inactiveIcon&&e.inactiveText?(r(),f("span",{key:1,"aria-hidden":a(l)},N(e.inactiveText),9,Pe)):d("v-if",!0)],2)):d("v-if",!0),E("span",{ref_key:"core",ref:Q,class:u(a(n).e("core")),style:W(a(X))},[e.inlinePrompt?(r(),f("div",{key:0,class:u(a(n).e("inner"))},[e.activeIcon||e.inactiveIcon?(r(),p(a(w),{key:0,class:u(a(n).is("icon"))},{default:k(()=>[(r(),p(T(a(l)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(r(),f("span",{key:1,class:u(a(n).is("text")),"aria-hidden":!a(l)},N(a(l)?e.activeText:e.inactiveText),11,_e)):d("v-if",!0)],2)):d("v-if",!0),E("div",{class:u(a(n).e("action"))},[e.loading?(r(),p(a(w),{key:0,class:u(a(n).is("loading"))},{default:k(()=>[le(a(we))]),_:1},8,["class"])):d("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(r(),f("span",{key:1,class:u([a(n).e("label"),a(n).em("label","right"),a(n).is("active",a(l))])},[e.activeIcon?(r(),p(a(w),{key:0},{default:k(()=>[(r(),p(T(e.activeIcon)))]),_:1})):d("v-if",!0),!e.activeIcon&&e.activeText?(r(),f("span",{key:1,"aria-hidden":!a(l)},N(e.activeText),9,ze)):d("v-if",!0)],2)):d("v-if",!0)],14,Ne))}}));var Fe=Ce(Oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const We=Ve(Fe);export{We as E};
