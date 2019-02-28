// build time:Thu Feb 28 2019 16:55:44 GMT+0800 (GMT+08:00)
"use strict";var type,username,repo,client_id,client_secret,no_comment,go_to_comment,btn_class,comments_target,recent_comments_target,loading_target;var github_addr="https://github.com/";var github_api_addr="https://api.github.com/repos/";var oschina_addr="http://git.oschina.net/";var oschina_api_addr="http://git.oschina.net/api/v5/repos/";var spinOpts={lines:13,length:10,width:6,radius:12,corners:1,rotate:0,direction:1,color:"#5882FA",speed:1,trail:60,shadow:false,hwaccel:false,className:"spinner",zIndex:2e9,top:"auto",left:"50%"};var _getComment=function e(t,n){var a=void 0,i=void 0,s=void 0;a=t.comments;i=t.comments_url;s=t.page;$.ajax({url:i+"?page="+s,dataType:"json",cache:false,crossDomain:true,data:client_id&&client_secret?"client_id="+client_id+"&client_secret="+client_secret:"",success:function r(i){if(!i||i.length<=0){n&&typeof n==="function"&&n(a);n=null;return}i.forEach(function(e){a.push(e)});s+=1;t.comments=a;t.page=s;e(t,n)},error:function o(e){n&&typeof n==="function"&&n(a);n=null}})};var _getCommentsUrl=function t(e,n){var a=void 0,i=void 0;var s=false;a=e.issue_title;i=e.page;var r=type=="github"?github_api_addr:oschina_api_addr;$.ajax({url:r+username+"/"+repo+"/issues?page="+i,dataType:"json",cache:false,crossDomain:true,data:client_id&&client_secret?"client_id="+client_id+"&client_secret="+client_secret:"",success:function o(r){if(!r||r.length<=0){n&&typeof n==="function"&&n("","");n=null;return}r.forEach(function(e){if(e.title&&e.title==a){n&&typeof n==="function"&&n(e.comments_url,e);s=true;n=null}});if(!s){i+=1;e.page=i;t(e,n)}return},error:function c(){n&&typeof n==="function"&&n("","");n=null}})};var _getIssue=function n(e,t){var n=type=="github"?github_api_addr:oschina_api_addr;var a=n+username+"/"+repo+"/issues/"+e;_getIssueByUrl(a,function(e){t&&typeof t==="function"&&t(e);t=null})};var _getIssueByUrl=function a(e,t){$.ajax({url:e,dataType:"json",cache:false,crossDomain:true,data:client_id&&client_secret?"client_id="+client_id+"&client_secret="+client_secret:"",success:function n(e){if(!e||e.length<=0){t&&typeof t==="function"&&t();t=null;return}var n=e;t&&typeof t==="function"&&t(n);t=null},error:function a(){t&&typeof t==="function"&&t();t=null}})};var _renderComment=function i(e){var t=timeago();var n=e.user;var a=marked(e.body);var i=t.format(e.created_at);var s=n.login==username?"current-user":"";var r=type=="github"?github_addr:oschina_addr;var o=n.login==username?'\n        <span class="timeline-comment-label text-bold tooltipped tooltipped-multiline tooltipped-s" aria-label="'+username+' is the author of this blog.">\n        Owner\n    </span>\n        ':"";return'\n        <div class="timeline-comment-wrapper js-comment-container">\n        <div class="avatar-parent-child timeline-comment-avatar">\n        <a href="'+r+n.login+'">\n        <img alt="@'+n.login+'" class="avatar rounded-1" height="44" src="'+n.avatar_url+'&amp;s=88" width="44">\n        </a>\n        </div>\n        <div id="issuecomment-310820108" class="comment previewable-edit js-comment js-task-list-container  timeline-comment js-reorderable-task-lists reorderable-task-lists '+s+'" data-body-version="0ff4a390ed2be378bf5044aa6dc1510b">\n\n        <div class="timeline-comment-header">\n        '+o+'\n        <h3 class="timeline-comment-header-text f5 text-normal">\n\n        <strong>\n        <a href="'+r+n.login+'" class="author">'+n.login+'</a>\n        \n    </strong>\n\n    commented  \n\n        <a href="#issuecomment-'+e.id+'" class="timestamp"><relative-time datetime="'+e.created_at+'" title="'+e.created_at+'">'+i+'</relative-time></a>\n\n    </h3>\n        </div>\n        \n        <table class="d-block">\n        <tbody class="d-block">\n        <tr class="d-block">\n        <td class="d-block comment-body markdown-body js-comment-body">\n        '+a+"\n    </td>\n        </tr>\n        </tbody>\n        </table>\n        </div>\n        </div>\n        "};var _renderRecentComment=function s(e,t,n,a,i,r){var o=type=="github"?github_addr:oschina_addr;var c='\n        <div class="comment-item">\n          <div class="row comment-widget-head">\n            <div class="xl-col-3 comment-widget-avatar">\n              <a href="'+o+e.login+'">\n                <img alt="@'+e.login+'" class="avatar rounded-1" height="44" src="'+e.avatar_url+'&amp;s=88" width="44">\n              </a>\n            </div>\n            <div class="comment-widget-body">\n              <span><a class="comment-widget-user" href="'+o+e.login+'" target="_blank">'+e.login+'</a> </span>\n              <div class="comment-widget-content">'+n+'</div>\n            </div>\n          </div>\n          <br/>\n          <div class="comment-widget-meta">\n            <span class="comment-widget-title">'+t+'</span> | <span class="comment-widget-date">'+a+"</span>\n          </div>\n        </div>\n        ";r&&typeof r==="function"&&r(c);r=null};var _getRecentCommentList=function r(e,t,n,a,i,s){if(n>=a||t>=i.length){s&&typeof s==="function"&&s(e);s=null;return}var o=i[t];if(!o)return;var c=marked(o.body);var d=o.title;var l=o.user;var m=timeago();var u=m.format(o.created_at);var _=o.html_url;if(!c||c==""){t++;r(e,t,n,a,i,s);s=null;return}if(!d){_getIssueByUrl(o.issue_url,function(o){_renderRecentComment(l,o.title,c,u,_,function(o){e+=o;t++;n++;r(e,t,n,a,i,s)})})}else{_renderRecentComment(l,d,c,u,_,function(o){e+=o;t++;n++;r(e,t,n,a,i,s)})}};var _renderRecentCommentList=function o(e,t){var n=0;var a=0;var i="";_getRecentCommentList(i,n,a,t,e,function(e){$(recent_comments_target).append(e)})};var _renderHTML=function c(e){var t=void 0,n=void 0,a=void 0,i=void 0;t=e.issue;n=e.comments;a=e.comments_url;i=e.issue_title;var s=type=="github"?github_addr:oschina_addr;var r=type=="github"?github_api_addr:oschina_api_addr;var o=type=="oschina"?'<a href="http://oschina.net" class="discussion-item-entity" target="_blank">OSChina issue</a>':'<a href="http://github.com" class="discussion-item-entity" target="_blank">Github issue</a>';var c='\n        <div class="discussion-item discussion-item-labeled">\n        <h3 class="discussion-item-header f5 text-normal" id="event-1157063333">\n\n        <span class="discussion-item-icon">\n        <svg aria-hidden="true" class="octicon octicon-tag" height="16" version="1.1" viewBox="0 0 16 16" width="14"><path fill-rule="evenodd" d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"></path></svg>\n        </span>\n        The above comments are provided by \n        <a href="http://github.com/wzpan/comment.js" class="discussion-item-entity" target="_blank">comment.js</a> with the help of '+o+".\n        </h3>\n        </div>\n        ";if((!t||!t.body||t.body=="")&&(!n||n.length<=0)){var d="\n            <div class='js-discussion no-comment'>\n            <span>"+no_comment+"</span>\n            </div>\n            ";$(comments_target).append(d)}else{var l='\n            <div class="discussion-timeline js-quote-selection-container">\n            <div class="js-discussion js-socket-channel">\n            ';if(t&&t.body&&t.body!=""){l+=_renderComment(t)}n.forEach(function(e){l+=_renderComment(e)});l+=c;l+="</div></div>";$(comments_target).append(l)}var m=void 0;if(!a){m=s+"/"+username+"/"+repo+"/issues/new?title="+i+"#issue_body"}else{m=a.replace(r,s).replace("comments","")+"#new_comment_field"}var u='\n        <p class="goto-comment">\n        <a href="'+m+'" class="'+btn_class+'" target="_blank">'+go_to_comment+"</a>\n        </p>\n        ";$(comments_target).append(u)};var CompareDate=function d(e,t){var n=e["created_at"].replace("T"," ").replace("Z","").replace(/-/g,"/");var a=t["created_at"].replace("T"," ").replace("Z","").replace(/-/g,"/");return new Date(n)>new Date(a)};var _getRecentIssues=function l(e,t){var n=void 0;n=e.count;var a=type=="github"?github_api_addr:oschina_api_addr;$.ajax({url:a+username+"/"+repo+"/issues?per_page=100&sort=created&direction=desc",dataType:"json",cache:false,crossDomain:true,data:client_id&&client_secret?"client_id="+client_id+"&client_secret="+client_secret:"",success:function i(e){if(e.length>n){if(navigator.userAgent.indexOf("MSIE")!=-1||navigator.userAgent.indexOf("Edge")!=-1||!!document.documentMode==true){e=e.sort(CompareDate).slice(0,5)}else{e=e.sort(CompareDate).reverse().slice(0,5)}}t&&typeof t==="function"&&t(e);t=null},error:function s(e){t&&typeof t==="function"&&t();t=null}})};var _getRecentComments=function m(e,t){var n=void 0;n=e.count;var a=type=="github"?github_api_addr:oschina_api_addr;$.ajax({url:a+username+"/"+repo+"/issues/comments?per_page=100&sort=created&direction=desc",dataType:"json",cache:false,crossDomain:true,data:client_id&&client_secret?"client_id="+client_id+"&client_secret="+client_secret:"",success:function i(e){if(e.length>n){if(navigator.userAgent.indexOf("MSIE")!=-1||navigator.userAgent.indexOf("Edge")!=-1||!!document.documentMode==true){e=e.sort(CompareDate).slice(0,5)}else{e=e.sort(CompareDate).reverse().slice(0,5)}}t&&typeof t==="function"&&t(e);t=null},error:function s(e){t&&typeof t==="function"&&t();t=null}})};var getRecentCommentsList=function u(e){var t=void 0,n=void 0;type=e.type;n=e.user;repo=e.repo;client_id=e.client_id;client_secret=e.client_secret;t=e.count;recent_comments_target=e.recent_comments_target;username=n;recent_comments_target=recent_comments_target?recent_comments_target:"#recent-comments";var a=new Array;_getRecentIssues(e,function(n){a=a.concat(n);_getRecentComments(e,function(e){a=a.concat(e);if(navigator.userAgent.indexOf("MSIE")!=-1||navigator.userAgent.indexOf("Edge")!=-1||!!document.documentMode==true){a=a.sort(CompareDate)}else{a=a.sort(CompareDate).reverse()}_renderRecentCommentList(a,t)})})};var getComments=function _(e){var t=void 0,n=void 0,a=void 0;type=e.type;a=e.user;repo=e.repo;client_id=e.client_id;client_secret=e.client_secret;no_comment=e.no_comment;go_to_comment=e.go_to_comment;t=e.issue_title;n=e.issue_id;btn_class=e.btn_class;comments_target=e.comments_target;loading_target=e.loading_target;comments_target=comments_target?comments_target:"#comment-thread";username=a;if(loading_target)var i=new Spinner(spinOpts);var s=timeago();var r;var o=new Array;type=type?type:"github";btn_class=btn_class?btn_class:"btn";loading_target&&i.spin($("div"+loading_target).get(0));if(!n||n=="undefined"||typeof n=="undefined"){_getCommentsUrl({issue_title:t,page:1},function(e,n){if(e!=""&&e!=undefined){_getComment({comments:o,comments_url:e,page:1},function(a){loading_target&&i.spin();_renderHTML({issue:n,comments:a,comments_url:e,issue_title:t});return})}else{loading_target&&i.spin();_renderHTML({issue:n,comments:o,comments_url:e,issue_title:t});return}})}else{var c=type=="github"?github_api_addr:oschina_api_addr;var d=c+username+"/"+repo+"/issues/"+n+"/comments";_getIssue(n,function(e){_getComment({comments:o,comments_url:d,page:1},function(n){loading_target&&i.spin();_renderHTML({issue:e,comments:n,comments_url:d,issue_title:t});loading_target&&i.spin();return})})}};
//rebuild by neat 