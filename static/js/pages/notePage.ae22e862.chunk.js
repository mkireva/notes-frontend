(this["webpackJsonpnotes-frontend"]=this["webpackJsonpnotes-frontend"]||[]).push([[1],{231:function(n,t,e){"use strict";e.r(t),e.d(t,"NotePage",(function(){return X}));var a,i=e(0),r=e(148),c=e(37),o=e(127),s=e(103),j=e(114),d=e(238),l=e(228),u=e(236),b=e(239),O=e(98),x=e(243),h=e(240),f=e(242),p=e(241),g=e(151),m=e.n(g),v=e(153),w=e.n(v),N=e(154),k=e.n(N),y=e(233),S=e(244),C=e(245),B=e(155),T=e.n(B),D=e(156),P=e.n(D),R=e(2),G=240,L=(Object(s.a)("main",{shouldForwardProp:function(n){return"open"!==n}})((function(n){var t=n.theme,e=n.open;return Object(o.a)({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginRight:-240},e&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginRight:0})})),Object(s.a)(u.a,{shouldForwardProp:function(n){return"open"!==n}})((function(n){var t=n.theme,e=n.open;return Object(o.a)({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},e&&{width:"calc(100% - ".concat(G,"px)"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginRight:G})}))),E=Object(s.a)("div")((function(n){var t=n.theme;return Object(o.a)(Object(o.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-start"})})),F=function(){var n=Object(j.a)(),t=i.useState(!1),e=Object(c.a)(t,2),a=e[0],r=e[1];return Object(R.jsxs)(d.a,{sx:{display:"flex"},children:[Object(R.jsx)(O.a,{}),Object(R.jsx)(L,{position:"fixed",open:a,children:Object(R.jsxs)(b.a,{children:[Object(R.jsx)(h.a,{variant:"h6",noWrap:!0,sx:{flexGrow:1},component:"div"}),Object(R.jsx)(p.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){r(!0)},sx:Object(o.a)({},a&&{display:"none"}),children:Object(R.jsx)(m.a,{})})]})}),Object(R.jsxs)(l.a,{sx:{width:G,flexShrink:0,"& .MuiDrawer-paper":{width:G,paddingLeft:2}},variant:"persistent",anchor:"right",open:a,children:[Object(R.jsx)(E,{children:Object(R.jsx)(p.a,{onClick:function(){r(!1)},children:"rtl"===n.direction?Object(R.jsx)(w.a,{}):Object(R.jsx)(k.a,{})})}),Object(R.jsx)(f.a,{}),Object(R.jsx)(x.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(n,t){return Object(R.jsxs)(y.a,{button:!0,children:[Object(R.jsx)(S.a,{children:t%2===0?Object(R.jsx)(T.a,{}):Object(R.jsx)(P.a,{})}),Object(R.jsx)(C.a,{primary:n})]},n)}))}),Object(R.jsx)(f.a,{}),Object(R.jsx)(x.a,{children:["All mail","Trash","Spam"].map((function(n,t){return Object(R.jsxs)(y.a,{button:!0,children:[Object(R.jsx)(S.a,{children:t%2===0?Object(R.jsx)(T.a,{}):Object(R.jsx)(P.a,{})}),Object(R.jsx)(C.a,{primary:n})]},n)}))})]})]})},I=e(225),J=e(230),W=e(96),A=e(222),M=Object(A.a)((function(n){return{footerText:{color:"#fff"},root:{marginTop:80,backgroundColor:n.palette.primary.main},footerButton:{color:"#fff"}}})),q=function(){var n=M(),t=Object(W.a)().i18n,e=function(n){t.changeLanguage(n)};return Object(R.jsx)("footer",{className:n.root,children:Object(R.jsxs)(I.a,{className:n.footerText,children:["Copyright \xa9 2022, Beinsa Notes",Object(R.jsx)(J.a,{className:n.footerButton,onClick:function(){return e("de")},children:"DE"}),Object(R.jsx)(J.a,{className:n.footerButton,onClick:function(){return e("en")},children:"EN"}),Object(R.jsx)(J.a,{className:n.footerButton,onClick:function(){return e("bg")},children:"BG"})]})})},z=e(227),H=Object(z.a)((function(n){return Object(r.a)(n),{root:{height:"100vh",display:"flex",flexDirection:"column"},container:{marginTop:65,flex:1,paddingTop:20,paddingBottom:20,paddingLeft:8,paddingRight:8}}})),K=function(n){var t=n.children,e=H();return Object(R.jsxs)("div",{className:e.root,children:[Object(R.jsx)(F,{}),Object(R.jsx)("div",{className:e.container,children:t}),Object(R.jsx)(q,{})]})},Q=e(164),U=e(235),V=(a="translation",function(n){var t=n.children,e=Object(Q.a)(n,["children"]);return Object(R.jsx)(U.a,Object(o.a)(Object(o.a)({ns:a},e),{},{children:t}))}),X=function(){return Object(R.jsx)(K,{children:Object(R.jsx)(V,{tOptions:{page:"NotePage"},children:"Welcome to {{page}}"})})};t.default=X}}]);
//# sourceMappingURL=notePage.ae22e862.chunk.js.map