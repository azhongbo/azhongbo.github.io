<?php
$clientResolution = new PDO("sqlite:clientResolution.sqlite");
?>

<div id=aa>aa</div>

<iframe id=myBody src="" width="1px" height="1px" frameborder="0" scrolling="no"></iframe>


<script>

var browser = get_browser();
document.getElementById('aa').innerHTML = bbb.version


// ########## 螢幕解析度  #######################
var width  = document.body.clientWidth;
var height = document.body.clientHeight;
// ##########  END #################################



// ########## 偵測瀏覽器版本 #######################
function get_browser() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }
// ##########  END #################################






</script>





<?php


if( $_GET[func] == 1 )
	{
		InsertDB();
	}



function InsertDB()
	{
		global $clientResolution;

		// remote host ip
		$ipaddr   = $_SERVER['REMOTE_ADDR'];
		$remotePC = strtoupper( gethostbyaddr($ipaddr) );


		$sql = "SELECT * FROM main.mailGroup WHERE id = '$id' ";
		$qry = $clientResolution->prepare($sql);
		$qry->execute();
		
		while($row = $qry->fetch(PDO::FETCH_ASSOC))
			{
				$id    = $row['id'];
				$uid   = $row['uid'];
			}
	}

?>



