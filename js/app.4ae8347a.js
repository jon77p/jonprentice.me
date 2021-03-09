(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},o={app:0},s=[];function r(t){return c.p+"js/"+({music:"music",privacy:"privacy"}[t]||t)+"."+{music:"3e1d26b6",privacy:"e03b8dac"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={music:1,privacy:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({music:"music",privacy:"privacy"}[t]||t)+"."+{music:"21244437",privacy:"2e22dd2b"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],f.parentNode.removeChild(f),a(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("MyNavbar"),a("router-view",{ref:"loadable",attrs:{host:t.host,publicPath:t.publicPath,ready:!t.loading}}),a("MyFooter")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"nav is-dark",attrs:{"fixed-top":!0}},[a("template",{slot:"brand"},[a("b-navbar-item",{attrs:{tag:"router-link",to:"/"}},[t._v(" jonprentice.me ")])],1),a("template",{slot:"start"},[a("b-navbar-item",{attrs:{tag:"router-link",to:"/"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-home"})]),t._v(" "),a("span",[t._v("Home")])]),a("b-navbar-item",{attrs:{tag:"router-link",to:"/privacy"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-file-alt"})]),t._v(" "),a("span",[t._v("Privacy")])]),a("b-navbar-item",{attrs:{tag:"router-link",to:"/music"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-headphones-alt"})]),t._v(" "),a("span",[t._v("Music")])]),a("b-navbar-item",{attrs:{tag:"router-link",to:"/blog"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-bookmark"})]),t._v(" "),a("span",[t._v("Blog")])])],1)],2)},r=[],c=a("2877"),l={},u=Object(c["a"])(l,s,r,!1,null,null,null),d=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container has-text-centered"},[t._m(0),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-half"},[a("div",{staticClass:"buttons has-addons is-centered"},t._l(t.social,(function(t){return a("b-button",{key:t.account,staticClass:"is-large",attrs:{"icon-left":t.icon,tag:t.link?"a":"button",href:t.link,target:"_blank"}})})),1)])]),a("hr"),a("p",[t._v("Developed and maintained by Jon Prentice © 2020")]),t._m(1)])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-half"},[a("h3",{staticClass:"subtitle"},[t._v("Social Media")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Please report any site issues on this site's "),a("a",{staticClass:"button is-small",attrs:{href:"https://github.com/jon77p/jonprentice.me",target:"__blank"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"mdi mdi-github-circle mdi-24px"})]),a("span",[t._v("Github")])]),t._v(" repository. ")])}],v=a("2f62"),h={computed:Object(v["b"])({connected:function(t){return t.connected},social:function(t){return t.socialAccounts}}),watch:{connected:function(){this.connected&&this.$store.dispatch("loadSocial")}}},m=h,b=Object(c["a"])(m,f,p,!1,null,null,null),g=b.exports,y={data:function(){return{host:"jonprentice.me",publicPath:"/",connected:!1,loading:!1}},components:{MyNavbar:d,MyFooter:g},computed:Object(v["b"])({status:function(t){return t.connected},social:function(t){return t.socialAccounts}}),methods:{apiFailure:function(){this.$buefy.toast.open({duration:99999,message:"Failed to connect to the API!",position:"is-top",type:"is-danger"})},ping:function(){var t=this;this.loading=!0;var e=this.$refs.loadable?this.$buefy.loading.open({container:this.$refs.loadable.$el}):null;return this.$store.dispatch("ping").then((function(){t.loading=!1,e&&e.close()}),(function(){t.loading=!1,e.close()}))}},watch:{status:function(){var t=this;this.ping().then((function(){t.status||t.apiFailure()}))}},mounted:function(){this.ping()}},_=y,C=(a("034f"),Object(c["a"])(_,i,o,!1,null,null,null)),P=C.exports,w=(a("d3b7"),a("8c4f")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero is-primary is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title",attrs:{id:"welcome"}},[t._v("Welcome to "+t._s(t.host)+"!")])])])]),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-two-thirds"},[a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated rubberBand","leave-active-class":"animated zoomOut"}},[t.connected?a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-128x128"},[a("img",{staticClass:"is-rounded",attrs:{src:t.publicPath+"profile.jpg",alt:"Image"}})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("nav",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("p",[a("strong",[t._v("Jon Prentice")])])]),a("div",{staticClass:"level-item"},[a("a",{attrs:{href:t.publicPath+"social"}},[a("small",[t._v("@jon77p")])])]),a("div",{staticClass:"level-item"},[a("p",[a("small",[t._v(t._s(t.updated))])])])])]),a("p",[t._v(" If you see this page, you have successfully connected to my personal website. "),a("br"),t._v(" Further configuration is "),a("em",[t._v("still")]),t._v(" required. ")]),a("p",[t._v(" For online documentation and support please refer to "),a("a",{attrs:{href:t.publicPath+"src",target:"__blank"}},[t._v(t._s(t.host)+"/src")]),t._v(". ")]),a("p",[a("em",[t._v(" Thank you for using "),a("a",{attrs:{href:""+t.publicPath}},[t._v(t._s(t.host))]),t._v(". ")])]),a("p",[a("em",[t._v("— Jon Prentice")])])])])])])]):t._e()])],1)])])},j=[],M=(a("0d03"),a("6d1f")),O={name:"home",props:["host","publicPath","ready"],computed:{connected:function(){return this.$store.state.connected&&this.ready},updated:function(){if(this.connected){var t=new Date,e=new Date(this.$store.state.updated);return Object(M["a"])(t,e)}return""}}},S=O,E=Object(c["a"])(S,k,j,!1,null,null,null),$=E.exports,x=(a("9911"),a("bc3a")),A=a.n(x);n["a"].use(v["a"]);var T="https://api.jonprentice.me",F={connected:null,updated:null,music:[],privacyPolicy:"",socialAccounts:[]},N={connected:function(t,e){t.connected=e.status,t.updated=e.updated},loadedMusic:function(t,e){t.music=e.music},loadedPrivacyPolicy:function(t,e){t.privacyPolicy=e.policy},loadedSocial:function(t,e){t.socialAccounts=e.social}},B={loadMusic:function(t){var e=t.commit;return A.a.get("".concat(T,"/music")).then((function(t){e("loadedMusic",t.data)}))},loadPrivacyPolicy:function(t){var e=t.commit;return A.a.get("".concat(T,"/privacy")).then((function(t){e("loadedPrivacyPolicy",t.data)}))},loadSocial:function(t){var e=t.commit;return A.a.get("".concat(T,"/social")).then((function(t){e("loadedSocial",t.data)}))},loadSrc:function(t){t.commit;return A.a.get("".concat(T,"/src")).then((function(t){return t.data.link}))},ping:function(t){var e=t.commit;return A.a.get("".concat(T)).then((function(t){e("connected",{status:!0,updated:t.data.updated})}),(function(){e("connected",{status:!1})}))}},D=new v["a"].Store({state:F,mutations:N,actions:B,strict:!1});n["a"].use(w["a"]);var I=[{path:"/",name:"home",component:$},{path:"/privacy",name:"privacy",component:function(){return a.e("privacy").then(a.bind(null,"6f9f"))}},{path:"/music",name:"music",component:function(){return a.e("music").then(a.bind(null,"5125"))}},{path:"/src",beforeEnter:function(t,e,a){D.dispatch("loadSrc").then((function(t){window.location.href=t}))}},{path:"/blog",name:"blog",component:function(){return a.e("music").then(a.bind(null,"fd3f"))}}],J=new w["a"]({mode:"history",base:"/",routes:I}),L=J,q=a("289d");a("5abe");n["a"].config.productionTip=!1,n["a"].use(q["a"],{defaultIconPack:"fab"}),new n["a"]({router:L,store:D,render:function(t){return t(P)}}).$mount("#app")},"6d1f":function(t,e,a){"use strict";var n=function(t,e){var a=t.getTime()-e.getTime(),n=Math.abs(a),i=Math.floor(n/1e3/60/60/24/365);n-=1e3*i*60*60*24*365;var o=Math.floor(n/1e3/60/60/24/7/30);n-=1e3*o*60*60*24*7*30;var s=Math.floor(n/1e3/60/60/24/7);n-=1e3*s*60*60*24*7;var r=Math.floor(n/1e3/60/60/24);n-=1e3*r*60*60*24;var c=Math.floor(n/1e3/60/60);n-=1e3*c*60*60;var l=Math.floor(n/1e3/60);n-=1e3*l*60;var u=Math.floor(n/1e3);return n-=1e3*u,i>0?"+".concat(i," years ago"):o>0?"+".concat(o," months ago"):s>0?"+".concat(s," weeks ago"):r>0?"+".concat(r," days ago"):c>0?"+".concat(c,"hrs ago"):l>0?"+".concat(l,"mins ago"):u>0?"+".concat(u,"s ago"):null};e["a"]=n},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.4ae8347a.js.map