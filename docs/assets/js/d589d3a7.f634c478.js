"use strict";(self.webpackChunkMocktail=self.webpackChunkMocktail||[]).push([[162],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>p});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var d=n.createContext({}),c=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(d.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),g=c(a),m=i,p=g["".concat(d,".").concat(m)]||g[m]||u[m]||r;return a?n.createElement(p,o(o({ref:e},s),{},{components:a})):n.createElement(p,o({ref:e},s))}));function p(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[g]="string"==typeof t?t:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9305:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={sidebar_position:1},d="Getting Started",c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Mocktail is still in Beta so if you find any bugs with the app or issues with these docs, please report them on GitHub",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/theryansmee/mocktail-docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Request",permalink:"/docs/endpoints/request"}},s={},g=[{value:"What is Mocktail?",id:"what-is-mocktail",level:2},{value:"Download Mocktail",id:"download-mocktail",level:2},{value:"Adding domains to the domain whitelist",id:"adding-domains-to-the-domain-whitelist",level:2}],u={toc:g},m="wrapper";function p(t){var e=t.components,l=(0,i.Z)(t,o);return(0,r.kt)(m,(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Mocktail is still in Beta so if you find any bugs with the app or issues with these docs, please report them on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/theryansmee/mocktail-docs/issues"},"GitHub"))),(0,r.kt)("h2",{id:"what-is-mocktail"},"What is Mocktail?"),(0,r.kt)("p",null,"Mocktail is a simple desktop application for Mac & Windows that allows you to quickly mock/stub endpoints."),(0,r.kt)("h2",{id:"download-mocktail"},"Download Mocktail"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"OS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Verison"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Download"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{alt:"fa-apple",src:a(669).Z,width:"11",height:"14"})," Mac"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.0.0-beta.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/theryansmee/mocktail-docs/releases/latest/download/Mocktail-x64.dmg"},"Download"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{alt:"fa-apple",src:a(669).Z,width:"11",height:"14"})," Mac (Silicon)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.0.0-beta.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/theryansmee/mocktail-docs/releases/latest/download/Mocktail-arm64.dmg"},"Download"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{alt:"fa-windows",src:a(5677).Z,width:"11",height:"12"})," Windows (x64)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Deprecated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,r.kt)("h2",{id:"adding-domains-to-the-domain-whitelist"},"Adding domains to the domain whitelist"),(0,r.kt)("p",null,"Once you have Mocktail downloaded, all you need to do before you get started is add your request urls the domain whitelist.\nIf you are making requesting to Mocktail from ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," on ports ",(0,r.kt)("inlineCode",{parentName:"p"},"4200"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"3000")," then you can skip this step as there are added to the whitelist by default. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting panel example",src:a(874).Z,width:"2424",height:"1624"})),(0,r.kt)("p",null,'Click the "App Settings" button at the bottom fo the left hand side menu'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Settings menu button",src:a(8265).Z,width:"250",height:"69"})),(0,r.kt)("p",null,'Click the "Add domain" button under the domain white list section, and add the domain.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Domain white list example",src:a(2046).Z,width:"350",height:"174"})),(0,r.kt)("p",null,'Click the "Save" button in the bottom right hand side of the screen. If successful you will be prompted to restart Mocktail.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Domain white list example",src:a(3473).Z,width:"380",height:"181"})))}p.isMDXComponent=!0},2046:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/domain-whitelist-example-91c789eb152a997cdb8f19ae50a0b795.png"},3473:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/restart-mocktail-message-190cdb8f9a28b5c4260559af384e876f.png"},8265:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"},874:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/settings-panel-example-332c7af41ccb3165625bca3a2d714a5c.png"},669:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIiB3aWR0aD0iMTEiPgoJPCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjIuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+Cgk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzE4LjcgMjY4LjdjLS4yLTM2LjcgMTYuNC02NC40IDUwLTg0LjgtMTguOC0yNi45LTQ3LjItNDEuNy04NC43LTQ0LjYtMzUuNS0yLjgtNzQuMyAyMC43LTg4LjUgMjAuNy0xNSAwLTQ5LjQtMTkuNy03Ni40LTE5LjdDNjMuMyAxNDEuMiA0IDE4NC44IDQgMjczLjVxMCAzOS4zIDE0LjQgODEuMmMxMi44IDM2LjcgNTkgMTI2LjcgMTA3LjIgMTI1LjIgMjUuMi0uNiA0My0xNy45IDc1LjgtMTcuOSAzMS44IDAgNDguMyAxNy45IDc2LjQgMTcuOSA0OC42LS43IDkwLjQtODIuNSAxMDIuNi0xMTkuMy02NS4yLTMwLjctNjEuNy05MC02MS43LTkxLjl6bS01Ni42LTE2NC4yYzI3LjMtMzIuNCAyNC44LTYxLjkgMjQtNzIuNS0yNC4xIDEuNC01MiAxNi40LTY3LjkgMzQuOS0xNy41IDE5LjgtMjcuOCA0NC4zLTI1LjYgNzEuOSAyNi4xIDIgNDkuOS0xMS40IDY5LjUtMzQuM3oiLz4KPC9zdmc+Cg=="},5677:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iMTEiPgoJPCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjIuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+Cgk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCA5My43bDE4My42LTI1LjN2MTc3LjRIMFY5My43em0wIDMyNC42bDE4My42IDI1LjNWMjY4LjRIMHYxNDkuOXptMjAzLjggMjhMNDQ4IDQ4MFYyNjguNEgyMDMuOHYxNzcuOXptMC0zODAuNnYxODAuMUg0NDhWMzJMMjAzLjggNjUuN3oiLz4KPC9zdmc+Cg=="}}]);