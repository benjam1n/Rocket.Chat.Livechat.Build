(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{EZ5h:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",function(){return k});var o=n("gDde"),i=n("XMrS"),a=n("U5IY"),s=n("Fl18"),c=n("/4k+"),u=n("cVMQ"),l=n("jdJj"),h=n("PyG4"),d=n("/1Qh"),f=n.n(d),p=n("eanU"),m=n.n(p),g=n("gxdA"),v=n.n(g),y=n("ajAD"),b=n.n(y),P=n("Eo3F"),w=n.n(P),C=n("DkJZ"),O=n.n(C),j=n("2Wrb");function D(){return(D=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=e(i.c,null,e(i.b,null,e(n.n(j).a,{width:20}))),U=e(b.a,{width:20}),M=e(O.a,{width:20}),k=function(t){var n,o;function d(){for(var n,o=arguments.length,d=new Array(o),p=0;o>p;p++)d[p]=arguments[p];return T(S(n=t.call.apply(t,[this].concat(d))||this),"state",{atBottom:!0,text:""}),T(S(n),"handleFilesDropTargetRef",function(e){n.filesDropTarget=e}),T(S(n),"handleMessagesContainerRef",function(e){n.messagesContainer=e?e.base:null}),T(S(n),"handleScrollTo",function(e){var t=n.props,r=t.onTop,o=t.onBottom;if(e===u.a.SCROLL_AT_BOTTOM)return n.setState({atBottom:!0}),void(o&&o());n.setState({atBottom:!1}),e===u.a.SCROLL_AT_TOP&&r&&r()}),T(S(n),"handleUploadClick",function(e){e.preventDefault(),n.filesDropTarget.browse()}),T(S(n),"handleSendClick",function(e){e.preventDefault(),n.handleSubmit(n.state.text)}),T(S(n),"handleSubmit",function(e){n.props.onSubmit&&(n.props.onSubmit(e),n.setState({text:""}))}),T(S(n),"handleChangeText",function(e){n.setState({text:e});var t=n.props.onChangeText;t&&t(e)}),T(S(n),"render",function(t,o){var d=o.atBottom,p=void 0===d||d,g=o.text,y=t.color,b=t.title,P=t.fontColor,C=t.uid,O=t.agent,j=t.typingUsernames,S=t.avatarResolver,T=t.conversationFinishedMessage,k=t.loading,A=t.onUpload,F=t.messages,_=t.uploads,x=void 0!==_&&_,I=t.emoji,E=void 0!==I&&I,q=t.options,Q=t.onChangeDepartment,W=t.onFinishChat,B=t.onRemoveUserData,z=t.lastReadMessageId,N=t.queueInfo,V=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;i.length>r;r++)0>t.indexOf(n=i[r])&&(o[n]=e[n]);return o}(t,["color","title","fontColor","uid","agent","typingUsernames","avatarResolver","conversationFinishedMessage","loading","onUpload","messages","uploads","emoji","options","onChangeDepartment","onFinishChat","onRemoveUserData","lastReadMessageId","queueInfo"]);return e(l.a,D({color:y,title:b||r.t("Need help?"),fontColor:P,agent:O||null,queueInfo:N,nopadding:!0,onChangeDepartment:Q,onFinishChat:W,onRemoveUserData:B,className:Object(h.d)(f.a,"chat")},V),e(a.a,{ref:n.handleFilesDropTargetRef,overlayed:!0,overlayText:r.t("Drop here to upload a file"),onUpload:A},e(l.a.Content,{nopadding:!0},e("div",{className:Object(h.d)(f.a,"chat__messages",{atBottom:p,loading:k})},e(u.a,{ref:n.handleMessagesContainerRef,avatarResolver:S,uid:C,messages:F,typingUsernames:j,conversationFinishedMessage:T,lastReadMessageId:z,onScrollTo:n.handleScrollTo}))),e(l.a.Footer,{options:q?e(s.c,null,e(c.a.Group,null,Q&&e(c.a.Item,{onClick:Q,icon:m.a},r.t("Change department")),B&&e(c.a.Item,{onClick:B,icon:w.a},r.t("Forget/Remove my data")),W&&e(c.a.Item,{danger:!0,onClick:W,icon:v.a},r.t("Finish this chat")))):null},e(i.a,{onUpload:A,onSubmit:n.handleSubmit,onChange:n.handleChangeText,placeholder:r.t("Type your message here"),value:g,pre:E&&R,post:e(i.c,null,0===g.length&&x&&e(i.b,{onClick:n.handleUploadClick},U),g.length>0&&e(i.b,{onClick:n.handleSendClick},M))}))))}),n}return o=t,(n=d).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o,d}(o.Component)}).call(this,n("gDde").h,n("fsQa").default)},mvzb:function(e,t,n){"use strict";(function(e,r){n.d(t,"b",function(){return C}),n.d(t,"a",function(){return O});var o=n("gDde"),i=n("Y3FI"),a=n("qPgm"),s=n("kQFM"),c=n("UEyv"),u=n("vBLd"),l=n("YSmr"),h=n("PyG4"),d=n("EZ5h"),f=n("81xT"),p=n("Saaw"),m=n("qoWs");function g(){return(g=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;i.length>r;r++)0>t.indexOf(n=i[r])&&(o[n]=e[n]);return o}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;arguments.length>t;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(t){var n,o;function s(){for(var n,o=arguments.length,s=new Array(o),l=0;o>l;l++)s[l]=arguments[l];return w(P(n=t.call.apply(t,[this].concat(s))||this),"state",{room:null,connectingAgent:!1,queueSpot:0,triggerQueueMessage:!0,estimatedWaitTime:null}),w(P(n),"checkConnectingAgent",function(){return new Promise(function(e,t){var r,o,i,a,s,c,u;if(a=n.state,s=o=(r=n.props).connecting,c=(i=r.queueInfo)&&i.spot||0,u=i&&i.estimatedWaitTimeSeconds,s!==a.connectingAgent||c!==a.queueSpot||u!==a.estimatedWaitTime)return n.state.connectingAgent=s,n.state.queueSpot=c,n.state.estimatedWaitTime=u,Promise.resolve(n.handleQueueMessage(o,i)).then(function(){try{return Promise.resolve(n.handleConnectingAgentAlert(s,Object(m.b)(i))).then(function(){try{return l.call(this)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t);function l(){return e()}return l.call(this)})}),w(P(n),"checkRoom",function(){var e=n.props.room,t=n.state.room;!e||t&&e._id===t._id||(n.state.room=e,setTimeout(p.e,500))}),w(P(n),"grantUser",function(){return new Promise(function(e,t){var r,o,i,s,c,u;return o=(r=n.props).token,s=r.guest,c=r.dispatch,(i=r.user)?e(i):(u=b({token:o},s),Promise.resolve(a.a.grantVisitor({visitor:u})).then(function(n){try{return Promise.resolve(c({user:n})).then(function(){try{return e()}catch(e){return t(e)}},t)}catch(e){return t(e)}},t))})}),w(P(n),"getRoom",function(){return new Promise(function(t,r){var o,i,s,c,l,d,f,m,g,v,y=function(e){return function(t){try{return Promise.resolve(s({loading:!1})).then(function(){try{return e&&e.call(this,t)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this)}.bind(this);return i=(o=n.props).alerts,s=o.dispatch,c=o.room,l=o.messages,d=Object(p.c)(l),c?t(c):Promise.resolve(s({loading:!0})).then(function(){try{var n=function(t){try{return g=t.data.error,v={id:Object(h.e)(),children:e.t("Error starting a new conversation: %{reason}",{reason:g}),error:!0,timeout:1e4},Promise.resolve(s({loading:!1,alerts:(i.push(v),i)})).then(function(){try{throw Object(u.b)(g),t}catch(e){return r(e)}},r)}catch(e){return y(r)(e)}};try{return f=Object(p.b)(),Promise.resolve(a.a.room(f)).then(function(e){try{return m=e,Promise.resolve(s({room:m,messages:d,noMoreMessages:!1})).then(function(){try{return Promise.resolve(Object(p.d)()).then(function(){try{return Object(u.a)("callback","chat-started"),y(t)(m)}catch(e){return n(e)}},n)}catch(e){return n(e)}},n)}catch(e){return n(e)}},n)}catch(e){n(e)}}catch(e){return r(e)}},r)})}),w(P(n),"handleTop",function(){Object(p.f)()}),w(P(n),"startTyping",Object(h.n)(function(e){return new Promise(function(t,r){var o,i;return o=e.rid,i=e.username,Promise.resolve(a.a.notifyVisitorTyping(o,i,!0)).then(function(){try{return n.stopTypingDebounced({rid:o,username:i}),t()}catch(e){return r(e)}},r)})},4500)),w(P(n),"stopTyping",function(e){return a.a.notifyVisitorTyping(e.rid,e.username,!1)}),w(P(n),"stopTypingDebounced",Object(h.f)(n.stopTyping,5e3)),w(P(n),"handleChangeText",function(){return new Promise(function(e){var t=n.props,r=t.user,o=t.room;return r&&r.username&&o&&o._id?(n.startTyping({rid:o._id,username:r.username}),e()):e()})}),w(P(n),"handleSubmit",function(e){return new Promise(function(t,r){var o,i,s,c,u,l,d,f;return""===e.trim()?t():Promise.resolve(n.grantUser()).then(function(){try{return Promise.resolve(n.getRoom()).then(function(p){try{o=p._id,s=(i=n.props).alerts,c=i.dispatch,u=i.token,l=i.user;var m=function(){try{return Promise.resolve(a.a.notifyVisitorTyping(o,l.username,!1)).then(function(){try{return t()}catch(e){return r(e)}},r)}catch(e){return r(e)}},g=function(e){try{return d=e.data.error,f={id:Object(h.e)(),children:d,error:!0,timeout:5e3},Promise.resolve(c({alerts:(s.push(f),s)})).then(function(){try{return m()}catch(e){return r(e)}},r)}catch(e){return r(e)}};try{return n.stopTypingDebounced.stop(),Promise.resolve(Promise.all([n.stopTyping({rid:o,username:l.username}),a.a.sendMessage({msg:e,token:u,rid:o})])).then(function(){try{return m()}catch(e){return g(e)}},g)}catch(e){g(e)}}catch(e){return r(e)}},r)}catch(e){return r(e)}},r)})}),w(P(n),"doFileUpload",function(t,r){return new Promise(function(o,i){var s,c,u,l,d,f,p,m;c=(s=n.props).alerts,u=s.dispatch;var g=function(){try{return o()}catch(e){return i(e)}},v=function(t){try{switch(d=(l=t.data).reason,f=l.sizeAllowed,p=e.t("FileUpload Error"),d){case"error-type-not-allowed":p=e.t("Media Types Not Accepted.");break;case"error-size-not-allowed":p=e.t("File exceeds allowed size of %{size}.",{size:f})}return m={id:Object(h.e)(),children:p,error:!0,timeout:5e3},Promise.resolve(u({alerts:(c.push(m),c)})).then(function(){try{return g()}catch(e){return i(e)}},i)}catch(e){return i(e)}};try{return Promise.resolve(a.a.uploadFile({rid:t,file:r})).then(function(){try{return g()}catch(e){return v(e)}},v)}catch(e){v(e)}})}),w(P(n),"handleUpload",function(e){return new Promise(function(t,r){var o;return Promise.resolve(n.grantUser()).then(function(){try{return Promise.resolve(n.getRoom()).then(function(i){try{return o=i._id,e.forEach(function(e){return n.doFileUpload(o,e)}),t()}catch(e){return r(e)}},r)}catch(e){return r(e)}},r)})}),w(P(n),"handleSoundStop",function(){return new Promise(function(e,t){var r,o;return o=(r=n.props).sound,Promise.resolve((0,r.dispatch)({sound:b(b({},void 0===o?{}:o),{},{play:!1})})).then(function(){try{return e()}catch(e){return t(e)}},t)})}),w(P(n),"onChangeDepartment",function(){Object(i.b)("/switch-department")}),w(P(n),"onFinishChat",function(){return new Promise(function(t,r){var o,i,s,c,u,l,d=function(e){return function(t){try{return Promise.resolve(s({loading:!1})).then(function(){try{return Promise.resolve(Object(p.a)()).then(function(){try{return e&&e.call(this,t)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this)}.bind(this);return Promise.resolve(f.a.confirm({text:e.t("Are you sure you want to finish this chat?")})).then(function(f){try{return f.success?(i=(o=n.props).alerts,s=o.dispatch,u=(c=void 0===(c=o.room)?{}:c)._id,Promise.resolve(s({loading:!0})).then(function(){try{var n=function(){try{return t()}catch(e){return r(e)}},o=function(){try{return l={id:Object(h.e)(),children:e.t("Error closing chat."),error:!0,timeout:0},Promise.resolve(s({alerts:(i.push(l),i)})).then(function(){try{return d(n)()}catch(e){return r(e)}},r)}catch(e){return d(r)(e)}};try{if(u)return Promise.resolve(a.a.closeChat({rid:u})).then(function(){try{return c.call(this)}catch(e){return o()}}.bind(this),o);function c(){return d(n)()}return c.call(this)}catch(e){o()}}catch(e){return r(e)}}.bind(this),r)):t()}catch(e){return r(e)}}.bind(this),r)})}),w(P(n),"onRemoveUserData",function(){return new Promise(function(t,r){var o,s,u,l,d=function(e){return function(t){try{return Promise.resolve(Object(c.a)()).then(function(){try{return Promise.resolve(u({loading:!1})).then(function(){try{return Object(i.b)("/chat-finished"),e&&e.call(this,t)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this)}.bind(this);return Promise.resolve(f.a.confirm({text:e.t("Are you sure you want to remove all of your personal data?")})).then(function(i){try{return i.success?(s=(o=n.props).alerts,u=o.dispatch,Promise.resolve(u({loading:!0})).then(function(){try{var n=function(){try{return t()}catch(e){return r(e)}},o=function(){try{return l={id:Object(h.e)(),children:e.t("Error removing user data."),error:!0,timeout:0},Promise.resolve(u({alerts:(s.push(l),s)})).then(function(){try{return d(n)()}catch(e){return r(e)}},r)}catch(e){return d(r)(e)}};try{return Promise.resolve(a.a.deleteVisitor()).then(function(){try{return d(n)()}catch(e){return o()}},o)}catch(e){o()}}catch(e){return r(e)}},r)):t()}catch(e){return r(e)}},r)})}),w(P(n),"canSwitchDepartment",function(){var e=n.props,t=e.departments;return e.allowSwitchingDepartments&&(void 0===t?{}:t).filter(function(e){return e.showOnRegistration}).length>1}),w(P(n),"canFinishChat",function(){var e=n.props;return void 0!==e.room||e.connecting}),w(P(n),"canRemoveUserData",function(){return n.props.allowRemoveUserData}),w(P(n),"showOptionsMenu",function(){return n.canSwitchDepartment()||n.canFinishChat()||n.canRemoveUserData()}),w(P(n),"render",function(e){var t=e.user,o=v(e,["user"]);return r(d.a,g({},o,{avatarResolver:h.h,uid:t&&t._id,onTop:n.handleTop,onChangeText:n.handleChangeText,onSubmit:n.handleSubmit,onUpload:n.handleUpload,options:n.showOptionsMenu(),onChangeDepartment:n.canSwitchDepartment()&&n.onChangeDepartment||null,onFinishChat:n.canFinishChat()&&n.onFinishChat||null,onRemoveUserData:n.canRemoveUserData()&&n.onRemoveUserData||null,onSoundStop:n.handleSoundStop}))}),n}o=t,(n=s).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var y=s.prototype;return y.handleConnectingAgentAlert=function(t,n){return new Promise(function(r,o){var i,a,s,c;return a=(i=this.props).dispatch,s=l.a.connectingAgentAlertId,c=i.alerts.filter(function(e){return e.id!==s}),t&&c.push({id:s,children:n||e.t("Please, wait for the next available agent.."),warning:!0,hideCloseButton:!0,timeout:0}),Promise.resolve(a({alerts:c})).then(function(){try{return r()}catch(e){return o(e)}},o)}.bind(this))},y.handleQueueMessage=function(e,t){return new Promise(function(n,r){var o,i,a,s,c,u,d,f,p;return t?(o=l.a.livechatQueueMessageId,a=(i=void 0===(i=t.message)?{}:i).text,s=i.user,this.props.room&&e&&a&&this.state.triggerQueueMessage?(this.state.triggerQueueMessage=!1,u=(c=this.props).dispatch,d=c.messages,f=new Date,p={_id:o,msg:a,u:s,ts:f.toISOString()},Promise.resolve(u({messages:Object(h.o)(d,p,function(e){return e._id===p._id},function(e){return e.ts})})).then(function(){try{return n()}catch(e){return r(e)}},r)):n()):n()}.bind(this))},y.componentDidMount=function(){return new Promise(function(e,t){return Promise.resolve(this.checkConnectingAgent()).then(function(){try{return Object(p.e)(),e()}catch(e){return t(e)}},t)}.bind(this))},y.componentWillReceiveProps=function(e){return new Promise(function(t,n){var r,o,i,a,s,c,u,h;if(i=(o=this.props).messages,a=o.alerts,s=o.dispatch,(r=e.messages)&&i&&r.length!==i.length&&e.visible&&!e.minimized){if(u=i[i.length-1],(c=r[r.length-1])&&u&&c._id!==u._id||1===r.length&&0===i.length)return h=a.filter(function(e){return e.id!==l.a.unreadMessagesAlertId}),Promise.resolve(s({alerts:h,unread:null,lastReadMessageId:c._id})).then(function(){try{return d.call(this)}catch(e){return n(e)}}.bind(this),n);function d(){return f.call(this)}return d.call(this)}function f(){return t()}return f.call(this)}.bind(this))},y.componentDidUpdate=function(){return new Promise(function(e,t){return Promise.resolve(this.checkConnectingAgent()).then(function(){try{return this.checkRoom(),e()}catch(e){return t(e)}}.bind(this),t)}.bind(this))},y.componentWillUnmount=function(){this.handleConnectingAgentAlert(!1)},s}(o.Component),O=function(t){var n=t.ref,o=v(t,["ref"]);return r(s.a,null,function(t){var i=t.config,a=i.settings,s=(a=void 0===a?{}:a).fileUpload,c=a.allowSwitchingDepartments,u=a.forceAcceptDataProcessingConsent,l=a.showConnecting,d=i.messages,f=(d=void 0===d?{}:d).conversationFinishedMessage,p=i.theme;p=void 0===p?{}:p;var m=i.departments,v=void 0===m?{}:m,y=t.iframe,b=(y=void 0===y?{}:y).theme,P=(b=void 0===b?{}:b).title,w=y.guest,O=t.token,j=t.agent,D=t.sound,S=t.user,T=t.room,R=t.messages,U=t.noMoreMessages,M=t.typing,k=t.loading,A=t.dispatch,F=t.alerts,_=t.visible,x=t.unread,I=t.lastReadMessageId,E=t.triggerAgent,q=t.queueInfo;return r(C,g({ref:n},o,{theme:{color:b.color||p.color,fontColor:b.fontColor,iconColor:b.iconColor,title:P},title:P||p.title||e.t("Need help?"),sound:D,token:O,user:S,agent:j?{_id:j._id,name:j.name,status:j.status,email:j.emails&&j.emails[0]&&j.emails[0].address,username:j.username,phone:j.phone&&j.phone[0]&&j.phone[0].phoneNumber||j.customFields&&j.customFields.phone,avatar:j.username?{description:j.username,src:Object(h.h)(j.username)}:void 0}:void 0,room:T,messages:R&&R.filter(function(e){return Object(h.c)(e)}),noMoreMessages:U,emoji:!1,uploads:s,typingUsernames:Array.isArray(M)?M:[],loading:k,showConnecting:l,connecting:!(!T||j||!l&&!q),dispatch:A,departments:v,allowSwitchingDepartments:c,conversationFinishedMessage:f||e.t("Conversation finished"),allowRemoveUserData:u,alerts:F,visible:_,unread:x,lastReadMessageId:I,guest:w,triggerAgent:E,queueInfo:q?{spot:q.spot,estimatedWaitTimeSeconds:q.estimatedWaitTimeSeconds,message:q.message}:void 0}))})};t.c=O}).call(this,n("fsQa").default,n("gDde").h)},"t2/N":function(e,t,n){"use strict";n.r(t);var r=n("EZ5h");n.d(t,"Chat",function(){return r.a});var o=n("mvzb");n.d(t,"ChatContainer",function(){return o.b}),n.d(t,"ChatConnector",function(){return o.a}),n.d(t,"default",function(){return o.c})}}]);