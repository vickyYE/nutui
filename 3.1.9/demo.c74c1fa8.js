var g=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var v=(n,e,u)=>e in n?g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[e]=u,_=(n,e)=>{for(var u in e||(e={}))S.call(e,u)&&v(n,u,e[u]);if(T)for(var u of T(e))I.call(e,u)&&v(n,u,e[u]);return n},b=(n,e)=>E(n,F(e));import{c as A}from"./mobile.6dea8604.js";import{_ as K}from"./index.8db4fe0c.js";import{a as $,b as B,A as j,r as h,e as D,j as l,k as o,B as N,C as w,g as c,o as J,W as O}from"./vendor.bd251973.js";const{createDemo:U}=A("timeselect"),V=U({setup(){const{proxy:n}=O(),e=$({visible1:!1,currentKey1:0,currentTime1:[],times1:[{key:0,list:["9:00-10:00","10:00-11:00","11:00-12:00"]},{key:1,list:["9:00-10:00","10:00-11:00"]}],visible2:!1,currentKey2:0,currentTime2:[],times2:[{key:0,list:["9:00-10:00","10:00-11:00","11:00-12:00"]},{key:1,list:["9:00-10:00","10:00-11:00"]}]}),u=t=>{e.currentKey1=t,e.currentTime1=[],e.currentTime1.push({key:e.currentKey1,list:[]})},C=()=>{e.visible1=!0},k=t=>{let i=e.currentTime1[0].list.findIndex(r=>r===t);i===-1?e.currentTime1[0].list.push(t):e.currentTime1[0].list.splice(i,1)},f=t=>{n.$toast.text(`\u60A8\u9009\u62E9\u4E86\uFF1A${JSON.stringify(t)}`)},a=t=>{e.currentKey2=t,e.currentTime2.find(r=>r.key==t)||e.currentTime2.push({key:t,list:[]})},s=()=>{e.visible2=!0},d=t=>{let i=e.currentTime2.findIndex(y=>y.key==e.currentKey2),r=e.currentTime2[i].list.findIndex(y=>y===t);r===-1?e.currentTime2[i].list.push(t):e.currentTime2[i].list.splice(r,1)},m=t=>{n.$toast.text(`\u60A8\u9009\u62E9\u4E86\uFF1A${JSON.stringify(t)}`)};return B(()=>{e.currentTime1.push({key:e.currentKey1,list:[]}),e.currentTime2.push({key:e.currentKey2,list:[]})}),b(_({},j(e)),{handleChange1:u,handleSelected1:f,selectTime1:k,handleClick1:C,handleChange2:a,handleSelected2:m,selectTime2:d,handleClick2:s})}}),p=n=>(N("data-v-6b0f9eca"),n=n(),w(),n),M={class:"demo"},R=p(()=>c("h2",null,"\u57FA\u672C\u7528\u6CD5",-1)),W=p(()=>c("span",null,[c("label",null,"\u8BF7\u9009\u62E9\u914D\u9001\u65F6\u95F4")],-1)),q=p(()=>c("h2",null,"\u53EF\u9009\u62E9\u591A\u4E2A\u65E5\u671F\u65F6\u95F4",-1)),z=p(()=>c("span",null,[c("label",null,"\u8BF7\u9009\u62E9\u914D\u9001\u65F6\u95F4")],-1));function G(n,e,u,C,k,f){const a=h("nut-cell"),s=h("nut-timepannel"),d=h("nut-timedetail"),m=h("nut-timeselect");return J(),D("div",M,[R,l(a,{onClick:n.handleClick1},{default:o(()=>[W]),_:1},8,["onClick"]),l(m,{visible:n.visible1,"onUpdate:visible":e[0]||(e[0]=t=>n.visible1=t),height:"50%","current-key":n.currentKey1,"current-time":n.currentTime1,onSelected:n.handleSelected1},{pannel:o(()=>[l(s,{name:"2\u670823\u65E5(\u4ECA\u5929)","pannel-key":"0",onChange:n.handleChange1},null,8,["onChange"]),l(s,{name:"2\u670824\u65E5(\u661F\u671F\u4E09)","pannel-key":"1",onChange:n.handleChange1},null,8,["onChange"])]),detail:o(()=>[l(d,{times:n.times1,onSelect:n.selectTime1},null,8,["times","onSelect"])]),_:1},8,["visible","current-key","current-time","onSelected"]),q,l(a,{onClick:n.handleClick2},{default:o(()=>[z]),_:1},8,["onClick"]),l(m,{visible:n.visible2,"onUpdate:visible":e[1]||(e[1]=t=>n.visible2=t),height:"50%","current-key":n.currentKey2,"current-time":n.currentTime2,onSelected:n.handleSelected2},{pannel:o(()=>[l(s,{name:"2\u670823\u65E5(\u4ECA\u5929)","pannel-key":"0",onChange:n.handleChange2},null,8,["onChange"]),l(s,{name:"2\u670824\u65E5(\u661F\u671F\u4E09)","pannel-key":"1",onChange:n.handleChange2},null,8,["onChange"])]),detail:o(()=>[l(d,{times:n.times2,onSelect:n.selectTime2},null,8,["times","onSelect"])]),_:1},8,["visible","current-key","current-time","onSelected"])])}var X=K(V,[["render",G],["__scopeId","data-v-6b0f9eca"]]);export{X as default};
