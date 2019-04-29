var arti = arti || {};
arti =(()=>{
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
				alert('arti.js 도착');
				arti_upload();
				
				
				
				
			});  
		
		
	};
	
	let arti_upload =()=>{
		
	};
	
	
	
	return {init:init};
	
	
})();