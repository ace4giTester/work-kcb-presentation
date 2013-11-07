
if( ! window.console ){ console = { log : function(){} }; }

/*
 * layout 관련 기능 수행
 * - gnb메뉴
 * - familySite 셀렉트박스
 * - ▲ 처음으로 돌아가기(스크롤 효과)
 */
(function($){
	var layout;
	
	$(document).ready(function(){
		// 개별페이지에서 막음
		if($("#page-header").length ){
			layout = window.layout = new Layout();
		}

		/* 현업 확인용 레이아웃 header,footer 붙이기 */		
		if( ! $("#page-header").length && $("#page-contents").length ){
			/* ============================================================
			 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
			 *
			 * Open source under the BSD License.
			 *
			 * Copyright ⓒ 2008 George McGinley Smith
			 * All rights reserved.
			 * https://raw.github.com/danro/jquery-easing/master/LICENSE
			 * ======================================================== */
			 jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});
			
			var $header = $('<p id="skipnavi"><a href="#skip-contents">본문바로가기</a></p><!-- header --><div id="page-header"><div class="bgline"></div><!-- logo --><h1 class="logo"><a href="../index.html"><img src="../../rscs/images/layout/logo.png" alt="신용과 사람" /></a></h1><!-- gnb --><div id="page-gnb"><h2>신용과 사람 메뉴</h2><!--활성화될 메뉴의 1뎁스에 class="current1" 를 붙여주세요활성화될 메뉴의 2뎁스에 class="current2" 를 붙여주세요활성화될 메뉴의 3뎁스에 class="current3" 를 붙여주세요--><ul class="gnb"><li class="menu menu1"><a class="menu-title" href="../abt/abtKcare.html">서비스소개</a></li><li class="menu menu2"><a class="menu-title" href="#">내 정보등록</a><ul class="layer"><li><a href="#">내 정보등록이란?</a></li><li><a href="../reg/regGuideInternet-income.html">등록방법 안내</a><ul><li><a href="../reg/regGuideInternet-income.html">인터넷등록</a></li><li><a href="../reg/regGuidePost.html">우편등록</a></li><li><a href="../reg/regGuideVisit.html">방문등록</a></li><li><a href="../reg/regGuideFax.html">FAX등록</a></li></ul> </li><li><a href="../reg/regInternet-income.html">인터넷등록</a></li></ul></li><li class="menu menu3"><a class="menu-title" href="#">신용진단</a><ul class="layer"><li><a href="../dig/digMain.html">종합진단</a></li><li><a href="../dig/digCreditAction.html">신용행동</a></li><li><a href="../dig/digRepay.html">신용여력</a></li><li><a href="../dig/digCreditTendency.html">신용성향</a></li></ul></li><li class="menu menu4"><a class="menu-title" href="../std/stdMain.html">스스로 신용공부</a></li><li class="menu menu5"><a class="menu-title" href="#">참여마당</a><ul class="layer"><li><a href="../pat/patFavorite.html">자주하는 질문</a></li><li><a href="../pat/pat1n1QNA-list.html">1:1 Q&amp;A</a></li><li><a href="../pat/patOpenQNA-list.html">열린 Q&amp;A</a></li><li><a href="../pat/patDiscuss-main.html">제안과 토론방</a></li><li><a href="../pat/patKCBSecurity.html">KCB 보안센터</a></li><li><a href="../pat/patNotice-list.html">공지사항</a></li></ul></li></ul></div><script type="text/javascript">$("#page-gnb ul.gnb").gnbMenu();</script><!-- //gnb --><!-- footer --><div id="footer"><h2>신용과 사람 정책 및 약관</h2><ul class="menus"><li><a title="새창" target="_blank" href="http://koreacb.com/kr/introduction/summary/">회사소개</a></li><li><a href="../etc/agree-use.html">이용약관</a></li><li><a href="../etc/agree-personInfo-treat.html">개인정보취급방침</a></li><li><a href="../etc/agree-personInfo-progress.html">개인정보처리방침</a></li><li><a href="../etc/agree-creditInfo-utilize.html">신용정보활용체제</a></li><li><a href="../etc/agree-creditAppraisal-notice.html">신용평가체계공시</a></li><li><a href="../etc/credit-grade-dissent-list.html">신용등급 이의 신청</a></li><li><a href="../etc/credit-infoCorrect-subscription-list.html">신용정보 정정청구 신청</a></li><li><a href="../pat/patFavorite.html">고객지원</a></li></ul><h2>패밀리 사이트</h2><div class="familySite"><button id="js-familySite-btn">FAMILY SITE</button><ul class="list" id="js-familySite-layer"><li><a href="#">사이트1</a></li><li><a href="#">사이트2</a></li><li><a href="#">사이트3</a></li></ul></div><p class="logo"><img src="../../rscs/images/layout/footer_logo.gif" alt="신용과 사람" /></p><p class="copyright"><img src="../../rscs/images/layout/footer_copyright.gif" alt="Copyright(c)<br/>Korea Credit Bureau.</br>All Rights Reserved" /></p></div><!-- //footer --></div><!-- //header -->');
			var $footer = $('<!-- quick --><div id="page-quick"><div class="bgline"></div><!-- userMenu --><div class="userMenu"><h2>로그인,회원가입,사이트맵 메뉴</h2><ul class="list"><li class="login"><a href="../log/log.html"><span class="icon"></span>로그인</a></li><li class="join"><a href="../jon/jonGuide.html"><span class="icon"></span>회원가입</a></li><li class="sitemap"><a href="../etc/sitemap.html"><span class="icon"></span>사이트맵</a></li></ul></div><!-- //userMenu --><!-- 자주쓰는메뉴 --><div class="fastMenu"><h2>자주쓰는메뉴</h2><ul class="list"><li class="register"><a href="#"><span class="icon"></span><span class="txt">내 정보등록</span></a></li><li class="study"><a href="../std/stdMain.html"><span class="icon"></span><span class="txt">스스로 신용공부</span></a></li><li class="faq"><a href="../pat/patFavorite.html"><span class="icon"></span><span class="txt">자주하는 질문</span></a></li><li class="openQNA"><a href="../pat/patOpenQNA-list.html"><span class="icon"></span><span class="txt">열린 Q&amp;A</span></a></li><li class="gotoTop"><a href="#skipnavi"><span class="icon"></span><span class="txt">맨 위로</span></a></li></ul></div><!-- //자주쓰는메뉴 --></div><!-- //quick -->');
			
			$("body").prepend($header).append($footer);
			layout = window.layout = new Layout();
			
			$("#page-gnb ul.gnb").gnbMenu();
		}
		
		if( ! $("#page-header").length && $("#page-main").length ){
			/* ============================================================
			 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
			 *
			 * Open source under the BSD License.
			 *
			 * Copyright ⓒ 2008 George McGinley Smith
			 * All rights reserved.
			 * https://raw.github.com/danro/jquery-easing/master/LICENSE
			 * ======================================================== */
			 jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});
			
			var $header = $('<p id="skipnavi"><a href="#skip-contents">본문바로가기</a></p><!-- header --><div id="page-header"><div class="bgline"></div><!-- logo --><h1 class="logo"><a href="./index.html"><img src="../rscs/images/layout/logo.png" alt="신용과 사람" /></a></h1><!-- gnb --><div id="page-gnb"><h2>신용과 사람 메뉴</h2><!--활성화될 메뉴의 1뎁스에 class="current1" 를 붙여주세요활성화될 메뉴의 2뎁스에 class="current2" 를 붙여주세요활성화될 메뉴의 3뎁스에 class="current3" 를 붙여주세요--><ul class="gnb"><li class="menu menu1"><a class="menu-title" href="./abt/abtKcare.html">서비스소개</a></li><li class="menu menu2"><a class="menu-title" href="#">내 정보등록</a><ul class="layer"><li><a href="#">내 정보등록이란?</a></li><li><a href="./reg/regGuideInternet-income.html">등록방법 안내</a><ul><li><a href="./reg/regGuideInternet-income.html">인터넷등록</a></li><li><a href="./reg/regGuidePost.html">우편등록</a></li><li><a href="./reg/regGuideVisit.html">방문등록</a></li><li><a href="./reg/regGuideFax.html">FAX등록</a></li></ul> </li><li><a href="./reg/regInternet-income.html">인터넷등록</a></li></ul></li><li class="menu menu3"><a class="menu-title" href="#">신용진단</a><ul class="layer"><li><a href="./dig/digMain.html">종합진단</a></li><li><a href="./dig/digCreditAction.html">신용행동</a></li><li><a href="./dig/digRepay.html">신용여력</a></li><li><a href="./dig/digCreditTendency.html">신용성향</a></li></ul></li><li class="menu menu4"><a class="menu-title" href="./std/stdMain.html">스스로 신용공부</a></li><li class="menu menu5"><a class="menu-title" href="#">참여마당</a><ul class="layer"><li><a href="./pat/patFavorite.html">자주하는 질문</a></li><li><a href="./pat/pat1n1QNA-list.html">1:1 Q&amp;A</a></li><li><a href="./pat/patOpenQNA-list.html">열린 Q&amp;A</a></li><li><a href="./pat/patDiscuss-main.html">제안과 토론방</a></li><li><a href="./pat/patKCBSecurity.html">KCB 보안센터</a></li><li><a href="./pat/patNotice-list.html">공지사항</a></li></ul></li></ul></div><script type="text/javascript">$("#page-gnb ul.gnb").gnbMenu();</script><!-- //gnb --><!-- footer --><div id="footer"><h2>신용과 사람 정책 및 약관</h2><ul class="menus"><li><a title="새창" target="_blank" href="http://koreacb.com/kr/introduction/summary/">회사소개</a></li><li><a href="./etc/agree-use.html">이용약관</a></li><li><a href="./etc/agree-personInfo-treat.html">개인정보취급방침</a></li><li><a href="./etc/agree-personInfo-progress.html">개인정보처리방침</a></li><li><a href="./etc/agree-creditInfo-utilize.html">신용정보활용체제</a></li><li><a href="./etc/agree-creditAppraisal-notice.html">신용평가체계공시</a></li><li><a href="./etc/credit-grade-dissent-list.html">신용등급 이의 신청</a></li><li><a href="./etc/credit-infoCorrect-subscription-list.html">신용정보 정정청구 신청</a></li><li><a href="./pat/patFavorite.html">고객지원</a></li></ul><h2>패밀리 사이트</h2><div class="familySite"><button id="js-familySite-btn">FAMILY SITE</button><ul class="list" id="js-familySite-layer"><li><a href="#">사이트1</a></li><li><a href="#">사이트2</a></li><li><a href="#">사이트3</a></li></ul></div><p class="logo"><img src="../rscs/images/layout/footer_logo.gif" alt="신용과 사람" /></p><p class="copyright"><img src="../rscs/images/layout/footer_copyright.gif" alt="Copyright(c)<br/>Korea Credit Bureau.</br>All Rights Reserved" /></p></div><!-- //footer --></div><!-- //header -->');
			var $footer = $('<!-- quick --><div id="page-quick"><div class="bgline"></div><!-- userMenu --><div class="userMenu"><h2>로그인,회원가입,사이트맵 메뉴</h2><ul class="list"><li class="login"><a href="./log/log.html"><span class="icon"></span>로그인</a></li><li class="join"><a href="./jon/jonGuide.html"><span class="icon"></span>회원가입</a></li><li class="sitemap"><a href="./etc/sitemap.html"><span class="icon"></span>사이트맵</a></li></ul></div><!-- //userMenu --><!-- 자주쓰는메뉴 --><div class="fastMenu"><h2>자주쓰는메뉴</h2><ul class="list"><li class="register"><a href="#"><span class="icon"></span><span class="txt">내 정보등록</span></a></li><li class="study"><a href="./std/stdMain.html"><span class="icon"></span><span class="txt">스스로 신용공부</span></a></li><li class="faq"><a href="./pat/patFavorite.html"><span class="icon"></span><span class="txt">자주하는 질문</span></a></li><li class="openQNA"><a href="./pat/patOpenQNA-list.html"><span class="icon"></span><span class="txt">열린 Q&amp;A</span></a></li><li class="gotoTop"><a href="#skipnavi"><span class="icon"></span><span class="txt">맨 위로</span></a></li></ul></div><!-- //자주쓰는메뉴 --></div><!-- //quick -->');
			
			$("body").prepend($header).append($footer);
			layout = window.layout = new Layout();
			
			$("#page-gnb ul.gnb").gnbMenu();
		}
		
	});

	function Layout(){
		this.uiEnhancements();
		this.initialize.apply(this, arguments);
	}
	Layout.prototype = {
		initialize : function(){
			// 메뉴동작실행(프로그램에서 에서 활성화 번호를 넣어주면서 개발페이지에서 실행됨)
			// this.ui.$gnb.gnbMenu(2, 3, 1);

			// familySite 셀렉트박스 동작
			this.familySite();
			
			// 우측퀵메뉴 유저메뉴 over동작
			this.userMenu();
			
			// 우측퀵메뉴 상단고정 및 문서최상단이동
			this.quickMenu();

			// wrap div생성
			this.ui.$body.addClass("bg-header");
			this.ui.$body.wrapInner('<div id="page-wrap"></div>');
		},
		
		// jquery 브라우저 구분 코드 (jquery 1.8.3 버전의 jQuery.broswer)
		// Use of jQuery.browser is frowned upon.
		// More details: http://api.jquery.com/jQuery.browser
		// jQuery.uaMatch maintained for back-compat
		browser : (function(){
			function uaMatch( ua ) {
				ua = ua.toLowerCase();
			
				var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
					/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
					/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
					/(msie) ([\w.]+)/.exec( ua ) ||
					ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
					[];
			
				return {
					browser: match[ 1 ] || "",
					version: match[ 2 ] || "0"
				};
			};
			
			matched = uaMatch( navigator.userAgent );
			var browser = {};
			
			if ( matched.browser ) {
				browser[ matched.browser ] = true;
				browser.version = matched.version;
			}
			return browser;
		})(),
		
		ui : {
			$scrollRoot : function(){return (this.browser.msie || this.browser.mozilla || this.browser.opera) ? "html" : "body"},
			$skipnavi : "#skipnavi",
			
			$body : "body",
			
			$header : "#page-header",
			$gnb : "#page-gnb ul.gnb",
			
			$contents : "#page-contents",
			
			$quick : "#page-quick",
			$quickUserMenu : "#page-quick .userMenu",
			
			$quickFastMenu  : "#page-quick div.fastMenu",
			$quickFastMenu1 : "#page-quick div.fastMenu li.register",
			$quickFastMenu2 : "#page-quick div.fastMenu li.study",
			$quickFastMenu3 : "#page-quick div.fastMenu li.faq",
			$quickFastMenu4 : "#page-quick div.fastMenu li.openQNA",
			
			$quickGotoTop : "#page-quick li.gotoTop",
			 
			$familySite : "#footer .familySite"
		},
		uiEnhancements : function(){
			var ui = this.ui;
			for(name in ui){
				ui[name] = (typeof ui[name] === "function") ? $(ui[name].call(this)) : $(ui[name]);
			}
		},
		
		familySite : function(){
			this.ui.$familySite.find("#js-familySite-btn").layerView_over({ targetLayer : "#js-familySite-layer" });
		},
		
		userMenu : function(){
			this.ui.$quickUserMenu.find("a")
				.on({
					"mouseenter focusin" : function(){
						$(this).addClass("current");
					},
					"mouseleave focusout" : function(){
						$(this).removeClass("current");
					}
				});
		},
		
		quickMenu : function(){
			var that = this;
				$button = this.ui.$quickGotoTop, 
				FixedTop = $button && $button.length && $button.offset().top;

			// 퀵활성화
			$(document).bind("layout:quick.active", function(e){
				var args = $(arguments).toArray().slice(1);
				that.quickMenuActive.apply(that, args);
			});
			
			// ie8 옵션 모든 스크립트버그 체크시에 $(document).ready 보다 빨리 quickMenu가 실행되어
			// 오류가 발생함
			// 경우 : 로그인 후 마이페이지로 자동 이동시
			if( $button.length ){
				return;
			}
		
			// 클릭스 탑이동
			$button.find("a").bind("click", $.proxy(function(){
				this.gotoTop();
				return false;
			}, this));
			
			// 스크롤시 상단 고정
			$(window).bind( "scroll resize", onScrollFixed);
			
			function onScrollFixed(){
				if( $(window).scrollTop() > FixedTop ){
					$button.addClass("fixed");
				}else{
					$button.removeClass("fixed");
				}
			}
		},
		
		quickMenuActive : function(a, b, c){
			this.ui.$quickFastMenu.find("a").removeClass("current");

			if(a==2){
				// 내 정보등록
				this.ui.$quickFastMenu1.find("a").addClass('current');
				
			}else if(a==4){
				// 스스로 신용공부
				this.ui.$quickFastMenu2.find("a").addClass('current');
				
			}else if(a==5 && b ==1){
				// 자주하는질문
				this.ui.$quickFastMenu3.find("a").addClass('current');
			}else if(a==5 && b ==3){
				// 열린Q&A
				this.ui.$quickFastMenu4.find("a").addClass('current');
			}
		},
		
		gotoTop : function(){
			this.ui.$scrollRoot.stop(true).animate({ scrollTop : 0 }, 1000, "easeInOutExpo", function(){
				// ...
			});
		}
	}

})($);


/* gnb 메뉴 */
(function($){

	$.fn.gnbMenu = function(depth1, depth2, depth3){
		var options = { titles : "a.menu-title", layers : ".layer", isRemember : true }
		
			, $wrap = $(this) /* .gnb */
			, $titles = $wrap.find( options.titles )
			, $titles2 = $wrap.find( ".layer>li>a" )
			, $titles3 = $wrap.find( ".layer ul a" )
			, $layers = $wrap.find( options.layers )
			
			, oldActive
			, oldActive2
			, oldActive3
			, initActive
			, initActive2
			, initActive3
			, timer
			, delayTimer;
		
		init();
		
		// 퀴메뉴활성화
		$(document).trigger("layout:quick.active", arguments);
		
		function init(){
			destroy();
			
			if( options.isRemember ){
				$("#page-header").bind("mouseenter focusin", onWrapEnter );
				$("#page-header").bind("mouseleave focusout", onWrapLeave );
			}
			
			$wrap.find("a").click(function(e){
				if( $(this).attr('href').indexOf("#") != -1 ){
					e.preventDefault();
				}
			});
			
			$titles.bind("mouseover focus", function(){
				$(this).parent().addClass("over");
			});
			$titles.bind("mouseout blur", function(){
				$(this).parent().removeClass("over");
			});

			$titles.bind("click", function(){
				var elem = this;
				
				clearTimeout(delayTimer);
				delayTimer = setTimeout(function(){
					onTitlesClick.call(elem);
				}, 200);
			});
			
			
			$titles2.bind("mouseover focus", onTitlesOver2);
			$titles3.bind("mouseover focus", onTitlesOver3);
			
			$layers.hide().each(function(){
				$(this).data( "height", $(this).height() );
			});

			initActive =  (depth1 && typeof depth1 == "number") ? $titles.eq(depth1-1) : null;
			initActive2 = (initActive && depth2 && typeof depth2 == "number") ? initActive.next("ul.layer").find(">li>a").eq(depth2-1) : null;
			initActive3 = (initActive2 && depth3 && typeof depth3 == "number") ? initActive2.next("ul").find(">li>a").eq(depth3-1) : null;

			$wrap.find(".current1, .current2, .current3").removeClass("current1 current2 current3");
			resetAll();
		}
		
		function destroy(){
			$("#page-header").unbind("mouseenter focusin", onWrapEnter );
			$("#page-header").unbind("mouseleave focusout", onWrapLeave );

			$titles2.unbind("mouseover focus", onTitlesOver2);
			$titles3.unbind("mouseover focus", onTitlesOver3);
		}

		// titles
		function onTitlesClick(){
			var $this = $(this);
			
			if( oldActive && oldActive != this ){
				$(oldActive).parent().removeClass("current1");
				$(oldActive).next(options.layers).stop(true).slideUp();
			}
			$this.closest("li").addClass("current1");
			$this.next(options.layers).stop(true).slideDown(function(){
				var saveHeight = $(this).data("height");
				
				if( $(this).height() < saveHeight ){
					$(this).animate({ height : saveHeight }, 500, "easeInOutExpo");
				}
			});
			oldActive = this;
		}
		
		function onTitlesOver2(){
			var $this = $(this);
			if( oldActive2 && oldActive2 != this ){
				$(oldActive2).parent().removeClass("current2");
			}
			$this.closest("li").addClass("current2");
			oldActive2 = this;
		}

		function onTitlesOver3(){
			var $this = $(this);
			
			var depth2aLink = $this.parents("li:not(.menu):last").find(">a")[0];
			onTitlesOver2.call(depth2aLink);
			
			if( oldActive3 && oldActive3 != this ){
				$(oldActive3).parent().removeClass("current3");
			}
			$this.closest("li").addClass("current3");
			oldActive3 = this;
		}
		
		// resetAll
		function resetAll(){
			$titles.parent().removeClass("over");
			
			if( initActive ){
				if( initActive  ) onTitlesClick.call(initActive);
				if( initActive2 ) onTitlesOver2.call(initActive2);
				if( initActive3 ) onTitlesOver3.call(initActive3);

			}else{
				if( oldActive ){
					$(oldActive).parent().removeClass("current1");
					$(oldActive2).parent().removeClass("current2");
					$(oldActive3).parent().removeClass("current3");
					
					$(oldActive).next(options.layers).stop(true).slideUp();
					
					oldActive = null;
					oldActive2 = null;
					oldActive3 = null;
				}
			}
		}
				
		// wrap
		function onWrapLeave(){
			clearTimeout( timer );
			timer = setTimeout(resetAll, 500);
		}
		function onWrapEnter(){ clearTimeout( timer ); }

	};
	
})(jQuery);

/*
 * ul + layer 탭스크립트
 */
$.fn.tabList = function( opts ){
	return this.each(function(){
		
		var options = $.extend({}, $.fn.tabList.defaults, opts)
			, $btns = $(".tab", this)
			, oldActive = null;

		$btns.filter(function(i, n){			
			$(this.hash).hide();
			$(this).bind("click", onChange);
		});

		// tab initialize
		$btns.eq( options.active ).trigger("click");
		
		function onChange(){
			var isAnchor = /^#/.test( $(this).attr("href") );	
					
			if( isAnchor ){	
				hide( oldActive );
				show( this );
				oldActive = this;
				
				return false;	
			}
		}
		
		function show( ele ){
			$(ele.hash).show();
			$(ele).closest("li").addClass("current");
			imgOn( ele.getElementsByTagName("img")[0] );	
		}
		
		function hide( ele ){
			if( ! ele ) return false;
			$(ele.hash).hide();
			$(ele).closest("li").removeClass("current");
			imgOff( ele.getElementsByTagName("img")[0] );
		}
		
		function imgOn(img){ if( img ) img.src = img.src.replace("_off", "_on"); }
		function imgOff(img){ if( img ) img.src = img.src.replace("_on", "_off"); }
		
	});
};
$.fn.tabList.defaults = {
	active : 0
}

/* 레이어 클릭으로 열기 */
$.fn.layerView_click = function( _options ){
	return this.each(function(){
		var options = $.extend({}, { targetLayer : null, close : ".close" }, _options)
		
			, $button = $(this)
			, $layer = $(options.targetLayer || this.hash)
			, $close = $layer.find(options.close)
			, $layerAlinks = $layer.find("a").not($close);

		init();
		
		function init(){	
			$button.bind("click", onButtonClick);
			$layerAlinks.bind("mouseover focus", onLayerAlinksOver);
			$layerAlinks.bind("mouseout blur", onLayerAlinksOut);
			$close.bind("click", onAlinkClose);
			$(document).bind("click", onBodyClose);
		}
		
		function onLayerAlinksOver(e){ $(this).parent().addClass("current") }
		function onLayerAlinksOut(e){ $(this).parent().removeClass("current") }
		
		function onButtonClick(e){
			if( $button.parent().hasClass("active") ){
				onHide();
			}else{
				$(this).parent().addClass("active");
				$layer.show();
			}			
			return false;
		}
		
		// close - alink
		function onAlinkClose(e){
			$layer.hide();
			$button.parent().removeClass("active");
			$button.focus();
			return false;
		}

		// close - body
		function onBodyClose(e){
			$layer.hide();
			$button.parent().removeClass("active");
		}
		
	});
};

/* 레이어 mouseover로 열기 */
$.fn.layerView_over = function( _options ){
	return this.each(function(){
		var options = $.extend({}, { targetLayer : null, close : ".close" }, _options)
		
			, $button = $(this)
			, $layer = $(options.targetLayer || this.hash)
			, $close = $layer.find(options.close)
			, $layerAlinks = $layer.find("a").not($close)
			, timer;
			
		init();
		
		function init(){	
			$button.bind("click", onButtonClick);
			$button.bind("mouseenter focusin", onButtonOver);
			$button.bind("mouseleave focusout", onButtonOut);

			$layer.bind("mouseenter focusin", onLayerOver);
			$layer.bind("mouseleave focusout", onLayerOut);
			$layerAlinks.bind("mouseover focus", onLayerAlinksOver);
			$layerAlinks.bind("mouseout blur", onLayerAlinksOut);
			
			$close.bind("click", onAlinkClose);
			$(document).bind("click", onDocClick);
		}
		
		// 레이어닫기
		function closeLayer(){
			clearTimeout( timer );
			timer = setTimeout(hideLayer, 400);
		}
		
		function hideLayer(){
			clearTimeout( timer );
			$button.parent().removeClass("active posReverse");
			$layer.hide();
		}

		// 버튼이벤트함수
		function onButtonClick(e){
			if( $(this).attr("href").indexOf("#") !== -1  ) return false;
		}
		function onButtonOver(e, isOnlyFocus){
			if( ! isOnlyFocus ){			
				clearTimeout( timer );
				
				var layoutBottomLine = $button.offset().top + $button.innerHeight() + $layer.height() + 10,
					scrollBottomLine = $(window).scrollTop() + $(window).height();
				
				$(this).parent().addClass(layoutBottomLine > scrollBottomLine ? "active posReverse" : "active");
				$layer.show();
				return false;
			}
		}
		function onButtonOut(e){ closeLayer() }
		
		// 레이어이벤트함수
		function onLayerOver(e){ clearTimeout( timer ) }
		function onLayerOut(e){ closeLayer() }
		function onLayerAlinksOver(e){ $(this).parent().addClass("current") }
		function onLayerAlinksOut(e){ $(this).parent().removeClass("current") }
		
		// document이벤트함수
		function onDocClick(e){ hideLayer() }
		
		// 버튼 클릭시 close
		function onAlinkClose(e){
			$button.trigger("focus", "isOnlyFocus");
			hideLayer();
			$button.parent().removeClass("active posReverse");
			return false;
		}
	});
};

/* img over */
jQuery.fn.menuOver = function( chgUrl ){
	return this.each(function(i, n){
		var $this = $(this)
			, img = $this.find("img")[0]
			, initUrl = img.src;

		$this.on("mouseenter focus", over);
		$this.on("mouseleave blur", out);

		function over(){
			img.src = ( chgUrl ) ? chgUrl : img.src.replace("_off", "_on");
		}
		
		function out(){
			img.src = initUrl;
		}
	});
};

// faq스타일
$.fn.faq = function(opts){
	return this.each(function(){
		var options = $.extend({ headingRel : true }, opts)
			, $wrap = $(this)
			, $btns = $wrap.find("a.tab")
			, $layers = $wrap.find("dd")
			, oldActive;
		
		// initialize
		$layers.hide();
		$btns.bind("click", onChange);
		
		function onChange(){
			if( ! options.headingRel ){
				var visible = $(this).closest("dt").next("dd").is(":visible");
				( visible ) ? close( this ) : open( this );

			}else{
				if( oldActive && oldActive == this ){
					close( this );
					oldActive = null;
					return false;
				}
				if( oldActive ) close( oldActive );
				open( this );
		
				oldActive = this;
			}
			
			return false;
		}
		
		function open( ele ){
			$(ele).parent().addClass("current");
			$(ele).closest("dt").next("dd").stop(true).show();
			if( options.open ) options.open.call(ele);
		};

		function close( ele ){
			$(ele).parent().removeClass("current");
			$(ele).closest("dt").next("dd").stop(true).hide();
			if( options.close ) options.close.call(ele);
		};
		
	});
};

// collapseType 열기/닫기
function collapseType(ele){
	var $ele = $(ele),
		$wrap = $ele.closest(".collapseType");

	if( $wrap.hasClass("open") ){
		$wrap.removeClass("open");
	}else{
		$wrap.addClass("open");
	}
	return false;
}

// frame resize
function frameResize(ifrm){
	ifrm.style.height = "";
	setTimeout(function(){
		var ifrmBodyH1 = ifrm.contentWindow.document.body.scrollHeight;
		var ifrmBodyH2 = ifrm.contentWindow.document.documentElement.scrollHeight;
		var ifrmBodyH = (ifrmBodyH1 > ifrmBodyH2) ? ifrmBodyH1 : ifrmBodyH2;
		ifrm.style.height = ifrmBodyH + 4 + "px";
	}, 0);
}

//<![CDATA[
/*
팝업창 사용법
<a target="_blank" href="#" onclick="popup({ url:this.href, name:'popup', width:300, height:300, position:'center', scroll:false });return false;">
<a target="_blank" href="http://www.ondisk.co.kr" onclick="popup({ url:this.href, name:'popup2', width:300, height:300, position:{top : 100, left : 100}, scroll:false });return false;">팝업2</a>
*/
function popup(obj){
	var url = obj.url;
	var name = obj.name || "popup";
	var w = obj.width || 450;
	var h = obj.height || 650;	
	var position = obj.position;
	var scroll = obj.scroll;

	var tlOpt = 'top=0, left=0';
	if(position == "center"){
		var top = screen.height/2 - h/2 - 100;
		var left = screen.width/2 - w/2;
		if(top<0) top=0;
		if(left<0) left=0;
		tlOpt = ',top='+top +',left='+left;
		
	}else if( Object.prototype.toString.call(position) == "[object Object]" && "top" in position && "left" in position ){
		tlOpt = ',top='+position.top+',left='+position.left;
	}
	
	if( navigator.userAgent.toLowerCase().indexOf("msie 9") != -1 ) w -= 4;
	
	sOpt = (scroll == "scroll" || scroll === true) ? ",scrollbars=yes" :  ""; // 창스크롤
	winOptions = tlOpt+',width='+w +',height='+h +sOpt +', resizable=yes'; // top, left, width, height, location, menubar, resizable, scrollbar, status
	
	var popWin = window.open(url,name,winOptions);
	return popWin;
}







