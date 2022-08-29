"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5930],{4852:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(9231);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(a),d=l,b=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(b,o(o({ref:t},m),{},{components:a})):n.createElement(b,o({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8286:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9231),l=a(9841);const r="tabItem_bDAQ";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},3510:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(4011),l=a(9231),r=a(9841),o=a(8383),s=a(6720),p=a(412),i=a(2029);const m="tabList_J1bR",u="tabItem_lwZo";function c(e){var t,a;const{lazy:o,block:c,defaultValue:d,values:b,groupId:v,className:y}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=b?b:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===d?d:null!=(t=null!=d?d:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,p.U)(),[w,x]=(0,l.useState)(h),I=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=v){const e=T[v];null!=e&&e!==w&&f.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,a=I.indexOf(t),n=f[a].value;n!==w&&(O(t),x(n),null!=v&&N(v,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=I.indexOf(e.currentTarget)+1;a=null!=(n=I[t])?n:I[0];break}case"ArrowLeft":{var l;const t=I.indexOf(e.currentTarget)-1;a=null!=(l=I[t])?l:I[I.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>I.push(e),onKeyDown:D,onFocus:C,onClick:C},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},2711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(4011),l=(a(9231),a(4852)),r=a(3510),o=a(8286);const s={},p="Installation",i={unversionedId:"installation",id:"installation",title:"Installation",description:"ComposeDB packages are still under development and only released as a developer preview, they are not ready for production use.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/next/installation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Welcome to ComposeDB",permalink:"/docs/next/introduction"},next:{title:"Your first composite",permalink:"/docs/next/first-composite"}},m={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Development tools",id:"development-tools",level:2},{value:"CLI",id:"cli",level:3},{value:"Libraries",id:"libraries",level:3},{value:"Runtime libraries",id:"runtime-libraries",level:2},{value:"Using TypeScript",id:"using-typescript",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("admonition",{title:"Developer preview",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"ComposeDB packages are still under development and only released as a developer preview, they are ",(0,l.kt)("strong",{parentName:"p"},"not ready for production use"),"."),(0,l.kt)("p",{parentName:"admonition"},"There may be ",(0,l.kt)("strong",{parentName:"p"},"breaking changes")," between v0.x versions before a stable v1.0 version is released, causing models or composites created from previous versions not to be compatible.")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"ComposeDB runs on top of ",(0,l.kt)("a",{parentName:"p",href:"https://ceramic.network/"},"Ceramic"),". Running ",(0,l.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/build/cli/installation/"},"a local Ceramic node")," is needed for app development."),(0,l.kt)("h2",{id:"development-tools"},"Development tools"),(0,l.kt)("p",null,"ComposeDB provides libraries and a CLI to help support common development needs."),(0,l.kt)("p",null,"The CLI provides commands for the most common flows, while the libraries can be used in scripts to support more complex use-cases."),(0,l.kt)("h3",{id:"cli"},"CLI"),(0,l.kt)(r.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --location=global @composedb/cli\n"))),(0,l.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g @composedb/cli\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -g @composedb/cli\n")))),(0,l.kt)("h3",{id:"libraries"},"Libraries"),(0,l.kt)("p",null,"ComposeDB exposes two complementary development libraries: ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/modules/devtools"},(0,l.kt)("inlineCode",{parentName:"a"},"@composedb/devtools"))," for generic interactions with composites, and ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/modules/devtools_node"},(0,l.kt)("inlineCode",{parentName:"a"},"@composedb/devtools-node"))," with additional functions to interact with the local file system and start a local HTTP server."),(0,l.kt)(r.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @composedb/devtools @composedb/devtools-node\n"))),(0,l.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -D @composedb/devtools @composedb/devtools-node\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D @composedb/devtools @composedb/devtools-node\n")))),(0,l.kt)("h2",{id:"runtime-libraries"},"Runtime libraries"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/modules/client"},(0,l.kt)("inlineCode",{parentName:"a"},"@composedb/client"))," package exposes the primary APIs to interact with Ceramic based on a Composite definition."),(0,l.kt)(r.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @composedb/client\n"))),(0,l.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add @composedb/client\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @composedb/client\n")))),(0,l.kt)("h2",{id:"using-typescript"},"Using TypeScript"),(0,l.kt)("p",null,"You may need to install the ",(0,l.kt)("inlineCode",{parentName:"p"},"@composedb/types")," package used by the different libraries if you use TypeScript."),(0,l.kt)(r.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @composedb/types\n"))),(0,l.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -D @composedb/types\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D @composedb/types\n")))))}d.isMDXComponent=!0}}]);