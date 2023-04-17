"use strict";(self.webpackChunkMocktail=self.webpackChunkMocktail||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4805:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="Response",p={unversionedId:"endpoints/response",id:"endpoints/response",title:"Response",description:"Mocktail is still in Alpha so if you find any bugs with the app or issues with these docs, please report them on GitHub",source:"@site/docs/endpoints/response.md",sourceDirName:"endpoints",slug:"/endpoints/response",permalink:"/docs/endpoints/response",editUrl:"https://github.com/theryansmee/mocktail-docs/docs/endpoints/response.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Request",permalink:"/docs/endpoints/request"},next:{title:"Response Body",permalink:"/docs/endpoints/response-body"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Status code",id:"status-code",children:[],level:2},{value:"Generate from seed",id:"generate-from-seed",children:[],level:2}],m={toc:d};function c(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"response"},"Response"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Mocktail is still in Alpha so if you find any bugs with the app or issues with these docs, please report them on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/theryansmee/mocktail-docs/issues"},"GitHub")))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The response is broken down into 2 sections; the Response and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/endpoints/response-body"},"Response Body"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Response body")," section defines the shape of the data that is returned from your endpoint and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," section defined how the data is returned."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Response section example",src:n(8505).Z})),(0,o.kt)("h2",{id:"status-code"},"Status code"),(0,o.kt)("p",null,"You can use this to set which response code is returned by the endpoint (and if its successful or not)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Status code dropdown example",src:n(1189).Z})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Response codes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 200 OK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 201 Created")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 202 Accepted")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 203 Non-Authoritative Information")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 204 No Content")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 205 Reset Content")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 206 Partial Content")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 207 Multi-Status (WebDAV)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 208 Already Reported (WebDAV)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2705 226 IM Used")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u274c 301 Moved Permanently")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u274c 400 Bad Request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u274c 403 Forbidden")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u274c 404 Not Found")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u274c 410 Gone")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\ud83e\uded6 418 I'm a teapot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u274c 500 Internal Server Error")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u274c 503 Service Unavailable")))),(0,o.kt)("h2",{id:"generate-from-seed"},"Generate from seed"),(0,o.kt)("p",null,"While outlining your response body there are a lot of options to make the data and totals dynamic, but sometimes a user will need the response to be the same every time an endpoint is called. To achieve this they can set a seed value. "),(0,o.kt)("p",null,"To do this you need to do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Toggle ",(0,o.kt)("inlineCode",{parentName:"li"},"Generate from seed")," to true (the toggle will turn green and the ",(0,o.kt)("inlineCode",{parentName:"li"},"Seed value")," field will appear)"),(0,o.kt)("li",{parentName:"ol"},'Click save. The response values will now be generated from the default seed "I \u2764\ufe0f Mocktail"'),(0,o.kt)("li",{parentName:"ol"},"You can play around with which fixed results are returned by changing the seed value to any string of a mixture of alphanumeric/emoji characters")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Status code dropdown example",src:n(8242).Z})))}c.isMDXComponent=!0},8505:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/response-example-2f72ed15213bbc39ec4ee7026851f66a.png"},8242:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/seed-example-a781539164dbb3bdd10fec9ae720fb5c.png"},1189:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);