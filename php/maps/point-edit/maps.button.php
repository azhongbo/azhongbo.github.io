<?php include('config.php');?>
<style>
#dataTable
{
	font-size: 12px;
}
#funcTable
{
	font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
	font-size: 12px;
	margin: 1px;
	width: 300px;
	text-align: left;
	border-collapse: collapse;
}
#funcTable th
{
	font-size: 13px;
	font-weight: normal;
	padding: 8px;
	background: #b9c9fe;
	border-top: 4px solid #aabcfe;
	border-bottom: 1px solid #fff;
	color: #039;
}
#funcTable td
{
	padding: 8px;
	background: #e8edff; 
	border-bottom: 1px solid #fff;
	color: #669;
	border-top: 1px solid transparent;
}
#funcTable tr:hover td
{
	background: #d0dafd;
	color: #339;
}
</style>


<table id="funcTable">
	<thead>
    	<tr>			
			<th scope="col" colspan=3 rowspan=1><center>功能</center></th>
        </tr>
    </thead>
    <tbody>
		<tr>
			<td style='color: #039;background: #b9c9fe;'>暫存座標</td>
			<td>
				<div id=last_data>0</div>
			</td>
			<td></td>
		</tr>
		<tr>
			<td style='color: #039;background: #b9c9fe;'>開頭定位</td>
			<td>
				<div id=show_start>0</div>
			</td>
			<td>
				<input name="button1" type="button" value="設定開頭" onclick="Setup_XY_POINT('mapXY_Start')" />
			</td>

		</tr>

		<tr>
			<td style='color: #039;background: #b9c9fe;'>終點定位</td>
			<td>
				<div id=show_end>0</div>
			</td>
			<td>
				<input name="button2" type="button" value="設定終點" onclick="Setup_XY_POINT('mapXY_END')" />
			</td>
		</tr>
		<tr>
			<td style='color: #039;background: #b9c9fe;'>偏移設定</td>
			<td colspan=2 rowspan=1>
				<input name="button2" type="button" value="上" onclick="" />
				<input name="button2" type="button" value="下" onclick="" />
				<input name="button2" type="button" value="左" onclick="" />
				<input name="button2" type="button" value="右" onclick="" />
			</td>
		</tr>

		<tr>
			<td style='color: #039;background: #b9c9fe;'>點位數量</td>
			<td>
				<div id=show_count>5</div>
			</td>
			<td>
				<input name="button2" type="button" value="+" onclick="Setup_Count(1)" />
				<input name="button2" type="button" value="-" onclick="Setup_Count(-1)" />			
			</td>
		</tr>
		<tr>
			<td style='color: #039;background: #b9c9fe;'>面板數量</td>
			<td>
				<div id=show_panel_count>4</div>
			</td>
			<td>
				<input name="button2" type="button" value="+" onclick="Setup_Count(1)" />
				<input name="button2" type="button" value="-" onclick="Setup_Count(-1)" />			
			</td>
		</tr>
		<tr>
			<td style='color: #039;background: #b9c9fe;'>交換器</td>
			<td colspan=2 rowspan=1>
				<div id=switch_ip>192.168.1.1</div>
			</td>
		</tr>
		<tr>
			<td style='color: #039;background: #b9c9fe;'>插孔起始</td>
			<td colspan=2 rowspan=1>
				<div id=switch_interface>int01</div>
			</td>
		</tr>
		<tr>
			<td style='color: #039;background: #b9c9fe;'>點位編號</td>
			<td colspan=2 rowspan=1>
				<div id=panel_num>C001</div>
			</td>
		</tr>
		<tr>
			<td style='color: #039;background: #b9c9fe;'>寫入</td>
			<td colspan=2 rowspan=1>
				<div id=SaveTo>寫入</div>
			</td>
		</tr>
	</tbody>
</table>




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


//初次啟動
Setup_Count(0);
document.cookie = "mapXY=100-200";  Setup_XY_POINT('mapXY_Start')
document.cookie = "mapXY=600-200"; Setup_XY_POINT('mapXY_END')

function Setup_Count(num)
	{
		var thisCount = parseInt( document.getElementById('show_count').innerHTML ) + num

		if( thisCount < 1 ){ thisCount = 1; }

		document.getElementById('show_count').innerHTML = thisCount

		// 標注 REVIEW_POINT_FLAG = YES , 表示要重新繪製 point
		document.cookie = "totalPointCount=" + thisCount;

		// 標注 REVIEW_POINT_FLAG = YES , 表示要重新繪製 point
		document.cookie = "REVIEW_POINT_FLAG=YES";
	}



function Setup_XY_POINT(flag)
	{

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

		// 標注 REVIEW_POINT_FLAG = YES , 表示要重新繪製 point
		document.cookie = "REVIEW_POINT_FLAG=YES";

	}


</script>