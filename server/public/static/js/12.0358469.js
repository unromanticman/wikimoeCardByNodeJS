webpackJsonp([12],{"/4jr":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"\n.wm_admin_sk_copy{\r\n  border-radius: 3px;\r\n  border:1px solid #bebebe;\r\n  padding: 5px 10px;\r\n  height: 24px;\r\n  line-height: 24px;\n}\r\n",""])},"2MXY":function(e,t,n){var r=n("/4jr");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("2dbda135",r,!0,{})},H8H0:function(e,t,n){"use strict";function r(e){n("2MXY")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("r4Fr"),a=(n("oAV5"),{data:function(){return{key:{key:""},token:sessionStorage.getItem("adminToken")?sessionStorage.getItem("adminToken"):localStorage.getItem("adminToken")}},mounted:function(){this.getKey()},methods:{getKey:function(){var e=this,t={type:"get",token:this.token};o.a.adminsecretkey(t).then(function(t){1==t.data.code?e.key.key=t.data.secretkey||"":e.$message.error(t.data.msg)})},onSubmit:function(){var e=this;this.$confirm("此操作将替换现有的key, 是否继续?","提示",{confirmButtonText:"替换",cancelButtonText:"取消",type:"warning"}).then(function(){var t={type:"edit",token:e.token};o.a.adminsecretkey(t).then(function(t){1==t.data.code?(e.$message({message:"生成成功！",type:"success"}),e.key.key=t.data.secretkey):e.$message.error(t.data.msg)})}).catch(function(){})}}}),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wmcard_admincenter_common_right_body"},[n("el-form",{attrs:{model:e.key,"label-width":"140px"}},[n("el-form-item",{attrs:{label:"key："}},[n("p",{staticClass:"wm_admin_sk_copy"},[e._v(e._s(e.key.key||"您还未设置secret key，请重新生成！"))])]),e._v(" "),n("el-form-item",[n("p",[e._v("注：开发者在使用接口时加上{secretkey:上面的key}可以避免验证码和邮箱验证。")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("重新生成")])],1)],1)],1)},i=[],c={render:s,staticRenderFns:i},d=c,m=n("VU/8"),y=r,k=m(a,d,!1,y,null,null);t.default=k.exports}});