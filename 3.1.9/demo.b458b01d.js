import{c as y}from"./mobile.6dea8604.js";import{_ as T}from"./index.8db4fe0c.js";import{a as V,r as f,e as r,j as l,k as a,g as d,o as n,F as b,i as _,c as p,l as o,t as m,n as c,s as A}from"./vendor.bd251973.js";const{createDemo:h}=y("tabs"),k=h({props:{},setup(){const t=V({tab1value:"0",tab11value:"0",tab2value:"0",tab3value:"0",tab4value:"0",tab5value:"0",tab6value:"c1",list3:Array.from(new Array(2).keys()),list4:Array.from(new Array(10).keys()),list5:Array.from(new Array(2).keys()),list6:[{title:"\u81EA\u5B9A\u4E49 1",paneKey:"c1",icon:"dongdong"},{title:"\u81EA\u5B9A\u4E49 2",paneKey:"c2",icon:"JD"},{title:"\u81EA\u5B9A\u4E49 3",paneKey:"c3"}]});return setTimeout(()=>{t.list3.push(999),t.tab3value="2"},3e3),{state:t}}}),E={class:"demo full"},C=d("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),F=o(" Tab 1 "),B=o(" Tab 2 "),D=o(" Tab 3 "),g=d("h2",null,"\u57FA\u7840\u7528\u6CD5-\u5FAE\u7B11\u66F2\u7EBF",-1),K=o(" Tab 1 "),U=o(" Tab 2 "),$=o(" Tab 3 "),j=d("h2",null,"\u901A\u8FC7 pane-key \u5339\u914D",-1),w=o(" Tab 1 "),N=o(" Tab 2 "),z=o(" Tab 3 "),J=d("h2",null,"\u6570\u636E\u5F02\u6B65\u6E32\u67D3 3s",-1),L=d("h2",null,"\u6570\u91CF\u591A,\u6EDA\u52A8\u64CD\u4F5C",-1),S=d("h2",null,"\u5DE6\u53F3\u5E03\u5C40",-1),q=d("h2",null,"\u81EA\u5B9A\u4E49\u6807\u7B7E\u680F",-1),G=["onClick"],H={class:"nut-tabs__titles-item__text"};function I(t,u,M,O,P,Q){const s=f("nut-tabpane"),i=f("nut-tabs"),v=f("nut-icon");return n(),r("div",E,[C,l(i,{modelValue:t.state.tab1value,"onUpdate:modelValue":u[0]||(u[0]=e=>t.state.tab1value=e)},{default:a(()=>[l(s,{title:"Tab 1"},{default:a(()=>[F]),_:1}),l(s,{title:"Tab 2"},{default:a(()=>[B]),_:1}),l(s,{title:"Tab 3"},{default:a(()=>[D]),_:1})]),_:1},8,["modelValue"]),g,l(i,{modelValue:t.state.tab11value,"onUpdate:modelValue":u[1]||(u[1]=e=>t.state.tab11value=e),type:"smile"},{default:a(()=>[l(s,{title:"Tab 1"},{default:a(()=>[K]),_:1}),l(s,{title:"Tab 2"},{default:a(()=>[U]),_:1}),l(s,{title:"Tab 3"},{default:a(()=>[$]),_:1})]),_:1},8,["modelValue"]),j,l(i,{modelValue:t.state.tab2value,"onUpdate:modelValue":u[2]||(u[2]=e=>t.state.tab2value=e)},{default:a(()=>[l(s,{title:"Tab 1","pane-key":"0"},{default:a(()=>[w]),_:1}),l(s,{title:"Tab 2","pane-key":"1",disabled:!0},{default:a(()=>[N]),_:1}),l(s,{title:"Tab 3","pane-key":"2"},{default:a(()=>[z]),_:1})]),_:1},8,["modelValue"]),J,l(i,{modelValue:t.state.tab3value,"onUpdate:modelValue":u[3]||(u[3]=e=>t.state.tab3value=e)},{default:a(()=>[(n(!0),r(b,null,_(t.state.list3,e=>(n(),p(s,{title:"Tab "+e},{default:a(()=>[o(" Tab "+m(e),1)]),_:2},1032,["title"]))),256))]),_:1},8,["modelValue"]),L,l(i,{modelValue:t.state.tab4value,"onUpdate:modelValue":u[4]||(u[4]=e=>t.state.tab4value=e),"title-scroll":"","title-gutter":"10"},{default:a(()=>[(n(!0),r(b,null,_(t.state.list4,e=>(n(),p(s,{title:"Tab "+e},{default:a(()=>[o(" Tab "+m(e),1)]),_:2},1032,["title"]))),256))]),_:1},8,["modelValue"]),S,l(i,{style:{height:"300px"},modelValue:t.state.tab5value,"onUpdate:modelValue":u[5]||(u[5]=e=>t.state.tab5value=e),"title-scroll":"",direction:"vertical"},{default:a(()=>[(n(!0),r(b,null,_(t.state.list5,e=>(n(),p(s,{title:"Tab "+e},{default:a(()=>[o(" Tab "+m(e),1)]),_:2},1032,["title"]))),256))]),_:1},8,["modelValue"]),q,l(i,{modelValue:t.state.tab6value,"onUpdate:modelValue":u[6]||(u[6]=e=>t.state.tab6value=e)},{titles:a(()=>[(n(!0),r(b,null,_(t.state.list6,e=>(n(),r("div",{class:c(["nut-tabs__titles-item",{active:t.state.tab6value==e.paneKey}]),onClick:R=>t.state.tab6value=e.paneKey,key:e.paneKey},[e.icon?(n(),p(v,{key:0,name:e.icon},null,8,["name"])):A("",!0),d("span",H,m(e.title),1)],10,G))),128))]),default:a(()=>[(n(!0),r(b,null,_(t.state.list6,e=>(n(),p(s,{"pane-key":e.paneKey},{default:a(()=>[o(m(e.title),1)]),_:2},1032,["pane-key"]))),256))]),_:1},8,["modelValue"])])}var Z=T(k,[["render",I]]);export{Z as default};
