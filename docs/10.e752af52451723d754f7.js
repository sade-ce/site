(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7wQB":function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),a=l("Zmtf"),o=l("b9M/"),u=function(){function n(n,t,l,e,a){var o=this;this.sanitizer=t,this.http=l,this.a=e,this.forum=a,n.paramMap.subscribe(function(n){n.get("ID")?o.forum.getPost(n.get("ID")).subscribe(function(n){o.post=n,o.post.date=new Date(o.post.date).toLocaleDateString(),o.post.safe_content=o.sanitizer.bypassSecurityTrustHtml(o.post.content.rendered),o.post.forum_name=a.getForumName(n)},function(n){return e.toast(n)}):e.toast(e.ln.MISSING_ID)})}return n.prototype.ngOnInit=function(){},n}(),i=function(){},c=l("ZYCi"),r=l("Ip0R"),s=l("fWtw"),g=l("RHxm"),m=l("ZYjt"),p=l("t/Na"),f=e.Ma({encapsulation:0,styles:[["main[_ngcontent-%COMP%]{padding-bottom:4em;background:#fff}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{margin:auto;padding:2em;line-height:1.6em}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:1rem 0 0;padding:0;font-size:1.6em;font-weight:100;line-height:1.2em}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{margin-bottom:3rem}@media (min-width:768px){main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{padding:3em 8em}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:2em;font-size:2em}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{margin-bottom:5em}}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-size:1em;line-height:1.6em;font-weight:200}@media (min-width:768px){main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-size:1.2em}}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{display:flex;align-items:center;margin:2em 0;padding:.75em 1.5em;border-radius:2px;background:#00008b;color:#fff;font-size:.9em}main[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin-right:.5em}"]],data:{}});function O(n){return e.ib(0,[(n()(),e.Oa(0,0,null,null,13,"div",[["class","post"]],null,null,null,null,null)),(n()(),e.Oa(1,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),e.gb(2,null,[" "," "])),(n()(),e.Oa(3,0,null,null,1,"div",[["class","meta"]],null,null,null,null,null)),(n()(),e.gb(4,null,[" "," "," "])),(n()(),e.Oa(5,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Oa(6,0,null,null,7,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var a=!0;return"click"===t&&(a=!1!==e.Ya(n,7).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&a),a},null,null)),e.Na(7,671744,null,0,c.p,[c.n,c.a,r.j],{routerLink:[0,"routerLink"]},null),(n()(),e.Oa(8,0,null,null,5,"div",[["class","button"]],null,null,null,null,null)),(n()(),e.Oa(9,0,null,null,1,":svg:svg",[["viewBox","0 0 256 512"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),e.Oa(10,0,null,null,0,":svg:path",[["d","M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"],["fill","currentColor"]],null,null,null,null,null)),(n()(),e.Oa(11,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.gb(12,null,["",""])),e.cb(13,1)],function(n,t){var l=t.component;n(t,7,0,e.Qa(1,"/",l.forum.getSlug(l.post.categories),""))},function(n,t){var l=t.component;n(t,2,0,l.post.title.rendered),n(t,4,0,l.post.forum_name,l.post.date),n(t,5,0,l.post.safe_content),n(t,6,0,e.Ya(t,7).target,e.Ya(t,7).href),n(t,12,0,e.hb(t,12,0,n(t,13,0,e.Ya(t.parent,0),"RETURN_TO_LIST")))})}function M(n){return e.ib(0,[e.ab(0,s.a,[g.a]),(n()(),e.Oa(1,0,null,null,2,"main",[],null,null,null,null,null)),(n()(),e.Fa(16777216,null,null,1,null,O)),e.Na(3,16384,null,0,r.n,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,3,0,t.component.post)},null)}var _=e.Ka("post-page",u,function(n){return e.ib(0,[(n()(),e.Oa(0,0,null,null,1,"post-page",[],null,null,null,M,f)),e.Na(1,114688,null,0,u,[c.a,m.c,p.c,a.a,o.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),d=l("vJMT"),C=l("fZRI");l.d(t,"PostPageModuleNgFactory",function(){return P});var P=e.La(i,[],function(n){return e.Va([e.Wa(512,e.j,e.Aa,[[8,[_]],[3,e.j],e.v]),e.Wa(4608,r.p,r.o,[e.s,[2,r.z]]),e.Wa(4608,p.m,p.s,[r.c,e.z,p.q]),e.Wa(4608,p.t,p.t,[p.m,p.r]),e.Wa(5120,p.a,function(n){return[n]},[p.t]),e.Wa(4608,p.p,p.p,[]),e.Wa(6144,p.n,null,[p.p]),e.Wa(4608,p.l,p.l,[p.n]),e.Wa(6144,p.b,null,[p.l]),e.Wa(4608,p.h,p.o,[p.b,e.p]),e.Wa(4608,p.c,p.c,[p.h]),e.Wa(4608,o.a,o.a,[p.c,a.a]),e.Wa(1073742336,r.b,r.b,[]),e.Wa(1073742336,c.q,c.q,[[2,c.v],[2,c.n]]),e.Wa(1073742336,p.e,p.e,[]),e.Wa(1073742336,p.d,p.d,[]),e.Wa(1073742336,d.a,d.a,[]),e.Wa(1073742336,C.a,C.a,[]),e.Wa(1073742336,i,i,[]),e.Wa(256,p.q,"XSRF-TOKEN",[]),e.Wa(256,p.r,"X-XSRF-TOKEN",[]),e.Wa(1024,c.l,function(){return[[{path:"",component:u,pathMatch:"full"}]]},[])])})},fWtw:function(n,t,l){"use strict";l.d(t,"a",function(){return e}),l("RHxm");var e=function(){function n(n){this.lang=n}return n.prototype.transform=function(n,t){return this.lang.t(n,t)},n}()}}]);