(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{130:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return p});var o=n(6),i=n.n(o),a=n(0),r=n.n(a),A=n(134),c=n(143),u=n.n(c),l=n(138),s=n(137),f=n(133),d=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,n=t.site.siteMetadata.description,o=t.allMarkdownRemark.edges;return r.a.createElement(s.a,{location:this.props.location,title:e},r.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e}),r.a.createElement(l.a,null),o.map(function(t){var e=t.node,n=e.frontmatter.title||e.fields.slug;return r.a.createElement("div",{key:e.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},r.a.createElement(A.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),r.a.createElement("small",null,e.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))},e}(r.a.Component);e.default=d;var p="2584137191"},133:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return s});var o=n(140),i=n.n(o),a=n(141),r=n.n(a),A=n(142),c=n.n(A);r.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},r.a.bodyFontFamily.unshift("Microsoft YaHei"),r.a.headerFontFamily.unshift("Microsoft YaHei");var u=new i.a(c.a);var l=u.rhythm,s=u.scale},134:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return p}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return d});var o=n(0),i=n.n(o),a=n(4),r=n.n(a),A=n(132),c=n.n(A);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return A.withPrefix}),n.d(e,"navigate",function(){return A.navigate}),n.d(e,"push",function(){return A.push}),n.d(e,"replace",function(){return A.replace}),n.d(e,"navigateTo",function(){return A.navigateTo});var u=n(135),l=n.n(u);n.d(e,"PageRenderer",function(){return l.a});var s=n(29);n.d(e,"parsePath",function(){return s.a});var f=i.a.createContext({}),d=function(t){return i.a.createElement(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},135:function(t,e,n){var o;t.exports=(o=n(136))&&o.default||o},136:function(t,e,n){"use strict";n.r(e);n(28);var o=n(0),i=n.n(o),a=n(4),r=n.n(a),A=n(46),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(A.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=u},137:function(t,e,n){"use strict";n(28);var o=n(6),i=n.n(o),a=n(0),r=n.n(a),A=n(134),c=n(133),u=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,o=e.title,i=e.children;return t="/blog/"===n.pathname?r.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},r.a.createElement(A.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},o)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(0)}},r.a.createElement(A.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},o)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,i)},e}(r.a.Component);e.a=u},138:function(t,e,n){"use strict";var o=n(6),i=n.n(o),a=n(0),r=n.n(a),A=(n(146),n(147),n(139)),c=n.n(A),u=n(133),l=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},r.a.createElement("img",{src:c.a,alt:"head",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2)}}),r.a.createElement("p",null,"有人说，人活得不能像一条咸鱼。可是，很多人努力拼搏的目的，就是有一天能活的像一条咸鱼。"))},e}(r.a.Component);e.a=l},139:function(t,e){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=component---src-pages-index-js-b12534f05fce5bd3db85.js.map