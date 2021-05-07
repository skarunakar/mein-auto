(this["webpackJsonpmein-auto"]=this["webpackJsonpmein-auto"]||[]).push([[0],{237:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),i=a(20),s=a(12),l=a(32),u=a(25),m=a.n(u),d=a(272),f=a(284),j=a(282),b=a(285),h=a(274),p={FETCH_COLORS:"FETCH_COLORS",FETCH_MANUFACTURERS:"FETCH_MANUFACTURERS",FETCH_CAR_LIST:"FETCH_CAR_LIST",FETCH_CAR_DETAILS:"FETCH_CAR_DETAILS",SAVE_TO_CART:"SAVE_TO_CART",SET_FILTERS:"SET_FILTERS"},g=a(10),O=a.n(g),v=O()("data");var C=a(108),x=a.n(C).a.create({baseURL:"https://auto1-mock-server.herokuapp.com/",headers:{"Content-Type":"application/json",accept:"application/json"}}),S={get:function(e,t){return x.get(e,t)},post:function(e,t){return x.post(e,t)}},N={cars:O()("cars"),totalPageCount:O()("totalPageCount"),totalCarsCount:O()("totalCarsCount")},T={car:O()("car")},y=function(e){return function(t){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return S.get("api/cars?".concat(e))})(function(e){var t=e.color,a=e.manufacturer,r=e.sort,n=e.page;return"color=".concat(t,"&manufacturer=").concat(a,"&sort=").concat(r,"&page=").concat(n)}(e)).then(function(e){return function(t){var a=v(t),r=N.cars(a),n=N.totalPageCount(a),o=N.totalCarsCount(a);e({type:p.FETCH_CAR_LIST,payload:{carList:r,totalPageCount:n,totalCarsCount:o}})}}(t))}},E={colors:O()("colors")},_={manufacturers:O()("manufacturers"),name:O()("name"),models:O()("models")};function F(e){return function(t){t({type:p.SET_FILTERS,payload:e})}}var L=a(269),k=Object(L.a)((function(e){return{formContainer:{display:"flex",flexDirection:"column",minWidth:"12rem",margin:"0 2.4rem",border:"0.1rem solid ".concat(e.palette.divider),padding:"1.2rem 2.4rem 2.4rem"},formControl:{margin:"1.2rem 0"},select:{height:"4rem",textTransform:"capitalize",padding:"0.8rem",backgroundColor:"#fff",border:"0.1rem solid ".concat(e.palette.divider),fontSize:"1.4rem"},menuItem:{textTransform:"capitalize",fontSize:"1.4rem"},button:{width:"12.8rem",height:"3.2rem",color:"#fff",backgroundColor:"#EA7F28",alignSelf:"flex-end",fontSize:"1.4rem","&:hover":{backgroundColor:"#D37324"}}}})),A=a(3),R=function(e){var t=k(),a=e.colors,n=e.manufacturers,o=e.filterState,c=e.setFilters,i=e.fetchCarList,s=e.fetchColors,l=e.fetchManufacturers,u=o.color,m=o.manufacturer;Object(r.useEffect)((function(){s(),l()}),[]);var p=Object(r.useCallback)((function(e){e.preventDefault(),i(o)}),[i,o]);return Object(A.jsxs)("form",{onSubmit:p,className:t.formContainer,children:[Object(A.jsx)("div",{children:"Filter"}),Object(A.jsxs)(d.a,{className:t.formControl,children:[Object(A.jsx)(f.a,{shrink:!0,children:"Color"}),Object(A.jsxs)(j.a,{displayEmpty:!0,"data-testid":"car-filter-select",value:u||"",className:t.select,onChange:function(e){c({color:e.target.value,page:1})},children:[Object(A.jsx)(b.a,{value:"",className:t.menuItem,children:"All car colors"}),a.map((function(e){return Object(A.jsx)(b.a,{value:e,className:t.menuItem,children:e},e)}))]})]}),Object(A.jsxs)(d.a,{className:t.formControl,children:[Object(A.jsx)(f.a,{shrink:!0,children:"Manufacturer"}),Object(A.jsxs)(j.a,{value:m||"",displayEmpty:!0,"data-testid":"manufacturer-filter-select",className:t.select,onChange:function(e){c({manufacturer:e.target.value,page:1})},children:[Object(A.jsx)(b.a,{value:"",className:t.menuItem,children:"All manufacturers"}),n.map((function(e){return Object(A.jsx)(b.a,{value:e.name,className:t.menuItem,children:e.name},e.name)}))]})]}),Object(A.jsx)(h.a,{className:t.button,type:"submit","data-testid":"filter-button",variant:"contained",color:"primary",children:"Filter"})]})},D={fetchColors:function(){return function(e){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return S.get("api/colors?".concat(e))})().then(function(e){return function(t){var a=v(t),r=E.colors(a);e({type:p.FETCH_COLORS,payload:{colors:r}})}}(e))}},fetchManufacturers:function(){return function(e){var t;S.get("api/manufacturers?".concat(t)).then(function(e){return function(t){var a=v(t),r=_.manufacturers(a);e({type:p.FETCH_MANUFACTURERS,payload:{manufacturers:r}})}}(e))}},fetchCarList:y,setFilters:F};R.defaultProps={colors:[],manufacturers:[],setFilters:m.a,fetchCarList:m.a,fetchColors:m.a,fetchManufacturers:m.a,filterState:{}};var I=Object(l.b)((function(e){return{colors:e.filters.colors,manufacturers:e.filters.manufacturers,filterState:e.filters.filterState}}),D)(R),P=a(275),w=a(276),H=a(277),U={stockNumber:O()("stockNumber"),manufacturerName:O()("manufacturerName"),modelName:O()("modelName"),color:O()("color"),fuelType:O()("fuelType"),pictureUrl:O()("pictureUrl"),mileage:O()("mileage")},z={number:O()("number"),unit:O()("unit")};var M=function(e){var t=U.mileage(e);return{number:z.number(t),unit:z.unit(t),fuelType:U.fuelType(e),color:U.color(e),manufacturerName:U.manufacturerName(e),modelName:U.modelName(e),pictureUrl:U.pictureUrl(e),stockNumber:U.stockNumber(e)}},W=Object(L.a)({root:{display:"flex",maxWidth:"70rem",height:"10.9rem",padding:"1.2rem",margin:"0.8rem 0"},content:{padding:"0 2.4rem"},itemTitle:{fontWeight:700,fontSize:"3.2rem"},subTitle:{textTransform:"capitalize"},img:{width:"10rem",height:"8rem"}}),J=function(e){var t=W(),a=e.car,r=M(a),n=r.number,o=r.unit,c=r.fuelType,s=r.color,l=r.manufacturerName,u=r.modelName,m=r.pictureUrl,d=r.stockNumber;return Object(A.jsxs)(P.a,{className:t.root,variant:"outlined",children:[Object(A.jsx)(w.a,{className:t.img,image:m}),Object(A.jsxs)(H.a,{className:t.content,children:[Object(A.jsxs)("div",{className:t.itemTitle,children:[l," ",u]}),Object(A.jsxs)("div",{className:t.subTitle,children:["Stock # ",d," - ",n," ",o," - ",c," - ",s]}),Object(A.jsx)(i.b,{to:"/car/".concat(d),children:"View Details"})]})]})};J.defaultProps={car:{}};var V=J,B=a(278),G=a(279),K=a(280),Y=a(283),Z=Object(L.a)({root:{marginTop:"2.4rem"},gridItem:{padding:"0 0.8rem"},listHeader:{fontSize:"1.8rem",fontFamily:"Roboto",fontWeight:700,marginBottom:"1.2rem"},paginationContainer:{margin:"0.8rem"}}),q=function(e){return e.map((function(e){return Object(A.jsx)(V,{car:e},U.stockNumber(e))}))},Q=function(e){var t=e.carList,a=e.totalCarsCount,n=e.fetchCarList,o=e.filterState,c=e.totalPageCount,i=e.setFilters,s=e.isLoading,l=o.page;Object(r.useEffect)((function(){n(o)}),[l]);var u=Object(r.useCallback)((function(e,t){i({page:t})}),[o]),m=Z();return Object(A.jsx)(B.a,{className:m.root,children:Object(A.jsxs)(G.a,{container:!0,children:[Object(A.jsx)(G.a,{item:!0,xs:12,md:4,children:Object(A.jsx)(I,{})}),Object(A.jsx)(G.a,{item:!0,xs:12,md:8,className:m.gridItem,children:s?Object(A.jsx)(K.a,{}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:m.listHeader,children:"Available Cars"}),Object(A.jsx)("div",{children:"Showing ".concat(l!==c?10:a-10*(l-1)," of ").concat(a," results")}),q(t),Object(A.jsx)(Y.a,{page:l,showFirstButton:!0,showLastButton:!0,count:c,className:m.paginationContainer,onChange:u})]})})]})})},X={fetchCarList:y,setFilters:F};Q.defaultProps={carList:[],setFilters:m.a,fetchCarList:m.a,filterState:{},totalCarsCount:void 0,totalPageCount:void 0};var $=Object(l.b)((function(e){return{carList:e.cars.carList,totalCarsCount:e.cars.totalCarsCount,totalPageCount:e.cars.totalPageCount,isLoading:e.cars.isLoading,filterState:e.filters.filterState}}),X)(Q),ee=a(118),te=a(114),ae=a.n(te),re=a(115),ne=a.n(re);var oe=Object(L.a)((function(e){return{img:{backgroundSize:"contain",height:"39rem",backgroundColor:"#EDEDED"},detailsContainer:{display:"flex",justifyContent:"space-between",marginTop:"2.4rem",width:"80rem"},prodAvailability:{maxWidth:"45.7rem"},saveContainer:{border:"0.1rem solid ".concat(e.palette.divider),margin:"0 0 0 2.4rem",padding:"2.4rem",width:"30rem",display:"flex",flexDirection:"column"},itemTitle:{fontWeight:700,fontSize:"3.2rem"},itemSubTitle:{fontWeight:700,fontSize:"1.8rem",margin:"1.2rem 0",textTransform:"capitalize"},button:{width:"12.8rem",height:"3.2rem",color:"#fff",backgroundColor:"#EA7F28",alignSelf:"flex-end",fontSize:"1.4rem","&:hover":{backgroundColor:"#D37324"}}}})),ce=function(e,t,a){return function(){var r=JSON.parse(localStorage.getItem("favorites"))||[],n="Save"===e;n?r.push(t):r=ae()(r,t),localStorage.setItem("favorites",JSON.stringify(r)),a(n)}},ie=function(e){var t=Object(s.f)().stockNumber,a=JSON.parse(localStorage.getItem("favorites")),n=Object(r.useState)(function(e,t){return ne()(e,(function(e){return e===t}))}(a,t)),o=Object(ee.a)(n,2),c=o[0],i=o[1],l=oe(),u=e.car,m=e.fetchCarDetails,d=M(u),f=d.number,j=d.unit,b=d.fuelType,p=d.color,g=d.manufacturerName,O=d.modelName,v=d.pictureUrl;return Object(r.useEffect)((function(){m(t)}),[]),Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{children:Object(A.jsx)(w.a,{className:l.img,image:v})}),Object(A.jsxs)(B.a,{className:l.detailsContainer,children:[Object(A.jsxs)(G.a,{item:!0,children:[Object(A.jsxs)("div",{className:l.itemTitle,children:[g," ",O]}),Object(A.jsxs)("div",{className:l.itemSubTitle,children:["Stock ",t," - ",f," ",j," - ",b," - ",p]}),Object(A.jsx)("div",{className:l.prodAvailability,children:"This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions."})]}),Object(A.jsxs)(G.a,{item:!0,className:l.saveContainer,children:[Object(A.jsx)("div",{children:"If you like this car, click the button and save it in your collection of favorite items."}),Object(A.jsx)(h.a,{className:l.button,onClick:ce(c?"Remove":"Save",t,i),children:c?"Remove":"Save"})]})]})]})},se={fetchCarDetails:function(e,t){return function(a){(function(e,t){return S.get("api/cars/".concat(e,"?").concat(t))})(e,t).then(function(e){return function(t){var a=v(t),r=T.car(a);e({type:p.FETCH_CAR_DETAILS,payload:{carDetails:r}})}}(a))}}};ie.defaultProps={car:[],fetchCarDetails:m.a};var le=Object(l.b)((function(e){return{car:e.cars.carDetails}}),se)(ie),ue=a.p+"static/media/logo.242ab3b0.svg",me=a(50),de=a.n(me),fe=function(){return Object(A.jsxs)("div",{className:de.a.errorContainer,children:[Object(A.jsx)("img",{className:de.a.logo,src:ue,alt:"logo"}),Object(A.jsx)("h1",{children:"404 - Not Found"}),Object(A.jsx)("div",{className:de.a.errorDetail,children:"Sorry, the page you are looking for does not exist"}),Object(A.jsxs)("div",{className:de.a.errorDetail,children:["You can always go back to the ",Object(A.jsx)(i.b,{to:"/",children:"homepage"})]})]})},je=n.a.memo(fe);var be=function(){return Object(A.jsxs)(s.c,{children:[Object(A.jsx)(s.a,{exact:!0,path:"/",component:$}),Object(A.jsx)(s.a,{exact:!0,path:"/car/:stockNumber",component:le}),Object(A.jsx)(s.a,{path:"*",children:Object(A.jsx)(je,{})})]})},he=a(281),pe=a(64),ge=a.n(pe),Oe=function(){return Object(A.jsxs)("div",{className:ge.a.headerContainer,children:[Object(A.jsx)(i.b,{to:"/",children:Object(A.jsx)("img",{className:ge.a.logo,src:ue,alt:"mein-auto"})}),Object(A.jsxs)("div",{className:ge.a.rightheaderPanel,children:[Object(A.jsx)(i.b,{to:"/purchase",children:"Purchase"}),Object(A.jsx)(i.b,{to:"/myOrders",children:"My Orders"}),Object(A.jsx)(i.b,{to:"/sell",children:"Sell"})]})]})},ve=n.a.memo(Oe),Ce=Object(L.a)((function(){return{footerContainer:{borderTop:"0.1rem solid #EDEDED",padding:"2.4rem 0",display:"flex",justifyContent:"center",alignItems:"center",height:"8rem",fontSize:"1.4rem"}}})),xe=function(){var e=Ce();return Object(A.jsx)("footer",{className:e.footerContainer,children:"\xa9 Auto1 Group 2018"})},Se=n.a.memo(xe),Ne=a(39),Te=a(116),ye=a(117),Ee=a(18),_e={colors:[],manufacturers:[],filterState:{color:"",manufacturer:"",sort:"asc",page:1}},Fe=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case p.FETCH_COLORS:return Object(Ee.a)(Object(Ee.a)({},a),{},{colors:null===r||void 0===r||null===(e=r.payload)||void 0===e?void 0:e.colors});case p.FETCH_MANUFACTURERS:return Object(Ee.a)(Object(Ee.a)({},a),{},{manufacturers:null===r||void 0===r||null===(t=r.payload)||void 0===t?void 0:t.manufacturers});case p.SET_FILTERS:return Object(Ee.a)(Object(Ee.a)({},a),{},{filterState:Object(Ee.a)(Object(Ee.a)({},a.filterState),null===r||void 0===r?void 0:r.payload)});default:return a}},Le={carList:[],page:1,isLoading:!0},ke=function(){var e,t,a,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case p.FETCH_CAR_LIST:return Object(Ee.a)(Object(Ee.a)({},n),{},{carList:null===o||void 0===o||null===(e=o.payload)||void 0===e?void 0:e.carList,totalPageCount:null===o||void 0===o||null===(t=o.payload)||void 0===t?void 0:t.totalPageCount,totalCarsCount:null===o||void 0===o||null===(a=o.payload)||void 0===a?void 0:a.totalCarsCount,isLoading:!1});case p.FETCH_CAR_DETAILS:return Object(Ee.a)(Object(Ee.a)({},n),{},{carDetails:null===o||void 0===o||null===(r=o.payload)||void 0===r?void 0:r.carDetails});default:return n}},Ae=Object(Ne.combineReducers)({filters:Fe,cars:ke}),Re=[ye.a],De=Object(Ne.compose)(Te.composeWithDevTools,Ne.applyMiddleware),Ie=Object(Ne.createStore)(Ae,{},De.apply(void 0,Re));var Pe=function(){return Object(A.jsxs)(l.a,{store:Ie,children:[Object(A.jsx)(he.a,{}),Object(A.jsxs)(i.a,{basename:"/",children:[Object(A.jsx)(ve,{}),Object(A.jsx)("main",{id:"content",children:Object(A.jsx)(s.c,{children:Object(A.jsx)(s.a,{path:"*",component:be})})}),Object(A.jsx)(Se,{})]})]})};a(237);c.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(Pe,{})}),document.getElementById("root"))},50:function(e,t,a){e.exports={errorContainer:"pageNotFoundError_errorContainer__3kmPC",logo:"pageNotFoundError_logo__1OFVe",errorDetail:"pageNotFoundError_errorDetail__3yDkr"}},64:function(e,t,a){e.exports={logo:"header_logo__2dFPS",headerContainer:"header_headerContainer__1KV5u",rightheaderPanel:"header_rightheaderPanel__1xZtH"}}},[[238,1,2]]]);
//# sourceMappingURL=main.609c7545.chunk.js.map