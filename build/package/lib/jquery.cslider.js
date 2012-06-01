(function(b,c){b.Slider=function(d,e){this.$el=b(e);this._init(d)};b.Slider.defaults={current:0,bgincrement:50,autoplay:false,interval:4000};b.Slider.prototype={_init:function(d){this.options=b.extend(true,{},b.Slider.defaults,d);this.$slides=this.$el.children("div.da-slide");this.slidesCount=this.$slides.length;this.current=this.options.current;if(this.current<0||this.current>=this.slidesCount){this.current=0}this.$slides.eq(this.current).addClass("da-slide-current");var f=b('<nav class="da-dots"/>');for(var e=0;e<this.slidesCount;++e){f.append("<span/>")}f.appendTo(this.$el);this.$pages=this.$el.find("nav.da-dots > span");this.$navNext=this.$el.find("span.da-arrows-next");this.$navPrev=this.$el.find("span.da-arrows-prev");this.isAnimating=false;this.bgpositer=0;this.cssAnimations=Modernizr.cssanimations;this.cssTransitions=Modernizr.csstransitions;if(!this.cssAnimations||!this.cssAnimations){this.$el.addClass("da-slider-fb")}this._updatePage();this._loadEvents();if(this.options.autoplay){this._startSlideshow()}},_navigate:function(l,f){var e=this.$slides.eq(this.current),g,m=this;if(this.current===l||this.isAnimating){return false}this.isAnimating=true;var h,i,k;if(!f){(l>this.current)?k="next":k="prev"}else{k=f}if(this.cssAnimations&&this.cssAnimations){if(k==="next"){h="da-slide-toleft";i="da-slide-fromright";++this.bgpositer}else{h="da-slide-toright";i="da-slide-fromleft";--this.bgpositer}this.$el.css("background-position",this.bgpositer*this.options.bgincrement+"% 0%")}this.current=l;g=this.$slides.eq(this.current);if(this.cssAnimations&&this.cssAnimations){var j="da-slide-toleft da-slide-toright da-slide-fromleft da-slide-fromright";e.removeClass(j);g.removeClass(j);e.addClass(h);g.addClass(i);e.removeClass("da-slide-current");g.addClass("da-slide-current")}if(!this.cssAnimations||!this.cssAnimations){g.css("left",(k==="next")?"100%":"-100%").stop().animate({left:"0%"},1000,function(){m.isAnimating=false});e.stop().animate({left:(k==="next")?"-100%":"100%"},1000,function(){e.removeClass("da-slide-current")})}this._updatePage()},_updatePage:function(){this.$pages.removeClass("da-dots-current");this.$pages.eq(this.current).addClass("da-dots-current")},_startSlideshow:function(){var d=this;this.slideshow=setTimeout(function(){var e=(d.current<d.slidesCount-1)?e=d.current+1:e=0;d._navigate(e,"next");if(d.options.autoplay){d._startSlideshow()}},this.options.interval)},page:function(d){if(d>=this.slidesCount||d<0){return false}if(this.options.autoplay){clearTimeout(this.slideshow);this.options.autoplay=false}this._navigate(d)},_loadEvents:function(){var d=this;this.$pages.on("click.cslider",function(e){d.page(b(this).index());return false});this.$navNext.on("click.cslider",function(e){if(d.options.autoplay){clearTimeout(d.slideshow);d.options.autoplay=false}var f=(d.current<d.slidesCount-1)?f=d.current+1:f=0;d._navigate(f,"next");return false});this.$navPrev.on("click.cslider",function(e){if(d.options.autoplay){clearTimeout(d.slideshow);d.options.autoplay=false}var f=(d.current>0)?f=d.current-1:f=d.slidesCount-1;d._navigate(f,"prev");return false});if(this.cssTransitions){if(!this.options.bgincrement){this.$el.on("webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider",function(e){if(e.originalEvent.animationName==="toRightAnim4"||e.originalEvent.animationName==="toLeftAnim4"){d.isAnimating=false}})}else{this.$el.on("webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider",function(e){if(e.target.id===d.$el.attr("id")){d.isAnimating=false}})}}}};var a=function(d){if(this.console){console.error(d)}};b.fn.cslider=function(e){if(typeof e==="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var f=b.data(this,"cslider");if(!f){a("cannot call methods on cslider prior to initialization; attempted to call method '"+e+"'");return}if(!b.isFunction(f[e])||e.charAt(0)==="_"){a("no such method '"+e+"' for cslider instance");return}f[e].apply(f,d)})}else{this.each(function(){var f=b.data(this,"cslider");if(!f){b.data(this,"cslider",new b.Slider(e,this))}})}return this}})(jQuery);