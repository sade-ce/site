/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;class e{constructor(){this.svgContent=null,this.ariaLabel="",this.ios="",this.md="",this.name=""}get iconName(){let t=this.name.toLowerCase();const e=this.mode||"md";this.ios&&"ios"===e?t=this.ios.toLowerCase():this.md&&"md"===e?t=this.md.toLowerCase():t&&!/^md-|^ios-|^logo-/.test(t)&&(t=e+"-"+t);const i=t.replace(/[a-z]|-|\d/g,"");return""!==i?(console.error(`invalid characters in ion-icon name: ${i}`),null):t}hostData(){const t={role:"img"};if(this.ariaLabel)t["aria-label"]=this.ariaLabel;else{const e=this.iconName;e&&(t["aria-label"]=e.replace("ios-","").replace("md-","").replace("-outline","").replace(/\-/g," "))}const e={};return this.size&&(e[`icon-${this.size}`]=!0),Object.assign({},t,{class:e})}render(){if(this.isServer)return t("div",{class:"icon-inner"});const e=this.iconName;if(!e)return t("div",{class:"icon-inner"});const s=o[e];return s===this.svgContent?t("div",{class:"icon-inner",innerHTML:s}):(function(t,e,o){if((n[t]=n[t]||[]).push(o),!i[t]){i[t]=!0;var s=document.createElement("script");s.charset="utf-8",s.async=!0,s.src=`${e}svg/${t}.js`;var r=setTimeout(a,12e4);s.onerror=s.onload=a,document.head.appendChild(s)}function a(){clearTimeout(r),s.onerror=s.onload=null,s.parentNode.removeChild(s),delete i[t]}}(e,this.publicPath,t=>{this.svgContent=t}),t("div",{class:"icon-inner"}))}static get is(){return"ion-icon"}static get host(){return{theme:"icon"}}static get properties(){return{ariaLabel:{type:String,attr:"aria-label"},color:{type:String,attr:"color"},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},md:{type:String,attr:"md"},mode:{context:"mode"},name:{type:String,attr:"name"},publicPath:{context:"publicPath"},size:{type:String,attr:"size"},svgContent:{state:!0}}}static get style(){return"ion-icon{display:inline-block;font-size:inherit}ion-icon .icon-inner{height:1em;width:1em}ion-icon svg{fill:currentColor;stroke:currentColor}.icon-small .icon-inner{font-size:18px}.icon-large .icon-inner{font-size:32px}.icon-ios-primary svg{fill:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));stroke:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.icon-ios-secondary svg{fill:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8));stroke:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.icon-ios-tertiary svg{fill:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942));stroke:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942))}.icon-ios-success svg{fill:var(--ion-color-ios-success,var(--ion-color-success,#10dc60));stroke:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.icon-ios-warning svg{fill:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00));stroke:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.icon-ios-danger svg{fill:var(--ion-color-ios-danger,var(--ion-color-danger,#f14141));stroke:var(--ion-color-ios-danger,var(--ion-color-danger,#f14141))}.icon-ios-light svg{fill:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8));stroke:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.icon-ios-medium svg{fill:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2));stroke:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.icon-ios-dark svg{fill:var(--ion-color-ios-dark,var(--ion-color-dark,#222428));stroke:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}.icon-md-primary svg{fill:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));stroke:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.icon-md-secondary svg{fill:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8));stroke:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.icon-md-tertiary svg{fill:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#f4a942));stroke:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#f4a942))}.icon-md-success svg{fill:var(--ion-color-md-success,var(--ion-color-success,#10dc60));stroke:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.icon-md-warning svg{fill:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00));stroke:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.icon-md-danger svg{fill:var(--ion-color-md-danger,var(--ion-color-danger,#f14141));stroke:var(--ion-color-md-danger,var(--ion-color-danger,#f14141))}.icon-md-light svg{fill:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8));stroke:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.icon-md-medium svg{fill:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2));stroke:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.icon-md-dark svg{fill:var(--ion-color-md-dark,var(--ion-color-dark,#222428));stroke:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"}}const i={},n=[],o={};window.loadIonicon=function(t,e){delete i[e],o[e]=t;const s=n[e];s&&(s.forEach(e=>{e(t)}),delete n[e])};export{e as IonIcon};