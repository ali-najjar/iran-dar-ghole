(()=>{var e={};e.id=332,e.ids=[220,332,636],e.modules={671:(e,t)=>{"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6960:e=>{e.exports={box:"DocumentCard_box__rIG5H",card:"DocumentCard_card__lrb1L",imgBx:"DocumentCard_imgBx__toGRm",details:"DocumentCard_details__kpRlW"}},1058:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>v,default:()=>f,getServerSideProps:()=>j,getStaticPaths:()=>h,getStaticProps:()=>b,reportWebVitals:()=>A,routeModule:()=>C,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>G,unstable_getStaticPaths:()=>E,unstable_getStaticProps:()=>M});var s={};r.r(s),r.d(s,{default:()=>S,getStaticProps:()=>_});var a=r(3865),i=r(9455),n=r(671),u=r(781),c=r.n(u),o=r(1287),d=r(8732),l=r(6960),p=r.n(l);let P=require("fs");var m=r.n(P),g=r(3873),x=r.n(g);async function _(){let e=x().join(process.cwd(),"public","data.json"),t=await m().promises.readFile(e,"utf8");return{props:{cards:JSON.parse(t)?.achivments}}}function S({cards:e}){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:p().box,children:e.map(e=>(0,d.jsxs)("div",{className:p().card,children:[(0,d.jsx)("div",{className:p().imgBx,children:(0,d.jsx)("img",{src:e.image,alt:"images"})}),(0,d.jsx)("div",{className:p().details,children:(0,d.jsxs)("h2",{children:[e.title,(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:e.subtitle})]})})]},e.id))})})}let f=(0,n.M)(s,"default"),b=(0,n.M)(s,"getStaticProps"),h=(0,n.M)(s,"getStaticPaths"),j=(0,n.M)(s,"getServerSideProps"),v=(0,n.M)(s,"config"),A=(0,n.M)(s,"reportWebVitals"),M=(0,n.M)(s,"unstable_getStaticProps"),E=(0,n.M)(s,"unstable_getStaticPaths"),G=(0,n.M)(s,"unstable_getStaticParams"),q=(0,n.M)(s,"unstable_getServerProps"),y=(0,n.M)(s,"unstable_getServerSideProps"),C=new a.PagesRouteModule({definition:{kind:i.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:o.default,Document:c()},userland:s})},1287:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8732);function a({Component:e,pageProps:t}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("header",{}),(0,s.jsx)("main",{children:(0,s.jsx)(e,{...t})}),(0,s.jsx)("footer",{})]})}r(2880)},2880:()=>{},9455:(e,t)=>{"use strict";Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}});var r=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{"use strict";e.exports=require("react")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[781],()=>r(1058));module.exports=s})();