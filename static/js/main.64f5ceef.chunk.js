(this.webpackJsonpmarkdown=this.webpackJsonpmarkdown||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(4),c=n.n(a),r=(n(13),n(5)),d=n(6),o=n(8),l=n(7),h=(n(14),n(3)),u=n.n(h),j=n(0),b=function(e){u.a.setOptions({breaks:!0});var t=u()(e.value);return Object(j.jsxs)("div",{class:"grid-item",children:[Object(j.jsx)("div",{class:"title",children:"Previewer"}),Object(j.jsx)("div",{readonly:!0,id:"preview",dangerouslySetInnerHTML:{__html:t}})]})},v=function(e){return Object(j.jsxs)("div",{class:"grid-item",children:[Object(j.jsx)("div",{class:"title",children:"Editor"}),Object(j.jsx)("textarea",{id:"editor",onChange:e.onChange,type:"text",value:e.value})]})},g=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={input:"# H1 heading \n## H2 heading \n[This is a link](https://www.google.com) to google.\n\n`<div>Inline code</div>` \n\n```\n<div>   \n  <p>Code block</p>\n</div>\n```\n\n1. List item 1 \n2. List item 2 \n3. List item 3\n\n> A Block quote\n\n**Bold text**\n\n![Image](img/icon.jpg)"},i}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{children:["This demo uses the markdown parser from ",Object(j.jsx)("a",{href:"https://cdnjs.com/libraries/marked",children:"https://cdnjs.com/libraries/marked"}),"."]}),Object(j.jsxs)("div",{class:"grid-container",children:[Object(j.jsx)(v,{onChange:this.handleChange.bind(this),value:this.state.input}),Object(j.jsx)(b,{value:this.state.input})]})]})}}]),n}(s.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.64f5ceef.chunk.js.map