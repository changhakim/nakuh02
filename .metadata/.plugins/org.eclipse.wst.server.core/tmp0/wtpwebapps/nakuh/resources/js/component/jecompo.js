"use strict";
var jecompo = jecompo || {};

jecompo = {
			
admin_main :()=>{
			return ' <!-- WRAPPER -->'
			+'     <div id="wrapper">'
			+'           <!-- NAVBAR -->'
			+'           <nav class="navbar navbar-default navbar-fixed-top">'
			+'                <div class="brand">'
			+'                     <a href="index.jsp">'
			+'                     <h3> NAK_UH </h3>'
			+'                     </a>'
			+'                </div>'
			+'                <div class="container-fluid">'
			+'                     <div class="navbar-btn">'
			+'                           <button type="button" class="btn-toggle-fullwidth">'
			+'                                <i class="lnr lnr-arrow-left-circle"></i>'
			+'                           </button>'
			+'                     </div>'
			+'                     <form class="navbar-form navbar-left">'
			+'                           <div class="input-group">'
			+'                                <input type="text" value="" class="form-control"'
			+'                                     placeholder="Search dashboard..."> <span'
			+'                                     class="input-group-btn"><button type="button"'
			+'                                           class="btn btn-primary">Go</button></span>'
			+'                           </div>'
			+'                     </form>'
			+'                     <div class="navbar-btn navbar-btn-right">'
			+'                           <a class="btn btn-Primary update-pro" title="logout"'
			+'                                target="_blank"><i class="fa fa-rocket"></i> <span>LOGOUT</span></a>'
			+'                     </div>'
			+'                     <div id="navbar-menu">'
			+'                           <ul class="nav navbar-nav navbar-right">'
			+'                                <li class="dropdown"><a href="#"'
			+'                                     class="dropdown-toggle icon-menu" data-toggle="dropdown"> <i'
			+'                                           class="lnr lnr-alarm"></i> <span class="badge bg-danger">5</span>'
			+'                                </a>'
			+'                                     <ul class="dropdown-menu notifications">'
			+'                                           <li><a href="#" class="notification-item"><span'
			+'                                                     class="dot bg-warning"></span>System space is almost full</a></li>'
			+'                                           <li><a href="#" class="notification-item"><span'
			+'                                                     class="dot bg-danger"></span>You have 9 unfinished tasks</a></li>'
			+'                                           <li><a href="#" class="notification-item"><span'
			+'                                                     class="dot bg-success"></span>Monthly report is available</a></li>'
			+'                                           <li><a href="#" class="notification-item"><span'
			+'                                                     class="dot bg-warning"></span>Weekly meeting in 1 hour</a></li>'
			+'                                           <li><a href="#" class="notification-item"><span'
			+'                                                     class="dot bg-success"></span>Your request has been approved</a></li>'
			+'                                           <li><a href="#" class="more">See all notifications</a></li>'
			+'                                     </ul></li>'
			+'                                <li class="dropdown"><a href="#" class="dropdown-toggle"'
			+'                                     data-toggle="dropdown"><img src="/web/resources/img/homeimg/user.png"'
			+'                                           class="img-circle" alt="Avatar"> <span>이지은</span> <i'
			+'                                           class="icon-submenu lnr lnr-chevron-down"></i></a>'
			+'                                     <ul class="dropdown-menu">'
			+'                                           <li><a href="#"><i class="lnr lnr-user"></i> <span>My'
			+'                                                          Profile</span></a></li>'
			+'                                           <li><a href="#"><i class="lnr lnr-exit"></i> <span>Logout</span></a></li>'
			+'                                     </ul></li>'
			+'                           </ul>'
			+'                     </div>'
			+'                </div>'
			+'           </nav>'

			+'           '
			+'           <!-- END NAVBAR -->'
			+'           '
			+'           <!-- LEFT SIDEBAR -->'
			+'           <div id="sidebar-nav" class="sidebar">'
			+'                <div class="slimScrollDiv"'
			+'                     style="position: relative; overflow: hidden; width: auto; height: 95%;">'
			+'                     <div class="sidebar-scroll"'
			+'                           style="overflow: hidden; width: auto; height: 95%;">'
			+'                           <nav>'
			+'                                <ul class="nav">'
			+'                                     <li><a id = "member" href="#" class=""><i class="lnr lnr-user"></i><span>회원 관리</span></a></li>'
			+'                                     <li><a id = "regi" href="#" class=""><i class="fa fa-calendar"></i><span>예약 관리</span></a></li>'
			+'                                     <li><a id = "fish" href="#" class=""><i class="lnr lnr-chart-bars"></i> <span>어종 별 시세</span></a></li>'
			+'                                </ul>'
			+'                           </nav>'
			+'                     </div>'
			+'                     <div class="slimScrollBar"'
			+'                           style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 738px;"></div>'
			+'                     <div class="slimScrollRail"'
			+'                           style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>'
			+'                </div>'
			+'           </div>'
			+'           <!-- END LEFT SIDEBAR -->'
			+'           '
			+'           <!-- MAIN -->'
			+'           <div id="main" class="main">'
			+'           '
			+'                <!-- MAIN CONTENT -->'
			+'                <div id="main-content" class="main-content">'
			+'                     <div class="container-fluid">'
			+'                           '
			+'                           <!-- OVERVIEW -->'
			+'                           <div class="col-md-12">'
			+'                           <div class="panel panel-headline">'
			+'                                <div class="panel-heading">'
			+'                                     <h3 class="panel-title">주간 업무 현황</h3>'
			+'                                </div>'
			+'                                <div class="panel-body">'
			+'                                     <div class="row">'
			+'                                           <div class="col-md-3">'
			+'                                                <div class="metric">'
			+'                                                     <span class="icon"><i class="fa fa-eye"></i></span>'
			+'                                                     <p>'
			+'                                                           <span class="number">274</span> <span class="title">Today'
			+'                                                                Visits</span>'
			+'                                                     </p>'
			+'                                                </div>'
			+'                                           </div>'
			+'                                           <div class="col-md-3">'
			+'                                                <div class="metric">'
			+'                                                     <span class="icon"><i class="fa fa-bar-chart"></i></span>'
			+'                                                     <p>'
			+'                                                           <span class="number">127</span> <span class="title">Total'
			+'                                                                member</span>'
			+'                                                     </p>'
			+'                                                </div>'
			+'                                           </div>'
			+'                                           <div class="col-md-3">'
			+'                                                <div class="metric">'
			+'                                                     <span class="icon"><i class="fa fa-edit"></i></span>'
			+'                                                     <p>'
			+'                                                           <span class="number">1,024</span> <span class="title">Total'
			+'                                                                posts</span>'
			+'                                                     </p>'
			+'                                                </div>'
			+'                                           </div>'
			+'                                           <div class="col-md-3">'
			+'                                                <div class="metric">'
			+'                                                     <span class="icon"><i class="fa fa-shopping-bag"></i></span>'
			+'                                                     <p>'
			+'                                                           <span class="number">254</span> <span class="title">Total'
			+'                                                                reservations</span>'
			+'                                                     </p>'
			+'                                                </div>'
			+'                                           </div>'
			+'                                <div class="panel-heading">'
			+'                                     <h3 class="panel-title">예약 매출 현황</h3>'
			+'                                </div>'
			+'                                     </div>'
			+'                            <div class="row">'
			+'                                <div class="col-md-9">'
			                                    +'<div id="headline-chart" class="ct-chart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="300" class="ct-chart-line" style="width: 100%; height: 300;"><g class="ct-grids"><line y1="265" y2="265" x1="50" x2="640.5" class="ct-grid ct-vertical"></line><line y1="229.28571428571428" y2="229.28571428571428" x1="50" x2="640.5" class="ct-grid ct-vertical"></line><line y1="193.57142857142856" y2="193.57142857142856" x1="50" x2="640.5" class="ct-grid ct-vertical"></line><line y1="157.85714285714286" y2="157.85714285714286" x1="50" x2="640.5" class="ct-grid ct-vertical"></line><line y1="122.14285714285714" y2="122.14285714285714" x1="50" x2="640.5" class="ct-grid ct-vertical"></line><line y1="86.42857142857142" y2="86.42857142857142" x1="50" x2="640.5" class="ct-grid ct-vertical"></line><line y1="50.71428571428572" y2="50.71428571428572" x1="50" x2="640.5" class="ct-grid ct-vertical"></line><line y1="15" y2="15" x1="50" x2="640.5" class="ct-grid ct-vertical"></line></g><g><g class="ct-series ct-series-a"><path d="M50,265L50,172.143L148.417,129.286L246.833,165L345.25,50.714L443.667,157.857L542.083,165L640.5,86.429L640.5,265Z" class="ct-area"></path></g><g class="ct-series ct-series-b"><path d="M50,265L50,236.429L148.417,157.857L246.833,207.857L345.25,93.571L443.667,129.286L542.083,65L640.5,22.143L640.5,265Z" class="ct-area"></path></g></g><g class="ct-labels"><foreignObject style="overflow: visible;" x="50" y="270" width="98.41666666666667" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 98px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Mon</span></foreignObject><foreignObject style="overflow: visible;" x="148.41666666666669" y="270" width="98.41666666666667" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 98px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Tue</span></foreignObject><foreignObject style="overflow: visible;" x="246.83333333333334" y="270" width="98.41666666666666" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 98px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Wed</span></foreignObject><foreignObject style="overflow: visible;" x="345.25" y="270" width="98.41666666666669" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 98px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Thu</span></foreignObject><foreignObject style="overflow: visible;" x="443.6666666666667" y="270" width="98.41666666666669" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 98px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Fri</span></foreignObject><foreignObject style="overflow: visible;" x="542.0833333333334" y="270" width="98.41666666666663" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 98px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Sat</span></foreignObject><foreignObject style="overflow: visible;" x="640.5" y="270" width="30" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 30px; height: 20px" xmlns="http://www.w3.org/2000/xmlns/">Sun</span></foreignObject><foreignObject style="overflow: visible;" y="229.28571428571428" x="10" height="35.714285714285715" width="30"><span class="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">10</span></foreignObject><foreignObject style="overflow: visible;" y="193.57142857142856" x="10" height="35.714285714285715" width="30"><span class="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">15</span></foreignObject><foreignObject style="overflow: visible;" y="157.85714285714283" x="10" height="35.71428571428571" width="30"><span class="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">20</span></foreignObject><foreignObject style="overflow: visible;" y="122.14285714285714" x="10" height="35.71428571428572" width="30"><span class="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">25</span></foreignObject><foreignObject style="overflow: visible;" y="86.42857142857142" x="10" height="35.71428571428572" width="30"><span class="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">30</span></foreignObject><foreignObject style="overflow: visible;" y="50.71428571428572" x="10" height="35.714285714285694" width="30"><span class="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">35</span></foreignObject><foreignObject style="overflow: visible;" y="15" x="10" height="35.71428571428572" width="30"><span class="ct-label ct-vertical ct-start" style="height: 36px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">40</span></foreignObject><foreignObject style="overflow: visible;" y="-15" x="10" height="30" width="30"><span class="ct-label ct-vertical ct-start" style="height: 30px; width: 30px" xmlns="http://www.w3.org/2000/xmlns/">45</span></foreignObject></g></svg></div>'
			+'                                </div>'
			+'                                '
			+'                                <div class="col-md-3">'
			+'                                    <div class="weekly-summary text-left">'
			+'                                        <span class="number">2,315</span> <span class="percentage"><i class="fa fa-caret-up text-success"></i> 12%</span>'
			+'                                        <span class="info-label">Total Sales</span>'
			+'                                    </div>'
			+'                                    <div class="weekly-summary text-left">'
			+'                                        <span class="number">$5,758</span> <span class="percentage"><i class="fa fa-caret-up text-success"></i> 23%</span>'
			+'                                        <span class="info-label">Monthly Income</span>'
			+'                                    </div>'
			+'                                    <div class="weekly-summary text-left">'
			+'                                        <span class="number">$65,938</span> <span class="percentage"><i class="fa fa-caret-down text-danger"></i> 8%</span>'
			+'                                        <span class="info-label">Total Income</span>'
			+'                                    </div>'
			+'                                </div>'
			+'                            </div>'
			+'                        </div>'
			+'                    </div>'
			+'                  </div>'
			+'                   <!-- END OVERVIEW -->'
			+'                </div>'
			+'           </div>'
			+'     </div>'
			+'     <!-- END MAIN -->'
			+'    </div>'
			
		},
		
		member : ()=>{
			return '<!-- MAIN CONTENT -->'
			+'			<div id="main-content" class="main-content">'
			+'				<div class="col-md-12">'
			+'					<!-- BASIC TABLE -->'
			+'					'
			+'					<div id="rank" class="panel">'
			+'						<div class="panel-heading">'
			+'							<h3 class="panel-title">회원 순위</h3>'
			+'						</div>'
			+'						<ul class="nav navbar-nav">'
			+'							<li class="dropdown"><a href="#" class="dropdown-toggle"'
			+'								data-toggle="dropdown" role="button" aria-expanded="false">구분<span'
			+'									class="caret"></span>'
			+'							</a>'
			+'								<ul class="dropdown-menu" role="menu">'
			+'									<li><a href="#">길이 순</a></li>'
			+'									<li><a href="#">무게 순</a></li>'
			+'								</ul></li>'
			+'							<li class="dropdown"><a href="#" class="dropdown-toggle"'
			+'								data-toggle="dropdown" role="button" aria-expanded="false">어종<span'
			+'									class="caret"></span>'
			+'							</a>'
			+'								<ul class="dropdown-menu" role="menu">'
			+'									<li><a href="#">광어</a></li>'
			+'									<li><a href="#">우럭</a></li>'
			+'									<li><a href="#">장어</a></li>'
			+'								</ul></li>'
			+'						</ul>'
			+'						<div class="panel-body">'
			+'							<table class="table table-hover">'
			+'								<thead>'
			+'									<tr>'
			+'										<th>NO</th>'
			+'										<th>First Name</th>'
			+'										<th>Last Name</th>'
			+'										<th>Username</th>'
			+'									</tr>'
			+'								</thead>'
			+'								<tbody>'
			+'									<tr>'
			+'										<td>1</td>'
			+'										<td>Steve</td>'
			+'										<td>Jobs</td>'
			+'										<td>@steve</td>'
			+'									</tr>'
			+'									<tr>'
			+'										<td>2</td>'
			+'										<td>Simon</td>'
			+'										<td>Philips</td>'
			+'										<td>@simon</td>'
			+'									</tr>'
			+'									<tr>'
			+'										<td>3</td>'
			+'										<td>Jane</td>'
			+'										<td>Doe</td>'
			+'										<td>@jane</td>'
			+'									</tr>'
			+'								</tbody>'
			+'							</table>'
			+'						</div>'
			+'					</div>'
			+'					'
			+'					<div id="memlist" class="panel">'
			+'						<div class="panel-heading">'
			+'							<h3 class="panel-title">회원 목록</h3>'
			+'						</div>'
			+'						<div class="panel-body">'
			+'							<table class="table">'
			+'								<thead>'
			+'									<tr>'
			+'										<th>NO</th>'
			+'										<th>First Name</th>'
			+'										<th>Last Name</th>'
			+'										<th>Username</th>'
			+'									</tr>'
			+'								</thead>'
			+'								<tbody>'
			+'									<tr>'
			+'										<td>1</td>'
			+'										<td>Steve</td>'
			+'										<td>Jobs</td>'
			+'										<td>@steve</td>'
			+'									</tr>'
			+'								</tbody>'
			+'							</table>'
			+'						</div>'
			+'					</div>					'
			+'				</div>'
			+'			<!-- END BASIC TABLE -->'
			+'			</div>'
},

		
		regi:()=>{
			return '			<!-- MAIN CONTENT -->'
			+'			<div id="main-content" class="main-content">'
			+'				<div class="regi-nav">'
			+'					<p class="demo-button">'
			+'						<button type="button" class="btn btn-info btn-lg">'
			+'							<i class="fa fa-calendar"></i> 예약관리'
			+'						</button>'
			+'						<button type="button" class="btn btn-info btn-lg">'
			+'							<i class="lnr lnr-apartment"></i> 예약통계'
			+'						</button>'
			+'					</p>'
			+'				</div>'
			+'				<!--데이터 피커 넣기 https://www.jqueryscript.net/time-clock/Date-Range-Picker-Plugin-jQuery.html-->'
			+'				<div id="regi-content" class="panel">'
			+'					<div class="collapse navbar-collapse"'
			+'						id="bs-example-navbar-collapse-1">'
			+'						<ul class="nav navbar-nav">'
			+'							<li class="dropdown"><a href="#" class="dropdown-toggle"'
			+'								data-toggle="dropdown" role="button" aria-expanded="false">구분'
			+'									전체 <span class="caret"></span>'
			+'							</a>'
			+'								<ul class="dropdown-menu" role="menu">'
			+'									<li><a href="#">민물 낚시</a></li>'
			+'									<li><a href="#">바다 낚시</a></li>'
			+'									<li><a href="#">숙박</a></li>'
			+'								</ul></li>'
			+'							<li class="dropdown"><a href="#" class="dropdown-toggle"'
			+'								data-toggle="dropdown" role="button" aria-expanded="false">구분'
			+'									전체 <span class="caret"></span>'
			+'							</a>'
			+'								<ul class="dropdown-menu" role="menu">'
			+'									<li><a href="#">예약자+업체명</a></li>'
			+'									<li><a href="#">예약자</a></li>'
			+'									<li><a href="#">업체명</a></li>'
			+'								</ul></li>'
			+'						</ul>'
			+'						<form class="navbar-form navbar-left" role="search">'
			+'							<div class="form-group">'
			+'								<input type="text" class="form-control" placeholder="데이트피커자리">'
			+'							</div>'
			+'							<button type="submit" class="btn btn-default">날짜</button>'
			+'						</form>'
			+'						<form class="navbar-form navbar-left" role="search">'
			+'							<div class="form-group">'
			+'								<input type="text" class="form-control" placeholder="Search">'
			+'							</div>'
			+'							<button type="submit" class="btn btn-default">검색</button>'
			+'						</form>'
			+'					</div>'
			+'					'
			+'					<div id="regi-list" class="panel-body">'
			+'						<table class="table table-bordered">'
			+'							<thead>'
			+'								<tr>'
			+'									<th>NO</th>'
			+'									<th>예약번호</th>'
			+'									<th>결제일자</th>'
			+'									<th>예약일자</th>'
			+'									<th>업체명</th>'
			+'									<th>상품명</th>'
			+'									<th>예약자</th>'
			+'									<th>예약금액</th>'
			+'									<th>구분</th>'
			+'								</tr>'
			+'							</thead>'
			+'							<tbody>'
			+'								<tr>'
			+'									<th>3</th>'
			+'									<th>11235</th>'
			+'									<th>2019-04-02</th>'
			+'									<th>2019-06-11</th>'
			+'									<th>낚자 1호</th>'
			+'									<th>광어/우럭</th>'
			+'									<th>이지은</th>'
			+'									<th>70,000</th>'
			+'									<th>바다낚시</th>'
			+'								</tr>'
			+'								<tr>'
			+'									<th>2</th>'
			+'									<th>11235</th>'
			+'									<th>2019-04-02</th>'
			+'									<th>2019-06-11</th>'
			+'									<th>낚자 1호</th>'
			+'									<th>광어/우럭</th>'
			+'									<th>김은영</th>'
			+'									<th>70,000</th>'
			+'									<th>바다낚시</th>'
			+'								</tr>'
			+'								<tr>'
			+'									<th>1</th>'
			+'									<th>11235</th>'
			+'									<th>2019-04-02</th>'
			+'									<th>2019-06-11</th>'
			+'									<th>낚자 1호</th>'
			+'									<th>광어/우럭</th>'
			+'									<th>김은영</th>'
			+'									<th>70,000</th>'
			+'									<th>바다낚시</th>'
			+'								</tr>'
			+'							</tbody>'
			+'						</table>'
			+'					</div>'
			+'				</div>'
			+'			</div>'
			+'			<!-- END MAIN CONTENT -->'
		},
		

};