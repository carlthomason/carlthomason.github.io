(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,a,t){e.exports=t(23)},19:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(11),r=t.n(c),s=(t(18),t(19),t(20),t(2)),o=t(3),i=t(5),m=t(4),d=t(1),u=t.n(d),v=t(6),p=t.n(v),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={logo:p.a},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=u()("nav").outerHeight();u()(".navbar-toggler").on("click",(function(){u()("#mainNav").hasClass("navbar-reduce")||u()("#mainNav").addClass("navbar-reduce")})),u()("body").scrollspy({target:"#mainNav",offset:a}),u()(".js-scroll").on("click",(function(){u()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:p.a})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:p.a}))})),u()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=u()(this.hash);if((e=e.length?e:u()("[name="+this.hash.slice(1)+"]")).length)return u()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),u()(".js-scroll").on("click",(function(){u()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},n.a.createElement("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"100px"}})),n.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"}),n.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#home"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#about"},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#work"},"Work")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact"))))))}}]),t}(n.a.Component),h=t(12),b=t.n(h),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"home",className:"intro route bg-image background"},n.a.createElement("div",{className:"intro-content display-table"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Carl Thomason"),n.a.createElement("p",{className:"intro-subtitle"},n.a.createElement("span",{className:"text-slider-items"}),n.a.createElement("strong",{className:"text-slider"},n.a.createElement(b.a,{strings:["Front End Developer","Back End Developer","Software Engineer"],typeSpeed:100,backDelay:1e3,backSpeed:30,loop:!0})))))))}}]),t}(n.a.Component),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"80%",value:"80"},{id:"CSS3_skill",content:"CSS3",porcentage:"75%",value:"75"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"80%",value:"80"},{id:"Java_skill",content:"Java",porcentage:"90%",value:"90"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"90%",value:"90"},{id:"Python_skill",content:"Python",porcentage:"80%",value:"80"},{id:"Django_skill",content:"Django",porcentage:"85%",value:"85"},{id:"Flask_skill",content:"Flask",porcentage:"75%",value:"75"},{id:"SQLite_skill",content:"SQLite",porcentage:"85%",value:"85"},{id:"MySQL_skill",content:"MySQL",porcentage:"80%",value:"80"}],about_me:[{id:"first-p-about-background",content:"My name is Carl Thomason. I am a US Army veteran and aspiring software developer. I am married and have 3 wonderful boys. I am originally from southern Illinois and currently reside in Central Louisiana. "},{id:"second-p-about-education",content:"At the age of 18, I joined the military and served for 12 years as a Cannon Crewmember and Combat Engineer. I have deployed multiple times to Afghanistan and Iraq. After the military, I pursued my education in Paramedicine. I worked as an EMT-Basic and as a Paramedic. I worked part-time as a police officer and served on my local fire department as a firefighter/EMT. Due to my disability and constraints, I have chose to pursue a different career path."},{id:"third-p-about-experience",content:"During my time in the military, we use to work with robots to detonate and finds explosive devices. This caught my attention in software development. At the time, I believe I would never be good enough to do the job. My insight changed in the last 6 months and allowed me the opportunities that I dreamed about. I applied and was accepted to Coding Dojo to complete training in Full Stack Development in Python, Java, and MERN. I graduated April 2, 2021. I decided I wanted to pursue my training more, so I enrolled in Claim Academy. After a technical interview, I was accepted into the academy's 12-week C#/C-Net program with a graduation date of July 30, 2021. "}]},e}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"box-shadow-full"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}})),n.a.createElement("div",{className:"skill-mf"},this.state.skills.map((function(e){return n.a.createElement(n.a.Fragment,{key:e.id},n.a.createElement("span",null,e.content)," ",n.a.createElement("span",{className:"pull-right"},e.porcentage),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})))})))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"about-me pt-4 pt-md-0"},n.a.createElement("div",{className:"title-box-2"},n.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return n.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),t}(n.a.Component),N=t(7),w=t.n(N),k=t(8),y=t.n(k),x=t(9),j=t.n(x),S=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"title-box text-center"},n.a.createElement("h3",{className:"title-a"},"Portfolio"),n.a.createElement("p",{className:"subtitle-a"},"Projects are listed below"),n.a.createElement("div",{className:"line-mf"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"work-box"},n.a.createElement("a",{href:w.a},n.a.createElement("div",{className:"work-img"},n.a.createElement("img",{src:w.a,alt:"",className:"img-fluid"})),n.a.createElement("div",{className:"work-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("h2",{className:"w-title"},"Backyard Beer"),n.a.createElement("div",{className:"w-more"},n.a.createElement("span",{className:"w-category"},"HTML5 CSS3 Bootstrap Python Django"))),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("div",{className:"w-like"},n.a.createElement("span",{className:"ion-ios-plus-outline"})))))))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"work-box"},n.a.createElement("a",{href:y.a},n.a.createElement("div",{className:"work-img"},n.a.createElement("img",{src:y.a,alt:"",className:"img-fluid"})),n.a.createElement("div",{className:"work-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("h2",{className:"w-title"},"Outdoors"),n.a.createElement("div",{className:"w-more"},n.a.createElement("span",{className:"w-category"},"HTML5 CSS3 Bootstrap Java Eclipse-STS")," ")),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("div",{className:"w-like"},n.a.createElement("span",{className:"ion-ios-plus-outline"})))))))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"work-box"},n.a.createElement("a",{href:j.a},n.a.createElement("div",{className:"work-img"},n.a.createElement("img",{src:j.a,alt:"",className:"img-fluid"})),n.a.createElement("div",{className:"work-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("h2",{className:"w-title"},"Portfolio"),n.a.createElement("div",{className:"w-more"},n.a.createElement("span",{className:"w-category"},"HTML5 CSS3 Bootstrap ReactJS Javascript jQuery"))),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("div",{className:"w-like"},n.a.createElement("span",{className:"ion-ios-plus-outline"})))))))))))}}]),t}(n.a.Component),C=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("section",null,n.a.createElement("div",{className:"overlay-mf"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"contact-mf"},n.a.createElement("div",{id:"contact",className:"box-shadow-full"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"title-box-2"}),n.a.createElement("div",{className:"contact-clean"},n.a.createElement("form",{"data-bss-recipient":"c28e0229ddb0662349c54f67de8bc0ab"},n.a.createElement("h2",{className:"text-center"},"Send A Message"),n.a.createElement("div",{class:"form-group"},n.a.createElement("input",{class:"form-control",type:"text",name:"name",placeholder:"Name"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("input",{class:"form-control is-invalid",type:"email",name:"email",placeholder:"Email"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("textarea",{class:"form-control",name:"message",placeholder:"Message",rows:"14"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("button",{class:"btn btn-primary",type:"submit"},"send "))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},n.a.createElement("h5",{className:"title-left"},"Let's Talk")),n.a.createElement("div",{className:"more-info"},n.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",n.a.createElement("br",null),"Simply fill out the form and send me an email.")),n.a.createElement("div",{className:"socials"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/carlthomason",target:"github",rel:"github"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",fill:"dark",class:"bi bi-github",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/carl-thomason/",target:"linkedin",rel:"linkedin"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",fill:"blue",class:"bi bi-linkedin",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("a",{href:"https://thomason-workspace.slack.com/account/profile",target:"slack",rel:"slack"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",fill:"",class:"bi bi-slack",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("a",{href:"https://discord.com/channels/827204831957614663/827204831957614666",target:"discord",rel:"discord"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"75",height:"75",fill:"#2962ff",class:"bi bi-discord",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"}),n.a.createElement("path",{d:"M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"}))))))))))))))}}]),t}(n.a.Component),O=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){u()(window).on("load",(function(){u()("#preloader").length&&u()("#preloader").delay(100).fadeOut("slow",(function(){u()(this).remove()}))}))}},{key:"render",value:function(){return n.a.createElement("div",{id:"preloader"})}}]),t}(n.a.Component);r.a.render(n.a.createElement(n.a.Fragment,null,n.a.createElement(E,null),n.a.createElement(f,null),n.a.createElement(g,null),n.a.createElement(S,null),n.a.createElement(C,null),n.a.createElement(O,null)),document.getElementById("root"))},6:function(e,a,t){e.exports=t.p+"static/media/thomason.d524261d.png"},7:function(e,a,t){e.exports=t.p+"static/media/Backyard_beer.df1f0ba3.png"},8:function(e,a,t){e.exports=t.p+"static/media/outdoors.5bcabf4b.png"},9:function(e,a,t){e.exports=t.p+"static/media/port.8b8a164f.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.db8fab3a.chunk.js.map