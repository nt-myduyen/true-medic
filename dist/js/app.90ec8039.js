(function(t){function e(e){for(var a,r,i=e[0],o=e[1],u=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c={app:0},s=[];function i(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-03ff9afa":"4c7bd6eb","chunk-16bca19b":"df460e75","chunk-17907244":"b242af7c","chunk-2d0e5e97":"8ff5116a","chunk-586a8ef9":"46e65d3c","chunk-5df05451":"050815fa","chunk-a9937024":"8742b4ce","chunk-db0d7240":"2264883b"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-03ff9afa":1,"chunk-16bca19b":1,"chunk-17907244":1,"chunk-5df05451":1,"chunk-a9937024":1,"chunk-db0d7240":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-03ff9afa":"f5ac116d","chunk-16bca19b":"81c9c2f4","chunk-17907244":"88c61f5e","chunk-2d0e5e97":"31d6cfe0","chunk-586a8ef9":"31d6cfe0","chunk-5df05451":"20d1a062","chunk-a9937024":"608b252d","chunk-db0d7240":"9d0c71bb"}[t]+".css",c=o.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||c,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07ee":function(t,e,n){},"2fc4":function(t,e,n){"use strict";n("5bac")},3777:function(t,e,n){"use strict";n("07ee")},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"bus",(function(){return _t}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n(t.layout,{tag:"component"},[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)])},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"default-layout"},[n("Header"),n("Navbar"),t._t("default"),n("Footer")],2)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"left-header",staticStyle:{width:"55%"}},[n("Logo")],1),n("div",{staticClass:"right-header",staticStyle:{width:"35%"}},[t._m(0),n("router-link",{staticClass:"wishlist",staticStyle:{"margin-top":"5px"},attrs:{to:"/login"}},[t._v(" Danh sách ước "),n("b-icon-heart-fill",{staticClass:"heart"})],1),t.isLogin?n("div",{staticClass:"login-block"},[n("span",[t._v(t._s(t.username))]),n("span",{staticClass:"logout",on:{click:function(e){return t.logOut()}}},[t._v("Đăng xuất")])]):n("div",{staticClass:"login-block"},[n("router-link",{attrs:{to:"/login"}},[t._v("Đăng nhập")]),t._v("| "),n("router-link",{attrs:{to:"/signup"}},[t._v("Đăng ký")])],1)],1)])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{attrs:{id:"s"}},[n("option",{attrs:{id:"vietnam",value:"/"}},[t._v("Tiếng Việt")]),n("option",{attrs:{id:"english",value:"/en/"}},[t._v("English")])])}],l=(n("b0c0"),n("ed15")),d={components:{Logo:l["a"]},data:function(){return{}},computed:{isLogin:function(){return this.$store.state.isLogin},username:function(){return this.$store.state.currentUser.name}},methods:{}},f=d,h=(n("3777"),n("2877")),p=Object(h["a"])(f,o,u,!1,null,"d703ae6c",null),v=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("div",{staticClass:"top-nav"},[n("div",{staticClass:"menu"},[n("router-link",{attrs:{to:"/"}},[t._v("SẢN PHẨM MỚI")]),n("router-link",{attrs:{to:"/about"}},[t._v("NGƯỜI CAO TUỔI")]),n("router-link",{attrs:{to:"/women"}},[t._v("PHỤ NỮ")]),n("router-link",{attrs:{to:"/children"}},[t._v("TRẺ EM")])],1),n("div",{staticClass:"Product-icons"},[n("b-icon",{staticClass:"icon",attrs:{icon:"person-circle"}}),n("b-icon",{staticClass:"icon",attrs:{icon:"menu-button-wide"},on:{click:t.toCreateTransaction}}),n("b-icon",{staticClass:"icon",attrs:{icon:"gear"}})],1)]),n("div",{staticClass:"bellow-nav"},[n("div",{staticClass:"search-bar"},[n("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.findProducts.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.findName,expression:"findName"}],attrs:{type:"text",placeholder:"Find the product's name you want..."},domProps:{value:t.findName},on:{input:function(e){e.target.composing||(t.findName=e.target.value)}}}),t._m(0)])]),n("button",{staticClass:"cart"},[n("span",[t._v("Giỏ hàng")]),n("b-icon-cart3",{staticClass:"icon"})],1),n("button",{staticClass:"order-tracking cart"},[n("span",[t._v("Theo dõi đơn hàng")]),n("b-icon-basket3",{staticClass:"icon"})],1)])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blue"},[n("span",[t._v("Tìm kiếm")]),n("div",{staticClass:"fa fa-search"})])}],b=n("1da1"),_=(n("caad"),n("2532"),n("96cf"),n("bc3a")),C=n.n(_),k={components:{},data:function(){return{products:0,notBeFound:!1,listFindProducts:[],tempProducts:[]}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://60d94868eec56d001747768f.mockapi.io/v1/Products");case 2:n=e.sent,t.Products=n.data,console.log(n.data);case 5:case"end":return e.stop()}}),e)})))()},methods:{toCreateTransaction:function(){window.location.href="/createTransaction"},getProduct:function(t){this.$router.push("/Product/".concat(t))},findProducts:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tempProducts=t.Products,console.log(t.tempProducts),n=0,t.listFindProducts=[],e.next=6,C.a.get("https://60d94868eec56d001747768f.mockapi.io/v1/Products");case 6:for(a=e.sent,r=0;r<a.data.length;r++)a.data[r].name.includes(t.findName)&&(t.listFindProducts[n]=a.data[r],console.log(t.listFindProducts[n]),n++);0==n||""===t.findName?alert("There is no result!"):t.Products={},console.log("count = "+n),console.log(t.listFindProducts);case 11:case"end":return e.stop()}}),e)})))()},cancelFindProduct:function(){this.Products=this.tempProducts,console.log(this.tempProducts)}}},y=k,w=(n("f28d"),Object(h["a"])(y,m,g,!1,null,"1e63b5d1",null)),P=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"content"},[t._m(0),n("div",{staticClass:"col"},[n("h4",{staticClass:"title"},[t._v("Loại sản phẩm")]),n("div",{staticClass:"list-tags"},t._l(t.tags,(function(e,a){return n("a",{key:a,staticClass:"tag",attrs:{href:""}},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"col"},[n("h4",{staticClass:"title"},[t._v("Chăm sóc khách hàng")]),n("div",{staticClass:"list-tags"},t._l(t.tags,(function(e,a){return n("a",{key:a,staticClass:"tag",attrs:{href:""}},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"col"},[n("h4",{staticClass:"title"},[t._v("Loại sản phẩm")]),n("div",{staticClass:"list-tags"},t._l(t.tags,(function(e,a){return n("a",{key:a,staticClass:"tag",attrs:{href:""}},[t._v(t._s(e))])})),0)])])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("h2",[t._v("True Medic")]),n("input",{attrs:{type:"email",name:"",id:"",placeholder:"Nhập Email"}}),n("button",{staticClass:"btn-subcribe"},[t._v("Đăng ký")]),n("div",{staticClass:"icons"},[n("a",{attrs:{href:"#"}},[n("div",{staticClass:"fa fa-twitter"})]),n("a",{attrs:{href:"#"}},[n("div",{staticClass:"fa fa-instagram"})]),n("a",{attrs:{href:""}},[n("div",{staticClass:"fa fa-linkedin-square"})])])])}],$={name:"MyFooter",components:{},data:function(){return{tags:["Thuốc tim mạch","Thuốc hỗ trợ hô hấp","Thuốc dành cho người cao tuổi","Thuốc dành cho trẻ em"]}}},E=$,L=(n("5dd3"),Object(h["a"])(E,x,j,!1,null,"704f901e",null)),O=L.exports,T={components:{Header:v,Navbar:P,Footer:O}},S=T,N=(n("7e84"),Object(h["a"])(S,s,i,!1,null,"0be5b0f4",null)),F=N.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unauth-layout"},[n("Logo"),t._t("default")],2)},A=[],q={components:{Logo:l["a"]}},H=q,D=(n("a633"),Object(h["a"])(H,M,A,!1,null,"5913a49d",null)),I=D.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"default-layout"},[n("Header"),n("Navbar"),t._t("default"),n("Footer")],2)},B=[],U={components:{Header:v,Navbar:P,Footer:O}},V=U,G=(n("851c"),Object(h["a"])(V,R,B,!1,null,"4cc84186",null)),z=G.exports,J={components:{defaultLayout:F,unauthLayout:I,secretLayout:z},data:function(){return{loggIn:!0}},created:function(){console.log(this.$route)},computed:{layout:function(){return"unauth"===this.$route.meta.layout?"unauthLayout":"secret"===this.$route.meta.layout?"secretLayout":"defaultLayout"}}},K=J,Q=(n("5c0b"),Object(h["a"])(K,r,c,!1,null,null,null)),W=Q.exports,X=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"sort-container"},[n("SortBar"),n("div",{staticClass:"sort-product"},[n("h4",{staticStyle:{"text-align":"left"}},[t._v("Mới phát hành")]),n("b-row",[n("b-col",{on:{click:function(e){return t.$router.push({path:"/product/overview"})}}},[n("ProductCard",{attrs:{id:"alipas",imgLink:"https://ecogreen.com.vn/image/cache/catalog/sap-moi/sap-n-1-1280x1280.jpg",name:"Alipas"}})],1),n("b-col",[n("ProductCard",{attrs:{id:"astra",imgLink:"https://vnvc.vn/wp-content/uploads/2021/01/vac-xin-astrazeneca.jpg",name:"Vaccine Astrazeneca"},on:{click:function(e){return t.productDirect()}}})],1),n("b-col",[n("ProductCard",{attrs:{id:"sino",imgLink:"https://soyte.hungyen.gov.vn/portal/Photos/2021-09/7ad421b84be06efdTQ.jpg",name:"Vaccine Sinopharm"},on:{click:function(e){return t.productDirect()}}})],1),n("b-col",{on:{click:function(e){return t.$router.push({path:"/product/tracking"})}}},[n("ProductCard",{attrs:{id:"nanocovax",imgLink:"https://file3.qdnd.vn/data/images/0/2021/08/28/vuongthuy/25082021vthuy32.jpg?dpi=150&quality=100&w=870",name:"Vaccine Nanocovax"}})],1)],1)],1)],1),n("div",{staticClass:"list-product"},[n("h4",{staticStyle:{"text-align":"left"}},[t._v("Phổ biến")]),n("b-row",[n("b-col",[n("ProductCard",{attrs:{id:"nanocovax",imgLink:"https://file3.qdnd.vn/data/images/0/2021/08/28/vuongthuy/25082021vthuy32.jpg?dpi=150&quality=100&w=870",name:"Vaccine Nanocovax"}})],1),n("b-col",[t._v("2 of 3")]),n("b-col",[t._v("3 of 3")]),n("b-col",[t._v("3 of 3")])],1)],1)])])},Z=[],tt=n("b094"),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sort-header"},[t._m(0),n("div",{staticClass:"sort-bar"},[t._m(1),t._m(2),n("div",{staticClass:"view"},[t._v(" Cách xem: "),n("b-icon",{staticClass:"icon",attrs:{icon:"grid-fill"}}),n("b-icon",{staticClass:"icon",attrs:{icon:"menu-button-wide-fill"}})],1)])])},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h4",[t._v("Thuốc và thực phẩm chức năng")]),n("p",[t._v(" Khoảng "),n("span",[t._v("80")]),t._v(" kết quả trong "),n("span",{staticClass:"time"},[t._v(" 0.93 ")]),t._v(" s ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-count"},[t._v(" Số trang : "),n("span",[t._v("10")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sort-menu"},[t._v(" Sắp xếp : "),n("select",{attrs:{id:"sort"}},[n("option",{attrs:{id:"new"}},[t._v("Mới nhất")]),n("option",{attrs:{id:"low-price"}},[t._v("Giá thấp nhất")]),n("option",{attrs:{id:"high-price"}},[t._v("Giá cao nhất")]),n("option",{attrs:{id:"rate"}},[t._v("Mức độ đánh giá")])])])}],at=(n("2fc4"),{}),rt=Object(h["a"])(at,et,nt,!1,null,"a069dffa",null),ct=rt.exports,st={name:"Home",components:{ProductCard:tt["a"],SortBar:ct},created:function(){console.log(this.$route)},methods:{productDirect:function(){alert("asdas")}}},it=st,ot=(n("9d12"),Object(h["a"])(it,Y,Z,!1,null,"fb3c1ca2",null)),ut=ot.exports;a["default"].use(X["a"]);var lt=[{path:"/",name:"Home",component:ut},{path:"/about",name:"About",component:function(){return n.e("chunk-17907244").then(n.bind(null,"f820"))},layout:"defaultLayout"},{path:"/product/overview",component:function(){return n.e("chunk-5df05451").then(n.bind(null,"06f6"))}},{path:"/product/detail",component:function(){return n.e("chunk-16bca19b").then(n.bind(null,"5f47"))}},{path:"/product/tracking",component:function(){return n.e("chunk-03ff9afa").then(n.bind(null,"f428"))}},{path:"/createTransaction",component:function(){return n.e("chunk-586a8ef9").then(n.bind(null,"5233"))}},{path:"/login",component:function(){return n.e("chunk-db0d7240").then(n.bind(null,"a55b"))},meta:{layout:"unauth"}},{path:"/signup",component:function(){return n.e("chunk-a9937024").then(n.bind(null,"5c9c"))},meta:{layout:"unauth"}},{path:"*",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))},meta:{layout:"unauth"}}],dt=new X["a"]({mode:"history",base:"/",routes:lt}),ft=dt,ht=n("2f62");a["default"].use(ht["a"]);var pt=new ht["a"].Store({state:{isLogin:!1,currentUser:{name:null,avt:null}},getters:{},mutations:{},actions:{getCurrentUser:function(){return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}}),vt=n("5f5b"),mt=n("b1e0"),gt=(n("f9e3"),n("2dd8"),n("c9bf"));a["default"].use(vt["a"]),a["default"].use(mt["a"]),a["default"].config.productionTip=!1;var bt={clientId:"584655299643-3oab6m1cb7tj2ascqunc8eas7to60iue.apps.googleusercontent.com",scope:"profile email",prompt:"consent",fetch_basic_profile:!0};a["default"].use(gt["a"],bt);var _t=new a["default"];new a["default"]({store:pt,router:ft,render:function(t){return t(W)}}).$mount("#app")},"5bac":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5dd3":function(t,e,n){"use strict";n("e608")},"7e84":function(t,e,n){"use strict";n("82b7")},"82b7":function(t,e,n){},"851c":function(t,e,n){"use strict";n("a01e")},"8c4d":function(t,e,n){},9326:function(t,e,n){},"99d3":function(t,e,n){},"9c0c":function(t,e,n){},"9d12":function(t,e,n){"use strict";n("99d3")},a01e:function(t,e,n){},a633:function(t,e,n){"use strict";n("e102")},b094:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-card"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:t.imgLink}}),a("div",{staticClass:"list-icon"},[a("div",{staticClass:"icon"},[a("b-icon",{attrs:{icon:"cart3"}})],1),a("div",{staticClass:"icon"},[a("b-icon",{attrs:{icon:"search"}})],1),a("div",{staticClass:"icon"},[a("b-icon",{attrs:{icon:"heart"}})],1)])]),a("div",{staticClass:"info"},[a("h4",[a("router-link",{staticClass:"link",attrs:{to:"`product/`+this.post.productID"}},[t._v(t._s(t.name))])],1),a("img",{staticClass:"dots",attrs:{src:n("fc90"),alt:""}}),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price"},[n("span",{staticClass:"current-price"},[t._v("$25.00")]),n("span",{staticClass:"origin-price",staticStyle:{color:"red","text-decoration":"line-through"}},[t._v("$35.00")])])}],c={props:{imgLink:String,name:String},methods:{created:function(){}}},s=c,i=(n("e162"),n("2877")),o=Object(i["a"])(s,a,r,!1,null,"650f4a7a",null);e["a"]=o.exports},e102:function(t,e,n){},e162:function(t,e,n){"use strict";n("e8fa")},e608:function(t,e,n){},e8fa:function(t,e,n){},ed15:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo",on:{click:function(e){return t.$router.push({path:"/"})}}},[n("div",{staticClass:"black"},[t._v("Tr")]),t._v(" ueMedic ")])},r=[],c=(n("fbf2"),n("2877")),s={},i=Object(c["a"])(s,a,r,!1,null,"80be186a",null);e["a"]=i.exports},f28d:function(t,e,n){"use strict";n("9326")},fbf2:function(t,e,n){"use strict";n("8c4d")},fc90:function(t,e,n){t.exports=n.p+"img/3dots.d3129760.png"}});
//# sourceMappingURL=app.90ec8039.js.map