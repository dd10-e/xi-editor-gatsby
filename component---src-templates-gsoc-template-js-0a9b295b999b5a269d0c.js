(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{156:function(t,e,a){"use strict";a.r(e),a.d(e,"GSoCTemplate",function(){return b}),a.d(e,"query",function(){return f});var n=a(9),r=a.n(n),s=a(7),o=a(0),l=a.n(o),i=a(165),c=a.n(i),m=a(4),p=a.n(m),d=a(166),u=a(172),b=function(t){var e=t.content,a=t.contentComponent,n=t.title,r=t.helmet,o=a||d.b;return Object(s.jsx)("section",{className:"lg:flex h-full"},r||"",Object(s.jsx)("div",{className:"lg:w-3/4 xl:w-4/5"},Object(s.jsx)("h1",{className:"ml-4 lg:ml-0 text-xi-blue-dark mt-8 mb-4"},n),Object(s.jsx)(o,{content:e,className:"ml-4 lg:ml-0"})))};b.propTypes={content:p.a.node.isRequired,contentComponent:p.a.func,title:p.a.string,helmet:p.a.object};var j=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.allMarkdownRemark.edges,a=this.props.data.site.siteMetadata;return Object(s.jsx)(u.a,{data:e,path:"gsoc"},Object(s.jsx)(b,{content:t.html,contentComponent:d.a,title:t.frontmatter.title,helmet:Object(s.jsx)(c.a,{title:" "+a.title+" "+a.titleSeparator+" GsoC"},Object(s.jsx)("meta",{name:"description",content:""+t.frontmatter.title}))}))},e}(l.a.Component);j.propTypes={data:p.a.shape({markdownRemark:p.a.object})};var f="737884776";e.default=j},166:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a(168),r=a(7),s=(a(0),a(4)),o=a.n(s),l=Object(n.a)("div",{target:"ekxoq9d0"})({name:"mz9jeh",styles:"*{color:rgba(0,0,0,0.87);}& > p{display:block !important;justify-content:start;color:#462a16;margin-top:1rem;margin-bottom:2rem;font-size:1.125rem;line-height:1.5;}& > h2{color:#f6993f;}& > h2,& > h3,& > h4{margin-top:2rem;margin-bottom:1rem;color:#34515e;}& > p > img{max-width:20rem;}ul{margin-left:2rem;padding:0;}ul > li{margin-top:0.8rem;margin-bottom:0.8rem;}"}),i=function(t){var e=t.content,a=t.className;return Object(r.jsx)(l,{className:a,dangerouslySetInnerHTML:{__html:e}})},c=function(t){var e=t.content,a=t.className;return Object(r.jsx)("div",{className:a},e)};c.propTypes={content:o.a.node,className:o.a.string},i.propTypes=c.propTypes,e.b=c},172:function(t,e,a){"use strict";var n=a(7),r=a(163),s=(a(0),a(4)),o=a.n(s),l=a(164),i=function(t){var e=t.children,a=t.data,s=t.path;return Object(n.jsx)(l.a,{centered:!1},Object(n.jsx)("div",{className:"flex"},Object(n.jsx)("div",{className:"w-1/6 h-full flex-no-shrink"},Object(n.jsx)("ul",{className:"list-reset p-4 flex flex-col"},a.map(function(t){var e=t.node;return Object(n.jsx)(r.Link,{key:e.id,to:"/"+s+e.fields.slug,className:"no-underline text-xi-blue-dark p-2 hover:bg-blue-lightest text-sm",activeClassName:"bg-blue-lightest border"},e.frontmatter.title)}))),Object(n.jsx)("div",{className:"flex-1 flex-wrap mb-32"},e)))};i.propTypes={children:o.a.node,data:o.a.array,path:o.a.string},e.a=i}}]);
//# sourceMappingURL=component---src-templates-gsoc-template-js-0a9b295b999b5a269d0c.js.map