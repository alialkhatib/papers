(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4083],{"2JmY":function(e,t,a){"use strict"
a.r(t)
var n=a("ouhR")
var r=a.n(n)
var s=a("Y/W1")
var i=a.n(s)
var o=a("zO2W")
var l=a("HGxv")
var c=a("mX+G")
var u=a.n(c)
class d extends u.a.Collection{constructor(e){super()
for(const t of e){t.on("add",(e,t,a)=>this.add(e,a))
t.on("remove",(e,t,a)=>this.remove(e,a))
t.on("reset",(e,t)=>{function a(t,a){return a.get("collection")===e?t.push(a):t}for(var n of this.reduce(a,[]))this.remove(n)
return(()=>{const t=[]
for(n of e.models)t.push(this.add(n))
return t})()})}}fetch(){}comparator(e,t){const a=e.get("start_at")
const n=t.get("start_at")
const r=e.get("end_at")
const s=t.get("end_at")
let i=e.get("title")
let o=t.get("title")
i&&(i=i.toLowerCase())
o&&(o=o.toLowerCase())
if(a!==n){if(!a)return 1
if(!n)return-1
return a<n?-1:1}if(r!==s){if(!r)return 1
if(!s)return-1
return r<s?1:-1}if(i<o)return-1
if(i>o)return 1
return 0}}var h=a("TnsN")
class p extends h["a"]{initialize(e,t="event"){this.parse=this.parse.bind(this)
this.context_codes=e
this.type=t
return super.initialize(...arguments)}fetch(e={}){null==e.remove&&(e.remove=false)
null==e.data&&(e.data={})
e.data.type=this.type
e.data.context_codes=this.context_codes
null==e.data.all_events&&(e.data.all_events="1")
e.data.excludes=["assignment","description","child_events"]
return super.fetch(e)}parse(...e){let t
const a=this.type
switch(a){case"assignment":t=function(e){e.related_id=e.id
let t=false
i.a.each(null!=e.assignment_overrides?e.assignment_overrides:[],a=>{if(!t){e.id=`${e.id}_override_${a.id}`
return t=true}})
return e}
break
case"event":t=function(e){e.related_id=e.id=`${a}_${e.id}`
e.parent_event_id&&(e.related_id=`${a}_${e.parent_event_id}`)
return e}}const n=[]
i.a.each(super.parse(...e),e=>{e.hidden||n.push(t(e))})
return n}}p.prototype.url="/api/v1/calendar_events"
class _ extends h["a"]{initialize(e,t="reservable"){this.context_codes=e
this.scope=t
return super.initialize(...arguments)}fetch(e={}){null==e.remove&&(e.remove=false)
null==e.data&&(e.data={})
e.data.scope=this.scope
e.data.context_codes=this.context_codes
null==e.data.include_past_appointments&&(e.data.include_past_appointments="1")
return super.fetch(e)}parse(e){i.a.each(super.parse(...arguments),e=>e.related_id=e.id="appointment_group_"+e.id)
return e}}_.prototype.url="/api/v1/appointment_groups"
class f extends h["a"]{constructor(e){super()
this.url="/api/v1/planner/items"
this.context_codes=e}fetch(e){const t={...e.data,context_codes:this.context_codes,filter:"all_ungraded_todo_items"}
const a={...e,data:t}
return super.fetch(a)}parse(e){return e.map(e=>({id:`planner_${e.plannable_type}_${e.plannable_id}`,type:e.plannable_type,title:e.plannable.title,todo_at:e.plannable.todo_date,start_at:e.plannable.todo_date,html_url:e.html_url}))}}var m=a("3O+N")
var g=a.n(m)
a("BGrI")
var v=a("dbrX")
var b=g.a.default
var y=b.template,w=b.templates=b.templates||{}
var E="/work/canvas-deploy/generated/ui/features/syllabus/jst/Syllabus"
w[E]=y((function(e,t,a,n,r){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
r=r||{}
var s,i=a.helperMissing,o=this.escapeExpression,l="function",c=this
function u(e,t){var n,r=""
r+="\n"
n=a.each.call(e,e&&e.events,{hash:{},inverse:c.noop,fn:c.program(2,d,t),data:t});(n||0===n)&&(r+=n)
r+="\n"
return r}function d(e,t){var n,r,s,u=""
u+='\n\n<tr\n  class="date detail_list '
n=a["if"].call(e,e&&e.passed,{hash:{},inverse:c.noop,fn:c.program(3,h,t),data:t});(n||0===n)&&(u+=n)
n=a["if"].call(e,e&&e.date,{hash:{},inverse:c.noop,fn:c.program(5,p,t),data:t});(n||0===n)&&(u+=n)
u+=" syllabus_"
if(r=a.type)n=r.call(e,{hash:{},data:t})
else{r=e&&e.type
n=typeof r===l?r.call(e,{hash:{},data:t}):r}u+=o(n)+" related-"
if(r=a.related_id)n=r.call(e,{hash:{},data:t})
else{r=e&&e.related_id
n=typeof r===l?r.call(e,{hash:{},data:t}):r}u+=o(n)
n=a["if"].call(e,e&&e.override,{hash:{},inverse:c.noop,fn:c.program(7,_,t),data:t});(n||0===n)&&(u+=n)
u+='"\n  data-workflow-state="'
if(r=a.workflow_state)n=r.call(e,{hash:{},data:t})
else{r=e&&e.workflow_state
n=typeof r===l?r.call(e,{hash:{},data:t}):r}u+=o(n)+'">\n  '
n=a["if"].call(e,null==t||false===t?t:t.first,{hash:{},inverse:c.noop,fn:c.program(9,f,t),data:t});(n||0===n)&&(u+=n)
u+='\n  <td class="name'
n=a.unless.call(e,e&&e.last,{hash:{},inverse:c.noop,fn:c.program(14,v,t),data:t});(n||0===n)&&(u+=n)
u+='">\n    '
n=(r=a.ifEqual||e&&e.ifEqual,s={hash:{},inverse:c.program(18,y,t),fn:c.program(16,b,t),data:t},r?r.call(e,e&&e.type,"assignment",s):i.call(e,"ifEqual",e&&e.type,"assignment",s));(n||0===n)&&(u+=n)
u+="\n    "
n=a["if"].call(e,e&&e.html_url,{hash:{},inverse:c.program(28,j,t),fn:c.program(26,x,t),data:t});(n||0===n)&&(u+=n)
u+="\n    "
n=a["if"].call(e,e&&e.override,{hash:{},inverse:c.noop,fn:c.program(30,N,t),data:t});(n||0===n)&&(u+=n)
u+='\n  </td>\n  <td class="dates'
n=a.unless.call(e,e&&e.last,{hash:{},inverse:c.noop,fn:c.program(14,v,t),data:t});(n||0===n)&&(u+=n)
u+='">\n    '
n=a["if"].call(e,e&&e.start_at,{hash:{},inverse:c.program(44,R,t),fn:c.program(32,C,t),data:t});(n||0===n)&&(u+=n)
u+="\n  </td>\n</tr>\n"
return u}function h(e,t){return" date_passed"}function p(e,t){var n,r,s=""
s+=" events_"+o((n=a.strftime||e&&e.strftime,r={hash:{},data:t},n?n.call(e,e&&e.date,"%Y_%m_%d",r):i.call(e,"strftime",e&&e.date,"%Y_%m_%d",r)))
return s}function _(e,t){return" special_date"}function f(e,t){var n,r,s=""
s+='\n  <td scope="row" rowspan="'
if(r=a.eventCount)n=r.call(e,{hash:{},data:t})
else{r=e&&e.eventCount
n=typeof r===l?r.call(e,{hash:{},data:t}):r}s+=o(n)+'" valign="top" class="day_date"\n    data-date="'
n=a["if"].call(e,e&&e.date,{hash:{},inverse:c.noop,fn:c.program(10,m,t),data:t});(n||0===n)&&(s+=n)
s+='">\n    '
n=a["if"].call(e,e&&e.orig_date,{hash:{},inverse:c.noop,fn:c.program(12,g,t),data:t});(n||0===n)&&(s+=n)
s+="\n  </td>\n  "
return s}function m(e,t){var n,r
return o((n=a.strftime||e&&e.strftime,r={hash:{},data:t},n?n.call(e,e&&e.date,"%Y_%m_%d",r):i.call(e,"strftime",e&&e.date,"%Y_%m_%d",r)))}function g(e,t){var n,r,s=""
s+="\n    "+o((n=a.tDateToString||e&&e.tDateToString,r={hash:{},data:t},n?n.call(e,e&&e.orig_date,"medium_with_weekday",r):i.call(e,"tDateToString",e&&e.orig_date,"medium_with_weekday",r)))+"\n    "
return s}function v(e,t){return" not_last"}function b(e,t){var n,r,s=""
s+='\n    <span class="screenreader-only">'+o((n=a.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"assignment_976578a8","Assignment",r):i.call(e,"t","assignment_976578a8","Assignment",r)))+"</span>\n    "+o((n=a.addIcon||e&&e.addIcon,r={hash:{},data:t},n?n.call(e,"assignment",r):i.call(e,"addIcon","assignment",r)))+"\n    "
return s}function y(e,t){var n,r,s
n=(r=a.ifEqual||e&&e.ifEqual,s={hash:{},inverse:c.program(21,E,t),fn:c.program(19,w,t),data:t},r?r.call(e,e&&e.type,"wiki_page",s):i.call(e,"ifEqual",e&&e.type,"wiki_page",s))
return n||0===n?n:""}function w(e,t){var n,r,s=""
s+='\n    <span class="screenreader-only">'+o((n=a.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"page_50c4823d","Page",r):i.call(e,"t","page_50c4823d","Page",r)))+"</span>\n    "+o((n=a.addIcon||e&&e.addIcon,r={hash:{},data:t},n?n.call(e,"document",r):i.call(e,"addIcon","document",r)))+"\n    "
return s}function E(e,t){var n,r,s
n=(r=a.ifEqual||e&&e.ifEqual,s={hash:{},inverse:c.program(24,T,t),fn:c.program(22,S,t),data:t},r?r.call(e,e&&e.type,"discussion_topic",s):i.call(e,"ifEqual",e&&e.type,"discussion_topic",s))
return n||0===n?n:""}function S(e,t){var n,r,s=""
s+='\n    <span class="screenreader-only">'+o((n=a.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"discussion_topic_dc85ad4c","Discussion Topic",r):i.call(e,"t","discussion_topic_dc85ad4c","Discussion Topic",r)))+"</span>\n    "+o((n=a.addIcon||e&&e.addIcon,r={hash:{},data:t},n?n.call(e,"discussion",r):i.call(e,"addIcon","discussion",r)))+"\n    "
return s}function T(e,t){var n,r,s=""
s+='\n    <span class="screenreader-only">'+o((n=a.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"calendar_event_89aadc1c","Calendar Event",r):i.call(e,"t","calendar_event_89aadc1c","Calendar Event",r)))+"</span>\n    "+o((n=a.addIcon||e&&e.addIcon,r={hash:{},data:t},n?n.call(e,"calendar-month",r):i.call(e,"addIcon","calendar-month",r)))+"\n    "
return s}function x(e,t){var n,r,s=""
s+='\n    <a href="'
if(r=a.html_url)n=r.call(e,{hash:{},data:t})
else{r=e&&e.html_url
n=typeof r===l?r.call(e,{hash:{},data:t}):r}s+=o(n)+'">'
if(r=a.title)n=r.call(e,{hash:{},data:t})
else{r=e&&e.title
n=typeof r===l?r.call(e,{hash:{},data:t}):r}s+=o(n)+"</a>\n    "
return s}function j(e,t){var n,r,s=""
s+="\n    "
if(r=a.title)n=r.call(e,{hash:{},data:t})
else{r=e&&e.title
n=typeof r===l?r.call(e,{hash:{},data:t}):r}s+=o(n)+"\n    "
return s}function N(e,t){var a,n=""
n+='\n    <div class="special_date_title">('+o((a=(a=e&&e.override,null==a||false===a?a:a.title),typeof a===l?a.apply(e):a))+")</div>\n    "
return n}function C(e,t){var n,r=""
r+="\n    "
n=a["if"].call(e,e&&e.due_at,{hash:{},inverse:c.program(35,A,t),fn:c.program(33,D,t),data:t});(n||0===n)&&(r+=n)
r+="\n    "
return r}function D(e,t){var n,r,s,l=""
l+="\n    "+o((r=a.t||e&&e.t,s={hash:{scope:"courses.syllabus"},data:t},r?r.call(e,"due by",s):i.call(e,"t","due by",s)))+" <span "
n=(r=a.unfudge||e&&e.unfudge,s={hash:{},data:t},r?r.call(e,e&&e.due_at,s):i.call(e,"unfudge",e&&e.due_at,s))
l+=o((r=a.contextSensitiveDatetimeTitle||e&&e.contextSensitiveDatetimeTitle,s={hash:{},data:t},r?r.call(e,n,s):i.call(e,"contextSensitiveDatetimeTitle",n,s)))+">"+o((r=a.tTimeHours||e&&e.tTimeHours,s={hash:{},data:t},r?r.call(e,e&&e.due_at,s):i.call(e,"tTimeHours",e&&e.due_at,s)))+"</span>\n    "
return l}function A(e,t){var n
n=a["if"].call(e,e&&e.todo_at,{hash:{},inverse:c.program(38,k,t),fn:c.program(36,O,t),data:t})
return n||0===n?n:""}function O(e,t){var n,r,s,l=""
l+="\n    "+o((r=a.t||e&&e.t,s={hash:{scope:"courses.syllabus"},data:t},r?r.call(e,"to do:",s):i.call(e,"t","to do:",s)))+" <span "
n=(r=a.unfudge||e&&e.unfudge,s={hash:{},data:t},r?r.call(e,e&&e.todo_at,s):i.call(e,"unfudge",e&&e.todo_at,s))
l+=o((r=a.contextSensitiveDatetimeTitle||e&&e.contextSensitiveDatetimeTitle,s={hash:{},data:t},r?r.call(e,n,s):i.call(e,"contextSensitiveDatetimeTitle",n,s)))+">"+o((r=a.tTimeHours||e&&e.tTimeHours,s={hash:{},data:t},r?r.call(e,e&&e.todo_at,s):i.call(e,"tTimeHours",e&&e.todo_at,s)))+"</span>\n    "
return l}function k(e,t){var n,r,s,l=""
l+="\n    <span "
n=(r=a.unfudge||e&&e.unfudge,s={hash:{},data:t},r?r.call(e,e&&e.start_at,s):i.call(e,"unfudge",e&&e.start_at,s))
l+=o((r=a.contextSensitiveDatetimeTitle||e&&e.contextSensitiveDatetimeTitle,s={hash:{},data:t},r?r.call(e,n,s):i.call(e,"contextSensitiveDatetimeTitle",n,s)))+">"+o((r=a.tTimeHours||e&&e.tTimeHours,s={hash:{},data:t},r?r.call(e,e&&e.start_at,s):i.call(e,"tTimeHours",e&&e.start_at,s)))+"</span>\n    "
n=a.unless.call(e,e&&e.same_time,{hash:{},inverse:c.noop,fn:c.program(39,F,t),data:t});(n||0===n)&&(l+=n)
l+="\n    "
return l}function F(e,t){var n,r,s,l=""
l+="\n    "+o((r=a.t||e&&e.t,s={hash:{scope:"courses.syllabus"},data:t},r?r.call(e,"to",s):i.call(e,"t","to",s)))+"\n    <span "
n=(r=a.unfudge||e&&e.unfudge,s={hash:{},data:t},r?r.call(e,e&&e.end_at,s):i.call(e,"unfudge",e&&e.end_at,s))
l+=o((r=a.contextSensitiveDatetimeTitle||e&&e.contextSensitiveDatetimeTitle,s={hash:{},data:t},r?r.call(e,n,s):i.call(e,"contextSensitiveDatetimeTitle",n,s)))+">\n      "
n=a["if"].call(e,e&&e.same_day,{hash:{},inverse:c.program(42,$,t),fn:c.program(40,I,t),data:t});(n||0===n)&&(l+=n)
l+="\n    </span>\n    "
return l}function I(e,t){var n,r,s=""
s+="\n      "+o((n=a.tTimeHours||e&&e.tTimeHours,r={hash:{},data:t},n?n.call(e,e&&e.end_at,r):i.call(e,"tTimeHours",e&&e.end_at,r)))+"\n      "
return s}function $(e,t){var n,r,s=""
s+="\n      "+o((n=a.tEventToString||e&&e.tEventToString,r={hash:{},data:t},n?n.call(e,e&&e.end_at,"short","tiny_on_the_hour",r):i.call(e,"tEventToString",e&&e.end_at,"short","tiny_on_the_hour",r)))+"\n      "
return s}function R(e,t){return"\n    &nbsp;\n    "}s=a.each.call(t,t&&t.dates,{hash:{},inverse:c.noop,fn:c.program(1,u,r),data:r})
return s||0===s?s:""}))
v["a"].loadStylesheetForJST({id:"1e",bundle:"jst/courses/Syllabus"})
var S=w[E]
class T extends u.a.View{static initClass(){this.prototype.template=S}initialize({can_read:e,is_valid_user:t}){this.can_read=e
this.is_valid_user=t
return super.initialize(...arguments)}toJSON(){const e=new Date
const t=new Date(e.getFullYear(),e.getMonth(),e.getDate())
const a=this.can_read
const n=this.can_read&&this.is_valid_user
const s={}
let o=null
let l=null
const c=function(e,c){let u,d,h,p,_
let f=c.related_id
null==f&&(f=c.id)
"assignment"===c.type?a&&(h=c.html_url):n&&(h=c.html_url)
const m=c.title
c.start_at&&(p=r.a.fudgeDateForProfileTimezone(c.start_at))
c.end_at&&(d=r.a.fudgeDateForProfileTimezone(c.end_at))
"assignment"===c.type?u=p:"wiki_page"!==c.type&&"discussion_topic"!==c.type||(_=r.a.fudgeDateForProfileTimezone(c.todo_at))
let g=null
i.a.each(null!=c.assignment_overrides?c.assignment_overrides:[],e=>{null==g&&(g={})
return g.title=e.title})
let v=null
let b=null
if(p){v=new Date(p.getFullYear(),p.getMonth(),p.getDate())
b=Date.parse(c.start_at)}let y=null
d&&(y=new Date(d.getFullYear(),d.getMonth(),d.getDate()))
if(o&&(null!=o.date?o.date.getTime():void 0)===(null!=v?v.getTime():void 0))l&&(l.last=false)
else{o={date:v,orig_date:b,passed:v&&v<t,events:[]}
e.push(o)
l=null}l={related_id:f,type:c.type,title:m,html_url:h,start_at:p,end_at:d,due_at:u,orig_date:b,todo_at:_,same_day:(null!=v?v.getTime():void 0)===(null!=y?y.getTime():void 0),same_time:(null!=p?p.getTime():void 0)===(null!=d?d.getTime():void 0),last:true,override:g,json:c,workflow_state:c.workflow_state}
o.events.push(l)
o.events.forEach(e=>{e.eventCount=o.events.length
e.date=o.date
e.passed=o.passed})
f in s||(s[f]=[])
s[f].push(l)
return e}
const u=i.a.reduce(super.toJSON(...arguments),c,[])
let d=false
for(const e in s){const t=s[e]
if(1===t.length)t[0].override=null
else for(const e of Array.from(t))d|=null!==e.override}return{dates:u,overrides_present:d}}}T.initClass()
var x=a("jFoo")
var j=a("3lLS")
var N=a.n(j)
const C=Object(l["useScope"])("syllabus")
const D=[new p([ENV.context_asset_string],"event"),new p([ENV.context_asset_string],"assignment")]
if(ENV.current_user_id){D.push(new _([ENV.context_asset_string],"reservable"))
D.push(new _([ENV.context_asset_string],"manageable"))}D.push(new f([ENV.context_asset_string]))
const A=i.a.map(D,e=>{const t=r.a.Deferred()
const a=()=>t.reject()
const n=()=>e.canFetch("next")?e.fetch({page:"next",success:n,error:a}):t.resolve()
e.fetch({data:{per_page:ENV.SYLLABUS_PER_PAGE||50},success:n,error:a})
return t})
N()(()=>{const e=new d(D)
const t=new T({el:"#syllabusTableBody",collection:e,can_read:ENV.CAN_READ,is_valid_user:!!ENV.current_user_id})
const n=document.getElementById("immersive_reader_mount_point")
const s=document.getElementById("immersive_reader_mobile_mount_point");(n||s)&&a.e(4146).then(a.bind(null,"AZYJ")).then(e=>{const t=()=>document.querySelector("#course_syllabus").innerHTML
const a=C.t("Course Syllabus")
let i
i=r.a.trim(t())?t:()=>document.querySelector("#course_syllabus_details").innerHTML
n&&e.initializeReaderButton(n,{content:i,title:a})
s&&e.initializeReaderButton(s,{content:i,title:a})}).catch(e=>{console.log("Error loading immersive readers.",e)})
r.a.when.apply(void 0,A).then(()=>{t.render()
o["a"].bindToSyllabus()}).fail(()=>{})
r()("#loading_indicator").replaceWith('<img src="/images/ajax-reload-animated.gif">')
o["a"].bindToEditSyllabus(true)
o["a"].bindToMiniCalendar()})
Object(x["c"])()},G4i8:function(e,t,a){var n={"./__tests__/lti.resourceImported.test.js":["LFe7",4205],"./__tests__/lti.screenReaderAlert.test.js":["0Guc",4206],"./__tests__/lti.showAlert.test.js":["+y7l",4207],"./__tests__/org.imsglobal.lti.get_data.test.js":["CXUv",4192],"./__tests__/org.imsglobal.lti.put_data.test.js":["mElt",4193],"./__tests__/requestFullWindowLaunch.test.js":["o6ta",4208],"./lti.enableScrollEvents.js":["HVU3",4267],"./lti.fetchWindowSize.js":["OANa",4268],"./lti.frameResize.js":["bSyB",4194],"./lti.removeUnloadMessage.js":["tjuu",4209],"./lti.resourceImported.js":["FC2N",4269],"./lti.screenReaderAlert.js":["YYEg",4270],"./lti.scrollToTop.js":["W/R1",4271],"./lti.setUnloadMessage.js":["6fDN",4210],"./lti.showAlert.js":["onLg",4272],"./lti.showModuleNavigation.js":["NSTA",4273],"./org.imsglobal.lti.capabilities.js":["zPPZ",4274],"./org.imsglobal.lti.get_data.js":["lH2A",4203],"./org.imsglobal.lti.put_data.js":["hugc",4204],"./requestFullWindowLaunch.js":["8IHO",4275],"./toggleCourseNavigationMenu.js":["ECMy",4202]}
function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
t.code="MODULE_NOT_FOUND"
throw t}))
var t=n[e],r=t[0]
return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)}
r.id="G4i8"
e.exports=r},QLaP:function(e,t,a){"use strict"
var n=function(e,t,a,n,r,s,i,o){false
if(!e){var l
if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var c=[a,n,r,s,i,o]
var u=0
l=new Error(t.replace(/%s/g,(function(){return c[u++]})))
l.name="Invariant Violation"}l.framesToPop=1
throw l}}
e.exports=n},TnsN:function(e,t,a){"use strict"
var n=a("ouhR")
var r=a.n(n)
var s=a("mX+G")
var i=a.n(s)
var o=a("Y/W1")
var l=a.n(o)
var c,u=function(e,t){return function(){return e.apply(t,arguments)}},d=function(e,t){for(var a in t)h.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},h={}.hasOwnProperty,p=[].slice,_=[].indexOf||function(e){for(var t=0,a=this.length;t<a;t++)if(t in this&&this[t]===e)return t
return-1}
c=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
t["a"]=function(e){d(t,e)
function t(){this._setStateAfterFetch=u(this._setStateAfterFetch,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.nameRegex=/rel="([a-z]+)/
t.prototype.linkRegex=/^<([^>]+)/
t.prototype.pageRegex=/\Wpage=(\d+)/
t.prototype.perPageRegex=/\Wper_page=(\d+)/
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.urls={}}
t.prototype.fetch=function(e){var a,n,s,i
null==e&&(e={})
e=l.a.clone(e)
this.loadedAll=false
n="fetching"+c(e.page)+"Page"
this[n]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(s=this.urls)?s[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
i=null
e.dataFilter=(o=this,function(t){o[n]=false
o._setStateAfterFetch(i,e)
return t})
var o
a=e.dfd||r.a.Deferred()
i=t.__super__.fetch.call(this,e).done(function(t){return function(n,r,s){var i
t.trigger("fetch",t,n,e)
null!=e.page&&t.trigger("fetch:"+e.page,t,n,e);(null!=(i=t.urls)?i.next:void 0)||t.trigger.apply(t,["fetched:last"].concat(p.call(arguments)))
return t.loadAll&&null!=t.urls.next?setTimeout((function(){return t.fetch({page:"next",dfd:a})})):a.resolve(n,r,s)}}(this))
a.abort=i.abort
a.success=a.done
a.error=a.fail
return a}
t.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
t.prototype._setStateAfterFetch=function(e,t){var a,n,r,s,i,o,l,c,u,d,h,p,f,m
null==this._urlCache&&(this._urlCache=[])
m=(o=t.url,_.call(this._urlCache,o)<0)
m||this._urlCache.push(t.url)
n=!this.atLeastOnePageFetched
h=n||("next"===(l=t.page)||"bottom"===l)&&m
p=n||("prev"===(c=t.page)||"top"===c)&&m
s=this.urls
this.urls=this._parsePageLinks(e)
h&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=s.bottom:delete this.urls.bottom
p&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=s.top:delete this.urls.top
f=null!=(u=this.urls.first)?u:this.urls.next
if(null!=f){i=parseInt(f.match(this.perPageRegex)[1],10);(null!=(a=null!=this.options?this.options:this.options={}).params?a.params:a.params={}).per_page=i}this.urls.last&&(r=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(r[1],10));(null!=(d=this.urls)?d.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
t.prototype._parsePageLinks=function(e){var t,a
t=null!=(a=e.getResponseHeader("link"))?a.split(","):void 0
null==t&&(t=[])
return l.a.reduce(t,(n=this,function(e,t){var a,r
a=t.match(n.nameRegex)[1]
r=t.match(n.linkRegex)[1]
e[a]=r
return e}),{})
var n}
return t}(i.a.Collection)},dbrX:function(e,t,a){"use strict"
var n=a("uYtQ")
var r=a("QLaP")
var s=a.n(r)
const i={}
const o={getCssVariant(){const e=window.ENV.use_high_contrast?"high_contrast":"normal_contrast"
const t=Object(n["c"])()?"_rtl":""
return`new_styles_${e}${t}`},getHandlebarsIndex:()=>window.BRANDABLE_CSS_HANDLEBARS_INDEX||[[],{}],urlFor(e,{combinedChecksum:t,includesNoVariables:a}){const n=a?"no_variables":o.getCssVariant()
return[window.ENV.ASSET_HOST||"","dist","brandable_css",n,`${e}-${t}.css`].join("/")},loadStylesheet(e,t){if(e in i)return
const a=document.createElement("link")
a.rel="stylesheet"
a.href=o.urlFor(e,t)
a.setAttribute("data-loaded-by-brandableCss",true)
document.head.appendChild(a)},loadStylesheetForJST({bundle:e,id:t}){const[a,n]=o.getHandlebarsIndex()
s()(n.hasOwnProperty(t),`requested to load stylesheet for template "${e}" (${t}) but no mapping is available for it!`)
if(1===n[t].length)return o.loadStylesheet(e,{combinedChecksum:n[t][0],includesNoVariables:true})
{let r=n[t][a.indexOf(o.getCssVariant())]
"number"===typeof r&&(r=n[t][r])
return o.loadStylesheet(e,{combinedChecksum:r,includesNoVariables:false})}}}
t["a"]=o},fhP7:function(e,t,a){"use strict"
a.d(t,"k",(function(){return n}))
a.d(t,"e",(function(){return r}))
a.d(t,"f",(function(){return s}))
a.d(t,"g",(function(){return i}))
a.d(t,"h",(function(){return o}))
a.d(t,"l",(function(){return l}))
a.d(t,"i",(function(){return c}))
a.d(t,"b",(function(){return u}))
a.d(t,"j",(function(){return d}))
a.d(t,"c",(function(){return h}))
a.d(t,"d",(function(){return p}))
a.d(t,"a",(function(){return _}))
const n="@"
const r="mentions-marker"
const s="span#"+r
const i="mention-menu"
const o="span#mention-menu"
const l=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const c="mentions.NavigationEvent"
const u="mentions.InputChangeEvent"
const d="mentions.SelectionEvent"
const h={backspace:8,enter:13,up:38,down:40,escape:27,tab:9}
const p={[h.up]:"UpArrow",[h.down]:"DownArrow",[h.enter]:"Enter"}
const _={ariaControlTemplate:e=>e+"-mention-popup",activeDescendant:(e,t)=>`${e}-mention-popup-item-${t}`}},jFoo:function(e,t,a){"use strict"
a.d(t,"b",(function(){return u}))
a.d(t,"a",(function(){return d}))
a.d(t,"c",(function(){return _}))
var n=a("fhP7")
const r="error"
const s="unsupported_subject"
const i="wrong_origin"
const o="bad_request"
const l=({targetWindow:e,origin:t,subject:a,message_id:n})=>{const l=(r={})=>{const s={subject:a+".response"}
n&&(s.message_id=n)
e?e.postMessage({...s,...r},t):console.error("Error sending response postMessage: target window does not exist")}
const c=()=>{l({})}
const u=(e,t)=>{const a={code:e}
t&&(a.message=t)
l({error:a})}
const d=e=>{u(r,e)}
const h=e=>{u(o,e)}
const p=()=>{u(i)}
const _=()=>{u(s)}
return{sendResponse:l,sendSuccess:c,sendError:u,sendGenericError:d,sendBadRequestError:h,sendWrongOriginError:p,sendUnsupportedSubjectError:_}}
var c=l
const u={}
const d=["lti.enableScrollEvents","lti.fetchWindowSize","lti.frameResize","lti.removeUnloadMessage","lti.resourceImported","lti.screenReaderAlert","lti.scrollToTop","lti.setUnloadMessage","lti.showAlert","lti.showModuleNavigation","org.imsglobal.lti.capabilities","org.imsglobal.lti.get_data","org.imsglobal.lti.put_data","requestFullWindowLaunch","toggleCourseNavigationMenu"]
const h=["A2ExternalContentReady","LtiDeepLinkingResponse",n["i"],n["b"],n["j"]]
async function p(e,t=false){if(e.data.source&&e.data.source.includes("react-devtools"))return false
let n
try{n="string"===typeof e.data?JSON.parse(e.data):e.data}catch(e){return false}const r=n.subject||n.messageType
const s=c({targetWindow:e.source,origin:e.origin,subject:r,message_id:n.message_id})
if(h.includes(r))return false
if(!d.includes(r)){t&&s.sendUnsupportedSubjectError()
return false}if(!t&&r.includes("org.imsglobal.lti"))return false
try{const i=await a("G4i8")(`./${r}.js`)
const o=i.default({message:n,event:e,responseMessages:s})
!o&&t&&s.sendSuccess()
return true}catch(e){console.error(`Error loading or executing message handler for "${r}": ${e}`)
t&&s.sendGenericError(e.message)
return false}}function _(){var e,t
const a=null===(e=ENV)||void 0===e||null===(t=e.FEATURES)||void 0===t?void 0:t.lti_platform_storage
window.addEventListener("message",e=>{""!==e.data&&p(e,a)})}},msTH:function(e,t,a){"use strict"
var n=a("ouhR")
var r=a.n(n)
var s=a("Y/W1")
var i=a.n(s)
var o=a("gI0r")
var l=a("HGxv")
const c=Object(l["useScope"])("user_content")
const u={translateMathmlForScreenreaders(e){var t,a
if(!(null!==(t=ENV)&&void 0!==t&&null!==(a=t.FEATURES)&&void 0!==a&&a.new_math_equation_handling)){const t=r()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const a=r()('<span class="hidden-readable"></span>')
a.html(t)
return a}},toMediaCommentLink(e){const t=r()(`<a\n        id='media_comment_${Object(o["a"])(r()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(o["a"])(r()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(o["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(o["a"])(r()(e).attr("data-alt"))}'\n      />`)
t.html(r()(e).html())
return t},convert(e,t={}){const a=r()("<div />").html(e)
a.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return u.toMediaCommentLink(this)}))
a.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){a.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=r()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=i.a.uniqueId("uc_")
let a="/object_snippet"
ENV.files_domain&&(a=`//${ENV.files_domain}${a}`)
const n=r()(`<form\n            action='${Object(o["a"])(a)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(o["a"])(t)}'\n            id='form-${Object(o["a"])(t)}'\n          />`)
n.append(r()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
n.append(r()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
r()("body").append(n)
setTimeout(()=>n.submit(),0)
return r()(`<iframe\n            class='user_content_iframe'\n            name='${Object(o["a"])(t)}'\n            style='width: ${Object(o["a"])(e.data("uc_width"))}; height: ${Object(o["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(o["a"])(c.t("User Content"))}'\n          />`)}))
a.find("img.equation_image").each((e,t)=>{const a=r()(t)
const n=u.translateMathmlForScreenreaders(a)
a.removeAttr("x-canvaslms-safe-mathml")
a.after(n)})}return a.html()}}
t["a"]=u}}])

//# sourceMappingURL=syllabus-c-5223218c71.js.map