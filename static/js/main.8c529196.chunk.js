(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(34)},25:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(14),c=t.n(o),r=(t(25),t(6));function s(){var e=Object(l.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],m=s[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"accordion mx-5 my-2",id:"accordionExample",style:t},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),n.a.createElement("div",null,n.a.createElement("button",{className:"mx-5",onClick:function(){"white"===t.backgroundColor?(o({color:"white",backgroundColor:"black",border:"1px solid blue"}),m("Enable White Mode")):(o({color:"black",backgroundColor:"white"}),m("Enable Dark Mode"))}},i)))}function i(e){return e.alert&&n.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},n.a.createElement("strong",null,e.alert.type)," ",e.alert.sms,n.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))}var m=t(9);function d(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link",to:"/about"},"About"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,"aria-checked":"false",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode Enable")))))))}var u=function(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mb-3 mx-5 text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},e.title),n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},id:"exampleFormControlTextarea1",rows:"7"})),n.a.createElement("button",{onClick:function(){var e=o.toUpperCase();c(e)},className:"btn btn-primary mx-5"},"Upper Case"),n.a.createElement("button",{onClick:function(){var e=o.toLowerCase();c(e)},className:"btn btn-primary mx-5"},"Lower Case"),n.a.createElement("button",{onClick:function(){for(var e=o.split(" "),a=0;a<e.length;a++)e[a]=e[a].charAt(0).toUpperCase()+e[a].slice(1);var t=e.join(" ");c(t)},className:"btn btn-primary mx-5"},"Capitilizing Case"),n.a.createElement("button",{onClick:function(){navigator.clipboard.writeText(o)},className:"btn btn-primary mx-5"},"Copy To ClipBoard"),n.a.createElement("button",{onClick:function(){c("")},className:"btn btn-primary mx-5"},"Clear Text"),n.a.createElement("div",{className:"container my-3 text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("h2",null,"Your Text Summary"),n.a.createElement("p",null,n.a.createElement("strong",null,"Total ",o.split(" ").length," Words And ",o.length," Charecters")),n.a.createElement("p",null,n.a.createElement("strong",null,"Total Times Takes For Read Is ",.006*o.length," Minutes"))),n.a.createElement("div",{className:"container my-3 text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("h4",null,n.a.createElement("strong",null,"Preview")),n.a.createElement("p",null,"".concat(o.length>0?o:"Enter Your Text On The Text Area"))))},h=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),p=b[0],g=b[1],E=function(e,a){g({type:e,sms:a})};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(d,{title:"Text Editions",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#080540",E("Successfull!","You Did It Congrats!")):(o("light"),document.body.style.backgroundColor="white")}}),n.a.createElement(i,{alert:p}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/about"},n.a.createElement(s,null)),n.a.createElement(h.a,{exact:!0,path:"/"},n.a.createElement(u,{title:"Enter Text Area",mode:t}))))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,35)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),p()}},[[16,3,2]]]);
//# sourceMappingURL=main.8c529196.chunk.js.map