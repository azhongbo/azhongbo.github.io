<?php
session_start();
$db     = new PDO("sqlite:emp.sqlite");
$ipaddr = $_SERVER["REMOTE_ADDR"];
?>


<script>


//讀取 Cookie 值
function getCookies(str)
	{
        // 設定 cookie
        // document.cookie = "ename1 = okok";
        // document.cookie = "ename2 = ryan";

        // 讀取 cookie
        // document.getElementById('test').innerHTML = getCookies("abcde")

		var theCookies = document.cookie.split(';');
		for (var i = 0 ; i < theCookies.length; i++) 
			{
                var data = theCookies[i].replace('=','|').split('|');
                var name  = data[0].replace(' ','');
                var value = data[1];

                if( name == str ){
                    return value
                }
			}
    }






</script>