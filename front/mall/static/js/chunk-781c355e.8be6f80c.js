(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-781c355e"],{"3b7b":function(t,e,a){"use strict";a("4e04")},"4e04":function(t,e,a){},"4e50":function(t,e,a){t.exports=a.p+"static/img/wx_pay.2731abb7.png"},b64b:function(t,e,a){var n=a("23e7"),r=a("7b0b"),o=a("df75"),i=a("d039"),c=i((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(r(t))}})},d179:function(t,e,a){t.exports=a.p+"static/img/ali_pay.41a79780.png"},d81e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"payment"},[n("nav-bar",{attrs:{title:t.$route.meta.title}}),n("van-notice-bar",{attrs:{mode:"closeable"}},[t._v("请在半小时内完成付款，否则系统自动取消订单")]),n("van-cell-group",{staticClass:"payment_group"},[n("van-cell",{attrs:{title:"订单编号",value:t.orderSn}}),n("van-cell",{attrs:{title:"实付金额"}},[n("span",{staticClass:"red"},[t._v(t._s(t._f("yuan")(t.actualPrice)))])])],1),n("div",{staticClass:"pay_way_group"},[n("div",{staticClass:"pay_way_title"},[t._v("选择支付方式")]),n("van-radio-group",{model:{value:t.payWay,callback:function(e){t.payWay=e},expression:"payWay"}},[n("van-cell-group",[n("van-cell",[n("template",{slot:"title"},[n("p",{staticStyle:{"font-size":"17px"}},[t._v("测试支付方式")])]),n("van-radio",{attrs:{name:"test"}})],2),n("van-cell",[n("template",{slot:"title"},[n("img",{attrs:{src:a("d179"),alt:"支付宝",width:"82",height:"29"}})]),n("van-radio",{attrs:{name:"ali"}})],2),n("van-cell",[n("template",{slot:"title"},[n("img",{attrs:{src:a("4e50"),alt:"微信支付",width:"113",height:"23"}})]),n("van-radio",{attrs:{name:"wx"}})],2)],1)],1)],1),n("van-button",{staticClass:"pay_submit",attrs:{type:"primary","bottom-action":""},on:{click:t.pay}},[t._v("去支付")])],1)},r=[],o=(a("d81d"),a("e9c4"),a("ac1f"),a("5319"),a("f8b7")),i=a("2ef0"),c=a.n(i),u=(a("d3b7"),a("159b"),a("b64b"),function(){for(var t={},e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return a.forEach((function(e){t[e]=window.localStorage.getItem(e)||null})),t}),s=function(t){Object.keys(t).forEach((function(e){var a=t[e];window.localStorage.setItem(e,a)}))},d={name:"Payment",data:function(){return{payWay:"test",orderSn:void 0,actualPrice:0}},created:function(){c.a.has(this.$route.params,"orderSn")&&(this.orderSn=this.$route.params.orderSn,this.actualPrice=this.$route.params.actualPrice)},methods:{pay:function(){var t=this;this.$dialog.alert({message:"你选择了"+("wx"===this.payWay?"微信支付":"支付宝支付")}).then((function(){if("wx"===t.payWay){var e=navigator.userAgent.toLowerCase(),a=-1!==e.indexOf("micromessenger");a?Object(o["g"])({orderSn:t.orderSn,payType:1}).then((function(e){var a=e.map.result,n=JSON.stringify({appId:a.appId,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.packageValue,signType:"MD5",paySign:a.paySign});s({prepay_data:n}),"undefined"===typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",t.onBridgeReady,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",t.onBridgeReady),document.attachEvent("onWeixinJSBridgeReady",t.onBridgeReady)):t.onBridgeReady()})).catch((function(e){t.$dialog.alert({message:e.map.msg}),t.$router.replace({name:"PayStatus",params:{status:"failed"}})})):Object(o["e"])({orderSn:t.orderSn,payType:1}).then((function(e){var a=e.map.data;window.location.replace(a.mwebUrl+"&redirect_url="+encodeURIComponent(window.location.origin+"/#/?orderSn="+t.orderSn+"&tip=yes"))})).catch((function(e){console.log(e),t.$router.replace({name:"PayStatus",params:{status:"failed"}})}))}else"ali"===t.payWay?(t.$toast.loading({duration:0,forbidClick:!0,message:"支付中，请稍后"}),Object(o["e"])({orderSn:t.orderSn,payType:2}).then((function(e){t.alipayClientCall(e.map.form)})).catch((function(e){console.log(e),t.$router.replace({name:"PayStatus",params:{status:"failed"}})}))):(t.$toast.loading({duration:0,forbidClick:!0,message:"支付中，请稍后"}),Object(o["e"])({orderSn:t.orderSn,payType:3}).then((function(e){t.$router.replace({name:"PayStatus",params:{status:"success"}})})).catch((function(e){console.log(e),t.$router.replace({name:"PayStatus",params:{status:"failed"}})})))}))},alipayClientCall:function(t){var e=document.createElement("div");console.log("我是后端返回的数据:"+t),e.innerHTML=t,document.body.appendChild(e),console.log("punchout_form:"+document.forms.punchout_form),document.forms.punchout_form.submit()},onBridgeReady:function(){var t=this,e=u("prepay_data");WeixinJSBridge.invoke("getBrandWCPayRequest",JSON.parse(e.prepay_data),(function(e){console.log(e),"get_brand_wcpay_request:ok"===e.err_msg?t.$router.replace({name:"PayStatus",params:{status:"success"}}):"get_brand_wcpay_request:cancel"===e.err_msg?t.$router.replace({name:"PayStatus",params:{status:"cancel"}}):t.$router.replace({name:"PayStatus",params:{status:"failed"}})}))}}},l=d,p=(a("3b7b"),a("2877")),m=Object(p["a"])(l,n,r,!1,null,"12ad9498",null);e["default"]=m.exports},f8b7:function(t,e,a){"use strict";a.d(e,"k",(function(){return r})),a.d(e,"j",(function(){return o})),a.d(e,"d",(function(){return i})),a.d(e,"g",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"i",(function(){return s})),a.d(e,"f",(function(){return d})),a.d(e,"a",(function(){return l})),a.d(e,"h",(function(){return p})),a.d(e,"c",(function(){return m})),a.d(e,"b",(function(){return f}));var n=a("b775");function r(t){return Object(n["a"])({url:"/order/submit",method:"post",data:t})}function o(){return Object(n["a"])({url:"/order/statusCount",method:"post"})}function i(t){return Object(n["a"])({url:"/order/detail/".concat(t),method:"get"})}function c(t){return Object(n["a"])({url:"/order/prepay",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/order/h5pay",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/order/searchResult/"+t+"?t="+(new Date).getTime(),method:"get"})}function d(t){return Object(n["a"])({url:"/order/list",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/order/cancel/"+t,method:"post"})}function p(t){return Object(n["a"])({url:"/order/refund/"+t,method:"post"})}function m(t){return Object(n["a"])({url:"/order/delete/"+t,method:"post"})}function f(t){return Object(n["a"])({url:"/order/confirm/"+t,method:"post"})}}}]);
//# sourceMappingURL=chunk-781c355e.8be6f80c.js.map