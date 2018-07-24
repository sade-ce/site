/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,l){function s(e){try{a(i.next(e))}catch(e){l(e)}}function r(e){try{a(i.throw(e))}catch(e){l(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,r)}a((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,i,o,l,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function r(l){return function(r){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=i[2&l[0]?"return":l[0]?"throw":"next"])&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[0,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return s.label++,{value:l[1],done:!1};case 5:s.label++,i=l[1],l=[0];continue;case 7:l=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){s=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){s.label=l[1];break}if(6===l[0]&&s.label<o[1]){s.label=o[1],o=l;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(l);break}o[2]&&s.ops.pop(),s.trys.pop();continue}l=t.call(e,s)}catch(e){l=[6,e],i=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,r])}}};Ionic.loadBundle("rzqpddw9",["exports"],function(e){var t=window.Ionic.h,n=function(){function e(){this.childOpts=[],this.selectId="ion-sel-"+i++,this.isExpanded=!1,this.keyFocus=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.multiple=!1,this.interface="alert",this.interfaceOptions={}}return e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.valueChanged=function(){var e=this;if(void 0===this.value)this.childOpts.filter(function(e){return e.selected}).forEach(function(e){e.selected=!1}),this.text="";else{var t=!1,n=[];this.childOpts.forEach(function(i){Array.isArray(e.value)&&e.value.includes(i.value)||i.value===e.value?(i.selected||!e.multiple&&t?!e.multiple&&t&&i.selected&&(i.selected=!1):i.selected=!0,t=!0):i.selected&&(i.selected=!1),i.selected&&n.push(i.textContent||"")}),this.text=n.join(", ")}this.ionChange.emit({value:this.value,text:this.text}),this.emitStyle()},e.prototype.optLoad=function(e){var t=e.target;this.childOpts=Array.from(this.el.querySelectorAll("ion-select-option")),null!=this.value&&Array.isArray(this.value)&&this.value.includes(t.value)||t.value===this.value?t.selected=!0:Array.isArray(this.value)&&this.multiple&&t.selected?this.value.push(t.value):void 0===this.value&&t.selected?this.value=t.value:t.selected&&(t.selected=!1)},e.prototype.optUnload=function(e){var t=this.childOpts.indexOf(e.target);t>-1&&this.childOpts.splice(t,1)},e.prototype.onSelect=function(e){var t=this;this.childOpts.forEach(function(n){n===e.target?t.value=n.value:n.selected=!1})},e.prototype.componentWillLoad=function(){this.value||(this.value=this.multiple?[]:void 0),this.name=this.name||this.selectId},e.prototype.componentDidLoad=function(){var e=this,t=this.getLabel();if(t&&(this.labelId=t.id=this.name+"-lbl"),this.multiple){var n=this.childOpts.filter(function(e){return e.selected});this.value.length=0,n.forEach(function(t){e.value.push(t.value)}),this.text=n.map(function(e){return e.textContent}).join(", ")}else(n=this.childOpts.find(function(e){return e.selected}))&&(this.value=n.value,this.text=n.textContent||"");this.emitStyle()},e.prototype.getLabel=function(){var e=this.el.closest("ion-item");return e?e.querySelector("ion-label"):null},e.prototype.open=function(e){var t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn('Select interface cannot be "'+t+'" with a multi-value select. Using the "alert" interface instead.'),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()},e.prototype.openPopover=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,i,o,l=this;return __generator(this,function(s){switch(s.label){case 0:return t=Object.assign({},this.interfaceOptions),n=Object.assign(t,{component:"ion-select-popover",componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:this.value,options:this.childOpts.map(function(e){return{text:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled,handler:function(){l.value=e.value,l.close()}}})},cssClass:"select-popover"+(t.cssClass?" "+t.cssClass:""),ev:e}),o=this,[4,this.popoverCtrl.create(n)];case 1:return[4,(i=o.overlay=s.sent()).present()];case 2:return s.sent(),this.isExpanded=!0,[2,i]}})})},e.prototype.openActionSheet=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,i,o,l=this;return __generator(this,function(s){switch(s.label){case 0:return e=Object.assign({},this.interfaceOptions),(t=this.childOpts.map(function(e){return{role:e.selected?"selected":"",text:e.textContent,handler:function(){l.value=e.value}}})).push({text:this.cancelText,role:"cancel",handler:function(){l.ionCancel.emit()}}),n=Object.assign(e,{buttons:t,cssClass:"select-action-sheet"+(e.cssClass?" "+e.cssClass:"")}),o=this,[4,this.actionSheetCtrl.create(n)];case 1:return[4,(i=o.overlay=s.sent()).present()];case 2:return s.sent(),this.isExpanded=!0,[2,i]}})})},e.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,i,o,l,s=this;return __generator(this,function(r){switch(r.label){case 0:return e=Object.assign({},this.interfaceOptions),t=this.getLabel(),n=t?t.textContent:null,i=Object.assign(e,{header:e.header?e.header:n,inputs:this.childOpts.map(function(e){return{type:s.multiple?"checkbox":"radio",label:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled}}),buttons:[{text:this.cancelText,role:"cancel",handler:function(){s.ionCancel.emit()}},{text:this.okText,handler:function(e){s.value=e}}],cssClass:"select-alert "+(this.multiple?"multiple-select-alert":"single-select-alert")+(e.cssClass?" "+e.cssClass:"")}),l=this,[4,this.alertCtrl.create(i)];case 1:return[4,(o=l.overlay=r.sent()).present()];case 2:return r.sent(),this.isExpanded=!0,[2,o]}})})},e.prototype.close=function(){if(!this.overlay)return Promise.resolve();var e=this.overlay;return this.overlay=void 0,this.isExpanded=!1,e.dismiss()},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hasValue=function(){return Array.isArray(this.value)?this.value.length>0:null!==this.value&&void 0!==this.value&&""!==this.value},e.prototype.emitStyle=function(){var e=this;clearTimeout(this.styleTmr),this.styleTmr=setTimeout(function(){e.ionStyle.emit({select:!0,"select-disabled":e.disabled,"input-has-value":e.hasValue()})})},e.prototype.hostData=function(){return{class:{"select-disabled":this.disabled,"select-key":this.keyFocus}}},e.prototype.render=function(){var e=!1,n=this.selectedText||this.text;return!n&&this.placeholder&&(n=this.placeholder,e=!0),[t("div",{role:"textbox","aria-multiline":"false",class:{"select-text":!0,"select-placeholder":e}},n),t("div",{class:"select-icon",role:"presentation"},t("div",{class:"select-icon-inner"})),t("button",{type:"button",role:"combobox","aria-haspopup":"dialog","aria-expanded":this.isExpanded,"aria-labelledby":this.labelId,"aria-disabled":!!this.disabled&&"true",onClick:this.open.bind(this),onKeyUp:this.onKeyUp.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),class:"select-cover"},t("slot",null),"md"===this.mode&&t("ion-ripple-effect",{tapClick:!0})),t("input",{type:"hidden",name:this.name,value:function(e){if(null!=e)return"string"==typeof e?e:e.join(",")}(this.value)})]},Object.defineProperty(e,"is",{get:function(){return"ion-select"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"select"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{actionSheetCtrl:{connect:"ion-action-sheet-controller"},alertCtrl:{connect:"ion-alert-controller"},cancelText:{type:String,attr:"cancel-text"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},interface:{type:String,attr:"interface"},interfaceOptions:{type:"Any",attr:"interface-options"},isExpanded:{state:!0},keyFocus:{state:!0},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name",mutable:!0},okText:{type:String,attr:"ok-text"},placeholder:{type:String,attr:"placeholder"},popoverCtrl:{connect:"ion-popover-controller"},selectedText:{type:String,attr:"selected-text"},text:{state:!0},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionSelectOptionDidLoad",method:"optLoad"},{name:"ionSelectOptionDidUnload",method:"optUnload"},{name:"ionSelect",method:"onSelect"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-select{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden}.item .select{max-width:45%}.select-cover{left:0;top:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer}.select-text{overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-multiple-inputs ion-select{position:relative}.item-select-disabled ion-label,.select-disabled{opacity:.4;pointer-events:none}.select-popover ion-list{margin:-1px 0}.select-option{display:none}.select button:focus{outline:0}.select-key button{border:2px solid #5e9ed6}.item-label-floating .select,.item-label-stacked .select{max-width:100%}.select-md{padding:13px 8px 13px 16px;font-family:Roboto,\"Helvetica Neue\",sans-serif;color:var(--ion-text-md-color,var(--ion-text-color,#000))}.select-md .select-placeholder{color:var(--ion-text-md-color-step-600,var(--ion-text-color-step-600,#999))}.select-md .item-select ion-label{margin-left:0}.select-md .select-icon{position:relative;width:12px;height:19px}.select-md .select-icon .select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:var(--ion-text-md-color-step-600,var(--ion-text-color-step-600,#999));pointer-events:none}.item-label-floating .select-md,.item-label-stacked .select-md{padding-left:0;padding-top:8px;padding-bottom:8px}.select-popover-md .radio-icon{display:none}.select-popover-md .item-radio-checked{background-color:var(--ion-background-md-color-step-150,var(--ion-background-color-step-150,#d9d9d9))}.select-popover-md .item-radio-checked ion-label{color:initial}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),i=0,o=function(){function e(){this.inputId="ion-selopt-"+l++,this.disabled=!1,this.selected=!1}return e.prototype.componentWillLoad=function(){void 0===this.value&&(this.value=this.el.textContent||"")},e.prototype.componentDidLoad=function(){this.ionSelectOptionDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionSelectOptionDidUnload.emit()},e.prototype.hostData=function(){return{role:"option",id:this.inputId}},Object.defineProperty(e,"is",{get:function(){return"ion-select-option"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"select-option"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},selected:{type:Boolean,attr:"selected"},value:{type:String,attr:"value",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionSelectOptionDidLoad",method:"ionSelectOptionDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelectOptionDidUnload",method:"ionSelectOptionDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}(),l=0,s=function(){function e(){this.options=[]}return e.prototype.onSelect=function(e){var t=this.options.find(function(t){return t.value===e.target.value});t&&t.handler&&t.handler()},e.prototype.render=function(){return t("ion-list",{"no-lines":"md"===this.mode},this.header?t("ion-list-header",null,this.header):null,this.subHeader||this.message?t("ion-item",{"text-wrap":!0},t("ion-label",null,this.subHeader?t("h3",null,this.subHeader):null,this.message?t("p",null,this.message):null)):null,t("ion-radio-group",null,this.options.map(function(e){return t("ion-item",null,t("ion-label",null,e.text),t("ion-radio",{checked:e.checked,value:e.value,disabled:e.disabled}))})))},Object.defineProperty(e,"is",{get:function(){return"ion-select-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"select-popover"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{header:{type:String,attr:"header"},message:{type:String,attr:"message"},options:{type:"Any",attr:"options"},subHeader:{type:String,attr:"sub-header"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionSelect",method:"onSelect"}]},enumerable:!0,configurable:!0}),e}();e.IonSelect=n,e.IonSelectOption=o,e.IonSelectPopover=s,Object.defineProperty(e,"__esModule",{value:!0})});