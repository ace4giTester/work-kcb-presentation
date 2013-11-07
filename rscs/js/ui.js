
if( ! window.console ){ console = { log : function(){} }; }

/*
 * layout ���� ��� ����
 * - gnb�޴�
 * - familySite ����Ʈ�ڽ�
 * - �� ó������ ���ư���(��ũ�� ȿ��)
 */
(function($){
	var layout;
	
	$(document).ready(function(){
		// �������������� ����
		if($("#page-header").length ){
			layout = window.layout = new Layout();
		}

		/* ���� Ȯ�ο� ���̾ƿ� header,footer ���̱� */		
		if( ! $("#page-header").length && $("#page-contents").length ){
			/* ============================================================
			 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
			 *
			 * Open source under the BSD License.
			 *
			 * Copyright �� 2008 George McGinley Smith
			 * All rights reserved.
			 * https://raw.github.com/danro/jquery-easing/master/LICENSE
			 * ======================================================== */
			 jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});
			
			var $header = $('<p id="skipnavi"><a href="#skip-contents">�����ٷΰ���</a></p><!-- header --><div id="page-header"><div class="bgline"></div><!-- logo --><h1 class="logo"><a href="../index.html"><img src="../../rscs/images/layout/logo.png" alt="�ſ�� ���" /></a></h1><!-- gnb --><div id="page-gnb"><h2>�ſ�� ��� �޴�</h2><!--Ȱ��ȭ�� �޴��� 1������ class="current1" �� �ٿ��ּ���Ȱ��ȭ�� �޴��� 2������ class="current2" �� �ٿ��ּ���Ȱ��ȭ�� �޴��� 3������ class="current3" �� �ٿ��ּ���--><ul class="gnb"><li class="menu menu1"><a class="menu-title" href="../abt/abtKcare.html">���񽺼Ұ�</a></li><li class="menu menu2"><a class="menu-title" href="#">�� �������</a><ul class="layer"><li><a href="#">�� ��������̶�?</a></li><li><a href="../reg/regGuideInternet-income.html">��Ϲ�� �ȳ�</a><ul><li><a href="../reg/regGuideInternet-income.html">���ͳݵ��</a></li><li><a href="../reg/regGuidePost.html">������</a></li><li><a href="../reg/regGuideVisit.html">�湮���</a></li><li><a href="../reg/regGuideFax.html">FAX���</a></li></ul> </li><li><a href="../reg/regInternet-income.html">���ͳݵ��</a></li></ul></li><li class="menu menu3"><a class="menu-title" href="#">�ſ�����</a><ul class="layer"><li><a href="../dig/digMain.html">��������</a></li><li><a href="../dig/digCreditAction.html">�ſ��ൿ</a></li><li><a href="../dig/digRepay.html">�ſ뿩��</a></li><li><a href="../dig/digCreditTendency.html">�ſ뼺��</a></li></ul></li><li class="menu menu4"><a class="menu-title" href="../std/stdMain.html">������ �ſ����</a></li><li class="menu menu5"><a class="menu-title" href="#">��������</a><ul class="layer"><li><a href="../pat/patFavorite.html">�����ϴ� ����</a></li><li><a href="../pat/pat1n1QNA-list.html">1:1 Q&amp;A</a></li><li><a href="../pat/patOpenQNA-list.html">���� Q&amp;A</a></li><li><a href="../pat/patDiscuss-main.html">���Ȱ� ��й�</a></li><li><a href="../pat/patKCBSecurity.html">KCB ���ȼ���</a></li><li><a href="../pat/patNotice-list.html">��������</a></li></ul></li></ul></div><script type="text/javascript">$("#page-gnb ul.gnb").gnbMenu();</script><!-- //gnb --><!-- footer --><div id="footer"><h2>�ſ�� ��� ��å �� ���</h2><ul class="menus"><li><a title="��â" target="_blank" href="http://koreacb.com/kr/introduction/summary/">ȸ��Ұ�</a></li><li><a href="../etc/agree-use.html">�̿���</a></li><li><a href="../etc/agree-personInfo-treat.html">����������޹�ħ</a></li><li><a href="../etc/agree-personInfo-progress.html">��������ó����ħ</a></li><li><a href="../etc/agree-creditInfo-utilize.html">�ſ�����Ȱ��ü��</a></li><li><a href="../etc/agree-creditAppraisal-notice.html">�ſ���ü�����</a></li><li><a href="../etc/credit-grade-dissent-list.html">�ſ��� ���� ��û</a></li><li><a href="../etc/credit-infoCorrect-subscription-list.html">�ſ����� ����û�� ��û</a></li><li><a href="../pat/patFavorite.html">������</a></li></ul><h2>�йи� ����Ʈ</h2><div class="familySite"><button id="js-familySite-btn">FAMILY SITE</button><ul class="list" id="js-familySite-layer"><li><a href="#">����Ʈ1</a></li><li><a href="#">����Ʈ2</a></li><li><a href="#">����Ʈ3</a></li></ul></div><p class="logo"><img src="../../rscs/images/layout/footer_logo.gif" alt="�ſ�� ���" /></p><p class="copyright"><img src="../../rscs/images/layout/footer_copyright.gif" alt="Copyright(c)<br/>Korea Credit Bureau.</br>All Rights Reserved" /></p></div><!-- //footer --></div><!-- //header -->');
			var $footer = $('<!-- quick --><div id="page-quick"><div class="bgline"></div><!-- userMenu --><div class="userMenu"><h2>�α���,ȸ������,����Ʈ�� �޴�</h2><ul class="list"><li class="login"><a href="../log/log.html"><span class="icon"></span>�α���</a></li><li class="join"><a href="../jon/jonGuide.html"><span class="icon"></span>ȸ������</a></li><li class="sitemap"><a href="../etc/sitemap.html"><span class="icon"></span>����Ʈ��</a></li></ul></div><!-- //userMenu --><!-- ���־��¸޴� --><div class="fastMenu"><h2>���־��¸޴�</h2><ul class="list"><li class="register"><a href="#"><span class="icon"></span><span class="txt">�� �������</span></a></li><li class="study"><a href="../std/stdMain.html"><span class="icon"></span><span class="txt">������ �ſ����</span></a></li><li class="faq"><a href="../pat/patFavorite.html"><span class="icon"></span><span class="txt">�����ϴ� ����</span></a></li><li class="openQNA"><a href="../pat/patOpenQNA-list.html"><span class="icon"></span><span class="txt">���� Q&amp;A</span></a></li><li class="gotoTop"><a href="#skipnavi"><span class="icon"></span><span class="txt">�� ����</span></a></li></ul></div><!-- //���־��¸޴� --></div><!-- //quick -->');
			
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
			 * Copyright �� 2008 George McGinley Smith
			 * All rights reserved.
			 * https://raw.github.com/danro/jquery-easing/master/LICENSE
			 * ======================================================== */
			 jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});
			
			var $header = $('<p id="skipnavi"><a href="#skip-contents">�����ٷΰ���</a></p><!-- header --><div id="page-header"><div class="bgline"></div><!-- logo --><h1 class="logo"><a href="./index.html"><img src="../rscs/images/layout/logo.png" alt="�ſ�� ���" /></a></h1><!-- gnb --><div id="page-gnb"><h2>�ſ�� ��� �޴�</h2><!--Ȱ��ȭ�� �޴��� 1������ class="current1" �� �ٿ��ּ���Ȱ��ȭ�� �޴��� 2������ class="current2" �� �ٿ��ּ���Ȱ��ȭ�� �޴��� 3������ class="current3" �� �ٿ��ּ���--><ul class="gnb"><li class="menu menu1"><a class="menu-title" href="./abt/abtKcare.html">���񽺼Ұ�</a></li><li class="menu menu2"><a class="menu-title" href="#">�� �������</a><ul class="layer"><li><a href="#">�� ��������̶�?</a></li><li><a href="./reg/regGuideInternet-income.html">��Ϲ�� �ȳ�</a><ul><li><a href="./reg/regGuideInternet-income.html">���ͳݵ��</a></li><li><a href="./reg/regGuidePost.html">������</a></li><li><a href="./reg/regGuideVisit.html">�湮���</a></li><li><a href="./reg/regGuideFax.html">FAX���</a></li></ul> </li><li><a href="./reg/regInternet-income.html">���ͳݵ��</a></li></ul></li><li class="menu menu3"><a class="menu-title" href="#">�ſ�����</a><ul class="layer"><li><a href="./dig/digMain.html">��������</a></li><li><a href="./dig/digCreditAction.html">�ſ��ൿ</a></li><li><a href="./dig/digRepay.html">�ſ뿩��</a></li><li><a href="./dig/digCreditTendency.html">�ſ뼺��</a></li></ul></li><li class="menu menu4"><a class="menu-title" href="./std/stdMain.html">������ �ſ����</a></li><li class="menu menu5"><a class="menu-title" href="#">��������</a><ul class="layer"><li><a href="./pat/patFavorite.html">�����ϴ� ����</a></li><li><a href="./pat/pat1n1QNA-list.html">1:1 Q&amp;A</a></li><li><a href="./pat/patOpenQNA-list.html">���� Q&amp;A</a></li><li><a href="./pat/patDiscuss-main.html">���Ȱ� ��й�</a></li><li><a href="./pat/patKCBSecurity.html">KCB ���ȼ���</a></li><li><a href="./pat/patNotice-list.html">��������</a></li></ul></li></ul></div><script type="text/javascript">$("#page-gnb ul.gnb").gnbMenu();</script><!-- //gnb --><!-- footer --><div id="footer"><h2>�ſ�� ��� ��å �� ���</h2><ul class="menus"><li><a title="��â" target="_blank" href="http://koreacb.com/kr/introduction/summary/">ȸ��Ұ�</a></li><li><a href="./etc/agree-use.html">�̿���</a></li><li><a href="./etc/agree-personInfo-treat.html">����������޹�ħ</a></li><li><a href="./etc/agree-personInfo-progress.html">��������ó����ħ</a></li><li><a href="./etc/agree-creditInfo-utilize.html">�ſ�����Ȱ��ü��</a></li><li><a href="./etc/agree-creditAppraisal-notice.html">�ſ���ü�����</a></li><li><a href="./etc/credit-grade-dissent-list.html">�ſ��� ���� ��û</a></li><li><a href="./etc/credit-infoCorrect-subscription-list.html">�ſ����� ����û�� ��û</a></li><li><a href="./pat/patFavorite.html">������</a></li></ul><h2>�йи� ����Ʈ</h2><div class="familySite"><button id="js-familySite-btn">FAMILY SITE</button><ul class="list" id="js-familySite-layer"><li><a href="#">����Ʈ1</a></li><li><a href="#">����Ʈ2</a></li><li><a href="#">����Ʈ3</a></li></ul></div><p class="logo"><img src="../rscs/images/layout/footer_logo.gif" alt="�ſ�� ���" /></p><p class="copyright"><img src="../rscs/images/layout/footer_copyright.gif" alt="Copyright(c)<br/>Korea Credit Bureau.</br>All Rights Reserved" /></p></div><!-- //footer --></div><!-- //header -->');
			var $footer = $('<!-- quick --><div id="page-quick"><div class="bgline"></div><!-- userMenu --><div class="userMenu"><h2>�α���,ȸ������,����Ʈ�� �޴�</h2><ul class="list"><li class="login"><a href="./log/log.html"><span class="icon"></span>�α���</a></li><li class="join"><a href="./jon/jonGuide.html"><span class="icon"></span>ȸ������</a></li><li class="sitemap"><a href="./etc/sitemap.html"><span class="icon"></span>����Ʈ��</a></li></ul></div><!-- //userMenu --><!-- ���־��¸޴� --><div class="fastMenu"><h2>���־��¸޴�</h2><ul class="list"><li class="register"><a href="#"><span class="icon"></span><span class="txt">�� �������</span></a></li><li class="study"><a href="./std/stdMain.html"><span class="icon"></span><span class="txt">������ �ſ����</span></a></li><li class="faq"><a href="./pat/patFavorite.html"><span class="icon"></span><span class="txt">�����ϴ� ����</span></a></li><li class="openQNA"><a href="./pat/patOpenQNA-list.html"><span class="icon"></span><span class="txt">���� Q&amp;A</span></a></li><li class="gotoTop"><a href="#skipnavi"><span class="icon"></span><span class="txt">�� ����</span></a></li></ul></div><!-- //���־��¸޴� --></div><!-- //quick -->');
			
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
			// �޴����۽���(���α׷����� ���� Ȱ��ȭ ��ȣ�� �־��ָ鼭 �������������� �����)
			// this.ui.$gnb.gnbMenu(2, 3, 1);

			// familySite ����Ʈ�ڽ� ����
			this.familySite();
			
			// �������޴� �����޴� over����
			this.userMenu();
			
			// �������޴� ��ܰ��� �� �����ֻ���̵�
			this.quickMenu();

			// wrap div����
			this.ui.$body.addClass("bg-header");
			this.ui.$body.wrapInner('<div id="page-wrap"></div>');
		},
		
		// jquery ������ ���� �ڵ� (jquery 1.8.3 ������ jQuery.broswer)
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

			// ��Ȱ��ȭ
			$(document).bind("layout:quick.active", function(e){
				var args = $(arguments).toArray().slice(1);
				that.quickMenuActive.apply(that, args);
			});
			
			// ie8 �ɼ� ��� ��ũ��Ʈ���� üũ�ÿ� $(document).ready ���� ���� quickMenu�� ����Ǿ�
			// ������ �߻���
			// ��� : �α��� �� ������������ �ڵ� �̵���
			if( $button.length ){
				return;
			}
		
			// Ŭ���� ž�̵�
			$button.find("a").bind("click", $.proxy(function(){
				this.gotoTop();
				return false;
			}, this));
			
			// ��ũ�ѽ� ��� ����
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
				// �� �������
				this.ui.$quickFastMenu1.find("a").addClass('current');
				
			}else if(a==4){
				// ������ �ſ����
				this.ui.$quickFastMenu2.find("a").addClass('current');
				
			}else if(a==5 && b ==1){
				// �����ϴ�����
				this.ui.$quickFastMenu3.find("a").addClass('current');
			}else if(a==5 && b ==3){
				// ����Q&A
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


/* gnb �޴� */
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
		
		// ���޴�Ȱ��ȭ
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
 * ul + layer �ǽ�ũ��Ʈ
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

/* ���̾� Ŭ������ ���� */
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

/* ���̾� mouseover�� ���� */
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
		
		// ���̾�ݱ�
		function closeLayer(){
			clearTimeout( timer );
			timer = setTimeout(hideLayer, 400);
		}
		
		function hideLayer(){
			clearTimeout( timer );
			$button.parent().removeClass("active posReverse");
			$layer.hide();
		}

		// ��ư�̺�Ʈ�Լ�
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
		
		// ���̾��̺�Ʈ�Լ�
		function onLayerOver(e){ clearTimeout( timer ) }
		function onLayerOut(e){ closeLayer() }
		function onLayerAlinksOver(e){ $(this).parent().addClass("current") }
		function onLayerAlinksOut(e){ $(this).parent().removeClass("current") }
		
		// document�̺�Ʈ�Լ�
		function onDocClick(e){ hideLayer() }
		
		// ��ư Ŭ���� close
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

// faq��Ÿ��
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

// collapseType ����/�ݱ�
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
�˾�â ����
<a target="_blank" href="#" onclick="popup({ url:this.href, name:'popup', width:300, height:300, position:'center', scroll:false });return false;">
<a target="_blank" href="http://www.ondisk.co.kr" onclick="popup({ url:this.href, name:'popup2', width:300, height:300, position:{top : 100, left : 100}, scroll:false });return false;">�˾�2</a>
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
	
	sOpt = (scroll == "scroll" || scroll === true) ? ",scrollbars=yes" :  ""; // â��ũ��
	winOptions = tlOpt+',width='+w +',height='+h +sOpt +', resizable=yes'; // top, left, width, height, location, menubar, resizable, scrollbar, status
	
	var popWin = window.open(url,name,winOptions);
	return popWin;
}







