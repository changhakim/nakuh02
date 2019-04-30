"use strict";
var app = app||{};

app=(()=>{
	let homecss,admincss,rescss,instacss
	let init=x=>{
		app.$.init(x);
	}
	let onCreate=()=>{
		
		setContentView();
	}
	let setContentView=()=>{
		$.when(
		$.getScript($.js()+'/admin/jieun.js'),
		$.getScript($.js()+'/reservation/eunyeong.js'),
		$.getScript($.js()+'/aquagram/jeonguk.js')
		).done(()=>{
			css();
			$(homecss).appendTo('head');
			$('#loginbtn').click(function(e){
				$('#id01').css('display','block');
				if(e.target === $('#id01')){
				$('#id01').css('display','none');
				}
				$('.close1').click(()=>{
					$('#id01').css('display','none');
				})
			})
			$('#login').click(()=>{
				$('#userid').val();
				$('#password').val();
				alert('로그인')
			})
			$('#ocean').click(e=>{
				e.preventDefault();
				$('.homecss').remove();
				$('.instacss').remove();
				$('.admincss').remove();
				$(rescss).appendTo('head')
				eunyeong.init('ocean');
			})
			$('#river').click(e=>{
				e.preventDefault();
				$('.homecss').remove();
				$('.admincss').remove();
				$(rescss).appendTo('head')
				eunyeong.init('river');
			})
			$('#hotel').click(e=>{
				e.preventDefault();
				$('.homecss').remove();
				$('.admincss').remove();
				$(rescss).appendTo('head')
				eunyeong.init('hotel');
			})
			$('#aqua').click(e=>{
				e.preventDefault();
				$('.homecss').remove();
				$(instacss).appendTo('head');
				jeonguk.init();
				alert('아쿠아리움')
			})
			$('#adminbtn').click(()=>{
				$('.homecss').remove();
				$('.rescss').remove();
				$(admincss).appendTo('head')
				jieun.init();
			})

		});
	}
	let css = ()=>{
		 homecss = '<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css" />'
			+'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
			+'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
		 admincss='<link class="admincss" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">'
				+'<link class="admincss" href="/web/resources/css/admin/demo.css" rel="stylesheet">'
				+'<link class="admincss" href="/web/resources/css/admin/main.css" rel="stylesheet">'
				+'<link class="admincss" rel="stylesheet" href="/web/resources/css/admin/vendor/linearicons/style.css">'
				+'<link class="admincss" rel="apple-touch-icon" sizes="76x76" href="resources/img/apple-icon.png">'
				+'<link class="admincss" rel="icon" type="image/png" sizes="96x96" href="resources/img/favicon.png">';
		 rescss ='<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/common.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/main.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/navbar.css">';
 
		 instacss ='  <link rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/style.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/animate.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/structure.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/docs.min.css"> '
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/modal.css"> '
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/default_css.css">';
			 
			 
	}
	
	return {init:init,
			onCreate:onCreate
			}
	
	
})();

app.$={
		
		init:x=>{
			
			$.getScript(x+'/resources/js/router.js',
			()=>{
				$.extend(new Session(x))
				
				app.onCreate(); 
				
			});
			
		}
		
}