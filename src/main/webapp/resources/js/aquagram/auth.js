var auth = auth || {};
auth =(()=>{
	let homecss,admincss,rescss,instacss;
	let setPath=()=>{
		 _= $.ctx();
		 js = $.js();
	};
	let init =()=>{
		setPath();
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		$.when(
				$.getScript($.js()+'/component/jwcompo.js'),
				$.getScript($.js()+'/aquagram/auth.js'),
				$.getScript($.js()+'/reservation/eunyeong.js')
			).done(()=>{
				navcss();
				css();
				alert('auth.js도착')
				feed_main();
				nav();
	
	
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
			alert('클릭!!');
			$('#donw_content').html(jwcompo.insta_base());
			let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
			let box = '';
			$.each(a,(i,j)=>{
				box += '<div id="img_'+j+'" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">'
					+'<div class="photo-box">'
					+'<div class="image-wrap">'
					+'<img src="resources/img/aquagram/test_img.jpg">'
					+'<div class="likes">'+j+' Likes</div>'
					+'</div>'
					/*+'<div class="description">'
					+' Fantastic Architecture #architecture #testing'
					+'<div class="date">September 16, 2014</div>'
					+'</div>'*/
					+'</div>'
					+'</div>'
			});
			$(box).appendTo('#instafeed');
			$('.photo-box').attr('style','margin:-26px 0px 30px -29px')

			
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
		/*	General 네비게이션	*/
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