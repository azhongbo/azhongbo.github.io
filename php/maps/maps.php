<?php include('config.php');?>
<script>
// ########## Function 畫面滾動時 , 後續動作 ######################
var IE = document.all?true:false
if (!IE) document.captureEvents(Event.MOUSEMOVE)

document.onmousemove = getMouseXY;
function getMouseXY(e)
	{
		if (IE){
				tempX = event.clientX + document.body.scrollLeft
				tempY = event.clientY + document.body.scrollTop		} 
		else{
				tempX = e.pageX
				tempY = e.pageY			}  

		if (tempX < 0){tempX = 0}
		if (tempY < 0){tempY = 0}

		// 變更網頁 Title
		//document.title = tempX + "," + tempY
        document.getElementById('info').innerHTML = '滑鼠座標: ' + tempX + "," + tempY
        
		return true
	}
// ########## Function END  ######################
</script>


<style>
#map
{  
	position:  absolute;
    top:       0px;
    left:      0px;
    z-index:   10;
}
#point
{   position:  absolute;
    top:       0px;
    left:      0px;
    z-index:   50;
	font-size: 12px;
}
#info
{   position:  absolute;
    top:       0px;
    left:      0px;
    z-index:   20;
	font-size: 12px;
}
#info2
{   position:  absolute;
    top:       12px;
    left:      0px;
    z-index:   20;
	font-size: 12px;
}


#myFunction
{   position:  absolute;
    top:       22px;
    left:      0px;
    z-index:   20;
}


</style>




<img id=map src=maps/T1-RF.png width=900px; onclick='xy2array();'>
<div id=point></div>
<div id=info title='滑鼠軌跡'>滑鼠座標: </div>
<div id=info2>0</div>
<iframe id=myFunc src="" width=200px height=500px frameborder=0 scrolling=no></iframe>



<script>

// 點選地圖後 , 呼叫 myFunc.php 並將座標位置存放至 cookie
function xy2array()
	{
		document.cookie = "mapXY=" + tempX + '-' + tempY;
	}




//mapXY=319-386; mapXY_Start=626-258; mapXY_END=692-247; PHPSESSID=slm31m6jku1ihbs1cmb6osiul3

getPointData();getPointDataTimeout();
function getPointDataTimeout() {
    setTimeout(function () 
		{
			// getCookies("REVIEW_POINT_FLAG") 定義於 maps.button.php >> 副程式 function Setup_XY_POINT
			// 當點選 設定開頭 / 設定終點 被按下 , 將會設定 document.cookie = "REVIEW_POINT_FLAG=YES"
			// 則將表示必須重新讀取一次 Point 定位點
			if( getCookies("REVIEW_POINT_FLAG") == 'YES' )
				{
					getPointData();
					document.cookie = "REVIEW_POINT_FLAG=NO";
				}
				getPointDataTimeout();
		}, 1500);
	}


function getPointData() 
	{
		var nn = 10

		var xy01 = getCookies("mapXY_Start").split('-');
		left01 = parseInt( xy01[0] ) - 8 ; // left
		top01  = parseInt( xy01[1] ) - 8 ; // top
		
		var xy02 = getCookies("mapXY_END").split('-');
		left02 = parseInt( xy02[0] ) - 8 ; // left
		top02  = parseInt( xy02[1] ) - 8 ; // top


		pointXX = ''
		leftY = left01 + 8  //初始化 , 並把圖片位移修正給調回來
		topX  = top01  + 8  //初始化 , 並把圖片位移修正給調回來

		for(i=0;i<nn-2;i++){
			leftY = leftY + ( (left02 - left01) / (nn-1) );
			topX  = topX  + ( (top02  - top01)  / (nn-1) );

			fixLeft = Math.floor(leftY - 8) // 修正圖片位移
			fixTop  = Math.floor(topX  - 8) // 修正圖片位移

			pointXX = pointXX + "<img src='images/point01.gif' style='position: absolute;top:" + fixTop + "px;left:" + fixLeft + "px;z-index: 20;width:16px;height:16px;'>\n";
		}

		point01 = "<img src='images/point01.gif' style='position: absolute;top:" + top01 + "px;left:" + left01 + "px;z-index: 20;width:16px;height:16px;'>\n";
		point02 = "<img src='images/point02.gif' style='position: absolute;top:" + top02 + "px;left:" + left02 + "px;z-index: 20;width:16px;height:16px;'>\n";

		document.getElementById('point').innerHTML = point01 + pointXX + point02

	}



</script>
