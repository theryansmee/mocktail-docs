"use strict";(self.webpackChunkMocktail=self.webpackChunkMocktail||[]).push([[948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,b=m["".concat(c,".").concat(g)]||m[g]||u[g]||l;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],i={slug:"long-blog-post",title:"Long Blog Post",authors:"endi",tags:["hello","docusaurus"]},c=void 0,p={permalink:"/blog/long-blog-post",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019-05-29-long-blog-post.md",source:"@site/blog/2019-05-29-long-blog-post.md",title:"Long Blog Post",description:"This is the summary of a very long blog post,",date:"2019-05-29T00:00:00.000Z",formattedDate:"May 29, 2019",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:2.05,truncated:!0,authors:[{name:"Endilie Yacop Sucipto",title:"Maintainer of Docusaurus",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"endi"}],prevItem:{title:"MDX Blog Post",permalink:"/blog/mdx-blog-post"},nextItem:{title:"First Blog Post",permalink:"/blog/first-blog-post"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is the summary of a very long blog post,"),(0,l.kt)("p",null,"Use a ",(0,l.kt)("inlineCode",{parentName:"p"},"\x3c!--")," ",(0,l.kt)("inlineCode",{parentName:"p"},"truncate")," ",(0,l.kt)("inlineCode",{parentName:"p"},"--\x3e")," comment to limit blog post size in the list view."))}g.isMDXComponent=!0}}]);