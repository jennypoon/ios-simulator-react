(this["webpackJsonpios-simulator"]=this["webpackJsonpios-simulator"]||[]).push([[0],{17:function(t,e,s){},18:function(t,e,s){},19:function(t,e,s){},21:function(t,e,s){},23:function(t,e,s){},24:function(t,e,s){},25:function(t,e,s){},26:function(t,e,s){},27:function(t,e,s){},40:function(t,e,s){"use strict";s.r(e);var c=s(1),i=s.n(c),n=s(12),a=s.n(n),r=(s(17),s(18),s(10)),j=(s(19),s(6)),o=(s(20),s(21),s(0));var d=function(t){var e=function(e){var s=e.target,c=document.querySelector(".app-grid"),i={x:s.offsetLeft+s.offsetWidth/2+c.offsetLeft,y:s.offsetTop+s.offsetHeight/2+c.offsetTop};t.setPosition(i),console.log(e.target,e.target.dataset),t.setStatus(s.dataset.index)};return Object(o.jsx)("div",{className:"app-grid",children:Object(o.jsx)("div",{className:"main-carousel","data-flickity":'{ "cellAlign": "left" }',children:Object(o.jsx)("div",{className:"carousel-cell",children:Object(o.jsx)("div",{className:"app-page",children:Object(j.a)(Array(20)).map((function(t,s,c){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{onClick:e,"data-index":s+1,src:"img/icons/"+(s+1)+".svg",alt:""})},s)}))})})})})},u=s.p+"static/media/d1.5d853a16.svg",f=s.p+"static/media/d2.938f46f5.svg",b=s.p+"static/media/d3.35d7b375.svg",v=s.p+"static/media/d4.4d8c86ba.svg";s(23);var x=function(t){var e=function(e){var s=e.target,c=document.querySelector(".dock"),i={x:s.offsetLeft+s.offsetWidth/2+c.offsetLeft,y:s.offsetTop+s.offsetHeight/2+c.offsetTop};t.setPosition(i),console.log(e.target,e.target.dataset),t.setStatus(s.dataset.index)},s=[u,f,b,v];return Object(o.jsx)("div",{className:"dock",children:Object(j.a)(Array(4)).map((function(t,c,i){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:s[c],onClick:e,"data-index":c+21})},c)}))})},O=s.p+"static/media/reception.4250a028.svg",l=s.p+"static/media/wifi.783a4378.svg",m=s.p+"static/media/battery.e7797b2a.svg";s(24);var g=function(t){return Object(o.jsxs)("div",{className:"notification-bar",children:[Object(o.jsx)("div",{className:"notification-boxes notification-left",children:"19:30"}),Object(o.jsxs)("div",{className:"notification-boxes notification-right",children:[Object(o.jsx)("img",{src:O,alt:"Notification",className:"notification-icon"}),Object(o.jsx)("img",{src:l,alt:"Notification",className:"notification-icon"}),Object(o.jsx)("img",{src:m,alt:"Notification",className:"notification-icon"})]})]})};var p=function(t){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(d,{setStatus:t.setStatus,setPosition:t.setPosition}),Object(o.jsx)(x,{setStatus:t.setStatus,setPosition:t.setPosition})]})};s(25);var h=function(t){return Object(o.jsx)("div",{})};var N=function(t){return Object(o.jsx)("div",{})};var y=function(t){return Object(o.jsx)("div",{})};s(26);var S=function(t){return Object(c.useEffect)((function(){!function(){var t=document.querySelector(".videoElement");navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){t.srcObject=e})).catch((function(t){console.log("Something went wrong!")}))}()}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("video",{className:"videoElement",autoPlay:"true"}),Object(o.jsx)("img",{src:""}),Object(o.jsx)("canvas",{style:{display:"none"}})]})};var P=function(t){return Object(o.jsx)("div",{})};var k=function(t){return Object(o.jsx)("div",{})};var w=function(t){return Object(o.jsx)("div",{})};var E=function(t){return Object(o.jsx)("div",{})};var L=function(t){return Object(o.jsx)("div",{})};var q=function(t){return Object(o.jsx)("div",{})};var T=function(t){return Object(o.jsx)("div",{})};var A=function(t){return Object(o.jsx)("div",{})};var M=function(t){return Object(o.jsx)("div",{})};var C=function(t){return Object(o.jsx)("div",{})};var D=function(t){return Object(o.jsx)("div",{})};var H=function(t){return Object(o.jsx)("div",{})};var J=function(t){return Object(o.jsx)("div",{})};var U=function(t){return Object(o.jsx)("div",{})};var W=function(t){return Object(o.jsx)("div",{})};var B=function(t){return Object(o.jsx)("div",{})};var F=function(t){return Object(o.jsx)("div",{})};var I=function(t){return Object(o.jsx)("div",{})};s(27);var z=function(t){return Object(o.jsxs)("div",{className:"safari",children:[Object(o.jsx)("div",{className:"safari-header"}),Object(o.jsx)("div",{className:"safari-main",children:Object(o.jsx)("iframe",{id:"safari",src:"https://m.google.com/webhp?igu=1",title:"safari"})}),Object(o.jsx)("div",{className:"safari-footer"})]})};var G=function(t){return Object(o.jsx)("div",{})};var K=function(t){var e={top:t.position.y,left:t.position.x};Object(c.useEffect)((function(){document.querySelector(".app-display").classList.add("opened")}));var s=[Object(o.jsx)(h,{}),Object(o.jsx)(N,{}),Object(o.jsx)(y,{}),Object(o.jsx)(S,{}),Object(o.jsx)(P,{}),Object(o.jsx)(k,{}),Object(o.jsx)(w,{}),Object(o.jsx)(E,{}),Object(o.jsx)(L,{}),Object(o.jsx)(q,{}),Object(o.jsx)(T,{}),Object(o.jsx)(A,{}),Object(o.jsx)(M,{}),Object(o.jsx)(C,{}),Object(o.jsx)(D,{}),Object(o.jsx)(H,{}),Object(o.jsx)(J,{}),Object(o.jsx)(U,{}),Object(o.jsx)(W,{}),Object(o.jsx)(B,{}),Object(o.jsx)(F,{}),Object(o.jsx)(I,{}),Object(o.jsx)(z,{}),Object(o.jsx)(G,{})];return Object(o.jsxs)("div",{className:"app-display",style:e,children:[Object(o.jsx)(g,{}),s.map((function(e,c,i){return t.status===""+[c+1]?s[c]:""})),Object(o.jsx)("div",{className:"bottom-bar"})]})};s(28);var Q=function(t){var e=Object(c.useState)(0),s=Object(r.a)(e,2),i=s[0],n=s[1],a=Object(c.useState)({x:null,y:null}),j=Object(r.a)(a,2),d=j[0],u=j[1];return console.log(i,d),Object(o.jsx)("div",{className:"frame",children:Object(o.jsxs)("div",{className:"display",children:[Object(o.jsx)(p,{setStatus:n,setPosition:u}),i?Object(o.jsx)(K,{status:i,position:d}):""]})})};var R=function(){return Object(o.jsx)("div",{className:"body",children:Object(o.jsx)(Q,{})})};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1d3e2850.chunk.js.map