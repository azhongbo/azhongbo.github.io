<?php include('config.php');?>
<style>
#dataTable
{
	font-size: 12px;
}
</style>

<table id=dataTable width=350px border=1>
	<tr>
		<td>暫存區</td>
		<td>開頭定位</td>
		<td>終點定位</td>
	</tr>


	<tr>
		<td>
			<div id=last_data>0</div>
		</td>
		<td>
			<div id=show_start>0</div>
		</td>
		<td>
			<div id=show_end>0</div>
		</td>
	</tr>
</table>

<input name="button1" type="button" value="設定開頭" onclick="Setup_XY_POINT('mapXY_Start')" />
<input name="button2" type="button" value="設定終點" onclick="Setup_XY_POINT('mapXY_END')" />

<iframe id=myFunc src="" width=1px height=1x frameborder=0 scrolling=no></iframe>




<script>
timeout()
function timeout() {
    setTimeout(function () 
		{
			document.getElementById('last_data').innerHTML  = getCookies("mapXY")
			document.getElementById('show_start').innerHTML = getCookies("mapXY_Start")
			document.getElementById('show_end').innerHTML   = getCookies("mapXY_END")

			timeout();
		}, 1500);
	}



function Setup_XY_POINT(flag)
	{

		// 標注 REVIEW_POINT_FLAG = YES , 表示要重新繪製 point
		document.cookie = "REVIEW_POINT_FLAG=YES";

		// 調整結尾 point 座標 , 當靠近開頭座標 , 將自動修正為水平
		if( flag == 'mapXY_END')
			{
				fixValue = 10; // 修正 value

				// 取出當前暫存定位值
				var data = getCookies("mapXY").split('-')
				left_mem = data[0]
				top_mem  = data[1]

				// 取出開頭定位值
				data = getCookies("mapXY_Start").split('-')
				left_start = data[0]
				top_start  = data[1]

				// 進行 Y軸 (top值) 減法 , 暫存區定位top值  減去 開頭定位top值 
				if( top_mem > top_start ){ yy = top_mem   - top_start; }
				else{                      yy = top_start - top_mem;   }

				// 進行 X軸 (left值) 減法 , 暫存區定位left值  減去 開頭定位left值 
				if( left_mem > left_start ){ xx = left_mem   - left_start; }
				else{                        xx = left_start - left_mem;   }

				// 若減去後數值小於 fixValue , 將暫存區定位的 left 或 top , 修正跟 開頭定位的值 一樣
				if( yy <= fixValue ){ document.cookie = "mapXY=" + left_mem   + '-' + top_start; }
				if( xx <= fixValue ){ document.cookie = "mapXY=" + left_start + '-' + top_mem;   }
			}


		// 當 flag = mapXY_Start , cookie設定為 >>>  document.cookie = mapXY_Start=getCookies("mapXY");
		// 當 flag = mapXY_END   , cookie設定為 >>>  document.cookie = mapXY_END=getCookies("mapXY");
		document.cookie = flag + "=" + getCookies("mapXY");
	}


</script>