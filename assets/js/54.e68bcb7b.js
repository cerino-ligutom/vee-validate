(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{212:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{currentStep:1,address:"",fname:"",lname:"",email:""}},methods:{goToStep:function(e){e<1||(e>3?this.onSubmit():this.currentStep=e)},onSubmit:function(){this.$refs.form.validate().then(function(e){e&&alert("Success!")})}}},a=(r(297),r(24)),o=Object(a.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{ref:"form"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("fieldset",[r("legend",[e._v("Step "+e._s(e.currentStep))]),e._v(" "),r("keep-alive",[1===e.currentStep?r("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Your email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(n[0]))])]}}],null,!1,2150451707)}):e._e()],1),e._v(" "),r("keep-alive",[2===e.currentStep?r("ValidationProvider",{attrs:{name:"first name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fname,expression:"fname"}],attrs:{type:"text",placeholder:"Your first name"},domProps:{value:e.fname},on:{input:function(t){t.target.composing||(e.fname=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(n[0]))])]}}],null,!1,2804372586)}):e._e()],1),e._v(" "),r("keep-alive",[2===e.currentStep?r("ValidationProvider",{attrs:{name:"last name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.lname,expression:"lname"}],attrs:{type:"text",placeholder:"Your last name"},domProps:{value:e.lname},on:{input:function(t){t.target.composing||(e.lname=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(n[0]))])]}}],null,!1,3298692314)}):e._e()],1),e._v(" "),r("keep-alive",[3===e.currentStep?r("ValidationProvider",{attrs:{name:"address",rules:"required|min:5"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"Your address"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(n[0]))])]}}],null,!1,3291007741)}):e._e()],1)],1),e._v(" "),r("button",{attrs:{type:"button"},on:{click:function(t){return e.goToStep(e.currentStep-1)}}},[e._v("Previous")]),e._v(" "),r("button",{attrs:{type:"button"},on:{click:function(t){return e.goToStep(e.currentStep+1)}}},[e._v(e._s(3===e.currentStep?"Submit":"Next"))])])])},[],!1,null,"6c6e076d",null);t.default=o.exports},243:function(e,t,r){},297:function(e,t,r){"use strict";var n=r(243);r.n(n).a}}]);