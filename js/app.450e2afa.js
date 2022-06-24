(function(){"use strict";var t={4683:function(t,e,r){var n={};r.r(n),r.d(n,{setProducts:function(){return jt}});var a={};r.r(a),r.d(a,{fetchProducts:function(){return Bt}});var o={};r.r(o),r.d(o,{addProduct:function(){return Lt},removeProductFromCart:function(){return Mt}});var i={};r.r(i),r.d(i,{totalCost:function(){return Rt}});var s=r(144),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("NavBar"),r("v-main",[r("router-view")],1),r("Footer")],1)},c=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-system-bar",{attrs:{color:"deep-purple darken-3"}}),r("v-app-bar",{attrs:{color:"deep-purple accent-4",dark:"",prominent:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("SISTEMA DE VENTA DE PRODUCTOS ELECTRÓNICOS")]),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-filter")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-dots-vertical")])],1)],1),r("v-navigation-drawer",{attrs:{absolute:"",bottom:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.routes,(function(e){return r("v-list-item",{key:e.name,attrs:{disabled:t.currentRoute===e.name},on:{click:function(r){return t.redirectTo(e.name)}}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1),r("v-card-text")],1)},d=[],v={name:"NavBar",data(){return{drawer:!1,group:null,routes:[{icon:"mdi-home",title:"Inicio",name:"Home"},{icon:"mdi-border-all",title:"Productos",name:"Product"},{icon:"mdi-account",title:"Acerca",name:"About"}]}},watch:{group(){this.drawer=!1}},computed:{currentRoute(){return this.$route.name}},methods:{redirectTo(t){this.$router.push({name:t})}}},m=v,p=r(1001),f=r(3453),h=r.n(f),g=r(8320),b=r(5206),_=r(680),w=r(7118),y=r(6428),Z=r(6816),C=r(7620),P=r(7874),x=r(459),V=r(2710),k=r(3347),T=r(9762),E=r(2691),A=r(7921),O=(0,p.Z)(m,l,d,!1,null,"ede0dad4",null),S=O.exports;h()(O,{VAppBar:g.Z,VAppBarNavIcon:b.Z,VBtn:_.Z,VCardText:w.ZB,VIcon:y.Z,VList:Z.Z,VListItem:C.Z,VListItemGroup:P.Z,VListItemIcon:x.Z,VListItemTitle:V.V9,VNavigationDrawer:k.Z,VSpacer:T.Z,VSystemBar:E.Z,VToolbarTitle:A.qW});var I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"indigo lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[r("v-card-text",t._l(t.icons,(function(e){return r("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),1),r("v-card-text",{staticClass:"white--text pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),r("v-divider"),r("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Vuetify")])])],1)],1)},N=[],j={name:"Footer",data(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},B=j,F=r(3237),D=r(1418),$=r(899),q=(0,p.Z)(B,I,N,!1,null,"19fa9902",null),L=q.exports;h()(q,{VBtn:_.Z,VCard:F.Z,VCardText:w.ZB,VDivider:D.Z,VFooter:$.Z,VIcon:y.Z});var M={name:"App",components:{NavBar:S,Footer:L},data:()=>({})},R=M,H=r(7524),U=r(7877),G=(0,p.Z)(R,u,c,!1,null,null,null),Y=G.exports;h()(G,{VApp:H.Z,VMain:U.Z});var z=r(8345),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("h1",{staticClass:"light-blue--text"},[t._v("Bienvenido a la página de VUE - VUETIFY")]),n("v-col",{attrs:{md:"10"}},[n("div",[n("img",{attrs:{src:r(9574),alt:""}})])])],1)],1)],1)},Q=[],W={name:"Home",components:{}},J=W,X=r(2102),tt=r(9846),et=r(2877),rt=(0,p.Z)(J,K,Q,!1,null,null,null),nt=rt.exports;h()(rt,{VCol:X.Z,VContainer:tt.Z,VRow:et.Z});var at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.products.length?r("div",{staticClass:"text-xs-center"},[r("v-item-group",[r("v-container",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"9"}},[r("v-row",{attrs:{"no-gutters":""}},t._l(t.paginatedData,(function(e){return r("Product-item",{key:e.id,attrs:{product:e},on:{addToCart:t.addProductToCart}})})),1)],1),r("v-col",{attrs:{cols:"3"}},[r("cart")],1)],1)],1)],1),r("v-pagination",{directives:[{name:"show",rawName:"v-show",value:t.products.length,expression:"products.length"}],attrs:{length:t.pages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):r("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[t._v(" No existen "),r("strong",[t._v("Productos")]),t._v(" que mostrar en este momento ")])},ot=[],it=r(629),st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto mb-4 ms-2",attrs:{width:"300",height:"350"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.product.picture}},[r("v-card-title")],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v(" Descripción: "+t._s(t.product.name)+" ")]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v("Valor $ "+t._s(t.product.price))])]),r("v-card-actions",[r("v-btn",{attrs:{color:"orange",text:""},on:{click:function(e){return t.$emit("addToCart",t.product)}}},[t._v(" Añadir al carrito ")])],1)],1)},ut=[],ct={name:"ProductItem",props:{product:{type:Object,required:!0}}},lt=ct,dt=r(7047),vt=(0,p.Z)(lt,st,ut,!1,null,"f2221e78",null),mt=vt.exports;h()(vt,{VBtn:_.Z,VCard:F.Z,VCardActions:w.h7,VCardSubtitle:w.Qq,VCardText:w.ZB,VCardTitle:w.EB,VImg:dt.Z});var pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.cart.length?r("div",[r("h1",[t._v("Carrito")]),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.fields,items:t.cart},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[r("v-icon",{attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.removeProductFromCart(n)}}},[t._v(" mdi-delete ")])]}}],null,!1,3286299359)}),r("v-alert",{attrs:{dense:"",outlined:"",type:"success"}},[r("strong",[t._v("Costo total "+t._s(t.totalCost))])])],1):r("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[t._v(" No hay "),r("strong",[t._v("Productos")]),t._v(" en el carrito ")])},ft=[],ht={name:"Cart",data(){return{fields:[{text:"Productos agregados",align:"start",sortable:!1,value:"name"},{text:"Cantidad",sortable:!1,value:"qty"},{text:"Precio",sortable:!1,value:"price"},{text:"Acciones",sortable:!1,value:"actions"}]}},computed:{...(0,it.rn)("cart",["cart"]),...(0,it.Se)("cart",["totalCost"])},methods:{...(0,it.OI)("cart",["removeProductFromCart"])}},gt=ht,bt=r(1234),_t=r(4407),wt=(0,p.Z)(gt,pt,ft,!1,null,"0299d220",null),yt=wt.exports;h()(wt,{VAlert:bt.Z,VDataTable:_t.Z,VIcon:y.Z});var Zt={components:{ProductItem:mt,Cart:yt},mounted(){this.fetchProducts()},data(){return{rowsPerPage:4,page:1}},computed:{...(0,it.rn)("products",["products"]),pages(){return this.rowsPerPage?Math.ceil(this.products.length/this.rowsPerPage):0},paginatedData(){return this.products.slice(this.page*this.rowsPerPage-this.rowsPerPage,this.page*this.rowsPerPage)}},methods:{...(0,it.nv)("products",["fetchProducts"]),...(0,it.OI)("cart",["addProduct"]),addProductToCart(t){this.addProduct(t)}}},Ct=Zt,Pt=r(4622),xt=r(6325),Vt=(0,p.Z)(Ct,at,ot,!1,null,"386afe6a",null),kt=Vt.exports;h()(Vt,{VAlert:bt.Z,VCol:X.Z,VContainer:tt.Z,VItemGroup:Pt.Z,VPagination:xt.Z,VRow:et.Z}),s.Z.use(z.Z);const Tt=[{path:"/",name:"Home",component:nt},{path:"/product",name:"Product",component:kt},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,6283))}],Et=new z.Z({mode:"history",base:"/carrito_vue_vuetity/",routes:Tt});var At=Et,Ot=r(3168),St=r(9483),It=r.n(St),Nt={products:[]};function jt(t,e){t.products=e}async function Bt({commit:t}){const e=await fetch("/carrito_vue_vuetity/fixtures/products.json"),r=await e.json();t("products/setProducts",r,{root:!0})}const Ft=!0;var Dt={namespaced:Ft,state:Nt,mutations:n,actions:a},$t={cart:[]},qt=r(6486);function Lt(t,e){const r=(0,qt.find)(t.cart,{id:e.id});if(r)r.qty+=1;else{const r=Object.assign({},e);r.qty=1,t.cart.push(r)}}function Mt(t,e){t.cart=(0,qt.filter)(t.cart,(({id:t})=>t!==e.id))}function Rt(t){return t.cart.reduce(((t,e)=>parseFloat(e.price*e.qty)+t),0)}const Ht=!0;var Ut={namespaced:Ht,state:$t,mutations:o,getters:i};s.Z.use(it.ZP);const Gt=new Ot.ZP({storage:It(),asyncStorage:!0,modules:["cart"]});var Yt=new it.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{products:Dt,cart:Ut},plugins:[Gt.plugin]}),zt=r(9132);s.Z.use(zt.Z);var Kt=new zt.Z({}),Qt=r(3084),Wt=r.n(Qt);s.Z.use(Wt()),s.Z.config.productionTip=!1,new s.Z({router:At,store:Yt,vuetify:Kt,render:t=>t(Y)}).$mount("#app")},9574:function(t,e,r){t.exports=r.p+"img/logo.4d6033c9.svg"}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=t,function(){var t=[];r.O=function(e,n,a,o){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],o=t[l][2];for(var s=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,a,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.38afe5fa.js"}}(),function(){r.miniCssF=function(t){return"css/about.cfa0d556.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="desafioframework:";r.l=function(n,a,o,i){if(t[n])t[n].push(a);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+o),s.src=n),t[n]=[a];var v=function(e,r){s.onerror=s.onload=null,clearTimeout(m);var a=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(r)})),e)return e(r)},m=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){r.p="/carrito_vue_vuetity/"}(),function(){var t=function(t,e,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),n(u)}};return a.onerror=a.onload=o,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],o=a.getAttribute("data-href");if(o===t||o===e)return a}},n=function(n){return new Promise((function(a,o){var i=r.miniCssF(n),s=r.p+i;if(e(i,s))return a();t(n,s,a,o)}))},a={143:0};r.f.miniCss=function(t,e){var r={443:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=n(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,n){var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=t[e]=[r,n]}));n.push(a[2]=o);var i=r.p+r.u(e),s=new Error,u=function(n){if(r.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};r.l(i,u,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,o,i=n[0],s=n[1],u=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(u)var l=u(r)}for(e&&e(n);c<i.length;c++)o=i[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},n=self["webpackChunkdesafioframework"]=self["webpackChunkdesafioframework"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4683)}));n=r.O(n)})();
//# sourceMappingURL=app.450e2afa.js.map