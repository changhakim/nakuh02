"use strict";
var eunyeong = eunyeong || {};
eunyeong = (()=>{
    const WHEN_ERR = '호출하는 JS파일을 찾지 못지 못했습니다.'
    let _,compojs, js,
        m_ctt, s_ctt, f_ctt;
    let homecss,admincss,rescss,instacss;
    
    let init =x=>{
        _ = $.ctx();
    	js = $.js();
        compojs = js + '/component/eycompo.js';
        m_ctt = '#main-container';
        s_ctt = '#search_content';
        f_ctt = '#features-content';
        
        onCreate(x);
    }
    
    let onCreate =(x)=>{
        setContentView(x);
    }
    let setContentView =(x)=>{
        $.when(
                $.getScript($.js()+'/component/eycompo.js'),
                $.getScript($.js()+'/aquagram/jeonguk.js'),
                $.getScript($.js()+'/app.js')
        ).done(()=>{
            $('#wrapper').html(eycompo.commonnav())
            $(eycompo.main_search()).appendTo('#wrapper');
            
            css();
            navcss();         
            switch(x){
            case 'ocean':
                ocean();
            break;
            case 'river':
                river();
            break;
            case 'hotel':
                hotel();
            break;
            }
            
            /*  네비게이션 */
            $('#home').click(e=>{
            
            e.preventDefault();
            $('.rescss').remove();
            $('.instacss').remove();
            $(homecss).appendTo('head');
            location.assign('/web');
            app.init();
            });
            $('#ocean').click(()=>{
                ocean();
            });
            
            $('#river').click(()=>{
                river();
            });
            
            $('#hotel').click(()=>{
                hotel();
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
        })
    };
  
    let ocean =()=>{
        alert('바다 1');
        $(m_ctt).empty();
        prolist();
        $('input.btn[type=submit]').click(e=>{
            e.preventDefault();
            alert('바다2');
            searchlist();
            $(eycompo.main_container()).appendTo(m_ctt);
        });
    };
    
    let river =()=>{
        $.when($.getScript(compojs))
        .done(()=>{
            $(m_ctt).empty();
            $(eycompo.main_container()).appendTo(m_ctt);
            $('input.btn[type=submit]').click(e=>{
                e.preventDefault();
                alert('민물화면이다');
                searchlist();
                $(eycompo.main_container()).appendTo(m_ctt);
            });
        });
    };
    
    let hotel =()=>{
        $.when($.getScript(compojs))
        .done(()=>{
            $(m_ctt).empty();
            $(eycompo.main_container()).appendTo(m_ctt);
            $('input.btn[type=submit]').click(e=>{
                e.preventDefault();
                alert('숙박화면이다');
                searchlist();
                $(eycompo.main_container()).appendTo(m_ctt);
            });
        });
    };
    
    /*검색창 : 도시명*/
    let searchlist =()=>{
        $(s_ctt).remove();
        $(m_ctt).empty();
        $(eycompo.search_bar()).prependTo(m_ctt);
        $('button[type=button]').click(e=>{
            e.preventDefault();
            $(eycompo.main_container()).appendTo(m_ctt);
            $(i_ctt).click(function(){
                alert('바다3상세화면');
                item();
            });
        });
    };
    
    /*정보 : item*/
    let detail =()=>{
        $(s_ctt).remove();
        $(m_ctt).empty();
        $(eycompo.item_container()).appendTo(m_ctt);
        $("#datepicker").datepicker();
        $('div .ui-datepicker-prev ui-corner-all').remove;
        
        $('button.btn[type=submit]').click(e=>{
            alert('결제로 이동');
            payment();
        });
    };
    
    /*정보 : 결제 */
    let payment =()=>{
        alert('payment 진입');
        $(m_ctt).empty();
    };
    
    /*상품 전체보기 */
    let prolist =()=>{
    	
    	$.getJSON(_+'/products', d=>{
    		$(m_ctt).empty();
    		
            $.each(d, (i,j)=>{
            	$('<div class="col-sm-4">'
            			+'	<div class="left-widget-sidebar">'
            			+'		<div class="card-widget bg-white user-card">'
            			+'			<div class="u-img img-cover" style="background-image: url(/web/resources/img/reservation/joy.jpg);background-size:cover;"></div>'
            			+'					<div class="u-content"></br></br>'
            			+'					<h5>' +j.company + '</h5>'
            			+'					<p class="text-muted">' + j.price +'</p>'
            			+'					</div>'
            			+'					</div>'
            			+'				</div>'
            			+'			</div>'
            			+'		</div>')
            			.attr('id', j.pronum)
            			.appendTo(m_ctt)
            			.click(function(){
            				detail();
            			})
            })
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
    
    let css = ()=>{
         homecss ='<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css" />'
            +'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
            +'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
         
         rescss ='<link class="rescss" href="/web/resources/css/reservation/vanillacalendar.css" rel="stylesheet">' //vanila js calender
        	 +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/common.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/main.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/navbar.css">';
 
         instacss =' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/style.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/animate.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/structure.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/docs.min.css"> '
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/default_css.css">';
             
    };
    return {init:init, searchlist:searchlist, ocean:ocean, river:river, hotel:hotel, detail:detail, payment:payment, prolist:prolist};
})();