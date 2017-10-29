<?php
include("config.php");

















######## 取消的 function 副程式 ############



### $_GET[func] == 'accessMapXY' 表示要存暫存地圖的座標位置
### 點選地圖後 , 會將 xy 座標存放於 cookie
if( $_GET[func] == 'accessMapXY' ){	funcDB_Map_Location_XY_Data2(); }
function funcDB_Map_Location_XY_Data2()
	{
		global $db;
		global $ipaddr;

		$func   = $_GET[func];
		$data   = $_GET[data];

		## 如果 $_GET[data] 有資料 , 表示要存 xy 座標至 cookie
		if( $_GET[data] != '' ){
			setcookie( "mapXY", $_GET[data] , time()+86400);
		}
	}



if( $_GET[func] == 'Setup_XY_for_START_END' ){	funcDB_Setup_XY_for_START_END(); }
function funcDB_Setup_XY_for_START_END()
	{
		if( $_GET[flag] == 'START' ){
			setcookie( "mapXY_Start", $_COOKIE["mapXY"] , time()+86400);	}

		if( $_GET[flag] == 'END' ){
			setcookie( "mapXY_END", $_COOKIE["mapXY"] , time()+86400);	}
	}










if( $_GET[func] == 'XXXXXXXXaccessMapXY' ){ 
	funcDB_Map_Location_XY_Data(); }
	function funcDB_Map_Location_XY_Data()
		{
			global $db;
			global $ipaddr;

			$func   = $_GET[func];
			$data   = $_GET[data];

			## 如果 $_GET[data] 有資料 , 表示要存 xy 座標至資料庫
			if( $_GET[data] != '' ){
				$sql = "REPLACE INTO chgData (ipaddr,func,data) VALUES ( '$ipaddr','$func','$data')";
				$qry = $db->prepare($sql);
				$qry->execute();
			}

			## 如果 $_GET[data] 空的 , 表示要讀取 xy 座標
			if( $_GET[data] == '' ){
				$sql = "SELECT data FROM chgData WHERE ipaddr = '$ipaddr' AND func = '$func'  ";
				$qry = $db->prepare($sql);
				$qry->execute();
	
				while($row = $qry->fetch(PDO::FETCH_ASSOC))
					{
						$data  = $row['data'];
					}
				print $data;
			}
		}



##########################################




?>
