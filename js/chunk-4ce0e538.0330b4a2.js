(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ce0e538"],{"0cb2":function(t,e,o){var a=o("7b0b"),n=Math.floor,i="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,o,s,l,d){var f=o+t.length,u=s.length,p=c;return void 0!==l&&(l=a(l),p=r),i.call(d,p,(function(a,i){var r;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(f);case"<":r=l[i.slice(1,-1)];break;default:var c=+i;if(0===c)return a;if(c>u){var d=n(c/10);return 0===d?a:d<=u?void 0===s[d-1]?i.charAt(1):s[d-1]+i.charAt(1):a}r=s[c-1]}return void 0===r?"":r}))}},"107c":function(t,e,o){var a=o("d039"),n=o("da84"),i=n.RegExp;t.exports=a((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1148:function(t,e,o){"use strict";var a=o("a691"),n=o("577e"),i=o("1d80");t.exports=function(t){var e=n(i(this)),o="",r=a(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(o+=e);return o}},1461:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,".base-info[data-v-0d76e328]{margin-top:15px;padding:0 8px;color:#999;border-bottom:5px solid #f2f5f8}.info-title[data-v-0d76e328]{color:#222}.info-price[data-v-0d76e328]{margin-top:10px}.info-price .n-price[data-v-0d76e328]{font-size:24px;color:#ff5777}.info-price .o-price[data-v-0d76e328]{font-size:13px;margin-left:5px;text-decoration:line-through}.info-price .discount[data-v-0d76e328]{font-size:12px;padding:2px 5px;color:#fff;background-color:#ff5777;border-radius:8px;margin-left:5px;position:relative;top:-8px}.info-other[data-v-0d76e328]{margin-top:15px;line-height:30px;font-size:13px;border-bottom:1px solid hsla(0,0%,39.2%,.1)}.info-other[data-v-0d76e328],.info-service[data-v-0d76e328]{display:flex;justify-content:space-between}.info-service[data-v-0d76e328]{line-height:60px}.info-service-item img[data-v-0d76e328]{width:13px;height:13px;vertical-align:middle}.info-service-item span[data-v-0d76e328]{font-size:12px;color:#333}",""]),t.exports=e},"14c3":function(t,e,o){var a=o("c6b6"),n=o("9263");t.exports=function(t,e){var o=t.exec;if("function"===typeof o){var i=o.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"159b":function(t,e,o){var a=o("da84"),n=o("fdbc"),i=o("785a"),r=o("17c2"),c=o("9112"),s=function(t){if(t&&t.forEach!==r)try{c(t,"forEach",r)}catch(e){t.forEach=r}};for(var l in n)s(a[l]&&a[l].prototype);s(i)},1685:function(t,e,o){var a=o("cd20");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("499e").default;n("d3f8f886",a,!0,{sourceMap:!1,shadowMode:!1})},"17c2":function(t,e,o){"use strict";var a=o("b727").forEach,n=o("a640"),i=n("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1c14":function(t,e,o){"use strict";o("3d4d")},"25f0":function(t,e,o){"use strict";var a=o("6eeb"),n=o("825a"),i=o("577e"),r=o("d039"),c=o("ad6d"),s="toString",l=RegExp.prototype,d=l[s],f=r((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),u=d.name!=s;(f||u)&&a(RegExp.prototype,s,(function(){var t=n(this),e=i(t.source),o=t.flags,a=i(void 0===o&&t instanceof RegExp&&!("flags"in l)?c.call(t):o);return"/"+e+"/"+a}),{unsafe:!0})},3660:function(t,e,o){"use strict";o("cfa0")},"3d4d":function(t,e,o){var a=o("5640");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("499e").default;n("fb0820b4",a,!0,{sourceMap:!1,shadowMode:!1})},"408a":function(t,e){var o=1..valueOf;t.exports=function(t){return o.call(t)}},"44e7":function(t,e,o){var a=o("861d"),n=o("c6b6"),i=o("b622"),r=i("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},"4d63":function(t,e,o){var a=o("83ab"),n=o("da84"),i=o("94ca"),r=o("7156"),c=o("9112"),s=o("9bf2").f,l=o("241c").f,d=o("44e7"),f=o("577e"),u=o("ad6d"),p=o("9f7f"),v=o("6eeb"),h=o("d039"),g=o("5135"),m=o("69f3").enforce,b=o("2626"),x=o("b622"),y=o("fce3"),w=o("107c"),_=x("match"),k=n.RegExp,I=k.prototype,C=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,E=/a/g,O=/a/g,T=new k(E)!==E,j=p.UNSUPPORTED_Y,S=a&&(!T||j||y||w||h((function(){return O[_]=!1,k(E)!=E||k(O)==O||"/a/i"!=k(E,"i")}))),R=function(t){for(var e,o=t.length,a=0,n="",i=!1;a<=o;a++)e=t.charAt(a),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),n+=e):n+="[\\s\\S]":n+=e+t.charAt(++a);return n},P=function(t){for(var e,o=t.length,a=0,n="",i=[],r={},c=!1,s=!1,l=0,d="";a<=o;a++){if(e=t.charAt(a),"\\"===e)e+=t.charAt(++a);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:C.test(t.slice(a+1))&&(a+=2,s=!0),n+=e,l++;continue;case">"===e&&s:if(""===d||g(r,d))throw new SyntaxError("Invalid capture group name");r[d]=!0,i.push([d,l]),s=!1,d="";continue}s?d+=e:n+=e}return[n,i]};if(i("RegExp",S)){for(var M=function(t,e){var o,a,n,i,s,l,p=this instanceof M,v=d(t),h=void 0===e,g=[],b=t;if(!p&&v&&h&&t.constructor===M)return t;if((v||t instanceof M)&&(t=t.source,h&&(e="flags"in b?b.flags:u.call(b))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),b=t,y&&"dotAll"in E&&(a=!!e&&e.indexOf("s")>-1,a&&(e=e.replace(/s/g,""))),o=e,j&&"sticky"in E&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,""))),w&&(i=P(t),t=i[0],g=i[1]),s=r(k(t,e),p?this:I,M),(a||n||g.length)&&(l=m(s),a&&(l.dotAll=!0,l.raw=M(R(t),o)),n&&(l.sticky=!0),g.length&&(l.groups=g)),t!==b)try{c(s,"source",""===b?"(?:)":b)}catch(x){}return s},$=function(t){t in M||s(M,t,{configurable:!0,get:function(){return k[t]},set:function(e){k[t]=e}})},D=l(k),z=0;D.length>z;)$(D[z++]);I.constructor=M,M.prototype=I,v(n,"RegExp",M)}b("RegExp")},5319:function(t,e,o){"use strict";var a=o("d784"),n=o("d039"),i=o("825a"),r=o("a691"),c=o("50c4"),s=o("577e"),l=o("1d80"),d=o("8aa5"),f=o("0cb2"),u=o("14c3"),p=o("b622"),v=p("replace"),h=Math.max,g=Math.min,m=function(t){return void 0===t?t:String(t)},b=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),y=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,e,o){var a=x?"$":"$0";return[function(t,o){var a=l(this),n=void 0==t?void 0:t[v];return void 0!==n?n.call(t,a,o):e.call(s(a),t,o)},function(t,n){var l=i(this),p=s(t);if("string"===typeof n&&-1===n.indexOf(a)&&-1===n.indexOf("$<")){var v=o(e,l,p,n);if(v.done)return v.value}var b="function"===typeof n;b||(n=s(n));var x=l.global;if(x){var y=l.unicode;l.lastIndex=0}var w=[];while(1){var _=u(l,p);if(null===_)break;if(w.push(_),!x)break;var k=s(_[0]);""===k&&(l.lastIndex=d(p,c(l.lastIndex),y))}for(var I="",C=0,E=0;E<w.length;E++){_=w[E];for(var O=s(_[0]),T=h(g(r(_.index),p.length),0),j=[],S=1;S<_.length;S++)j.push(m(_[S]));var R=_.groups;if(b){var P=[O].concat(j,T,p);void 0!==R&&P.push(R);var M=s(n.apply(void 0,P))}else M=f(O,p,T,j,R,n);T>=C&&(I+=p.slice(C,T)+M,C=T+O.length)}return I+p.slice(C)}]}),!y||!b||x)},5530:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));o("b64b"),o("a4d3"),o("4de4"),o("e439"),o("159b"),o("dbb4");function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}},5599:function(t,e,o){var a=o("8fb6");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("499e").default;n("3c0cc6dc",a,!0,{sourceMap:!1,shadowMode:!1})},"55fe":function(t,e,o){var a=o("5804");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("499e").default;n("8dff4078",a,!0,{sourceMap:!1,shadowMode:!1})},5640:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,".comment-info[data-v-8817f2ea]{padding:5px 12px;color:#333;border-bottom:5px solid #f2f5f8}.info-header[data-v-8817f2ea]{height:50px;line-height:50px;border-bottom:1px solid rgba(0,0,0,.1)}.header-title[data-v-8817f2ea]{float:left;font-size:15px}.header-more[data-v-8817f2ea]{float:right;margin-right:10px;font-size:13px}.info-user[data-v-8817f2ea]{padding:10px 0 5px}.info-user img[data-v-8817f2ea]{width:42px;height:42px;border-radius:50%}.info-user span[data-v-8817f2ea]{position:relative;font-size:15px;top:-15px;margin-left:10px}.info-detail[data-v-8817f2ea]{padding:0 5px 15px}.info-detail p[data-v-8817f2ea]{font-size:14px;color:#777;line-height:1.5}.info-detail .info-other[data-v-8817f2ea]{font-size:12px;color:#999;margin-top:10px}.info-other .date[data-v-8817f2ea]{margin-right:8px}.info-imgs[data-v-8817f2ea]{margin-top:10px}.info-imgs img[data-v-8817f2ea]{width:70px;height:70px;margin-right:5px}",""]),t.exports=e},5804:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,".detail-container[data-v-23ec7af9]{padding:46px 0 50px 0}.van-swipe[data-v-23ec7af9]{height:300px;overflow:hidden;text-align:center}.van-swipe-item img[data-v-23ec7af9]{width:100%}[data-v-23ec7af9] .van-tab{margin:0 6px}",""]),t.exports=e},5836:function(t,e,o){"use strict";o("abd4")},"6ab7":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"detail-container"},[o("van-nav-bar",{attrs:{title:"标题","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"title",fn:function(){return[o("van-tabs",{on:{click:t.onTabClick},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[o("van-tab",{attrs:{title:"商品"}}),o("van-tab",{attrs:{title:"评价"}}),o("van-tab",{attrs:{title:"参数"}}),o("van-tab",{attrs:{title:"推荐"}})],1)]},proxy:!0},{key:"right",fn:function(){return[o("van-icon",{attrs:{name:"share-o",size:"24"}})]},proxy:!0}])}),o("van-swipe",{attrs:{autoplay:2e3,"indicator-color":"#f00"}},t._l(t.topImages,(function(t,e){return o("van-swipe-item",{key:e},[o("img",{attrs:{src:t,alt:"轮播图"}})])})),1),o("detail-base-info",{attrs:{goods:t.goods,id:"商品"}}),o("detail-shop-info",{attrs:{shop:t.shop}}),o("detail-goods-info",{attrs:{detailInfo:t.detailInfo}}),o("van-cell",{attrs:{id:"评价",icon:"comment-o"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("用户评价")]},proxy:!0}])}),o("detail-comment-info",{attrs:{commentInfo:t.commentInfo}}),o("van-cell",{attrs:{id:"参数",icon:"comment-o"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("商品参数")]},proxy:!0}])}),o("detail-param-info",{attrs:{paramInfo:t.paramInfo}}),o("van-cell",{attrs:{id:"推荐",icon:"comment-o"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("相似商品")]},proxy:!0}])}),o("product-grid",{attrs:{"product-list":t.recommends}}),o("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}}),o("van-goods-action",[o("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.onClickIcon}}),o("van-goods-action-icon",{attrs:{icon:"shop-o",text:"店铺"},on:{click:t.onClickIcon}}),o("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",badge:t.cartLength(),to:"/cart"}}),o("van-goods-action-icon",{attrs:{icon:"star",text:"已收藏",color:"#ff5000"},on:{click:t.onClickIcon}}),o("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addToCart}}),o("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.onClickIcon}})],1),o("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})],1)},n=[],i=o("5530");o("159b"),o("b0c0");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=o("1bab");function s(t){return Object(c["a"])({url:"/detail",params:{iid:t}})}var l=function t(e,o,a){r(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=o,this.services=a,this.nowPrice=e.highNowPrice},d=function t(e){r(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},f=function t(e,o){r(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=o.tables};function u(){return Object(c["a"])({url:"/recommend"})}var p=function t(e){r(this,t),this.desc=e.desc,this.title=e.title,this.iid=e.iid,this.imgURL=e.topImages[0],this.newPrice=e.lowNowPrice},v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return 0!==Object.keys(t.goods).length?o("div",{staticClass:"base-info"},[o("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),o("div",{staticClass:"info-price"},[o("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),o("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),o("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))])]),o("div",{staticClass:"info-other"},[o("span",[t._v(t._s(t.goods.columns[0]))]),o("span",[t._v(t._s(t.goods.columns[1]))]),o("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),o("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return o("span",{key:e,staticClass:"info-service-item"},[o("img",{attrs:{src:t.goods.services[e-1].icon}}),o("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},h=[],g={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},m=g,b=(o("5836"),o("2877")),x=Object(b["a"])(m,v,h,!1,null,"0d76e328",null),y=x.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-info"},[o("div",{staticClass:"shop-top"},[o("img",{attrs:{src:t.shop.logo}}),o("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),o("div",{staticClass:"shop-middle"},[o("div",{staticClass:"shop-middle-item shop-middle-left"},[o("div",{staticClass:"info-sells"},[o("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),o("div",{staticClass:"sells-text"},[t._v("总销量")])]),o("div",{staticClass:"info-goods"},[o("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),o("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),o("div",{staticClass:"shop-middle-item shop-middle-right"},[o("table",t._l(t.shop.score,(function(e,a){return o("tr",{key:a},[o("td",[t._v(t._s(e.name))]),o("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(" "+t._s(e.score)+" ")]),o("td",{staticClass:"better",class:{"better-more":e.isBetter}},[o("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},_=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-bottom"},[o("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],k=(o("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),I=k,C=(o("3660"),Object(b["a"])(I,w,_,!1,null,"00cfac1e",null)),E=C.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?o("div",{staticClass:"goods-info"},[o("div",{staticClass:"info-desc clear-fix"},[o("div",{staticClass:"start"}),o("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),o("div",{staticClass:"end"})]),o("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),o("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(t,e){return o("img",{key:e,attrs:{src:t,alt:""}})})),0)]):t._e()},T=[],j={name:"DetailGoodsInfo",props:{detailInfo:{type:Object,default:function(){return{}}}},methods:{}},S=j,R=(o("bc31"),Object(b["a"])(S,O,T,!1,null,"1a399bd4",null)),P=R.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?o("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,a){return o("table",{key:a,staticClass:"info-size"},t._l(e,(function(e,a){return o("tr",{key:a},t._l(e,(function(e,a){return o("td",{key:a},[t._v(t._s(e))])})),0)})),0)})),o("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,a){return o("tr",{key:a},[o("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),o("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?o("div",{staticClass:"info-img"},[o("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},$=[],D={name:"DetailParamInfo",props:{paramInfo:{type:Object}}},z=D,A=(o("f1f5"),Object(b["a"])(z,M,$,!1,null,"5a39870d",null)),B=A.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?o("div",{staticClass:"comment-info"},[o("div",{staticClass:"info-user"},[o("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),o("span",[t._v(t._s(t.commentInfo.user.uname))])]),o("div",{staticClass:"info-detail"},[o("p",[t._v(t._s(t.commentInfo.content))]),o("div",{staticClass:"info-other"},[o("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),o("span",[t._v(t._s(t.commentInfo.style))])]),o("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return o("img",{key:e,attrs:{src:t}})})),0)])]):t._e()},F=[];o("ac1f"),o("5319"),o("4d63"),o("25f0");function N(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+3+"").substr(4-RegExp.$1.length)));var o={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in o)if(new RegExp("(".concat(a,")")).test(e)){var n=o[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:L(n))}return e}function L(t){return("00"+t).substr(t.length)}var U={name:"DetailCommentInfo",props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return N(e,"yyyy-MM-dd")}}},G=U,Y=(o("1c14"),Object(b["a"])(G,q,F,!1,null,"8817f2ea",null)),J=Y.exports,K=o("8467"),Q=o("c813"),H=o("d399"),W=o("2f62"),V={name:"Detail",components:{DetailBaseInfo:y,DetailShopInfo:E,DetailGoodsInfo:P,DetailParamInfo:B,DetailCommentInfo:J,ProductGrid:K["a"],BackTop:Q["a"]},data:function(){return{active:0,iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommends:[],isShowBackTop:!1,showShare:!1,options:[[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"QQ",icon:"qq"},{name:"微博",icon:"weibo"}],[{name:"复制链接",icon:"link"},{name:"生成海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"微信小程序码",icon:"weapp-qrcode"}]]}},created:function(){var t=this;this.iid=this.$route.params.iid,s(this.iid).then((function(e){console.log(e);var o=e.result;t.topImages=o.itemInfo.topImages,t.goods=new l(o.itemInfo,o.columns,o.shopInfo.services),t.shop=new d(o.shopInfo),t.detailInfo=o.detailInfo,t.paramInfo=new f(o.itemParams.info,o.itemParams.rule),0!==o.rate.cRate&&(t.commentInfo=o.rate.list[0]),t.itemInfo=o.itemInfo})),u().then((function(e){console.log(e),e.data.list.forEach((function(t){t.show={},t.show.img=t.image})),t.recommends=e.data.list,console.log(t.recommends)}))},mounted:function(){window.addEventListener("scroll",this.scrollToTop)},destroyed:function(){window.removeEventListener("scroll",this.scrollToTop)},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(W["b"])(["addCart"])),Object(W["c"])(["cartLength"])),{},{onClickLeft:function(){this.$router.back()},onClickRight:function(){this.showShare=!0},onTabClick:function(t,e){switch(console.log(t,e),e){case"商品":document.documentElement.scrollTop=0,document.body.scrollTop=0;break;case"评价":document.documentElement.scrollTop=document.querySelector("#评价").offsetTop-46,document.body.scrollTop=document.querySelector("#评价").offsetTop-46;break;case"参数":document.documentElement.scrollTop=document.querySelector("#参数").offsetTop-46,document.body.scrollTop=document.querySelector("#参数").offsetTop-46;break;case"推荐":document.documentElement.scrollTop=document.querySelector("#推荐").offsetTop-46,document.body.scrollTop=document.querySelector("#推荐").offsetTop-46;break}},backClick:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;console.log(t),t>=700&&(this.isShowBackTop=!0);var e=setInterval((function(){document.body.scrollTop=document.documentElement.scrollTop=t-=500,t<=0&&clearInterval(e)}),10)},scrollToTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.isShowBackTop=t>=700,t<document.querySelector("#评价").offsetTop-48?this.active=0:t<document.querySelector("#参数").offsetTop-48?this.active=1:t<document.querySelector("#推荐").offsetTop-48?this.active=2:this.active=3},onSelect:function(t){Object(H["a"])(t.name),"link"===t.icon&&H["a"].success("复制成功"),this.showShare=!1},onClickIcon:function(){Object(H["a"])("尚未开发！")},addToCart:function(){var t=new p(this.itemInfo);console.log(t),this.addCart(t).then((function(t){Object(H["a"])(t)}))}})},X=V,Z=(o("9915"),Object(b["a"])(X,a,n,!1,null,"23ec7af9",null));e["default"]=Z.exports},7156:function(t,e,o){var a=o("861d"),n=o("d2bb");t.exports=function(t,e,o){var i,r;return n&&"function"==typeof(i=e.constructor)&&i!==o&&a(r=i.prototype)&&r!==o.prototype&&n(t,r),t}},"8aa5":function(t,e,o){"use strict";var a=o("6547").charAt;t.exports=function(t,e,o){return e+(o?a(t,e).length:1)}},"8fb6":function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,".backTop[data-v-06efdfc6]{position:fixed;z-index:1;bottom:60px;right:25px;border-radius:50%}",""]),t.exports=e},9263:function(t,e,o){"use strict";var a=o("577e"),n=o("ad6d"),i=o("9f7f"),r=o("5692"),c=o("7c73"),s=o("69f3").get,l=o("fce3"),d=o("107c"),f=RegExp.prototype.exec,u=r("native-string-replace",String.prototype.replace),p=f,v=function(){var t=/a/,e=/b*/g;return f.call(t,"a"),f.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),h=i.UNSUPPORTED_Y||i.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],m=v||g||h||l||d;m&&(p=function(t){var e,o,i,r,l,d,m,b=this,x=s(b),y=a(t),w=x.raw;if(w)return w.lastIndex=b.lastIndex,e=p.call(w,y),b.lastIndex=w.lastIndex,e;var _=x.groups,k=h&&b.sticky,I=n.call(b),C=b.source,E=0,O=y;if(k&&(I=I.replace("y",""),-1===I.indexOf("g")&&(I+="g"),O=y.slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==y.charAt(b.lastIndex-1))&&(C="(?: "+C+")",O=" "+O,E++),o=new RegExp("^(?:"+C+")",I)),g&&(o=new RegExp("^"+C+"$(?!\\s)",I)),v&&(i=b.lastIndex),r=f.call(k?o:b,O),k?r?(r.input=r.input.slice(E),r[0]=r[0].slice(E),r.index=b.lastIndex,b.lastIndex+=r[0].length):b.lastIndex=0:v&&r&&(b.lastIndex=b.global?r.index+r[0].length:i),g&&r&&r.length>1&&u.call(r[0],o,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r&&_)for(r.groups=d=c(null),l=0;l<_.length;l++)m=_[l],d[m[0]]=r[m[1]];return r}),t.exports=p},9915:function(t,e,o){"use strict";o("55fe")},"9d35":function(t,e,o){"use strict";o("5599")},"9f7f":function(t,e,o){var a=o("d039"),n=o("da84"),i=n.RegExp;e.UNSUPPORTED_Y=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,o){"use strict";var a=o("d039");t.exports=function(t,e){var o=[][t];return!!o&&a((function(){o.call(null,e||function(){throw 1},1)}))}},abd4:function(t,e,o){var a=o("1461");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("499e").default;n("aa56ffc6",a,!0,{sourceMap:!1,shadowMode:!1})},ac1f:function(t,e,o){"use strict";var a=o("23e7"),n=o("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(t,e,o){"use strict";var a=o("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},adf9:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,'.goods-info[data-v-1a399bd4]{padding:20px 0;border-bottom:5px solid #f2f5f8;background-color:#fff}.info-desc[data-v-1a399bd4]{padding:0 15px}.info-desc .end[data-v-1a399bd4],.info-desc .start[data-v-1a399bd4]{width:90px;height:1px;background-color:#a3a3a5;position:relative}.info-desc .start[data-v-1a399bd4]{float:left}.info-desc .end[data-v-1a399bd4]{float:right}.info-desc .end[data-v-1a399bd4]:after,.info-desc .start[data-v-1a399bd4]:before{content:"";position:absolute;width:5px;height:5px;background-color:#333;bottom:0}.info-desc .end[data-v-1a399bd4]:after{right:0}.info-desc .desc[data-v-1a399bd4]{padding:15px 0;font-size:14px}.info-key[data-v-1a399bd4]{margin:10px 0 10px 15px;color:#333;font-size:15px}.info-list img[data-v-1a399bd4]{width:100%}',""]),t.exports=e},b64b:function(t,e,o){var a=o("23e7"),n=o("7b0b"),i=o("df75"),r=o("d039"),c=r((function(){i(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return i(n(t))}})},b680:function(t,e,o){"use strict";var a=o("23e7"),n=o("a691"),i=o("408a"),r=o("1148"),c=o("d039"),s=1..toFixed,l=Math.floor,d=function(t,e,o){return 0===e?o:e%2===1?d(t,e-1,o*t):d(t*t,e/2,o)},f=function(t){var e=0,o=t;while(o>=4096)e+=12,o/=4096;while(o>=2)e+=1,o/=2;return e},u=function(t,e,o){var a=-1,n=o;while(++a<6)n+=e*t[a],t[a]=n%1e7,n=l(n/1e7)},p=function(t,e){var o=6,a=0;while(--o>=0)a+=t[o],t[o]=l(a/e),a=a%e*1e7},v=function(t){var e=6,o="";while(--e>=0)if(""!==o||0===e||0!==t[e]){var a=String(t[e]);o=""===o?a:o+r.call("0",7-a.length)+a}return o},h=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,o,a,c,s=i(this),l=n(t),h=[0,0,0,0,0,0],g="",m="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(g="-",s=-s),s>1e-21)if(e=f(s*d(2,69,1))-69,o=e<0?s*d(2,-e,1):s/d(2,e,1),o*=4503599627370496,e=52-e,e>0){u(h,0,o),a=l;while(a>=7)u(h,1e7,0),a-=7;u(h,d(10,a,1),0),a=e-1;while(a>=23)p(h,1<<23),a-=23;p(h,1<<a),u(h,1,1),p(h,2),m=v(h)}else u(h,0,o),u(h,1<<-e,0),m=v(h)+r.call("0",l);return l>0?(c=m.length,m=g+(c<=l?"0."+r.call("0",l-c)+m:m.slice(0,c-l)+"."+m.slice(c-l))):m=g+m,m}})},bc31:function(t,e,o){"use strict";o("c162")},c162:function(t,e,o){var a=o("adf9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("499e").default;n("c122e3f2",a,!0,{sourceMap:!1,shadowMode:!1})},c813:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("van-icon",{staticClass:"backTop",attrs:{name:"back-top",size:"35"}})},n=[],i={name:"BackTop"},r=i,c=(o("9d35"),o("2877")),s=Object(c["a"])(r,a,n,!1,null,"06efdfc6",null);e["a"]=s.exports},cd20:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,".param-info[data-v-5a39870d]{padding:20px 15px;font-size:14px;border-bottom:5px solid #f2f5f8}.param-info table[data-v-5a39870d]{width:100%;border-collapse:collapse}.param-info table tr[data-v-5a39870d]{height:42px}.param-info table tr td[data-v-5a39870d]{border-bottom:1px solid hsla(0,0%,39.2%,.1)}.info-param-key[data-v-5a39870d]{width:95px}.info-param[data-v-5a39870d]{border-top:1px solid rgba(0,0,0,.1)}.param-value[data-v-5a39870d]{color:#eb4868}.info-img img[data-v-5a39870d]{width:100%}",""]),t.exports=e},cfa0:function(t,e,o){var a=o("d1b2");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("499e").default;n("2c271d56",a,!0,{sourceMap:!1,shadowMode:!1})},d1b2:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,".shop-info[data-v-00cfac1e]{padding:25px 8px;border-bottom:5px solid #f2f5f8}.shop-top[data-v-00cfac1e]{line-height:45px;display:flex;align-items:center}.shop-top img[data-v-00cfac1e]{width:45px;height:45px;border-radius:50%;border:1px solid rgba(0,0,0,.1)}.shop-top .title[data-v-00cfac1e]{margin-left:10px;vertical-align:center}.shop-middle[data-v-00cfac1e]{margin-top:15px;display:flex;align-items:center}.shop-middle-item[data-v-00cfac1e]{flex:1}.shop-middle-left[data-v-00cfac1e]{display:flex;justify-content:space-evenly;color:#333;text-align:center;border-right:1px solid rgba(0,0,0,.1)}.goods-count[data-v-00cfac1e],.sells-count[data-v-00cfac1e]{font-size:18px}.goods-text[data-v-00cfac1e],.sells-text[data-v-00cfac1e]{margin-top:10px;font-size:12px}.shop-middle-right[data-v-00cfac1e]{font-size:13px;color:#333}.shop-middle-right table[data-v-00cfac1e]{width:120px;margin-left:30px}.shop-middle-right table td[data-v-00cfac1e]{padding:5px 0}.shop-middle-right .score[data-v-00cfac1e]{color:#5ea732}.shop-middle-right .score-better[data-v-00cfac1e]{color:#f13e3a}.shop-middle-right .better span[data-v-00cfac1e]{background-color:#5ea732;color:#fff;text-align:center}.shop-middle-right .better-more span[data-v-00cfac1e]{background-color:#f13e3a}.shop-bottom[data-v-00cfac1e]{text-align:center;margin-top:10px}.enter-shop[data-v-00cfac1e]{display:inline-block;font-size:14px;background-color:#f2f5f8;width:150px;height:30px;text-align:center;line-height:30px;border-radius:10px}",""]),t.exports=e},d784:function(t,e,o){"use strict";o("ac1f");var a=o("6eeb"),n=o("9263"),i=o("d039"),r=o("b622"),c=o("9112"),s=r("species"),l=RegExp.prototype;t.exports=function(t,e,o,d){var f=r(t),u=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=u&&!i((function(){var e=!1,o=/a/;return"split"===t&&(o={},o.constructor={},o.constructor[s]=function(){return o},o.flags="",o[f]=/./[f]),o.exec=function(){return e=!0,null},o[f](""),!e}));if(!u||!p||o){var v=/./[f],h=e(f,""[t],(function(t,e,o,a,i){var r=e.exec;return r===n||r===l.exec?u&&!i?{done:!0,value:v.call(e,o,a)}:{done:!0,value:t.call(o,e,a)}:{done:!1}}));a(String.prototype,t,h[0]),a(l,f,h[1])}d&&c(l[f],"sham",!0)}},dbb4:function(t,e,o){var a=o("23e7"),n=o("83ab"),i=o("56ef"),r=o("fc6a"),c=o("06cf"),s=o("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,o,a=r(t),n=c.f,l=i(a),d={},f=0;while(l.length>f)o=n(a,e=l[f++]),void 0!==o&&s(d,e,o);return d}})},e439:function(t,e,o){var a=o("23e7"),n=o("d039"),i=o("fc6a"),r=o("06cf").f,c=o("83ab"),s=n((function(){r(1)})),l=!c||s;a({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return r(i(t),e)}})},f1f5:function(t,e,o){"use strict";o("1685")},fce3:function(t,e,o){var a=o("d039"),n=o("da84"),i=n.RegExp;t.exports=a((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-4ce0e538.0330b4a2.js.map