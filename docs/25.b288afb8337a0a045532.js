(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{NvT6:function(n,l,a){"use strict";a.d(l,"a",function(){return u}),a.d(l,"b",function(){return e});var t=a("CcnG");a("Blfk"),a("Fzqc"),a("Wf4p"),a("dWZg"),a("Ip0R"),a("wFw1");var u=t.Ma({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function e(n){return t.ib(2,[(n()(),t.Oa(0,0,null,null,1,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),(n()(),t.Oa(1,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(n,l){var a=l.component;n(l,0,0,a.diameter,a.diameter,a._viewBox),n(l,1,0,a._circleRadius,"mat-progress-spinner-stroke-rotate-"+a.diameter,a._strokeDashOffset,a._strokeCircumference,a._circleStrokeWidth)})}},fWtw:function(n,l,a){"use strict";a.d(l,"a",function(){return t}),a("RHxm");var t=function(){function n(n){this.lang=n}return n.prototype.transform=function(n,l){return this.lang.t(n,l)},n}()},lana:function(n,l,a){"use strict";a.r(l);var t=a("CcnG"),u=a("Zmtf"),e=function(){function n(n,l){var a=this;this.a=n,this.route=l,this.loading=!1,this.payment_information={payment_method:"paypal"},this.payment_computation={teacher_share:0},this.total_points=0,this.teacher_share=0,this.paypal_charges=0,this.selling_rate=0,this.earnings=0,this.salary="0",this.route.queryParams.subscribe(function(n){n.total_points&&(a.total_points=n.total_points)}),this.a.lms.get_payment_computation_info().subscribe(function(n){a.payment_computation=n,a.recompute()},function(n){a.a.toast(n)})}return n.prototype.recompute=function(){if(this.teacher_share=this.total_points*this.payment_computation.teacher_share/100,this.paypal_charges=this.teacher_share*this.payment_computation.transaction_fee_teacher_share/100,"paypal"!==this.payment_information.payment_method?(this.selling_rate=this.teacher_share*this.payment_computation.NEW_EXCHANGE_SELLER_RATE/100,this.earnings=Math.round(this.teacher_share-this.paypal_charges-this.selling_rate)):this.earnings=Math.round(this.teacher_share-this.paypal_charges),"paypal"===this.payment_information.payment_method)console.log("earnings",this.earnings),console.log("usd_exchange_rate",this.payment_computation),this.salary=Math.round(this.earnings/parseFloat(this.payment_computation.usd))+"USD";else{var n=Math.round(this.earnings/parseFloat(this.payment_computation.php));this.salary=n+"PHP"}},n}(),o=function(){},i=a("xYTU"),s=a("t68o"),r=a("zbXB"),c=a("NcP4"),m=a("NvT6"),d=a("Blfk"),p=a("dWZg"),g=a("Ip0R"),h=a("wFw1"),f=a("gIcY"),_=a("fWtw"),v=a("RHxm"),y=a("ZYCi"),C=t.Ma({encapsulation:0,styles:[["main[_ngcontent-%COMP%]{min-height:540px;padding:0 0 3em;background:#fff}main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin-bottom:3em}main[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}main[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin:.5em}main[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-weight:700;font-size:90%}main[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0}main[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]{background:#fff;border:1px solid #1e90ff;color:#1e90ff}main[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]   .gcash[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:green!important}main[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]   .western-union[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:orange!important}main[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]   .paypal[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#253b80!important}main[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center;margin:0 2em;padding:1em 3em;text-align:center;border-radius:2px;background:#eee;cursor:pointer}@media screen and (max-width:544px){main[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:0 .5em;padding:.5em 1.5em}}main[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-bottom:.5em;height:3em;width:3em}main[_ngcontent-%COMP%]   .payment-information[_ngcontent-%COMP%]{padding:3em 5em;text-align:center}@media screen and (max-width:544px){main[_ngcontent-%COMP%]   .payment-information[_ngcontent-%COMP%]{padding:.5em 1.5em}}main[_ngcontent-%COMP%]   .payment-information[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{align-items:center;justify-content:center}main[_ngcontent-%COMP%]   .payment-information[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child{padding:.5em 0}main[_ngcontent-%COMP%]   .payment-information[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child > div[_ngcontent-%COMP%]{width:100%;padding:1em;background:#eee}main[_ngcontent-%COMP%]   .payment-information[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child > input[_ngcontent-%COMP%]{padding:.6em;width:100%;text-align:center;font-size:110%}main[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{padding:3em 5em;color:#8b0000;font-size:90%;line-height:1.5em}@media screen and (max-width:544px){main[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{padding:.5em 1.5em}main[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:1em}}"]],data:{}});function O(n){return t.ib(0,[(n()(),t.Oa(0,0,null,null,5,"div",[["class","loader"]],null,null,null,null,null)),(n()(),t.Oa(1,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,m.b,m.a)),t.Na(2,49152,null,0,d.d,[t.k,p.a,[2,g.d],[2,h.a],d.a],{diameter:[0,"diameter"]},null),(n()(),t.Oa(3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t.gb(4,null,["",""])),t.cb(5,1)],function(n,l){n(l,2,0,48)},function(n,l){n(l,1,0,"NoopAnimations"===t.Ya(l,2)._animationMode,t.Ya(l,2).diameter,t.Ya(l,2).diameter),n(l,4,0,t.hb(l,4,0,n(l,5,0,t.Ya(l.parent,0),"IN LOADING")))})}function b(n){return t.ib(0,[(n()(),t.Oa(0,0,null,null,39,"div",[["class","payment-method"]],null,null,null,null,null)),(n()(),t.Oa(1,0,null,null,12,"label",[],null,null,null,null,null)),(n()(),t.Oa(2,0,null,null,6,"input",[["name","payment_method"],["type","radio"],["value","gcash"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,a){var u=!0,e=n.component;return"input"===l&&(u=!1!==t.Ya(n,3)._handleInput(a.target.value)&&u),"blur"===l&&(u=!1!==t.Ya(n,3).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Ya(n,3)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Ya(n,3)._compositionEnd(a.target.value)&&u),"change"===l&&(u=!1!==t.Ya(n,4).onChange()&&u),"blur"===l&&(u=!1!==t.Ya(n,4).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(e.payment_information.payment_method=a)&&u),"ngModelChange"===l&&(u=!1!==e.recompute()&&u),u},null,null)),t.Na(3,16384,null,0,f.e,[t.C,t.k,[2,f.a]],null,null),t.Na(4,212992,null,0,f.p,[t.C,t.k,f.v,t.p],{name:[0,"name"],value:[1,"value"]},null),t.db(1024,null,f.i,function(n,l){return[n,l]},[f.e,f.p]),t.Na(6,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.db(2048,null,f.j,null,[f.n]),t.Na(8,16384,null,0,f.k,[[4,f.j]],null,null),(n()(),t.Oa(9,0,null,null,4,"div",[["class","gcash"]],null,null,null,null,null)),(n()(),t.Oa(10,0,null,null,1,":svg:svg",[["aria-hidden","true"],["data-fa-i2svg",""],["data-icon","tablet-alt"],["data-prefix","fal"],["role","img"],["viewBox","0 0 448 512"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),t.Oa(11,0,null,null,0,":svg:path",[["d","M352 96v256H96V96h256m20-32H76c-6.6 0-12 5.4-12 12v296c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12zm28-64H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm16 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v416zm-192-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"],["fill","currentColor"]],null,null,null,null,null)),(n()(),t.Oa(12,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["GCAsh"])),(n()(),t.Oa(14,0,null,null,12,"label",[],null,null,null,null,null)),(n()(),t.Oa(15,0,null,null,6,"input",[["name","payment_method"],["type","radio"],["value","western-union"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,a){var u=!0,e=n.component;return"input"===l&&(u=!1!==t.Ya(n,16)._handleInput(a.target.value)&&u),"blur"===l&&(u=!1!==t.Ya(n,16).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Ya(n,16)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Ya(n,16)._compositionEnd(a.target.value)&&u),"change"===l&&(u=!1!==t.Ya(n,17).onChange()&&u),"blur"===l&&(u=!1!==t.Ya(n,17).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(e.payment_information.payment_method=a)&&u),"ngModelChange"===l&&(u=!1!==e.recompute()&&u),u},null,null)),t.Na(16,16384,null,0,f.e,[t.C,t.k,[2,f.a]],null,null),t.Na(17,212992,null,0,f.p,[t.C,t.k,f.v,t.p],{name:[0,"name"],value:[1,"value"]},null),t.db(1024,null,f.i,function(n,l){return[n,l]},[f.e,f.p]),t.Na(19,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.db(2048,null,f.j,null,[f.n]),t.Na(21,16384,null,0,f.k,[[4,f.j]],null,null),(n()(),t.Oa(22,0,null,null,4,"div",[["class","western-union"]],null,null,null,null,null)),(n()(),t.Oa(23,0,null,null,1,":svg:svg",[["viewBox","0 0 512 512"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),t.Oa(24,0,null,null,0,":svg:path",[["d","M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"],["fill","currentColor"]],null,null,null,null,null)),(n()(),t.Oa(25,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["Western Union"])),(n()(),t.Oa(27,0,null,null,12,"label",[],null,null,null,null,null)),(n()(),t.Oa(28,0,null,null,6,"input",[["name","payment_method"],["type","radio"],["value","paypal"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,a){var u=!0,e=n.component;return"input"===l&&(u=!1!==t.Ya(n,29)._handleInput(a.target.value)&&u),"blur"===l&&(u=!1!==t.Ya(n,29).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Ya(n,29)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Ya(n,29)._compositionEnd(a.target.value)&&u),"change"===l&&(u=!1!==t.Ya(n,30).onChange()&&u),"blur"===l&&(u=!1!==t.Ya(n,30).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(e.payment_information.payment_method=a)&&u),"ngModelChange"===l&&(u=!1!==e.recompute()&&u),u},null,null)),t.Na(29,16384,null,0,f.e,[t.C,t.k,[2,f.a]],null,null),t.Na(30,212992,null,0,f.p,[t.C,t.k,f.v,t.p],{name:[0,"name"],value:[1,"value"]},null),t.db(1024,null,f.i,function(n,l){return[n,l]},[f.e,f.p]),t.Na(32,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.db(2048,null,f.j,null,[f.n]),t.Na(34,16384,null,0,f.k,[[4,f.j]],null,null),(n()(),t.Oa(35,0,null,null,4,"div",[["class","paypal"]],null,null,null,null,null)),(n()(),t.Oa(36,0,null,null,1,":svg:svg",[["viewBox","0 0 384 512"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),t.Oa(37,0,null,null,0,":svg:path",[["d","M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"],["fill","currentColor"]],null,null,null,null,null)),(n()(),t.Oa(38,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["Paypal"]))],function(n,l){var a=l.component;n(l,4,0,"payment_method","gcash"),n(l,6,0,"payment_method",a.payment_information.payment_method),n(l,17,0,"payment_method","western-union"),n(l,19,0,"payment_method",a.payment_information.payment_method),n(l,30,0,"payment_method","paypal"),n(l,32,0,"payment_method",a.payment_information.payment_method)},function(n,l){n(l,2,0,t.Ya(l,8).ngClassUntouched,t.Ya(l,8).ngClassTouched,t.Ya(l,8).ngClassPristine,t.Ya(l,8).ngClassDirty,t.Ya(l,8).ngClassValid,t.Ya(l,8).ngClassInvalid,t.Ya(l,8).ngClassPending),n(l,15,0,t.Ya(l,21).ngClassUntouched,t.Ya(l,21).ngClassTouched,t.Ya(l,21).ngClassPristine,t.Ya(l,21).ngClassDirty,t.Ya(l,21).ngClassValid,t.Ya(l,21).ngClassInvalid,t.Ya(l,21).ngClassPending),n(l,28,0,t.Ya(l,34).ngClassUntouched,t.Ya(l,34).ngClassTouched,t.Ya(l,34).ngClassPristine,t.Ya(l,34).ngClassDirty,t.Ya(l,34).ngClassValid,t.Ya(l,34).ngClassInvalid,t.Ya(l,34).ngClassPending)})}function M(n){return t.ib(0,[(n()(),t.Oa(0,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.Oa(1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(2,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["KWR to PHP"])),(n()(),t.Oa(4,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(5,0,null,null,5,"input",[["id","php"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,a){var u=!0,e=n.component;return"input"===l&&(u=!1!==t.Ya(n,6)._handleInput(a.target.value)&&u),"blur"===l&&(u=!1!==t.Ya(n,6).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Ya(n,6)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Ya(n,6)._compositionEnd(a.target.value)&&u),"ngModelChange"===l&&(u=!1!==(e.payment_computation.php=a)&&u),"keyup"===l&&(u=!1!==e.recompute()&&u),u},null,null)),t.Na(6,16384,null,0,f.e,[t.C,t.k,[2,f.a]],null,null),t.db(1024,null,f.i,function(n){return[n]},[f.e]),t.Na(8,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{model:[0,"model"]},{update:"ngModelChange"}),t.db(2048,null,f.j,null,[f.n]),t.Na(10,16384,null,0,f.k,[[4,f.j]],null,null)],function(n,l){n(l,8,0,l.component.payment_computation.php)},function(n,l){n(l,5,0,t.Ya(l,10).ngClassUntouched,t.Ya(l,10).ngClassTouched,t.Ya(l,10).ngClassPristine,t.Ya(l,10).ngClassDirty,t.Ya(l,10).ngClassValid,t.Ya(l,10).ngClassInvalid,t.Ya(l,10).ngClassPending)})}function P(n){return t.ib(0,[(n()(),t.Oa(0,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.Oa(1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(2,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["KWR to USD"])),(n()(),t.Oa(4,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(5,0,null,null,5,"input",[["id","usd"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,a){var u=!0,e=n.component;return"input"===l&&(u=!1!==t.Ya(n,6)._handleInput(a.target.value)&&u),"blur"===l&&(u=!1!==t.Ya(n,6).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Ya(n,6)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Ya(n,6)._compositionEnd(a.target.value)&&u),"ngModelChange"===l&&(u=!1!==(e.payment_computation.usd=a)&&u),"keyup"===l&&(u=!1!==e.recompute()&&u),u},null,null)),t.Na(6,16384,null,0,f.e,[t.C,t.k,[2,f.a]],null,null),t.db(1024,null,f.i,function(n){return[n]},[f.e]),t.Na(8,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{model:[0,"model"]},{update:"ngModelChange"}),t.db(2048,null,f.j,null,[f.n]),t.Na(10,16384,null,0,f.k,[[4,f.j]],null,null)],function(n,l){n(l,8,0,l.component.payment_computation.usd)},function(n,l){n(l,5,0,t.Ya(l,10).ngClassUntouched,t.Ya(l,10).ngClassTouched,t.Ya(l,10).ngClassPristine,t.Ya(l,10).ngClassDirty,t.Ya(l,10).ngClassValid,t.Ya(l,10).ngClassInvalid,t.Ya(l,10).ngClassPending)})}function Y(n){return t.ib(0,[(n()(),t.Oa(0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.Oa(1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(2,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(3,null,["Conversion Rate(","%)"])),(n()(),t.Oa(4,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(5,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(6,null,["",""]))],null,function(n,l){var a=l.component;n(l,3,0,a.payment_computation.NEW_EXCHANGE_SELLER_RATE),n(l,6,0,a.selling_rate)})}function k(n){return t.ib(0,[t.ab(0,_.a,[v.a]),(n()(),t.Oa(1,0,null,null,87,"main",[],null,null,null,null,null)),(n()(),t.Oa(2,0,null,null,2,"header",[],null,null,null,null,null)),(n()(),t.Oa(3,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["Salary Computation"])),(n()(),t.Fa(16777216,null,null,1,null,O)),t.Na(6,16384,null,0,g.o,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.Fa(16777216,null,null,1,null,b)),t.Na(8,16384,null,0,g.o,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.Oa(9,0,null,null,45,"div",[["class","payment-information container-fluid"]],null,null,null,null,null)),(n()(),t.Fa(16777216,null,null,1,null,M)),t.Na(11,16384,null,0,g.o,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.Fa(16777216,null,null,1,null,P)),t.Na(13,16384,null,0,g.o,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.Oa(14,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.Oa(15,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(16,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["Total Points"])),(n()(),t.Oa(18,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(19,0,null,null,5,"input",[["id","total_points"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,a){var u=!0,e=n.component;return"input"===l&&(u=!1!==t.Ya(n,20)._handleInput(a.target.value)&&u),"blur"===l&&(u=!1!==t.Ya(n,20).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Ya(n,20)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Ya(n,20)._compositionEnd(a.target.value)&&u),"ngModelChange"===l&&(u=!1!==(e.total_points=a)&&u),"keyup"===l&&(u=!1!==e.recompute()&&u),u},null,null)),t.Na(20,16384,null,0,f.e,[t.C,t.k,[2,f.a]],null,null),t.db(1024,null,f.i,function(n){return[n]},[f.e]),t.Na(22,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{model:[0,"model"]},{update:"ngModelChange"}),t.db(2048,null,f.j,null,[f.n]),t.Na(24,16384,null,0,f.k,[[4,f.j]],null,null),(n()(),t.Oa(25,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.Oa(26,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(27,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(28,null,["Teacher Share Points (","%)"])),(n()(),t.Oa(29,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(30,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(31,null,["",""])),(n()(),t.Oa(32,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.Oa(33,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(34,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(35,null,["Transaction Fee(","%)"])),(n()(),t.Oa(36,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(37,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(38,null,["",""])),(n()(),t.Fa(16777216,null,null,1,null,Y)),t.Na(40,16384,null,0,g.o,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.Oa(41,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.Oa(42,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(43,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["Earnings"])),(n()(),t.Oa(45,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(46,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(47,null,["",""])),(n()(),t.Oa(48,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.Oa(49,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(50,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["Salary"])),(n()(),t.Oa(52,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t.Oa(53,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.gb(54,null,["",""])),(n()(),t.Oa(55,0,null,null,33,"div",[["class","note text-left"]],null,null,null,null,null)),(n()(),t.Oa(56,0,null,null,3,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),t.Oa(57,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["*Total Points:"])),(n()(),t.gb(-1,null,[" This is the total accumulated points you earn every paid class for a certain cutoff. "])),(n()(),t.Oa(60,0,null,null,3,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),t.Oa(61,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["*Teacher Share Points:"])),(n()(),t.gb(63,null,[" Teacher share is ","% of the total accumulated points. "])),(n()(),t.Oa(64,0,null,null,3,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),t.Oa(65,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["*Paypal Charges:"])),(n()(),t.gb(67,null,[" When the student buy points, paypal deduct a total of ","% from the total amount they pay. But we still give the full amount of points to student, that's why we need to deduct the ","% to the teacher, branch and company share. Company, branch and teacher will share with this deduction. Since teacher share is ","% then we deduct ","% to teacher points. And the remaining will be deducted to the company and branch. "])),(n()(),t.Oa(68,0,null,null,3,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),t.Oa(69,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["*Conversion Rate Fee:"])),(n()(),t.gb(-1,null,[" Paypal charge this fee when we transfer the money from paypal to local banks. "])),(n()(),t.Oa(72,0,null,null,3,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),t.Oa(73,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["*Total Earnings:"])),(n()(),t.gb(-1,null,[" This amount sum of all the share and deductions. "])),(n()(),t.Oa(76,0,null,null,3,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),t.Oa(77,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["*Average Salary:"])),(n()(),t.gb(-1,null,[" This amount is may change depends on the current exchange rate. "])),(n()(),t.Oa(80,0,null,null,8,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),t.Oa(81,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),t.Oa(82,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["*Note:"])),(n()(),t.gb(-1,null,[" Additional charges will be applied to GCash and Western Union base on the total salary earned."])),(n()(),t.Oa(85,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),t.Oa(86,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.gb(-1,null,["*Note:"])),(n()(),t.gb(-1,null,[" For paypal users, Conversion rate is not applied but paypal will charge a service fee upon receiving your salary. "]))],function(n,l){var a=l.component;n(l,6,0,a.loading),n(l,8,0,!a.loading),n(l,11,0,"paypal"!=a.payment_information.payment_method),n(l,13,0,"paypal"==a.payment_information.payment_method),n(l,22,0,a.total_points),n(l,40,0,"paypal"!==a.payment_information.payment_method)},function(n,l){var a=l.component;n(l,19,0,t.Ya(l,24).ngClassUntouched,t.Ya(l,24).ngClassTouched,t.Ya(l,24).ngClassPristine,t.Ya(l,24).ngClassDirty,t.Ya(l,24).ngClassValid,t.Ya(l,24).ngClassInvalid,t.Ya(l,24).ngClassPending),n(l,28,0,a.payment_computation.teacher_share),n(l,31,0,a.teacher_share),n(l,35,0,a.payment_computation.transaction_fee_teacher_share),n(l,38,0,a.paypal_charges),n(l,47,0,a.earnings),n(l,54,0,a.salary),n(l,63,0,null==a.payment_computation?null:a.payment_computation.teacher_share),n(l,67,0,null==a.payment_computation?null:a.payment_computation.transaction_fee_paypal,null==a.payment_computation?null:a.payment_computation.transaction_fee_paypal,null==a.payment_computation?null:a.payment_computation.teacher_share,null==a.payment_computation?null:a.payment_computation.transaction_fee_teacher_share)})}var w=t.Ka("ontue-salary-computation-page",e,function(n){return t.ib(0,[(n()(),t.Oa(0,0,null,null,1,"ontue-salary-computation-page",[],null,null,null,k,C)),t.Na(1,49152,null,0,e,[u.a,y.a],null,null)],null,null)},{},{},[]),W=a("Wf4p"),x=a("M2Lx"),N=a("eDkP"),z=a("Fzqc"),I=a("uGex"),T=a("vARd"),V=a("lLAP"),j=a("vGXY"),E=a("o3x0"),S=a("jQLj"),A=a("v9Dh"),H=a("fZRI"),R=a("seP3"),F=a("/VYK"),X=a("b716"),D=a("UodH"),U=a("de3e"),L=a("4c35"),q=a("qAlS"),B=a("Z+uX"),G=a("9It4"),K=a("La40"),Z=a("/wvI");a.d(l,"OntueSalaryComputationPageModuleNgFactory",function(){return J});var J=t.La(o,[e],function(n){return t.Va([t.Wa(512,t.j,t.Aa,[[8,[i.a,i.b,s.a,r.b,r.a,c.a,w]],[3,t.j],t.v]),t.Wa(4608,g.q,g.p,[t.s,[2,g.A]]),t.Wa(4608,f.v,f.v,[]),t.Wa(4608,W.d,W.d,[]),t.Wa(4608,x.c,x.c,[]),t.Wa(4608,N.c,N.c,[N.i,N.e,t.j,N.h,N.f,t.p,t.x,g.d,z.b]),t.Wa(5120,N.j,N.k,[N.c]),t.Wa(5120,I.a,I.b,[N.c]),t.Wa(4608,T.c,T.c,[N.c,V.h,t.p,j.a,[3,T.c],T.b]),t.Wa(5120,E.c,E.d,[N.c]),t.Wa(4608,E.e,E.e,[N.c,t.p,[2,g.j],[2,E.b],E.c,[3,E.e],N.e]),t.Wa(4608,S.i,S.i,[]),t.Wa(5120,S.a,S.b,[N.c]),t.Wa(4608,W.c,W.v,[[2,W.g],p.a]),t.Wa(5120,A.b,A.c,[N.c]),t.Wa(1073742336,g.c,g.c,[]),t.Wa(1073742336,f.s,f.s,[]),t.Wa(1073742336,f.g,f.g,[]),t.Wa(1073742336,y.q,y.q,[[2,y.v],[2,y.n]]),t.Wa(1073742336,H.a,H.a,[]),t.Wa(1073742336,R.d,R.d,[]),t.Wa(1073742336,p.b,p.b,[]),t.Wa(1073742336,F.c,F.c,[]),t.Wa(1073742336,X.c,X.c,[]),t.Wa(1073742336,z.a,z.a,[]),t.Wa(1073742336,W.l,W.l,[[2,W.e]]),t.Wa(1073742336,W.u,W.u,[]),t.Wa(1073742336,D.c,D.c,[]),t.Wa(1073742336,x.d,x.d,[]),t.Wa(1073742336,U.c,U.c,[]),t.Wa(1073742336,L.g,L.g,[]),t.Wa(1073742336,q.a,q.a,[]),t.Wa(1073742336,N.g,N.g,[]),t.Wa(1073742336,W.s,W.s,[]),t.Wa(1073742336,W.q,W.q,[]),t.Wa(1073742336,I.d,I.d,[]),t.Wa(1073742336,T.f,T.f,[]),t.Wa(1073742336,d.c,d.c,[]),t.Wa(1073742336,E.k,E.k,[]),t.Wa(1073742336,V.a,V.a,[]),t.Wa(1073742336,S.j,S.j,[]),t.Wa(1073742336,W.w,W.w,[]),t.Wa(1073742336,W.n,W.n,[]),t.Wa(1073742336,B.b,B.b,[]),t.Wa(1073742336,G.a,G.a,[]),t.Wa(1073742336,A.e,A.e,[]),t.Wa(1073742336,K.a,K.a,[]),t.Wa(1073742336,Z.a,Z.a,[]),t.Wa(1073742336,o,o,[]),t.Wa(256,W.f,W.i,[]),t.Wa(1024,y.l,function(){return[[{path:"",component:e}]]},[])])})}}]);