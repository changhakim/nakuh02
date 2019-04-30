"use strict";
var auth = auth || {};
auth =(()=>{
	let homecss,admincss,rescss,instacss;
	let setPath=(x)=>{
		 _= $.ctx();
		 js = $.js();
	};
	let init =()=>{
//		setPath(x);
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		$.when(
				$.getScript($.js()+'/component/jwcompo.js'),
				$.getScript($.js()+'/aquagram/auth.js'),
				$.getScript($.js()+'/aquagram/arti.js'),
				$.getScript($.js()+'/reservation/eunyeong.js')
			).done(()=>{
				navcss();
				css();
				feed_main();
				nav();
				arti.init();
				
				

			});  
		
		
	};
	let feed_main =()=>{
		$(jwcompo.left_content()).appendTo('#leftbar_content');
		$(jwcompo.right_nav()).appendTo('#right_nav_cont');
		$(jwcompo.my_navbar()).appendTo('#my_navbar');
		$(document).ready(function() {
			  $('.navbar').affix({
			    offset: {
			      top: 510
			    }
			  });
			});
		$(document).ready(function() {
			  $('#right_nav_cont').affix({
			    offset: {
			      top: 510
			    }
			  });
			});
		$('#my_fv').attr('style','cursor:pointer').click(()=>{
			feed_my();
			
		});
		
		
		
		
		
	};
	let feed_my=()=>{
		$('#donw_content').html(jwcompo.insta_base());
		
/*		$('#instafeed').attr('id','instafeed-gallery-feed').addClass('gallery row no-gutter');
		$('#instafeed').appendTo('<button id="btn-instafeed-load" class="btn">Load more</button>');
		let galleryFeed = new Instafeed({
			  get: "user",
			  userId: 4622774,
			  accessToken: "4622774.7cbaeb5.ec8c5041b92b44ada03e4a4a9153bc54",
			  resolution: "standard_resolution",
			  useHttp: "true",
			  limit: 6,
			  template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{image}}"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
			  target: "instafeed-gallery-feed",
			  after: function() {
			    // disable button if no more results to load
			    if (!this.hasNext()) {
			      btnInstafeedLoad.setAttribute('disabled', 'disabled');
			    }
			  },
			});
			galleryFeed.run();

			var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
			btnInstafeedLoad.addEventListener("click", function() {
			  galleryFeed.next()
			});
			*/
			
			
		let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
		let box = '';
		$.each(a,(i,j)=>{
			box += '			<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">'
			+'			<a href="resources/img/aquagram/test_img.jpg">'
			+'			<div class="img-featured-container">'
			+'			<div class="img-backdrop"></div>'
			+'			<div class="description-container">'
			+'			<p class="caption">캡션</p>'
			+'			<span class="likes"><i class="icon ion-heart"></i> 라이크 </span>'
			+'			<span class="comments"><i class="icon ion-chatbubble"></i>맨트</span>'
			+'			</div>'
			+'			<img src="resources/img/aquagram/test_img.jpg" class="img-responsive">'
			+'			</div>'
			+'			</a>'
			+'			</div>'


		});
		$(box).appendTo('#instafeed');
		$('.photo-box').attr('style','margin:-26px 0px 30px -29px');
		$('head').after(jwcompo.photo_feed_css_hover());
//		$('.navbar').attr('style','font-size:9pt');		
		$('.img-featured-container').mouseover(function(){
			$('.img-featured-container .description-container').attr('style','color: #fff; font-size: 10px; line-height: 1.2; padding: 0 30px; text-align: center; line-height: 20px; width: 100%; position: absolute;'
					 +' top: 50%; left: 50%; transform: translate(-50%, -50%); transform-style: preserve-3d; z-index: 2; opacity: 0; transition: all .2s ease;');
		$('.description-container').attr('style','color: #fff; font-size: 10px; line-height: 1.2; padding: 0 30px; text-align: center; line-height: 20px; width: 100%; position: absolute;'
				 +' top: 50%; left: 50%; transform: translate(-50%, -50%); transform-style: preserve-3d; z-index: 2; opacity: 0; transition: all .2s ease;');
		
		});
		
	
		

	};
	
	let navcss = ()=>{
		$(document).ready(function() {
			 $('#comnav').affix({
			  offset: {
			  top: 1
			  }
			 });
		});
	};
	
	
	
	
	let nav =()=>{
		/*	General 네비게이션 	*/
		$('#home').click(e=>{
		
		
		$('.rescss').remove();
		$('.instacss').remove();
		$(homecss).appendTo('head');
		location.assign('/web');
		app.init();
	    
		});
		$('#ocean').click(e=>{
		e.preventDefault();
		$('.instacss').remove();
		$(rescss).appendTo('head');
		eunyeong.init('ocean')
		});
		
		$('#river').click(()=>{
		
		});
		
		$('#hotel').click(()=>{
		
		});
		$('#aquagram').click(e=>{
		e.preventDefault();
		$('.rescss').remove();
		$(instacss).appendTo('head');
		jeonguk.init();
		});
		$('#mypage').click(()=>{
			
		});
		$('#logout').click(()=>{
			
		});
	}
	let css = ()=>{
		/* head css  */
		 homecss = '<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css" />'
			+'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
			+'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
		 rescss ='<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/common.css">'
			 +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/main.css">'
			 +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/navbar.css">';
		 instacss =' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/style.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/animate.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/structure.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/docs.min.css"> '
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/default_css.css">';
			 
			 
	}

	
	
	
	return {init:init }
	
})();