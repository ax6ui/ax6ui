webpackJsonp([7],{29:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),o=i(a),r=n(1),u=i(r),l=n(58),s=i(l);n(59);var c={moduleRun:function(e){var t=new s.default({iconWidth:20,acceleratorWidth:100,itemClickAndClose:!1,icons:{arrow:'<i class="tiny material-icons">chevron_right</i>'},columnKeys:{label:"name",items:"chidren"},items:[{icon:'<i class="tiny material-icons">class</i>',name:"Menu Parent 0",chidren:[{check:{type:"checkbox",name:"A",value:"0",checked:!1},name:"Menu Z",data:{},role:"",accelerator:"CmdOrCtrl+Z"},{check:{type:"checkbox",name:"A",value:"1",checked:!0},name:"Menu A",data:{},role:""}],filterType:"A"},{divide:!0,filterType:"A"},{icon:'<i class="tiny material-icons">class</i>',name:"Menu Parent 1",chidren:[{name:"Menu Z",data:{},role:"",chidren:[{name:"Menu Z",data:{},role:""},{name:"Menu A",data:{},role:""}]},{name:"Menu A",data:{},role:""}],filterType:"A"},{check:{type:"radio",name:"radioName",value:"1",checked:!1},icon:'<i class="tiny material-icons">class</i>',name:"Menu Parent 2"},{check:{type:"radio",name:"radioName",value:"2",checked:!1},name:"Menu Parent 3"},{check:{type:"radio",name:"radioName",value:"3",checked:!1},name:"Menu Parent 4"},{divide:!0},{html:function(){return'<div style="text-align: center;"><button class="btn btn-primary" data-menu-btn="OK">OK</button> <button class="btn btn-danger" data-menu-btn="CANCEL">CANCEL</button></div>'}}]});t.onStateChanged=function(){this.state},t.onClick=function(){},t.onLoad=function(){if(!this.element)return this;(0,o.default)(this.element).on("click","[data-menu-btn]",function(){"OK"==this.getAttribute("data-menu-btn")&&console.log(t.getCheckValue()),t.close()})},(0,o.default)(document.body).on("contextmenu",function(e){t.popup(e,{filter:function(){return!0}}),u.default.stopEvent(e.originalEvent)}),new s.default({direction:"top",offset:{left:0,top:1},position:"absolute",icons:{arrow:'<i class="tiny material-icons">chevron_right</i>'},onStateChanged:function(){console.log(this)},onClick:function(){console.log(this)},columnKeys:{label:"name",items:"chidren"},items:[{icon:'<i class="tiny material-icons">class</i>',name:"Menu Parent 0",chidren:[]},{icon:'<i class="tiny material-icons">cloud_queue</i>',name:"Menu Parent 1",chidren:[{name:"Menu Z",data:{},role:"",chidren:[{name:"Menu Z",data:{},role:""},{name:"Menu A",data:{},role:""}]},{name:"Menu A",data:{},role:""}]}]}).attach((0,o.default)("#attachedMenu-target"))},moduleDestroy:function(e){e.off("click")}};t.default={html:'\n<div id="attachedMenu-target"\n     style="width:100%;height:36px;background: #cccccc;border-bottom:1px solid #000;padding: 0px 20px;"></div>\n\n<div style="background: #eee;height: 1000px;"></div>\n',fn:c}},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a={};!function(e,t){!function(e){function t(e){return"function"==typeof e}function n(e){return x(e)?"array":void 0===e?"undefined":i(e)}function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"===(void 0===e?"undefined":i(e))&&t in e}function r(e,t){return b.call(e,t)}function u(e){return!r(g,e)}function l(e){return String(e).replace(/[&<>"'\/]/g,function(e){return y[e]})}function s(t,n){function i(e){if("string"==typeof e&&(e=e.split(w,2)),!x(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(a(e[0])+"\\s*"),r=new RegExp("\\s*"+a(e[1])),l=new RegExp("\\s*"+a("}"+e[1]))}if(!t)return[];var o,r,l,s=[],h=[],f=[],p=!1,b=!1;i(n||e.tags);for(var g,y,A,M,E,K,T=new m(t);!T.eos();){if(g=T.pos,A=T.scanUntil(o))for(var P=0,S=A.length;P<S;++P)M=A.charAt(P),u(M)?f.push(h.length):b=!0,h.push(["text",M,g,g+1]),g+=1,"\n"===M&&function(){if(p&&!b)for(;f.length;)delete h[f.pop()];else f=[];p=!1,b=!1}();if(!T.scan(o))break;if(p=!0,y=T.scan(z)||"name",T.scan(v),"="===y?(A=T.scanUntil(k),T.scan(k),T.scanUntil(r)):"{"===y?(A=T.scanUntil(l),T.scan(C),T.scanUntil(r),y="&"):A=T.scanUntil(r),!T.scan(r))throw new Error("Unclosed tag at "+T.pos);if(E=[y,A,g,T.pos],h.push(E),"#"===y||"^"===y)s.push(E);else if("/"===y){if(!(K=s.pop()))throw new Error('Unopened section "'+A+'" at '+g);if(K[1]!==A)throw new Error('Unclosed section "'+K[1]+'" at '+g)}else"name"===y||"{"===y||"&"===y?b=!0:"="===y&&i(A)}if(K=s.pop())throw new Error('Unclosed section "'+K[1]+'" at '+T.pos);return d(c(h))}function c(e){for(var t,n,i=[],a=0,o=e.length;a<o;++a)(t=e[a])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(i.push(t),n=t));return i}function d(e){for(var t,n,i=[],a=i,o=[],r=0,u=e.length;r<u;++r)switch(t=e[r],t[0]){case"#":case"^":a.push(t),o.push(t),a=t[4]=[];break;case"/":n=o.pop(),n[5]=t[2],a=o.length>0?o[o.length-1][4]:i;break;default:a.push(t)}return i}function m(e){this.string=e,this.tail=e,this.pos=0}function h(e,t){this.view=e,this.cache={".":this.view,"@each":function(){var e=[];for(var t in this)e.push({"@key":t,"@value":this[t]});return e}},this.parent=t}function f(){this.cache={}}var p=Object.prototype.toString,x=Array.isArray||function(e){return"[object Array]"===p.call(e)},b=RegExp.prototype.test,g=/\S/,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},v=/\s*/,w=/\s+/,k=/\s*=/,C=/\s*\}/,z=/#|\^|\/|>|\{|&|=|!/;m.prototype.eos=function(){return""===this.tail},m.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},m.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},h.prototype.push=function(e){return new h(e,this)},h.prototype.lookup=function(e){var n,i=this.cache;if(i.hasOwnProperty(e))n=i[e];else{for(var a,r,u=this,l=!1;u;){if(e.indexOf(".")>0)for(n=u.view,a=e.split("."),r=0;null!=n&&r<a.length;)r===a.length-1&&(l=o(n,a[r])),n=n[a[r++]];else n=u.view[e],l=o(u.view,e);if(l)break;u=u.parent}i[e]=n}return t(n)&&(n=n.call(this.view)),n},f.prototype.clearCache=function(){this.cache={}},f.prototype.parse=function(e,t){var n=this.cache,i=n[e];return null==i&&(i=n[e]=s(e,t)),i},f.prototype.render=function(e,t,n){var i=this.parse(e),a=t instanceof h?t:new h(t);return this.renderTokens(i,a,n,e)},f.prototype.renderTokens=function(e,t,n,i){for(var a,o,r,u="",l=0,s=e.length;l<s;++l)r=void 0,a=e[l],o=a[0],"#"===o?r=this.renderSection(a,t,n,i):"^"===o?r=this.renderInverted(a,t,n,i):">"===o?r=this.renderPartial(a,t,n,i):"&"===o?r=this.unescapedValue(a,t):"name"===o?r=this.escapedValue(a,t):"text"===o&&(r=this.rawValue(a)),void 0!==r&&(u+=r);return u},f.prototype.renderSection=function(e,n,a,o){function r(e){return u.render(e,n,a)}var u=this,l="",s=n.lookup(e[1]);if(s){if(x(s))for(var c=0,d=s.length;c<d;++c)s[c]&&("object"===i(s[c])&&(s[c]["@i"]=c,s[c]["@first"]=0===c),l+=this.renderTokens(e[4],n.push(s[c]),a,o));else if("object"===(void 0===s?"undefined":i(s))||"string"==typeof s||"number"==typeof s)l+=this.renderTokens(e[4],n.push(s),a,o);else if(t(s)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");null!=(s=s.call(n.view,o.slice(e[3],e[5]),r))&&(l+=s)}else l+=this.renderTokens(e[4],n,a,o);return l}},f.prototype.renderInverted=function(e,t,n,i){var a=t.lookup(e[1]);if(!a||x(a)&&0===a.length)return this.renderTokens(e[4],t,n,i)},f.prototype.renderPartial=function(e,n,i){if(i){var a=t(i)?i(e[1]):i[e[1]];return null!=a?this.renderTokens(this.parse(a),n,i,a):void 0}},f.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},f.prototype.escapedValue=function(t,n){var i=n.lookup(t[1]);if(null!=i)return e.escape(i)},f.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="2.1.3",e.tags=["{{","}}"];var A=new f;e.clearCache=function(){return A.clearCache()},e.parse=function(e,t){return A.parse(e,t)},e.render=function(e,t,i){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+n(e)+'" was given as the first argument for mustache#render(template, view, partials)');return A.render(e,t,i)},e.to_html=function(n,i,a,o){var r=e.render(n,i,a);if(!t(o))return r;o(r)},e.escape=l,e.Scanner=m,e.Context=h,e.Writer=f}(e.mustache={})}(a),t.default=a.mustache},58:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(2),s=i(l),c=n(4),d=i(c),m=n(5),h=i(m),f=n(1),p=i(f),x=n(35),b=i(x),g={menu:function(e){return'\n        <div data-ax6ui-menu="" class="{{theme}}" {{#width}}style="width:{{width}}px;"{{/width}}>\n            <div class="ax-menu-body">\n                {{#'+e.items+'}}\n                    {{^@isMenu}}\n                        {{#divide}}\n                        <div class="ax-menu-item-divide" data-menu-item-index="{{@i}}"></div>\n                        {{/divide}}\n                        {{#html}}\n                        <div class="ax-menu-item-html" data-menu-item-index="{{@i}}">{{{@html}}}</div>\n                        {{/html}}\n                    {{/@isMenu}}\n                    {{#@isMenu}}\n                    <div class="ax-menu-item" data-menu-item-depth="{{@depth}}" data-menu-item-index="{{@i}}" data-menu-item-path="{{@path}}.{{@i}}">\n                        <span class="ax-menu-item-cell ax-menu-item-checkbox">\n                            {{#check}}\n                            <span class="item-checkbox-wrap useCheckBox" {{#checked}}data-item-checked="true"{{/checked}}></span>\n                            {{/check}}\n                            {{^check}}\n                            <span class="item-checkbox-wrap"></span>\n                            {{/check}}\n                        </span>\n                        {{#icon}}\n                        <span class="ax-menu-item-cell ax-menu-item-icon" style="width:{{cfg.iconWidth}}px;">{{{.}}}</span>\n                        {{/icon}}\n                        <span class="ax-menu-item-cell ax-menu-item-label">{{{'+e.label+'}}}</span>\n                        {{#accelerator}}\n                        <span class="ax-menu-item-cell ax-menu-item-accelerator" style="width:{{cfg.acceleratorWidth}}px;"><span class="item-wrap">{{.}}</span></span>\n                        {{/accelerator}}\n                        {{#@hasChild}}\n                        <span class="ax-menu-item-cell ax-menu-item-handle">{{{cfg.icons.arrow}}}</span>\n                        {{/@hasChild}}\n                    </div>\n                    {{/@isMenu}}\n\n                {{/'+e.items+'}}\n            </div>\n            <div class="ax-menu-arrow"></div>\n        </div>\n        '},menubar:function(e){return'\n        <div data-ax6ui-menubar="" class="{{theme}}">\n            <div class="ax-menu-body">\n                {{#'+e.items+'}}\n                    {{^@isMenu}}\n                        {{#divide}}\n                        <div class="ax-menu-item-divide" data-menu-item-index="{{@i}}"></div>\n                        {{/divide}}\n                        {{#html}}\n                        <div class="ax-menu-item-html" data-menu-item-index="{{@i}}">{{{@html}}}</div>\n                        {{/html}}\n                    {{/@isMenu}}\n                    {{#@isMenu}}\n                    <div class="ax-menu-item" data-menu-item-index="{{@i}}">\n                        {{#icon}}\n                        <span class="ax-menu-item-cell ax-menu-item-icon" style="width:{{cfg.iconWidth}}px;">{{{.}}}</span>\n                        {{/icon}}\n                        <span class="ax-menu-item-cell ax-menu-item-label">{{{'+e.label+"}}}</span>\n                    </div>\n                    {{/@isMenu}}\n                {{/"+e.items+"}}\n            </div>\n        </div>\n        "}},y=function(e,t){e?((0,s.default)(document.body).off("click.ax5menu-"+this.instanceId).on("click.ax5menu-"+this.instanceId,C.bind(this,t)),(0,s.default)(window).off("keydown.ax5menu-"+this.instanceId).on("keydown.ax5menu-"+this.instanceId,function(e){e.which==h.default.eventKeys.ESC&&self.close()}).off("resize.ax5menu-"+this.instanceId).on("resize.ax5menu-"+this.instanceId,function(e){self.close()})):((0,s.default)(document.body).off("click.ax5menu-"+this.instanceId),(0,s.default)(window).off("keydown.ax5menu-"+this.instanceId),(0,s.default)(window).off("resize.ax5menu-"+this.instanceId))},v=function(e,t){return e&&e.onStateChanged?e.onStateChanged.call(t,t):this.onStateChanged&&this.onStateChanged.call(t,t),this.state=t.state,e=null,t=null,!0},w=function(e){return this.onLoad&&this.onLoad.call(e,e),e=null,!0},k=function e(t,n,i,a){var o=this,r=this.config,u=t,l=void 0,c=void 0;return u.theme=t.theme||r.theme,u.cfg={icons:s.default.extend({},r.icons),iconWidth:t.iconWidth||r.iconWidth,acceleratorWidth:t.acceleratorWidth||r.acceleratorWidth},n.forEach(function(e){e.html||e.divide?(e["@isMenu"]=!1,e.html&&(e["@html"]=e.html.call({item:e,config:r,opt:t}))):e["@isMenu"]=!0}),u[r.columnKeys.items]=n,u["@depth"]=i,u["@path"]=a||"root",u["@hasChild"]=function(){return this[r.columnKeys.items]&&this[r.columnKeys.items].length>0},l=(0,s.default)(b.default.render(g.menu.call(this,r.columnKeys),u)),(0,s.default)(document.body).append(l),c=this.queue.splice(i),c.forEach(function(e){e.$target.remove()}),this.queue.push({$target:l,data:s.default.extend({},u)}),l.on("mouseover","[data-menu-item-index]",function(){var n=this.getAttribute("data-menu-item-depth"),i=this.getAttribute("data-menu-item-index"),a=this.getAttribute("data-menu-item-path"),u=void 0,l=void 0,c=void 0,d=void 0,m=void 0,h=void 0;null!=n&&void 0!==n&&(m=o.queue[n].data[r.columnKeys.items][i][r.columnKeys.items],h=o.queue[n].$target,h.find("[data-menu-item-index]").removeClass("hover"),(0,s.default)(this).addClass("hover"),h.attr("data-selected-menu-item-index")!=i&&(h.attr("data-selected-menu-item-index",i),m&&m.length>0?(u=(0,s.default)(this),l=u.offset(),c="fixed"==r.position?(0,s.default)(document).scrollTop():0,d={"@parent":{left:l.left,top:l.top,width:u.outerWidth(),height:u.outerHeight()},left:l.left+u.outerWidth()-r.menuBodyPadding,top:l.top-r.menuBodyPadding-1-c},d=s.default.extend(!0,t,d),e.call(o,d,m,Number(n)+1,a)):o.queue.splice(Number(n)+1).forEach(function(e){e.$target.remove()}))),n=null,i=null,a=null,u=null,l=null,c=null,d=null,m=null,h=null}),l.on("mouseout","[data-menu-item-index]",function(){var e=this.getAttribute("data-menu-item-depth"),t=this.getAttribute("data-menu-item-index"),n=this.getAttribute("data-menu-item-path"),i=void 0;n&&(i=o.queue[e].data[r.columnKeys.items][t][r.columnKeys.items]),i&&i.length>0||(0,s.default)(this).removeClass("hover")}),0==i&&(u.direction&&l.addClass("direction-"+u.direction),v.call(this,null,{self:this,items:n,parent:function(e){if(!e)return!1;try{return Function("","return this.config.items["+e.substring(5).replace(/\./g,"].items[")+"];").call(o)}catch(e){}}(u["@path"]),state:"popup"})),z.call(this,l,u),w.call(this,{self:this,items:n,element:l.get(0)}),u=null,l=null,c=null,t=null,n=null,i=null,a=null,this},C=function(e,t){var n=this,i=this.config,a=void 0,o=void 0;if(a=p.default.findParentNode(t.target,function(e){if(e.getAttribute("data-menu-item-index"))return!0})){if(void 0===e&&(e={}),!(o=function(t){if(!t)return!1;try{return Function("","return this["+t.substring(5).replace(/\./g,"]."+i.columnKeys.items+"[")+"];").call(e.items||i.items)}catch(e){console.log(h.default.getError("ax5menu","501","menuItemClick"))}finally{o=null}}(a.getAttribute("data-menu-item-path"))))return this;o.check&&(function(e){var t={checkbox:function(e){this.checked=!e},radio:function(t){var n=this.name;e.forEach(function(e){e.check&&"radio"===e.check.type&&e.check.name==n&&(e.check.checked=!1)}),this.checked=!t}};t[this.type]&&t[this.type].call(this,this.checked),t=null}.call(o.check,i.items),i.itemClickAndClose||n.queue.forEach(function(e){e.$target.find("[data-menu-item-index]").each(function(){var t=e.data[i.columnKeys.items][this.getAttribute("data-menu-item-index")];t.check&&(0,s.default)(this).find(".item-checkbox-wrap").attr("data-item-checked",t.check.checked),t=null})})),n.onClick&&n.onClick.call(o,o,e.param)&&n.close(),o[i.columnKeys.items]&&0!=o[i.columnKeys.items].length||!i.itemClickAndClose||n.close()}else n.close();return a=null,o=null,this},z=function(e,t){var n=this.config,i=(0,s.default)(window),a=(0,s.default)(document),o="fixed"==n.position?i.height():a.height(),r=i.width(),u=e.outerHeight(),l=e.outerWidth(),c=t.left,d=t.top,m=n.position||"fixed";return c+l>r&&(c=t["@parent"]?t["@parent"].left-l+n.menuBodyPadding:r-l),d+u>o&&(d=o-u),e.css({left:c,top:d,position:m}),e=null,t=null,i=null,a=null,o=null,r=null,u=null,l=null,c=null,d=null,m=null,this},A=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.config={theme:"default",iconWidth:22,acceleratorWidth:100,menuBodyPadding:5,offset:{left:0,top:0},position:"fixed",animateTime:250,items:[],itemClickAndClose:!0,columnKeys:{label:"label",items:"items"}},s.default.extend(!0,n.config,e),n.openTimer=null,n.closeTimer=null,n.queue=[],n.menuBar={},n.state=void 0,void 0!==e&&n.init(),n}return r(t,e),u(t,[{key:"init",value:function(){this.onStateChanged=this.config.onStateChanged,delete this.config.onStateChanged,this.onClick=this.config.onClick,delete this.config.onClick,this.onLoad=this.config.onLoad,delete this.config.onLoad,v.call(this,null,{self:this,state:"init"}),this.initOnce()}},{key:"initOnce",value:function(){if(this.initialized)return this;this.initialized=!0}},{key:"popup",value:function(e,t){var n=this.config,i={event:function(e,t){e={left:e.clientX,top:"fixed"==n.position?e.clientY:e.pageY,width:n.width,theme:n.theme},e.left-=5,e.top-=5,n.offset&&(n.offset.left&&(e.left+=n.offset.left),n.offset.top&&(e.top+=n.offset.top)),t=s.default.extend(!0,e,t);try{return t}finally{e=null}},object:function(e,t){e={left:e.left,top:e.top,width:e.width||n.width,theme:e.theme||n.theme},n.offset&&(n.offset.left&&(e.left+=n.offset.left),n.offset.top&&(e.top+=n.offset.top)),t=s.default.extend(!0,e,t);try{return t}finally{e=null}}};if(!e)return this;t=i[void 0===e.clientX?"object":"event"].call(this,e,t),function(e){e&&(n.theme=e)}(t.theme);var a=[].concat(n.items),o=void 0;return t.items=a,t.filter&&(o=function(e){var n=[];return e.forEach(function(e){e.items&&e.items.length>0&&(e.items=o(e.items)),t.filter.call(e)&&n.push(e)}),n},t.items=a=o(a)),a.length&&(y.call(this,!1),k.call(this,t,a,0),this.popupEventAttachTimer&&clearTimeout(this.popupEventAttachTimer),this.popupEventAttachTimer=setTimeout(function(){y.call(this,!0,t)}.bind(this),500)),e=null,this}},{key:"attach",value:function(e,t){var n=this,i=this.config,a={object:function(e,t){e={left:e.left,top:e.top,width:e.width||i.width,theme:e.theme||i.theme,direction:e.direction||i.direction},t=s.default.extend(!0,t,e);try{return t}finally{e=null,t=null}}},o=function(e,t,o){var r=(0,s.default)(e),u=r.offset(),l=r.outerHeight(),c=Number(e.getAttribute("data-menu-item-index")),d="fixed"==i.position?(0,s.default)(document).scrollTop():0;if(i.items&&i.items[c][i.columnKeys.items]&&i.items[c][i.columnKeys.items].length){if(n.menuBar.openedIndex==c)return"click"==o&&n.close(),!1;n.menuBar.target.find("[data-menu-item-index]").removeClass("hover"),n.menuBar.opened=!0,n.menuBar.openedIndex=c,r.attr("data-menu-item-opened","true"),r.addClass("hover"),i.offset&&(i.offset.left&&(u.left+=i.offset.left),i.offset.top&&(u.top+=i.offset.top)),t=a.object.call(this,{left:u.left,top:u.top+l-d},t),k.call(n,t,i.items[c][i.columnKeys.items],0,"root."+e.getAttribute("data-menu-item-index")),y.call(n,!0,{})}e=null,t=null,r=null,u=null,l=null,c=null,d=null},r=function(e,t,a){var o=(0,s.default)(e),r=(o.offset(),o.outerHeight(),Number(e.getAttribute("data-menu-item-index")));"fixed"==i.position&&(0,s.default)(document).scrollTop(),!i.items||i.items[r][i.columnKeys.items]&&0!=i.items[r][i.columnKeys.items].length||n.onClick&&n.onClick.call(i.items[r],i.items[r])},u={},l=i.items,c=void 0;return void 0===t&&(t={}),u.theme=t.theme||i.theme,u.cfg={icons:s.default.extend({},i.icons),iconWidth:t.iconWidth||i.iconWidth,acceleratorWidth:t.acceleratorWidth||i.acceleratorWidth},l.forEach(function(e){e.html||e.divide?(e["@isMenu"]=!1,e.html&&(e["@html"]=e.html.call({item:e,config:i,opt:t}))):e["@isMenu"]=!0}),u[i.columnKeys.items]=l,c=(0,s.default)(b.default.render(g.menubar.call(this,i.columnKeys),u)),n.menuBar={target:(0,s.default)(e),opened:!1},n.menuBar.target.html(c),n.menuBar.target.on("click",function(e){if(!e)return this;var n=p.default.findParentNode(e.target,function(e){if(e.getAttribute("data-menu-item-index"))return!0});n&&(r(n),o(n,t,"click")),n=null}),n.menuBar.target.on("mouseover",function(e){if(!n.menuBar.opened)return!1;var i=p.default.findParentNode(e.target,function(e){if(e.getAttribute("data-menu-item-index"))return!0});i&&o(i,t,"mouseover"),i=null}),e=null,t=null,u=null,l=null,c=null,this}},{key:"close",value:function(){var e=this;return this.config,e.menuBar&&e.menuBar.target&&(e.menuBar.target.find("[data-menu-item-index]").removeClass("hover"),e.menuBar.opened=!1,e.menuBar.openedIndex=null),y.call(this,!1),this.queue.forEach(function(e){e.$target.remove()}),this.queue=[],v.call(this,null,{self:this,state:"close"}),this}},{key:"getCheckValue",value:function(){var e={};!function t(n){for(var i=n.length;i--;)n[i].check&&n[i].check.checked&&(e[n[i].check.name]?(p.default.isString(e[n[i].check.name])&&(e[n[i].check.name]=[e[n[i].check.name]]),e[n[i].check.name].push(n[i].check.value)):e[n[i].check.name]=n[i].check.value),n[i].items&&n[i].items.length>0&&t(n[i].items)}(this.config.items);try{return e}finally{e=null}}}]),t}(d.default);t.default=A},59:function(e,t,n){var i=n(60);"string"==typeof i&&(i=[[e.i,i,""]]);var a={};a.transform=void 0,n(3)(i,a),i.locals&&(e.exports=i.locals)},60:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,'@-webkit-keyframes ax-menu{0%{opacity:0}1%{opacity:0}to{opacity:.95}}@-moz-keyframes ax-menu{0%{opacity:0}1%{opacity:0}to{opacity:.95}}@keyframes ax-menu{0%{opacity:0}1%{opacity:0}to{opacity:.95}}@-webkit-keyframes ax-menu-destroy{0%{-webkit-transform:scale(1);opacity:1}to{-webkit-transform:scale(.5);opacity:0}}@-moz-keyframes ax-menu-destroy{0%{-moz-transform:scale(1);opacity:1}to{-moz-transform:scale(.5);opacity:0}}@keyframes ax-menu-destroy{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(.5);-moz-transform:scale(.5);-ms-transform:scale(.5);-o-transform:scale(.5);transform:scale(.5);opacity:0}}[data-ax6ui-menu]{z-index:2000;position:fixed;left:0;top:0;.width:100px;opacity:.95;-webkit-perspective:1000px;-moz-perspective:1000px;perspective:1000px;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;-o-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:ax-menu .3s cubic-bezier(.175,.885,.32,1.275);-moz-animation:ax-menu .3s cubic-bezier(.175,.885,.32,1.275);animation:ax-menu .3s cubic-bezier(.175,.885,.32,1.275);-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0);-webkit-transform-origin:center top;-moz-transform-origin:center top;-ms-transform-origin:center top;-o-transform-origin:center top;transform-origin:center top;background-color:#eee;background-image:-webkit-linear-gradient(bottom,#eee);background-image:linear-gradient(0deg,#eee);border:1px solid;border-color:#aaa;border-radius:5px;box-shadow:0 0 5px 0 rgba(0,0,0,.2);color:#333}[data-ax6ui-menu],[data-ax6ui-menu] *,[data-ax6ui-menu] :after,[data-ax6ui-menu] :before{box-sizing:border-box}[data-ax6ui-menu] .ax-menu-heading{font-weight:600;padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:4px;border-top-right-radius:4px;color:#333;background-color:#f5f5f5;background-image:-webkit-linear-gradient(bottom,#f5f5f5);background-image:linear-gradient(0deg,#f5f5f5)}[data-ax6ui-menu] .ax-menu-heading .badge{font-size:.8em;color:#f5f5f5;background-color:#333;background-image:-webkit-linear-gradient(bottom,#333);background-image:linear-gradient(0deg,#333)}[data-ax6ui-menu] .ax-menu-body{padding:5px 0;text-align:center;position:relative;overflow:hidden}[data-ax6ui-menu] .ax-menu-body .ax-menu-item{padding:4px 0;text-align:left;background:#eee;color:#444;cursor:pointer;font-size:13px;display:table;position:relative;border-collapse:separate;box-sizing:border-box;overflow:hidden;width:100%;height:18px}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell{box-sizing:border-box;display:table-cell;vertical-align:middle;white-space:nowrap;font-size:13px;line-height:18px;padding:0;user-select:none}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox{overflow:hidden;width:18px;text-align:center}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap{position:relative;display:block;width:18px;height:18px}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap.useCheckBox:after{content:"";width:10px;height:5px;position:absolute;top:4px;left:4px;border:2px solid #444;border-top:none;border-right:none;background:transparent;opacity:.1;-webkit-transform:rotate(-50deg);-moz-transform:rotate(-50deg);-ms-transform:rotate(-50deg);-o-transform:rotate(-50deg);transform:rotate(-50deg)}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap.useCheckBox[data-item-checked=true]:after{opacity:1}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-icon{text-align:left}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-label{padding-right:10px}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-accelerator{text-align:right;padding:0 7px 0 0}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-accelerator .item-wrap{width:100%;vertical-align:middle;display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;display:block}[data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-handle{overflow:hidden;width:14px;text-align:center}[data-ax6ui-menu] .ax-menu-body .ax-menu-item.hover,[data-ax6ui-menu] .ax-menu-body .ax-menu-item:hover{background:#999;color:#fff}[data-ax6ui-menu] .ax-menu-body .ax-menu-item.hover .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap:after,[data-ax6ui-menu] .ax-menu-body .ax-menu-item:hover .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap:after{border-color:#fff}[data-ax6ui-menu] .ax-menu-body .ax-menu-item-divide{border-top:1px solid;border-color:#aaa;margin:5px 0}[data-ax6ui-menu] .ax-menu-body .ax-menu-item-html{padding:0 5px;text-align:left}[data-ax6ui-menu] .ax-menu-body .ax-menu-buttons button:not(:last-child){margin-right:3px}[data-ax6ui-menu].direction-top{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:5px;border-bottom-right-radius:5px}[data-ax6ui-menu].direction-top.with-arrow .ax-menu-arrow{position:absolute;width:0;height:0;left:50%;top:0}[data-ax6ui-menu].direction-top.with-arrow .ax-menu-arrow:before{content:" ";position:absolute;width:0;height:0;left:-10px;top:-20px;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:20px solid #aaa}[data-ax6ui-menu].direction-top.with-arrow .ax-menu-arrow:after{content:" ";position:absolute;width:0;height:0;left:-10px;top:-18px;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:20px solid #eee}[data-ax6ui-menu].direction-right{border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-bottom-left-radius:5px}[data-ax6ui-menu].direction-right.with-arrow .ax-menu-arrow{position:absolute;width:0;height:0;right:0;top:50%}[data-ax6ui-menu].direction-right.with-arrow .ax-menu-arrow:before{content:" ";position:absolute;width:0;height:0;right:-20px;top:-10px;border-top:10px solid transparent;border-bottom:10px solid transparent;border-left:20px solid #aaa}[data-ax6ui-menu].direction-right.with-arrow .ax-menu-arrow:after{content:" ";position:absolute;width:0;height:0;right:-18px;top:-10px;border-top:10px solid transparent;border-bottom:10px solid transparent;border-left:20px solid #eee}[data-ax6ui-menu].direction-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px}[data-ax6ui-menu].direction-bottom.with-arrow .ax-menu-arrow{position:absolute;width:0;height:0;left:50%;bottom:0}[data-ax6ui-menu].direction-bottom.with-arrow .ax-menu-arrow:before{content:" ";position:absolute;width:0;height:0;left:-10px;bottom:-20px;border-left:10px solid transparent;border-right:10px solid transparent;border-top:20px solid #aaa}[data-ax6ui-menu].direction-bottom.with-arrow .ax-menu-arrow:after{content:" ";position:absolute;width:0;height:0;left:-10px;bottom:-18px;border-left:10px solid transparent;border-right:10px solid transparent;border-top:20px solid #eee}[data-ax6ui-menu].direction-left{border-top-right-radius:0;border-bottom-right-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}[data-ax6ui-menu].direction-left.with-arrow .ax-menu-arrow{position:absolute;width:0;height:0;left:0;top:50%}[data-ax6ui-menu].direction-left.with-arrow .ax-menu-arrow:before{content:" ";position:absolute;width:0;height:0;left:-20px;top:-10px;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:20px solid #aaa}[data-ax6ui-menu].direction-left.with-arrow .ax-menu-arrow:after{content:" ";position:absolute;width:0;height:0;left:-18px;top:-10px;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:20px solid #eee}[data-ax6ui-menu].destroy{-webkit-animation:ax-menu-destroy .2s cubic-bezier(.6,-.28,.735,.045) forwards;-moz-animation:ax-menu-destroy .2s cubic-bezier(.6,-.28,.735,.045) forwards;animation:ax-menu-destroy .2s cubic-bezier(.6,-.28,.735,.045) forwards}[data-ax6ui-menu].direction-top{-webkit-transform-origin:center top;-moz-transform-origin:center top;-ms-transform-origin:center top;-o-transform-origin:center top;transform-origin:center top}[data-ax6ui-menu].direction-right{-webkit-transform-origin:right center;-moz-transform-origin:right center;-ms-transform-origin:right center;-o-transform-origin:right center;transform-origin:right center}[data-ax6ui-menu].direction-bottom{-webkit-transform-origin:center bottom;-moz-transform-origin:center bottom;-ms-transform-origin:center bottom;-o-transform-origin:center bottom;transform-origin:center bottom}[data-ax6ui-menu].direction-left{-webkit-transform-origin:left center;-moz-transform-origin:left center;-ms-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center}[data-ax6ui-menubar]{box-sizing:border-box;height:100%;position:relative}[data-ax6ui-menubar] .ax-menu-body{display:table;height:100%;border-collapse:separate;box-sizing:border-box}[data-ax6ui-menubar] .ax-menu-body .ax-menu-item{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;box-sizing:border-box;padding:0 10px;cursor:pointer;font-size:13px}[data-ax6ui-menubar] .ax-menu-body .ax-menu-item .ax-menu-item-cell{white-space:nowrap;user-select:none}[data-ax6ui-menubar] .ax-menu-body .ax-menu-item{color:#444}[data-ax6ui-menubar] .ax-menu-body .ax-menu-item.hover,[data-ax6ui-menubar] .ax-menu-body .ax-menu-item:hover{background:#999;color:#fff}',""])}});