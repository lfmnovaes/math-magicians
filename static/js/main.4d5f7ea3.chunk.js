(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{14:function(t,n,e){},16:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var o=e(2),a=e.n(o),c=e(9),l=e.n(c),i=(e(14),e(3)),r=e(4),s=e(6),b=e(5),u=e(1),j=e(8),d=e.n(j);function h(t,n,e){var o=d()(t),a=d()(n);if("+"===e)return o.plus(a).toString();if("-"===e)return o.minus(a).toString();if("x"===e)return o.times(a).toString();if("\xf7"===e)try{return o.div(a).toString()}catch(c){return"Can't divide by 0."}if("%"===e)return o.mod(a).toString();throw Error("Unknown operation '".concat(e,"'"))}var x=e(0),O=function(t){Object(s.a)(e,t);var n=Object(b.a)(e);function e(t){var o;return Object(i.a)(this,e),(o=n.call(this,t)).onClickHandler=function(t){o.setState((function(n){return e=n,"AC"===(o=t.target.name)?{total:null,next:null,operation:null}:o.match(/[0-9]+/)?"0"===o&&"0"===e.next?{}:e.operation?e.next?Object(u.a)(Object(u.a)({},e),{},{next:e.next+o}):Object(u.a)(Object(u.a)({},e),{},{next:o}):e.next?{next:e.next+o,total:null}:{next:o,total:null}:"."===o?e.next?e.next.includes(".")?Object(u.a)({},e):Object(u.a)(Object(u.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===o?e.next&&e.operation?{total:h(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===o?e.next?Object(u.a)(Object(u.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(u.a)(Object(u.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||!e.total||e.operation?e.operation?e.total&&!e.next?Object(u.a)(Object(u.a)({},e),{},{operation:o}):{total:h(e.total,e.next,e.operation),next:null,operation:o}:e.next?{total:e.next,next:null,operation:o}:{operation:o}:Object(u.a)(Object(u.a)({},e),{},{operation:o});var e,o}))},o.handleDisplay=function(t,n){return null===t&&null==n?0:null===n?t:n},o.state={total:null,next:null},o}return Object(r.a)(e,[{key:"render",value:function(){var t=this.state,n=t.total,e=t.next;return Object(x.jsxs)("div",{className:"calculator",children:[Object(x.jsx)("div",{className:"display",children:Object(x.jsx)("span",{children:this.handleDisplay(n,e)})}),Object(x.jsxs)("div",{className:"keyboard",children:[Object(x.jsxs)("div",{className:"digits",children:[Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"AC",children:"AC"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"+/-",children:"+/-"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"%",children:"%"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"7",children:"7"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"8",children:"8"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"9",children:"9"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"4",children:"4"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"5",children:"5"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"6",children:"6"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"1",children:"1"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"2",children:"2"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"3",children:"3"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"0",children:"0"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:".",children:"."})]}),Object(x.jsxs)("div",{className:"operators",children:[Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"\xf7",children:"\xf7"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"x",children:"x"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"-",children:"-"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"+",children:"+"}),Object(x.jsx)("button",{onClick:this.onClickHandler,type:"button",name:"=",children:"="})]})]})]})}}]),e}(a.a.Component),p=(e(16),function(t){Object(s.a)(e,t);var n=Object(b.a)(e);function e(t){var o;return Object(i.a)(this,e),(o=n.call(this,t)).state={},o}return Object(r.a)(e,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(O,{})})}}]),e}(a.a.Component));l.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(p,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4d5f7ea3.chunk.js.map