(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b997432"],{"6d13":function(e,t,n){"use strict";n("d02d")},cb06:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"set_nickname"},[n("nav-bar",{attrs:{title:e.$route.meta.title}}),n("van-cell-group",[n("van-field",{attrs:{label:"邮箱"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("div",{staticClass:"bottom_btn"},[n("van-button",{attrs:{type:"primary",size:"large"},on:{click:e.saveNick}},[e._v("保存")])],1)],1)},i=[],r=n("1da1"),s=(n("96cf"),n("c24f")),c={data:function(){return{email:""}},created:function(){this.getEmail()},methods:{getEmail:function(){this.email=this.$store.getters.userInfo.email},saveNick:function(){var e=this;Object(s["e"])({email:this.email}).then((function(t){e.$dialog.alert({message:"保存成功"}).then(Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/getInfo");case 2:e.$router.go(-1);case 3:case"end":return t.stop()}}),t)}))))}))}}},o=c,l=(n("6d13"),n("2877")),u=Object(l["a"])(o,a,i,!1,null,"39408936",null);t["default"]=u.exports},d02d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-5b997432.d671d0be.js.map