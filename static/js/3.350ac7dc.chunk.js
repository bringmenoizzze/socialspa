(this.webpackJsonpkamatut=this.webpackJsonpkamatut||[]).push([[3],{297:function(e,t,a){e.exports={imageWrap:"ProfileInfo_imageWrap__3UCRl",profileImage:"ProfileInfo_profileImage__2wQqt",changeAvatarBtn:"ProfileInfo_changeAvatarBtn__2q-cy",descriptionBlock:"ProfileInfo_descriptionBlock__2RbFL",avatarImage:"ProfileInfo_avatarImage__3IinB",descriptionWrapper:"ProfileInfo_descriptionWrapper__Pofs6",lastVisit:"ProfileInfo_lastVisit__ZaA3e",statusBar:"ProfileInfo_statusBar__2g9OO",statusBarText:"ProfileInfo_statusBarText__15T3i",statusBarInput:"ProfileInfo_statusBarInput__2nj2N"}},299:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__FqfTZ",posts:"MyPosts_posts__2bmxW",btn:"MyPosts_btn__2XhDj"}},300:function(e,t,a){e.exports={item:"Post_item__3jAvQ",postText:"Post_postText__3eIQ_",likesInfo:"Post_likesInfo__gZVJr"}},301:function(e,t,a){"use strict";a.r(t);var s=a(29),n=a(30),r=a(32),o=a(31),l=a(33),i=a(0),u=a.n(i),c=a(297),p=a.n(c),m=a(65),f=a(130),d=a(133),_=function(e){var t=Object(i.useState)(!1),a=Object(d.a)(t,2),s=a[0],n=a[1],r=Object(i.useState)(e.status),o=Object(d.a)(r,2),l=o[0],c=o[1];Object(i.useEffect)((function(){c(e.status)}),[e.status]);return u.a.createElement("div",null,!s&&u.a.createElement("div",{className:p.a.statusBar},u.a.createElement("span",{onClick:function(){return n(!s)},className:p.a.statusBarText},e.status||"No status")),s&&u.a.createElement("div",{className:p.a.statusBar},u.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},onBlur:function(){n(!s),e.updateStatus(l)},autoFocus:!0,value:l})))},E=function(e){return e.profile?u.a.createElement("div",null,u.a.createElement("div",{className:p.a.imageWrap},u.a.createElement("img",{src:e.profile.photos.large,alt:"",className:p.a.profileImage}),u.a.createElement("div",{className:p.a.changeAvatarBtn},u.a.createElement(f.a,null))),u.a.createElement("div",{className:p.a.descriptionBlock},u.a.createElement("img",{src:e.profile.photos.large,alt:"",className:p.a.avatarImage}),u.a.createElement("div",{className:p.a.descriptionWrapper},u.a.createElement("h3",null,e.profile.fullName),u.a.createElement(_,{status:e.status,updateStatus:e.updateStatus}),u.a.createElement("p",{className:p.a.lastVisit},e.profile.aboutMe)))):u.a.createElement(m.a,null)},g=a(98),b=a(299),h=a.n(b),v=a(300),P=a.n(v),I=function(e){return u.a.createElement("div",null,u.a.createElement("div",{className:P.a.item},u.a.createElement("img",{src:"https://bit.ly/2OnFLgf",alt:""}),u.a.createElement("p",{className:P.a.postText},e.message),u.a.createElement("div",{className:P.a.likesInfo},u.a.createElement("p",null,u.a.createElement("span",null,e.likesCount)," Like"))))},B=a(92),j=a(132),k=a(55),N=a(77),O=Object(k.a)(10),S=Object(j.a)({form:"postAddMessageForm"})((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement(B.a,{component:N.b,name:"newPostBody",placeholder:"Enter your post...",validate:[k.b,O]}),u.a.createElement("button",{className:h.a.btn},"Add Post"))})),x=function(e){console.log("RENDER");var t=e.posts.map((function(e){return u.a.createElement(I,{message:e.message,likesCount:e.likesCount})}));return u.a.createElement("div",{className:h.a.postsBlock},u.a.createElement("div",null,u.a.createElement("h3",null,"My Posts"),u.a.createElement(S,{onSubmit:function(t){e.onAddPost(t.newPostBody)}})),u.a.createElement("div",{className:h.a.posts},t))},y=a(11),A=Object(y.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{onAddPost:function(t){e(Object(g.a)(t))}}}))(x),T=function(e){return u.a.createElement("div",null,u.a.createElement(E,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),u.a.createElement(A,{store:e.store}))},w=a(26),C=a(97),M=a(7),W=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return u.a.createElement(T,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(u.a.Component);t.default=Object(M.d)(Object(y.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:g.d,getStatus:g.c,updateStatus:g.e}),w.f,C.a)(W)}}]);
//# sourceMappingURL=3.350ac7dc.chunk.js.map