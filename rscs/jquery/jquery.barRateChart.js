;(function($){
	
	if (!Raphael) { throw new Error("jquery.barRateChart.js - requires Raphael"); }
	if (!_)       { throw new Error("jquery.barRateChart.js - requires underscore.js"); }

	$.fn.barRateChart = function(_options){
		return this.each(function(){
			var options = $.extend({}, $.fn.barRateChart.defaults, _options);
			var chart = new Chart(this, options);
		});
	};

	$.fn.barRateChart.defaults = {
		padding : [10, 0, 25, 30],
		yaxis : 50
	};
	
	function Chart(that, options){
		this.initialize.apply(this, arguments);
	}
	Chart.prototype = {
		initialize : function(that, options){
			this.$target = $(that);
			
			/* 그래프를 감싸는 div 생성 */
			this.$wrap = "";
			
			this.options = options;
			
			// 안쪽 여백설정을 제외한 그래프가 그려질 공간 구하기
			this.region = {
				top    : options.padding[0],
				bottom : this.$target.height() - options.padding[2],
				left   : options.padding[3],
				right  : this.$target.width() - options.padding[1],
				width  : this.$target.width() - options.padding[1] - options.padding[3],
				height : this.$target.height() - options.padding[2] - options.padding[0] 
			};

			// 차트의 bar
			this.bar = {
				maxWidth : 22,
				marginH : 8
			};

			// 그래프bar에 필요한 수치
			this.values = options.values;  /* array */
			this.average = options.average;
			
			this.labelXs = options.labelX;

			// 값을의 합
			this.valuesHab = _.reduce(this.values, function(memo, num){ return memo + num; }, 0);

			// 최대 퍼센트 구하기
			this.maxPersent = 10 * _.max(this.values) / this.valuesHab;
			this.maxPersentLength = Math.ceil(this.maxPersent);
			this.maxPersent = 10 * this.maxPersentLength;

			// ======================================

			this.create();
			this.makeBg();
			this.makeGrid();
			this.drawChart();
		},
		
		create : function(){
			this.$target.empty();
			this.$wrap = $('<div class="graph-wrap"></div>')
						.css({ position:"relative", width:"100%", height:this.$target.height() })
						.appendTo(this.$target);
						
			this.paper = Raphael(this.$wrap[0], this.$wrap.width(), this.$wrap.width());		
		},
		
		makeBg : function(){
			var paper = this.paper,
				region = this.region;

			// 그래프영역 기준선 그리기
			paper
				.path("M "+ (region.left-1+0.5) + " " + (region.top+0.3) +" v " + region.height + "h" + region.width)
				.attr({stroke: '#a1a1a1', 'stroke-width': 1});
		},
		
		makeGrid : function(){
			var paper = this.paper,
				region = this.region,
				
				i = 0,
				length = this.maxPersentLength,
				height = region.height/length,
				x = (region.left+1+0.5),
				y;

			for(i=0; i<=length; i++){
				y = (region.bottom-Math.floor(height*i))+1.3;
				
				// 가로기준선 그리기
				if( i !== 0 ){
					paper
						.path("M "+ x + " " + y + "h" + (region.width-3))
						.attr({stroke: '#e2e2e2', 'stroke-width': 1});
				}

				$("<div />")
					.css({
						position: "absolute", top: y-7, left: x-this.options.padding[3],
						width: this.options.padding[3], height: 12,
						textAlign:"left", fontSize:9, lineHeight:"13px", fontFamily:"tahoma", whiteSpace:"nowrap",
						color: "#abaaaa"
					})
					.html(i*10 + '<span style="font-size:9px">%</span>')
					.appendTo(this.$wrap);
			}
		},
		
		drawChart : function(){
			var paper = this.paper,
				region = this.region,
				values = this.values,
				length = values.length,
				
				i, value,
				
				barColWidth = Math.floor(region.width/length),
				barX = region.left,
				barY = region.bottom+0.2,
				barW = (barColWidth > this.bar.maxWidth) ? this.bar.maxWidth : barColWidth-this.bar.marginH,
				barH,
				
				dashY = region.bottom-4,
				
				fillStyle = {
					normal : "0-#c9c6c1-#ccc8c4:40-#c7c3be",
					average : "0-#fdb22f-#fdcc47"
				};
				
			for(i=0; i<length; i++){
				value = values[i];
				barH = (region.height * value/this.valuesHab) * (100 / this.maxPersent);

				// bar
				paper
					.rect(barX + (barColWidth*i) + (barColWidth-barW)/2, barY-barH-0.3, barW, barH)
					.attr({
						fill: fillStyle[(this.average == i) ? "average" : "normal"],
						'stroke-linejoin': 'round',
						'stroke-width': 0
					});
				
				// bar 라벨
				$('<div class="chart-labelX" />')
					.css({
						position: "absolute", top: barY+5, left: barX+(barColWidth*i),
						width: barColWidth - this.bar.marginH, height: 12,
						padding : "0 " + this.bar.marginH/2 + "px", 
						textAlign:"center", fontSize:11, lineHeight:"13px", fontFamily:"tahoma",
						whiteSpace:"nowrap", letterSpacing:"-1px", wordWrap:"normal",
						color: "#abaaaa"
					})
					.html(this.labelXs[i])
					.appendTo(this.$wrap);

				// 구분선(dash)
				if( i !== length-1 ){ 
					paper
						.path("M "+ (barX+(barColWidth*i)+(barColWidth)-0.5) + " " + dashY + "v" + 4)
						.attr({stroke: '#b0b0b0', 'stroke-width': 1});
				}
			}
			
		},
		
		constructor : Chart
	};

})(jQuery);

