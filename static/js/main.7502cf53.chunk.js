(this.webpackJsonppixaria=this.webpackJsonppixaria||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(11),s=n.n(a),i=(n(17),n(4)),o=n.n(i),l=n(8),j=n(3),u=(n(19),n(12)),d=n(0),h=function(e){var t=e.search,n=e.query,r=Object(c.useState)(""),a=Object(j.a)(r,2),s=a[0],i=a[1];return Object(d.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),s?(t("https://api.pexels.com/v1/search?query=".concat(s,"&per_page=8&page=1")),n(s),i("")):alert("Please type a query in the search bar.")},children:[Object(d.jsx)("input",{type:"text",placeholder:"Enter search",value:s,onChange:function(e){return i(e.currentTarget.value)},className:"search-field"}),Object(d.jsx)("button",{type:"submit",value:"Search",className:"btn btn-search",children:Object(d.jsx)(u.a,{})})]})},p=function(e){var t=e.name,n=e.picUrl,c=e.query,r=e.search;return Object(d.jsxs)("div",{className:"hero-header",style:{backgroundImage:'url("'.concat(n,'")')},children:[Object(d.jsxs)("div",{className:"hero-content",children:[Object(d.jsx)("h1",{children:"The best free stock photos and videos shared by talented creators."}),Object(d.jsx)(h,{search:r,query:c})]}),Object(d.jsxs)("span",{children:["Photo by ",t]})]})};p.defaultProps={name:"Pok Rei",picUrl:"https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"};var b=p,m=function(e){var t=e.search,n=e.query,c=e.onLogoClick;return Object(d.jsxs)("nav",{className:"nav-bar",children:[Object(d.jsx)("div",{className:"logo",onClick:function(){return c}}),Object(d.jsx)("div",{className:"nav-search",children:Object(d.jsx)(h,{search:t,query:n})})]})},x=function(e){var t=e.classN,n=e.txtColor,c=e.bgColor,r=e.btnText,a=e.onClick;return Object(d.jsx)("button",{onClick:a,className:"btn ".concat(t),style:{backgroundColor:c,color:n},children:r})};x.defaultProps={bgColor:"pink",txtColor:"green",btnText:"Text",onClick:function(){console.log("no actions assigned")}};var f=x,O=n(6),g=n(7),v={margin:"6px",width:"30px",height:"30px",color:"#fff",pointerEvents:"all",cursor:"pointer"},y=function(e){var t=e.name,n=e.picUrl,c=e.largPic,r=e.modal,a=e.id;return Object(d.jsxs)("div",{className:"gallary-img-container",children:[Object(d.jsx)("img",{src:n,className:"gallary-img",onClick:function(){return r(a)}}),Object(d.jsxs)("div",{className:"img-info",children:[Object(d.jsx)("div",{className:"photographer-info",children:Object(d.jsx)("span",{className:"photographer-name",children:t})}),Object(d.jsx)("div",{className:"img-actions",children:Object(d.jsx)(O.a,{className:"img-actions-icons",icon:g.b,style:v,onClick:function(){return window.open(c)}})})]})]})},C=function(e){var t=e.GalaryTite,n=e.pics,c=e.onBtnClick,r=e.modal;return Object(d.jsxs)("div",{className:"gallary-section",children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("div",{className:"gallary",children:n.map((function(e){return Object(d.jsx)(y,{name:e.photographer,picUrl:e.src.medium,largPic:e.src.large2x,id:e.id,modal:r})}))}),Object(d.jsx)(f,{onClick:c,bgColor:"#7E4DD2",txtColor:"#fff",btnText:"Load More"})]})};C.defaultProps={profImg:"https://images.pexels.com/users/avatars/92810756/brian-lazo-240.jpeg?auto=compress&fit=crop&h=256&w=256",posterName:"Brian Lazo",imgUrl:"https://images.pexels.com/photos/9160984/pexels-photo-9160984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",original:"https://www.pexels.com/photo/9160984/download/?search_query=&tracking_id=so1xqtw586"};var N=C,k={color:"#fff",pointerEvents:"all"},w=function(e){var t=e.picInfo,n=e.close,r=Object(c.useState)(t.src.medium),a=Object(j.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(!1),l=Object(j.a)(o,2),u=l[0],h=l[1];return Object(d.jsxs)("div",{className:"modal-bg",children:[Object(d.jsx)(f,{className:"closeBtn",txtColor:"white",bgColor:"transparent",btnText:"X",onClick:n}),Object(d.jsxs)("div",{className:"modal",children:[Object(d.jsxs)("span",{className:"modal-info",children:[Object(d.jsx)("h1",{children:t.photographer}),Object(d.jsxs)("div",{className:"modal-actions",children:[Object(d.jsx)(f,{classN:"dlBtn",txtColor:"white",bgColor:"#7E4DD2",btnText:"Download",onClick:function(){return window.open(s)}}),Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{className:"dropDownBtn",classN:"ddBtn",txtColor:"white",bgColor:"#7E4DD2",btnText:Object(d.jsx)(O.a,{className:"img-actions-icons",icon:g.a,style:k}),onClick:function(){h(!u)}}),Object(d.jsx)("form",{className:"dropDown ".concat(!0===u&&"active"),name:"Size",id:"Size",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{id:"tiny",type:"radio",name:"sizes",onClick:function(){return i(t.src.tiny)}}),Object(d.jsx)("label",{htmlFor:"tiny",children:"Tiny"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{id:"small",type:"radio",name:"sizes",onClick:function(){return i(t.src.small)}}),Object(d.jsx)("label",{htmlFor:"small",children:"Small"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{id:"portrait",type:"radio",name:"sizes",onClick:function(){return i(t.src.portrait)}}),Object(d.jsx)("label",{htmlFor:"portrait",children:"Portrait"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{id:"original",type:"radio",name:"sizes",onClick:function(){return i(t.src.original)}}),Object(d.jsx)("label",{htmlFor:"original",children:"original"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{id:"medium",type:"radio",name:"sizes",onClick:function(){return i(t.src.medium)}}),Object(d.jsx)("label",{htmlFor:"medium",children:"Medium"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{id:"large",type:"radio",name:"sizes",onClick:function(){return i(t.src.large)}}),Object(d.jsx)("label",{htmlFor:"large",children:"Large"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{id:"large2",type:"radio",name:"sizes",onClick:function(){return i(t.src.large2x)}}),Object(d.jsx)("label",{htmlFor:"large2",children:"large x 2"})]})]})})]})]})]}),Object(d.jsx)("div",{className:"modal-img-container",children:Object(d.jsx)("img",{className:"modal-img",src:t.src.large})})]})]})};var S=function(){var e="563492ad6f91700001000001653e06666d1942be81ce3137b5a4417d",t=Object(c.useState)("https://api.pexels.com/v1/curated?per_page=8&page=1"),n=Object(j.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),i=Object(j.a)(s,2),u=i[0],h=i[1],p=Object(c.useState)({}),x=Object(j.a)(p,2),f=x[0],O=x[1],g=Object(c.useState)("Today's selection"),v=Object(j.a)(g,2),y=v[0],C=v[1],k=Object(c.useState)([]),S=Object(j.a)(k,2),T=S[0],z=S[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:return e.next=4,F(8,r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(){var t=Object(l.a)(o.a.mark((function t(){var n,c,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.pexels.com/v1/search?query=landscape",{headers:{Authorization:e}});case 2:return n=t.sent,t.next=5,n.json().catch((function(e){return console.log("Failed to fetch Header")}));case 5:c=t.sent,r=(new Date).getDate(),a=r>15?r%15:r,O({imgUrl:c.photos[a].src.original,name:c.photos[a].photographer});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(l.a)(o.a.mark((function t(){var n,c,r,a,s,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:8,c=i.length>1?i[1]:void 0,r=c.replace(/per_page=8/,"per_page=".concat(n)),t.next=5,fetch(r,{headers:{Authorization:e}});case 5:return a=t.sent,t.next=8,a.json().catch((function(e){return console.log("Failed to fetch Photos")}));case 8:s=t.sent,z(s.photos);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(m,{search:function(e){F(8,e),a(e)},query:function(e){return C(e)}}),"object"===typeof u&&Object(d.jsx)(w,{picInfo:u,close:function(){return h("")}}),Object(d.jsx)(b,{picUrl:f.imgUrl,posterName:f.name,search:function(e){F(8,e),a(e)},query:function(e){return C(e)}}),Object(d.jsx)(N,{GalaryTite:y,pics:T,onBtnClick:function(){return F(T.length+6,r)},modal:function(e){return function(e){var t=T.findIndex((function(t){return t.id==e}));h(T[t])}(e)}})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),T()}},[[26,1,2]]]);
//# sourceMappingURL=main.7502cf53.chunk.js.map