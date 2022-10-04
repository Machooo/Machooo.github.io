(window.webpackJsonp=window.webpackJsonp||[]).push([[0,5],{366:function(t,e,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("3e1576d3",content,!0,{sourceMap:!1})},368:function(t,e,r){"use strict";r.r(e);r(37),r(40),r(26);var o=r(384),n=r.n(o),c=r(385),l=r.n(c),d=r(386),w=r.n(d),f=r(387),h=r.n(f),v=r(375),_={name:"PasswordField",components:{PasswordIconVisible:l.a,PasswordIconHidden:w.a,PasswordIconNew:h.a,PasswordIcon:n.a,PasswordGenerator:v.default},data:function(){return{password:"",passwordType:"password"}},computed:{passwordQuality:function(){var t=0;return/\d/.test(this.password)&&(t+=1),/[$&+,:;=?@#|'<>.^*()%!-]/.test(this.password)&&(t+=1),/[a-z]/.test(this.password)&&(t+=1),/[A-Z]/.test(this.password)&&(t+=1),this.password.length<10&&(t-=1),t}},methods:{togglePasswordVisibility:function(){this.passwordType="text"===this.passwordType?"password":"text"},generatePassword:function(t){this.password=t,this.$emit("generatedPassword",t)}}},y=(r(388),r(34)),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"password-field"},[e("div",{staticClass:"note-popup__input"},[e("div",{staticClass:"note-popup__input-label"},[t._v("\n      "+t._s(t.$t("note.popup.fields.password.label"))+"\n      "),t.password.length>0?e("div",{staticClass:"password-field__quality"},[e("PasswordIcon"),t._v("\n        "+t._s(t.$t("note.popup.fields.password.securityLevel[".concat(t.passwordQuality,"]")))+"\n      ")],1):t._e()]),t._v(" "),e("div",{staticClass:"note-popup__input-field"},["checkbox"===t.passwordType?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(e){var r=t.password,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,null);o.checked?c<0&&(t.password=r.concat([null])):c>-1&&(t.password=r.slice(0,c).concat(r.slice(c+1)))}else t.password=n}}}):"radio"===t.passwordType?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(e){t.password=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:t.passwordType},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),e("div",{staticClass:"password__buttons"},[e("div",{staticClass:"password__button",on:{click:function(e){return t.$refs.passwordGenerator.generatePassword()}}},[e("PasswordIconNew")],1),t._v(" "),e("div",{staticClass:"password__button",on:{click:t.togglePasswordVisibility}},["password"===t.passwordType?e("PasswordIconHidden"):e("PasswordIconVisible")],1)])]),t._v(" "),e("div",{staticClass:"password-field__quality-visual"},t._l(5,(function(r){return e("div",{key:r,class:r<=t.passwordQuality+1&&t.password.length>0&&"active"})})),0),t._v(" "),e("PasswordGenerator",{ref:"passwordGenerator",on:{generatePassword:t.generatePassword}})],1)])}),[],!1,null,"5b622524",null);e.default=component.exports;installComponents(component,{PasswordGenerator:r(375).default})},369:function(t,e,r){"use strict";var o=r(1),n=r(81).findIndex,c=r(125),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},370:function(t,e,r){"use strict";r(366)},371:function(t,e,r){var o=r(53)(!1);o.push([t.i,'.password-generator{position:relative}.password-generator__option{position:relative;width:100%;display:flex;padding-left:30px;color:rgba(255,255,255,0.5);cursor:pointer;transition:var(--transition);margin-bottom:10px}.password-generator__option:last-child{margin-bottom:0}.password-generator__option:hover{color:var(--text-color)}.password-generator__option:hover::before{border-color:var(--text-color)}.password-generator__option::before{content:"";position:absolute;left:0;top:0;width:20px;height:20px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);box-shadow:inset 0px 1px 2px rgba(0,0,0,0.25);border-radius:2px;transition:var(--transition)}.password-generator__option--active{color:var(--text-color)}.password-generator__option--active::before{background:rgba(255,255,255,0.15) url("/icon_check.svg") center no-repeat;background-size:12px;border:1px solid #ECF1F0;border-radius:2px}\n',""]),t.exports=o},375:function(t,e,r){"use strict";r.r(e);r(12),r(24),r(29),r(369);var o={name:"PasswordGenerator",data:function(){return{passwordLength:15,options:[{label:"Numbers",value:"withNumbers",selected:!0,characters:"0123456789"},{label:"Symbols",value:"withSymbols",selected:!1,characters:"!@#$%ˆ&*()_+-="},{label:"Lowercase",value:"withLowercase",selected:!1,characters:"abcdefghijklmnopqrstuvwxyz"},{label:"Uppercase",value:"withUppercase",selected:!1,characters:"abcdefghijklmnopqrstuvwxyz".toUpperCase()}]}},computed:{allowedAlphabet:function(){var t="";return this.options.forEach((function(e){e.selected&&(t+=e.characters)})),t}},methods:{selectOpion:function(option,t){if(t&&1===this.options.filter((function(t){return t.selected})).length)return!1;var e=this.options.findIndex((function(t){return t.label===option.label}));this.options[e].selected=!t},generatePassword:function(){for(var t="",i=0;i<this.passwordLength;i++)t+=this.allowedAlphabet.charAt(Math.floor(Math.random()*this.allowedAlphabet.length));this.$emit("generatePassword",t)}}},n=(r(370),r(34)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"password-generator"},[t._m(0),t._v(" "),e("div",{staticClass:"password-generator__options"},t._l(t.options,(function(option){return e("div",{key:option.value,staticClass:"password-generator__option",class:option.selected&&"password-generator__option--active",on:{click:function(e){return t.selectOpion(option,option.selected)}}},[t._v(t._s(option.label))])})),0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"password-generator__length"},[t("div",{staticClass:"note-popup__input-label"})])}],!1,null,null,null);e.default=component.exports},376:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("7e46d79a",content,!0,{sourceMap:!1})},384:function(t,e,r){r(25),r(19),r(29),r(12),r(38),r(24),r(39);var o=r(155),n=r(156),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(37),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,w=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,_=data.attrs,y=void 0===_?{}:_,O=n(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,h],style:[style,v],attrs:Object.assign({width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},O),w.concat([r("path",{attrs:{d:"M11.25 13.75L15 17.5L25 7.5",stroke:"#ECF1F0","stroke-width":"1.875","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M25 15C24.9994 17.1245 24.3221 19.1936 23.0664 20.9074C21.8108 22.6211 20.0419 23.8904 18.0164 24.5312C15.9908 25.1721 13.8138 25.1511 11.8009 24.4715C9.78803 23.7918 8.04392 22.4888 6.82143 20.7512C5.59893 19.0137 4.96159 16.9319 5.00179 14.8078C5.042 12.6836 5.75766 10.6275 7.04503 8.93744C8.3324 7.24738 10.1246 6.01126 12.1617 5.40826C14.1989 4.80526 16.3751 4.86673 18.375 5.58375",stroke:"#ECF1F0","stroke-width":"1.875","stroke-linecap":"round","stroke-linejoin":"round"}})]))}}},385:function(t,e,r){r(25),r(19),r(29),r(12),r(38),r(24),r(39);var o=r(155),n=r(156),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(37),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,w=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,_=data.attrs,y=void 0===_?{}:_,O=n(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,h],style:[style,v],attrs:Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},O),w.concat([r("g",{attrs:{"clip-path":"url(#clip0_1602_3585)"}},[r("g",{attrs:{"clip-path":"url(#clip1_1602_3585)"}},[r("path",{attrs:{d:"M1.02184 10.5187L1.02186 10.5187L1.01828 10.5143C0.896195 10.3632 0.833333 10.1822 0.833333 10.0001C0.833333 9.81798 0.896195 9.63697 1.01828 9.4859L1.01829 9.48591L1.02184 9.48146C1.77479 8.53663 3.0441 7.10595 4.63478 5.918C6.23361 4.72397 8.0785 3.83358 10.0002 3.83358C11.9218 3.83358 13.7667 4.72397 15.3655 5.918C16.9559 7.10569 18.225 8.536 18.978 9.48083C19.2298 9.79741 19.2292 10.2039 18.9784 10.5188C18.2254 11.4636 16.9562 12.8943 15.3655 14.0822C13.7667 15.2762 11.9218 16.1666 10.0002 16.1666C8.0785 16.1666 6.23361 15.2762 4.63478 14.0822C3.0441 12.8942 1.77479 11.4635 1.02184 10.5187Z",stroke:"#DFDFDF","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M12.2873 9.99993C12.2873 11.1658 11.2945 12.1665 9.99979 12.1665C8.70506 12.1665 7.71224 11.1658 7.71224 9.99993C7.71224 8.83409 8.70506 7.83333 9.99979 7.83333C11.2945 7.83333 12.2873 8.83409 12.2873 9.99993Z",stroke:"#DFDFDF","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}})])]),r("defs",[r("clipPath",{attrs:{id:"clip0_1602_3585"}},[r("rect",{attrs:{width:"20",height:"20",fill:"white"}})]),r("clipPath",{attrs:{id:"clip1_1602_3585"}},[r("rect",{attrs:{width:"20",height:"20",fill:"white"}})])])]))}}},386:function(t,e,r){r(25),r(19),r(29),r(12),r(38),r(24),r(39);var o=r(155),n=r(156),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(37),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,w=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,_=data.attrs,y=void 0===_?{}:_,O=n(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,h],style:[style,v],attrs:Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},O),w.concat([r("g",{attrs:{"clip-path":"url(#clip0_1602_3282)"}},[r("path",{attrs:{d:"M1.66602 8.33325C1.66602 8.33325 4.58268 11.6666 9.99935 11.6666C15.416 11.6666 18.3327 8.33325 18.3327 8.33325M3.33268 9.70409L1.66602 11.6666M18.3327 11.6666L16.6693 9.70659M7.42768 11.3999L6.66602 13.7499M12.5518 11.4066L13.3327 13.7499",stroke:"#ECF1F0","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}})]),r("defs",[r("clipPath",{attrs:{id:"clip0_1602_3282"}},[r("rect",{attrs:{width:"20",height:"20",fill:"white"}})])])]))}}},387:function(t,e,r){r(25),r(19),r(29),r(12),r(38),r(24),r(39);var o=r(155),n=r(156),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(37),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,w=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,_=data.attrs,y=void 0===_?{}:_,O=n(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,h],style:[style,v],attrs:Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},O),w.concat([r("g",{attrs:{"clip-path":"url(#clip0_1541_3402)"}},[r("g",{attrs:{"clip-path":"url(#clip1_1541_3402)"}},[r("path",{attrs:{d:"M3.463 2.43301C5.27756 0.860669 7.59899 -0.00333986 10 9.70265e-06C15.523 9.70265e-06 20 4.47701 20 10C20 12.136 19.33 14.116 18.19 15.74L15 10H18C18.0001 8.43163 17.5392 6.89781 16.6747 5.58926C15.8101 4.28071 14.5799 3.25517 13.1372 2.64013C11.6944 2.0251 10.1027 1.84771 8.55996 2.13003C7.0172 2.41234 5.59145 3.14191 4.46 4.22801L3.463 2.43301ZM16.537 17.567C14.7224 19.1393 12.401 20.0033 10 20C4.477 20 0 15.523 0 10C0 7.864 0.67 5.884 1.81 4.26001L5 10H2C1.99987 11.5684 2.46075 13.1022 3.32534 14.4107C4.18992 15.7193 5.42007 16.7448 6.86282 17.3599C8.30557 17.9749 9.89729 18.1523 11.44 17.87C12.9828 17.5877 14.4085 16.8581 15.54 15.772L16.537 17.567Z",fill:"#ECF1F0"}})])]),r("defs",[r("clipPath",{attrs:{id:"clip0_1541_3402"}},[r("rect",{attrs:{width:"20",height:"20",fill:"white"}})]),r("clipPath",{attrs:{id:"clip1_1541_3402"}},[r("rect",{attrs:{width:"20",height:"20",fill:"white"}})])])]))}}},388:function(t,e,r){"use strict";r(376)},389:function(t,e,r){var o=r(53)(!1);o.push([t.i,".password__buttons[data-v-5b622524]{position:absolute;right:15px;top:15px;display:flex;align-items:center}.password__buttons .password__button[data-v-5b622524]{cursor:pointer}.password__buttons .password__button[data-v-5b622524]:first-child{margin-right:15px}.password-field .note-popup__input-label[data-v-5b622524]{display:flex;justify-content:space-between;align-items:center}.password-field__quality[data-v-5b622524]{display:flex;align-items:center}.password-field__quality-visual[data-v-5b622524]{display:flex;align-items:center;margin:8px -5px 0}.password-field__quality-visual div[data-v-5b622524]{width:calc(100% / 5 - 10px);margin:0 5px;height:5px;background:rgba(255,255,255,0.1);border-radius:50px;transition:var(--transition)}.password-field__quality-visual div.active[data-v-5b622524]{background:var(--base-color)}\n",""]),t.exports=o}}]);