import{_ as an,a as ct,b as nn,c as rn,M as qt,d as on,e as sn}from"./GlobalModals-ab804653.js";import{b as ln}from"./modals-d7a04a0d.js";import{P as fn}from"./PinIcon-c7ef8019.js";import{L as un}from"./LeadsIcon-c20b834c.js";import{D as dt}from"./DealsIcon-edfc75e7.js";import{C as cn}from"./ContactsIcon-be56cb7e.js";import{O as mt}from"./OrganizationsIcon-abb93035.js";import{N as dn}from"./NoteModal-cf013950.js";import{T as mn}from"./TaskIcon-e05c593a.js";import{P as vn}from"./PhoneIcon-50a24fa5.js";import{N as pn,u as vt}from"./notifications-fa124b3f.js";import{aB as hn,i as G,C as Zt,e as $e,f as F,g as Pe,w as W,b as A,u as E,bk as gn,bl as pt,d as k,z as ht,c as B,F as Me,r as gt,n as bn,t as yn,bm as xn,bn as wn,k as Qt,L as Sn,m as An,a5 as kn,S as Pn}from"./index-9be148c1.js";import"./helpCenter-e0df14b5.js";import{m as ne}from"./DragVerticalIcon-b11b03f6.js";import"./users-893253d7.js";import"./settings-b02db803.js";import"./global-8a357439.js";import"./UserAvatar-6322bb55.js";import"./index-7fe01719.js";import"./ArrowUpRightIcon-c1b29ae9.js";import"./AvatarIcon-d410b2d9.js";import"./Link-0ca2c31d.js";import"./FieldLayout-7cef2568.js";import"./IndicatorIcon-2b12cda0.js";const _n={class:"relative z-10 flex h-full w-[260px] flex-col justify-between border-r bg-surface-menu-bar transition-all duration-300 ease-in-out"},In={class:"flex-1 overflow-y-auto"},On={class:"mb-3 flex flex-col"},Cn=["onClick"],En={class:"flex flex-col"},Nn={__name:"MobileSidebar",setup(e){const{getPinnedViews:t,getPublicViews:a}=hn(),n=[{label:"Home",icon:nn,to:"Dashboard"},{label:"Garden",icon:rn,to:"Leads"},{label:"Organizations",icon:mt,to:"Organizations"},{label:"Tasks",icon:mn,to:"Tasks"},{label:"Reports",icon:dt,to:"Reports"},{label:"Rose Chat",icon:qt,to:"Chat"}],r=G(()=>{let s=[{name:"All Views",hideLabel:!0,opened:!0,views:n}];return a().length&&s.push({name:"Public views",opened:!0,views:i(a())}),t().length&&s.push({name:"Pinned views",opened:!0,views:i(t())}),s});function i(s){return s.map(l=>({label:l.label,icon:o(l.route_name,l.icon),to:{name:l.route_name,params:{viewType:l.type||"list"},query:{view:l.name}}}))}function o(s,l){if(l)return Zt("div",{class:"size-auto"},l);switch(s){case"Leads":return un;case"Deals":return dt;case"Contacts":return cn;case"Organizations":return mt;case"Notes":return dn;case"Call Logs":return vn;default:return fn}}return(s,l)=>{const u=$e("Badge"),d=$e("FeatherIcon");return F(),Pe(E(wn),{show:E(ne)},{default:W(()=>[A(E(gn),{as:"div",onClose:l[0]||(l[0]=c=>ne.value=!1),class:"fixed inset-0 z-40"},{default:W(()=>[A(E(pt),{as:"template",enter:"transition ease-in-out duration-200 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-200 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:W(()=>[k("div",_n,[k("div",null,[A(an,{class:"p-2",isCollapsed:!E(ne)},null,8,["isCollapsed"])]),k("div",In,[k("div",On,[A(ct,{id:"notifications-btn",label:s.__("Notifications"),icon:pn,to:{name:"Notifications"},class:"relative mx-2 my-0.5"},{right:W(()=>[E(vt)?(F(),Pe(u,{key:0,label:E(vt),variant:"subtle"},null,8,["label"])):ht("",!0)]),_:1},8,["label"])]),(F(!0),B(Me,null,gt(r.value,c=>(F(),B("div",{key:c.label},[A(ln,{label:c.name,hideLabel:c.hideLabel,opened:c.opened},{header:W(({opened:g,hide:h,toggle:S})=>[h?ht("",!0):(F(),B("div",{key:0,class:"ml-2 mt-4 flex h-7 w-auto cursor-pointer gap-1.5 px-1 text-base font-medium text-ink-gray-5 opacity-100 transition-all duration-300 ease-in-out",onClick:y=>S()},[A(d,{name:"chevron-right",class:bn(["h-4 text-ink-gray-9 transition-all duration-300 ease-in-out",{"rotate-90":g}])},null,8,["class"]),k("span",null,yn(s.__(c.name)),1)],8,Cn))]),default:W(()=>[k("nav",En,[(F(!0),B(Me,null,gt(c.views,g=>(F(),Pe(ct,{icon:g.icon,label:s.__(g.label),to:g.to,class:"mx-2 my-0.5"},null,8,["icon","label","to"]))),256))])]),_:2},1032,["label","hideLabel","opened"])]))),128))])])]),_:1}),A(E(pt),{as:"template",enter:"transition-opacity ease-linear duration-200","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:W(()=>[A(E(xn),{class:"fixed inset-0 bg-gray-600 bg-opacity-50"})]),_:1})]),_:1})]),_:1},8,["show"])}}},Fn={},jn={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function Tn(e,t){return F(),B("svg",jn,t[0]||(t[0]=[k("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.5 3.2002C2.5 2.92405 2.72386 2.7002 3 2.7002H13C13.2761 2.7002 13.5 2.92405 13.5 3.2002C13.5 3.47634 13.2761 3.7002 13 3.7002H3C2.72386 3.7002 2.5 3.47634 2.5 3.2002ZM2.5 8.00024C2.5 7.7241 2.72386 7.50024 3 7.50024H13C13.2761 7.50024 13.5 7.7241 13.5 8.00024C13.5 8.27639 13.2761 8.50024 13 8.50024H3C2.72386 8.50024 2.5 8.27639 2.5 8.00024ZM3 12.3003C2.72386 12.3003 2.5 12.5242 2.5 12.8003C2.5 13.0764 2.72386 13.3003 3 13.3003H13C13.2761 13.3003 13.5 13.0764 13.5 12.8003C13.5 12.5242 13.2761 12.3003 13 12.3003H3Z",fill:"currentColor"},null,-1)]))}const $n=Qt(Fn,[["render",Tn]]),Mn={class:"flex pr-3"},zn={class:"z-20 ml-2 flex items-center justify-center"},Ln={__name:"MobileAppHeader",setup(e){return(t,a)=>{const n=$e("Button");return F(),B(Me,null,[k("div",Mn,[k("div",zn,[A(n,{class:"size-7",variant:"ghosted",onClick:a[0]||(a[0]=r=>ne.value=!E(ne))},{default:W(()=>[A($n,{class:"h-4 text-ink-gray-9"})]),_:1})]),a[1]||(a[1]=k("div",{id:"app-header",class:"flex-1"},null,-1))]),A(on,{class:"mr-3 mt-2"})],64)}}};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function Dn(e){if(Array.isArray(e))return e}function Rn(e){if(Array.isArray(e))return ze(e)}function Wn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bt(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ea(n.key),n)}}function Bn(e,t,a){return t&&bt(e.prototype,t),a&&bt(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Qe(e))||t&&e&&typeof e.length=="number"){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function b(e,t,a){return(t=ea(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Yn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hn(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=i.call(a)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?yt(Object(a),!0).forEach(function(n){b(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):yt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function ye(e,t){return Dn(e)||Hn(e,t)||Qe(e,t)||Un()}function T(e){return Rn(e)||Yn(e)||Qe(e)||Gn()}function Vn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ea(e){var t=Vn(e,"string");return typeof t=="symbol"?t:t+""}function pe(e){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pe(e)}function Qe(e,t){if(e){if(typeof e=="string")return ze(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ze(e,t):void 0}}var xt=function(){},et={},ta={},aa=null,na={mark:xt,measure:xt};try{typeof window<"u"&&(et=window),typeof document<"u"&&(ta=document),typeof MutationObserver<"u"&&(aa=MutationObserver),typeof performance<"u"&&(na=performance)}catch{}var Kn=et.navigator||{},wt=Kn.userAgent,St=wt===void 0?"":wt,Y=et,x=ta,At=aa,ue=na;Y.document;var D=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",ra=~St.indexOf("MSIE")||~St.indexOf("Trident/"),_e,Xn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Jn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,ia={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],_="classic",se="duotone",sa="sharp",la="sharp-duotone",fa="chisel",ua="etch",ca="jelly",da="jelly-duo",ma="jelly-fill",va="notdog",pa="notdog-duo",ha="slab",ga="slab-press",ba="thumbprint",ya="whiteboard",Zn="Classic",Qn="Duotone",er="Sharp",tr="Sharp Duotone",ar="Chisel",nr="Etch",rr="Jelly",ir="Jelly Duo",or="Jelly Fill",sr="Notdog",lr="Notdog Duo",fr="Slab",ur="Slab Press",cr="Thumbprint",dr="Whiteboard",xa=[_,se,sa,la,fa,ua,ca,da,ma,va,pa,ha,ga,ba,ya];_e={},b(b(b(b(b(b(b(b(b(b(_e,_,Zn),se,Qn),sa,er),la,tr),fa,ar),ua,nr),ca,rr),da,ir),ma,or),va,sr),b(b(b(b(b(_e,pa,lr),ha,fr),ga,ur),ba,cr),ya,dr);var mr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},vr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},pr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),hr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},wa=["fak","fa-kit","fakd","fa-kit-duotone"],kt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},gr=["kit"],br="kit",yr="kit-duotone",xr="Kit",wr="Kit Duotone";b(b({},br,xr),yr,wr);var Sr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ar={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},kr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Pt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ie,ce={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],_r="classic",Ir="duotone",Or="sharp",Cr="sharp-duotone",Er="chisel",Nr="etch",Fr="jelly",jr="jelly-duo",Tr="jelly-fill",$r="notdog",Mr="notdog-duo",zr="slab",Lr="slab-press",Dr="thumbprint",Rr="whiteboard",Wr="Classic",Br="Duotone",Yr="Sharp",Hr="Sharp Duotone",Ur="Chisel",Gr="Etch",Vr="Jelly",Kr="Jelly Duo",Xr="Jelly Fill",Jr="Notdog",qr="Notdog Duo",Zr="Slab",Qr="Slab Press",ei="Thumbprint",ti="Whiteboard";Ie={},b(b(b(b(b(b(b(b(b(b(Ie,_r,Wr),Ir,Br),Or,Yr),Cr,Hr),Er,Ur),Nr,Gr),Fr,Vr),jr,Kr),Tr,Xr),$r,Jr),b(b(b(b(b(Ie,Mr,qr),zr,Zr),Lr,Qr),Dr,ei),Rr,ti);var ai="kit",ni="kit-duotone",ri="Kit",ii="Kit Duotone";b(b({},ai,ri),ni,ii);var oi={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},si={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Le={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},li=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Sa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Pr,li),fi=["solid","regular","light","thin","duotone","brands","semibold"],Aa=[1,2,3,4,5,6,7,8,9,10],ui=Aa.concat([11,12,13,14,15,16,17,18,19,20]),ci=["aw","fw","pull-left","pull-right"],di=[].concat(T(Object.keys(si)),fi,ci,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ce.GROUP,ce.SWAP_OPACITY,ce.PRIMARY,ce.SECONDARY]).concat(Aa.map(function(e){return"".concat(e,"x")})).concat(ui.map(function(e){return"w-".concat(e)})),mi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},z="___FONT_AWESOME___",De=16,ka="fa",Pa="svg-inline--fa",K="data-fa-i2svg",Re="data-fa-pseudo-element",vi="data-fa-pseudo-element-pending",tt="data-prefix",at="data-icon",_t="fontawesome-i2svg",pi="async",hi=["HTML","HEAD","STYLE","SCRIPT"],_a=["::before","::after",":before",":after"],Ia=function(){try{return!0}catch{return!1}}();function le(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[_]}})}var Oa=f({},ia);Oa[_]=f(f(f(f({},{"fa-duotone":"duotone"}),ia[_]),kt.kit),kt["kit-duotone"]);var gi=le(Oa),We=f({},hr);We[_]=f(f(f(f({},{duotone:"fad"}),We[_]),Pt.kit),Pt["kit-duotone"]);var It=le(We),Be=f({},Le);Be[_]=f(f({},Be[_]),kr.kit);var nt=le(Be),Ye=f({},oi);Ye[_]=f(f({},Ye[_]),Sr.kit);le(Ye);var bi=Xn,Ca="fa-layers-text",yi=Jn,xi=f({},mr);le(xi);var wi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Oe=qn,Si=[].concat(T(gr),T(di)),re=Y.FontAwesomeConfig||{};function Ai(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ki(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Pi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pi.forEach(function(e){var t=ye(e,2),a=t[0],n=t[1],r=ki(Ai(a));r!=null&&(re[n]=r)})}var Ea={styleDefault:"solid",familyDefault:_,cssPrefix:ka,replacementClass:Pa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};re.familyPrefix&&(re.cssPrefix=re.familyPrefix);var Q=f(f({},Ea),re);Q.autoReplaceSvg||(Q.observeMutations=!1);var v={};Object.keys(Ea).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(a){Q[e]=a,ie.forEach(function(n){return n(v)})},get:function(){return Q[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){Q.cssPrefix=t,ie.forEach(function(a){return a(v)})},get:function(){return Q.cssPrefix}});Y.FontAwesomeConfig=v;var ie=[];function _i(e){return ie.push(e),function(){ie.splice(ie.indexOf(e),1)}}var R=De,$={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ii(e){if(!(!e||!D)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=x.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return x.head.insertBefore(t,n),e}}var Oi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ot(){for(var e=12,t="";e-- >0;)t+=Oi[Math.random()*62|0];return t}function ee(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function rt(e){return e.classList?ee(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Na(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ci(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Na(e[a]),'" ')},"").trim()}function xe(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function it(e){return e.size!==$.size||e.x!==$.x||e.y!==$.y||e.rotate!==$.rotate||e.flipX||e.flipY}function Ei(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Ni(e){var t=e.transform,a=e.width,n=a===void 0?De:a,r=e.height,i=r===void 0?De:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ra?l+="translate(".concat(t.x/R-n/2,"em, ").concat(t.y/R-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/R,"em), calc(-50% + ").concat(t.y/R,"em)) "):l+="translate(".concat(t.x/R,"em, ").concat(t.y/R,"em) "),l+="scale(".concat(t.size/R*(t.flipX?-1:1),", ").concat(t.size/R*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Fi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Fa(){var e=ka,t=Pa,a=v.cssPrefix,n=v.replacementClass,r=Fi;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var Ct=!1;function Ce(){v.autoAddCss&&!Ct&&(Ii(Fa()),Ct=!0)}var ji={mixout:function(){return{dom:{css:Fa,insertCss:Ce}}},hooks:function(){return{beforeDOMElementCreation:function(){Ce()},beforeI2svg:function(){Ce()}}}},L=Y||{};L[z]||(L[z]={});L[z].styles||(L[z].styles={});L[z].hooks||(L[z].hooks={});L[z].shims||(L[z].shims=[]);var j=L[z],ja=[],Ta=function(){x.removeEventListener("DOMContentLoaded",Ta),he=1,ja.map(function(t){return t()})},he=!1;D&&(he=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),he||x.addEventListener("DOMContentLoaded",Ta));function Ti(e){D&&(he?setTimeout(e,0):ja.push(e))}function fe(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Na(e):"<".concat(t," ").concat(Ci(n),">").concat(i.map(fe).join(""),"</").concat(t,">")}function Et(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var $i=function(t,a){return function(n,r,i,o){return t.call(a,n,r,i,o)}},Ee=function(t,a,n,r){var i=Object.keys(t),o=i.length,s=r!==void 0?$i(a,r):a,l,u,d;for(n===void 0?(l=1,d=t[i[0]]):(l=0,d=n);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function $a(e){return T(e).length!==1?null:e.codePointAt(0).toString(16)}function Nt(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function He(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=Nt(t);typeof j.hooks.addPack=="function"&&!r?j.hooks.addPack(e,Nt(t)):j.styles[e]=f(f({},j.styles[e]||{}),i),e==="fas"&&He("fa",t)}var oe=j.styles,Mi=j.shims,Ma=Object.keys(nt),zi=Ma.reduce(function(e,t){return e[t]=Object.keys(nt[t]),e},{}),ot=null,za={},La={},Da={},Ra={},Wa={};function Li(e){return~Si.indexOf(e)}function Di(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!Li(r)?r:null}var Ba=function(){var t=function(i){return Ee(oe,function(o,s,l){return o[l]=Ee(s,i,{}),o},{})};za=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),La=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Wa=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var a="far"in oe||v.autoFetchSvg,n=Ee(Mi,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Da=n.names,Ra=n.unicodes,ot=we(v.styleDefault,{family:v.familyDefault})};_i(function(e){ot=we(e.styleDefault,{family:v.familyDefault})});Ba();function st(e,t){return(za[e]||{})[t]}function Ri(e,t){return(La[e]||{})[t]}function V(e,t){return(Wa[e]||{})[t]}function Ya(e){return Da[e]||{prefix:null,iconName:null}}function Wi(e){var t=Ra[e],a=st("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function H(){return ot}var Ha=function(){return{prefix:null,iconName:null,rest:[]}};function Bi(e){var t=_,a=Ma.reduce(function(n,r){return n[r]="".concat(v.cssPrefix,"-").concat(r),n},{});return xa.forEach(function(n){(e.includes(a[n])||e.some(function(r){return zi[n].includes(r)}))&&(t=n)}),t}function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?_:a,r=gi[n][e];if(n===se&&!e)return"fad";var i=It[n][e]||It[n][r],o=e in j.styles?e:null,s=i||o||null;return s}function Yi(e){var t=[],a=null;return e.forEach(function(n){var r=Di(v.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function Ft(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var jt=Sa.concat(wa);function Se(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,i=Ft(e.filter(function(h){return jt.includes(h)})),o=Ft(e.filter(function(h){return!jt.includes(h)})),s=i.filter(function(h){return r=h,!oa.includes(h)}),l=ye(s,1),u=l[0],d=u===void 0?null:u,c=Bi(i),g=f(f({},Yi(o)),{},{prefix:we(d,{family:c})});return f(f(f({},g),Vi({values:e,family:c,styles:oe,config:v,canonical:g,givenPrefix:r})),Hi(n,r,g))}function Hi(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var i=t==="fa"?Ya(r):{},o=V(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!oe.far&&oe.fas&&!v.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var Ui=xa.filter(function(e){return e!==_||e!==se}),Gi=Object.keys(Le).filter(function(e){return e!==_}).map(function(e){return Object.keys(Le[e])}).flat();function Vi(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,d=a===se,c=t.includes("fa-duotone")||t.includes("fad"),g=u.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!d&&(c||g||h)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Ui.includes(a)){var S=Object.keys(s).find(function(P){return Gi.includes(P)});if(S||u.autoFetchSvg){var y=pr.get(a).defaultShortPrefixId;n.prefix=y,n.iconName=V(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=H()||"fas"),n}var Ki=function(){function e(){Wn(this,e),this.definitions={}}return Bn(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),He(s,o[s]);var l=nt[_][s];l&&He(l,o[s]),Ba()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])}(),Tt=[],q={},Z={},Xi=Object.keys(Z);function Ji(e,t){var a=t.mixoutsTo;return Tt=e,q={},Object.keys(Z).forEach(function(n){Xi.indexOf(n)===-1&&delete Z[n]}),Tt.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),pe(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}n.provides&&n.provides(Z)}),a}function Ue(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=q[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function X(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=q[e]||[];r.forEach(function(i){i.apply(null,a)})}function U(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Z[e]?Z[e].apply(null,t):void 0}function Ge(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||H();if(t)return t=V(a,t)||t,Et(Ua.definitions,a,t)||Et(j.styles,a,t)}var Ua=new Ki,qi=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,X("noAuto")},Zi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(X("beforeI2svg",t),U("pseudoElements2svg",t),U("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Ti(function(){eo({autoReplaceSvgRoot:a}),X("watch",t)})}},Qi={icon:function(t){if(t===null)return null;if(pe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:V(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=we(t[0]);return{prefix:n,iconName:V(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(bi))){var r=Se(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:V(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=H();return{prefix:i,iconName:V(i,t)||t}}}},N={noAuto:qi,config:v,dom:Zi,parse:Qi,library:Ua,findIconDefinition:Ge,toHtml:fe},eo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?x:a;(Object.keys(j.styles).length>0||v.autoFetchSvg)&&D&&v.autoReplaceSvg&&N.dom.i2svg({node:n})};function Ae(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return fe(n)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var n=x.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function to(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(it(o)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=xe(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ao(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:n}]}]}function no(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function lt(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,d=e.watchable,c=d===void 0?!1:d,g=n.found?n:a,h=g.width,S=g.height,y=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(C){return u.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(u.classes).join(" "),P={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(S)})};!no(u.attributes)&&!u.attributes["aria-hidden"]&&(P.attributes["aria-hidden"]="true"),c&&(P.attributes[K]="");var m=f(f({},P),{},{prefix:r,iconName:i,main:a,mask:n,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),p=n.found&&a.found?U("generateAbstractMask",m)||{children:[],attributes:{}}:U("generateAbstractIcon",m)||{children:[],attributes:{}},w=p.children,I=p.attributes;return m.children=w,m.attributes=I,s?ao(m):to(m)}function $t(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[K]="");var u=f({},i.styles);it(r)&&(u.transform=Ni({transform:r,startCentered:!0,width:a,height:n}),u["-webkit-transform"]=u.transform);var d=xe(u);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function ro(e){var t=e.content,a=e.extra,n=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=xe(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[t]}),i}var Ne=j.styles;function Ve(e){var t=e[0],a=e[1],n=e.slice(4),r=ye(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Oe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Oe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var io={found:!1,width:512,height:512};function oo(e,t){!Ia&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ke(e,t){var a=t;return t==="fa"&&v.styleDefault!==null&&(t=H()),new Promise(function(n,r){if(a==="fa"){var i=Ya(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ne[t]&&Ne[t][e]){var o=Ne[t][e];return n(Ve(o))}oo(e,t),n(f(f({},io),{},{icon:v.showMissingIcons&&e?U("missingIconAbstract")||{}:{}}))})}var Mt=function(){},Xe=v.measurePerformance&&ue&&ue.mark&&ue.measure?ue:{mark:Mt,measure:Mt},ae='FA "7.0.1"',so=function(t){return Xe.mark("".concat(ae," ").concat(t," begins")),function(){return Ga(t)}},Ga=function(t){Xe.mark("".concat(ae," ").concat(t," ends")),Xe.measure("".concat(ae," ").concat(t),"".concat(ae," ").concat(t," begins"),"".concat(ae," ").concat(t," ends"))},ft={begin:so,end:Ga},me=function(){};function zt(e){var t=e.getAttribute?e.getAttribute(K):null;return typeof t=="string"}function lo(e){var t=e.getAttribute?e.getAttribute(tt):null,a=e.getAttribute?e.getAttribute(at):null;return t&&a}function fo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function uo(){if(v.autoReplaceSvg===!0)return ve.replace;var e=ve[v.autoReplaceSvg];return e||ve.replace}function co(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function mo(e){return x.createElement(e)}function Va(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?co:mo:a;if(typeof e=="string")return x.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Va(o,{ceFn:n}))}),r}function vo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ve={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Va(r),a)}),a.getAttribute(K)===null&&v.keepOriginalSource){var n=x.createComment(vo(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~rt(a).indexOf(v.replacementClass))return ve.replace(t);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return fe(s)}).join(`
`);a.setAttribute(K,""),a.innerHTML=o}};function Lt(e){e()}function Ka(e,t){var a=typeof t=="function"?t:me;if(e.length===0)a();else{var n=Lt;v.mutateApproach===pi&&(n=Y.requestAnimationFrame||Lt),n(function(){var r=uo(),i=ft.begin("mutate");e.map(r),i(),a()})}}var ut=!1;function Xa(){ut=!0}function Je(){ut=!1}var ge=null;function Dt(e){if(At&&v.observeMutations){var t=e.treeCallback,a=t===void 0?me:t,n=e.nodeCallback,r=n===void 0?me:n,i=e.pseudoElementsCallback,o=i===void 0?me:i,s=e.observeMutationsRoot,l=s===void 0?x:s;ge=new At(function(u){if(!ut){var d=H();ee(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!zt(c.addedNodes[0])&&(v.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&v.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&zt(c.target)&&~wi.indexOf(c.attributeName))if(c.attributeName==="class"&&lo(c.target)){var g=Se(rt(c.target)),h=g.prefix,S=g.iconName;c.target.setAttribute(tt,h||d),S&&c.target.setAttribute(at,S)}else fo(c.target)&&r(c.target)})}}),D&&ge.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function po(){ge&&ge.disconnect()}function ho(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function go(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=Se(rt(e));return r.prefix||(r.prefix=H()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Ri(r.prefix,e.innerText)||st(r.prefix,$a(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function bo(e){var t=ee(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function yo(){return{iconName:null,prefix:null,transform:$,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=go(e),n=a.iconName,r=a.prefix,i=a.rest,o=bo(e),s=Ue("parseNodeAttributes",{},e),l=t.styleParser?ho(e):[];return f({iconName:n,prefix:r,transform:$,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var xo=j.styles;function Ja(e){var t=v.autoReplaceSvg==="nest"?Rt(e,{styleParser:!1}):Rt(e);return~t.extra.classes.indexOf(Ca)?U("generateLayersText",e,t):U("generateSvgReplacementMutation",e,t)}function wo(){return[].concat(T(wa),T(Sa))}function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var a=x.documentElement.classList,n=function(c){return a.add("".concat(_t,"-").concat(c))},r=function(c){return a.remove("".concat(_t,"-").concat(c))},i=v.autoFetchSvg?wo():oa.concat(Object.keys(xo));i.includes("fa")||i.push("fa");var o=[".".concat(Ca,":not([").concat(K,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ee(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=ft.begin("onTree"),u=s.reduce(function(d,c){try{var g=Ja(c);g&&d.push(g)}catch(h){Ia||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(g){Ka(g,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),c(g)})})}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ja(e).then(function(a){a&&Ka([a],t)})}function Ao(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Ge(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ge(r||{})),e(n,f(f({},a),{},{mask:r}))}}var ko=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?$:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,d=u===void 0?null:u,c=a.classes,g=c===void 0?[]:c,h=a.attributes,S=h===void 0?{}:h,y=a.styles,P=y===void 0?{}:y;if(t){var m=t.prefix,p=t.iconName,w=t.icon;return Ae(f({type:"icon"},t),function(){return X("beforeDOMElementCreation",{iconDefinition:t,params:a}),lt({icons:{main:Ve(w),mask:l?Ve(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:f(f({},$),r),symbol:o,maskId:d,extra:{attributes:S,styles:P,classes:g}})})}},Po={mixout:function(){return{icon:Ao(ko)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Wt,a.nodeCallback=So,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?x:n,i=a.callback,o=i===void 0?function(){}:i;return Wt(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,u=n.maskId,d=n.extra;return new Promise(function(c,g){Promise.all([Ke(r,i),l.iconName?Ke(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var S=ye(h,2),y=S[0],P=S[1];c([a,lt({icons:{main:y,mask:P},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,l=xe(s);l.length>0&&(r.style=l);var u;return it(o)&&(u=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},_o={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return Ae({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(T(i)).join(" ")},children:o}]})}}}},Io={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,d=n.styles,c=d===void 0?{}:d;return Ae({type:"counter",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:n}),ro({content:a.toString(),title:i,extra:{attributes:u,styles:c,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(T(s))}})})}}}},Oo={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?$:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,d=n.styles,c=d===void 0?{}:d;return Ae({type:"text",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:n}),$t({content:a,transform:f(f({},$),i),extra:{attributes:u,styles:c,classes:["".concat(v.cssPrefix,"-layers-text")].concat(T(s))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,s=null;if(ra){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,$t({content:a.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},qa=new RegExp('"',"ug"),Bt=[1105920,1112319],Yt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),vr),mi),Ar),qe=Object.keys(Yt).reduce(function(e,t){return e[t.toLowerCase()]=Yt[t],e},{}),Co=Object.keys(qe).reduce(function(e,t){var a=qe[t];return e[t]=a[900]||T(Object.entries(a))[0][1],e},{});function Eo(e){var t=e.replace(qa,"");return $a(T(t)[0]||"")}function No(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(qa,""),r=n.codePointAt(0),i=r>=Bt[0]&&r<=Bt[1],o=n.length===2?n[0]===n[1]:!1;return i||o||t}function Fo(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(qe[a]||{})[r]||Co[a]}function Ht(e,t){var a="".concat(vi).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=ee(e.children),o=i.filter(function(J){return J.getAttribute(Re)===t})[0],s=Y.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(yi),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),n();if(u&&c!=="none"&&c!==""){var g=s.getPropertyValue("content"),h=Fo(l,d),S=Eo(g),y=u[0].startsWith("FontAwesome"),P=No(s),m=st(h,S),p=m;if(y){var w=Wi(S);w.iconName&&w.prefix&&(m=w.iconName,h=w.prefix)}if(m&&!P&&(!o||o.getAttribute(tt)!==h||o.getAttribute(at)!==p)){e.setAttribute(a,p),o&&e.removeChild(o);var I=yo(),C=I.extra;C.attributes[Re]=t,Ke(m,h).then(function(J){var te=lt(f(f({},I),{},{icons:{main:J,mask:Ha()},prefix:h,iconName:p,extra:C,watchable:!0})),ke=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=te.map(function(tn){return fe(tn)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function jo(e){return Promise.all([Ht(e,"::before"),Ht(e,"::after")])}function To(e){return e.parentNode!==document.head&&!~hi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Re)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var $o=function(t){return!!t&&_a.some(function(a){return t.includes(a)})},Mo=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=de(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if($o(o)){var s=_a.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function Ut(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D){var a;if(t)a=e;else if(v.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=de(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=de(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=Mo(u.selectorText),c=de(d),g;try{for(c.s();!(g=c.n()).done;){var h=g.value;n.add(h)}}catch(y){c.e(y)}finally{c.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){v.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){r.e(y)}finally{r.f()}if(!n.size)return;var S=Array.from(n).join(", ");try{a=e.querySelectorAll(S)}catch{}}return new Promise(function(y,P){var m=ee(a).filter(To).map(jo),p=ft.begin("searchPseudoElements");Xa(),Promise.all(m).then(function(){p(),Je(),y()}).catch(function(){p(),Je(),P()})})}}var zo={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ut,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?x:n;v.searchPseudoElements&&Ut(r)}}},Gt=!1,Lo={mixout:function(){return{dom:{unwatch:function(){Xa(),Gt=!0}}}},hooks:function(){return{bootstrap:function(){Dt(Ue("mutationObserverCallbacks",{}))},noAuto:function(){po()},watch:function(a){var n=a.observeMutationsRoot;Gt?Je():Dt(Ue("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Vt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},Do={mixout:function(){return{parse:{transform:function(a){return Vt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Vt(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:g};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),h.path)}]}]}}}},Fe={x:0,y:0,width:"100%",height:"100%"};function Kt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ro(e){return e.tag==="g"?e.children:[e]}var Wo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?Se(r.split(" ").map(function(o){return o.trim()})):Ha();return i.prefix||(i.prefix=H()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,d=i.icon,c=o.width,g=o.icon,h=Ei({transform:l,containerWidth:c,iconWidth:u}),S={tag:"rect",attributes:f(f({},Fe),{},{fill:"white"})},y=d.children?{children:d.children.map(Kt)}:{},P={tag:"g",attributes:f({},h.inner),children:[Kt(f({tag:d.tag,attributes:f(f({},d.attributes),h.path)},y))]},m={tag:"g",attributes:f({},h.outer),children:[P]},p="mask-".concat(s||Ot()),w="clip-".concat(s||Ot()),I={tag:"mask",attributes:f(f({},Fe),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Ro(g)},I]};return n.push(C,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(p,")")},Fe)}),{children:n,attributes:r}}}},Bo={provides:function(t){var a=!1;Y.matchMedia&&(a=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Yo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Ho=[ji,Po,_o,Io,Oo,zo,Lo,Do,Wo,Bo,Yo];Ji(Ho,{mixoutsTo:N});N.noAuto;N.config;var Uo=N.library;N.dom;var Ze=N.parse;N.findIconDefinition;N.toHtml;var Go=N.icon;N.layer;N.text;N.counter;/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Vo={prefix:"fas",iconName:"seedling",icon:[512,512,[127793,"sprout"],"f4d8","M512 32C512 140.1 435.4 230.3 333.6 251.4 325.7 193.3 299.6 141 261.1 100.5 301.2 40 369.9 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"]},Ko={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},Xo={prefix:"fas",iconName:"atom",icon:[448,512,[9883],"f5d2","M224 398.8c-11.8 5.1-23.4 9.7-34.9 13.5 16.7 33.8 31 35.7 34.9 35.7s18.1-1.9 34.9-35.7c-11.4-3.9-23.1-8.4-34.9-13.5zM414 256c33 45.2 44.3 90.9 23.6 128-20.2 36.3-62.5 49.3-115.2 43.2-22 52.1-55.7 84.8-98.4 84.8s-76.4-32.7-98.4-84.8C72.9 433.3 30.6 420.3 10.4 384-10.3 346.9 1 301.2 34 256 1 210.8-10.3 165.1 10.4 128 30.6 91.7 72.9 78.7 125.6 84.8 147.6 32.7 181.2 0 224 0s76.4 32.7 98.4 84.8c52.7-6.1 95 6.8 115.2 43.2 20.7 37.1 9.4 82.8-23.6 128zm-65.8 67.4c-1.7 14.2-3.9 28-6.7 41.2 31.8 1.4 38.6-8.7 40.2-11.7 2.3-4.2 7-17.9-11.9-48.1-6.8 6.3-14 12.5-21.6 18.6zm-6.7-175.9c2.8 13.1 5 26.9 6.7 41.2 7.6 6.1 14.8 12.3 21.6 18.6 18.9-30.2 14.2-44 11.9-48.1-1.6-2.9-8.4-13-40.2-11.7zM258.9 99.7C242.1 65.9 227.9 64 224 64s-18.1 1.9-34.9 35.7c11.4 3.9 23.1 8.4 34.9 13.5 11.8-5.1 23.4-9.7 34.9-13.5zm-159 88.9c1.7-14.3 3.9-28 6.7-41.2-31.8-1.4-38.6 8.7-40.2 11.7-2.3 4.2-7 17.9 11.9 48.1 6.8-6.3 14-12.5 21.6-18.6zM78.2 304.8c-18.9 30.2-14.2 44-11.9 48.1 1.6 2.9 8.4 13 40.2 11.7-2.8-13.1-5-26.9-6.7-41.2-7.6-6.1-14.8-12.3-21.6-18.6zM304 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};function O(e,t,a){return(t=Qo(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Xt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Xt(Object(a),!0).forEach(function(n){O(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Xt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Jo(e,t){if(e==null)return{};var a,n,r=qo(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function qo(e,t){if(e==null)return{};var a={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;a[n]=e[n]}return a}function Zo(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qo(e){var t=Zo(e,"string");return typeof t=="symbol"?t:t+""}function be(e){"@babel/helpers - typeof";return be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},be(e)}function je(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?O({},e,t):{}}function es(e){var t,a=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},O(O(O(O(O(O(O(O(O(O(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),O(O(O(O(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto));return Object.keys(a).map(function(n){return a[n]?n:null}).filter(function(n){return n})}var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Za={exports:{}};(function(e){(function(t){var a=function(m,p,w){if(!u(p)||c(p)||g(p)||h(p)||l(p))return p;var I,C=0,J=0;if(d(p))for(I=[],J=p.length;C<J;C++)I.push(a(m,p[C],w));else{I={};for(var te in p)Object.prototype.hasOwnProperty.call(p,te)&&(I[m(te,w)]=a(m,p[te],w))}return I},n=function(m,p){p=p||{};var w=p.separator||"_",I=p.split||/(?=[A-Z])/;return m.split(I).join(w)},r=function(m){return S(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(p,w){return w?w.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var p=r(m);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(m,p){return n(m,p).toLowerCase()},s=Object.prototype.toString,l=function(m){return typeof m=="function"},u=function(m){return m===Object(m)},d=function(m){return s.call(m)=="[object Array]"},c=function(m){return s.call(m)=="[object Date]"},g=function(m){return s.call(m)=="[object RegExp]"},h=function(m){return s.call(m)=="[object Boolean]"},S=function(m){return m=m-0,m===m},y=function(m,p){var w=p&&"process"in p?p.process:p;return typeof w!="function"?m:function(I,C){return w(I,m,C)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(m,p){return a(y(r,p),m)},decamelizeKeys:function(m,p){return a(y(o,p),m,p)},pascalizeKeys:function(m,p){return a(y(i,p),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(ts)})(Za);var as=Za.exports,ns=["class","style"];function rs(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var n=a.indexOf(":"),r=as.camelize(a.slice(0,n)),i=a.slice(n+1).trim();return t[r]=i,t},{})}function is(e){return e.split(/\s+/).reduce(function(t,a){return t[a]=!0,t},{})}function Qa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(l){return Qa(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=is(d);break;case"style":l.style=rs(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});a.class;var i=a.style,o=i===void 0?{}:i,s=Jo(a,ns);return Zt(e.tag,M(M(M({},t),{},{class:r.class,style:M(M({},r.style),o)},r.attrs),s),n)}var en=!1;try{en=!0}catch{}function os(){if(!en&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jt(e){if(e&&be(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ze.icon)return Ze.icon(e);if(e===null)return null;if(be(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Te=Sn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(t,a){var n=a.attrs,r=G(function(){return Jt(t.icon)}),i=G(function(){return je("classes",es(t))}),o=G(function(){return je("transform",typeof t.transform=="string"?Ze.transform(t.transform):t.transform)}),s=G(function(){return je("mask",Jt(t.mask))}),l=G(function(){var d=M(M(M(M({},i.value),o.value),s.value),{},{symbol:t.symbol,maskId:t.maskId});return d.title=t.title,d.titleId=t.titleId,Go(r.value,d)});An(l,function(d){if(!d)return os("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=G(function(){return l.value?Qa(l.value.abstract[0],{},n):null});return function(){return u.value}}});const ss={class:"bottom-nav"},ls={__name:"BottomNav",setup(e){Uo.add(Xo,Ko,Vo);const t=kn();function a(n){t.push({name:n})}return(n,r)=>(F(),B("nav",ss,[k("button",{onClick:r[0]||(r[0]=i=>a("Dashboard"))},[A(E(Te),{icon:["fas","house"],class:"nav-icon"}),r[4]||(r[4]=k("span",null,"Home",-1))]),k("button",{onClick:r[1]||(r[1]=i=>a("Tasks"))},[A(E(Te),{icon:["fas","atom"],class:"nav-icon"}),r[5]||(r[5]=k("span",null,"Tasks",-1))]),k("button",{onClick:r[2]||(r[2]=i=>a("Leads"))},[A(E(Te),{icon:["fas","seedling"],class:"nav-icon"}),r[6]||(r[6]=k("span",null,"Seeds",-1))]),k("button",{onClick:r[3]||(r[3]=i=>a("Chat"))},[A(qt,{class:"nav-icon"}),r[7]||(r[7]=k("span",null,"Rose Chat",-1))])]))}},fs=Qt(ls,[["__scopeId","data-v-9b36e57a"]]),us={class:"flex h-screen w-screen"},cs={class:"flex h-full flex-1 flex-col overflow-auto bg-surface-white",style:{"padding-bottom":"120px"}},Ms={__name:"MobileLayout",setup(e){return(t,a)=>(F(),B("div",us,[A(Nn),k("div",cs,[A(Ln),Pn(t.$slots,"default")]),A(fs),A(sn)]))}};export{Ms as default};
//# sourceMappingURL=MobileLayout-5df81b8e.js.map
