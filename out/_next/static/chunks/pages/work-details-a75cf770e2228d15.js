(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{7291:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work-details",function(){return i(4645)}])},50:function(e,s,i){"use strict";var a=i(5893),l=(i(7294),i(1664)),r=i.n(l);s.Z=function(e){var s=e.bgText,i=e.pageTitle,l=e.homePageUrl,n=e.homePageText,c=e.activePageText;return(0,a.jsxs)("div",{className:"page-title-area",children:[(0,a.jsx)("div",{className:"d-table",children:(0,a.jsx)("div",{className:"d-table-cell",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"title-content",children:[(0,a.jsx)("span",{children:s}),(0,a.jsx)("h1",{children:i}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:l,children:(0,a.jsx)("a",{children:n})})}),(0,a.jsx)("li",{children:c})]})]})})})}),(0,a.jsxs)("div",{className:"lines",children:[(0,a.jsx)("div",{className:"line"}),(0,a.jsx)("div",{className:"line"}),(0,a.jsx)("div",{className:"line"}),(0,a.jsx)("div",{className:"line"}),(0,a.jsx)("div",{className:"line"})]})]})}},3074:function(e,s,i){"use strict";var a=i(4051),l=i.n(a),r=i(5893),n=i(7294),c=i(2283),t=i(9669),o=i.n(t),d=i(6455),m=i.n(d),h=i(7630),x=i.n(h),j=i(8759);function u(e,s,i,a,l,r,n){try{var c=e[r](n),t=c.value}catch(o){return void i(o)}c.done?s(t):Promise.resolve(t).then(a,l)}function v(e,s,i){return s in e?Object.defineProperty(e,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[s]=i,e}var g=x()(m()),p={name:"",email:"",number:"",subject:"",text:""};s.Z=function(){var e=(0,n.useState)(p),s=e[0],i=e[1],a=(0,c.cI)(),t=a.register,d=a.handleSubmit,m=a.errors,h=function(e){var a=e.target,l=a.name,r=a.value;i((function(e){return function(e){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(s){v(e,s,i[s])}))}return e}({},e,v({},l,r))})),console.log(s)},x=function(){var e,a=(e=l().mark((function e(a){var r,n,c,t,d,m,h;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(j.Z,"/api/contact"),n=s.name,c=s.email,t=s.number,d=s.subject,m=s.text,h={name:n,email:c,number:t,subject:d,text:m},e.next=6,o().post(r,h);case 6:console.log(r),i(p),g.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var s=this,i=arguments;return new Promise((function(a,l){var r=e.apply(s,i);function n(e){u(r,a,l,n,c,"next",e)}function c(e){u(r,a,l,n,c,"throw",e)}n(void 0)}))});return function(e){return a.apply(this,arguments)}}();return(0,r.jsxs)("form",{id:"contactForm",onSubmit:d(x),children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",value:s.name,onChange:h,ref:t({required:!0})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.name&&"Name is required."})]})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{type:"text",name:"email",className:"form-control",placeholder:"Email",value:s.email,onChange:h,ref:t({required:!0,pattern:/^\S+@\S+$/i})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.email&&"Email is required."})]})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{type:"text",name:"subject",className:"form-control",placeholder:"Subject",value:s.subject,onChange:h,ref:t({required:!0})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.subject&&"Subject is required."})]})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{type:"text",name:"number",className:"form-control",placeholder:"Phone",value:s.number,onChange:h,ref:t({required:!0})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.number&&"Number is required."})]})}),(0,r.jsx)("div",{className:"col-lg-12",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("textarea",{name:"text",className:"form-control",cols:"30",rows:"6",placeholder:"Write message",value:s.text,onChange:h,ref:t({required:!0})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.text&&"Text body is required."})]})})]}),(0,r.jsxs)("button",{type:"submit",className:"btn common-btn",children:["Send Message ",(0,r.jsx)("span",{})]})]})}},1244:function(e,s,i){"use strict";var a=i(5893);i(7294);s.Z=function(){var e=(new Date).getFullYear();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"copyright-area seven",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"copyright-item",children:(0,a.jsxs)("p",{children:["Copyright @",e," Design & Developed by ",(0,a.jsx)("a",{href:"https://hibootstrap.com/",target:"_blank",children:"HiBootstrap"})]})})})})})}},6606:function(e,s,i){"use strict";var a=i(5893),l=(i(7294),i(1664)),r=i.n(l);s.Z=function(){return(0,a.jsx)("div",{className:"top-header",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)("img",{src:"images/logo.png",alt:"Logo"})})}),(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"#works",children:(0,a.jsx)("a",{children:"Works"})})})})})]})})})}},4645:function(e,s,i){"use strict";i.r(s);var a=i(5893),l=(i(7294),i(6606)),r=i(50),n=i(1244),c=i(1664),t=i.n(c),o=i(3074);s.default=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)(r.Z,{bgText:"Pancake Logo",pageTitle:"Pancake Logo",homePageUrl:"/",homePageText:"Home",activePageText:"Pancake Logo"}),(0,a.jsx)("div",{id:"works",className:"work-details-area pt-100",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"details-img",children:[(0,a.jsx)("img",{src:"/images/work/work-details1.jpg",alt:"Details"}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-sm-6 col-lg-3",children:(0,a.jsxs)("div",{className:"details-img-inner",children:[(0,a.jsx)("h3",{children:"Client"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Furnish Furniture Co."}),(0,a.jsx)("li",{children:"152 san Francisco, USA"})]})]})}),(0,a.jsx)("div",{className:"col-sm-6 col-lg-3",children:(0,a.jsxs)("div",{className:"details-img-inner",children:[(0,a.jsx)("h3",{children:"Date"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"15th, September 2020"}),(0,a.jsx)("li",{children:"6th, October 2020"})]})]})}),(0,a.jsx)("div",{className:"col-sm-6 col-lg-3",children:(0,a.jsxs)("div",{className:"details-img-inner",children:[(0,a.jsx)("h3",{children:"Categories"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Website Design"}),(0,a.jsx)("li",{children:"Website Development"})]})]})}),(0,a.jsx)("div",{className:"col-sm-6 col-lg-3",children:(0,a.jsxs)("div",{className:"details-img-inner",children:[(0,a.jsx)("h3",{children:"Working Role"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"User Interface & UX Design"}),(0,a.jsx)("li",{children:"User Interface & UI Design"})]})]})})]})]}),(0,a.jsxs)("div",{className:"details-description",children:[(0,a.jsx)("h3",{children:"Description"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ips um dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore mag na aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est"}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-sm-6 col-lg-6",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/images/work/work-details2.jpg",alt:"Details"})})}),(0,a.jsx)("div",{className:"col-sm-6 col-lg-6",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/images/work/work-details3.jpg",alt:"Details"})})})]}),(0,a.jsx)("p",{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy tempor invidunt ut labore et dolore"})]}),(0,a.jsx)("div",{className:"details-pages",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-sm-4 col-lg-4",children:(0,a.jsx)("div",{className:"pages-item",children:(0,a.jsxs)("a",{className:"pre-project",href:"#",children:[(0,a.jsx)("i",{className:"flaticon-right-arrow"})," Previous Project"]})})}),(0,a.jsx)("div",{className:"col-sm-4 col-lg-4",children:(0,a.jsx)("div",{className:"pages-item two",children:(0,a.jsx)(t(),{href:"/works",children:(0,a.jsx)("a",{className:"common-btn",children:"Go Back To Work"})})})}),(0,a.jsx)("div",{className:"col-sm-4 col-lg-4",children:(0,a.jsx)("div",{className:"pages-item three",children:(0,a.jsxs)("a",{className:"next-project",href:"#",children:["Next Project ",(0,a.jsx)("i",{className:"flaticon-right-arrow"})]})})})]})}),(0,a.jsx)("div",{className:"contact-area pb-70",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"section-title",children:(0,a.jsxs)("h2",{children:["Have Any Project? Just ",(0,a.jsx)("span",{children:"Drop A Line"}),". I Always Love To Hear From You"]})}),(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-7",children:(0,a.jsx)(o.Z,{})}),(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsxs)("div",{className:"contact-content",children:[(0,a.jsx)("div",{className:"top",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Phone:"}),(0,a.jsx)("a",{href:"tel:+00932123456",children:"+009 321 23456"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Email:"}),(0,a.jsx)("a",{href:"mailto:hello@reton.com",children:"hello@reton.com"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Website:"}),(0,a.jsx)("a",{href:"#",target:"_blank",children:"www.reton.com"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Address:"}),(0,a.jsx)("a",{href:"#",children:"12/7, Mc Street, Canada"})]})]})}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://facebook.com/",target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://twitter.com/",target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://linkedin.com/",target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-linkedin"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://behance.com/",target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-behance"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://dribbble.com/",target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-dribbble"})})})]})})]})})]})]})})]})}),(0,a.jsx)(n.Z,{})]})}},8759:function(e,s){"use strict";s.Z="https://reton-react.hibootstrap.com"}},function(e){e.O(0,[664,407,774,888,179],(function(){return s=7291,e(e.s=s);var s}));var s=e.O();_N_E=s}]);