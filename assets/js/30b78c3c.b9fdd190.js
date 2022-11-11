"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2565],{4852:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(9231);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),l=p(o),u=r,f=l["".concat(c,".").concat(u)]||l[u]||m[u]||s;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=l;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<s;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}l.displayName="MDXCreateElement"},90:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var n=o(9675),r=(o(9231),o(4852)),s=o(6877),i=o(8941);const a={},c="Data composition",p={unversionedId:"guides/data-composition",id:"version-0.2.x/guides/data-composition",title:"Data composition",description:"Data composition is at the heart of ComposeDB, using composites as a proxy for datasets of documents relevant to applications and services.",source:"@site/versioned_docs/version-0.2.x/guides/data-composition.mdx",sourceDirName:"guides",slug:"/guides/data-composition",permalink:"/docs/0.2.x/guides/data-composition",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Concepts overview",permalink:"/docs/0.2.x/guides/concepts-overview"},next:{title:"Using composites",permalink:"/docs/0.2.x/category/using-composites"}},d={},m=[{value:"Models composition",id:"models-composition",level:2}],l={toc:m};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-composition"},"Data composition"),(0,r.kt)("p",null,"Data composition is at the heart of ComposeDB, using ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/concepts-overview#composites"},"composites")," as a proxy for datasets of ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/concepts-overview#documents"},"documents")," relevant to applications and services."),(0,r.kt)("p",null,"Composites represent sets of ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/concepts-overview#models"},"models")," that can be used to query, create and update documents, therefore it is important for developers to identify models to use, whether by ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/using-composites/discovery"},"reusing models already adopted by the ecosystem")," in order to access the set of documents already created using these models, or ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/creating-composites/overview"},"creating new models")," that would better suit specific needs."),(0,r.kt)("h2",{id:"models-composition"},"Models composition"),(0,r.kt)("p",null,"The following schema describes how composites can be created by ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/using-composites/customization#merging-composites"},"merging existing composites")," (composites ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"A'")," below) and ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.x/guides/using-composites/customization#extracting-models"},"extracting models from a composite")," (composites ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"F")," below)."),(0,r.kt)("p",null,"The same datasets can be represented by different composites, such as the composites ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"A'")," below that contain the same models."),(0,r.kt)(i.Z,{alt:"Models composition schema",sources:{light:(0,s.Z)("/img/models-composition-light.png"),dark:(0,s.Z)("/img/models-composition-dark.png")},mdxType:"ThemedImage"}))}u.isMDXComponent=!0}}]);