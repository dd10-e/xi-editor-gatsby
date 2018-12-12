(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return b});n(84),n(176);var r=n(9),a=n.n(r),i=n(7),s=n(0),o=n.n(s),l=n(166),c=n.n(l),u=n(164),d=n(165),x=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,n=this.props.pageContext,r=n.currentPage,a=n.numPages,s=1===r,o=r===a,l=r-1==1?"/":r-1,x=r+1;return Object(i.jsx)(d.a,null,Object(i.jsx)(c.a,{title:" "+e.site.siteMetadata.title+" | Blog"}),Object(i.jsx)("h1",{className:"ml-4 md:ml-0 mt-4 text-xi-blue-dark"},"Latest Blog Post"),Object(i.jsx)("div",{className:"ml-4 md:ml-0 border-t-4 border-xi-blue w-24 mt-4 mb-8"}),Object(i.jsx)("ul",{className:"mx-4 md:mx-0 flex flex-col my-8 pb-6 rounded list-reset"},t.map(function(e){var t=e.node;return Object(i.jsx)("li",{key:t.id,className:"border p-4 my-4 py-4 text-lg"},Object(i.jsx)("div",{className:"flex justify-between items-center"},Object(i.jsx)(u.Link,{to:"blog/"+t.fields.slug,className:"flex items-center no-underline text-xi-blue-dark hover:text-blue-light hover:underline"},Object(i.jsx)("h2",null,t.frontmatter.title)),Object(i.jsx)("time",{className:"text-base text-xi-blue ml-4 mr-8 underline"},t.frontmatter.date)),Object(i.jsx)("p",{className:"mt-2 text-base leading-tight text-xi-blue"},t.excerpt))})),1!==a&&Object(i.jsx)("div",{class:"mx-4 md:mx-0 absolute pin-b inline-flex mb-32"},Object(i.jsx)("div",{class:"bg-purple-light hover:bg-purple font-bold py-2 px-4 rounded-l"},!s&&Object(i.jsx)(u.Link,{to:"/blog/"+l,rel:"prev",className:"no-underline text-sm text-orange-lightest hover:text-orange-lighter active:text-indigo-dark"},"← Previous Page")),Array.from({length:a},function(e,t){return Object(i.jsx)(u.Link,{key:"pagination-number"+(t+1),to:"/blog/"+(0===t?"":t+1),className:"text-orange-lightest p-2 no-underline font-bold hover:text-orange-lighter "+(t+1===r?"bg-orange":"bg-purple")},t+1)}),Object(i.jsx)("div",{class:"bg-purple-light hover:bg-purple text-purple-darkest font-bold py-2 px-4 rounded-r"},!o&&Object(i.jsx)(u.Link,{to:"/blog/"+x,rel:"next",className:"no-underline text-sm text-orange-lightest hover:text-orange-lighter active:text-indigo-dark"},"Next Page →"))))},t}(o.a.Component),b="4209329525";t.default=x},164:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return j}),n.d(t,"StaticQueryContext",function(){return b}),n.d(t,"StaticQuery",function(){return m});var r=n(7),a=n(0),i=n.n(a),s=n(4),o=n.n(s),l=n(163),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(168),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var x=n(37);n.d(t,"parsePath",function(){return x.a});var b=i.a.createContext({}),m=function(e){return Object(r.jsx)(b.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(r.jsx)("div",null,"Loading (StaticQuery)")})};function j(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},165:function(e,t,n){"use strict";var r=n(7),a=n(171),i=(n(172),n(0)),s=n.n(i),o=n(4),l=n.n(o),c=n(166),u=n.n(c),d=n(164),x=n(9),b=n.n(x),m=n(55),j=n.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return b()(t,e),t.prototype.render=function(){return Object(r.jsx)(i.Fragment,null,Object(r.jsx)("input",{id:"search",autoComplete:"off",className:"w-full py-2 text-grey-darkest pl-4 pr-10 rounded focus:border-grey-light",placeholder:"Search...",type:"text"}),Object(r.jsx)("div",{className:"flex items-center"},Object(r.jsx)("svg",{className:"fill-current text-grey-dark inline-block h-4 w-4 -ml-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Object(r.jsx)("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}))))},t}(s.a.Component),f=function(e){return Object(r.jsx)(d.Link,{to:e.to,className:"inline-block no-underline text-base uppercase text-white font-semibold py-4 px-6 border-b-4 border-transparent hover:border-green",activeClassName:"border-green"},e.title)},g=function(e){function t(){var t;return(t=e.call(this)||this).state={navActivated:!1},t.toggleNav=t.toggleNav.bind(j()(j()(t))),t}b()(t,e);var n=t.prototype;return n.toggleNav=function(){this.setState(function(e){return{navActivated:!e.navActivated}})},n.render=function(){return Object(r.jsx)("header",{className:"flex flex-col flex-no-shrink"},Object(r.jsx)("div",{className:"bg-xi-blue-dark"},Object(r.jsx)("div",{className:"container mx-auto"},Object(r.jsx)("div",{className:"flex justify-between items-center py-4"},Object(r.jsx)("div",{className:"flex items-center"},Object(r.jsx)(d.Link,{to:"/",className:"text-white no-underline flex items-center"},Object(r.jsx)("img",{src:"/img/logo.png",alt:"logo",className:"w-8"})),Object(r.jsx)("p",{className:"ml-4 font-thin text-xl text-white"},"Xi-Editor")),Object(r.jsx)("div",null,Object(r.jsx)("div",{className:"flex absolute pin-t pin-r mt-4 mr-4 md:mt-0 md:relative"},Object(r.jsx)(p,null)))))),Object(r.jsx)("div",{className:"bg-xi-blue"},Object(r.jsx)("div",{className:"container mx-auto"},Object(r.jsx)("div",{className:"flex justify-between items-center"},Object(r.jsx)("div",{className:"-ml-2 pt-2"},Object(r.jsx)(f,{to:"/",title:"home"}),Object(r.jsx)(f,{to:"/documentation/config",title:"docs"}),Object(r.jsx)(f,{to:"/gsoc/gsoc",title:"gsoc"}),Object(r.jsx)(f,{to:"/contribute",title:"contribute"}),Object(r.jsx)(f,{to:"/building-docs",title:"buildind docs"}),Object(r.jsx)(f,{to:"/blog",title:"blog"}))))))},t}(s.a.Component);g.propTypes={siteTitle:l.a.string},g.defaultProps={siteTitle:""};var h=g,v=function(){return Object(r.jsx)("footer",{className:"flex-no-shrink border-t pt-4 pb-10 w-full pt-8 px-8"},Object(r.jsx)("p",{className:"text-xs text-xi-blue-dark"},"See the"," ",Object(r.jsx)("a",{href:"https://github.com/xi-editor/xi-editor",className:"text-xi-blue-dark hover:text-xi-blue font-semibold"},"GitHub Project")))},O=function(e){var t=e.children,n=e.centered;return Object(r.jsx)(d.StaticQuery,{query:"755544856",render:function(e){return Object(r.jsx)("div",{className:"h-full w-full flex flex-col items-stretch font-sans"},Object(r.jsx)(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},Object(r.jsx)("html",{lang:"en"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",href:"img/logo.png",sizes:"16x16"})),Object(r.jsx)(h,{siteTitle:e.site.siteMetadata.title}),Object(r.jsx)("main",{role:"main",className:"flex-1 "+(n?"container mx-auto":"")},t),Object(r.jsx)(v,null))},data:a})};O.propTypes={children:l.a.node.isRequired,centered:l.a.bool},O.defaultProps={centered:!0};t.a=O},168:function(e,t,n){var r;e.exports=(r=n(170))&&r.default||r},170:function(e,t,n){"use strict";n.r(t);n(56);var r=n(0),a=n.n(r),i=n(4),s=n.n(i),o=n(58),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tailwindcss"}}}}},172:function(e,t,n){},176:function(e,t,n){"use strict";var r=n(19),a=n(14),i=n(28),s=n(80),o=n(81),l=n(17),c=n(177),u=n(82);a(a.S+a.F*!n(83)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,d,x=i(e),b="function"==typeof this?this:Array,m=arguments.length,j=m>1?arguments[1]:void 0,p=void 0!==j,f=0,g=u(x);if(p&&(j=r(j,m>2?arguments[2]:void 0,2)),null==g||b==Array&&o(g))for(n=new b(t=l(x.length));t>f;f++)c(n,f,p?j(x[f],f):x[f]);else for(d=g.call(x),n=new b;!(a=d.next()).done;f++)c(n,f,p?s(d,j,[a.value,f],!0):a.value);return n.length=f,n}})},177:function(e,t,n){"use strict";var r=n(27),a=n(59);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-bfb7df6d0aa003d20bfd.js.map