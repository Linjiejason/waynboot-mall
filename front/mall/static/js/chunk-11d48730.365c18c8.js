(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11d48730"],{"4e12":function(e,t,n){"use strict";n("d4a0")},"9afd":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"set_nickname"},[n("nav-bar",{attrs:{title:e.$route.meta.title}}),n("van-cell-group",[n("van-field",{attrs:{label:"昵称"},model:{value:e.nickName,callback:function(t){e.nickName=t},expression:"nickName"}})],1),n("div",{staticClass:"bottom_btn"},[n("van-button",{attrs:{type:"primary",size:"large"},on:{click:e.saveNick}},[e._v("保存")])],1)],1)},i=[],c=n("1da1"),s=(n("96cf"),n("c24f")),r={data:function(){return{nickName:""}},created:function(){this.getNick()},methods:{getNick:function(){this.nickName=this.$store.getters.userInfo.nickname},saveNick:function(){var e=this;this.nickName?Object(s["e"])({nickname:this.nickName}).then((function(t){e.$dialog.alert({message:"保存成功"}).then(Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/getInfo");case 2:e.$router.go(-1);case 3:case"end":return t.stop()}}),t)}))))})):this.$toast.fail("昵称不能为空")}}},o=r,u=(n("4e12"),n("2877")),l=Object(u["a"])(o,a,i,!1,null,"1d83c941",null);t["default"]=l.exports},d4a0:function(e,t,n){}}]);
//# sourceMappingURL=chunk-11d48730.365c18c8.js.map