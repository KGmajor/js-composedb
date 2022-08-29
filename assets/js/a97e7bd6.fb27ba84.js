"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2248],{4852:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>d});var n=t(9231);function s(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){s(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,s=function(e,o){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(s[t]=e[t]);return s}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},m=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=s,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return t?n.createElement(g,a(a({ref:o},m),{},{components:t})):n.createElement(g,a({ref:o},m))}));function d(e,o){var t=arguments,s=o&&o.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=u;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<r;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8286:(e,o,t)=>{t.d(o,{Z:()=>a});var n=t(9231),s=t(9841);const r="tabItem_bDAQ";function a(e){let{children:o,hidden:t,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,a),hidden:t},o)}},3510:(e,o,t)=>{t.d(o,{Z:()=>d});var n=t(4011),s=t(9231),r=t(9841),a=t(8383),i=t(6720),l=t(412),c=t(2029);const m="tabList_J1bR",p="tabItem_lwZo";function u(e){var o,t;const{lazy:a,block:u,defaultValue:d,values:g,groupId:v,className:f}=e,b=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:b.map((e=>{let{props:{value:o,label:t,attributes:n}}=e;return{value:o,label:t,attributes:n}})),y=(0,i.l)(h,((e,o)=>e.value===o.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const C=null===d?d:null!=(o=null!=d?d:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?o:b[0].props.value;if(null!==C&&!h.some((e=>e.value===C)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:k}=(0,l.U)(),[E,j]=(0,s.useState)(C),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=v){const e=w[v];null!=e&&e!==E&&h.some((o=>o.value===e))&&j(e)}const O=e=>{const o=e.currentTarget,t=x.indexOf(o),n=h[t].value;n!==E&&(T(o),j(n),null!=v&&k(v,String(n)))},N=e=>{var o;let t=null;switch(e.key){case"ArrowRight":{var n;const o=x.indexOf(e.currentTarget)+1;t=null!=(n=x[o])?n:x[0];break}case"ArrowLeft":{var s;const o=x.indexOf(e.currentTarget)-1;t=null!=(s=x[o])?s:x[x.length-1];break}}null==(o=t)||o.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",m)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},f)},h.map((e=>{let{value:o,label:t,attributes:a}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===o?0:-1,"aria-selected":E===o,key:o,ref:e=>x.push(e),onKeyDown:N,onFocus:O,onClick:O},a,{className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":E===o})}),null!=t?t:o)}))),a?(0,s.cloneElement)(b.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},b.map(((e,o)=>(0,s.cloneElement)(e,{key:o,hidden:e.props.value!==E})))))}function d(e){const o=(0,a.Z)();return s.createElement(u,(0,n.Z)({key:String(o)},e))}},7445:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(4011),s=(t(9231),t(4852)),r=t(3510),a=t(8286);const i={},l="Composites customization",c={unversionedId:"guides/using-composites/customization",id:"version-0.2.x/guides/using-composites/customization",title:"Composites customization",description:"Merging composites",source:"@site/versioned_docs/version-0.2.x/guides/using-composites/customization.mdx",sourceDirName:"guides/using-composites",slug:"/guides/using-composites/customization",permalink:"/docs/0.2.x/guides/using-composites/customization",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Composites deployment",permalink:"/docs/0.2.x/guides/using-composites/deployment"},next:{title:"Creating Composites",permalink:"/docs/0.2.x/guides/creating-composites/overview"}},m={},p=[{value:"Merging composites",id:"merging-composites",level:2},{value:"Extracting models",id:"extracting-models",level:2},{value:"Aliasing Models",id:"aliasing-models",level:2}],u={toc:p};function d(e){let{components:o,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"composites-customization"},"Composites customization"),(0,s.kt)("h2",{id:"merging-composites"},"Merging composites"),(0,s.kt)("p",null,"Multiple composites can be merged together into a single composite including all the models from the source composites."),(0,s.kt)(r.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"api",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { readEncodedComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\nconst ceramic = new CeramicClient('http://localhost:7007')\n\nconst loadSources = [\n  'src/first-composite.json',\n  'src/second-composite.json',\n  'src/third-composite.json',\n].map(async (path) => await readEncodedComposite(ceramic, path))\nconst sourceComposites = await Promise.all(loadSources)\nconst mergedComposite = Composite.from(sourceComposites)\n\nawait writeEncodedComposite(mergedComposite, 'merged-composite.json')\n"))),(0,s.kt)(a.Z,{value:"cli",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:merge src/first-composite.json src/second-composite.json src/third-composite.json --output=merged-composite.json\n")))),(0,s.kt)("h2",{id:"extracting-models"},"Extracting models"),(0,s.kt)("p",null,"Composites can contain more models than useful to a given app. To avoid using unnecessary models, it is possible to extract only the wanted models from a given composite, to create a new composite."),(0,s.kt)(r.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"api",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { readEncodedComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\nconst ceramic = new CeramicClient('http://localhost:7007')\nconst sourceComposite = await readEncodedComposite(ceramic, 'source-composite.json')\n\nconst newComposite = sourceComposite.copy(['modelID1', 'modelID2'])\nawait writeEncodedComposite(mergedComposite, 'new-composite.json')\n"))),(0,s.kt)(a.Z,{value:"cli",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:from-model source-composite.json modelID1 modelID2 --output=new-composite.json\n")))),(0,s.kt)("h2",{id:"aliasing-models"},"Aliasing Models"),(0,s.kt)("p",null,"Models can be aliases in a given composite, so that the GraphQL Schema uses the provided names instead of the ones defined in the model definition."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { readEncodedComposite, writeEncodedComposite } from '@composedb/devtools-node'\n\nconst sourceComposite = await readEncodedComposite(ceramic, 'source-composite.json')\n\nconst newComposite = sourceComposite.setAliases({\n  'kjz...123': 'SomeName',\n  'kjz...456': 'SomeOtherName',\n})\nawait writeEncodedComposite(newComposite, 'new-composite.json')\n")))}d.isMDXComponent=!0}}]);