(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-588c1651"],{"01ab":function(t,a,e){},"6af4":function(t,a,e){"use strict";e("01ab")},"9fb6":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"set_nickname"},[e("nav-bar",{attrs:{title:t.$route.meta.title}}),e("van-cell-group",[e("van-field",{attrs:{label:"生日"},model:{value:t.birthday,callback:function(a){t.birthday=a},expression:"birthday"}})],1),e("div",{staticClass:"bottom_btn"},[e("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.saveBirthday}},[t._v("保存")])],1)],1)},i=[],r=e("c24f"),s={data:function(){return{birthday:"",show:!1}},created:function(){this.getBirthday()},methods:{getBirthday:function(){this.birthday=this.$store.getters.userInfo.birthday},saveBirthday:function(){var t=this;Object(r["e"])({nickname:this.nickName}).then((function(a){t.$dialog.alert({message:"保存成功"}).then((function(){t.$router.go(-1)}))}))}}},c=s,o=(e("6af4"),e("2877")),u=Object(o["a"])(c,n,i,!1,null,"02720515",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-588c1651.937dc696.js.map