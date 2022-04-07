(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[39],{"0FJJ":function(t,e,i){"use strict"
var s=function(t,e){return function(){return t.apply(e,arguments)}},n={}.hasOwnProperty
e["a"]=function(){function t(t){null==t&&(t={})
this.normalizeBoolean=s(this.normalizeBoolean,this)
this.present=s(this.present,this)
this.excludesSmallMatches=s(this.excludesSmallMatches,this)
this.toJSON=s(this.toJSON,this)
this.percent=s(this.percent,this)
this.words=s(this.words,this)
this.originalityReportVisibility=t.originality_report_visibility||"immediate"
this.sPaperCheck=this.normalizeBoolean(t.s_paper_check)
this.internetCheck=this.normalizeBoolean(t.internet_check)
this.excludeBiblio=this.normalizeBoolean(t.exclude_biblio)
this.excludeQuoted=this.normalizeBoolean(t.exclude_quoted)
this.journalCheck=this.normalizeBoolean(t.journal_check)
this.excludeSmallMatchesType=t.exclude_small_matches_type
this.excludeSmallMatchesValue=t.exclude_small_matches_value||0
this.submitPapersTo=!t.hasOwnProperty("submit_papers_to")||this.normalizeBoolean(t.submit_papers_to)}t.prototype.words=function(){return"words"===this.excludeSmallMatchesType?this.excludeSmallMatchesValue:""}
t.prototype.percent=function(){return"percent"===this.excludeSmallMatchesType?this.excludeSmallMatchesValue:""}
t.prototype.toJSON=function(){return{s_paper_check:this.sPaperCheck,originality_report_visibility:this.originalityReportVisibility,internet_check:this.internetCheck,exclude_biblio:this.excludeBiblio,exclude_quoted:this.excludeQuoted,journal_check:this.journalCheck,exclude_small_matches_type:this.excludeSmallMatchesType,exclude_small_matches_value:this.excludeSmallMatchesValue,submit_papers_to:this.submitPapersTo}}
t.prototype.excludesSmallMatches=function(){return!(null==this.excludeSmallMatchesType)}
t.prototype.present=function(){var t,e,i,s
t={}
i=this
for(e in i){if(!n.call(i,e))continue
s=i[e]
t[e]=s}t.excludesSmallMatches=this.excludesSmallMatches()
t.words=this.words()
t.percent=this.percent()
return t}
t.prototype.normalizeBoolean=function(t){return["1",true,"true",1].includes(t)}
return t}()},"4M30":function(t,e,i){"use strict"
i.d(e,"a",(function(){return n}))
i.d(e,"b",(function(){return o}))
const s={}.hasOwnProperty
function n(t,e){for(const i in e)s.call(e,i)&&(t[i]=e[i])
function i(){this.constructor=t}i.prototype=e.prototype
t.prototype=new i
t.__super__=e.prototype
return t}function o(t,e){Object.keys(e).forEach(i=>Object.defineProperty(t,i,{get:e[i],enumerable:true,configurable:true}))
return t}},"85Cn":function(t,e,i){"use strict"
var s=i("mX+G")
var n=i.n(s)
var o=i("Y/W1")
var r=i.n(o)
i("ouhR")
var a=i("ZUSV")
var u=i("XE4h")
var l=function(t,e){return function(){return t.apply(e,arguments)}},h=function(t,e){for(var i in e)p.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},p={}.hasOwnProperty
e["a"]=function(t){h(e,t)
function e(){this.isSimple=l(this.isSimple,this)
this.datesJSON=l(this.datesJSON,this)
this.toJSON=l(this.toJSON,this)
this.blank=l(this.blank,this)
this.containsDefaultDueDate=l(this.containsDefaultDueDate,this)
this.getDefaultDueDate=l(this.getDefaultDueDate,this)
this.courseSectionIDs=l(this.courseSectionIDs,this)
return e.__super__.constructor.apply(this,arguments)}e.prototype.model=a["a"]
e.prototype.courseSectionIDs=function(){return this.pluck("course_section_id")}
e.prototype.comparator=function(t){return t.id}
e.prototype.getDefaultDueDate=function(){return this.detect((function(t){return t.getCourseSectionID()===u["a"].defaultDueDateSectionID}))}
e.prototype.containsDefaultDueDate=function(){return!!this.getDefaultDueDate()}
e.prototype.blank=function(){return this.select((function(t){return t.isBlank()}))}
e.prototype.toJSON=function(){var t
t=this.reject((function(t){return t.representsDefaultDueDate()}))
return r.a.map(t,(function(t){return t.toJSON().assignment_override}))}
e.prototype.datesJSON=function(){return this.map((function(t){return t.toJSON().assignment_override}))}
e.prototype.isSimple=function(){return 0===r.a.difference(this.courseSectionIDs(),[u["a"].defaultDueDateSectionID]).length}
return e}(n.a.Collection)},B9nD:function(t,e,i){"use strict"
i.d(e,"a",(function(){return u}))
var s=i("mX+G")
var n=i.n(s)
var o=i("HGxv")
var r=i("3H9/")
const a=Object(o["useScope"])("models_DateGroup")
class u extends n.a.Model{dueAt(){const t=this.get("due_at")
return t?r["a"].parse(t):null}unlockAt(){const t=this.get("unlock_at")||this.get("single_section_unlock_at")
return t?r["a"].parse(t):null}lockAt(){const t=this.get("lock_at")||this.get("single_section_lock_at")
return t?r["a"].parse(t):null}now(){const t=this.get("now")
return t?r["a"].parse(t):new Date}alwaysAvailable(){return!this.unlockAt()&&!this.lockAt()}pending(){const t=this.unlockAt()
return t&&t>this.now()}available(){return this.alwaysAvailable()||!this.lockAt()&&this.unlockAt()<this.now()}open(){return this.lockAt()&&!this.pending()&&!this.closed()}closed(){const t=this.lockAt()
return t&&t<this.now()}toJSON(){return{dueFor:this.get("title"),dueAt:this.dueAt(),unlockAt:this.unlockAt(),lockAt:this.lockAt(),available:this.available(),pending:this.pending(),open:this.open(),closed:this.closed()}}}u.prototype.defaults={get title(){return a.t("everyone_else","Everyone else")},due_at:null,unlock_at:null,lock_at:null}},FdVj:function(t,e,i){"use strict"
var s=i("qJBq")
var n=i.n(s)
var o=i("HGxv")
const r={_parseNumber:n.a,parse(t){if(null==t)return NaN
if("number"===typeof t)return t
let e=r._parseNumber(t.toString(),{thousands:o["default"].lookup("number.format.delimiter"),decimal:o["default"].lookup("number.format.separator")})
isNaN(e)&&(e=r._parseNumber(t))
t.toString().match(/e/)&&isNaN(e)&&(e=parseFloat(t))
return e},validate:t=>!isNaN(r.parse(t))}
e["a"]=r},GEFT:function(t,e,i){"use strict"
var s=i("mX+G")
var n=i.n(s)
i("Y/W1")
i("ouhR")
var o=i("B9nD")
var r=function(t,e){for(var i in e)a.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},a={}.hasOwnProperty
e["a"]=function(t){r(e,t)
function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.model=o["a"]
return e}(n.a.Collection)},UWiF:function(t,e,i){"use strict"
var s=function(t,e){return function(){return t.apply(e,arguments)}},n={}.hasOwnProperty
e["a"]=function(){function t(t){null==t&&(t={})
this.normalizeBoolean=s(this.normalizeBoolean,this)
this.present=s(this.present,this)
this.toJSON=s(this.toJSON,this)
this.originalityReportVisibility=t.originality_report_visibility||"immediate"
this.excludeQuoted=this.normalizeBoolean(t.exclude_quoted)
this.excludeSelfPlag=this.normalizeBoolean(t.exclude_self_plag)
this.storeInIndex=this.normalizeBoolean(t.store_in_index)}t.prototype.toJSON=function(){return{originality_report_visibility:this.originalityReportVisibility,exclude_quoted:this.excludeQuoted,exclude_self_plag:this.excludeSelfPlag,store_in_index:this.storeInIndex}}
t.prototype.present=function(){var t,e,i,s
t={}
i=this
for(e in i){if(!n.call(i,e))continue
s=i[e]
t[e]=s}return t}
t.prototype.normalizeBoolean=function(t){return["1",true,"true",1].includes(t)}
return t}()},XE4h:function(t,e,i){"use strict"
var s=i("mX+G")
var n=i("HGxv")
var o,r=function(t,e){return function(){return t.apply(e,arguments)}},a=function(t,e){for(var i in e)u.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},u={}.hasOwnProperty
o=Object(n["useScope"])("modelsSection")
e["a"]=function(t){a(e,t)
function e(){this.isDefaultDueDateSection=r(this.isDefaultDueDateSection,this)
return e.__super__.constructor.apply(this,arguments)}e.defaultDueDateSection=function(){return new e({id:e.defaultDueDateSectionID,name:o.t("overrides.everyone","Everyone")})}
e.defaultDueDateSectionID="0"
e.prototype.isDefaultDueDateSection=function(){return this.id===e.defaultDueDateSectionID}
return e}(s["Model"])},ZUSV:function(t,e,i){"use strict"
var s=i("mX+G")
var n=i.n(s)
var o=i("Y/W1")
var r=i.n(o)
var a=i("XE4h")
var u=i("HGxv")
var l=i("4M30")
var h,p=function(t,e){return function(){return t.apply(e,arguments)}},c=function(t,e){for(var i in e)d.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},d={}.hasOwnProperty
h=Object(u["useScope"])("assignmentOverride")
e["a"]=function(t){c(e,t)
function e(){this.combinedDates=p(this.combinedDates,this)
this.representsDefaultDueDate=p(this.representsDefaultDueDate,this)
this.getCourseSectionID=p(this.getCourseSectionID,this)
this.isBlank=p(this.isBlank,this)
return e.__super__.constructor.apply(this,arguments)}e.prototype.defaults={due_at_overridden:true,due_at:null,all_day:false,all_day_date:null,unlock_at_overridden:true,unlock_at:null,lock_at_overridden:true,lock_at:null}
e.conditionalRelease=Object(l["b"])({noop_id:"1"},{name:function(){return h.t("Mastery Paths")}})
e.prototype.initialize=function(){e.__super__.initialize.apply(this,arguments)
return this.on("change:course_section_id",this.clearID,this)}
e.prototype.clearID=function(){return this.set("id",void 0)}
e.prototype.parse=function(t){var e
e=t.assignment_override
return e}
e.prototype.toJSON=function(){return{assignment_override:e.__super__.toJSON.apply(this,arguments)}}
e.defaultDueDate=function(t){var i
null==t&&(t={})
i=r.a.extend(t,{course_section_id:a["a"].defaultDueDateSectionID})
return new e(i)}
e.prototype.isBlank=function(){return null==this.get("due_at")}
e.prototype.getCourseSectionID=function(){return this.get("course_section_id")}
e.prototype.representsDefaultDueDate=function(){return this.getCourseSectionID()===a["a"].defaultDueDateSectionID}
e.prototype.combinedDates=function(){var t
t=void 0===this.get("id")?null:this.get("id")
return""+(this.get("due_at")+this.get("unlock_at")+this.get("lock_at")+t)}
return e}(n.a.Model)},cRz0:function(t,e,i){"use strict"
i.d(e,"a",(function(){return u}))
var s=i("ik22")
var n=i("ouhR")
var o=i.n(n)
class r{constructor(){this.enabled=s["a"].pandaPubSettings
this.subscribe=(t,e,i)=>{const n=`/${s["a"].pandaPubSettings.application_id}${t}`
this.tokens[n]=e
const r=new o.a.Deferred
r.cancel=function(){}
this.client(t=>{const e=t.subscribe(n,t=>i(t))
e.then(r.resolve,r.reject)
return r.cancel=()=>e.cancel()})
return r}
this.on=(t,e)=>this.client(i=>i.on(t,e))
this.authExtension=()=>({outgoing:(t,e)=>{"/meta/subscribe"===t.channel&&t.subscription in this.tokens&&((t.ext||(t.ext={})).auth={token:this.tokens[t.subscription]})
return e(t)}})
this.subscribe=this.subscribe.bind(this)
this.on=this.on.bind(this)
this.authExtension=this.authExtension.bind(this)
this.faye=null
this.tokens={}}client(t){this.faye&&t(this.faye)
this.faye||o.a.getScript(s["a"].pandaPubSettings.push_url+"/client.js",()=>{this.faye=new window.Faye.Client(s["a"].pandaPubSettings.push_url)
this.faye.addExtension(this.authExtension())
t(this.faye)})}}var a=new r
class u{constructor(t,e,i){this.setToken=(t,e)=>{this.channel=t
this.token=e
a.enabled&&this.running&&this.subscribe()}
this.setOnData=t=>{this.streamingCB=t}
this.start=()=>{this.lastUpdate=Date.now()
this.running=true
this.startTimeout()
a.enabled&&this.subscribe()}
this.stop=()=>{this.stopTimeout()
a.enabled&&this.unsubscribe()
this.running=false}
this.isRunning=()=>this.running
this.startTimeout=()=>this.timeout=setTimeout(this.considerPoll,this.pollInterval)
this.stopTimeout=()=>clearTimeout(this.timeout)
this.considerPoll=()=>{let t=this.pollInterval
a.enabled&&(t=this.rarePollInterval)
return Date.now()-this.lastUpdate>=t?this.pollCB(this.pollDone):this.startTimeout()}
this.pollDone=()=>{this.lastUpdate=Date.now()
this.startTimeout()}
this.subscribe=()=>{if(this.subscription)return
if(!this.channel||!this.token)return
this.subscription=a.subscribe(this.channel,this.token,t=>{this.lastUpdate=Date.now()
this.streamingCB(t)})}
this.unsubscribe=()=>{this.subscription&&this.subscription.cancel()}
this.pollInterval=t
this.rarePollInterval=e
this.pollCB=i
this.running=false
this.lastUpdate=null
o()(window).on("beforeunload",()=>{this.timeout&&this.stopTimeout()})}}},qJBq:function(t,e){(function(){var e,i,s
s=[]
e={}
t.exports=i=function(t,i,n){var o,r,a,u,l,h,p,c,d
null==n&&(n=true)
if("string"===typeof i){if(2!==i.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
d=i[0],o=i[1]}else if(Array.isArray(i)){if(2!==i.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
d=i[0],o=i[1]}else{d=(null!=i?i.thousands:void 0)||(null!=i?i.group:void 0)||e.thousands
o=(null!=i?i.decimal:void 0)||e.decimal}p=""+d+o+n
h=s[p]
if(null==h){a=n?3:1
h=s[p]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+d+"\\d{"+a+",3})+)|\\d*))(?:\\"+o+"(\\d*))?\\s*$")}c=t.match(h)
if(!(null!=c&&3===c.length))return NaN
u=c[1].replace(new RegExp("\\"+d,"g"),"")
r=c[2]
l=parseFloat(u+"."+r)
return l}
t.exports.setOptions=function(t){var i,s
for(i in t){s=t[i]
e[i]=s}}
t.exports.factoryReset=function(){e={thousands:",",decimal:"."}}
t.exports.withOptions=function(t,e){null==e&&(e=true)
return function(s){return i(s,t,e)}}
t.exports.factoryReset()}).call(this)},tybv:function(t,e,i){"use strict"
var s=i("Y/W1")
var n=i.n(s)
function o(t,e=false){let i=n.a.isDate(t)
e&&!i&&(i=null===t)
if(!i)throw new Error(`\`${t}\` must be a Date or null`)}function r(t){if(null==t)throw new Error(`'${t}' must be an array or object`)
const e=["startDate","endDate","closeDate"]
const i=n.a.isArray(t)?t:[t]
n.a.each(i,t=>{n.a.each(e,e=>o(t[e]))})
return i}function a(t){const e=n.a.isString(t)
if(!e)throw new Error(`Grading period id \`${t}\` must be a String`)}class u{constructor(t){this.gradingPeriods=r(t)}static isAllGradingPeriods(t){a(t)
return"0"===t}get earliestValidDueDate(){const t=n.a.sortBy(this.gradingPeriods,"startDate")
const e=n.a.find(t,{isClosed:false})
return e?e.startDate:null}gradingPeriodForDueAt(t){o(t,true)
return n.a.find(this.gradingPeriods,e=>this.isDateInGradingPeriod(t,e.id,false))||null}isDateInGradingPeriod(t,e,i=true){if(i){o(t,true)
a(e)}const s=n.a.find(this.gradingPeriods,{id:e})
if(!s)throw new Error(`No grading period has id \`${e}\``)
return null===t?s.isLast:s.startDate<t&&t<=s.endDate}isDateInClosedGradingPeriod(t){const e=this.gradingPeriodForDueAt(t)
return!!e&&e.isClosed}}e["a"]=u},ygkh:function(t,e,i){"use strict"
var s=i("ouhR")
var n=i.n(s)
var o=i("Y/W1")
var r=i.n(o)
var a=i("mX+G")
var u=i("2gWY")
var l=i("0FJJ")
var h=i("UWiF")
var p=i("B9nD")
var c=i("85Cn")
var d=i("GEFT")
var g=i("HGxv")
var _=i("tybv")
var f=i("3H9/")
var m=i("FdVj")
var y=i("cRz0")
function b(t,e){if(!(t&&e))return false
const i=new URL(t)
const s=new URL(e)
return i.origin===s.origin}var T,D,v,S,w=function(t,e){return function(){return t.apply(e,arguments)}},x=function(t,e){for(var i in e)A.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},A={}.hasOwnProperty
T=Object(g["useScope"])("models_Assignment")
D=function(){var t
return null!=(t=ENV.PERMISSIONS)?t.manage:void 0}
v=function(){return r.a.includes(ENV.current_user_roles,"admin")}
S=function(){return r.a.includes(ENV.current_user_roles,"student")&&!D()}
e["a"]=function(t){var e
x(i,t)
function i(){this.quizzesRespondusEnabled=w(this.quizzesRespondusEnabled,this)
this.showGradersAnonymousToGradersCheckbox=w(this.showGradersAnonymousToGradersCheckbox,this)
this.pollUntilFinished=w(this.pollUntilFinished,this)
this.pollUntilFinishedLoading=w(this.pollUntilFinishedLoading,this)
this.pollUntilFinishedMigrating=w(this.pollUntilFinishedMigrating,this)
this.pollUntilFinishedImporting=w(this.pollUntilFinishedImporting,this)
this.pollUntilFinishedDuplicating=w(this.pollUntilFinishedDuplicating,this)
this.retry_migration=w(this.retry_migration,this)
this.duplicate_failed=w(this.duplicate_failed,this)
this.duplicate=w(this.duplicate,this)
this.setNullDates=w(this.setNullDates,this)
this._filterFrozenAttributes=w(this._filterFrozenAttributes,this)
this._getAssignmentType=w(this._getAssignmentType,this)
this._hasOnlyType=w(this._hasOnlyType,this)
this._submissionTypes=w(this._submissionTypes,this)
this.toView=w(this.toView,this)
this.submissionTypesFrozen=w(this.submissionTypesFrozen,this)
this.failedToImport=w(this.failedToImport,this)
this.isImporting=w(this.isImporting,this)
this.isQuizLTIAssignment=w(this.isQuizLTIAssignment,this)
this.is_quiz_assignment=w(this.is_quiz_assignment,this)
this.originalAssignmentName=w(this.originalAssignmentName,this)
this.originalAssignmentID=w(this.originalAssignmentID,this)
this.originalQuizID=w(this.originalQuizID,this)
this.originalCourseID=w(this.originalCourseID,this)
this.failedToMigrate=w(this.failedToMigrate,this)
this.failedToDuplicate=w(this.failedToDuplicate,this)
this.isMigrating=w(this.isMigrating,this)
this.isDuplicating=w(this.isDuplicating,this)
this.canDuplicate=w(this.canDuplicate,this)
this.singleSectionDueDate=w(this.singleSectionDueDate,this)
this.singleSection=w(this.singleSection,this)
this.allDates=w(this.allDates,this)
this.nonBaseDates=w(this.nonBaseDates,this)
this.hasPointsPossible=w(this.hasPointsPossible,this)
this.hasDueDate=w(this.hasDueDate,this)
this.multipleDueDates=w(this.multipleDueDates,this)
this.defaultDates=w(this.defaultDates,this)
this.showBuildButton=w(this.showBuildButton,this)
this.newMasteryConnectIconEnabled=w(this.newMasteryConnectIconEnabled,this)
this.newQuizzesAssignmentBuildButtonEnabled=w(this.newQuizzesAssignmentBuildButtonEnabled,this)
this.submissionTypeSelectionTools=w(this.submissionTypeSelectionTools,this)
this.dueDateRequiredForAccount=w(this.dueDateRequiredForAccount,this)
this.maxNameLengthRequiredForAccount=w(this.maxNameLengthRequiredForAccount,this)
this.maxNameLength=w(this.maxNameLength,this)
this.sisIntegrationSettingsEnabled=w(this.sisIntegrationSettingsEnabled,this)
this.postToSISName=w(this.postToSISName,this)
this.postToSISEnabled=w(this.postToSISEnabled,this)
this.labelId=w(this.labelId,this)
this.htmlBuildUrl=w(this.htmlBuildUrl,this)
this.htmlEditUrl=w(this.htmlEditUrl,this)
this.htmlUrl=w(this.htmlUrl,this)
this.objectType=w(this.objectType,this)
this.iconType=w(this.iconType,this)
this.useNewQuizIcon=w(this.useNewQuizIcon,this)
this.published=w(this.published,this)
this.isGpaScaled=w(this.isGpaScaled,this)
this.isLetterGraded=w(this.isLetterGraded,this)
this.isSimple=w(this.isSimple,this)
this.externalToolNewTab=w(this.externalToolNewTab,this)
this.externalToolDataStudentLabelText=w(this.externalToolDataStudentLabelText,this)
this.isMasteryConnectTool=w(this.isMasteryConnectTool,this)
this.externalToolCustomParamsStringified=w(this.externalToolCustomParamsStringified,this)
this.externalToolCustomParams=w(this.externalToolCustomParams,this)
this.externalToolDataStringified=w(this.externalToolDataStringified,this)
this.externalToolData=w(this.externalToolData,this)
this.externalToolUrl=w(this.externalToolUrl,this)
this.gradingStandardId=w(this.gradingStandardId,this)
this.groupCategoryId=w(this.groupCategoryId,this)
this.vericiteEnabled=w(this.vericiteEnabled,this)
this.turnitinEnabled=w(this.turnitinEnabled,this)
this.gradeGroupStudentsIndividually=w(this.gradeGroupStudentsIndividually,this)
this.vericiteAvailable=w(this.vericiteAvailable,this)
this.turnitinAvailable=w(this.turnitinAvailable,this)
this.allowedExtensions=w(this.allowedExtensions,this)
this.restrictFileExtensions=w(this.restrictFileExtensions,this)
this.notifyOfUpdate=w(this.notifyOfUpdate,this)
this.peerReviewsAssignAt=w(this.peerReviewsAssignAt,this)
this.peerReviewCount=w(this.peerReviewCount,this)
this.automaticPeerReviews=w(this.automaticPeerReviews,this)
this.anonymousPeerReviews=w(this.anonymousPeerReviews,this)
this.peerReviews=w(this.peerReviews,this)
this.graderCommentsVisibleToGraders=w(this.graderCommentsVisibleToGraders,this)
this.gradersAnonymousToGraders=w(this.gradersAnonymousToGraders,this)
this.anonymousGrading=w(this.anonymousGrading,this)
this.anonymousInstructorAnnotations=w(this.anonymousInstructorAnnotations,this)
this.moderatedGrading=w(this.moderatedGrading,this)
this.postToSIS=w(this.postToSIS,this)
this.isOnlineSubmission=w(this.isOnlineSubmission,this)
this.acceptsOnlineTextEntries=w(this.acceptsOnlineTextEntries,this)
this.acceptsMediaRecording=w(this.acceptsMediaRecording,this)
this.acceptsOnlineURL=w(this.acceptsOnlineURL,this)
this.acceptsAnnotatedDocument=w(this.acceptsAnnotatedDocument,this)
this.acceptsOnlineUpload=w(this.acceptsOnlineUpload,this)
this.withoutGradedSubmission=w(this.withoutGradedSubmission,this)
this.hasSubmittedSubmissions=w(this.hasSubmittedSubmissions,this)
this.allowedToSubmit=w(this.allowedToSubmit,this)
this.expectsSubmission=w(this.expectsSubmission,this)
this.submissionType=w(this.submissionType,this)
this.selectedSubmissionTypeToolId=w(this.selectedSubmissionTypeToolId,this)
this.isNonPlacementExternalTool=w(this.isNonPlacementExternalTool,this)
this.isGenericExternalTool=w(this.isGenericExternalTool,this)
this.defaultToolSelected=w(this.defaultToolSelected,this)
this.isQuickCreateDefaultTool=w(this.isQuickCreateDefaultTool,this)
this.defaultToOnPaper=w(this.defaultToOnPaper,this)
this.defaultToOnline=w(this.defaultToOnline,this)
this.defaultToNone=w(this.defaultToNone,this)
this.isDefaultTool=w(this.isDefaultTool,this)
this.shouldShowDefaultTool=w(this.shouldShowDefaultTool,this)
this.isNewAssignment=w(this.isNewAssignment,this)
this.submissionTypes=w(this.submissionTypes,this)
this.courseID=w(this.courseID,this)
this.omitFromFinalGrade=w(this.omitFromFinalGrade,this)
this.gradingType=w(this.gradingType,this)
this.inClosedGradingPeriod=w(this.inClosedGradingPeriod,this)
this.frozenAttributes=w(this.frozenAttributes,this)
this.frozen=w(this.frozen,this)
this.freezeOnCopy=w(this.freezeOnCopy,this)
this.canMove=w(this.canMove,this)
this.canDelete=w(this.canDelete,this)
this.canFreeze=w(this.canFreeze,this)
this.assignmentGroupId=w(this.assignmentGroupId,this)
this.secureParams=w(this.secureParams,this)
this.pointsPossible=w(this.pointsPossible,this)
this.name=w(this.name,this)
this.description=w(this.description,this)
this.importantDates=w(this.importantDates,this)
this.dueDateRequired=w(this.dueDateRequired,this)
this.lockAt=w(this.lockAt,this)
this.unlockAt=w(this.unlockAt,this)
this.dueAt=w(this.dueAt,this)
this.assignmentType=w(this.assignmentType,this)
this.isAssignment=w(this.isAssignment,this)
this.isNotGraded=w(this.isNotGraded,this)
this.defaultToolUrl=w(this.defaultToolUrl,this)
this.defaultToolName=w(this.defaultToolName,this)
this.isNonPlacementExternalTool=w(this.isNonPlacementExternalTool,this)
this.isExternalTool=w(this.isExternalTool,this)
this.isPage=w(this.isPage,this)
this.isDiscussionTopic=w(this.isDiscussionTopic,this)
this.isQuiz=w(this.isQuiz,this)
return i.__super__.constructor.apply(this,arguments)}i.mixin(u["a"])
i.prototype.resourceName="assignments"
e="https://canvas.instructure.com/lti/mastery_connect_assessment"
i.prototype.urlRoot=function(){return this._defaultUrl()}
i.prototype.defaults={publishable:true,hidden:false,unpublishable:true}
i.prototype.initialize=function(){var t,e,i,s
null!=(e=this.get("assignment_overrides"))&&this.set("assignment_overrides",new c["a"](e))
null!=(i=this.get("turnitin_settings"))&&this.set("turnitin_settings",new l["a"](i),{silent:true})
null!=(s=this.get("vericite_settings"))&&this.set("vericite_settings",new h["a"](s),{silent:true})
null!=(t=this.get("all_dates"))&&this.set("all_dates",new d["a"](t))
if(this.postToSISEnabled()&&!this.get("id")&&false!==this.get("post_to_sis"))return this.set("post_to_sis",!!("undefined"!==typeof ENV&&null!==ENV?ENV.POST_TO_SIS_DEFAULT:void 0))}
i.prototype.isQuiz=function(){return this._hasOnlyType("online_quiz")}
i.prototype.isDiscussionTopic=function(){return this._hasOnlyType("discussion_topic")}
i.prototype.isPage=function(){return this._hasOnlyType("wiki_page")}
i.prototype.isExternalTool=function(){return this._hasOnlyType("external_tool")}
i.prototype.isNonPlacementExternalTool=function(){return this.isExternalTool}
i.prototype.defaultToolName=function(){return ENV.DEFAULT_ASSIGNMENT_TOOL_NAME&&escape(ENV.DEFAULT_ASSIGNMENT_TOOL_NAME).replace(/%20/g," ")}
i.prototype.defaultToolUrl=function(){return ENV.DEFAULT_ASSIGNMENT_TOOL_URL}
i.prototype.isNotGraded=function(){return this._hasOnlyType("not_graded")}
i.prototype.isAssignment=function(){return!r.a.includes(this._submissionTypes(),"online_quiz","discussion_topic","not_graded","external_tool")}
i.prototype.assignmentType=function(t){if(!(arguments.length>0))return this._getAssignmentType()
return"assignment"===t?this.set("submission_types",["none"]):this.set("submission_types",[t])}
i.prototype.dueAt=function(t){if(!(arguments.length>0))return this.get("due_at")
return this.set("due_at",t)}
i.prototype.unlockAt=function(t){if(!(arguments.length>0))return this.get("unlock_at")
return this.set("unlock_at",t)}
i.prototype.lockAt=function(t){if(!(arguments.length>0))return this.get("lock_at")
return this.set("lock_at",t)}
i.prototype.dueDateRequired=function(t){if(!(arguments.length>0))return this.get("dueDateRequired")
return this.set("dueDateRequired",t)}
i.prototype.importantDates=function(t){if(!(arguments.length>0))return this.get("important_dates")
return this.set("important_dates",t)}
i.prototype.description=function(t){if(!(arguments.length>0))return this.get("description")
return this.set("description",t)}
i.prototype.name=function(t){if(!(arguments.length>0))return this.get("name")
return this.set("name",t)}
i.prototype.pointsPossible=function(t){if(!(arguments.length>0))return this.get("points_possible")||0
return m["a"].validate(t)?this.set("points_possible",m["a"].parse(t)):this.set("points_possible",t)}
i.prototype.secureParams=function(){return this.get("secure_params")}
i.prototype.assignmentGroupId=function(t){if(!(arguments.length>0))return this.get("assignment_group_id")
return this.set("assignment_group_id",t)}
i.prototype.canFreeze=function(){return null!=this.get("frozen_attributes")&&!this.frozen()&&!this.isQuizLTIAssignment()}
i.prototype.canDelete=function(){return!this.inClosedGradingPeriod()&&!this.frozen()}
i.prototype.canMove=function(){return!this.inClosedGradingPeriod()&&!r.a.includes(this.frozenAttributes(),"assignment_group_id")}
i.prototype.freezeOnCopy=function(){return this.get("freeze_on_copy")}
i.prototype.frozen=function(){return this.get("frozen")}
i.prototype.frozenAttributes=function(){return this.get("frozen_attributes")||[]}
i.prototype.inClosedGradingPeriod=function(){if(v())return false
return this.get("in_closed_grading_period")}
i.prototype.gradingType=function(t){if(!t)return this.get("grading_type")||"points"
return this.set("grading_type",t)}
i.prototype.omitFromFinalGrade=function(t){if(!(arguments.length>0))return this.get("omit_from_final_grade")
return this.set("omit_from_final_grade",t)}
i.prototype.courseID=function(){return this.get("course_id")}
i.prototype.submissionTypes=function(t){if(!(arguments.length>0))return this._submissionTypes()
return this.set("submission_types",t)}
i.prototype.isNewAssignment=function(){return!this.name()}
i.prototype.shouldShowDefaultTool=function(){if(!this.defaultToolUrl())return false
return this.defaultToolSelected()||this.isQuickCreateDefaultTool()||this.isNewAssignment()}
i.prototype.isDefaultTool=function(){return"external_tool"===this.submissionType()&&this.shouldShowDefaultTool()}
i.prototype.defaultToNone=function(){return"none"===this.submissionType()&&!this.shouldShowDefaultTool()}
i.prototype.defaultToOnline=function(){return"online"===this.submissionType()&&!this.shouldShowDefaultTool()}
i.prototype.defaultToOnPaper=function(){return"on_paper"===this.submissionType()&&!this.shouldShowDefaultTool()}
i.prototype.isQuickCreateDefaultTool=function(){return this.submissionTypes().includes("default_external_tool")}
i.prototype.defaultToolSelected=function(){return b(this.defaultToolUrl(),this.externalToolUrl())}
i.prototype.isGenericExternalTool=function(){return"external_tool"===this.submissionType()&&!this.isDefaultTool()&&!this.selectedSubmissionTypeToolId()}
i.prototype.isNonPlacementExternalTool=function(){return"external_tool"===this.submissionType()&&!this.selectedSubmissionTypeToolId()}
i.prototype.selectedSubmissionTypeToolId=function(){var t,e
if("external_tool"!==this.submissionType())return
e=null!=(t=this.get("external_tool_tag_attributes"))?t.content_id:void 0
if(e&&r.a.find(this.submissionTypeSelectionTools(),(function(t){return e===t.id})))return e}
i.prototype.submissionType=function(){var t
t=this._submissionTypes()
return r.a.includes(t,"none")||0===t.length?"none":r.a.includes(t,"on_paper")?"on_paper":r.a.includes(t,"external_tool")||r.a.includes(t,"default_external_tool")?"external_tool":"online"}
i.prototype.expectsSubmission=function(){var t
t=this._submissionTypes()
return t.length>0&&!r.a.includes(t,"")&&!r.a.includes(t,"none")&&!r.a.includes(t,"not_graded")&&!r.a.includes(t,"on_paper")&&!r.a.includes(t,"external_tool")}
i.prototype.allowedToSubmit=function(){var t
t=this._submissionTypes()
return this.expectsSubmission()&&!this.get("locked_for_user")&&!r.a.includes(t,"online_quiz")&&!r.a.includes(t,"attendance")}
i.prototype.hasSubmittedSubmissions=function(){return this.get("has_submitted_submissions")}
i.prototype.withoutGradedSubmission=function(){var t
t=this.get("submission")
return null==t||t.withoutGradedSubmission()}
i.prototype.acceptsOnlineUpload=function(){return!!r.a.includes(this._submissionTypes(),"online_upload")}
i.prototype.acceptsAnnotatedDocument=function(){return!!r.a.includes(this._submissionTypes(),"student_annotation")}
i.prototype.acceptsOnlineURL=function(){return!!r.a.includes(this._submissionTypes(),"online_url")}
i.prototype.acceptsMediaRecording=function(){return!!r.a.includes(this._submissionTypes(),"media_recording")}
i.prototype.acceptsOnlineTextEntries=function(){return!!r.a.includes(this._submissionTypes(),"online_text_entry")}
i.prototype.isOnlineSubmission=function(){return r.a.some(this._submissionTypes(),(function(t){return"online"===t||"online_text_entry"===t||"media_recording"===t||"online_url"===t||"online_upload"===t||"student_annotation"===t}))}
i.prototype.postToSIS=function(t){if(!(arguments.length>0))return this.get("post_to_sis")
return this.set("post_to_sis",t)}
i.prototype.moderatedGrading=function(t){if(!(arguments.length>0))return this.get("moderated_grading")||false
return this.set("moderated_grading",t)}
i.prototype.anonymousInstructorAnnotations=function(t){if(!(arguments.length>0))return this.get("anonymous_instructor_annotations")
return this.set("anonymous_instructor_annotations",t)}
i.prototype.anonymousGrading=function(t){if(!(arguments.length>0))return this.get("anonymous_grading")
return this.set("anonymous_grading",t)}
i.prototype.gradersAnonymousToGraders=function(t){if(!(arguments.length>0))return this.get("graders_anonymous_to_graders")
return this.set("graders_anonymous_to_graders",t)}
i.prototype.graderCommentsVisibleToGraders=function(t){if(!(arguments.length>0))return!!this.get("grader_comments_visible_to_graders")
return this.set("grader_comments_visible_to_graders",t)}
i.prototype.peerReviews=function(t){if(!(arguments.length>0))return this.get("peer_reviews")
return this.set("peer_reviews",t)}
i.prototype.anonymousPeerReviews=function(t){if(!(arguments.length>0))return this.get("anonymous_peer_reviews")
return this.set("anonymous_peer_reviews",t)}
i.prototype.automaticPeerReviews=function(t){if(!(arguments.length>0))return this.get("automatic_peer_reviews")
return this.set("automatic_peer_reviews",t)}
i.prototype.peerReviewCount=function(t){if(!(arguments.length>0))return this.get("peer_review_count")||0
return this.set("peer_review_count",t)}
i.prototype.peerReviewsAssignAt=function(t){if(!(arguments.length>0))return this.get("peer_reviews_assign_at")||null
return this.set("peer_reviews_assign_at",t)}
i.prototype.intraGroupPeerReviews=function(){return this.get("intra_group_peer_reviews")}
i.prototype.notifyOfUpdate=function(t){if(!(arguments.length>0))return this.get("notify_of_update")
return this.set("notify_of_update",t)}
i.prototype.restrictFileExtensions=function(){return!!this.allowedExtensions()}
i.prototype.allowedExtensions=function(t){if(!(arguments.length>0))return this.get("allowed_extensions")
return this.set("allowed_extensions",t)}
i.prototype.turnitinAvailable=function(){return"undefined"!==typeof this.get("turnitin_enabled")}
i.prototype.vericiteAvailable=function(){return"undefined"!==typeof this.get("vericite_enabled")}
i.prototype.gradeGroupStudentsIndividually=function(t){if(!(arguments.length>0))return this.get("grade_group_students_individually")
return this.set("grade_group_students_individually",t)}
i.prototype.turnitinEnabled=function(t){return 0===arguments.length?void 0!==this.get("turnitin_enabled")&&!!this.get("turnitin_enabled"):this.set("turnitin_enabled",t)}
i.prototype.vericiteEnabled=function(t){return 0===arguments.length?void 0!==this.get("vericite_enabled")&&!!this.get("vericite_enabled"):this.set("vericite_enabled",t)}
i.prototype.groupCategoryId=function(t){if(!(arguments.length>0))return this.get("group_category_id")
return this.set("group_category_id",t)}
i.prototype.canGroup=function(){return!this.get("has_submitted_submissions")}
i.prototype.gradingStandardId=function(t){if(!(arguments.length>0))return this.get("grading_standard_id")
return this.set("grading_standard_id",t)}
i.prototype.externalToolUrl=function(t){var e
e=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return e.url
e.url=t
return this.set("external_tool_tag_attributes",e)}
i.prototype.externalToolData=function(){var t
t=this.get("external_tool_tag_attributes")||{}
return t.external_data}
i.prototype.externalToolDataStringified=function(){var t
t=this.externalToolData()
if(t)return JSON.stringify(t)
return""}
i.prototype.externalToolCustomParams=function(t){var e
e=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return e.custom_params
e.custom_params=t
return this.set("external_tool_tag_attributes",e)}
i.prototype.externalToolCustomParamsStringified=function(){var t
t=this.externalToolCustomParams()
if(t)return JSON.stringify(t)
return""}
i.prototype.isMasteryConnectTool=function(){var t,i
i=this.get("external_tool_tag_attributes")||{}
return(null!=i&&null!=(t=i.external_data)?t.key:void 0)===e}
i.prototype.externalToolDataStudentLabelText=function(){var t
t=this.externalToolData()
if(!t)return""
if(1===t.studentCount)return T.t("Student")
return T.t("Students")}
i.prototype.externalToolNewTab=function(t){var e
e=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return e.new_tab
e.new_tab=t
return this.set("external_tool_tag_attributes",e)}
i.prototype.isSimple=function(){var t
t=this.get("assignment_overrides")
return"points"===this.gradingType()&&"none"===this.submissionType()&&!this.groupCategoryId()&&!this.peerReviews()&&!this.frozen()&&(!t||t.isSimple())}
i.prototype.isLetterGraded=function(){return"letter_grade"===this.gradingType()}
i.prototype.isGpaScaled=function(){return"gpa_scale"===this.gradingType()}
i.prototype.published=function(t){if(!(arguments.length>0))return this.get("published")
return this.set("published",t)}
i.prototype.useNewQuizIcon=function(){return ENV.FLAGS&&ENV.FLAGS.newquizzes_on_quiz_page&&(this.isQuiz()&&S()||this.isQuizLTIAssignment())}
i.prototype.position=function(t){if(!(arguments.length>0))return this.get("position")||0
return this.set("position",t)}
i.prototype.iconType=function(){if(this.useNewQuizIcon())return"quiz icon-Solid"
if(this.isQuiz())return"quiz"
if(this.isDiscussionTopic())return"discussion"
if(this.isPage())return"document"
return"assignment"}
i.prototype.objectType=function(){if(this.isQuiz())return"Quiz"
if(this.isDiscussionTopic())return"Discussion"
if(this.isPage())return"WikiPage"
return"Assignment"}
i.prototype.objectTypeDisplayName=function(){if(this.isQuiz()||this.isQuizLTIAssignment()&&S())return T.t("Quiz")
if(this.isQuizLTIAssignment())return T.t("New Quiz")
if(this.isDiscussionTopic())return T.t("Discussion Topic")
if(this.isPage())return T.t("Page")
return T.t("Assignment")}
i.prototype.htmlUrl=function(){return this.isQuizLTIAssignment()&&D()&&ENV.FLAGS&&ENV.FLAGS.new_quizzes_modules_support?this.htmlEditUrl():this.get("html_url")}
i.prototype.htmlEditUrl=function(){return this.get("html_url")+"/edit"}
i.prototype.htmlBuildUrl=function(){return this.get("html_url")}
i.prototype.labelId=function(){return this.id}
i.prototype.postToSISEnabled=function(){return ENV.POST_TO_SIS}
i.prototype.postToSISName=function(){return ENV.SIS_NAME}
i.prototype.sisIntegrationSettingsEnabled=function(){return ENV.SIS_INTEGRATION_SETTINGS_ENABLED}
i.prototype.maxNameLength=function(){return ENV.MAX_NAME_LENGTH}
i.prototype.maxNameLengthRequiredForAccount=function(){return ENV.MAX_NAME_LENGTH_REQUIRED_FOR_ACCOUNT}
i.prototype.dueDateRequiredForAccount=function(){return ENV.DUE_DATE_REQUIRED_FOR_ACCOUNT}
i.prototype.submissionTypeSelectionTools=function(){return ENV.SUBMISSION_TYPE_SELECTION_TOOLS||[]}
i.prototype.newQuizzesAssignmentBuildButtonEnabled=function(){return ENV.NEW_QUIZZES_ASSIGNMENT_BUILD_BUTTON_ENABLED}
i.prototype.newMasteryConnectIconEnabled=function(){return ENV.FLAGS&&ENV.FLAGS.updated_mastery_connect_icon}
i.prototype.showBuildButton=function(){return this.isQuizLTIAssignment()&&this.newQuizzesAssignmentBuildButtonEnabled()}
i.prototype.defaultDates=function(){var t
t=this.singleSection()
return new p["a"]({due_at:this.get("due_at"),unlock_at:this.get("unlock_at"),lock_at:this.get("lock_at"),single_section_unlock_at:null!=t?t.unlockAt:void 0,single_section_lock_at:null!=t?t.lockAt:void 0})}
i.prototype.multipleDueDates=function(){var t,e
t=this.get("all_dates_count")
if(t&&t>1)return true
e=this.get("all_dates")
return e&&e.length>1}
i.prototype.hasDueDate=function(){return!this.isPage()}
i.prototype.hasPointsPossible=function(){return!this.isQuiz()&&!this.isPage()}
i.prototype.nonBaseDates=function(){var t,e
t=this.get("all_dates")
if(!t)return false
e=r.a.filter(t.models,(function(t){return t&&!t.get("base")}))
return e.length>0}
i.prototype.allDates=function(){var t,e
t=this.get("all_dates")
e=t&&t.models||[]
return r.a.map(e,(function(t){return t.toJSON()}))}
i.prototype.singleSection=function(){var t,e,i,s
t=this.allDates()
if(!t||1!==t.length)return null
for(e=0,i=t.length;e<i;e++){s=t[e]
return s}}
i.prototype.singleSectionDueDate=function(){var t,e,i,s
if(this.multipleDueDates()||this.dueAt())return this.dueAt()
t=this.allDates()
for(e=0,i=t.length;e<i;e++){s=t[e]
if(s.dueAt)return s.dueAt.toISOString()}}
i.prototype.canDuplicate=function(){return this.get("can_duplicate")}
i.prototype.isDuplicating=function(){return"duplicating"===this.get("workflow_state")}
i.prototype.isMigrating=function(){return"migrating"===this.get("workflow_state")}
i.prototype.failedToDuplicate=function(){return"failed_to_duplicate"===this.get("workflow_state")}
i.prototype.failedToMigrate=function(){return"failed_to_migrate"===this.get("workflow_state")}
i.prototype.originalCourseID=function(){return this.get("original_course_id")}
i.prototype.originalQuizID=function(){return this.get("original_quiz_id")}
i.prototype.originalAssignmentID=function(){return this.get("original_assignment_id")}
i.prototype.originalAssignmentName=function(){return this.get("original_assignment_name")}
i.prototype.is_quiz_assignment=function(){return this.get("is_quiz_assignment")}
i.prototype.isQuizLTIAssignment=function(){return this.get("is_quiz_lti_assignment")}
i.prototype.isImporting=function(){return"importing"===this.get("workflow_state")}
i.prototype.failedToImport=function(){return"failed_to_import"===this.get("workflow_state")}
i.prototype.submissionTypesFrozen=function(){return r.a.includes(this.frozenAttributes(),"submission_types")}
i.prototype.toView=function(){var t,e,i,s,n
e=["acceptsAnnotatedDocument","acceptsMediaRecording","acceptsOnlineTextEntries","acceptsOnlineURL","acceptsOnlineUpload","allDates","allowedExtensions","anonymousGrading","anonymousInstructorAnnotations","anonymousPeerReviews","assignmentGroupId","automaticPeerReviews","canFreeze","defaultToNone","defaultToOnPaper","defaultToOnline","defaultToolName","description","dueAt","dueDateRequired","externalToolCustomParams","externalToolCustomParamsStringified","externalToolData","externalToolDataStringified","externalToolDataStudentLabelText","externalToolNewTab","externalToolUrl","failedToDuplicate","failedToImport","failedToMigrate","freezeOnCopy","frozen","frozenAttributes","gradeGroupStudentsIndividually","gradersAnonymousToGraders","gradingStandardId","gradingType","groupCategoryId","hasDueDate","hasPointsPossible","htmlEditUrl","htmlBuildUrl","htmlUrl","iconType","inClosedGradingPeriod","isDefaultTool","isDuplicating","isExternalTool","isGenericExternalTool","isGpaScaled","isImporting","isLetterGraded","isMasteryConnectTool","isMigrating","isNonPlacementExternalTool","isNotGraded","isOnlineSubmission","isOnlyVisibleToOverrides","isQuizLTIAssignment","isSimple","is_quiz_assignment","labelId","lockAt","moderatedGrading","multipleDueDates","name","newQuizzesAssignmentBuildButtonEnabled","nonBaseDates","notifyOfUpdate","objectTypeDisplayName","omitFromFinalGrade","originalAssignmentName","peerReviewCount","peerReviews","peerReviewsAssignAt","pointsPossible","position","postToSIS","postToSISEnabled","published","restrictFileExtensions","secureParams","selectedSubmissionTypeToolId","showBuildButton","showGradersAnonymousToGradersCheckbox","singleSectionDueDate","submissionType","submissionTypeSelectionTools","submissionTypesFrozen","turnitinAvailable","turnitinEnabled","unlockAt","vericiteAvailable","vericiteEnabled","importantDates","newMasteryConnectIconEnabled"]
i={id:this.get("id"),is_master_course_child_content:this.get("is_master_course_child_content"),restricted_by_master_course:this.get("restricted_by_master_course"),master_course_restrictions:this.get("master_course_restrictions")}
for(s=0,n=e.length;s<n;s++){t=e[s]
i[t]=this[t]()}return i}
i.prototype.toJSON=function(){var t,e,s,n
t=i.__super__.toJSON.apply(this,arguments)
t=this._filterFrozenAttributes(t);(null!=(e=ENV.MASTER_COURSE_DATA)?e.is_master_course_child_content:void 0)&&(null!=(s=ENV.MASTER_COURSE_DATA)&&null!=(n=s.master_course_restrictions)?n.content:void 0)&&delete t.description
return this.alreadyScoped?t:{assignment:t}}
i.prototype.inGradingPeriod=function(t){var e,i
e=this.get("all_dates")
i=new _["a"](t)
return e?r.a.some(e.models,(function(e){return i.isDateInGradingPeriod(e.dueAt(),t.id)})):i.isDateInGradingPeriod(f["a"].parse(this.dueAt()),t.id)}
i.prototype.search=function(t,e){var i
i=""===t||this.get("name").match(t)
i&&e&&(i=this.inGradingPeriod(e))
if(i){this.set("hidden",false)
return true}this.set("hidden",true)
return false}
i.prototype.endSearch=function(){return this.set("hidden",false)}
i.prototype.parse=function(t){var e,s,n
t=i.__super__.parse.call(this,t)
null!=(e=t.assignment_overrides)&&(t.assignment_overrides=new c["a"](e))
null!=(s=t.turnitin_settings)&&(t.turnitin_settings=new l["a"](s))
null!=(n=t.vericite_settings)&&(t.vericite_settings=new h["a"](n))
return t}
i.prototype.doNotParse=function(){return this.parse=function(){return{}}}
i.prototype._submissionTypes=function(){return this.get("submission_types")||[]}
i.prototype._hasOnlyType=function(t){var e
e=this._submissionTypes()
return 1===e.length&&e[0]===t}
i.prototype._getAssignmentType=function(){return this.isDiscussionTopic()?"discussion_topic":this.isPage()?"wiki_page":this.isQuiz()?"online_quiz":this.isExternalTool()?"external_tool":this.isNotGraded()?"not_graded":"assignment"}
i.prototype._filterFrozenAttributes=function(t){var e,i
i=this.attributes
for(e in i){if(!A.call(i,e))continue
i[e]
r.a.includes(this.frozenAttributes(),e)&&delete t[e]}r.a.includes(this.frozenAttributes(),"title")&&delete t.name
r.a.includes(this.frozenAttributes(),"group_category_id")&&delete t.grade_group_students_individually
if(r.a.includes(this.frozenAttributes(),"peer_reviews")){delete t.automatic_peer_reviews
delete t.peer_review_count
delete t.peer_reviews_assign_at}delete t.frozen
delete t.frozen_attributes
return t}
i.prototype.setNullDates=function(){this.dueAt(null)
this.lockAt(null)
this.unlockAt(null)
return this}
i.prototype.publish=function(){return this.save("published",true)}
i.prototype.unpublish=function(){return this.save("published",false)}
i.prototype.disabledMessage=function(){return T.t("Can't unpublish %{name} if there are student submissions",{name:this.get("name")})}
i.prototype.duplicate=function(t){var e,i
i=this.courseID()
e=this.id
return n.a.ajaxJSON("/api/v1/courses/"+i+"/assignments/"+e+"/duplicate","POST",{},t)}
i.prototype.duplicate_failed=function(t){var e,i,s,o,r
r=this.courseID()
o=this.id
i=this.originalCourseID()
e=this.originalAssignmentID()
s="?target_assignment_id="+o
i!==r&&(s+="&target_course_id="+r)
return n.a.ajaxJSON("/api/v1/courses/"+i+"/assignments/"+e+"/duplicate"+s,"POST",{},t)}
i.prototype.retry_migration=function(t){var e,i,s
e=this.courseID()
s=this.originalQuizID()
i=this.get("id")
return n.a.ajaxJSON("/api/v1/courses/"+e+"/content_exports?export_type=quizzes2&quiz_id="+s+"&failed_assignment_id="+i+"&include[]=migrated_assignment","POST",{},t)}
i.prototype.pollUntilFinishedDuplicating=function(t){null==t&&(t=3e3)
return this.pollUntilFinished(t,this.isDuplicating)}
i.prototype.pollUntilFinishedImporting=function(t){null==t&&(t=3e3)
return this.pollUntilFinished(t,this.isImporting)}
i.prototype.pollUntilFinishedMigrating=function(t){null==t&&(t=3e3)
return this.pollUntilFinished(t,this.isMigrating)}
i.prototype.pollUntilFinishedLoading=function(t){null==t&&(t=3e3)
if(this.isDuplicating())return this.pollUntilFinishedDuplicating(t)
if(this.isImporting())return this.pollUntilFinishedImporting(t)
if(this.isMigrating())return this.pollUntilFinishedMigrating(t)}
i.prototype.pollUntilFinished=function(t,e){var i
i=new y["a"](t,5*t,(s=this,function(t){return s.fetch().always((function(){t()
if(!e())return i.stop()}))}))
var s
return i.start()}
i.prototype.isOnlyVisibleToOverrides=function(t){if(!(arguments.length>0))return this.get("only_visible_to_overrides")||false
return this.set("only_visible_to_overrides",t)}
i.prototype.isRestrictedByMasterCourse=function(){return this.get("is_master_course_child_content")&&this.get("restricted_by_master_course")}
i.prototype.showGradersAnonymousToGradersCheckbox=function(){return this.moderatedGrading()&&this.get("grader_comments_visible_to_graders")}
i.prototype.quizzesRespondusEnabled=function(){return this.get("require_lockdown_browser")&&this.isQuizLTIAssignment()&&S()}
return i}(a["Model"])}}])

//# sourceMappingURL=39-c-27c9b28fc7.js.map