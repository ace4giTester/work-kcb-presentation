(function($){
	
	if (!Raphael) { throw new Error("jquery.graphAverage.js - requires Raphael"); }
	
	Raphael.fn.roundedRectangle = function (x, y, w, h, r1, r2, r3, r4){
		var array = [];
		array = array.concat(["M",x,r1+y, "Q",x,y, x+r1,y]); //A
		array = array.concat(["L",x+w-r2,y, "Q",x+w,y, x+w,y+r2]); //B
		array = array.concat(["L",x+w,y+h-r3, "Q",x+w,y+h, x+w-r3,y+h]); //C
		array = array.concat(["L",x+r4,y+h, "Q",x,y+h, x,y+h-r4, "Z"]); //D
		return this.path(array);
	};
	
	$.fn.graphAverage = function(_options){
		return this.each(function(){
			var options = $.extend({}, $.fn.graphAverage.defaults, _options);
			var graph = new Graph(this, options);
		});
	};
	
	$.fn.graphAverage.defaults = {
		/* positive - 점수가 낮아야 좋은지 높아야 좋은지 체크 ( low(default) or high )
		 * + 나중에 점수가 높아야 좋은 케이스가 추가됨
		 */			
		positive : "low",
			
		padding : [35, 25, 15, 25],
		axisX : [0, 100],
		barheight : 24,
		average : {
			value : 0,
			text  : null,
			img : null
		},
		my : {
			value : 0,
			text :  null,
			img : null
		}
	};
	
	function Graph(that, options){
		this.initialize.apply(this, arguments);
	}
	Graph.prototype = {
		initialize : function(that, options){
			this.$target = $(that);
			
			/* 그래프를 감싸는 div 생성 */
			this.$wrap = "";
			
			this.options = options;
			
			// value가 "" 으로 넘어오는 경우가 있어서 false에 해당하는 경우 0 으로 세팅
			options.average.value = (options.average.value) ? options.average.value : 0;
			options.my.value      = (options.my.value) ? options.my.value : 0;
			
			// 평균점수가 없고 나의 점수만 있으면 높을수록 좋기 때문에 그부분 처리합니다.
			this.positive = options.average.img ? options.positive : "high" 

			// 그래프 axis의 최소값, 최대값;
			this.max = options.axisX[options.axisX.length-1];
			this.min = options.axisX[0];

			// 안쪽 여백설정을 제외한 그래프가 그려질 공간 구하기
			this.region = {
				top    : options.padding[0],
				bottom : this.$target.height() - options.padding[2],
				left   : options.padding[3],
				right  : this.$target.width() - options.padding[1]
			};
			
			/* 그래프바 영역 구하기
			 * region의 height 영역에서 (top)47%에 해당하는 부분에 bar, barBg를 표시하고
			 * 나머지 축(axis), 수치(label), 값텍스트(value) 는 bar를 상대좌표로 표시한다.
			 */
			this.bar = {
				top    : this.region.top + 47*((this.$target.height() - options.padding[0] - options.padding[2]))/100,
				left   : this.region.left,
				width  : this.region.right - this.region.left,
				height : options.barheight
			};
			
			this.paper = ""; /* 차트가 그려질 도화지 */
			this.bg    = "";    /* 회색배경 */
			this.bg2   = "";   /* 그라데이션 배경 */
			this.axisX = ""; /* [0, 25, 50, 75, 100] 처럼 x축 수치 표시 */
			this.graph = ""; /* 활성화영역 그래프바 */

			/* 나와 평균의 그래프 width구하기 */
			this.averageWidth = this.bar.width*options.average.value/this.max;
			this.myWidth   = this.bar.width*options.my.value  /this.max;

			
			// 도화지 생성
			this.create();
			
			// 회색배경과 그라데이션 배경 처리
			this.makeBg();
			
			// x축 좌표표시
			this.makeAxis();
			
			// 그래프 활성화 영역 표시
			this.graphActive();
			
			// 그래프 활성화 영역에 맞게 텍스트 표시(예 : 평균74점, 나)
			this.makeLable();
		},
		
		create : function(){
			this.$target.empty();
			this.$wrap = $('<div class="graph-wrap"></div>')
						.css({ overflow:"hidden", position:"relative", width:"100%", height:this.$target.height() })
						.appendTo(this.$target);
		
			this.paper = Raphael(this.$wrap[0], this.$wrap.width(), this.$wrap.width());			
		},
		
		makeBg : function(){
			var barX = this.bar.left,
				barY = this.bar.top,
				barWidth = this.bar.width,
				barHeight = this.bar.height,
				
				caseBy;

			// 회색 배경
			this.paper
				.roundedRectangle(barX, barY, barWidth, barHeight, 3, 3, 3, 3)
				.attr({
					fill: "270-#d7d4d2-#e9e5e3:3-#f1edeb:4-#ede8e6:60-#e6e2de",
					'stroke-linejoin': 'round',
					'stroke-width': 0
				});


			caseBy = {
				low  : "180-#ed5d49-#ff7a18:27-#ffc74a:51-#51b02c:94",
				high : "0-#ed5d49-#ff7a18:27-#ffc74a:40-#51b02c:94"
			};

			// 그라데이션 배경
			this.paper
				.rect(barX, barY+this.options.barheight/4, barWidth, Math.ceil(barHeight/2))
				.attr({
					fill: caseBy[this.positive],
					'stroke-linejoin': 'round',
					'stroke-width': 0
				});
		},
		
		makeAxis : function(){
			var $wrap = this.$wrap,
				paper = this.paper,
				
				options = this.options,
				
				barX = this.bar.left,
				barY = this.bar.top,
				barWidth = this.bar.width,
				
				x,
				i,
				length = this.options.axisX.length,
				gap = barWidth/(length-1);
			
			$("<div class='hidden'>결과값 범위는 : </div>").appendTo($wrap);
			
			for(i=0; i<length; i++){
				x = (i*gap);
				
				// x축 | 모양표시
				paper
					.rect(Math.floor(barX+x), barY-6, 1, 4)
					.attr({ fill: "#c3c5c6", 'stroke-width': 0 });
				
				// x축 label 표시
				$('<div class="graph-labelX">'+options.axisX[i]+'<span class="hidden">,</span></div>')
					.css({
						position:"absolute", top:barY-21, left:barX+x-20, width:40, textAlign:"center", zIndex:2,
						letterSpacing:-1, fontFamily:"verdana",
						fontSize:10, color:"#b7b7b7"
					})
					.appendTo($wrap);
			}
			
			$("<div class='hidden'>사이 입니다.</div>").appendTo($wrap);
		},
		
		graphActive : function(){
			var paper = this.paper,
				barX = this.bar.left,
				barY = this.bar.top,
				barWidth = this.bar.width,
				barHeight = this.bar.height,
				
				myWidth = this.myWidth;
			
			paper
				.roundedRectangle(barX+myWidth, barY, barWidth-myWidth, barHeight, 2, 2, 2, 2)
				.attr({
					fill: "270-#d7d4d2-#e9e5e3:3-#f1edeb:4-#ede8e6:60-#e6e2de",
					'stroke-linejoin': 'round',
					'stroke-width': 0
				});
		},
		
		makeLable : function(){
			var paper = this.paper,
				$wrap = this.$wrap,
				
				options = this.options,
				
				barX = this.bar.left,
				barY = this.bar.top,
				barWidth = this.bar.width,
				barHeight = this.bar.height,
				
				average = this.options.average,
				my      = this.options.my, 
				
				averageWidth = this.averageWidth,
				myWidth   = this.myWidth;

			// 평균이미지
			if(average.img){
				$('<div class="graph-img-average"><img src="'+average.img+'" /></div>')
					.css({
						display:(average.img) ? "block" : "none",
						position:"absolute", top:barY-40, left:barX+averageWidth-9, width:18, height:80, zIndex:3
					})
					.appendTo($wrap);
			}
			
			var caseByImg = this.positive === "low" ? { 'good' : my.img.good, 'bad' : my.img.bad } : { 'good' : my.img.bad, 'bad' : my.img.good };
			var caseByTxt = this.positive === "low" ? { 'good' : '#5aa63b', 'bad' : '#c2290f' } : { 'good' : '#c2290f', 'bad' : '#5aa63b' };
			
			// 나의이미지
			$('<div class="graph-img-my"><img src="'+caseByImg[myWidth <= averageWidth ? "good" : "bad"]+'" /></div>')
				.css({
					position:"absolute", top:barY-40, left:barX+myWidth-9, width:18, height:80, zIndex:3
				})
				.appendTo($wrap);	
				
			// 평균 text
			$('<div class="graph-label-average"></div>')
				.css({
					display:(average.img) ? "block" : "none",
					position:"absolute", top:barY+28, left:barX+averageWidth-40, width:80, textAlign:"center",
					color:"#aaa"
				})
				.html(average.text + " " + options.average.value)
				.appendTo($wrap);
			
			/* 나의 text */
			$('<div class="graph-label-my"></div>')
				.css({
					position:"absolute", top:barY-60, left:barX+myWidth-40, width:80, textAlign:"center",
					fontWeight : "600", fontSize:14, lineHeight:1.428,
					color: caseByTxt[myWidth <= averageWidth ? "good" : "bad"] 
				})
				.html(my.text + " " + options.my.value)
				.appendTo($wrap);
		},
		
		constructor : Graph
	};

})(jQuery);