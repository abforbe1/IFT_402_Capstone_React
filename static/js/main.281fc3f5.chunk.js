(this["webpackJsonpelectricdriver-app"]=this["webpackJsonpelectricdriver-app"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/ioniq.bd44acf6.jpg"},,,function(e,a,t){e.exports=t.p+"static/media/bolt.9221a2c8.jpg"},function(e,a,t){e.exports=t.p+"static/media/clarity.b2d8fdec.jpg"},function(e,a,t){e.exports=t.p+"static/media/cybertruck.2aa39ca2.jpg"},function(e,a,t){e.exports=t.p+"static/media/fusion.12e73517.jpg"},function(e,a,t){e.exports=t.p+"static/media/i3.9cf05b38.jpg"},function(e,a,t){e.exports=t.p+"static/media/kona.189d66be.jpg"},function(e,a,t){e.exports=t.p+"static/media/leaf.d6816a3b.jpg"},function(e,a,t){e.exports=t.p+"static/media/mach-e.ac3effbc.jpg"},function(e,a,t){e.exports=t.p+"static/media/model3.1ebd17d5.jpg"},function(e,a,t){e.exports=t.p+"static/media/models.e1e47800.jpg"},function(e,a,t){e.exports=t.p+"static/media/modelx.e47d94c7.jpg"},function(e,a,t){e.exports=t.p+"static/media/modely.59423395.jpg"},function(e,a,t){e.exports=t.p+"static/media/niroev.0f8bd565.jpg"},function(e,a,t){e.exports=t.p+"static/media/nirophev.6758516b.jpg"},function(e,a,t){e.exports=t.p+"static/media/priusprime.4b005ffe.jpg"},function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),s=t.n(l),c=t(5),i=t(1),m=t(2),o=t(4),p=t(3),d=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).splashFilter=function(){e.props.showSplash(),e.props.resetFilter()},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar1"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("span",{className:"navbar-brand-custom"},"ElectricDriver.net"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("span",{className:"nav-link",onClick:this.splashFilter},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link"},"EV News"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link"},"Create Account")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link"},"Sign In")))))}}]),t}(n.Component),u=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={makes:["Any Make","BMW","Chevrolet","Ford","Honda","Hyundai","Nissan","Tesla","Toyota"]},e.showMe=function(){return e.props.show?"Splash":"Splash hidden"},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.showMe()},r.a.createElement("div",{className:"row row-spacer"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"}),r.a.createElement("div",{className:"splash-text center-text col-sm-6"},r.a.createElement("p",null,"Search and compare the most popular ",r.a.createElement("span",{className:"bold italic"},"EV")," and ",r.a.createElement("span",{className:"bold italic"},"PHEV")," models on the market!")),r.a.createElement("div",{className:"col-sm-3"})),r.a.createElement("div",{id:"search",className:"row"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("select",{id:"make",onChange:function(a){return e.props.setMake(a.target.value)},className:"form-control",value:this.props.parameters.make},this.state.makes.map((function(e,a){return r.a.createElement("option",{key:a},e)})))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("button",{onClick:this.props.showResults,className:"btn btn-primary form-control"},"Compare!"))))}}]),t}(n.Component),E=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).showHeadlines=function(){return e.props.show?"container":"hidden"},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"news-bar",className:this.showHeadlines()},r.a.createElement("h3",null,"EV News Headlines"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 article-preview"},r.a.createElement("div",{className:"article-thumb article-a"}),r.a.createElement("div",null,r.a.createElement("span",null,"VW releases video of insane heads-up display in ID.3 electric car"),r.a.createElement("p",null,"VW has released a series of videos about some of the more interesting features of the ID.3 electric car, including an insane heads-up display."),r.a.createElement("a",{className:"btn btn-info",href:"https://electrek.co/2020/04/03/vw-heads-up-display-id-3-electric-car/"},"Read More"),r.a.createElement("p",null,"Electrek | 4/3/20"))),r.a.createElement("div",{className:"col-sm-4 article-preview"},r.a.createElement("div",{className:"article-thumb article-b"}),r.a.createElement("div",null,r.a.createElement("span",null,"GM and Honda are co-developing two new electric vehicles due to arrive in 2024"),r.a.createElement("p",null,"GM and Honda will jointly develop two new electric vehicles slated for 2024, the latest move by the two automakers to deepen their existing partnership."),r.a.createElement("a",{className:"btn btn-info",href:"https://techcrunch.com/2020/04/03/gm-and-honda-are-co-developing-two-new-electric-vehicles-due-to-arrive-in-2024/"},"Read More"),r.a.createElement("p",null,"TechCrunch | 4/3/20"))),r.a.createElement("div",{className:"col-sm-4 article-preview"},r.a.createElement("div",{className:"article-thumb article-c"}),r.a.createElement("div",null,r.a.createElement("span",null,"Germany Hits Record 9.2% EV Market Share in March, Tesla Model 3 #1"),r.a.createElement("p",null,"Europe\u2019s largest auto market, Germany, hit another all-time record plug-in electric vehicle market share in March, reaching 9.2%. The Tesla Model 3 was ..."),r.a.createElement("a",{className:"btn btn-info",href:"https://cleantechnica.com/2020/04/04/germany-hits-record-9-2-ev-market-share-in-march-tesla-model-3-1/"},"Read More"),r.a.createElement("p",null,"CleanTechnica | 4/4/20")))))}}]),t}(n.Component),h=t(9),v=t.n(h),b=t(10),g=t.n(b),y=t(11),k=t.n(y),f=t(12),N=t.n(f),w=t(13),x=t.n(w),M=t(6),j=t.n(M),S=t(14),V=t.n(S),C=t(15),H=t.n(C),F=t(16),O=t.n(F),W=t(17),D=t.n(W),R=t(18),A=t.n(R),T=t(19),P=t.n(T),B=t(20),I=t.n(B),U=t(21),$=t.n(U),G=t(22),K=t.n(G),q=t(23),J=t.n(q),L=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).showMe=function(){return e.props.show?"Results":"Results hidden"},e.vehicles=[{year:2020,make:"BMW",model:"i3",msrp:44450,tax:7500,range:153,kbb:4.5,body:"Compact Sedan",drive:"RWD",type:"EV",img:x.a},{year:2020,make:"Chevrolet",model:"Bolt",msrp:37495,tax:1875,range:259,kbb:4.7,body:"Compact Sedan",drive:"FWD",type:"EV",img:v.a},{year:2021,make:"Ford",model:"Mustang Mach-E",msrp:43895,tax:7500,range:230,kbb:null,body:"Hatchback",drive:"RWD",type:"EV",img:O.a},{year:2020,make:"Ford",model:"Fusion PHEV",msrp:35e3,tax:4609,range:26,kbb:null,body:"Sedan",drive:"FWD",type:"PHEV",img:N.a},{year:2020,make:"Honda",model:"Clarity",msrp:33400,tax:7500,range:89,kbb:4.7,body:"Sedan",drive:"FWD",type:"PHEV",img:g.a},{year:2020,make:"Hyundai",model:"Kona",msrp:37190,tax:7500,range:258,kbb:4.5,body:"SUV",drive:"FWD",type:"EV",img:V.a},{year:2020,make:"Hyundai",model:"Ioniq PHEV",msrp:26500,tax:4543,range:29,kbb:4.4,body:"Compact Sedan",drive:"FWD",type:"PHEV",img:j.a},{year:2020,make:"Hyundai",model:"Ioniq Electric",msrp:33045,tax:7500,range:170,kbb:4.4,body:"Compact Sedan",drive:"FWD",type:"EV",img:j.a},{year:2020,make:"Nissan",model:"Leaf",msrp:31600,tax:7500,range:149,kbb:4.4,body:"Compact Sedan",drive:"FWD",type:"EV",img:H.a},{year:2020,make:"Tesla",model:"Model 3",msrp:39990,tax:0,range:250,kbb:4.7,body:"Sedan",drive:"RWD",type:"EV",img:D.a},{year:2020,make:"Tesla",model:"Model S",msrp:79990,tax:0,range:390,kbb:4.9,body:"Sedan",drive:"AWD",type:"EV",img:A.a},{year:2020,make:"Tesla",model:"Model X",msrp:84990,tax:0,range:351,kbb:4.8,body:"SUV",drive:"AWD",type:"EV",img:P.a},{year:2020,make:"Tesla",model:"Model Y",msrp:52990,tax:0,range:315,kbb:null,body:"Compact SUV",drive:"AWD",type:"EV",img:I.a},{year:2021,make:"Tesla",model:"Cybertruck",msrp:39990,tax:0,range:250,kbb:null,body:"Pickup",drive:"AWD",type:"EV",img:k.a},{year:2020,make:"Toyota",model:"Prius Prime",msrp:27750,tax:4502,range:25,kbb:4.7,body:"Sedan",drive:"FWD",type:"PHEV",img:J.a},{year:2020,make:"Kia",model:"Niro PHEV",msrp:29545,tax:4543,range:26,kbb:4.5,body:"SUV",drive:"FWD",type:"PHEV",img:K.a},{year:2019,make:"Kia",model:"Niro EV",msrp:38500,tax:7500,range:239,kbb:null,body:"SUV",drive:"FWD",type:"EV",img:$.a}],e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.showMe()},r.a.createElement("div",{id:"results-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"edit-search",className:"col-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("span",null,"Price"),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"margin5"},"From:"),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"$")),r.a.createElement("select",{type:"text",id:"min-price",className:"form-control",onChange:function(a){return e.props.setMinprice(a.target.value)},value:this.props.parameters.minprice},r.a.createElement("option",null,"0"),r.a.createElement("option",null,"20000"),r.a.createElement("option",null,"25000"),r.a.createElement("option",null,"30000"),r.a.createElement("option",null,"35000"),r.a.createElement("option",null,"40000"),r.a.createElement("option",null,"45000"),r.a.createElement("option",null,"50000"),r.a.createElement("option",null,"60000"))),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"padding-right"},"To:"),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"$")),r.a.createElement("select",{type:"text",id:"max-price",className:"form-control",onChange:function(a){return e.props.setMaxprice(a.target.value)},value:this.props.parameters.maxprice},r.a.createElement("option",null,"25000"),r.a.createElement("option",null,"30000"),r.a.createElement("option",null,"40000"),r.a.createElement("option",null,"50000"),r.a.createElement("option",null,"60000"),r.a.createElement("option",null,"70000"),r.a.createElement("option",null,"80000"),r.a.createElement("option",null,"100000")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"min range")),r.a.createElement("input",{id:"range",onChange:function(a){return e.props.setMinrange(a.target.value)},type:"text",className:"form-control",value:this.props.parameters.minrange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"mi")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("span",null,"Make"),r.a.createElement("select",{onChange:function(a){return e.props.setMake(a.target.value)},className:"form-control",value:this.props.parameters.make},r.a.createElement("option",null,"Any Make"),r.a.createElement("option",null,"BMW"),r.a.createElement("option",null,"Chevrolet"),r.a.createElement("option",null,"Ford"),r.a.createElement("option",null,"Honda"),r.a.createElement("option",null,"Hyundai"),r.a.createElement("option",null,"Nissan"),r.a.createElement("option",null,"Tesla"),r.a.createElement("option",null,"Toyota"))),r.a.createElement("button",{id:"clear",className:"btn btn-primary form-control",onClick:this.props.resetFilter},"Reset Filter")),r.a.createElement("div",{id:"results-group",className:"col-7"},this.vehicles.map((function(a,t){return a.make!==e.props.parameters.make&&"Any Make"!==e.props.parameters.make?null:a.msrp>e.props.parameters.minprice&&a.msrp<e.props.parameters.maxprice&&a.range>e.props.parameters.minrange?r.a.createElement("div",{className:"row car-result",key:t},r.a.createElement("div",{className:"car-thumb"},r.a.createElement("img",{src:a.img,alt:a.make+a.model,height:"130"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("span",{className:"car-name"},r.a.createElement("span",{className:"car-year"},a.year,"\xa0"),a.make,"\xa0",r.a.createElement("span",{className:"car-model"},a.model)),r.a.createElement("br",null),r.a.createElement("span",{className:"car-price"},"Base Price: $",a.msrp),r.a.createElement("br",null),r.a.createElement("span",{className:"car-tax"},"Federal Tax Credit: $",a.tax),r.a.createElement("br",null),r.a.createElement("span",{className:"car-range"},"All-electric range: ",a.range," mi"),r.a.createElement("br",null),r.a.createElement("span",{className:"kbb"},"KBB Expert Rating: ",a.kbb),r.a.createElement("br",null),r.a.createElement("span",{className:"car-desc"},a.body," | ",a.drive," | \xa0",r.a.createElement("span",{className:a.type},a.type)))):void 0}))))))}}]),t}(n.Component),X=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={show:{Splash:!0,Headlines:!0,Results:!1},parameters:{make:"Any Make",minprice:0,maxprice:1e5,minrange:0,maxrange:500}},e.setMinprice=function(a){var t=Object(c.a)({},e.state.parameters);t.minprice=a,e.setState({parameters:t})},e.setMaxprice=function(a){var t=Object(c.a)({},e.state.parameters);t.maxprice=a,e.setState({parameters:t})},e.setMinrange=function(a){var t=Object(c.a)({},e.state.parameters);t.minrange=a,e.setState({parameters:t})},e.setMake=function(a){var t=Object(c.a)({},e.state.parameters);t.make=a,e.setState({parameters:t})},e.showResults=function(){e.setState({show:{Splash:!1,Headlines:!1,Results:!0}})},e.showSplash=function(){e.setState({show:{Splash:!0,Headlines:!0,Results:!1}})},e.resetFilter=function(){var a=Object(c.a)({},e.state.parameters);a.make="Any Make",a.minprice=0,a.maxprice=1e5,a.minrange=0,a.maxrange=500,e.setState({parameters:a})},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{showSplash:this.showSplash,resetFilter:this.resetFilter}),r.a.createElement(u,{setMake:this.setMake,show:this.state.show.Splash,showResults:this.showResults,parameters:this.state.parameters}),r.a.createElement(E,{show:this.state.show.Headlines}),r.a.createElement(L,{show:this.state.show.Results,parameters:this.state.parameters,setMake:this.setMake,setMinprice:this.setMinprice,setMaxprice:this.setMaxprice,setMinrange:this.setMinrange,resetFilter:this.resetFilter}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.281fc3f5.chunk.js.map