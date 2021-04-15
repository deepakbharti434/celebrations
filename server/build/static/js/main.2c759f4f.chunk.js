(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(19),s=n(30),o=n(79),l=n(95),u="CREATE",d="UPDATE",j="DELETE",p="FETCH_ALL",b="LIKE",h="AUTH",m="LOGOUT",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case u:return[].concat(Object(l.a)(e),[t.payload]);case d:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case j:return e.filter((function(e){return e._id!==t.payload}));default:return e}},g=n(13),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return localStorage.setItem("profile",JSON.stringify(Object(g.a)({},null===t||void 0===t?void 0:t.data))),console.log(null===t||void 0===t?void 0:t.data),Object(g.a)(Object(g.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case m:return localStorage.clear(),Object(g.a)(Object(g.a)({},e),{},{authData:null});default:return e}},O=Object(s.c)({posts:f,auth:x}),v=(n(112),n(181)),y=n(27),w=n(171),C=n(138),k=n(173),S=n(186),N=n(174),I=n(167),T=n(170),D=Object(I.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(T.a[500]),backgroundColor:T.a[500]}}})),F=n(14),_=n(42),L=n(84),A=n.p+"static/media/memories.6155329a.jpg",E=n(2),z=function(){var e=D(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(y.a)(t,2),r=n[0],c=n[1],s=Object(i.b)(),o=Object(F.f)(),l=Object(F.g)(),u=function(){s({type:"LOGOUT"}),o.push("/"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(L.a)(e).exp<(new Date).getTime()&&u());c(JSON.parse(localStorage.getItem("profile")))}),[l]),Object(E.jsx)("div",{children:Object(E.jsxs)(w.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(E.jsxs)("div",{className:e.brandContainer,children:[Object(E.jsx)(C.a,{component:_.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"celebrations"}),Object(E.jsx)("img",{className:e.image,src:A,alt:"memories",height:"60"})]}),Object(E.jsx)(k.a,{className:e.toolbar,children:r?Object(E.jsxs)("div",{className:e.profile,children:[Object(E.jsx)("div",{children:Object(E.jsx)(S.a,{className:e.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)})}),Object(E.jsx)("div",{children:Object(E.jsx)(C.a,{className:e.userName,variant:"h6",children:r.result.name})}),Object(E.jsx)("div",{children:Object(E.jsx)(N.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:"Logout"})})]}):Object(E.jsx)(N.a,{component:_.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})})},B=n(185),P=n(180),W=n(179),U=n(175),J=n(176),M=n(177),H=n(178),G=n(87),R=n.n(G),q=n(65),V=n.n(q),K=n(89),Y=n.n(K),Z=n(88),Q=n.n(Z),X=n(85),$=n.n(X),ee=n(12),te=n.n(ee),ne=n(21),ae=n(86),re=n.n(ae).a.create({baseURL:"http://localhost:5000"});re.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var ce=function(e){return re.patch("/posts/".concat(e,"/likePost"))},ie=function(e,t){return re.patch("/posts/".concat(e),t)},se=function(e){return re.delete("/posts/".concat(e))},oe=function(e){return re.post("/user/signin",e)},le=function(e){return re.post("/user/signup",e)},ue=function(e){return function(){var t=Object(ne.a)(te.a.mark((function t(n){var a,r;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,re.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},de=function(e,t){return function(){var n=Object(ne.a)(te.a.mark((function n(a){var r,c;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ie(e,t);case 3:r=n.sent,c=r.data,a({type:d,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},je=Object(I.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),pe=function(e){var t,n,a,r,c=e.post,s=e.setCurrentId,o=Object(i.b)(),l=je(),u=JSON.parse(localStorage.getItem("profile")),d=function(){return c.likes.length>0?c.likes.find((function(e){var t,n;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id))}))?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(R.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(V.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(V.a,{fontSize:"small"}),"\xa0Like"]})};return Object(E.jsxs)(U.a,{className:l.card,children:[Object(E.jsx)(J.a,{className:l.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),Object(E.jsxs)("div",{className:l.overlay,children:[Object(E.jsx)(C.a,{variant:"h6",children:c.name}),Object(E.jsx)(C.a,{variant:"body2",children:$()(c.createdAt).fromNow()})]}),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id)===(null===c||void 0===c?void 0:c.creator))&&Object(E.jsx)("div",{className:l.overlay2,children:Object(E.jsx)(N.a,{style:{color:"white"},size:"small",onClick:function(){return s(c._id)},children:Object(E.jsx)(Q.a,{fontSize:"default"})})}),Object(E.jsx)("div",{className:l.details,children:Object(E.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.tags.map((function(e){return"#".concat(e," ")}))})}),Object(E.jsx)(C.a,{className:l.title,gutterBottom:!0,variant:"h5",component:"h2",children:c.title}),Object(E.jsx)(M.a,{children:Object(E.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:c.message})}),Object(E.jsxs)(H.a,{className:l.cardActions,children:[Object(E.jsx)(N.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:function(){return o((e=c._id,function(){var t=Object(ne.a)(te.a.mark((function t(n){var a,r;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ce(e);case 3:a=t.sent,r=a.data,n({type:b,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(E.jsx)(d,{})}),((null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(E.jsxs)(N.a,{size:"small",color:"primary",onClick:function(){return o((e=c._id,function(){var t=Object(ne.a)(te.a.mark((function t(n){return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,se(e);case 3:n({type:j,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(E.jsx)(Y.a,{fontSize:"small"}),"Delete"]})]})]})},be=Object(I.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),he=function(e){var t=e.setCurrentId,n=Object(i.c)((function(e){return e.posts})),a=be();return n.length?Object(E.jsx)(P.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(E.jsx)(P.a,{item:!0,xs:12,sm:6,md:6,children:Object(E.jsx)(pe,{post:e,setCurrentId:t})},e._id)}))}):Object(E.jsx)(W.a,{})},me=n(97),fe=n(184),ge=n(90),xe=n.n(ge),Oe=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ve=function(e){var t,n=e.currentId,r=e.setCurrentId,c=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),s=Object(y.a)(c,2),o=s[0],l=s[1],u=Object(i.c)((function(e){return n?e.posts.find((function(e){return e._id===n})):null})),d=Object(i.b)(),j=Oe(),p=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){u&&l(u)}),[u]);var b=function(){r(0),l({title:"",message:"",tags:"",selectedFile:""})},h=function(){var e=Object(ne.a)(te.a.mark((function e(t){var a,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===n?(d(ue(Object(g.a)(Object(g.a)({},o),{},{name:null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.name}))),b()):(d(de(n,Object(g.a)(Object(g.a)({},o),{},{name:null===p||void 0===p||null===(r=p.result)||void 0===r?void 0:r.name}))),b());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.name)?Object(E.jsx)(me.a,{className:j.paper,children:Object(E.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:h,children:[Object(E.jsx)(C.a,{variant:"h6",children:n?'Editing "'.concat(u.title,'"'):"Creating a Memory"}),Object(E.jsx)(fe.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(g.a)(Object(g.a)({},o),{},{title:e.target.value}))}}),Object(E.jsx)(fe.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:o.message,onChange:function(e){return l(Object(g.a)(Object(g.a)({},o),{},{message:e.target.value}))}}),Object(E.jsx)(fe.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(g.a)(Object(g.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(E.jsx)("div",{className:j.fileInput,children:Object(E.jsx)(xe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(g.a)(Object(g.a)({},o),{},{selectedFile:t}))}})}),Object(E.jsx)(N.a,{className:j.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(E.jsx)(N.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})}):Object(E.jsx)(me.a,{className:j.paper,children:Object(E.jsx)(C.a,{variant:"h6",align:"center",children:"Please Sign In to create your own post and like other's post."})})},ye=function(){var e=Object(a.useState)(0),t=Object(y.a)(e,2),n=t[0],r=t[1],c=Object(i.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.get("/posts");case 3:n=e.sent,a=n.data,t({type:p,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c]),Object(E.jsx)("div",{children:Object(E.jsx)(B.a,{in:!0,children:Object(E.jsx)(v.a,{children:Object(E.jsxs)(P.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(E.jsx)(P.a,{item:!0,xs:12,sm:7,children:Object(E.jsx)(he,{setCurrentId:r})}),Object(E.jsx)(P.a,{item:!0,xs:12,sm:4,children:Object(E.jsx)(ve,{currentId:n,setCurrentId:r})})]})})})})},we=n(57),Ce=Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),ke=n(94),Se=n.n(ke),Ne=n(182),Ie=n(183),Te=n(91),De=n.n(Te),Fe=n(92),_e=n.n(Fe),Le=function(e){var t=e.name,n=e.handleChange,a=e.label,r=e.half,c=e.autoFocus,i=e.type,s=e.handleShowPassword;return Object(E.jsx)(P.a,{item:!0,xs:12,sm:r?6:12,children:Object(E.jsx)(fe.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:c,type:i,InputProps:"password"===t?{endAdornment:Object(E.jsx)(Ne.a,{position:"end",children:Object(E.jsx)(Ie.a,{onClick:s,children:"password"===i?Object(E.jsx)(De.a,{}):Object(E.jsx)(_e.a,{})})})}:null})})},Ae=n(93),Ee=function(){return Object(E.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(E.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},ze=function(){var e=Ce(),t=Object(a.useState)(!1),n=Object(y.a)(t,2),r=n[0],c=n[1],s=Object(i.b)(),o=Object(F.f)(),l=Object(a.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),u=Object(y.a)(l,2),d=u[0],j=u[1],p=function(e){j(Object(g.a)(Object(g.a)({},d),{},Object(we.a)({},e.target.name,e.target.value)))},b=Object(a.useState)(!1),m=Object(y.a)(b,2),f=m[0],x=m[1],O=function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{s({type:"AUTH",data:{result:n,token:a}}),o.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)(v.a,{component:"main",maxWidth:"xs",children:Object(E.jsxs)(me.a,{className:e.paper,elevation:3,children:[Object(E.jsx)(S.a,{className:e.Avatar,children:Object(E.jsx)(Se.a,{})}),Object(E.jsx)(C.a,{variant:"h5",children:r?"Sign Up":"Sign In"}),Object(E.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),console.log(d),s(r?function(e,t){return function(){var n=Object(ne.a)(te.a.mark((function n(a){var r,c;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,le(e);case 3:r=n.sent,c=r.data,a({type:h,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(d,o):function(e,t){return function(){var n=Object(ne.a)(te.a.mark((function n(a){var r,c;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,oe(e);case 3:r=n.sent,c=r.data,a({type:h,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(d,o))},children:[Object(E.jsxs)(P.a,{container:!0,spacing:2,children:[r&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Le,{name:"firstName",label:"First Name",handleChange:p,autoFocus:!0,half:!0}),Object(E.jsx)(Le,{name:"lastName",label:"Last Name",handleChange:p,half:!0})]}),Object(E.jsx)(Le,{name:"email",label:"Email Address",handleChange:p,type:"email"}),Object(E.jsx)(Le,{name:"password",label:"Password",handleChange:p,type:f?"text":"password",handleShowPassword:function(){x((function(e){return!e}))}}),r&&Object(E.jsx)(Le,{name:"confirmPassword",label:"Repeat Password",handleChange:p,type:"password"})]}),Object(E.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:r?"Sign Up":"Sign In"}),Object(E.jsx)(Ae.GoogleLogin,{clientId:"553281188785-6l8e6j88kqehedcfqpjsv6ojhu6mc0lj.apps.googleusercontent.com",render:function(t){return Object(E.jsx)(N.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(E.jsx)(Ee,{}),variant:"contained",children:"Google Sign In"})},onSuccess:O,onFailure:function(e){console.log(e),console.log("Google sign in was successful")},cookiePolicy:"single_host_origin"}),Object(E.jsx)(P.a,{container:!0,justify:"flex-end",children:Object(E.jsx)(P.a,{item:!0,children:Object(E.jsx)(N.a,{onClick:function(){c((function(e){return!e})),x(!1)},children:r?"Already have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})},Be=function(){return Object(E.jsx)(_.a,{children:Object(E.jsxs)(v.a,{maxWidth:"lg",children:[Object(E.jsx)(z,{}),Object(E.jsxs)(F.c,{children:[Object(E.jsx)(F.a,{path:"/",exact:!0,component:ye}),Object(E.jsx)(F.a,{path:"/auth",exact:!0,component:ze})]})]})})},Pe=Object(s.e)(O,Object(s.d)(Object(s.a)(o.a)));c.a.render(Object(E.jsx)(i.a,{store:Pe,children:Object(E.jsx)(Be,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.2c759f4f.chunk.js.map