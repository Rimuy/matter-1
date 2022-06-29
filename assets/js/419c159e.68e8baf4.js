"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:4},a="Using CollectionService tags",c={unversionedId:"BestPractices/CollectionService",id:"BestPractices/CollectionService",title:"Using CollectionService tags",description:"As a pure ECS first and foremost, Matter provides no special functionality for CollectionService tags out of the box. However, it's rather simple to implement this yourself. Here's an example taken from the official Matter example game.",source:"@site/docs/BestPractices/CollectionService.md",sourceDirName:"BestPractices",slug:"/BestPractices/CollectionService",permalink:"/matter/docs/BestPractices/CollectionService",draft:!1,editUrl:"https://github.com/evaera/matter/edit/main/docs/BestPractices/CollectionService.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Reconciliation",permalink:"/matter/docs/BestPractices/Reconciliation"},next:{title:"Why ECS",permalink:"/matter/docs/WhyECS"}},s={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-collectionservice-tags"},"Using CollectionService tags"),(0,o.kt)("p",null,"As a pure ECS first and foremost, Matter provides no special functionality for CollectionService tags out of the box. However, it's rather simple to implement this yourself. Here's an example taken from the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evaera/matter/tree/main/example/server"},"Matter example game"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local boundTags = {\n    Spinner = Components.Spinner,\n}\n\nlocal function spawnBound(instance, component)\n    local id = world:spawn(\n        component(),\n        Components.Bind({\n            instance = instance,\n        }),\n        Components.Transform({\n            cframe = instance.CFrame,\n        })\n    )\n\n    instance:SetAttribute("entityId", id)\nend\n\nfor tagName, component in pairs(boundTags) do\n    for _, instance in ipairs(CollectionService:GetTagged(tagName)) do\n        spawnBound(instance, component)\n    end\n\n    CollectionService:GetInstanceAddedSignal(tagName):Connect(function(instance)\n        spawnBound(instance, component)\n    end)\n\n    CollectionService:GetInstanceRemovedSignal(tagName):Connect(function(instance)\n        local id = instance:GetAttribute("entityId")\n        if id then\n            world:despawn(id)\n        end\n    end)\nend\n')),(0,o.kt)("p",null,"This example can be modified to meet your game's needs as you see fit."))}m.isMDXComponent=!0}}]);