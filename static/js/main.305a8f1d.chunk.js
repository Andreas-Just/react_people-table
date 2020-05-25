(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{151:function(e,a,t){e.exports=t(297)},156:function(e,a,t){},290:function(e,a,t){},291:function(e,a,t){},292:function(e,a,t){},294:function(e,a,t){},295:function(e,a,t){},296:function(e,a,t){},297:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),l=t.n(c),o=t(31),u=t(14),m=(t(156),t(307)),s=t(306),i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{inverted:!0,color:"teal",className:"Nav"},r.a.createElement(m.a.Item,{as:o.b,name:"home",to:"/",exact:!0}),r.a.createElement(m.a.Item,{as:o.b,name:"people",to:"/people",exact:!0}),r.a.createElement(u.b,{path:"/people"},r.a.createElement(m.a.Item,{position:"right"},r.a.createElement(s.a,{className:"Nav-Search icon",placeholder:"Search...",icon:"search",size:"mini"})))))},p=t(308),f=(t(290),function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(p.a,{size:"huge",content:"Home Page",color:"teal"}))}),h=t(94),b=t(95),d=t(3),E=t.n(d),g=t(305),v=t(39),j=(t(291),function(e){var a=e.person,t=e.tableHeaders,n=e.onSelect;return r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.code;return r.a.createElement(g.a.Cell,{className:E()("TableCells",{TableCells_centenarians:a[t]>=65&&"age"===t,TableCells_aborigine:a.born<=1650&&"name"===t}),key:t,content:a[t],onClick:function(){return n(t,a)}})})))}),N=(t(292),function(e){var a=e.path,t=e.people,n=e.tableHeaders,c=e.sortTable,l=e.onSelect;return r.a.createElement(g.a,{celled:!0,className:"PeopleTable"},r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Row,null,n.map((function(e){var a=e.name,t=e.code;return r.a.createElement(g.a.HeaderCell,{key:a,content:a,className:"sort-button",onClick:function(){return c(t)}})})))),r.a.createElement(g.a.Body,null,t.map((function(e){return r.a.createElement(g.a.Row,{key:e.id,warning:e.slug===a,className:E()("PeopleTable-TableRow",{"PeopleTable-TableRow_male":"m"===e.sex,"PeopleTable-TableRow_female":"f"===e.sex})},r.a.createElement(j,{person:e,tableHeaders:n,onSelect:l}))}))),r.a.createElement(g.a.Footer,null,r.a.createElement(g.a.Row,null,r.a.createElement(g.a.HeaderCell,{colSpan:"3"},r.a.createElement(m.a,{floated:"right",pagination:!0},r.a.createElement(m.a.Item,{as:"a",icon:!0},r.a.createElement(v.a,{name:"chevron left"})),r.a.createElement(m.a.Item,{as:"a"},"1"),r.a.createElement(m.a.Item,{as:"a"},"2"),r.a.createElement(m.a.Item,{as:"a"},"3"),r.a.createElement(m.a.Item,{as:"a"},"4"),r.a.createElement(m.a.Item,{as:"a",icon:!0},r.a.createElement(v.a,{name:"chevron right"})))))))}),O=t(96),w=t(48),y=t.n(w),x=t(93),T=function(){var e=Object(x.a)(y.a.mark((function e(a){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),C=function(){var e=Object(x.a)(y.a.mark((function e(){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("".concat("https://andreas-just.github.io/library-json").concat("/people/people-slug.json"));case 2:return a=e.sent,e.abrupt("return",a.map((function(e,t){return Object(O.a)(Object(O.a)({},e),{},{id:t+1,father:e.fatherName||"",mother:e.motherName||"",age:e.died-e.born,century:Math.ceil(e.died/100),children:a.filter((function(a){return a.fatherName===e.name||a.motherName===e.name})).map((function(e){return e.name})).join(", ")||""})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=(t(294),{id:"Id",name:"Name",sex:"Sex",age:"Age",born:"Born",died:"Died",century:"Century",father:"Father",mother:"Mother",children:"Children"}),S=function(e){switch(e){case"id":case"age":case"born":case"died":case"century":return function(a,t){return a[e]-t[e]};case"name":case"sex":case"father":case"mother":case"children":return function(a,t){return a[e].localeCompare(t[e])};default:return function(){return 0}}},k=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],c=a[1],l=function(e){return 0===e.length?[{name:"There are no people",code:""}]:Object.entries(I).map((function(e){var a=Object(b.a)(e,2);return{code:a[0],name:a[1]}}))}(t),o=Object(u.g)(),m=Object(u.h)(),s=Object(u.i)().personName,i=new URLSearchParams(m.search),f=i.get("sortBy");Object(n.useEffect)((function(){C().then(c)}),[]),Object(n.useMemo)((function(){c((function(e){return e.sort(S(f))}))}),[f]);var d=Object(n.useCallback)((function(e,a){var n,r=null===(n=t.find((function(t){return t.name===a[e]})))||void 0===n?void 0:n.slug;"name"===e&&o.push({pathname:"/people/".concat(a.slug),search:m.search}),r&&("mother"===e||"father"===e)&&o.push({pathname:"/people/".concat(r),search:m.search})}),[o,m,t]);return r.a.createElement("div",{className:"PeoplePage"},r.a.createElement(p.a,{size:"huge",content:"People table",color:"teal"}),r.a.createElement(N,{people:t,tableHeaders:l,sortTable:function(e){var a=S(e);f!==e?(c(Object(h.a)(t).sort(a)),i.set("sortBy",e),o.push({search:i.toString()})):c(Object(h.a)(t).reverse())},onSelect:d,path:s}))},P=function(e){var a=e.message;return r.a.createElement("h2",null,a)},H=(t(295),function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/people/:personName?",component:k}),r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(f,null)),r.a.createElement(u.a,{from:"/home",to:"/"}),r.a.createElement(u.b,{path:"/error"},r.a.createElement(P,{message:"Not found"})),r.a.createElement(u.a,{from:"/*",to:"/error"})))}),R=(t(296),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(i,null)),r.a.createElement(H,null),r.a.createElement("footer",{className:"App-Footer"},"\xa9Andreas Just 2020"))});l.a.render(r.a.createElement(o.a,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.305a8f1d.chunk.js.map