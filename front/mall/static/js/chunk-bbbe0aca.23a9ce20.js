(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbbe0aca"],{"85e9":function(t,r,e){"use strict";e("ba3e")},ba3e:function(t,r,e){},daa0:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"order_detail"},[t.loading?e("div",{staticClass:"loading"},[e("van-loading",{attrs:{type:"spinner"}},[t._v("加载中...")])],1):t._e(),e("nav-bar",{attrs:{title:t.$route.meta.title}},[e("span",{staticStyle:{color:"#333"}},[e("svg-icon",{attrs:{"icon-class":"share",width:15,height:15}})],1)]),e("div",{staticClass:"order-detail"},[e("div",[t._v("订单编号: "+t._s(t.orderInfo.orderSn))]),e("div",[t._v("订单状态: "+t._s(t.orderInfo.orderStatusText))]),e("div",[t._v("下单时间: "+t._s(t.orderInfo.createTime))]),e("div",[t._v("支付方式: "+t._s(t.orderInfo.payTypeText))]),e("div",[t._v("支付时间: "+t._s(t.orderInfo.payTime))]),e("div",[t._v("订单金额: "+t._s(t._f("yuan")(t.orderInfo.orderPrice)))]),e("div",[t._v("实付金额: "+t._s(t._f("yuan")(t.orderInfo.actualPrice)))]),e("div",[t._v("收货地址: "+t._s(t.orderInfo.address))]),e("div",[t._v("用户留言: "+t._s(t.orderInfo.message))]),t._l(t.orderInfo.orderGoodsVOList,(function(r,n){return e("van-card",{key:n,attrs:{title:r.goodsName,num:r.number,price:r.price,thumb:r.picUrl},nativeOn:{click:function(e){return t.toOrderDetail(r.goodsId)}},scopedSlots:t._u([{key:"footer",fn:function(){return[401==t.orderInfo.order_status&&0==r.comment?e("van-button",{attrs:{size:"mini",round:"",plain:""},on:{click:function(e){return e.stopPropagation(),t.commentGoods(r.id,r.goodsId)}}},[t._v("去评价")]):t._e()]},proxy:!0}],null,!0)},[e("div",{attrs:{slot:"desc"},slot:"desc"},[e("div",{staticClass:"desc"},t._l(r.specifications,(function(r,n){return e("van-tag",{key:n,staticStyle:{"margin-right":"6px"},attrs:{plain:""}},[t._v(t._s(r))])})),1)])])}))],2)],1)},o=[],d=(e("d3b7"),e("d81d"),e("f8b7")),i={props:{orderSn:{type:String,default:""}},data:function(){return{orderInfo:[],loading:!0}},mounted:function(){console.log(this.orderSn),this.orderDetail()},methods:{orderDetail:function(){var t=this;Object(d["d"])(this.orderSn).then((function(r){t.orderInfo=r.map.order})).finally((function(r){t.loading=!1}))}}},a=i,u=(e("85e9"),e("2877")),c=Object(u["a"])(a,n,o,!1,null,"4996d2b7",null);r["default"]=c.exports},f8b7:function(t,r,e){"use strict";e.d(r,"k",(function(){return o})),e.d(r,"j",(function(){return d})),e.d(r,"d",(function(){return i})),e.d(r,"g",(function(){return a})),e.d(r,"e",(function(){return u})),e.d(r,"i",(function(){return c})),e.d(r,"f",(function(){return s})),e.d(r,"a",(function(){return f})),e.d(r,"h",(function(){return l})),e.d(r,"c",(function(){return p})),e.d(r,"b",(function(){return v}));var n=e("b775");function o(t){return Object(n["a"])({url:"/order/submit",method:"post",data:t})}function d(){return Object(n["a"])({url:"/order/statusCount",method:"post"})}function i(t){return Object(n["a"])({url:"/order/detail/".concat(t),method:"get"})}function a(t){return Object(n["a"])({url:"/order/prepay",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/order/h5pay",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/order/searchResult/"+t+"?t="+(new Date).getTime(),method:"get"})}function s(t){return Object(n["a"])({url:"/order/list",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/order/cancel/"+t,method:"post"})}function l(t){return Object(n["a"])({url:"/order/refund/"+t,method:"post"})}function p(t){return Object(n["a"])({url:"/order/delete/"+t,method:"post"})}function v(t){return Object(n["a"])({url:"/order/confirm/"+t,method:"post"})}}}]);
//# sourceMappingURL=chunk-bbbe0aca.23a9ce20.js.map