"use strict";(self.webpackChunkMocktail=self.webpackChunkMocktail||[]).push([[13],{4835:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(3366),r=a(7294),n=a(6010),s=a(6113),c=a(9960);const i="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",g="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var b=a(5999);function E(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var p=["sidebar","toc","children"];const v=function(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,l.Z)(e,p),m=t&&t.items.length>0;return r.createElement(s.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(E,{sidebar:t})),r.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))}},6236:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(7294),r=a(4835),n=a(5706),s=a(6703);const c="tag_7kA+";function i(e){var t=e.letterEntry;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return l.createElement("li",{key:e.permalink,className:c},l.createElement(n.Z,e))}))),l.createElement("hr",null))}const m=function(e){var t=e.tags,a=(0,s.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return l.createElement(i,{key:e.letter,letterEntry:e})})))};const o=function(e){var t=e.tags,a=e.sidebar,n=(0,s.MA)();return l.createElement(r.Z,{title:n,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,n),l.createElement(m,{tags:Object.values(t)}))}},5706:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),r=a(6010),n=a(9960);const s="tag_WK-t",c="tagRegular_LXbV",i="tagWithCount_S5Zl";const m=function(e){var t,a=e.permalink,m=e.name,o=e.count;return l.createElement(n.Z,{href:a,className:(0,r.Z)(s,(t={},t[c]=!o,t[i]=o,t))},m,o&&l.createElement("span",null,o))}}}]);