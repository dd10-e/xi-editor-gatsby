(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{155:function(t,e,n){"use strict";n.r(e),n.d(e,"DocumentationPostTemplate",function(){return b}),n.d(e,"query",function(){return f});var a=n(9),r=n.n(a),o=n(7),s=n(0),i=n.n(s),l=n(165),c=n.n(l),m=n(4),p=n.n(m),u=n(166),d=n(172),b=function(t){var e=t.content,n=t.contentComponent,a=t.title,r=t.helmet,s=n||u.b;return Object(o.jsx)("section",{className:"lg:flex h-full"},r||"",Object(o.jsx)("div",{className:"lg:w-3/4 xl:w-4/5"},Object(o.jsx)("h1",{className:"ml-4 lg:ml-0 text-xi-blue-dark mt-8 mb-4"},a),Object(o.jsx)(s,{content:e,className:"ml-4 lg:ml-0"})))};b.propTypes={content:p.a.node.isRequired,contentComponent:p.a.func,title:p.a.string,helmet:p.a.object};var j=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.allMarkdownRemark.edges,n=this.props.data.site.siteMetadata;return Object(o.jsx)(d.a,{data:e,path:"documentation"},Object(o.jsx)(b,{content:t.html,contentComponent:u.a,title:t.frontmatter.title,helmet:Object(o.jsx)(c.a,{title:" "+n.title+" "+n.titleSeparator+" Documentation"},Object(o.jsx)("meta",{name:"description",content:""+t.frontmatter.title}))}))},e}(i.a.Component);j.propTypes={data:p.a.shape({markdownRemark:p.a.object})};var f="737624189";e.default=j},166:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n(168),r=n(7),o=(n(0),n(4)),s=n.n(o),i=Object(a.a)("div",{target:"ekxoq9d0"})({name:"mz9jeh",styles:"*{color:rgba(0,0,0,0.87);}& > p{display:block !important;justify-content:start;color:#462a16;margin-top:1rem;margin-bottom:2rem;font-size:1.125rem;line-height:1.5;}& > h2{color:#f6993f;}& > h2,& > h3,& > h4{margin-top:2rem;margin-bottom:1rem;color:#34515e;}& > p > img{max-width:20rem;}ul{margin-left:2rem;padding:0;}ul > li{margin-top:0.8rem;margin-bottom:0.8rem;}"}),l=function(t){var e=t.content,n=t.className;return Object(r.jsx)(i,{className:n,dangerouslySetInnerHTML:{__html:e}})},c=function(t){var e=t.content,n=t.className;return Object(r.jsx)("div",{className:n},e)};c.propTypes={content:s.a.node,className:s.a.string},l.propTypes=c.propTypes,e.b=c},172:function(t,e,n){"use strict";var a=n(7),r=n(163),o=(n(0),n(4)),s=n.n(o),i=n(164),l=function(t){var e=t.children,n=t.data,o=t.path;return Object(a.jsx)(i.a,{centered:!1},Object(a.jsx)("div",{className:"flex"},Object(a.jsx)("div",{className:"w-1/6 h-full flex-no-shrink"},Object(a.jsx)("ul",{className:"list-reset p-4 flex flex-col"},n.map(function(t){var e=t.node;return Object(a.jsx)(r.Link,{key:e.id,to:"/"+o+e.fields.slug,className:"no-underline text-xi-blue-dark p-2 hover:bg-blue-lightest text-sm",activeClassName:"bg-blue-lightest border"},e.frontmatter.title)}))),Object(a.jsx)("div",{className:"flex-1 flex-wrap mb-32"},e)))};l.propTypes={children:s.a.node,data:s.a.array,path:s.a.string},e.a=l}}]);
//# sourceMappingURL=component---src-templates-documentation-post-js-bf4b84082dcc787cf128.js.map