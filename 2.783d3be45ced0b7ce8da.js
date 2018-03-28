webpackJsonp([2],{413:function(t,e,n){"use strict";function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments[1],n=A[e.type];return n?n(t,e):t}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"GET_ALL_APPLICATIONS",function(){return p}),n.d(e,"GET_OVERSEEN_APPLICATIONS",function(){return s}),n.d(e,"GET_APPLICANT_APPLICATIONS",function(){return u}),n.d(e,"QUERY_APPLICATIONS",function(){return m}),n.d(e,"getAllApplications",function(){return d}),n.d(e,"getOverseenApplications",function(){return f}),n.d(e,"getApplicantApplications",function(){return h}),n.d(e,"queryApplications",function(){return y}),n.d(e,"actions",function(){return v}),e.default=a;var i,o=n(112),c=n.n(o),r=n(61),l=n.n(r),p="GET_ALL_APPLICATIONS",s="GET_OVERSEEN_APPLICATIONS",u="GET_APPLICANT_APPLICATIONS",m="QUERY_APPLICATIONS",d=function(){var t=l.a.post("/application/getAll",{});return{type:p,payload:t}},f=function(t){var e=l.a.post("/application/oversee",{phone:t});return{type:s,payload:e}},h=function(t){var e=l.a.post("/application/applicant",{phone:t});return{type:u,payload:e}},y=function(t){var e=l.a.post("/application/query",Object.assign({},t));return{type:m,payload:e}},v={getAllApplications:d,getApplicantApplications:h,getOverseenApplications:f,queryApplications:y},A=(i={},c()(i,p,function(t,e){return Object.assign({},t,{applications:e.payload.data})}),c()(i,s,function(t,e){return Object.assign({},t,{applications:e.payload.data})}),c()(i,u,function(t,e){return Object.assign({},t,{applications:e.payload.data})}),c()(i,m,function(t,e){return Object.assign({},t,{applications:e.payload.data})}),i),E={applications:[]}},423:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(183),i=n.n(a),o=n(184),c=n.n(o),r=n(186),l=n.n(r),p=n(185),s=n.n(p),u=n(5),m=n.n(u),d=(n(21),n(489)),f=(n.n(d),n(464)),h=n(465),y=function(t){function e(t){return i()(this,e),l()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return s()(e,t),c()(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{className:"ApplicationsWrapper"},m.a.createElement(h.a,null),m.a.createElement(f.a,null))}}]),e}(u.Component);e.default=y},428:function(t,e){},457:function(t,e,n){"use strict";var a=n(183),i=n.n(a),o=n(184),c=n.n(o),r=n(186),l=n.n(r),p=n(185),s=n.n(p),u=n(5),m=n.n(u),d=n(21),f=n(488),h=(n.n(f),function(t){function e(t){return i()(this,e),l()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return s()(e,t),c()(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this;return m.a.createElement("div",{className:"ApplicationCard"},m.a.createElement("div",{className:"ApplicationCardInner"},m.a.createElement("div",{className:"content"},this.props.application.applicationId?m.a.createElement("div",{className:"item"},"ID: ",this.props.application.applicationId):null,this.props.application.typeOfHome?m.a.createElement("div",{className:"item"},"Type: ",this.props.application.typeOfHome):null,this.props.application.yearlyBudget?m.a.createElement("div",{className:"item"},"Budget: $",this.props.application.yearlyBudget):null,this.props.application.otherPets?m.a.createElement("div",{className:"item"},"Other Pets: ",this.props.application.otherPets):null,this.props.application.applicationStatus?m.a.createElement("div",{className:"item"},"Status: ",this.props.application.applicationStatus):null,m.a.createElement("div",{onClick:function(){d.browserHistory.push("/application?id="+t.props.application.animalId)},className:"applicationcard-button"},"View Application"),m.a.createElement("div",{onClick:function(){d.browserHistory.push("/animal?id="+t.props.application.animalId)},className:"applicationcard-button"},"View Animal"))))}}]),e}(u.Component));e.a=h},458:function(t,e,n){"use strict";var a=n(183),i=n.n(a),o=n(184),c=n.n(o),r=n(186),l=n.n(r),p=n(185),s=n.n(p),u=n(5),m=n.n(u),d=(n(21),n(490)),f=(n.n(d),n(457)),h=n(460),y=(n(413),function(t){function e(t){return i()(this,e),l()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return s()(e,t),c()(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){"staff"==this.props.auth.userType?this.props.getAllApplications():this.props.getApplicantApplications(this.props.auth.phone)}},{key:"render",value:function(){return m.a.createElement("div",{className:"ApplicationsListWrapper"},m.a.createElement(h.a,{auth:this.props.auth}),m.a.createElement("div",{className:"resultsContent"},this.props.applications?this.props.applications.map(function(t){return m.a.createElement(f.a,{application:t})}):null))}}]),e}(u.Component));e.a=y},459:function(t,e,n){"use strict";var a=n(183),i=n.n(a),o=n(184),c=n.n(o),r=n(186),l=n.n(r),p=n(185),s=n.n(p),u=n(5),m=n.n(u),d=(n(21),n(428)),f=(n.n(d),n(461)),h=n(463),y=n(462),v=function(t){function e(t){i()(this,e);var n=l()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.addToColumns=function(t){var e=n.state.columns;e.push(t),console.log("add",e),n.setState({columns:e})},n.removeFromColumns=function(t){var e=n.state.columns;e.splice(e.indexOf(t),1),console.log("remove",e),n.setState({columns:e})},n.renderQuery=function(){var t=document.getElementById("input-Input").value,e=n.state.columns,a=n.state.type;n.props.queryApplications({columns:e,input:t,type:a})},n.state={columns:[],type:"",input:""},n}return s()(e,t),c()(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this;return m.a.createElement("div",{className:"QueryWrapper"},m.a.createElement("div",{className:"queryInner"},m.a.createElement("div",{className:"title"},"Search Applications"),m.a.createElement("div",{className:"subtitle"},"Columns you want"),m.a.createElement(y.a,{title:"Application Status",onCheck:function(){t.addToColumns("application_status")},onUnCheck:function(){t.removeFromColumns("application_status")}}),m.a.createElement(y.a,{title:"Other Pets",onCheck:function(){t.addToColumns("other_pets")},onUnCheck:function(){t.removeFromColumns("other_pets")}}),m.a.createElement(y.a,{title:"Yearly Budget",onCheck:function(){t.addToColumns("yearly_budget")},onUnCheck:function(){t.removeFromColumns("yearly_budget")}}),m.a.createElement(y.a,{title:"Type Of Home",onCheck:function(){t.addToColumns("type_of_home")},onUnCheck:function(){t.removeFromColumns("type_of_home")}}),m.a.createElement(y.a,{title:"Application Id",onCheck:function(){t.addToColumns("application_id")},onUnCheck:function(){t.removeFromColumns("application_id")}}),m.a.createElement("div",{className:"subtitle"},"Request type"),m.a.createElement(f.a,{title:"Animal Id",action:function(){t.setState({type:"animal_id"})}}),m.a.createElement(f.a,{title:"Application Id",action:function(){t.setState({type:"application_id"})}}),m.a.createElement("div",{className:"subtitle"},"Request input"),m.a.createElement(h.a,{title:"Input"}),m.a.createElement("div",{className:"queryButton",onClick:function(){t.renderQuery()}},"Search")))}}]),e}(u.Component);e.a=v},460:function(t,e,n){"use strict";var a=n(183),i=n.n(a),o=n(184),c=n.n(o),r=n(186),l=n.n(r),p=n(185),s=n.n(p),u=n(5),m=n.n(u),d=n(21),f=n(491),h=(n.n(f),function(t){function e(t){return i()(this,e),l()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return s()(e,t),c()(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{className:"header"},m.a.createElement("div",{className:"viewApplicationsButton",onClick:function(){d.browserHistory.push("/search")}},"Search Animals"),m.a.createElement("div",{className:"viewAccountButton",onClick:function(){d.browserHistory.push("/account")}},"My Account"),"staff"==this.props.auth.userType?m.a.createElement("div",{className:"viewAccountButton",onClick:function(){d.browserHistory.push("/advanced")}},"Advanced"):null)}}]),e}(u.Component));e.a=h},461:function(t,e,n){"use strict";var a=n(183),i=n.n(a),o=n(184),c=n.n(o),r=n(186),l=n.n(r),p=n(185),s=n.n(p),u=n(5),m=n.n(u),d=(n(21),n(428)),f=(n.n(d),function(t){function e(t){return i()(this,e),l()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return s()(e,t),c()(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{className:"TextQueryItemWrapper"},m.a.createElement("div",{className:"queryField"},m.a.createElement("div",{className:"queryTitle"},this.props.title),m.a.createElement("input",{type:"radio",name:"query-type",className:"input-radio",onClick:this.props.action})))}}]),e}(u.Component));e.a=f},462:function(t,e,n){"use strict";var a=n(183),i=n.n(a),o=n(184),c=n.n(o),r=n(186),l=n.n(r),p=n(185),s=n.n(p),u=n(5),m=n.n(u),d=(n(21),n(428)),f=(n.n(d),function(t){function e(t){i()(this,e);var n=l()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleClick=function(){document.getElementById("box-"+n.props.title).checked?n.props.onCheck():n.props.onUnCheck()},n}return s()(e,t),c()(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this;return m.a.createElement("div",{className:"TextQueryItemWrapper"},m.a.createElement("div",{className:"queryField"},m.a.createElement("div",{className:"queryTitle"},this.props.title),m.a.createElement("input",{id:"box-"+this.props.title,type:"checkbox",className:"input-radio",onClick:function(){t.handleClick()}})))}}]),e}(u.Component));e.a=f},463:function(t,e,n){"use strict";var a=n(183),i=n.n(a),o=n(184),c=n.n(o),r=n(186),l=n.n(r),p=n(185),s=n.n(p),u=n(5),m=n.n(u),d=(n(21),n(428)),f=(n.n(d),function(t){function e(t){return i()(this,e),l()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return s()(e,t),c()(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{className:"TextQueryItemWrapper"},m.a.createElement("div",{className:"queryField"},m.a.createElement("div",{className:"queryTitle"},this.props.title),m.a.createElement("input",{id:"input-"+this.props.title,className:"input"})))}}]),e}(u.Component));e.a=f},464:function(t,e,n){"use strict";var a=n(60),i=n(413),o=n(458),c={getApplicantApplications:function(t){return n.i(i.getApplicantApplications)(t)},getOverseenApplications:function(t){return n.i(i.getOverseenApplications)(t)},getAllApplications:function(){return n.i(i.getAllApplications)()},queryApplications:function(t){return n.i(i.queryApplications)(t)}},r=function(t){return{applications:t.applications.applications,auth:t.auth}};e.a=n.i(a.connect)(r,c)(o.a)},465:function(t,e,n){"use strict";var a=n(60),i=n(413),o=n(459),c={getApplicantApplications:function(t){return n.i(i.getApplicantApplications)(t)},getOverseenApplications:function(t){return n.i(i.getOverseenApplications)(t)},getAllApplications:function(){return n.i(i.getAllApplications)()},queryApplications:function(t){return n.i(i.queryApplications)(t)}},r=function(t){return{applications:t.applications.applications,auth:t.auth}};e.a=n.i(a.connect)(r,c)(o.a)},488:function(t,e){},489:function(t,e){},490:function(t,e){},491:function(t,e){}});
//# sourceMappingURL=2.783d3be45ced0b7ce8da.js.map