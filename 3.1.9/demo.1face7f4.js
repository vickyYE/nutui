var F=Object.defineProperty,h=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var E=(u,t,l)=>t in u?F(u,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[t]=l,r=(u,t)=>{for(var l in t||(t={}))v.call(t,l)&&E(u,l,t[l]);if(_)for(var l of _(t))f.call(t,l)&&E(u,l,t[l]);return u},A=(u,t)=>h(u,D(t));import{c as L}from"./mobile.6dea8604.js";import{_ as g}from"./index.8db4fe0c.js";import{a as k,A as b,r as C,e as y,j as e,k as i,B as j,C as I,g as n,o as M,l as T}from"./vendor.bd251973.js";const{createDemo:$}=L("menu"),N=$({props:{},setup(){const u=k({title:"\u70ED\u95E8\u63A8\u8350",menuList:[{value:"\u624B\u673A"},{value:"\u7535\u8111"},{value:"\u5BB6\u7528\u7535\u5668"},{value:"\u65E5\u7528\u767E\u8D27"}],menuList2:[{value:"\u70ED\u95E8\u63A8\u8350",id:111},{value:"\u624B\u673A\u6570\u7801",id:112},{value:"\u7535\u8111\u529E\u516C",id:113},{value:"\u7F8E\u5986\u62A4\u80A4",id:114},{value:"\u4E2A\u62A4\u6E05\u6D01",id:115},{value:"\u6C7D\u8F66\u751F\u6D3B",id:116},{value:"\u4EAC\u4E1C\u8D85\u5E02",id:117},{value:"\u6BCD\u5A74\u7AE5\u88C5",id:118}]}),t=(d,a)=>{alert("\u9009\u62E9\u83DC\u5355\u9009\u9879\uFF1A"+a),console.log(11,d,a)},l=(d,a)=>{console.log(d,a),a=="title"?alert("\u83DC\u5355\u6807\u9898\u70B9\u51FB\uFF1A"+d):alert("\u7981\u7528\u64CD\u4F5C")};return A(r({},b(u)),{getChecked:t,alertText:l})}}),o=u=>(j("data-v-6e621855"),u=u(),I(),u),S={class:"demo full menu-demo"},V=o(()=>n("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),w=o(()=>n("h2",null,"\u591A\u5217\u5C55\u793A",-1)),z=o(()=>n("h2",null,"\u7981\u7528\u64CD\u4F5C",-1)),R=o(()=>n("p",{class:"tips"},"`disabled` \u5C5E\u6027\u53EF\u5BF9\u83DC\u5355\u5217\u8868\u8FDB\u884C\u7981\u7528\u64CD\u4F5C\u3002`autoClose` \u5C5E\u6027\u63A7\u5236\u4E0B\u62C9\u83DC\u5355\u5217\u8868\u662F\u5426\u9009\u62E9\u540E\u81EA\u52A8\u6536\u8D77\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u6536\u8D77\u3002",-1)),q=o(()=>n("h2",null,"\u7981\u6B62\u8499\u5C42\u5C55\u793A",-1)),G=o(()=>n("p",{class:"tips"},"\u5C5E\u6027`hasMask`\u63A7\u5236\u662F\u5426\u6709\u8499\u5C42\uFF0C\u9ED8\u8BA4\u4E3A `true`\u5C55\u793A\u8499\u5C42 ",-1)),H=o(()=>n("h2",null,"\u70B9\u51FB\u4E8B\u4EF6",-1)),J=o(()=>n("p",{class:"tips"},"\u6807\u9898\u70B9\u51FB\u4E8B\u4EF6`menu-click`\uFF0C\u83DC\u5355\u5217\u8868\u9009\u62E9\u70B9\u51FB\u4E8B\u4EF6`change`",-1)),K=o(()=>n("h2",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1)),O={class:"user-style"},P=T("\u786E\u8BA4\u63D0\u4EA4");function Q(u,t,l,d,a,U){const s=C("nut-menu-item"),m=C("nut-menu"),c=C("nut-cell"),B=C("nut-button");return M(),y("div",S,[V,e(m,null,{default:i(()=>[e(s,{"menu-list":u.menuList,title:"\u6700\u65B0\u5546\u54C1"},null,8,["menu-list"]),e(s,{"menu-list":u.menuList,title:u.title},null,8,["menu-list","title"])]),_:1}),w,e(m,null,{default:i(()=>[e(s,{class:"base-style","menu-list":u.menuList2,title:"\u5355\u5217\u5C55\u793A","multi-style":"1","max-height":"200"},null,8,["menu-list"]),e(s,{"menu-list":u.menuList2,title:"\u53CC\u5217\u5C55\u793A","multi-style":"2"},null,8,["menu-list"]),e(s,{"menu-list":u.menuList2,title:"\u4E09\u5217\u5C55\u793A","multi-style":"3"},null,8,["menu-list"])]),_:1}),z,R,e(m,null,{default:i(()=>[e(s,{"menu-list":u.menuList,title:"\u6700\u65B0\u5546\u54C1"},null,8,["menu-list"]),e(s,{"menu-list":u.menuList,title:"\u7981\u6B62\u81EA\u52A8\u6536\u8D77","auto-close":!1},null,8,["menu-list"]),e(s,{"menu-list":u.menuList2,title:"\u7B5B\u9009",disabled:""},null,8,["menu-list"])]),_:1}),q,G,e(m,{"has-mask":!1},{default:i(()=>[e(s,{"menu-list":u.menuList,title:"\u6700\u65B0\u5546\u54C1"},null,8,["menu-list"]),e(s,{"menu-list":u.menuList,title:u.title},null,8,["menu-list","title"])]),_:1}),H,J,e(m,null,{default:i(()=>[e(s,{"menu-list":u.menuList,title:"\u9009\u62E9\u83DC\u5355\u5217\u8868\u9879","multi-style":"2",onMenuClick:t[0]||(t[0]=p=>u.alertText(p,"title")),onChange:u.getChecked},null,8,["menu-list","onChange"]),e(s,{"menu-list":u.menuList2,title:"\u9009\u4E2D\u6807\u9898\u89E6\u53D1",disabled:"",onMenuClick:u.alertText},null,8,["menu-list","onMenuClick"])]),_:1}),K,e(m,null,{default:i(()=>[e(s,{title:"\u81EA\u5B9A\u4E49\u9009\u9879"},{default:i(()=>[n("div",O,[e(c,{title:"\u6211\u662F\u6807\u9898",desc:"\u63CF\u8FF0\u6587\u5B57"}),e(c,null,{default:i(()=>[e(B,{size:"large",type:"primary"},{default:i(()=>[P]),_:1})]),_:1})])]),_:1})]),_:1})])}var x=g(N,[["render",Q],["__scopeId","data-v-6e621855"]]);export{x as default};
