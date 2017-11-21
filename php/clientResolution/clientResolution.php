<?php
//include('config.php');
?>

<hr>

<?php

if( $_GET[func] == "chkData" )
	{
		print $_GET[width] . "<hr>";
		print $_GET[height] . "<hr>";
		print $_GET[name] . "<hr>";
		print $_GET[version] . "<hr>";
		exit;
	}

?>



<iframe id="clientResolution" src="" width="100%" height="300px" frameborder="0" scrolling="no"></iframe>



<!-- ### JAVASCRIPT #########################################################-->
<script>

// ########## 螢幕解析度  #######################

runInfor()
function runInfor()
	{
		width   = "width="   + document.body.clientWidth   + "&";
		height  = "height="  + document.body.clientHeight; + "&";
		name    = "name="    + get_browser().name          + "&";
		version = "version=" + get_browser().version
		url = "clientResolution.php?func=chkData&" + width + height + name + version  

		document.getElementById('clientResolution').src = url
	}
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
