"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1},i="Matter",l={unversionedId:"intro",id:"intro",title:"Matter",description:"Matter is a modern ECS library for Roblox.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/matter/docs/intro",draft:!1,editUrl:"https://github.com/evaera/matter/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Installation",permalink:"/matter/docs/Installation"}},s={},c=[{value:"Goals",id:"goals",level:2},{value:"Non-goals",id:"non-goals",level:2},{value:"Performance today",id:"performance-today",level:2},{value:"Prior art",id:"prior-art",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"matter"},"Matter"),(0,n.kt)("p",null,"Matter is a modern ECS library for Roblox."),(0,n.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Still baking!")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Matter isn't quite ready for production yet. There might be bugs and missing features!"))),(0,n.kt)("p",null,"Matter is a pure ECS library with fast archetypical entity storage, automatic system scheduling, and a slick API featuring topologically-aware state. Matter empowers users to build games that are extensible, performant, and easy to debug."),(0,n.kt)("h2",{id:"goals"},"Goals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simple, obvious API"),(0,n.kt)("li",{parentName:"ul"},"Performant"),(0,n.kt)("li",{parentName:"ul"},"Great debuggability, error handling and insight into what's actually happening each frame"),(0,n.kt)("li",{parentName:"ul"},"Common patterns are easy to fall into and hard to mess up")),(0,n.kt)("h2",{id:"non-goals"},"Non-goals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Many similar libraries, ECS or not, end up with a bloated API, requiring significant cognitive overhead to use. We want to avoid this as much as possible."),(0,n.kt)("li",{parentName:"ul"},"We don't want to provide every thing the user could ever want in our library. Instead, it should be easy for users to write obvious code that does those things.")),(0,n.kt)("h2",{id:"performance-today"},"Performance today"),(0,n.kt)("p",null,"Matter currently achieves an average frame time of 0.65ms spent inside Matter code for the following benchmark:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"World with 1000 entities"),(0,n.kt)("li",{parentName:"ul"},"Between 2-30 components on each entity"),(0,n.kt)("li",{parentName:"ul"},"300 unique component types"),(0,n.kt)("li",{parentName:"ul"},"200 systems"),(0,n.kt)("li",{parentName:"ul"},"Each system queries between 1 and 10 components")),(0,n.kt)("h2",{id:"prior-art"},"Prior art"),(0,n.kt)("p",null,"Matter is inspired by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Ralith/hecs"},"hecs by Railith")," from the Rust ecosystem!"))}u.isMDXComponent=!0}}]);