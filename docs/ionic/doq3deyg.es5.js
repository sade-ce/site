/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("doq3deyg",["exports","./chunk-4dee52e3.js","./chunk-0f94cb1c.js"],function(t,e,n){var i=window.Ionic.h,o=function(){function t(){this.didBlurAfterEdit=!1,this.autocapitalize="none",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value=""}return t.prototype.debounceChanged=function(){this.ionChange=e.debounceEvent(this.ionChange,this.debounce)},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){var t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.emitStyle(),this.ionChange.emit({value:e})},t.prototype.componentWillLoad=function(){void 0===this.clearOnEdit&&"password"===this.type&&(this.clearOnEdit=!0)},t.prototype.componentDidLoad=function(){this.ionStyle=e.deferEvent(this.ionStyle),this.debounceChanged(),this.emitStyle(),this.ionInputDidLoad.emit()},t.prototype.componentDidUnload=function(){this.nativeInput=void 0,this.ionInputDidUnload.emit()},t.prototype.emitStyle=function(){this.ionStyle.emit({input:!0,"input-disabled":this.disabled,"input-has-value":this.hasValue(),"input-has-focus":this.hasFocus()})},t.prototype.onInput=function(t){t.target&&(this.value=t.target&&t.target.value||""),this.ionInput.emit(t)},t.prototype.onBlur=function(){this.focusChanged(),this.emitStyle(),this.ionBlur.emit()},t.prototype.onFocus=function(){this.focusChanged(),this.emitStyle(),this.ionFocus.emit()},t.prototype.focusChanged=function(){this.clearOnEdit&&!this.hasFocus()&&this.hasValue()&&(this.didBlurAfterEdit=!0)},t.prototype.inputKeydown=function(){this.checkClearOnEdit()},t.prototype.checkClearOnEdit=function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)},t.prototype.clearTextInput=function(){this.value=""},t.prototype.hasFocus=function(){return this.nativeInput===document.activeElement},t.prototype.hasValue=function(){return""!==this.value},t.prototype.render=function(){var t=this,e=n.createThemedClasses(this.mode,this.color,"native-input");return[i("input",{ref:function(e){return t.nativeInput=e},"aria-disabled":!!this.disabled&&"true",accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,class:e,disabled:this.disabled,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder,results:this.results,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:this.value,onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.inputKeydown.bind(this)}),i("button",{type:"button",class:"input-clear-icon",hidden:!this.clearInput,onClick:this.clearTextInput.bind(this),onMouseDown:this.clearTextInput.bind(this)})]},Object.defineProperty(t,"is",{get:function(){return"ion-input"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"input"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{accept:{type:String,attr:"accept"},autocapitalize:{type:String,attr:"autocapitalize"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},autofocus:{type:Boolean,attr:"autofocus"},clearInput:{type:Boolean,attr:"clear-input"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},inputmode:{type:String,attr:"inputmode"},max:{type:String,attr:"max"},maxlength:{type:Number,attr:"maxlength"},min:{type:String,attr:"min"},minlength:{type:Number,attr:"minlength"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},pattern:{type:String,attr:"pattern"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},results:{type:Number,attr:"results"},size:{type:Number,attr:"size"},spellcheck:{type:Boolean,attr:"spellcheck"},step:{type:String,attr:"step"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidLoad",method:"ionInputDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidUnload",method:"ionInputDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".input{position:relative;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.item-input .input{position:static}.native-input{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;border-radius:0;display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:92%;width:calc(100% - 10px);border:0;background:0 0}.native-input:active,.native-input:focus{outline:0}.native-input[disabled]{opacity:.4}input.native-input:-webkit-autofill{background-color:transparent}.input-cover{left:0;top:0;position:absolute;width:100%;height:100%}.input[disabled] .input-cover{pointer-events:none}.item-input-has-focus .input-cover{display:none}.item-input-has-focus{pointer-events:none}.item-input-has-focus a,.item-input-has-focus button,.item-input-has-focus input{pointer-events:auto}[next-input]{padding:0;position:absolute;bottom:20px;width:1px;height:1px;border:0;background:0 0;pointer-events:none}.input-clear-icon{margin:0;padding:0;background-position:center;position:absolute;top:0;display:none;height:100%;background-repeat:no-repeat}.item-input-has-focus.item-input-has-value .input-clear-icon{display:block}.native-input-md{margin:13px 8px;padding:0;width:calc(100% - 8px - 8px);font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:inherit}.native-input-md::-moz-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.native-input-md:-ms-input-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.native-input-md::-webkit-input-placeholder{text-indent:0;color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.input-md .inset-input{padding:6.5px 8px;margin:6.5px 16px}.item-md.item-input.item-input-has-focus .item-inner{border-bottom-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));-webkit-box-shadow:inset 0 -1px 0 0 var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));box-shadow:inset 0 -1px 0 0 var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.list-md .item-input.item-input-has-focus:last-child{border-bottom-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));-webkit-box-shadow:inset 0 -1px 0 0 var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));box-shadow:inset 0 -1px 0 0 var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.list-md .item-input.item-input-has-focus:last-child .item-inner{-webkit-box-shadow:none;box-shadow:none}.item-md.item-input.ng-valid.item-input-has-value:not(.item-input-has-focus) .item-inner{border-bottom-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60));-webkit-box-shadow:inset 0 -1px 0 0 var(--ion-color-md-success,var(--ion-color-success,#10dc60));box-shadow:inset 0 -1px 0 0 var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.list-md .item-input.ng-valid.item-input-has-value:not(.item-input-has-focus):last-child{border-bottom-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60));-webkit-box-shadow:inset 0 -1px 0 0 var(--ion-color-md-success,var(--ion-color-success,#10dc60));box-shadow:inset 0 -1px 0 0 var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.list-md .item-input.ng-valid.item-input-has-value:not(.item-input-has-focus):last-child .item-inner{-webkit-box-shadow:none;box-shadow:none}.item-md.item-input.ng-invalid.ng-touched:not(.item-input-has-focus) .item-inner{border-bottom-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141));-webkit-box-shadow:inset 0 -1px 0 0 var(--ion-color-md-danger,var(--ion-color-danger,#f04141));box-shadow:inset 0 -1px 0 0 var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.list-md .item-input.ng-invalid.ng-touched:not(.item-input-has-focus):last-child{border-bottom-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141));-webkit-box-shadow:inset 0 -1px 0 0 var(--ion-color-md-danger,var(--ion-color-danger,#f04141));box-shadow:inset 0 -1px 0 0 var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.list-md .item-input.ng-invalid.ng-touched:not(.item-input-has-focus):last-child .item-inner{-webkit-box-shadow:none;box-shadow:none}.item-label-floating .native-input-md,.item-label-stacked .native-input-md{margin-left:0;margin-top:8px;margin-bottom:8px;width:calc(100% - 8px)}.input-md[clear-input]{position:relative}.input-md[clear-input] .native-input{padding-right:30px}.input-md .native-input-clear-icon{right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-text-md-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;background-color:transparent;background-size:22px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();t.IonInput=o,Object.defineProperty(t,"__esModule",{value:!0})});