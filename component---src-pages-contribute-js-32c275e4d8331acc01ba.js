(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"ContributeTemplate",function(){return c}),a.d(t,"pageQuery",function(){return f});var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(162),l=a(163),d=a(167),c=function(e){var t=e.title,a=e.content,i=e.helmet;return r.a.createElement("div",{className:"bg-white h-full pb-12"},r.a.createElement("section",{className:"container mx-auto"},i||"",r.a.createElement("h1",{className:"ml-4 lg:ml-0 text-blue-darker mb-4"},t),r.a.createElement(o.a,{className:"ml-4 lg:ml-0",content:a})))};c.propTypes={content:n.a.node.isRequired,title:n.a.string.isRequired,helmet:n.a.object};var u=function(e){var t=e.data;return r.a.createElement(l.b,null,r.a.createElement(c,{title:t.mdx.frontmatter.title,content:t.mdx.code.body,helmet:r.a.createElement(d.a,{categorieTitle:"Contribute",description:t.mdx.excerpt})}))};u.propTypes={data:n.a.shape({mdx:n.a.object})};var f="3703028149";t.default=u},154:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r=s(a(0));function s(e){return e&&e.__esModule?e:{default:e}}var n=(0,s(a(76)).default)({}),o=n.Provider,l=n.Consumer;t.withMDXScope=function(e){return function(t){var a=t.scope,s=function(e,t){var a={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i]);return a}(t,["scope"]);return r.default.createElement(l,null,function(t){return r.default.createElement(e,i({scope:a||t},s))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,a=e.children;return r.default.createElement(o,{value:t},a)}},156:function(e,t,a){"use strict";var i=a(157),r=a(0),s=a.n(r),n=a(155),o=a(4),l=a.n(o),d=a(158),c=a.n(d),u=function(e){var t=e.classNameImg,a=e.alt;return s.a.createElement(n.StaticQuery,{query:"3001254952",render:function(e){return s.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid,className:t,alt:a})},data:i})};u.propTypes={classNameImg:l.a.string,alt:l.a.string},t.a=u},157:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABmElEQVQoz6VT207CQBBF0UR9Rj9Af9c345PfYnhAEEwUEIykF3qh3XItBVrawJRxZkFIJDEhTHIy29mds2dmtpkMmV2r3Cvae1U3zUJb14uu6xa73e4WlmUXNU0rOq4j9/6gIIT4MAzjkahOmO+sJ7wXXKRodzpotA2M4xhXqxUmSYLL5VL6+XyO/9l4PK4S1yUTntMNzxwMgmARRRFMp1OYBAH4vi/XYRjCZDKBKIyAiGE2mwGf4zX5BedSJa/EdSUJSXY+iRM0VR1sw0Jf9NEh3/xqojBtHI98pCqwrWioqCpqLQUHXg+F56Ft25CmKZKoypaw43Tyo9EIVUUBOoCmYSD1EnWCcF30hEDLtGTccRxsfbeYiFUhV8Dt8TxvRzgYDPIsG9Ym+wYpyD6ylzFYfzNYEcfYc9qmhzvC4XCY3/QW8ECjC2QO9XtfIW/+qjgA+4T9fl9OmUpYEOBAyCnTDHZTpudSwiONnlJ9S1gqlR4ajcZnrVYrE94ORIVy6+Vy+Ym4LjK5XI5/l2vC7RG4I9xks9nTHwBz6LmSUC+9AAAAAElFTkSuQmCC",aspectRatio:1.6706349206349207,src:"/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/1e875/xi-mac.png",srcSet:"/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/5f5eb/xi-mac.png 150w,\n/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/07cb7/xi-mac.png 300w,\n/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/1e875/xi-mac.png 600w,\n/xi-editor-gatsby/static/4015458216b1a95685e507661e5892b7/a4b24/xi-mac.png 842w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}},158:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(5)),n=i(a(17)),o=i(a(159)),l=i(a(165)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+o+l+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,s=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},s,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,S=e.Tag,w="boolean"==typeof y?"lightgray":y,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),I={title:t,alt:this.state.isVisible?"":a,style:v,className:p};if(h){var A=h;return d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),A.base64&&d.default.createElement(b,(0,l.default)({src:A.base64},I)),A.tracedSVG&&d.default.createElement(b,(0,l.default)({src:A.tracedSVG},I)),w&&d.default.createElement(S,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,A.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),d.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),d.default.createElement(b,{alt:a,title:t,src:A.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},A))}}))}if(m){var R=m,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},s);return"inherit"===s.display&&delete x.display,d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(b,(0,l.default)({src:R.base64},I)),R.tracedSVG&&d.default.createElement(b,(0,l.default)({src:R.tracedSVG},I)),w&&d.default.createElement(S,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:S,sizes:w,fixed:S,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var v=y;t.default=v},160:function(e,t,a){const i=a(0),{MDXTag:r}=a(161),{withMDXComponents:s}=a(166),{withMDXScope:n}=a(154);e.exports=n(s(({scope:e={},components:t={},children:a,...s})=>{if(!a)return null;const n={React:i,MDXTag:r,...e},o=Object.keys(n),l=o.map(e=>n[e]),d=new Function("_fn",...o,`${a}`)({},...l);return i.createElement(d,{components:t,...s})}))},162:function(e,t,a){"use strict";var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(160),l=a.n(o),d=a(154),c=a(156),u=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a},r.a.createElement(l.a,{scope:{Image:c.a}},t))};u.propTypes={content:n.a.node,className:n.a.string,scope:n.a.object},t.a=Object(d.withMDXScope)(u)}}]);
//# sourceMappingURL=component---src-pages-contribute-js-32c275e4d8331acc01ba.js.map