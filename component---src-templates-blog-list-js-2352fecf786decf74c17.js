(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return x});n(84),n(175);var r=n(9),a=n.n(r),i=n(7),s=n(0),l=n.n(s),o=n(165),c=n.n(o),u=n(163),d=n(164),b=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,n=this.props.pageContext,r=n.currentPage,a=n.numPages,s=1===r,l=r===a,o=r-1==1?"/":r-1,b=r+1;return Object(i.jsx)(d.a,null,Object(i.jsx)(c.a,{title:" "+e.site.siteMetadata.title+" | Blog"}),Object(i.jsx)("h1",{className:"ml-4 md:ml-0 mt-4 text-xi-blue-dark"},"Latest Blog Post"),Object(i.jsx)("div",{className:"ml-4 md:ml-0 border-t-4 border-xi-blue w-24 mt-4 mb-8"}),Object(i.jsx)("ul",{className:"mx-4 md:mx-0 flex flex-col my-8 pb-6 rounded list-reset"},t.map(function(e){var t=e.node;return Object(i.jsx)("li",{key:t.id,className:"border p-4 my-4 py-4 text-lg"},Object(i.jsx)("div",{className:"flex justify-between items-center"},Object(i.jsx)(u.Link,{to:"blog/"+t.fields.slug,className:"flex items-center no-underline text-xi-blue-dark hover:text-blue-light hover:underline"},Object(i.jsx)("h2",null,t.frontmatter.title)),Object(i.jsx)("time",{className:"text-base text-xi-blue ml-4 mr-8 underline"},t.frontmatter.date)),Object(i.jsx)("p",{className:"mt-2 text-base leading-tight text-xi-blue"},t.excerpt))})),1!==a&&Object(i.jsx)("div",{class:"mx-4 md:mx-0 absolute pin-b inline-flex mb-32"},Object(i.jsx)("div",{class:"bg-blue-lightest hover:bg-blue-lighter font-bold py-2 px-4 rounded-l"},!s&&Object(i.jsx)(u.Link,{to:"/blog/"+o,rel:"prev",className:"no-underline text-sm text-blue-darker active:text-indigo-dark"},"← Previous Page")),Array.from({length:a},function(e,t){return Object(i.jsx)(u.Link,{key:"pagination-number"+(t+1),to:"/blog/"+(0===t?"":t+1),className:"text-blue-darker p-2 no-underline border font-bold hover:text-blue-dark hover:bg-blue-lighter "+(t+1===r?"bg-blue-light ":"bg-blue-lightest")},t+1)}),Object(i.jsx)("div",{class:"bg-blue-lightest hover:bg-blue-lighter border text-blue-darkest font-bold py-2 px-4 rounded-r"},!l&&Object(i.jsx)(u.Link,{to:"/blog/"+b,rel:"next",className:"no-underline text-sm text-blue-darker active:text-indigo-dark"},"Next Page →"))))},t}(l.a.Component),x="4209329525";t.default=b},163:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return j}),n.d(t,"StaticQueryContext",function(){return x}),n.d(t,"StaticQuery",function(){return m});var r=n(7),a=n(0),i=n.n(a),s=n(4),l=n.n(s),o=n(162),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(167),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var b=n(37);n.d(t,"parsePath",function(){return b.a});var x=i.a.createContext({}),m=function(e){return Object(r.jsx)(x.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(r.jsx)("div",null,"Loading (StaticQuery)")})};function j(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},164:function(e,t,n){"use strict";var r=n(7),a=n(170),i=(n(171),n(0)),s=n.n(i),l=n(4),o=n.n(l),c=n(165),u=n.n(c),d=n(163),b=n(9),x=n.n(b),m=n(55),j=n.n(m),f=function(e){function t(){return e.apply(this,arguments)||this}return x()(t,e),t.prototype.render=function(){return Object(r.jsx)(i.Fragment,null,Object(r.jsx)("input",{id:"search",autoComplete:"off",className:"w-full py-2 text-grey-darkest pl-4 pr-10 rounded focus:border-grey-light",placeholder:"Search...",type:"text"}),Object(r.jsx)("div",{className:"flex items-center"},Object(r.jsx)("svg",{className:"fill-current text-grey-dark inline-block h-4 w-4 -ml-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Object(r.jsx)("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}))))},t}(s.a.Component),p=function(e){return Object(r.jsx)(d.Link,{to:e.to,className:"inline-block no-underline text-base uppercase text-white font-semibold py-4 px-6 border-b-4 border-transparent hover:border-green",activeClassName:"border-green"},e.title)},g=function(e){function t(){var t;return(t=e.call(this)||this).state={navActivated:!1},t.toggleNav=t.toggleNav.bind(j()(j()(t))),t}x()(t,e);var n=t.prototype;return n.toggleNav=function(){this.setState(function(e){return{navActivated:!e.navActivated}})},n.render=function(){return Object(r.jsx)("header",{className:"flex flex-col flex-no-shrink"},Object(r.jsx)("div",{className:"bg-xi-blue-dark"},Object(r.jsx)("div",{className:"container mx-auto"},Object(r.jsx)("div",{className:"flex justify-between items-center py-4"},Object(r.jsx)("div",{className:"flex items-center"},Object(r.jsx)(d.Link,{to:"/",className:"text-white no-underline flex items-center"},Object(r.jsx)("img",{src:"/img/logo.png",alt:"logo",className:"w-8"})),Object(r.jsx)("p",{className:"ml-4 font-thin text-xl text-white"},"Xi-Editor")),Object(r.jsx)("div",null,Object(r.jsx)("div",{className:"flex absolute pin-t pin-r mt-4 mr-4 md:mt-0 md:relative"},Object(r.jsx)(f,null)))))),Object(r.jsx)("div",{className:"bg-xi-blue"},Object(r.jsx)("div",{className:"container mx-auto"},Object(r.jsx)("div",{className:"flex justify-between items-center"},Object(r.jsx)("div",{className:"-ml-2 pt-2"},Object(r.jsx)(p,{to:"/",title:"home"}),Object(r.jsx)(p,{to:"/documentation/config",title:"docs"}),Object(r.jsx)(p,{to:"/gsoc/gsoc",title:"gsoc"}),Object(r.jsx)(p,{to:"/contribute",title:"contribute"}),Object(r.jsx)(p,{to:"/building-docs",title:"buildind docs"}),Object(r.jsx)(p,{to:"/blog",title:"blog"}))))))},t}(s.a.Component);g.propTypes={siteTitle:o.a.string},g.defaultProps={siteTitle:""};var h=g,v=function(){return Object(r.jsx)("footer",{className:"flex-no-shrink border-t pt-4 pb-10 w-full pt-8 px-8"},Object(r.jsx)("p",{className:"text-xs text-xi-blue-dark"},"See the"," ",Object(r.jsx)("a",{href:"https://github.com/xi-editor/xi-editor",className:"text-xi-blue-dark hover:text-xi-blue font-semibold"},"GitHub Project")))},O=function(e){var t=e.children,n=e.centered;return Object(r.jsx)(d.StaticQuery,{query:"755544856",render:function(e){return Object(r.jsx)("div",{className:"h-full w-full flex flex-col items-stretch font-sans"},Object(r.jsx)(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},Object(r.jsx)("html",{lang:"en"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",href:"img/logo.png",sizes:"16x16"}),Object(r.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"})),Object(r.jsx)(h,{siteTitle:e.site.siteMetadata.title}),Object(r.jsx)("main",{role:"main",className:"flex-1 "+(n?"container mx-auto":"")},t),Object(r.jsx)(v,null))},data:a})};O.propTypes={children:o.a.node.isRequired,centered:o.a.bool},O.defaultProps={centered:!0};t.a=O},167:function(e,t,n){var r;e.exports=(r=n(169))&&r.default||r},169:function(e,t,n){"use strict";n.r(t);n(56);var r=n(0),a=n.n(r),i=n(4),s=n.n(i),l=n(58),o=n(2),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tailwindcss"}}}}},171:function(e,t,n){},175:function(e,t,n){"use strict";var r=n(19),a=n(14),i=n(28),s=n(80),l=n(81),o=n(17),c=n(176),u=n(82);a(a.S+a.F*!n(83)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,d,b=i(e),x="function"==typeof this?this:Array,m=arguments.length,j=m>1?arguments[1]:void 0,f=void 0!==j,p=0,g=u(b);if(f&&(j=r(j,m>2?arguments[2]:void 0,2)),null==g||x==Array&&l(g))for(n=new x(t=o(b.length));t>p;p++)c(n,p,f?j(b[p],p):b[p]);else for(d=g.call(b),n=new x;!(a=d.next()).done;p++)c(n,p,f?s(d,j,[a.value,p],!0):a.value);return n.length=p,n}})},176:function(e,t,n){"use strict";var r=n(27),a=n(59);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-2352fecf786decf74c17.js.map