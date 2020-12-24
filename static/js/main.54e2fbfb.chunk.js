(this["webpackJsonpreact-simple-contact"]=this["webpackJsonpreact-simple-contact"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),i=n(18),o=n.n(i),s=(n(89),n(7)),l=n(15),u=n(24),d=n(11),j=n(8),f=n(125),b=n(138),h=n(67),m=n.n(h);function p(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return p=function(){return e},e}function O(){var e=Object(s.a)(["\n  font-size: 1.8rem;\n  font-weight: 700;\n  align-self: center;\n"]);return O=function(){return e},e}function g(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 1.8rem;\n  height: 7rem;\n  width: 100%;\n  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);\n"]);return g=function(){return e},e}var x=j.a.div(g()),v=j.a.div(O()),y=j.a.div(p());function N(){return Object(r.jsxs)(x,{children:[Object(r.jsx)(v,{children:"All Contacts"}),Object(r.jsxs)(y,{children:[Object(r.jsx)(f.a,{badgeContent:4,color:"primary",style:{marginRight:"2rem"},children:Object(r.jsx)(m.a,{style:{fontSize:"2.4rem"}})}),Object(r.jsx)(b.a,{alt:"avatar"})]})]})}var w=n(69),S=n.n(w),T=n(70),C=n.n(T),E=n(71),k=n.n(E);function z(){var e=Object(s.a)(["\n  align-self: center;\n"]);return z=function(){return e},e}function L(){var e=Object(s.a)(["\n  margin: 0 auto;\n  margin-bottom: 2rem;\n  color: #fff;\n  font-weight: 500;\n  font-size: 1.6rem;\n"]);return L=function(){return e},e}function A(){var e=Object(s.a)(["\n  margin: 0 auto;\n  color: #fff;\n  font-size: 2.8rem;\n  font-weight: 500;\n  margin-bottom: 5rem;\n  display: flex;\n"]);return A=function(){return e},e}function F(){var e=Object(s.a)(["\n  margin: 0 auto;\n  padding: 0 3rem;\n  color: #fff;\n  font-size: 1.8rem;\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  transition: 0.2s all ease;\n  cursor: pointer;\n  text-decoration: none;\n\n  &:hover {\n    background-color: #4c0c64;\n  }\n"]);return F=function(){return e},e}function D(){var e=Object(s.a)(["\n  margin: 0 auto;\n  padding: 0 3rem;\n  color: #fff;\n  font-size: 1.8rem;\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  transition: 0.2s all ease;\n  cursor: pointer;\n  text-decoration: none;\n\n  &:hover {\n    background-color: #4c0c64;\n  }\n"]);return D=function(){return e},e}function q(){var e=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  padding-top: 2rem;\n"]);return q=function(){return e},e}function I(){var e=Object(s.a)(["\n  width: 30rem;\n  min-height: 100%;\n  background-color: #17031d;\n  display: flex;\n"]);return I=function(){return e},e}var P=j.a.div(I()),_=j.a.div(q()),R=Object(j.a)(u.b)(D()),V=Object(j.a)(u.b)(F()),B=j.a.h4(A()),G=j.a.div(L()),J=j.a.div(z());function U(){var e=Object(l.c)((function(e){return e})),t=e.lists,n=e.favorites;return Object(r.jsx)(P,{children:Object(r.jsxs)(_,{children:[Object(r.jsxs)(B,{children:[Object(r.jsx)(S.a,{style:{fontSize:"5rem",marginRight:"0.5rem",alignSelf:"center"}}),Object(r.jsx)(J,{children:"Contactlist"})]}),Object(r.jsx)(G,{children:"Contacts"}),Object(r.jsxs)(R,{to:"/",children:[Object(r.jsx)(C.a,{style:{fontSize:"1.8rem",alignSelf:"center",marginRight:"0.5rem"}})," ","All Contacts (",t.length,")"]}),Object(r.jsxs)(V,{to:"/favorites","data-testid":"favorites-sidebar-link",children:[Object(r.jsx)(k.a,{style:{fontSize:"1.8rem",alignSelf:"center",marginRight:"0.5rem"}}),"My Favorites ",n.length>0&&"(".concat(n.length,")")]})]})})}var W=n(39),H=n(72),M=n(14),Y="SET_DATA",K="SET_FAVORITES",Q="ADD_DATA",X="DELETE_DATA",Z="DELETE_FAV",$="UPDATE_DATA",ee="GET_BY_ID",te="START_LOADING",ne="FINISH_LOADING",re={lists:[],isLoading:!1,selected:[],favorites:[]};var ce=Object(W.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(M.a)(Object(M.a)({},e),{},{lists:t.payload});case K:return Object(M.a)(Object(M.a)({},e),{},{favorites:e.favorites.concat(t.payload)});case Z:var n=e.favorites.filter((function(e){return e.id!==t.payload}));return Object(M.a)(Object(M.a)({},e),{},{favorites:n});case X:var r=e.lists.filter((function(e){return e.id!==t.payload}));return Object(M.a)(Object(M.a)({},e),{},{lists:r});case Q:return Object(M.a)(Object(M.a)({},e),{},{lists:e.lists.concat(t.payload)});case $:var c=e.lists.filter((function(e){return e.id!==t.payload}));return Object(M.a)(Object(M.a)({},e),{},{lists:c});case ee:return Object(M.a)(Object(M.a)({},e),{},{selected:t.payload});case te:return Object(M.a)(Object(M.a)({},e),{},{isLoading:!0});case ne:return Object(M.a)(Object(M.a)({},e),{},{isLoading:!1});default:return e}}),Object(W.a)(H.a)),ae=n(50),ie=function(){return function(e){e(le()),fetch("https://simple-contact-182.herokuapp.com/contacts",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:Y,payload:e}}(t.contacts))})).catch((function(e){return console.log(e,"error fetch")})).finally((function(){return e(ue())}))}},oe=function(e){return function(t){var n=e.firstName,r=e.lastName,c=e.age,a=e.photo;fetch("https://simple-contact-182.herokuapp.com/contacts/".concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:n,lastName:r,age:c,photo:a})}).then((function(e){return e.json()})).then((function(e){console.log(e,"<<<< data updated"),t(function(e){return{type:$,payload:e}}(e.contact.id)),t(ie())})).catch((function(e){console.log(e,"<<<< error update contact")}))}},se=function(e){return function(t){fetch("https://simple-contact-182.herokuapp.com/contacts/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e,"<<<< data by id"),t(function(e){return{type:ee,payload:e}}(e.contact))})).catch((function(e){console.log(e,"<<< error fetch data by id")}))}},le=function(){return{type:te}},ue=function(){return{type:ne}};n(98);function de(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return de=function(){return e},e}function je(){var e=Object(s.a)(["\n  font-size: 2.4rem;\n  font-weight: 500;\n  color: #0e101c;\n"]);return je=function(){return e},e}var fe=j.a.h3(je()),be=j.a.div(de());function he(){var e=Object(l.b)(),t=Object(d.f)(),n=Object(ae.a)(),c=n.register,i=n.handleSubmit,o=n.errors;return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(be,{children:Object(r.jsx)(fe,{children:"Add New Contact"})}),Object(r.jsxs)("form",{onSubmit:i((function(n){var r=n.firstName,c=n.lastName,a=n.age,i=n.photo;e(function(e){return function(t){fetch("https://simple-contact-182.herokuapp.com/contacts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e,"<<<< successfully added"),t({type:Q,payload:e.contact})})).catch((function(e){console.log(e,"<<< error post new contact")}))}}({firstName:r,lastName:c,age:a,photo:i})),t.push("/")})),"data-testid":"add-contact-form",children:[Object(r.jsx)("label",{children:"First Name"}),Object(r.jsx)("input",{name:"firstName",placeholder:"Enter first name",ref:c({required:!0,maxLength:10})}),o.firstName&&Object(r.jsx)("p",{children:"This field is required"}),Object(r.jsx)("label",{children:"Last Name"}),Object(r.jsx)("input",{name:"lastName",placeholder:"Enter last name",ref:c({required:!0,maxLength:10})}),o.lastName&&Object(r.jsx)("p",{children:"This field is required"}),Object(r.jsx)("label",{children:"Age"}),Object(r.jsx)("input",{name:"age",ref:c({required:!0}),type:"number",placeholder:"Enter age"}),o.age&&Object(r.jsx)("p",{children:"This field is required"}),Object(r.jsx)("label",{children:"Image Url"}),Object(r.jsx)("input",{name:"photo",ref:c({required:!0}),placeholder:"Please enter image url"}),o.photo&&Object(r.jsx)("p",{children:"This field is required"}),Object(r.jsx)("input",{type:"submit"})]})]})}var me=n(21),pe=n(135),Oe=n(74),ge=n.n(Oe),xe=n(127),ve=n(128),ye=n(134),Ne=n(139),we=n(131),Se=n(132),Te=n(44),Ce=n(49),Ee=n.n(Ce),ke=n(73),ze=n.n(ke),Le=n(48),Ae=n.n(Le),Fe=n(136),De=n(130);function qe(){var e=Object(s.a)(["\n  display: flex;\n  margin-right: 0.5rem;\n  text-transform: none;\n  border-radius: 5rem;\n  width: 4rem;\n  height: 4rem;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  color: #e84f8a;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.5);\n    transition: 0.1s all cubic-bezier(0.59, 0.18, 0.44, 0.81);\n  }\n"]);return qe=function(){return e},e}function Ie(){var e=Object(s.a)(["\n  display: flex;\n  margin-right: 0.5rem;\n  text-transform: none;\n  border-radius: 5rem;\n  width: 4rem;\n  height: 4rem;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  color: #000;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.5);\n    transition: 0.3s all cubic-bezier(0.59, 0.18, 0.44, 0.81);\n  }\n"]);return Ie=function(){return e},e}function Pe(){var e=Object(s.a)(["\n  display: flex;\n  font-size: 1.5rem;\n  text-transform: none;\n  border-radius: 5rem;\n  width: 15rem;\n  height: 4rem;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  background-color: rgb(8, 160, 247);\n  color: #fff;\n\n  &:hover {\n    background-color: rgb(34, 161, 198);\n    transition: 0.3s all cubic-bezier(0.59, 0.18, 0.44, 0.81);\n  }\n"]);return Pe=function(){return e},e}var _e=Object(xe.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,borderBottom:".1rem"}}})),Re=Object(j.a)(u.b)(Pe()),Ve=j.a.div(Ie()),Be=j.a.div(qe());function Ge(e){var t=Object(l.b)(),n=Object(c.useState)(!1),a=Object(me.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)(!1),u=Object(me.a)(s,2),d=u[0],j=u[1],f=Object(c.useState)(!1),h=Object(me.a)(f,2),m=h[0],p=h[1],O=_e();return Object(r.jsxs)(ve.a,{className:O.root,children:[Object(r.jsx)(ye.a,{open:d,autoHideDuration:3e3,onClose:function(){return j(!1)},children:Object(r.jsxs)(Fe.a,{severity:"error",children:[Object(r.jsx)(De.a,{children:"Error"}),"Contact unavailable to delete \u2014 ",Object(r.jsx)("strong",{children:"check it out!"})]})}),Object(r.jsx)(ye.a,{open:m,autoHideDuration:1e3,onClose:function(){return p(!1)},children:Object(r.jsx)(Fe.a,{severity:"success",children:"Success add to Favorite \u2014 check it out!"})}),Object(r.jsxs)(Ne.a,{style:{boxShadow:"0 3px 3px -2px rgba(0, 0, 0, 0.2)"},children:[Object(r.jsx)(we.a,{children:Object(r.jsx)(b.a,{src:"".concat(e.list.photo),children:Object(r.jsx)(Ae.a,{})})}),Object(r.jsx)(Se.a,{primary:Object(r.jsx)(Te.a,{variant:"h4",style:{fontFamily:"Poppins",fontWeight:"500"},children:"".concat(e.list.firstName," ").concat(e.list.lastName)}),secondary:Object(r.jsxs)(Te.a,{variant:"h6",style:{fontFamily:"Poppins",fontWeight:"300"},children:[e.list.age," years old"]})}),!i&&Object(r.jsx)(Be,{onClick:function(){var n=e.list,r=n.id,c=n.firstName,a=n.lastName,i=n.age,s=n.photo;console.log(r,c,a,i,s),t({type:K,payload:{id:r,firstName:c,lastName:a,age:i,photo:s}}),o(!0),p(!0)},children:Object(r.jsx)(ze.a,{style:{fontSize:"3rem"}})}),Object(r.jsx)(Ve,{onClick:function(){var n=e.list.id;t(function(e){return function(t){return fetch("https://simple-contact-182.herokuapp.com/contacts/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}}(n)).then((function(e){return e.json()})).then((function(e){console.log(e.message,"<<<< status message"),"contact unavailable"!==e.message?t(function(e){return{type:X,payload:e}}(n)):j(!0)})).catch((function(e){console.log(e,"<<<< error delete")}))},children:Object(r.jsx)(Ee.a,{style:{fontSize:"3rem"}})}),Object(r.jsx)(Re,{to:"/edit-contact/".concat(e.list.id),children:"Edit Data"})]})]})}var Je=n(133);function Ue(){var e=Object(s.a)(["\n  display: flex;\n  height: 5rem;\n  font-size: 1.5rem;\n  text-transform: none;\n  border-radius: 5rem;\n  width: 15rem;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  background-color: #731e91;\n  color: #fff;\n\n  &:hover {\n    background-color: #490063;\n  }\n"]);return Ue=function(){return e},e}function We(){var e=Object(s.a)(["\n  display: flex;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  justify-content: space-between;\n"]);return We=function(){return e},e}function He(){var e=Object(s.a)(["\n  height: 100%;\n"]);return He=function(){return e},e}var Me=j.a.div(He()),Ye=j.a.div(We()),Ke=Object(j.a)(u.b)(Ue()),Qe=Object(xe.a)((function(e){return{root:{display:"flex",height:"100%",alignItems:"center","& > * + *":{marginLeft:e.spacing(2)},justifyContent:"center"}}}));function Xe(){var e=Object(l.b)(),t=Object(c.useState)(""),n=Object(me.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)([]),u=Object(me.a)(s,2),d=u[0],j=u[1],f=Object(l.c)((function(e){return e})),b=f.lists,h=f.isLoading,m=Qe();return console.log(b,"<<<< lists"),Object(c.useEffect)((function(){e(ie())}),[e]),Object(c.useEffect)((function(){j(b.filter((function(e){return e.firstName.toLowerCase().includes(i.toLowerCase())||e.lastName.toLowerCase().includes(i.toLowerCase())||e.age===Number(i)})))}),[i,b]),Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsxs)(Ye,{children:[Object(r.jsx)(pe.a,{style:{fontSize:"2rem",fontFamily:"Poppins"},placeholder:"Search by name",onChange:function(e){return o(e.target.value)}}),Object(r.jsxs)(Ke,{to:"add-contact","data-testid":"add-contact-link",children:[Object(r.jsx)(ge.a,{style:{fontSize:"2rem"}}),"Add Contact"]})]}),Object(r.jsx)(Me,{children:h?Object(r.jsx)("div",{className:m.root,children:Object(r.jsx)(Je.a,{size:100})}):d.map((function(e){return Object(r.jsx)(Ge,{list:e},e.id)}))})]})}function Ze(){var e=Object(s.a)(["\n  display: flex;\n  margin-right: 3rem;\n  font-size: 1.5rem;\n  text-transform: none;\n  border-radius: 5rem;\n  width: 4rem;\n  height: 4rem;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  background-color: #951418;\n  color: #fff;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #000;\n  }\n"]);return Ze=function(){return e},e}var $e=Object(xe.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,borderBottom:".1rem"}}})),et=j.a.div(Ze());function tt(e){var t=Object(l.b)(),n=$e();return Object(r.jsx)(ve.a,{className:n.root,children:Object(r.jsxs)(Ne.a,{style:{boxShadow:"0 3px 3px -2px rgba(0, 0, 0, 0.2)"},children:[Object(r.jsx)(we.a,{children:Object(r.jsx)(b.a,{src:"".concat(e.list.photo),children:Object(r.jsx)(Ae.a,{})})}),Object(r.jsx)(Se.a,{primary:Object(r.jsx)(Te.a,{variant:"h4",style:{fontFamily:"Poppins",fontWeight:"500"},children:"".concat(e.list.firstName," ").concat(e.list.lastName)}),secondary:Object(r.jsxs)(Te.a,{variant:"h6",style:{fontFamily:"Poppins",fontWeight:"300"},children:[e.list.age," years old"]})}),Object(r.jsx)(et,{onClick:function(){var n;t((n=e.list.id,{type:Z,payload:n}))},children:Object(r.jsx)(Ee.a,{style:{fontSize:"3rem"}})})]})})}function nt(){var e=Object(s.a)(["\n  height: 100vh;\n"]);return nt=function(){return e},e}var rt=j.a.div(nt());function ct(){var e=Object(l.c)((function(e){return e})).favorites;return console.log(e),Object(r.jsx)(rt,{"data-testid":"favorites-page",children:e&&e.map((function(e){return Object(r.jsx)(tt,{list:e},e.id)}))})}n(99);function at(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return at=function(){return e},e}function it(){var e=Object(s.a)(["\n  font-size: 2.4rem;\n  font-weight: 500;\n  color: #0e101c;\n"]);return it=function(){return e},e}var ot=j.a.h3(it()),st=j.a.div(at()),lt=Object(xe.a)((function(e){return{root:{display:"flex",height:"100%",alignItems:"center","& > * + *":{marginLeft:e.spacing(2)},justifyContent:"center"}}}));function ut(){var e=Object(l.b)(),t=Object(d.f)(),n=Object(l.c)((function(e){return e})).selected,i=Object(d.g)().id,o=lt();console.log(n,"<<< selected"),console.log(i,"<<<< params id"),Object(c.useEffect)((function(){e(se(i))}),[e,i]);var s=Object(ae.a)(),u=s.register,j=s.handleSubmit,f=s.errors;return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(st,{children:Object(r.jsx)(ot,{children:"Edit Contact"})}),n.id===Number(i)?Object(r.jsxs)("form",{onSubmit:j((function(n){var r=n.firstName,c=n.lastName,a=n.age,o=n.photo;e(oe({id:i,firstName:r,lastName:c,age:a,photo:o})),t.push("/")})),children:[Object(r.jsx)("label",{children:"First Name"}),Object(r.jsx)("input",{name:"firstName",defaultValue:"".concat(n.firstName),placeholder:"Enter first name",ref:u({required:!0,maxLength:10})}),f.firstName&&Object(r.jsx)("p",{children:"This field is required"}),Object(r.jsx)("label",{children:"Last Name"}),Object(r.jsx)("input",{name:"lastName",defaultValue:"".concat(n.lastName),placeholder:"Enter last name",ref:u({required:!0,maxLength:10})}),f.lastName&&Object(r.jsx)("p",{children:"This field is required"}),Object(r.jsx)("label",{children:"Age"}),Object(r.jsx)("input",{name:"age",defaultValue:"".concat(n.age),ref:u({required:!0}),type:"number",placeholder:"Enter age"}),f.age&&Object(r.jsx)("p",{children:"This field is required"}),Object(r.jsx)("label",{children:"Image Url"}),Object(r.jsx)("input",{name:"photo",defaultValue:"".concat(n.photo),ref:u({required:!0}),placeholder:"Please enter image url"}),f.photo&&Object(r.jsx)("p",{children:"This field is required"}),Object(r.jsx)("input",{type:"submit"})]}):Object(r.jsx)("div",{className:o.root,children:Object(r.jsx)(Je.a,{size:100})})]})}function dt(){var e=Object(s.a)(["\n  padding: 3rem;\n  height: 90vh;\n  overflow: scroll;\n"]);return dt=function(){return e},e}function jt(){var e=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n"]);return jt=function(){return e},e}function ft(){var e=Object(s.a)(["\n  display: flex;\n  min-height: 100%;\n"]);return ft=function(){return e},e}var bt=j.a.div(ft()),ht=j.a.div(jt()),mt=j.a.div(dt());function pt(){return Object(r.jsx)(l.a,{store:ce,children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(bt,{children:[Object(r.jsx)(U,{}),Object(r.jsxs)(ht,{children:[Object(r.jsx)(N,{}),Object(r.jsx)(mt,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/edit-contact/:id",component:ut}),Object(r.jsx)(d.a,{path:"/add-contact",component:he}),Object(r.jsx)(d.a,{path:"/favorites",component:ct}),Object(r.jsx)(d.a,{path:"/",component:Xe})]})})]})]})})})}var Ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(pt,{})}),document.getElementById("root")),Ot()},89:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.54e2fbfb.chunk.js.map