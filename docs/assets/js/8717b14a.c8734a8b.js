"use strict";(self.webpackChunkMocktail=self.webpackChunkMocktail||[]).push([[948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,f=m["".concat(p,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={slug:"long-blog-post",title:"Long Blog Post",authors:"endi",tags:["hello","docusaurus"]},p=void 0,c={permalink:"/blog/long-blog-post",source:"@site/blog/2019-05-29-long-blog-post.md",title:"Long Blog Post",description:"This is the summary of a very long blog post,",date:"2019-05-29T00:00:00.000Z",formattedDate:"May 29, 2019",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:2.05,truncated:!0,authors:[{name:"Endilie Yacop Sucipto",title:"Maintainer of Docusaurus",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"endi"}],prevItem:{title:"MDX Blog Post",permalink:"/blog/mdx-blog-post"},nextItem:{title:"First Blog Post",permalink:"/blog/first-blog-post"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the summary of a very long blog post,"),(0,a.kt)("p",null,"Use a ",(0,a.kt)("inlineCode",{parentName:"p"},"\x3c!--")," ",(0,a.kt)("inlineCode",{parentName:"p"},"truncate")," ",(0,a.kt)("inlineCode",{parentName:"p"},"--\x3e")," comment to limit blog post size in the list view."))}g.isMDXComponent=!0}}]);