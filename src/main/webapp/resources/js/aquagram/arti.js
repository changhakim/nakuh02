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
				arti_upload();
				
				
				
				
			});  
		
		
	};
	
	let arti_upload =()=>{
		$('#art_upload').attr('style','cursor:pointer').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
			e.preventDefault();
			$('#myModal').attr('style','display: block; z-index:99999;');
			$('.modal-dialog').attr('style','top:350px;')
			$('.modal-content').attr('style','margin:auto;');
			$('.modal-title').text('게시물 등록');
			
			
			
		});
	};
	
	
	
	return {init:init};
	
	
})();