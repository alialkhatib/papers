(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[101],{"65NJ":function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
n("w2hD")
i.a.fn.scrollToVisible=function(e){const t={}
const n=i()(e)
if(0===n.length)return
let a=n.offset(),r=n.outerWidth(),o=n.outerHeight(),s=a.top,l=s+o,c=a.left,d=c+r,u="html,body"==this.selector?i.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),g=this.outerHeight(),m=this.outerWidth()
if("html,body"!=this.selector){let e=i()("body").offset()
this.each((function(){try{e=i()(this).offset()
return false}catch(e){}}))
s-=e.top
l-=e.top
c-=e.left
d-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){g=i()(window).height()
i()("#wizard_box:visible").length>0&&(g-=i()("#wizard_box:visible").height())
m=i()(window).width()
s-=u
c-=h
l-=u
d-=h}s<0||g<o&&l>g?t.scrollTop=s+u:l>g&&(t.scrollTop=l+u-g+20)
c<0?t.scrollLeft=c+h:d>m&&(t.scrollLeft=d+h-m+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},B1bN:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n("ouhR")
var i=n.n(a)
const r="#easy_student_view"
const o={show(){i()(r).show()},hide(){i()(r).hide()}}},BrAc:function(e,t,n){"use strict"
var a=n("vDqi")
var i=n.n(a)
i.a.defaults.xsrfCookieName="_csrf_token"
i.a.defaults.xsrfHeaderName="X-CSRF-Token"
const r=i.a.defaults.headers.common.Accept
i.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+r
i.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=i.a},Ce78J:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var r=n("Y/W1")
var o=n.n(r)
var s=n("JiFB")
var l=n("ik22")
function c(e,t,n){const a={...n}
e.forEach(e=>{const i=t[e]
const r=n[e]
Array.isArray(i)&&Array.isArray(r)&&(a[e]=[...new Set(i.concat(r))])})
return a}function d(e,t,n,a,i){const r=new s["a"](i,l["a"],e,t)
const o={...r.defaultConfig()}
return{...o,...c(n.optionsToMerge||[],o,n.tinyOptions)}}var u=d
var h=n("FNQM")
const g={call(e,...t){if("exists?"===e)return true
return this[e](...t)},focus(){if(void 0!==tinymce){const e=tinymce.get(this.getTextarea().id)
e&&e.focus(true)}}}
const m={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const f={wrapEditor(e){const t={...g,...e}
return Object.assign(e,t)},wrapSidebar(e){const t={...m,...e}
return Object.assign(e,t)}}
var p=f
var b=n("eVns")
var _=n("stQK")
var v=n("TiZd")
const y={loadingPromise:null,preload(e){(window.requestIdleCallback||window.setTimeout)(()=>this.loadRCE(e))},loadOnTarget(e,t,n){const a=this.getTargetTextarea(e)
const i=this.getRenderingTarget(a,t.getRenderingTarget)
const r=this.createRCEProps(a,t)
this.loadRCE(e=>{e.renderIntoDiv(i,r,e=>{e.tinymceOn("init",()=>n(a,p.wrapEditor(e)))})})},loadingCallbacks:[],RCE:null,loadRCE(e=(()=>{})){return Promise.all([n.e(2),n.e(3),n.e(5),n.e(6),n.e(7),n.e(10),n.e(12),n.e(14),n.e(15),n.e(18),n.e(23),n.e(30),n.e(3748)]).then(n.bind(null,"j/Fk")).then(e=>{this.RCE=e
Object(h["a"])()
return e}).then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"===i()(e).get(0).type?i()(e).get(0):i()(e).find("textarea").get(0),getRenderingTarget(e,t){let n
n="undefined"===typeof t?i()(e).parent().get(0):t(e)
i()(n).addClass("ic-RichContentEditor")
return n},_attrsToMirror(e){const t=["name"]
const n=o.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return o.a.pick(n,t)},createRCEProps(e,t){var n,a,i
const r=e.offsetWidth
const o=e.offsetHeight||400
o&&(t.tinyOptions={height:o,...t.tinyOptions||{}})
const s=ENV.LOCALE
const l=Object.keys(_["a"]).map(e=>({id:e,label:_["a"][e]})).sort((e,t)=>e.id===s?-1:t.id===s?1:e.label.localeCompare(t.label,s))
const c={enabled:true,maxAge:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:u.bind(null,r,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:Object(b["a"])(),languages:l,liveRegion:()=>document.getElementById("flash_screenreader_holder"),ltiTools:null===(n=window.INST)||void 0===n?void 0:n.editorButtons,autosave:t.autosave||c,instRecordDisabled:ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,maxInitRenderedRCEs:t.maxInitRenderedRCEs,highContrastCSS:null===(a=window.ENV)||void 0===a?void 0:a.url_for_high_contrast_tinymce_editor_css,use_rce_buttons_and_icons:Object(v["b"])(v["a"].ButtonsAndIcons,window.ENV),use_rce_a11y_checker_notifications:!!(null!==(i=window.ENV)&&void 0!==i&&i.use_rce_a11y_checker_notifications)}}}
var w=y
var R=n("eodz")
function k(e,t,n){e.css("display","none")
const a=t.onFocus
t.onFocus=(...e)=>{a instanceof Function&&a(...e)}
w.loadOnTarget(e,t,(t,a)=>{const r=O(e)
const o=N(i()(t))
o.data("remoteEditor",a)
r.trigger(R["a"],a)
n&&n(a)})}function x(e){const t=O(e)
const n=t.attr("id")
const a="tinymce-parent-of-"+n
if(t.parent().attr("id")!==a)return t.wrap(`<div id='${a}' style='visibility: hidden'></div>`)}function C(){i()(".mce-resizehandle").attr("aria-hidden",true)}let E=0
function B(){return"random_editor_id_"+E++}function T(e){const t=i()(e)
const n="attr"in t?t.attr("id"):t.id
n&&""!=n||t.attr("id",B())}function N(e){const t=O(e)
const n=t.attr("id")
if(!n||""==n)return t
const a=i()("#"+n)
if(a.length<=0)return t
return a}const S={preloadRemoteModule:(e=(()=>{}))=>w.preload(e),loadNewEditor(e,t={},n){let a=O(e)
if(a.length<=0)return
T(a)
t=i.a.extend({},t)
const r=e=>{t.focus&&this.activateRCE(a)
n&&n(e)}
a=this.freshNode(a)
if(t.manageParent){delete t.manageParent
x(a)}k(a,t,r)
C()},callOnRCE(e,t,...n){let a=O(e)
a=this.freshNode(a)
return Object(R["d"])(a,t,...n)},destroyRCE(e){let t=O(e)
t=this.freshNode(t)
Object(R["b"])(t)},closeRCE(e){this.callOnRCE(e,"RCEClosed")},activateRCE(e){let t=O(e)
t=this.freshNode(t)
Object(R["c"])(t)},freshNode:N,ensureID:T,node2jquery:O}
function O(e){return e&&e.length?e:i()(e)}t["a"]=S},ErZx:function(e,t,n){"use strict"
const a={auto_focus:false,block_formats:void 0,body_class:"default-theme",content_css:[],directionality:"ltr",height:void 0,language:"en",menubar:void 0,menu:void 0,toolbar:void 0,plugins:void 0,branding:false,browser_spellcheck:true,content_style:void 0,convert_urls:false,font_formats:"Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",language_load:false,language_url:"none",toolbar_mode:"floating",toolbar_ticky:true,mobile:{theme:"silver"},preview_styles:"font-family font-size font-weight font-style text-decoration text-transform border border-radius outline text-shadow",remove_script_host:true,resize:true,skin:false,statusbar:false,valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class],strong/b,em/i,strike/s,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote[cite],-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,q[cite],samp,small,tt,var,big,figure,figcaption,source[media|sizes|src|srcset|type],track,mark,article,aside,details,footer,header,nav,section,summary,time",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],picture,ruby,rp,rt,wbrsvg[*],g[*],circle[*]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track ruby",target_list:false,link_title:false,default_link_target:"_blank"}
t["a"]=a},FNQM:function(e,t,n){"use strict"
n.d(t,"a",(function(){return C}))
var a=n("RtDj")
var i=n("HGxv")
var r=n("ouhR")
var o=n.n(r)
n("gI0r")
const s=Object(i["useScope"])("ExternalToolsPlugin")
const l=ENV.MAX_MRU_LTI_TOOLS||5
var c={buttonConfig(e,t){const n={title:e.name,classes:"widget btn instructure_external_tool_button"}
n.id=e.id
n.onAction=()=>{t.execCommand("instructureExternalButton"+e.id)
this.updateMRUList(e.id)
this.showHideButtons(t)}
n.description=e.description
n.favorite=e.favorite
n.image=e.icon_url
return n},showHideButtons(e){var t
const n=s.t("Apps")
const a=e.$(e.editorContainer.querySelector(`.tox-tbtn--select[aria-label="${n}"]`))
const i=e.$(e.editorContainer.querySelector(`.tox-tbtn[aria-label="${n}"]`))
if(null!==(t=window.localStorage)&&void 0!==t&&t.getItem("ltimru")){a.attr("aria-hidden","false")
i.attr("aria-hidden","true")
a.show()
i.hide()}else{a.attr("aria-hidden","true")
i.attr("aria-hidden","false")
a.hide()
i.show()}},updateMRUList(e){let t
try{var n
t=JSON.parse((null===(n=window.localStorage)||void 0===n?void 0:n.getItem("ltimru"))||"[]")}catch(e){console.log("Found bad LTI MRU data",e.message)}finally{Array.isArray(t)||(t=[])}try{if(!t.includes(e)){var a
t.unshift(e)
t.splice(l,t.length)
null===(a=window.localStorage)||void 0===a||a.setItem("ltimru",JSON.stringify(t))}}catch(e){console.log("Cannot save LTI MRU list",e.message)}}}
var d=n("dDTa")
n("q1tI")
var u=n("i8i4")
var h=n.n(u)
const g=Object(i["useScope"])("ExternalToolsPlugin")
const m={init(e,t,i){if(!i||!i.editorButtons||!i.editorButtons.length)return
let r={open:(...e)=>setTimeout(()=>r.open(...e),50)}
Promise.all([n.e(2),n.e(3),n.e(6),n.e(13),n.e(19),n.e(4137)]).then(n.bind(null,"PrO8")).then(({default:t})=>{const n=document.createElement("div")
document.body.appendChild(n)
h.a.render(Object(a["a"])(t,{win:window,editor:e,contextAssetString:ENV.context_asset_string,iframeAllowances:Object(d["a"])(),resourceSelectionUrl:o()("#context_external_tool_resource_selection_url").attr("href"),deepLinkingOrigin:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}),n,(function(){r=this}))})
const s=[]
for(let t=0;i.editorButtons&&t<i.editorButtons.length;t++){const n=i.editorButtons[t]
const a=()=>r.open(n)
s.push(c.buttonConfig(n,e))
e.addCommand("instructureExternalButton"+n.id,a)}if(s.length){b(e,s)
_(e,s)
v(e,s)
p(e,s)}}}
function f(e,t){if(!t.iconSVG&&t.image){const e=document.createElement("svg")
e.setAttribute("viewBox","0 0 16 16")
e.setAttribute("version","1.1")
e.setAttribute("xmlns","http://www.w3.org/2000/svg")
const n=document.createElement("image")
n.setAttribute("xlink:href",t.image)
n.style.width="100%"
n.style.height="100%"
e.appendChild(n)
t.iconSVG=e.outerHTML
t.icon="lti_tool_"+t.id}t.iconSVG&&e.ui.registry.addIcon(t.icon,t.iconSVG)}function p(e,t){t.length&&e.ui.registry.addNestedMenuItem("lti_tools_menuitem",{text:g.t("Apps"),icon:"lti",getSubmenuItems:()=>y(e,t)})}function b(e,t){const n=g.t("Apps")
e.ui.registry.addButton("lti_tool_dropdown",{onAction:()=>{const e=new CustomEvent("tinyRCE/onExternalTools",{detail:{ltiButtons:t}})
document.dispatchEvent(e)},icon:"lti",tooltip:n,onSetup(t){c.showHideButtons(e)}})}function _(e,t){t.forEach(t=>{if(!t.favorite)return
f(e,t)
e.ui.registry.addButton("instructure_external_button_"+t.id,{onAction:t.onAction,tooltip:t.title,icon:t.icon,title:t.title})})}function v(e,t){const n=g.t("Apps")
e.ui.registry.addMenuButton("lti_mru_button",{tooltip:n,icon:"lti",fetch(n){n(y(e,t))},onSetup(t){c.showHideButtons(e)}})}function y(e,t){const n=[]
try{const a=JSON.parse(window.localStorage.getItem("ltimru"))
if(a&&Array.isArray(a)&&a.length){const i=t.filter(e=>a.includes(e.id))
i.forEach(t=>{f(e,t)
t.menuItem||(t.menuItem={type:"menuitem",text:t.title,icon:t.icon,onAction:t.onAction})
n.push(t.menuItem)})
n.sort((e,t)=>e.text.localeCompare(t.text))}}catch(e){console.log("Failed building mru menu",e.message)}finally{n.push({type:"menuitem",text:g.t("View All"),onAction:()=>{const e=new CustomEvent("tinyRCE/onExternalTools",{detail:{ltiButtons:t}})
document.dispatchEvent(e)}})}return n}var w=m
var R=n("ik22")
var k=n("uloQ")
const x=Object(i["useScope"])("loadEventListeners")
function C(e={}){const t=["equationCB","equellaCB","externalToolCB"]
t.forEach(t=>{void 0===e[t]&&(e[t]=function(){})})
document.addEventListener("tinyRCE/initEquation",({detail:t})=>{Promise.all([n.e(0),n.e(9),n.e(4164)]).then(n.bind(null,"dIBj")).then(({default:n})=>{const a=new n(t.ed)
e.equationCB(a)}).catch(Object(k["c"])(x.t("Something went wrong loading the equation editor")))})
document.addEventListener("tinyRCE/initEquella",t=>{Promise.all([n.e(0),n.e(4277)]).then(n.bind(null,"IOhY")).then(({default:n})=>{n(t.detail.ed)
e.equellaCB()}).catch(Object(k["c"])(x.t("Something went wrong loading Equella")))})
document.addEventListener("tinyRCE/initExternalTools",t=>{w.init(t.detail.ed,t.detail.url,R["a"])
e.externalToolCB()})}},JiFB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var a=n("uYtQ")
var i=n("ErZx")
class r{constructor(e,t,n,a){this.baseURL=e.baseURL
this.extraButtons=t.editorButtons
this.instConfig=t
this.viewportWidth=n
this.idAttribute=a}defaultConfig(){var e
return{...i["a"],body_class:null!==(e=window.ENV.FEATURES)&&void 0!==e&&e.canvas_k6_theme||window.ENV.K5_SUBJECT_COURSE||window.ENV.K5_HOMEROOM_COURSE?"elementary-theme":"default-theme",selector:"#"+this.idAttribute,directionality:Object(a["b"])(),plugins:["instructure_equation"],content_css:window.ENV.url_to_what_gets_loaded_inside_the_tinymce_editor_css,style_formats:[{title:"Heading 2",format:"h2"},{title:"Heading 3",format:"h3"},{title:"Heading 4",format:"h4"},{title:"Heading 5",format:"h5"},{title:"Heading 6",format:"h6"}],init_instance_callback:e=>{$("#tinymce-parent-of-"+e.id).css("visibility","visible")},show_media_upload:!!INST.kalturaSettings&&!INST.kalturaSettings.hide_rte_button}}}},TiZd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
n.d(t,"b",(function(){return i}))
let a;(function(e){e[e["ButtonsAndIcons"]=0]="ButtonsAndIcons"})(a||(a={}))
function i(e,t){switch(e){case a.ButtonsAndIcons:return r(t)
default:return false}}function r(e){var t,n
return!!(e.RICH_CONTENT_CAN_UPLOAD_FILES&&e.RICH_CONTENT_CAN_EDIT_FILES&&null!==(t=window.ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.buttons_and_icons_root_account)}},TvTI:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var r=n("gI0r")
n("8JEM")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=i()(this)
i.a.each(["name","id","class"],(n,a)=>{t.attr(a)&&t.attr(a,t.attr(a).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let a=false
if(e.data)for(var t in e.data){if(e.except&&-1!=i.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=i.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const o=this.find("."+t)
var n=e.avoid||""
o.each((function(){const o=i()(this)
if(o.length>0&&0===o.closest(n).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=i.a.inArray(t,e.htmlValues)){o.html(i.a.raw(e.data[t].toString()))
if(o.hasClass("user_content")){a=true
o.removeClass("enhanced")
o.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==o[0].tagName.toUpperCase())o.val(e.data[t])
else try{const n=e.data[t].toString()
o.html(Object(r["a"])(n))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,a,r=i()(this)
for(const o in e.hrefValues){if(!e.hrefValues.hasOwnProperty(o))continue
const s=e.hrefValues[o]
if(t=r.attr("href")){const n=i.a.replaceTags(t,s,encodeURIComponent(e.data[s]))
const a=r.text()===r.html()?r.text():null
if(t!==n){r.attr("href",n)
a&&r.text(a)}}(n=r.attr("rel"))&&r.attr("rel",i.a.replaceTags(n,s,e.data[s]));(a=r.attr("name"))&&r.attr("name",i.a.replaceTags(a,s,e.data[s]))}}))
a&&i()(document).triggerHandler("user_content_change")}return this}
i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const r=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=i.a.trim(r.text())
"&nbsp;"===r.html()&&(a="")
1===a.length&&160===a.charCodeAt(0)&&(a="")
n[e]=a})}if(e.dataValues)for(t in e.dataValues){var a=this.data(e.dataValues[t])
a&&(n[e.dataValues[t]]=a)}if(e.htmlValues)for(t in e.htmlValues){const r=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=null
a=r.hasClass("user_content")&&r.data("unenhanced_content_html")?r.data("unenhanced_content_html"):i.a.trim(r.html())
n[e.htmlValues[t]]=a}return n}
i.a.fn.getTemplateValue=function(e,t){const n=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},ZbPE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return C}))
var a=n("rePB")
var i=n("1OyB")
var r=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("17x9")
var u=n.n(d)
var h=n("TSYQ")
var g=n.n(h)
var m=n("J2CL")
var f=n("KgFQ")
var p=n("jtGx")
var b=n("nAyT")
var _=n("VTBJ")
function v(e){var t=e.typography,n=e.colors,a=e.spacing
return Object(_["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(a.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var y,w,R,k
var x={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var C=(y=Object(m["j"])(v,x),y(w=(k=R=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){var e
var t=this.props,i=t.wrap,r=t.weight,o=t.fontStyle,s=t.size,l=t.lineHeight,d=t.letterSpacing,u=t.transform,h=t.color,m=t.children
var b=Object(f["a"])(n,this.props)
return c.a.createElement(b,Object.assign({},Object(p["b"])(this.props),{className:g()((e={},Object(a["a"])(e,x.root,true),Object(a["a"])(e,x[s],s),Object(a["a"])(e,x["wrap-".concat(i)],i),Object(a["a"])(e,x["weight-".concat(r)],r),Object(a["a"])(e,x["style-".concat(o)],o),Object(a["a"])(e,x["transform-".concat(u)],u),Object(a["a"])(e,x["lineHeight-".concat(l)],l),Object(a["a"])(e,x["letterSpacing-".concat(d)],d),Object(a["a"])(e,x["color-".concat(h)],h),e)),ref:this.props.elementRef}),m)}}])
n.displayName="Text"
return n}(l["Component"]),R.propTypes={as:u.a.elementType,children:u.a.node,color:b["a"].deprecatePropValues(u.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:u.a.func,fontStyle:u.a.oneOf(["italic","normal"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:u.a.oneOf(["normal","light","bold"]),wrap:u.a.oneOf(["normal","break-word"])},R.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},k))||w)},aq8L:function(e,t,n){"use strict"
var a=n("HGxv")
var i=n("ouhR")
var r=n.n(i)
var o=n("gI0r")
var s=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
const l=Object(a["useScope"])("instructure_misc_plugins")
r.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(o["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(o["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(r.a.raw(n))}
r.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
r.a.fn.scrollbarWidth=function(){const e=r()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const a=t.innerWidth()
e.remove()
return n-a}
r.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
r.a.fn.undim=function(e){return this.animate({opacity:1},e)}
r.a.fn.confirmDelete=function(e){e=r.a.extend({},r.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let a=true
e.noMessage=e.noMessage||e.no_message
const i=function(){if(!a){e.cancelled&&r.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const a=e.prepareData?e.prepareData.call(t,n):{}
a.authenticity_token=Object(s["a"])()
r.a.ajaxJSON(e.url,"DELETE",a,n=>{e.success.call(t,n)},(n,a,i,o)=>{e.error&&r.a.isFunction(e.error)?e.error.call(t,n,a,i,o):r.a.ajaxJSON.unhandledXHRs.push(a)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!r.a.skipConfirmations){if(e.dialog){a=false
const t="object"===typeof e.dialog?e.dialog:{}
const o=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=r()(e.message).dialog(r.a.extend({},{modal:true,close:i,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){r()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:o,click(){a=true
r()(this).dialog("close")}}]},t))
return}a=confirm(e.message)}i()}
r.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
r.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let a=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(a="#"+e.substring(5))}this.bind("document_fragment_change",e)
const i=this
let o=false
for(t=0;t<r.a._checkFragments.fragmentList.length;t++){const e=r.a._checkFragments.fragmentList[t]
e.doc[0]==i[0]&&(o=true)}o||r.a._checkFragments.fragmentList.push({doc:i,fragment:""})
r()(window).bind("hashchange",r.a._checkFragments)
setTimeout(()=>{a&&a.length>0?i.triggerHandler("document_fragment_change",a):i&&i[0]&&i[0].location&&i[0].location.hash.length>0&&i.triggerHandler("document_fragment_change",i[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
r.a._checkFragments=function(){const e=r.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const a=n.doc
if(a[0].location.hash!=n.fragment){a.triggerHandler("document_fragment_change",a[0].location.hash)
n.fragment=a[0].location.hash
r.a._checkFragments.fragmentList[t]=n}}}
r.a._checkFragments.fragmentList=[]
r.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
r.a.fn.showIf=function(e){if(r.a.isFunction(e))return this.each((function(t){r()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
r.a.fn.disableIf=function(e){r.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
r.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}r()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const a=this.width()
const i=this.height()
const o=(e.container||this).zIndex()
t=r()(document.createElement("div"))
t.css({width:a+6,height:i+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){r()(this).stop().fadeOut("fast",(function(){r()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
r()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){r()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){r()(this).remove()}))
e&&e.scroll&&r()("html,body").scrollToVisible(t)}
r.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
r.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
r.a.fn.fillWindowWithMe=function(e){const t=r.a.extend({minHeight:400},e),n=r()(this),a=r()("#wrapper"),i=r()("#main"),o=r()("#not_right_side"),s=r()(window),l=r()(this).add(t.alsoResize)
function c(){l.height(0)
const e=s.height()-(a.offset().top+a.outerHeight())+(i.height()-o.height()),c=Math.max(400,e)
l.height(c)
r.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
s.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
r.a.fn.autoGrowInput=function(e){e=r.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||r()(this).width(),n="",a=r()(this),i=r()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:a.css("fontSize"),fontFamily:a.css("fontFamily"),fontWeight:a.css("fontWeight"),letterSpacing:a.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(n===(n=a.val()))return
i.text(n)
const r=i.width(),o=r+e.comfortZone>=t?r+e.comfortZone:t,s=a.width(),l=o<s&&o>=t||o>t&&o<e.maxWidth
l&&a.width(o)})}
i.insertAfter(a)
r()(this).bind("keyup keydown blur update change",o)}))
return this}
r.a},dDTa:function(e,t,n){"use strict"
const a=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=a},eVns:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n("BrAc")
function i(e){let t=e
let n=null
return e=>{null===n&&(n=a["a"].post("/api/v1/jwts/refresh",{jwt:t}).then(e=>{n=null
t=e.data.token
return t}))
"function"===typeof e&&n.then(e)
return n}}var r=n("s9Pr")
function o(){if(!ENV.context_asset_string)return null
let[e,t]=Object(r["a"])(ENV.context_asset_string,false)
const n=ENV.current_user_id
const a={contextType:e,contextId:t,userId:n}
const o=ENV.RICH_CONTENT_CAN_UPLOAD_FILES
if(!o||"account"===e){t=n
e="user"}return{canUploadFiles:ENV.RICH_CONTENT_CAN_UPLOAD_FILES,containingContext:a,contextType:e,contextId:t,filesTabDisabled:ENV.RICH_CONTENT_FILES_TAB_DISABLED,host:ENV.RICH_CONTENT_APP_HOST,jwt:ENV.JWT,refreshToken:i(ENV.JWT),themeUrl:ENV.active_brand_config_json_url}}},lBOK:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
i.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=window.getComputedStyle(this[0]).direction||"ltr"
const n=this.filter(":first")
let a
if("hide"===e||"remove"===e){n.children(".loading_image").remove()
a=n.data("loading_images")||[]
a.forEach(e=>{e&&e.remove()})
n.data("loading_images",null)
this.css("margin-inline-end","")
return this}if("remove_once"===e){n.children(".loading_image").remove()
a=n.data("loading_images")||[]
const e=a.pop()
e&&e.remove()
n.data("loading_images",a)
return this}if("register_image"===e&&3===arguments.length){i.a.fn.loadingImg.image_files[arguments[1]]=arguments[2]
return this}e=i.a.extend({},i.a.fn.loadingImg.defaults,e)
let r=i.a.fn.loadingImg.image_files.normal
e.image_size&&i.a.fn.loadingImg.image_files[e.image_size]&&(r=i.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let o=0
if(e.vertical)if("top"===e.vertical);else if("bottom"===e.vertical)o=n.outerHeight()
else if("middle"===e.vertical)o=n.outerHeight()/2-r.height/2
else{o=parseInt(e.vertical,10)
isNaN(o)&&(o=0)}let s=0
if(e.horizontal)if("left"===e.horizontal);else if("right"===e.horizontal)s=n.outerWidth()-r.width
else if("right!"===e.horizontal){s="ltr"===t?n.outerWidth()+5:-5-(r.width||16)
this.css({"margin-inline-end":"16px"})}else if("middle"===e.horizontal)s=n.outerWidth()/2-r.width/2
else{s=parseInt(e.horizontal,10)
isNaN(s)&&(s=0)}const l=n.zIndex()+1
const c=i()(document.createElement("div")).addClass("loading_image_holder")
const d=i()(document.createElement("img")).attr("src",r.url)
c.append(d)
a=n.data("loading_images")||[]
a.push(c)
n.data("loading_images",a)
if(n.css("position")&&"static"!==n.css("position")){c.css({zIndex:l,position:"absolute",top:o,left:s})
n.append(c)}else{const t=n.offset()
let a=t.top,r=t.left
e.vertical&&(a+=o)
e.horizontal&&(r+=s)
c.css({zIndex:l,position:"absolute",top:a,left:r})
i()("body").append(c)}return i()(this)}
i.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
i.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
i.a.fn.loadingImage=i.a.fn.loadingImg},stQK:function(e,t,n){"use strict"
var a=n("HGxv")
const i=Object(a["useScope"])("closedCaptionLanguages")
const r={get af(){return i.t("Afrikaans")},get sq(){return i.t("Albanian")},get ar(){return i.t("Arabic")},get be(){return i.t("Belarusian")},get bg(){return i.t("Bulgarian")},get ca(){return i.t("Catalan")},get zh(){return i.t("Chinese")},get hr(){return i.t("Croatian")},get cs(){return i.t("Czech")},get da(){return i.t("Danish")},get nl(){return i.t("Dutch")},get en(){return i.t("English")},get et(){return i.t("Estonian")},get fl(){return i.t("Filipino")},get fi(){return i.t("Finnish")},get fr(){return i.t("French")},get gl(){return i.t("Galician")},get de(){return i.t("German")},get el(){return i.t("Greek")},get ht(){return i.t("Haitian Creole")},get hi(){return i.t("Hindi")},get hu(){return i.t("Hungarian")},get is(){return i.t("Icelandic")},get id(){return i.t("Indonesian")},get ga(){return i.t("Irish")},get it(){return i.t("Italian")},get ja(){return i.t("Japanese")},get ko(){return i.t("Korean")},get lv(){return i.t("Latvian")},get lt(){return i.t("Lithuanian")},get mk(){return i.t("Macedonian")},get ms(){return i.t("Malay")},get mt(){return i.t("Maltese")},get no(){return i.t("Norwegian")},get fa(){return i.t("Persian")},get pl(){return i.t("Polish")},get pt(){return i.t("Portuguese")},get ro(){return i.t("Romanian")},get ru(){return i.t("Russian")},get sr(){return i.t("Serbian")},get sk(){return i.t("Slovak")},get sl(){return i.t("Slovenian")},get es(){return i.t("Spanish")},get sw(){return i.t("Swahili")},get sv(){return i.t("Swedish")},get tl(){return i.t("Tagalog")},get th(){return i.t("Thai")},get tr(){return i.t("Turkish")},get uk(){return i.t("Ukrainian")},get vi(){return i.t("Vietnamese")},get cy(){return i.t("Welsh")},get yi(){return i.t("Yiddish")},get"en-CA"(){return i.t("English (Canada)")},get"en-AU"(){return i.t("English (Australia)")},get"en-GB"(){return i.t("English (United Kingdom)")},get"fr-CA"(){return i.t("French (Canada)")},get he(){return i.t("Hebrew")},get hy(){return i.t("Armenian")},get mi(){return i.t("Māori (New Zealand)")},get nb(){return i.t("Norwegian Bokmål")},get nn(){return i.t("Norwegian Nynorsk")},get"zh-Hans"(){return i.t("Chinese Simplified")},get"zh-Hant"(){return i.t("Chinese Traditional")}}
t["a"]=r},zO2W:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var r=n("HGxv")
n("7AEQ")
n("TvTI")
n("pzFb")
var o=n("wd/R")
var s=n.n(o)
function l(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}function c(e,t){const n=r["default"].lookup("date.month_names")
e.data("calendar_objects")
var a={}
var o=null
if("string"===typeof t){o=i.a.datepicker.oldParseDate("mm/dd/yy",t)
o&&o.setDate(1)}if(!o){var c=parseInt(e.find(".month_number").text(),10)
var d=parseInt(e.find(".year_number").text(),10)
o=new Date(d,c+t-1,1)}a={month_name:n[o.getMonth()+1],month_number:o.getMonth()+1,year_number:o.getFullYear()}
e.fillTemplateData({data:a})
const u=s.a.localeData(ENV.MOMENT_LOCALE).firstDayOfWeek()
let h=new Date
const g=l(h)
const m=l(o)
h=o
h.setDate(0)
h.setDate(h.getDate()-h.getDay()+u)
const f=l(h)
let p=null
if(m.day!=f.day){h.setDate(1)
h.setMonth(h.getMonth()+1)
h.setDate(0)
p={day:h.getDate(),month:f.month,year:f.year}
h.setDate(1)
h.setMonth(h.getMonth()+1)}h.setMonth(o.getMonth()+1)
h.setDate(0)
const b={day:h.getDate(),month:m.month,year:m.yearh}
h.setDate(h.getDate()+1)
h.setDate(h.getDate()+(6-h.getDay()))
h.setDate(h.getDate()+7)
const _=l(h)
let v=e.data("days")
if(!v){v=e.find(".calendar_day_holder")
e.data("days",v)}e.hasClass("mini_month")&&(v=e.find(".day"))
e.find(".calendar_event").remove()
let y=0
let w=f.day
c=f.month
d=f.year
while(w<=_.day||c!=_.month){var R=v.eq(y)
if(R.length>0){const e=R.attr("class").split(" ")
const t=[]
for(let n=0;n<e.length;n++)0==e[n].indexOf("date_")||t.push(e[n])
R.attr("class",t.join(" "))}R.show().addClass("visible").parents("tr").show().addClass("visible")
a={day_number:w}
const t=c<9?"0"+(c+1):c+1
const i=w<10?"0"+w:w
let r=`day_${d}_${t}_${i}`
e.hasClass("mini_month")&&(r="mini_"+r)
R.attr("id",r).addClass(`date_${t}_${i}_${d}`).find(".day_number").text(w).attr("title",`${t}/${i}/${d}`).addClass(`date_${t}_${i}_${d}`)
const o=n[c+1]
R.find("span.screenreader-only:first-child").text(`${w} ${o} ${d}`)
let s=R.children("div")
e.hasClass("mini_month")&&(s=R)
s.removeClass("current_month other_month next_month previous_month today")
if(c==m.month)s.addClass("current_month")
else{s.addClass("other_month")
m.month==(c+1)%12?s.addClass("previous_month"):s.addClass("next_month")}c==g.month&&w==g.day&&d==g.year&&s.addClass("today")
w++
y++
if(p&&w>p.day&&c==p.month||w>b.day&&c==b.month){c+=1
if(c>=12){c-=12
d++}w=1}}while(y<v.length){R=v.eq(y)
R.parents("tr").hide().removeClass("visible")
R.hide().removeClass("visible")
y++}e.hasClass("mini_month")}var d=n("Ce78J")
n("Dhso")
n("aq8L")
n("lBOK")
n("w2hD")
var u=n("B1bN")
var h=n("ph9R")
var g=n("gI0r")
d["a"].preloadRemoteModule()
function m(){const e=i()(".mini_month")
const t=i()("#syllabus")
if(!e||!t)return
let n=e.find(".day.has_event")
n.removeClass("has_event")
let a=n.find(".day_wrapper")
a.removeAttr("role")
a.removeAttr("tabindex")
t.find("tr.date:visible").each((function(){const t=i()(this).find(".day_date").attr("data-date")
n=e.find("#mini_day_"+t)
n.addClass("has_event")
a=n.find(".day_wrapper")
a.attr("role","link")
a.attr("tabindex","0")}))}function f(e){const t=i()(".mini_month")
const n=i()("#syllabus")
i()("tr.date.related, .day.related").removeClass("related")
if(e){t&&t.find("#mini_day_"+e).addClass("related")
n&&n.find("tr.date.events_"+e).addClass("related")}}function p(e,t){const n=i()("#syllabus")
n.find("tr.related_event").removeClass("related_event")
e&&n&&n.find("tr.related-"+e).not(t).addClass("related_event")}function b(){const e=i()("#syllabus")
e.on("mouseenter mouseleave","tr.date",(function(e){let t
"mouseenter"===e.type&&(t=i()(this).find(".day_date").attr("data-date"))
f(t)}))
e.on("mouseenter mouseleave","tr.date.detail_list",(function(e){let t=null
if("mouseenter"===e.type){const e=(i()(this).attr("class")||"").split(/\s+/)
e.some(e=>{if("related-"===e.substr(0,8))return t=e.substr(8)})}p(t,this)}))
m()
const t=i.a.datepicker.formatDate("yy_mm_dd",new Date)
f(t)}function _(e){if(e.length>0){i()("tr.selected").removeClass("selected")
e.addClass("selected")
i()("html, body").scrollTo(e)
e.find("a").first().focus()}}function v(e){i()(".mini_month .day.selected").removeClass("selected")
i()(".mini_month").find("#mini_day_"+e).addClass("selected")}function y(){const e=i()(".mini_month")
const t=e.find(".next_month_link, .prev_month_link")
t.on("click",(function(t){t.preventDefault()
c(e,i()(this).hasClass("next_month_link")?1:-1)
m()}))
const n=function(t){t.preventDefault()
const n=i()(t.target).closest(".mini_calendar_day")[0].id.slice(9)
const[a,r,o]=Array.from(n.split("_"))
c(e,`${r}/${o}/${a}`)
m()
v(n)
i()(".events_"+n).ifExists(e=>setTimeout(()=>_(e),0))}
e.on("keypress",".day_wrapper",e=>{13!==e.which&&32!==e.which||n(e)})
e.on("click",".day_wrapper",n)
e.on("focus blur mouseover mouseout",".day_wrapper",e=>{let t
"mouseout"!==e.type&&"blur"!==e.type&&(t=i()(e.target).closest(".mini_calendar_day")[0].id.slice(9))
f(t)})
i()(".jump_to_today_link").on("click",t=>{t.preventDefault()
const n=i.a.datepicker.formatDate("yy_mm_dd",new Date)
let a
i()("tr.date").each((function(){const e=i()(this).find(".day_date").attr("data-date")
if(e){if(e>n)return false
a=e}}))
c(e,i.a.datepicker.formatDate("mm/dd/yy",new Date))
m()
a||(a=i()("tr.date:first"))
v(n)
_(i()(Object(g["a"])("tr.date.events_"+a)))})}const w=function(e){const t=i()("#course_syllabus")
t.data("syllabus_body",ENV.SYLLABUS_BODY)
const n=i()(".edit_syllabus_link")
if(!n.length)return
function a(){i()(".toggle_html_editor_link").show()
i()(".toggle_rich_editor_link").hide()}const r=i()("#edit_course_syllabus_form")
let o=i()("#course_syllabus_body")
const s=i()("#course_syllabus_details")
r.on("edit",()=>{r.show()
n.hide()
t.hide()
s.hide()
u["a"].hide()
o=d["a"].freshNode(o)
o.val(t.data("syllabus_body"))
d["a"].loadNewEditor(o,{focus:true,manageParent:true})
i()(".jump_to_today_link").focus()})
function l(){i()("#tinymce-parent-of-course_syllabus_body").append(o)}r.on("hide_edit",()=>{r.hide()
n.show()
t.show()
u["a"].show()
const e=i.a.trim(t.html())
s.showIf(!e)
d["a"].destroyRCE(o)
l()
a()
n.focus()})
n.on("click",e=>{e.preventDefault()
r.triggerHandler("edit")})
r.on("click",".toggle_views_link",e=>{e.preventDefault()
d["a"].callOnRCE(o,"toggle")
i()(e.currentTarget).siblings(".toggle_views_link").andSelf().toggle().focus()})
r.on("click",".cancel_button",e=>{e.preventDefault()
d["a"].closeRCE(o)
r.triggerHandler("hide_edit")})
return r.formSubmit({object_name:"course",processData(e){d["a"].closeRCE(o)
const t=d["a"].callOnRCE(o,"get_code")
e["course[syllabus_body]"]=t
return e},beforeSubmit(e){r.triggerHandler("hide_edit")
s.hide()
t.loadingImage()},success(n){if(n.course.settings.syllabus_course_summary!==e)return window.location.reload()
t.loadingImage("remove").html(n.course.syllabus_body)
t.data("syllabus_body",n.course.syllabus_body)
s.hide()
ENV.FEATURES.new_math_equation_handling||h["a"].isMathMLOnPage()&&(h["a"].isMathJaxLoaded()?h["a"].reloadElement("content"):h["a"].loadMathJax(void 0))},error:e=>r.triggerHandler("edit").formErrors(e)})}
t["a"]={bindToEditSyllabus:w,bindToMiniCalendar:y,bindToSyllabus:b}}}])

//# sourceMappingURL=101-c-bab6f2df71.js.map