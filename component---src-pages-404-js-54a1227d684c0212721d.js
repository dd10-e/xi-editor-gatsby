(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,n){"use strict";n.r(t);var a=n(6),r=(n(0),n(154));t.default=function(){return Object(a.jsx)(r.a,null,Object(a.jsx)("h1",null,"NOT FOUND"),Object(a.jsx)("p",null,"You just hit a route that doesn't exist... the sadness."))}},153:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return x}),n.d(t,"StaticQuery",function(){return b});var a=n(6),r=n(0),s=n.n(r),i=n(4),c=n.n(i),o=n(152),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(157),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var j=n(33);n.d(t,"parsePath",function(){return j.a});var x=s.a.createContext({}),b=function(e){return Object(a.jsx)(x.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.jsx)("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,n){"use strict";var a=n(6),r=n(160),s=(n(161),n(0)),i=n.n(s),c=n(4),o=n.n(c),l=n(155),u=n.n(l),d=n(153),j=n(8),x=n.n(j),b=n(50),p=n.n(b),f=function(e){function t(){return e.apply(this,arguments)||this}return x()(t,e),t.prototype.render=function(){return Object(a.jsx)(s.Fragment,null,Object(a.jsx)("input",{id:"search",autoComplete:"off",className:"w-full py-2 text-grey-darkest pl-4 pr-10 rounded focus:border-grey-light",placeholder:"Search...",type:"text"}),Object(a.jsx)("div",{className:"flex items-center"},Object(a.jsx)("svg",{className:"fill-current text-grey-dark inline-block h-4 w-4 -ml-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Object(a.jsx)("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}))))},t}(i.a.Component),m=function(e){return Object(a.jsx)(d.Link,{to:e.to,className:"inline-block no-underline text-base uppercase text-white font-semibold py-4 px-6 border-b-4 border-transparent hover:border-green",activeClassName:"border-green"},e.title)},g=function(e){function t(){var t;return(t=e.call(this)||this).state={navActivated:!1},t.toggleNav=t.toggleNav.bind(p()(p()(t))),t}x()(t,e);var n=t.prototype;return n.toggleNav=function(){this.setState(function(e){return{navActivated:!e.navActivated}})},n.render=function(){return Object(a.jsx)("header",{className:"flex flex-col flex-no-shrink"},Object(a.jsx)("div",{className:"bg-xi-blue-dark"},Object(a.jsx)("div",{className:"container mx-auto"},Object(a.jsx)("div",{className:"flex justify-between items-center py-4"},Object(a.jsx)("div",{className:"flex items-center"},Object(a.jsx)(d.Link,{to:"/",className:"text-white no-underline flex items-center"},Object(a.jsx)("img",{src:"/img/logo.png",alt:"logo",className:"w-8"})),Object(a.jsx)("p",{className:"ml-4 font-thin text-xl text-white"},"Xi-Editor")),Object(a.jsx)("div",null,Object(a.jsx)("div",{className:"flex absolute pin-t pin-r mt-4 mr-4 md:mt-0 md:relative"},Object(a.jsx)(f,null)))))),Object(a.jsx)("div",{className:"bg-xi-blue"},Object(a.jsx)("div",{className:"container mx-auto"},Object(a.jsx)("div",{className:"flex justify-between items-center"},Object(a.jsx)("div",{className:"-ml-2 pt-2"},Object(a.jsx)(m,{to:"/",title:"home"}),Object(a.jsx)(m,{to:"/documentation/config",title:"docs"}),Object(a.jsx)(m,{to:"/gsoc/gsoc",title:"gsoc"}),Object(a.jsx)(m,{to:"/contribute",title:"contribute"}),Object(a.jsx)(m,{to:"/building-docs",title:"buildind docs"}),Object(a.jsx)(m,{to:"/blog",title:"blog"}))))))},t}(i.a.Component);g.propTypes={siteTitle:o.a.string},g.defaultProps={siteTitle:""};var h=g,v=function(){return Object(a.jsx)("footer",{className:"flex-no-shrink border-t pt-4 pb-10 w-full pt-8 px-8"},Object(a.jsx)("p",{className:"text-xs text-xi-blue-dark"},"See the"," ",Object(a.jsx)("a",{href:"https://github.com/xi-editor/xi-editor",className:"text-xi-blue-dark hover:text-xi-blue font-semibold"},"GitHub Project")))},O=function(e){var t=e.children,n=e.centered;return Object(a.jsx)(d.StaticQuery,{query:"755544856",render:function(e){return Object(a.jsx)("div",{className:"h-full w-full flex flex-col items-stretch font-sans"},Object(a.jsx)(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},Object(a.jsx)("html",{lang:"en"}),Object(a.jsx)("link",{rel:"icon",type:"image/png",href:"img/logo.png",sizes:"16x16"})),Object(a.jsx)(h,{siteTitle:e.site.siteMetadata.title}),Object(a.jsx)("main",{role:"main",className:"flex-1 "+(n?"container mx-auto":"")},t),Object(a.jsx)(v,null))},data:r})};O.propTypes={children:o.a.node.isRequired,centered:o.a.bool},O.defaultProps={centered:!0};t.a=O},157:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},159:function(e,t,n){"use strict";n.r(t);n(51);var a=n(0),r=n.n(a),s=n(4),i=n.n(s),c=n(53),o=n(2),l=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tailwindcss"}}}}},161:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-404-js-54a1227d684c0212721d.js.map