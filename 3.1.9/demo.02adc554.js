var E=Object.defineProperty;var r=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var C=(n,o,e)=>o in n?E(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,d=(n,o)=>{for(var e in o||(o={}))S.call(o,e)&&C(n,e,o[e]);if(r)for(var e of r(o))T.call(o,e)&&C(n,e,o[e]);return n};import{c as f}from"./mobile.6dea8604.js";import{_ as w}from"./index.8db4fe0c.js";import{a as v,r as k,e as D,j as u,k as j,g as t,o as _}from"./vendor.bd251973.js";const{createDemo:$}=f("navbar"),g=$({setup(n,{emit:o}){const e=[{id:"11",name:"\u5546\u54C1"},{id:"22",name:"\u8BC4\u4EF7"},{id:"33",name:"\u8BE6\u60C5"},{id:"44",name:"\u63A8\u8350"},{id:"55",name:"\u5546\u54C1"},{id:"66",name:"\u8BC4\u4EF7"},{id:"77",name:"\u8BE6\u60C5"},{id:"88",name:"\u63A8\u8350"}],a=()=>{alert("header\u5934\u90E8\uFF0C \u70B9\u51FB\u8FD4\u56DE")},c=()=>{alert("header\u5934\u90E8\uFF0C \u70B9\u51FBtitle")},s=()=>{alert("header\u5934\u90E8\uFF0C \u70B9\u51FB\u53F3\u4FA7\u6309\u94AE")},i=()=>{alert("icon")},l=()=>{alert("\u53D1\u9001")},m=()=>{alert("\u7F16\u8F91")},O=()=>{alert("\u66F4\u591A")},F=()=>{alert("\u6E05\u7A7A")},b=()=>{alert("\u5217\u8868")},B=()=>{alert("\u591A\u4E2A\u66F4\u591A")};function h(A,p){console.log(A,p)}return d({back:a,title:c,right:s,send:l,edit:m,clear:F,more:O,list:b,icon:i,morelist:B,switchTab:h},v({tabList:e}))}}),I={class:"demo full"},L=t("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),N=t("h2",null,"\u589E\u52A0tab\u53CA\u53F3\u4FA7\u6309\u94AE",-1),V=t("h2",null,"\u591Atab\u5207\u6362\u5BFC\u822A",-1);function z(n,o,e,a,c,s){const i=k("nut-navbar"),l=k("nut-icon");return _(),D("div",I,[L,u(i,{onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickSend:n.send,title:"\u8BA2\u5355\u8BE6\u60C5",icon:"share-n"},null,8,["onOnClickBack","onOnClickTitle","onOnClickSend"]),u(i,{onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickClear:n.clear,title:"\u6D4F\u89C8\u8BB0\u5F55",desc:"\u6E05\u7A7A"},null,8,["onOnClickBack","onOnClickTitle","onOnClickClear"]),u(i,{"left-show":!1,onOnClickTitle:n.title,onOnClickIcon:n.icon,onOnClickClear:n.edit,onOnClickSend:n.more,title:"\u8D2D\u7269\u8F66",titIcon:"cart2",desc:"\u7F16\u8F91",icon:"more-x"},null,8,["onOnClickTitle","onOnClickIcon","onOnClickClear","onOnClickSend"]),N,u(i,{tab:"",tabs:[{id:"11",name:"\u5546\u54C1"},{id:"22",name:"\u5E97\u94FA"}],onSwitchTab:n.switchTab,onOnClickBack:n.back,onOnClickTitle:n.title,onOnClickClear:n.edit,onOnClickSend:n.list,desc:"\u7F16\u8F91",icon:"horizontal-n"},null,8,["onSwitchTab","onOnClickBack","onOnClickTitle","onOnClickClear","onOnClickSend"]),V,u(i,{tabs:n.tabList,onSwitchTab:n.switchTab,onOnClickBack:n.back,icon:"more-x",onOnClickSend:n.send},{icons:j(()=>[u(l,{class:"icon",name:"share",onOnClickSlotSend:n.morelist},null,8,["onOnClickSlotSend"])]),_:1},8,["tabs","onSwitchTab","onOnClickBack","onOnClickSend"])])}var J=w(g,[["render",z]]);export{J as default};
