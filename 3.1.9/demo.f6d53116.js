import{c as v}from"./mobile.6dea8604.js";import{_ as p}from"./index.8db4fe0c.js";import{a as V,r as m,e as F,j as u,k as n,g as s,o as f,W as C}from"./vendor.bd251973.js";const{createDemo:E}=v("inputnumber"),h=E({props:{},setup(){let{proxy:l}=C();const e=V({val1:1,val2:0,val3:10,val4:0,val5:1,val6:5.5,val7:1,val8:1,step:1.1});return{state:e,onChange:d=>{l.$toast.loading("\u5F02\u6B65\u6F14\u793A 2 \u79D2\u540E\u66F4\u6539"),setTimeout(()=>{e.val8=d,l.$toast.hide()},2e3)},blur,focus,overlimit:()=>{l.$toast.warn("\u8D85\u51FA\u9650\u5236\u4E8B\u4EF6\u89E6\u53D1")}}}}),B={class:"demo"},_=s("h2",null,"\u57FA\u672C\u7528\u6CD5",-1),b=s("h2",null,"\u6B65\u957F\u8BBE\u7F6E",-1),g=s("h2",null,"\u9650\u5236\u8F93\u5165\u8303\u56F4",-1),A=s("h2",null,"\u7981\u7528\u64CD\u4F5C",-1),U=s("h2",null,"\u53EA\u8BFB\u7981\u7528\u8F93\u5165\u6846",-1),$=s("h2",null,"\u652F\u6301\u5C0F\u6570",-1),D=s("h2",null,"\u652F\u6301\u5F02\u6B65\u4FEE\u6539",-1),j=s("h2",null,"\u81EA\u5B9A\u4E49\u6309\u94AE\u5927\u5C0F",-1);function k(l,e,r,i,d,w){const a=m("nut-inputnumber"),o=m("nut-cell");return f(),F("div",B,[_,u(o,null,{default:n(()=>[u(a,{modelValue:l.state.val1,"onUpdate:modelValue":e[0]||(e[0]=t=>l.state.val1=t)},null,8,["modelValue"])]),_:1}),b,u(o,null,{default:n(()=>[u(a,{modelValue:l.state.val2,"onUpdate:modelValue":e[1]||(e[1]=t=>l.state.val2=t),step:"5"},null,8,["modelValue"])]),_:1}),g,u(o,null,{default:n(()=>[u(a,{modelValue:l.state.val3,"onUpdate:modelValue":e[2]||(e[2]=t=>l.state.val3=t),onOverlimit:l.overlimit,min:"10",max:"20"},null,8,["modelValue","onOverlimit"])]),_:1}),A,u(o,null,{default:n(()=>[u(a,{modelValue:l.state.val4,"onUpdate:modelValue":e[3]||(e[3]=t=>l.state.val4=t),disabled:""},null,8,["modelValue"])]),_:1}),U,u(o,null,{default:n(()=>[u(a,{modelValue:l.state.val5,"onUpdate:modelValue":e[4]||(e[4]=t=>l.state.val5=t),readonly:""},null,8,["modelValue"])]),_:1}),$,u(o,null,{default:n(()=>[u(a,{modelValue:l.state.val6,"onUpdate:modelValue":e[5]||(e[5]=t=>l.state.val6=t),step:"0.1","decimal-places":"1",readonly:""},null,8,["modelValue"])]),_:1}),D,u(o,null,{default:n(()=>[u(a,{"model-value":l.state.val8,onChange:l.onChange},null,8,["model-value","onChange"])]),_:1}),j,u(o,null,{default:n(()=>[u(a,{modelValue:l.state.val7,"onUpdate:modelValue":e[6]||(e[6]=t=>l.state.val7=t),"button-size":"30","input-width":"50"},null,8,["modelValue"])]),_:1})])}var z=p(h,[["render",k]]);export{z as default};
