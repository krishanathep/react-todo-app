(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{61:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(21),r=c.n(n),i=(c(61),c(62),c(23)),j=c(7),l=c(98),o=c(97),b=c(3),d=function(){return Object(b.jsx)(l.a,{bg:"primary",expand:"lg",variant:"dark",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)(i.b,{className:"navbar-brand",to:"/",children:[Object(b.jsx)("i",{class:"fab fa-github fa-lg"})," Navbar scroll"]}),Object(b.jsx)(l.a.Toggle,{"aria-controls":"navbarScroll"}),Object(b.jsx)(l.a.Collapse,{id:"navbarScroll",children:Object(b.jsxs)(o.a,{className:"ml-auto",children:[Object(b.jsx)(i.b,{to:"/",className:"nav-link",exact:!0,activeClassName:"active",children:"Home"}),Object(b.jsx)(i.b,{to:"/about",className:"nav-link",activeClassName:"active",children:"About"}),Object(b.jsx)(i.b,{to:"/courses",className:"nav-link",activeClassName:"active",children:"Courses"}),Object(b.jsx)(i.b,{to:"/products",className:"nav-link",activeClassName:"active",children:"Products"})]})})]})})},u=c(25),O=c(92),h=c(96),x=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],s=t[1],n=function(){return s(!1)};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O.a,{variant:"primary mt-3",onClick:function(){return s(!0)},children:"Launch static backdrop modal"}),Object(b.jsxs)(h.a,{show:c,onHide:n,backdrop:"static",keyboard:!1,children:[Object(b.jsx)(h.a.Header,{closeButton:!0,children:Object(b.jsx)(h.a.Title,{children:"Modal title"})}),Object(b.jsx)(h.a.Body,{children:"I will not close if you click outside me. Don't even try to press escape key."}),Object(b.jsxs)(h.a.Footer,{children:[Object(b.jsx)(O.a,{variant:"secondary",onClick:n,children:"Close"}),Object(b.jsx)(O.a,{variant:"primary",children:"Understood"})]})]})]})},p=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h1",{children:"About Page"})})},v=c(41),m=c.n(v),f=c(55),k=c(56),g=c.n(k),N=c(93),y=c(94),C=c(95),S=c(99),w=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(u.a)(n,2),i=(r[0],r[1]),j=Object(a.useState)(""),l=Object(u.a)(j,2),o=(l[0],l[1],function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,g.a.get("https://api.codingthailand.com/api/course");case 4:t=e.sent,console.log(t.data),s(t.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,i(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}());return Object(a.useEffect)((function(){o()}),[]),Object(b.jsx)(N.a,{children:Object(b.jsx)(y.a,{children:c.map((function(e){return Object(b.jsxs)(C.a,{xs:12,md:3,children:[Object(b.jsx)("br",{}),Object(b.jsxs)(S.a,{children:[Object(b.jsx)(S.a.Img,{variant:"top",src:e.picture,height:"150"}),Object(b.jsxs)(S.a.Body,{children:[Object(b.jsx)(S.a.Title,{children:e.title}),Object(b.jsx)(S.a.Text,{children:e.detail})]})]},e.id),Object(b.jsx)("br",{})]})}))})})},B=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h1",{children:"Products Page"})})},P=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(i.a,{basename:"/",children:[Object(b.jsx)(d,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(x,{})}),Object(b.jsx)(j.a,{path:"/about",children:Object(b.jsx)(p,{})}),Object(b.jsx)(j.a,{path:"/courses",children:Object(b.jsx)(w,{})}),Object(b.jsx)(j.a,{path:"/products",children:Object(b.jsx)(B,{})})]})]})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.54cf00bb.chunk.js.map