(this.webpackJsonprapp=this.webpackJsonprapp||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),i=n.n(r),s=(n(54),n(55),n(40),n(70)),l=n(49),h=n(20),j=n(2);function o(){return Object(j.jsx)("div",{children:Object(j.jsxs)(s.a,{className:"d-flex justify-content-between",bg:"dark",variant:"dark",children:[Object(j.jsx)(s.a.Brand,{href:"#home",children:"Convertor"}),Object(j.jsxs)(l.a,{children:[Object(j.jsx)(l.a.Item,{children:Object(j.jsx)(l.a.Link,{href:"#",children:Object(j.jsx)(h.b,{className:"nav-link",to:"/",children:"Home"})})}),Object(j.jsx)(l.a.Item,{children:Object(j.jsx)(l.a.Link,{to:"/",children:Object(j.jsx)(h.b,{className:"nav-link",to:"/about",children:"AboutUs"})})}),Object(j.jsx)(l.a.Item,{children:Object(j.jsx)(l.a.Link,{className:"nav-link",href:"https://github.com/Lakshit-Karsoliya",children:"Work"})})]})]})})}var b={position:"fixed",width:"100%",background:"#343a40",color:"#f8f9fa",padding:"15px",left:"0",bottom:"0"};function d(){return Object(j.jsx)("div",{className:"text-center",style:b,children:Object(j.jsx)("h5",{children:"Convertor"})})}var u=n(26),O=n(27),x=n(28),g=n(34),m=n(31),p=n(69),f=n(66),v=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(O.a)(this,n),(c=t.call(this,e)).handlesubmit=function(e){e.preventDefault()},c.handleInputChange=function(e){e.preventDefault(),console.log(e),console.log(e.target.height),console.log(e.target.value),c.setState(Object(u.a)({},e.target.name,e.target.value))},c.calculate=function(){var e=document.getElementById("resBMR"),t=c.state.height,n=c.state.weight;console.log("h=",t,"w=",n);var a=n/(t*t)*1e4;e.innerHTML=a>25?"<br><h6>BMI : "+a+"</h4><p>OverWeight</p>":a<15?"<br><h6>BMI : "+a+"</h4><p>UnderWeight</p>":"<br><h6>BMI : "+a+"</h4><p>Normal</p>",console.log("bmi:",a)},c.state={height:null,weight:null},c}return Object(x.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"container my-3",children:[Object(j.jsxs)(p.a,{onSubmit:this.handlesubmit,children:[Object(j.jsxs)(p.a.Group,{children:[Object(j.jsx)(p.a.Label,{children:"Enter height in cm"}),Object(j.jsx)(p.a.Control,{type:"number",name:"height",placeholder:"Enter height in cm",onChange:this.handleInputChange})]}),Object(j.jsxs)(p.a.Group,{children:[Object(j.jsx)(p.a.Label,{children:"Enter weight in kg"}),Object(j.jsx)(p.a.Control,{type:"number",name:"weight",placeholder:"Enter weight in kg",onChange:this.handleInputChange})]}),Object(j.jsx)(p.a.Group,{children:Object(j.jsx)(f.a,{className:"btn-sucess",onClick:this.calculate,children:"Calculate"})})]}),Object(j.jsx)("div",{id:"resBMR",className:"text-center"})]})})}}]),n}(c.Component),C=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(O.a)(this,n),(c=t.call(this,e)).handleform=function(e){e.preventDefault()},c.handleInputChange=function(e){e.preventDefault(),c.setState(Object(u.a)({},e.target.name,e.target.value))},c.calculate=function(){var e=document.getElementById("res"),t=c.state.height,n=c.state.weight,a=c.state.age;console.log(t,n,a);var r=10*n+6.25*t-5*a+5,i=10*n+6.25*t-5*a-161;e.innerHTML="<br><h6>MenBMR : "+r+" womenBMR : "+i+"</h6>",console.log("mbmr:",r,"wbmr:",i)},c.state={height:null,weight:null,age:null},c}return Object(x.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container my-3",children:[Object(j.jsx)("p",{children:"Based on Mifflin-st jeor equation"}),Object(j.jsxs)(p.a,{onSubmit:this.handleform,children:[Object(j.jsxs)(p.a.Group,{children:[Object(j.jsx)(p.a.Label,{children:"Enter height in cm"}),Object(j.jsx)(p.a.Control,{name:"height",type:"number",placeholder:"Enter height in cm",onChange:this.handleInputChange})]}),Object(j.jsxs)(p.a.Group,{children:[Object(j.jsx)(p.a.Label,{children:"Enter weight in kg"}),Object(j.jsx)(p.a.Control,{name:"weight",type:"number",placeholder:"Enter weight in kg",onChange:this.handleInputChange})]}),Object(j.jsxs)(p.a.Group,{children:[Object(j.jsx)(p.a.Label,{children:"Enter age"}),Object(j.jsx)(p.a.Control,{name:"age",type:"number",placeholder:"Enter age",onChange:this.handleInputChange})]}),Object(j.jsx)(p.a.Group,{children:Object(j.jsx)(f.a,{onClick:this.calculate,className:"btn-sucess",children:"Calculate"})})]}),Object(j.jsx)("div",{id:"res",className:"text-center"})]})}}]),n}(c.Component),k=n(71),y=n(67);function I(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(k.a,{defaultActiveKey:"second",children:[Object(j.jsx)(y.a,{eventKey:"second",title:"BMI",children:Object(j.jsx)(v,{})}),Object(j.jsx)(y.a,{eventKey:"third",title:"BMR",children:Object(j.jsx)(C,{})})]})})}var w=n(68);function L(){return Object(j.jsx)("div",{children:Object(j.jsxs)(w.a,{className:"texr-center",children:[Object(j.jsx)("h5",{children:"Developed by: Lakshit karsoliya"}),Object(j.jsx)("p",{children:Object(j.jsx)(l.a.Link,{href:"https://github.com/Lakshit-Karsoliya",children:"github"})})]})})}var B=n(6);var M=function(){return Object(j.jsx)(h.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{}),Object(j.jsxs)(B.c,{children:[Object(j.jsx)(B.a,{exact:!0,path:"/about",children:Object(j.jsx)(L,{})}),Object(j.jsx)(B.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o,{})})},children:Object(j.jsx)(I,{})})]}),Object(j.jsx)(d,{})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),E()}},[[64,1,2]]]);
//# sourceMappingURL=main.742cd8d5.chunk.js.map