(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{3757:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-details",function(){return a(3747)}])},3538:function(e,s,a){"use strict";var i=a(5893),l=(a(7294),a(1664)),r=a.n(l);s.Z=function(e){var s=e.bgText,a=e.pageTitle,l=e.homePageUrl,t=e.homePageText,n=e.activePageText;return(0,i.jsxs)("div",{className:"page-title-area",children:[(0,i.jsx)("div",{className:"d-table",children:(0,i.jsx)("div",{className:"d-table-cell",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"title-content",children:[(0,i.jsx)("span",{children:s}),(0,i.jsx)("h1",{children:a}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(r(),{href:l,children:(0,i.jsx)("a",{children:t})})}),(0,i.jsx)("li",{children:n})]})]})})})}),(0,i.jsxs)("div",{className:"lines",children:[(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"})]})]})}},6212:function(e,s,a){"use strict";var i=a(7568),l=a(4924),r=a(6042),t=a(9396),n=a(655),c=a(5893),o=a(7294),d=a(2283),m=a(9669),h=a.n(m),x=a(6455),u=a.n(x),j=a(7630),b=a.n(j),p=a(7105),g=b()(u()),v={name:"",email:"",number:"",subject:"",text:""};s.Z=function(){var e=(0,o.useState)(v),s=e[0],a=e[1],m=(0,d.cI)(),x=m.register,u=m.handleSubmit,j=m.errors,b=function(e){var i=e.target,n=i.name,c=i.value;a((function(e){return(0,t.Z)((0,r.Z)({},e),(0,l.Z)({},n,c))})),console.log(s)},f=function(){var e=(0,i.Z)((function(e){var i,l,r,t,c,o,d,m;return(0,n.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),i="".concat(p.Z,"/api/contact"),l=s.name,r=s.email,t=s.number,c=s.subject,o=s.text,d={name:l,email:r,number:t,subject:c,text:o},[4,h().post(i,d)];case 1:return e.sent(),console.log(i),a(v),g.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),[3,3];case 2:return m=e.sent(),console.log(m),[3,3];case 3:return[2]}}))}));return function(s){return e.apply(this,arguments)}}();return(0,c.jsxs)("form",{id:"contactForm",onSubmit:u(f),children:[(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-lg-6",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",value:s.name,onChange:b,ref:x({required:!0})}),(0,c.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.name&&"Name is required."})]})}),(0,c.jsx)("div",{className:"col-lg-6",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("input",{type:"text",name:"email",className:"form-control",placeholder:"Email",value:s.email,onChange:b,ref:x({required:!0,pattern:/^\S+@\S+$/i})}),(0,c.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.email&&"Email is required."})]})}),(0,c.jsx)("div",{className:"col-lg-6",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("input",{type:"text",name:"subject",className:"form-control",placeholder:"Subject",value:s.subject,onChange:b,ref:x({required:!0})}),(0,c.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.subject&&"Subject is required."})]})}),(0,c.jsx)("div",{className:"col-lg-6",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("input",{type:"text",name:"number",className:"form-control",placeholder:"Phone",value:s.number,onChange:b,ref:x({required:!0})}),(0,c.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.number&&"Number is required."})]})}),(0,c.jsx)("div",{className:"col-lg-12",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("textarea",{name:"text",className:"form-control",cols:"30",rows:"6",placeholder:"Write message",value:s.text,onChange:b,ref:x({required:!0})}),(0,c.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.text&&"Text body is required."})]})})]}),(0,c.jsxs)("button",{type:"submit",className:"btn common-btn",children:["Send Message ",(0,c.jsx)("span",{})]})]})}},3747:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var i=a(5893),l=(a(7294),a(1664)),r=a.n(l),t=function(){return(0,i.jsx)("div",{className:"top-header",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("img",{src:"images/logo.png",alt:"Logo"})})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)(r(),{href:"#service-details",children:(0,i.jsx)("a",{children:"Service Details"})})})})})]})})})},n=a(3538),c=function(){var e=(new Date).getFullYear();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"copyright-area seven",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"copyright-item",children:(0,i.jsxs)("p",{children:["Copyright @",e," Design & Developed by ",(0,i.jsx)("a",{href:"https://hibootstrap.com/",target:"_blank",children:"HiBootstrap"})]})})})})})},o=a(6212),d=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{}),(0,i.jsx)(n.Z,{bgText:"Web Design",pageTitle:"Web Design",homePageUrl:"/",homePageText:"Home",activePageText:"Web Design"}),(0,i.jsx)("div",{id:"service-details",className:"service-details-area pt-100 pb-70",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"details-item",children:[(0,i.jsx)("img",{src:"/images/services/service-details1.jpg",alt:"Details"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ips um dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore mag na aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est"}),(0,i.jsx)("h3",{children:"Key Features"}),(0,i.jsxs)("ul",{className:"item",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"bx bxs-chevrons-right"}),"Lorem Ipsum is simply dummy text of the printing and typesetting industry"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"bx bxs-chevrons-right"}),"It is a long established fact that a reader will be distracted by the readable"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"bx bxs-chevrons-right"}),"Contrary to popular belief, Lorem Ipsum is not simply random text"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"bx bxs-chevrons-right"}),"There are many variations of passages of Lorem Ipsum available"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"bx bxs-chevrons-right"}),"All the Lorem Ipsum generators on the Internet tend to repeat predefined"]})]}),(0,i.jsx)("p",{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy tempor invidunt ut labore et dolore"}),(0,i.jsx)("div",{className:"contact-area",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"section-title",children:(0,i.jsxs)("h2",{children:["Have Any Project? Just ",(0,i.jsx)("span",{children:"Drop A Line"}),". I Always Love To Hear From You"]})}),(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsx)(o.Z,{})}),(0,i.jsx)("div",{className:"col-lg-5",children:(0,i.jsxs)("div",{className:"contact-content",children:[(0,i.jsx)("div",{className:"top",children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"Phone:"}),(0,i.jsx)("a",{href:"tel:+00932123456",children:"+009 321 23456"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"Email:"}),(0,i.jsx)("a",{href:"mailto:hello@reton.com",children:"hello@reton.com"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"Website:"}),(0,i.jsx)("a",{href:"#",target:"_blank",children:"www.reton.com"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"Address:"}),(0,i.jsx)("a",{href:"#",target:"_blank",children:"12/7, Mc Street, Canada"})]})]})}),(0,i.jsx)("div",{className:"bottom",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://facebook.com/",target:"_blank",children:(0,i.jsx)("i",{className:"bx bxl-facebook"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://twitter.com/",target:"_blank",children:(0,i.jsx)("i",{className:"bx bxl-twitter"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://linkedin.com/",target:"_blank",children:(0,i.jsx)("i",{className:"bx bxl-linkedin"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://behance.com/",target:"_blank",children:(0,i.jsx)("i",{className:"bx bxl-behance"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://dribbble.com/",target:"_blank",children:(0,i.jsx)("i",{className:"bx bxl-dribbble"})})})]})})]})})]})]})})]})})}),(0,i.jsx)(c,{})]})}},7105:function(e,s){"use strict";s.Z="https://reton-react.hibootstrap.com"}},function(e){e.O(0,[664,870,774,888,179],(function(){return s=3757,e(e.s=s);var s}));var s=e.O();_N_E=s}]);