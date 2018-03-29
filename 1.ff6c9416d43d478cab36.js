webpackJsonp([1],{413:function(e,t,n){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments[1],n=E[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"QUERY",function(){return p}),n.d(t,"GET_ALL",function(){return s}),n.d(t,"POPULAR",function(){return c}),n.d(t,"UNPOPULAR",function(){return m}),n.d(t,"getAll",function(){return d}),n.d(t,"query",function(){return f}),n.d(t,"popularity",function(){return y}),n.d(t,"popular",function(){return v}),n.d(t,"unpopular",function(){return h}),n.d(t,"actions",function(){return N}),t.default=a;var r,o=n(112),u=n.n(o),l=n(61),i=n.n(l),p="QUERY",s="GET_ALL",c="POPULAR",m="UNPOPULAR",d=function(){var e=i.a.post("/animal/getall",{});return{type:s,payload:e}},f=function(e){var t=i.a.post("/animal/query",{query:e});return{type:p,payload:t}},y=function(){var e=i.a.post("/animal/popular",{});return{type:POPULARITY,payload:e}},v=function(){var e=i.a.post("/animal/popular",{});return{type:c,payload:e}},h=function(){var e=i.a.post("/animal/unpopular",{});return{type:m,payload:e}},N={query:f,getAll:d,popular:v,unpopular:h},E=(r={},u()(r,p,function(e,t){return Object.assign({},e,{results:t.payload.data?t.payload.data:_.results})}),u()(r,s,function(e,t){return Object.assign({},e,{results:t.payload.data?t.payload.data:_.results})}),u()(r,c,function(e,t){return Object.assign({},e,{popularName:t.payload.data?t.payload.data[0].breed+" "+t.payload.data[0].name:_.popularName,popularCount:t.payload.data?t.payload.data[0].avgApplication:_.popularCount})}),u()(r,m,function(e,t){return Object.assign({},e,{unpopularName:t.payload.data?t.payload.data[0].breed+" "+t.payload.data[0].name:_.unpopularName,unpopularCount:t.payload.data?t.payload.data[0].avgApplication:_.unpopularCount})}),r),_={results:[],popularName:"",popularCount:"",unpopularName:"",unpopularCount:""}},423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(183),r=n.n(a),o=n(184),u=n.n(o),l=n(186),i=n.n(l),p=n(185),s=n.n(p),c=n(5),m=n.n(c),d=(n(21),n(492)),f=(n.n(d),n(470)),y=n(471),v=function(e){function t(e){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s()(t,e),u()(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{className:"SearchWrapper"},m.a.createElement(f.a,null),m.a.createElement(y.a,null))}}]),t}(c.Component);t.default=v},426:function(e,t){},429:function(e,t,n){"use strict";var a=n(183),r=n.n(a),o=n(184),u=n.n(o),l=n(186),i=n.n(l),p=n(185),s=n.n(p),c=n(5),m=n.n(c),d=n(21),f=n(490),y=(n.n(f),n(429),function(e){function t(e){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s()(t,e),u()(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this;return console.log("render results",this.props),m.a.createElement("div",{className:"ResultCardWrapper",onClick:function(){d.browserHistory.push("/animal?id="+e.props.data.animalId)}},m.a.createElement("div",{className:"ResultCardInner"},m.a.createElement("img",{className:"image",src:this.props.data.imgUrl}),m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"title"},this.props.data.animalName),m.a.createElement("div",{className:"breed"},"Sex: ",this.props.data.sex),m.a.createElement("div",{className:"location"},"Adoption Fee: $",this.props.data.price))))}}]),t}(c.Component));t.a=y},464:function(e,t,n){"use strict";var a=n(183),r=n.n(a),o=n(184),u=n.n(o),l=n(186),i=n.n(l),p=n(185),s=n.n(p),c=n(5),m=n.n(c),d=n(21),f=n(489),y=(n.n(f),function(e){function t(e){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s()(t,e),u()(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{className:"header"},m.a.createElement("div",{className:"viewApplicationsButton",onClick:function(){d.browserHistory.push("/applications")}},"View ","applicant"==this.props.auth.userType?"My":""," Applications"),m.a.createElement("div",{className:"viewAccountButton",onClick:function(){d.browserHistory.push("/account")}},"My Account"),"staff"==this.props.auth.userType?m.a.createElement("div",{className:"viewAccountButton",onClick:function(){d.browserHistory.push("/advanced")}},"Advanced"):null)}}]),t}(c.Component));t.a=y},465:function(e,t,n){"use strict";var a=n(183),r=n.n(a),o=n(184),u=n.n(o),l=n(186),i=n.n(l),p=n(185),s=n.n(p),c=n(5),m=n.n(c),d=(n(21),n(426)),f=(n.n(d),n(469),n(468),n(466)),y=function(e){function t(e){r()(this,t);var n=i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={init:!1,popular:null},n}return s()(t,e),u()(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.getAll()}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"QueryWrapper"},m.a.createElement("div",{className:"queryInner"},m.a.createElement("div",{className:"title"},"Find your new best friend"),m.a.createElement(f.a,{title:"Max Adoption Fee",action:function(){e.props.query("max")}}),m.a.createElement(f.a,{title:"Min Adoption Fee",action:function(){e.props.query("min")}}),m.a.createElement("div",{className:"queryButton",onClick:function(){e.props.getAll()}},"Reset"),m.a.createElement("div",{className:"popularSection"},this.props.popular&&""!=this.props.popular&&1==this.state.init?m.a.createElement("div",{className:"mostPopularLabel"},this.state.popular?"Breed: "+this.props.popularName:"Breed: "+this.props.unpopularName):null,this.props.popularCount&&""!=this.props.popularCount&&1==this.state.init?m.a.createElement("div",{className:"mostPopularLabel"},this.state.popular?"Count: "+this.props.popularCount:"Count: "+this.props.unpopularCount):null,m.a.createElement("div",{className:"popularQueryButton",onClick:function(){e.props.popular(),e.setState({init:!0,popular:!0})}},"View Most Popular Breed"),m.a.createElement("div",{className:"popularQueryButton",onClick:function(){e.props.unpopular(),e.setState({init:!0,popular:!1})}},"View Least Popular Breed"))))}}]),t}(c.Component);t.a=y},466:function(e,t,n){"use strict";var a=n(183),r=n.n(a),o=n(184),u=n.n(o),l=n(186),i=n.n(l),p=n(185),s=n.n(p),c=n(5),m=n.n(c),d=(n(21),n(426)),f=(n.n(d),function(e){function t(e){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s()(t,e),u()(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{className:"TextQueryItemWrapper"},m.a.createElement("div",{className:"queryField"},m.a.createElement("div",{className:"queryTitle"},this.props.title),m.a.createElement("input",{type:"radio",name:"query-type",className:"input-radio",onClick:this.props.action})))}}]),t}(c.Component));t.a=f},467:function(e,t,n){"use strict";var a=n(183),r=n.n(a),o=n(184),u=n.n(o),l=n(186),i=n.n(l),p=n(185),s=n.n(p),c=n(5),m=n.n(c),d=(n(21),n(491)),f=(n.n(d),n(429)),y=n(464),v=function(e){function t(e){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s()(t,e),u()(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return console.log("render results",this.props),m.a.createElement("div",{className:"ResultsWrapper"},m.a.createElement(y.a,{auth:this.props.auth}),m.a.createElement("div",{className:"resultsContent"},this.props.results?this.props.results.map(function(e){return m.a.createElement(f.a,{data:e})}):null))}}]),t}(c.Component);t.a=v},468:function(e,t,n){"use strict";var a=n(183),r=n.n(a),o=n(184),u=n.n(o),l=n(186),i=n.n(l),p=n(185),s=n.n(p),c=n(5),m=n.n(c),d=(n(21),n(426));n.n(d),function(e){function t(e){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}s()(t,e),u()(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return console.log("render",this.props),m.a.createElement("div",{className:"SelectQueryItemWrapper"},m.a.createElement("div",{className:"queryField"},m.a.createElement("div",{className:"queryTitle"},this.props.title),m.a.createElement("select",{className:"input"},this.props.options.map(function(e){return m.a.createElement("option",{value:e},e)}))))}}])}(c.Component)},469:function(e,t,n){"use strict";var a=n(183),r=n.n(a),o=n(184),u=n.n(o),l=n(186),i=n.n(l),p=n(185),s=n.n(p),c=n(5),m=n.n(c),d=(n(21),n(426));n.n(d),function(e){function t(e){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}s()(t,e),u()(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{className:"TextQueryItemWrapper"},m.a.createElement("div",{className:"queryField"},m.a.createElement("div",{className:"queryTitle"},this.props.title),m.a.createElement("input",{className:"input"})))}}])}(c.Component)},470:function(e,t,n){"use strict";var a=n(60),r=n(413),o=n(465),u={query:function(e){return n.i(r.query)(e)},getAll:function(){return n.i(r.getAll)()},popular:function(){return n.i(r.popular)()},unpopular:function(){return n.i(r.unpopular)()}},l=function(e){return{popularName:e.search.popularName,popularCount:e.search.popularCount,unpopularName:e.search.unpopularName,unpopularCount:e.search.unpopularCount,auth:e.auth}};t.a=n.i(a.connect)(l,u)(o.a)},471:function(e,t,n){"use strict";var a=n(60),r=(n(413),n(467)),o={},u=function(e){return{results:e.search.results,auth:e.auth}};t.a=n.i(a.connect)(u,o)(r.a)},489:function(e,t){},490:function(e,t){},491:function(e,t){},492:function(e,t){}});
//# sourceMappingURL=1.ff6c9416d43d478cab36.js.map