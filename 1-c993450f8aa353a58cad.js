(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(6),a=n(0),i=n.n(a),o=n(4),s=n.n(o),l=n(152),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(157),u=n.n(d);n.d(t,"PageRenderer",function(){return u.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var m=i.a.createContext({}),f=function(e){return Object(r.jsx)(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(r.jsx)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,n){"use strict";var r=n(6),a=n(160),i=(n(161),n(0)),o=n.n(i),s=n(4),l=n.n(s),c=n(155),d=n.n(c),u=n(153),p=n(8),m=n.n(p),f=n(50),h=n.n(f),g=function(e){function t(){return e.apply(this,arguments)||this}return m()(t,e),t.prototype.render=function(){return Object(r.jsx)(i.Fragment,null,Object(r.jsx)("input",{id:"search",autoComplete:"off",className:"w-full py-2 text-grey-darkest pl-4 pr-10 rounded focus:border-grey-light",placeholder:"Search...",type:"text"}),Object(r.jsx)("div",{className:"flex items-center"},Object(r.jsx)("svg",{className:"fill-current text-grey-dark inline-block h-4 w-4 -ml-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Object(r.jsx)("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}))))},t}(o.a.Component),x=function(e){return Object(r.jsx)(u.Link,{to:e.to,className:"inline-block no-underline text-base uppercase text-white font-semibold py-4 px-6 border-b-4 border-transparent hover:border-green",activeClassName:"border-green"},e.title)},b=function(e){function t(){var t;return(t=e.call(this)||this).state={navActivated:!1},t.toggleNav=t.toggleNav.bind(h()(h()(t))),t}m()(t,e);var n=t.prototype;return n.toggleNav=function(){this.setState(function(e){return{navActivated:!e.navActivated}})},n.render=function(){return Object(r.jsx)("header",{className:"flex flex-col flex-no-shrink"},Object(r.jsx)("div",{className:"bg-xi-blue-dark"},Object(r.jsx)("div",{className:"container mx-auto"},Object(r.jsx)("div",{className:"flex justify-between items-center py-4"},Object(r.jsx)("div",{className:"flex items-center"},Object(r.jsx)(u.Link,{to:"/",className:"text-white no-underline flex items-center"},Object(r.jsx)("img",{src:"/img/logo.png",alt:"logo",className:"w-8"})),Object(r.jsx)("p",{className:"ml-4 font-thin text-xl text-white"},"Xi-Editor")),Object(r.jsx)("div",null,Object(r.jsx)("div",{className:"flex absolute pin-t pin-r mt-4 mr-4 md:mt-0 md:relative"},Object(r.jsx)(g,null)))))),Object(r.jsx)("div",{className:"bg-xi-blue"},Object(r.jsx)("div",{className:"container mx-auto"},Object(r.jsx)("div",{className:"flex justify-between items-center"},Object(r.jsx)("div",{className:"-ml-2 pt-2"},Object(r.jsx)(x,{to:"/",title:"home"}),Object(r.jsx)(x,{to:"/documentation/config",title:"docs"}),Object(r.jsx)(x,{to:"/gsoc/gsoc",title:"gsoc"}),Object(r.jsx)(x,{to:"/contribute",title:"contribute"}),Object(r.jsx)(x,{to:"/building-docs",title:"buildind docs"}),Object(r.jsx)(x,{to:"/blog",title:"blog"}))))))},t}(o.a.Component);b.propTypes={siteTitle:l.a.string},b.defaultProps={siteTitle:""};var y=b,v=function(){return Object(r.jsx)("footer",{className:"flex-no-shrink border-t pt-4 pb-10 w-full pt-8 px-8"},Object(r.jsx)("p",{className:"text-xs text-xi-blue-dark"},"See the"," ",Object(r.jsx)("a",{href:"https://github.com/xi-editor/xi-editor",className:"text-xi-blue-dark hover:text-xi-blue font-semibold"},"GitHub Project")))},j=function(e){var t=e.children,n=e.centered;return Object(r.jsx)(u.StaticQuery,{query:"755544856",render:function(e){return Object(r.jsx)("div",{className:"h-full w-full flex flex-col items-stretch font-sans"},Object(r.jsx)(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},Object(r.jsx)("html",{lang:"en"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",href:"img/logo.png",sizes:"16x16"})),Object(r.jsx)(y,{siteTitle:e.site.siteMetadata.title}),Object(r.jsx)("main",{role:"main",className:"flex-1 "+(n?"container mx-auto":"")},t),Object(r.jsx)(v,null))},data:a})};j.propTypes={children:l.a.node.isRequired,centered:l.a.bool},j.defaultProps={centered:!0};t.a=j},157:function(e,t,n){var r;e.exports=(r=n(159))&&r.default||r},158:function(e,t,n){"use strict";var r=n(0),a=n(58),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=Object(a.a)(function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),s=n(52),l=n.n(s),c=n(6),d=n(9),u=n(7),p=o,m=function(e){return"theme"!==e&&"innerRef"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:m};t.a=function e(t,n){var a,i,o;void 0!==n&&(a=n.label,o=n.target,i=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var s=t.__emotion_real===t,p=s&&t.__emotion_base||t;"function"!=typeof i&&s&&(i=t.__emotion_forwardProp);var m=i||f(p),h=!m("as");return function(){var g=arguments,x=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&x.push("label:"+a+";"),null==g[0]||void 0===g[0].raw)x.push.apply(x,g);else{x.push(g[0][0]);for(var b=g.length,y=1;y<b;y++)x.push(g[y],g[0][y])}var v=Object(c.withEmotionCache)(function(e,t,n){return Object(r.createElement)(c.ThemeContext.Consumer,null,function(a){var s=h&&e.as||p,l="",c=[],g=e;if(null==e.theme){for(var b in g={},e)g[b]=e[b];g.theme=a}"string"==typeof e.className&&(l+=Object(d.a)(t.registered,c,e.className));var y=Object(u.a)(x.concat(c),t.registered,g);Object(d.b)(t,y,"string"==typeof s),l+=t.key+"-"+y.name,void 0!==o&&(l+=" "+o);var v=h&&void 0===i?f(s):m,j={};for(var k in e)h&&"as"===k||v(k)&&(j[k]=e[k]);return j.className=l,j.ref=n||e.innerRef,Object(r.createElement)(s,j)})});return v.displayName=void 0!==a?a:"Styled("+("string"==typeof p?p:p.displayName||p.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=p,v.__emotion_styles=x,v.__emotion_forwardProp=i,Object.defineProperty(v,"toString",{value:function(){return"."+o}}),v.withComponent=function(t,r){return e(t,void 0!==r?l()({},n||{},r):n).apply(void 0,x)},v}}},159:function(e,t,n){"use strict";n.r(t);n(51);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(53),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tailwindcss"}}}}},161:function(e,t,n){}}]);
//# sourceMappingURL=1-c993450f8aa353a58cad.js.map