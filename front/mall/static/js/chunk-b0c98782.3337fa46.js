(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0c98782"],{"01ca":function(t,e,n){},"074a":function(t,e,n){"use strict";n("01ca")},"0931":function(t,e,n){"use strict";n("deed")},"6af2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order_list"},[n("nav-bar",{attrs:{title:t.$route.meta.title}},[n("span",{staticStyle:{color:"#333"}},[n("svg-icon",{attrs:{"icon-class":"share",width:15,height:15}})],1)]),n("van-tabs",{attrs:{"swipe-threshold":5,sticky:"",swipeable:"","offset-top":"46",type:"line"},on:{click:t.handleTabClick},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},t._l(t.tabTitles,(function(e,r){return n("van-tab",{key:r,attrs:{title:e}},[n("van-pull-refresh",{staticStyle:{"min-height":"calc(100vh - 84px)"},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"immediate-check":!1},on:{load:t.getOrderList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.orderListEmptyShow?n("van-empty",{attrs:{description:"您还没有相关订单"}}):t._e(),t._l(t.orderList,(function(e,r){return n("div",{key:r,staticClass:"order-item",on:{click:function(n){return t.toOrderDetail(e.orderSn)}}},[n("div",{staticClass:"order-title"},[n("div",{staticClass:"order-sn"},[t._v("订单编号: "+t._s(e.orderSn))]),n("div",{staticClass:"order-staus"},[t._v(t._s(e.orderStatusText))])]),t._l(e.goodsList,(function(r,i){return n("van-card",{key:i,attrs:{title:r.goodsName,num:r.number,price:r.price,thumb:r.picUrl},scopedSlots:t._u([{key:"footer",fn:function(){return[e.handleOption.comment&&0==r.comment?n("van-button",{attrs:{size:"mini"},on:{click:function(e){return e.stopPropagation(),t.commentGoods(r.id,r.goodsId)}}},[t._v("去评价")]):t._e()]},proxy:!0}],null,!0)},[n("div",{attrs:{slot:"desc"},slot:"desc"},[n("div",{staticClass:"desc"},t._l(r.specifications,(function(e,r){return n("van-tag",{key:r,staticStyle:{"margin-right":"6px"},attrs:{plain:""}},[t._v(t._s(e))])})),1)])])})),n("div",{staticClass:"total"},[t._v(" 合计: "+t._s(t._f("yuan")(e.actualPrice))+"（含运费"+t._s(t._f("yuan")(e.post_fee))+"） ")]),n("div",{staticClass:"footer_btn",attrs:{slot:"footer"},slot:"footer"},[e.handleOption.cancel?n("van-button",{attrs:{round:"",size:"small"},on:{click:function(n){return n.stopPropagation(),t.cancelOrder(e.id)}}},[t._v("取消订单")]):t._e(),e.handleOption.pay?n("van-button",{attrs:{round:"",size:"small",type:"danger",plain:""},on:{click:function(n){return n.stopPropagation(),t.toPay(e.orderSn,e.actualPrice)}}},[t._v("去支付")]):t._e(),e.handleOption.refund?n("van-button",{attrs:{round:"",size:"small"},on:{click:function(n){return n.stopPropagation(),t.refundOrder(e.id)}}},[t._v("退款/售后")]):t._e(),e.handleOption.confirm?n("van-button",{attrs:{round:"",plain:"",size:"small"},on:{click:function(n){return n.stopPropagation(),t.confirmOrder(e.id)}}},[t._v("确认收货")]):t._e(),e.handleOption.delete?n("van-button",{attrs:{round:"",size:"small"},on:{click:function(n){return n.stopPropagation(),t.delOrder(e.id)}}},[t._v("删除订单")]):t._e()],1)],2)}))],2)],1)],1)})),1)],1)},i=[],o=n("2909"),a=(n("a9e3"),n("d81d"),n("99af"),n("f8b7")),s={name:"OrderList",props:{active:{type:[String,Number],default:0}},data:function(){return{activeIndex:Number(this.active),tabTitles:["全部","待付款","待发货","待收货","已完成"],orderList:[],refreshing:!1,page:0,limit:10,loading:!0,orderListEmptyShow:!1,finished:!1}},created:function(){this.init()},methods:{init:function(){this.page=0,this.orderList=[],this.getOrderList(!0)},onRefresh:function(){this.refreshing=!0,this.page=0,this.getOrderList(!0)},getOrderList:function(t){var e=this;this.loading=!0,this.orderListEmptyShow=!1,this.page++,Object(a["f"])({showType:this.activeIndex,pageNum:this.page,pageSize:this.limit,sortName:"updateTime,createTime",sortOrder:"desc"}).then((function(n){var r;(r=e.orderList).push.apply(r,Object(o["a"])(n.map.data)),e.loading=!1,e.refreshing=!1,e.finished=n.map.page>=n.map.pages,t&&n.map.data.length<=0&&(e.orderListEmptyShow=!0)}))},delOrder:function(t){var e=this;this.$dialog.confirm({message:"确定要删除该订单吗?"}).then((function(){Object(a["c"])(t).then((function(){e.init(),e.$toast("已删除订单")}))})).catch((function(){}))},cancelOrder:function(t){var e=this;this.$dialog.confirm({message:"确定要取消该订单吗?"}).then((function(){Object(a["a"])(t).then((function(){e.init(),e.$toast("已取消该订单")}))})).catch((function(){}))},refundOrder:function(t){var e=this;this.$dialog.confirm({message:"确定要申请退款吗?"}).then((function(){Object(a["h"])(t).then((function(){e.init(),e.$toast("已申请订单退款")}))})).catch((function(){}))},confirmOrder:function(t){var e=this;this.$dialog.confirm({message:"请确认收到货物, 确认收货后无法撤销!"}).then((function(){Object(a["b"])(t).then((function(){e.init(),e.$toast("已确认收货")}))})).catch((function(){}))},commentGoods:function(t,e){this.$router.push({path:"/goodsComment/".concat(t,"/").concat(e)})},toPay:function(t,e){this.$router.push({name:"OrderPay",params:{orderSn:t,actualPrice:e}})},handleTabClick:function(){this.page=0,this.orderList=[],this.getOrderList(!0)},toOrderDetail:function(t){this.$router.push({path:"/order/detail/".concat(t)})}}},c=s,u=(n("074a"),n("0931"),n("2877")),d=Object(u["a"])(c,r,i,!1,null,"677554e3",null);e["default"]=d.exports},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d039"),a=n("e8b5"),s=n("861d"),c=n("7b0b"),u=n("07fa"),d=n("8418"),l=n("65f0"),f=n("1dde"),h=n("b622"),p=n("2d00"),m=h("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",b=i.TypeError,O=p>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),_=f("concat"),y=function(t){if(!s(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)},k=!O||!_;r({target:"Array",proto:!0,forced:k},{concat:function(t){var e,n,r,i,o,a=c(this),s=l(a,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?a:arguments[e],y(o)){if(i=u(o),f+i>g)throw b(v);for(n=0;n<i;n++,f++)n in o&&d(s,f,o[n])}else{if(f>=g)throw b(v);d(s,f++,o)}return s.length=f,s}})},deed:function(t,e,n){},f8b7:function(t,e,n){"use strict";n.d(e,"k",(function(){return i})),n.d(e,"j",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"g",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"i",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return p}));var r=n("b775");function i(t){return Object(r["a"])({url:"/order/submit",method:"post",data:t})}function o(){return Object(r["a"])({url:"/order/statusCount",method:"post"})}function a(t){return Object(r["a"])({url:"/order/detail/".concat(t),method:"get"})}function s(t){return Object(r["a"])({url:"/order/prepay",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/order/h5pay",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/order/searchResult/"+t+"?t="+(new Date).getTime(),method:"get"})}function d(t){return Object(r["a"])({url:"/order/list",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/order/cancel/"+t,method:"post"})}function f(t){return Object(r["a"])({url:"/order/refund/"+t,method:"post"})}function h(t){return Object(r["a"])({url:"/order/delete/"+t,method:"post"})}function p(t){return Object(r["a"])({url:"/order/confirm/"+t,method:"post"})}}}]);
//# sourceMappingURL=chunk-b0c98782.3337fa46.js.map