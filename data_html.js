
// chkData(`
// ##### (data_html.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_html.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_html.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_html.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_html.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_html.js) 主旨放這裡 #####
// 內容放這裡
// `)






chkData(`
##### (data_html.js) HTML 播放器/ffmpeg 影片剪接 #####
&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt; 

&lt;video width=&quot;320&quot; height=&quot;240&quot; controls&gt;
&lt;source src=&quot;a1.mp4&quot; type=&quot;video/mp4&quot;&gt;
Your browser does not support the video tag.
&lt;/video&gt;


## ffmpeg 裁切 crop=1360:768:0:0  width:height:xx:yy /分割/Win7/ FPS -r 10 #####
ffmpeg -i Python-0921-1.mp4 -filter:v &quot;crop=1360:768:0:0&quot; -pix_fmt yuv420p -r 10 -c:a copy -movflags +faststart Python-0921-1.ok.mp4

## ffmpeg 轉檔 ##
ffmpeg -i input.m4v -f mp4 -c:v copy -c:a aac -b:a 384k -strict -2 output.mp4

## ffmpeg Win7 轉檔(有聲音)) ##
ffmpeg -i in.mp4 -pix_fmt yuv420p -c:a copy -movflags +faststart out.mp4
ffmpeg -i input.wmv -pix_fmt yuv420p -r 15 -acodec aac -strict experimental -ar 48000 -b:a 128k output.mp4

## ffmpeg 合併 ##
cat mylist.txt
file '1.mp4'
file '2.mp4'
ffmpeg -f concat -i mylist.txt -c copy output.mp4

## ffmpeg 分割 ##
ffmpeg -ss 00:00:16 -t 00:00:09 -i input.mp4 -c copy output.mp4

## ffmpeg to 640x360 ##
ffmpeg -i 00000.MTS.mp4 -vf scale=640:360 output_640.mp4 -hide_banner

## ffmpeg to mp3 ##
ffmpeg -i 'aaa.wma' -acodec libmp3lame -ab 192k 'bbb.mp3'
`)



chkData(`
##### (data_html.js) 基本格式 #####
###  HTML 標準範例 ####
&lt;!-- file: mainCode_HTML_ --&gt;

&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;
&lt;HTML xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
&lt;HEAD&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;
&lt;TITLE&gt;&lt;/TITLE&gt;
&lt;STYLE type=&quot;text/css&quot;&gt;
&lt;/STYLE&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
&lt;/BODY&gt;
&lt;/HTML&gt; 
`)



chkData(`
##### (data_html.js) TOP 10 Table #####
###  HTML TOP 10 Table ####
&lt;!-- file: mainCode_HTML_ --&gt;

&lt;style type=&quot;text/css&quot;&gt;
body
{
	line-height: 1.6em;
}
#hor-minimalist-a
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	background: #fff;
	margin: 45px;
	width: 480px;
	border-collapse: collapse;
	text-align: left;
}
#hor-minimalist-a th
{
	font-size: 14px;
	font-weight: normal;
	color: #039;
	padding: 10px 8px;
	border-bottom: 2px solid #6678b1;
}
#hor-minimalist-a td
{
	color: #669;
	padding: 9px 8px 0px 8px;
}
#hor-minimalist-a tbody tr:hover td
{
	color: #009;
}


#hor-minimalist-b
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	background: #fff;
	margin: 45px;
	width: 480px;
	border-collapse: collapse;
	text-align: left;
}
#hor-minimalist-b th
{
	font-size: 14px;
	font-weight: normal;
	color: #039;
	padding: 10px 8px;
	border-bottom: 2px solid #6678b1;
}
#hor-minimalist-b td
{
	border-bottom: 1px solid #ccc;
	color: #669;
	padding: 6px 8px;
}
#hor-minimalist-b tbody tr:hover td
{
	color: #009;
}


#ver-minimalist
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
}
#ver-minimalist th
{
	padding: 8px 2px;
	font-weight: normal;
	font-size: 14px;
	border-bottom: 2px solid #6678b1;
	border-right: 30px solid #fff;
	border-left: 30px solid #fff;
	color: #039;
}
#ver-minimalist td
{
	padding: 12px 2px 0px 2px;
	border-right: 30px solid #fff;
	border-left: 30px solid #fff;
	color: #669;
}


#box-table-a
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
}
#box-table-a th
{
	font-size: 13px;
	font-weight: normal;
	padding: 8px;
	background: #b9c9fe;
	border-top: 4px solid #aabcfe;
	border-bottom: 1px solid #fff;
	color: #039;
}
#box-table-a td
{
	padding: 8px;
	background: #e8edff; 
	border-bottom: 1px solid #fff;
	color: #669;
	border-top: 1px solid transparent;
}
#box-table-a tr:hover td
{
	background: #d0dafd;
	color: #339;
}


#box-table-b
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: center;
	border-collapse: collapse;
	border-top: 7px solid #9baff1;
	border-bottom: 7px solid #9baff1;
}
#box-table-b th
{
	font-size: 13px;
	font-weight: normal;
	padding: 8px;
	background: #e8edff;
	border-right: 1px solid #9baff1;
	border-left: 1px solid #9baff1;
	color: #039;
}
#box-table-b td
{
	padding: 8px;
	background: #e8edff; 
	border-right: 1px solid #aabcfe;
	border-left: 1px solid #aabcfe;
	color: #669;
}


#hor-zebra
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
}
#hor-zebra th
{
	font-size: 14px;
	font-weight: normal;
	padding: 10px 8px;
	color: #039;
}
#hor-zebra td
{
	padding: 8px;
	color: #669;
}
#hor-zebra .odd
{
	background: #e8edff; 
}


#ver-zebra
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
}
#ver-zebra th
{
	font-size: 14px;
	font-weight: normal;
	padding: 12px 15px;
	border-right: 1px solid #fff;
	border-left: 1px solid #fff;
	color: #039;
}
#ver-zebra td
{
	padding: 8px 15px;
	border-right: 1px solid #fff;
	border-left: 1px solid #fff;
	color: #669;
}
.vzebra-odd
{
	background: #eff2ff;
}
.vzebra-even
{
	background: #e8edff;
}
#ver-zebra #vzebra-adventure, #ver-zebra #vzebra-children
{
	background: #d0dafd;
	border-bottom: 1px solid #c8d4fd;
}
#ver-zebra #vzebra-comedy, #ver-zebra #vzebra-action
{
	background: #dce4ff;
	border-bottom: 1px solid #d6dfff;
}


#one-column-emphasis
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
}
#one-column-emphasis th
{
	font-size: 14px;
	font-weight: normal;
	padding: 12px 15px;
	color: #039;
}
#one-column-emphasis td
{
	padding: 10px 15px;
	color: #669;
	border-top: 1px solid #e8edff;
}
.oce-first
{
	background: #d0dafd;
	border-right: 10px solid transparent;
	border-left: 10px solid transparent;
}
#one-column-emphasis tr:hover td
{
	color: #339;
	background: #eff2ff;
}


#newspaper-a
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
	border: 1px solid #69c;
}
#newspaper-a th
{
	padding: 12px 17px 12px 17px;
	font-weight: normal;
	font-size: 14px;
	color: #039;
	border-bottom: 1px dashed #69c;
}
#newspaper-a td
{
	padding: 7px 17px 7px 17px;
	color: #669;
}
#newspaper-a tbody tr:hover td
{
	color: #339;
	background: #d0dafd;
}


#newspaper-b
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
	border: 1px solid #69c;
}
#newspaper-b th
{
	padding: 15px 10px 10px 10px;
	font-weight: normal;
	font-size: 14px;
	color: #039;
}
#newspaper-b tbody
{
	background: #e8edff;
}
#newspaper-b td
{
	padding: 10px;
	color: #669;
	border-top: 1px dashed #fff;
}
#newspaper-b tbody tr:hover td
{
	color: #339;
	background: #d0dafd;
}


#newspaper-c
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
	border: 1px solid #6cf;
}
#newspaper-c th
{
	padding: 20px;
	font-weight: normal;
	font-size: 13px;
	color: #039;
	text-transform: uppercase;
	border-right: 1px solid #0865c2;
	border-top: 1px solid #0865c2;
	border-left: 1px solid #0865c2;
	border-bottom: 1px solid #fff;
}
#newspaper-c td
{
	padding: 10px 20px;
	color: #669;
	border-right: 1px dashed #6cf;
}


#rounded-corner
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
}
#rounded-corner thead th.rounded-company
{
	background: #b9c9fe url('table-images/left.png') left -1px no-repeat;
}
#rounded-corner thead th.rounded-q4
{
	background: #b9c9fe url('table-images/right.png') right -1px no-repeat;
}
#rounded-corner th
{
	padding: 8px;
	font-weight: normal;
	font-size: 13px;
	color: #039;
	background: #b9c9fe;
}
#rounded-corner td
{
	padding: 8px;
	background: #e8edff;
	border-top: 1px solid #fff;
	color: #669;
}
#rounded-corner tfoot td.rounded-foot-left
{
	background: #e8edff url('table-images/botleft.png') left bottom no-repeat;
}
#rounded-corner tfoot td.rounded-foot-right
{
	background: #e8edff url('table-images/botright.png') right bottom no-repeat;
}
#rounded-corner tbody tr:hover td
{
	background: #d0dafd;
}


#background-image
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
	background: url('table-images/blurry.jpg') 330px 59px no-repeat;
}
#background-image th
{
	padding: 12px;
	font-weight: normal;
	font-size: 14px;
	color: #339;
}
#background-image td
{
	padding: 9px 12px;
	color: #669;
	border-top: 1px solid #fff;
}
#background-image tfoot td
{
	font-size: 11px;
}
#background-image tbody td
{
	background: url('table-images/back.png');
}
* html #background-image tbody td
{
	/* 
	   ----------------------------
		PUT THIS ON IE6 ONLY STYLE 
		AS THE RULE INVALIDATES
		YOUR STYLESHEET
	   ----------------------------
	*/
	filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='table-images/back.png',sizingMethod='crop');
	background: none;
}	
#background-image tbody tr:hover td
{
	color: #339;
	background: none;
}


#gradient-style
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
}
#gradient-style th
{
	font-size: 13px;
	font-weight: normal;
	padding: 8px;
	background: #b9c9fe url('table-images/gradhead.png') repeat-x;
	border-top: 2px solid #d3ddff;
	border-bottom: 1px solid #fff;
	color: #039;
}
#gradient-style td
{
	padding: 8px; 
	border-bottom: 1px solid #fff;
	color: #669;
	border-top: 1px solid #fff;
	background: #e8edff url('table-images/gradback.png') repeat-x;
}
#gradient-style tfoot tr td
{
	background: #e8edff;
	font-size: 12px;
	color: #99c;
}
#gradient-style tbody tr:hover td
{
	background: #d0dafd url('table-images/gradhover.png') repeat-x;
	color: #339;
}


#pattern-style-a
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
	background: url('table-images/pattern.png');
}
#pattern-style-a thead tr
{
	background: url('table-images/pattern-head.png');
}
#pattern-style-a th
{
	font-size: 13px;
	font-weight: normal;
	padding: 8px;
	border-bottom: 1px solid #fff;
	color: #039;
}
#pattern-style-a td
{
	padding: 8px; 
	border-bottom: 1px solid #fff;
	color: #669;
	border-top: 1px solid transparent;
}
#pattern-style-a tbody tr:hover td
{
	color: #339;
	background: #fff;
}


#pattern-style-b
{
	font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, Sans-Serif;
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	margin: 45px;
	width: 480px;
	text-align: left;
	border-collapse: collapse;
	background: url('table-images/patternb.png');
}
#pattern-style-b thead tr
{
	background: url('table-images/patternb-head.png');
}
#pattern-style-b th
{
	font-size: 13px;
	font-weight: normal;
	padding: 8px;
	border-bottom: 1px solid #fff;
	color: #039;
}
#pattern-style-b td
{
	padding: 8px; 
	border-bottom: 1px solid #fff;
	color: #669;
	border-top: 1px solid transparent;
}
#pattern-style-b tbody tr:hover td
{
	color: #339;
	background: #cdcdee;
}
&lt;/style&gt;


&lt;/head&gt;
&lt;body&gt;
&lt;table id=&quot;hor-minimalist-a&quot; summary=&quot;Employee Pay Sheet&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Employee&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Salary&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Bonus&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Supervisor&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Stephen C. Cox&lt;/td&gt;
            &lt;td&gt;$300&lt;/td&gt;
            &lt;td&gt;$50&lt;/td&gt;
            &lt;td&gt;Bob&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Josephin Tan&lt;/td&gt;
            &lt;td&gt;$150&lt;/td&gt;
            &lt;td&gt;-&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Joyce Ming&lt;/td&gt;
            &lt;td&gt;$200&lt;/td&gt;
            &lt;td&gt;$35&lt;/td&gt;
            &lt;td&gt;Andy&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;James A. Pentel&lt;/td&gt;
            &lt;td&gt;$175&lt;/td&gt;
            &lt;td&gt;$25&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;

&lt;table id=&quot;hor-minimalist-b&quot; summary=&quot;Employee Pay Sheet&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Employee&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Salary&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Bonus&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Supervisor&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Stephen C. Cox&lt;/td&gt;
            &lt;td&gt;$300&lt;/td&gt;
            &lt;td&gt;$50&lt;/td&gt;
            &lt;td&gt;Bob&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Josephin Tan&lt;/td&gt;
            &lt;td&gt;$150&lt;/td&gt;
            &lt;td&gt;-&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Joyce Ming&lt;/td&gt;
            &lt;td&gt;$200&lt;/td&gt;
            &lt;td&gt;$35&lt;/td&gt;
            &lt;td&gt;Andy&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;James A. Pentel&lt;/td&gt;
            &lt;td&gt;$175&lt;/td&gt;
            &lt;td&gt;$25&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;


&lt;table id=&quot;ver-minimalist&quot; summary=&quot;Most Favorite Movies&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Comedy&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Adventure&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Action&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Children&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Scary Movie&lt;/td&gt;
            &lt;td&gt;Indiana Jones&lt;/td&gt;
            &lt;td&gt;The Punisher&lt;/td&gt;
            &lt;td&gt;Wall-E&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Epic Movie&lt;/td&gt;
            &lt;td&gt;Star Wars&lt;/td&gt;
            &lt;td&gt;Bad Boys&lt;/td&gt;
            &lt;td&gt;Madagascar&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Spartan&lt;/td&gt;
            &lt;td&gt;LOTR&lt;/td&gt;
            &lt;td&gt;Die Hard&lt;/td&gt;
            &lt;td&gt;Finding Nemo&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Dr. Dolittle&lt;/td&gt;
            &lt;td&gt;The Mummy&lt;/td&gt;
            &lt;td&gt;300&lt;/td&gt;
            &lt;td&gt;A Bug's Life&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;

&lt;table id=&quot;box-table-a&quot; summary=&quot;Employee Pay Sheet&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Employee&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Salary&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Bonus&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Supervisor&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Stephen C. Cox&lt;/td&gt;
            &lt;td&gt;$300&lt;/td&gt;
            &lt;td&gt;$50&lt;/td&gt;
            &lt;td&gt;Bob&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Josephin Tan&lt;/td&gt;
            &lt;td&gt;$150&lt;/td&gt;
            &lt;td&gt;-&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Joyce Ming&lt;/td&gt;
            &lt;td&gt;$200&lt;/td&gt;
            &lt;td&gt;$35&lt;/td&gt;
            &lt;td&gt;Andy&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;James A. Pentel&lt;/td&gt;
            &lt;td&gt;$175&lt;/td&gt;
            &lt;td&gt;$25&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;


&lt;table id=&quot;box-table-b&quot; summary=&quot;Most Favorit Movies&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Comedy&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Adventure&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Action&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Children&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Scary Movie&lt;/td&gt;
            &lt;td&gt;Indiana Jones&lt;/td&gt;
            &lt;td&gt;The Punisher&lt;/td&gt;
            &lt;td&gt;Wall-E&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Epic Movie&lt;/td&gt;
            &lt;td&gt;Star Wars&lt;/td&gt;
            &lt;td&gt;Bad Boys&lt;/td&gt;
            &lt;td&gt;Madagascar&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Spartan&lt;/td&gt;
            &lt;td&gt;LOTR&lt;/td&gt;
            &lt;td&gt;Die Hard&lt;/td&gt;
            &lt;td&gt;Finding Nemo&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Dr. Dolittle&lt;/td&gt;
            &lt;td&gt;The Mummy&lt;/td&gt;
            &lt;td&gt;300&lt;/td&gt;
            &lt;td&gt;A Bug's Life&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;


&lt;table id=&quot;hor-zebra&quot; summary=&quot;Employee Pay Sheet&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Employee&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Salary&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Bonus&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Supervisor&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr class=&quot;odd&quot;&gt;
        	&lt;td&gt;Stephen C. Cox&lt;/td&gt;
            &lt;td&gt;$300&lt;/td&gt;
            &lt;td&gt;$50&lt;/td&gt;
            &lt;td&gt;Bob&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Josephin Tan&lt;/td&gt;
            &lt;td&gt;$150&lt;/td&gt;
            &lt;td&gt;-&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr class=&quot;odd&quot;&gt;
        	&lt;td&gt;Joyce Ming&lt;/td&gt;
            &lt;td&gt;$200&lt;/td&gt;
            &lt;td&gt;$35&lt;/td&gt;
            &lt;td&gt;Andy&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;James A. Pentel&lt;/td&gt;
            &lt;td&gt;$175&lt;/td&gt;
            &lt;td&gt;$25&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;


&lt;table id=&quot;ver-zebra&quot; summary=&quot;Most Favorite Movies&quot;&gt;
    &lt;colgroup&gt;
    	&lt;col class=&quot;vzebra-odd&quot; /&gt;
    	&lt;col class=&quot;vzebra-even&quot; /&gt;
    	&lt;col class=&quot;vzebra-odd&quot; /&gt;
        &lt;col class=&quot;vzebra-even&quot; /&gt;
    &lt;/colgroup&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot; id=&quot;vzebra-comedy&quot;&gt;Comedy&lt;/th&gt;
            &lt;th scope=&quot;col&quot; id=&quot;vzebra-adventure&quot;&gt;Adventure&lt;/th&gt;
            &lt;th scope=&quot;col&quot; id=&quot;vzebra-action&quot;&gt;Action&lt;/th&gt;
            &lt;th scope=&quot;col&quot; id=&quot;vzebra-children&quot;&gt;Children&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Scary Movie&lt;/td&gt;
            &lt;td&gt;Indiana Jones&lt;/td&gt;
            &lt;td&gt;The Punisher&lt;/td&gt;
            &lt;td&gt;Wall-E&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Epic Movie&lt;/td&gt;
            &lt;td&gt;Star Wars&lt;/td&gt;
            &lt;td&gt;Bad Boys&lt;/td&gt;
            &lt;td&gt;Madagascar&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Spartan&lt;/td&gt;
            &lt;td&gt;LOTR&lt;/td&gt;
            &lt;td&gt;Die Hard&lt;/td&gt;
            &lt;td&gt;Finding Nemo&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Dr. Dolittle&lt;/td&gt;
            &lt;td&gt;The Mummy&lt;/td&gt;
            &lt;td&gt;300&lt;/td&gt;
            &lt;td&gt;A Bug's Life&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;

&lt;table id=&quot;one-column-emphasis&quot; summary=&quot;2007 Major IT Companies' Profit&quot;&gt;
    &lt;colgroup&gt;
    	&lt;col class=&quot;oce-first&quot; /&gt;
    &lt;/colgroup&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Company&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q1&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q2&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q3&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q4&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Microsoft&lt;/td&gt;
            &lt;td&gt;20.3&lt;/td&gt;
            &lt;td&gt;30.5&lt;/td&gt;
            &lt;td&gt;23.5&lt;/td&gt;
            &lt;td&gt;40.3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Google&lt;/td&gt;
            &lt;td&gt;50.2&lt;/td&gt;
            &lt;td&gt;40.63&lt;/td&gt;
            &lt;td&gt;45.23&lt;/td&gt;
            &lt;td&gt;39.3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Apple&lt;/td&gt;
            &lt;td&gt;25.4&lt;/td&gt;
            &lt;td&gt;30.2&lt;/td&gt;
            &lt;td&gt;33.3&lt;/td&gt;
            &lt;td&gt;36.7&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;IBM&lt;/td&gt;
            &lt;td&gt;20.4&lt;/td&gt;
            &lt;td&gt;15.6&lt;/td&gt;
            &lt;td&gt;22.3&lt;/td&gt;
            &lt;td&gt;29.3&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;


&lt;table id=&quot;newspaper-a&quot; summary=&quot;2007 Major IT Companies' Profit&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Company&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q1&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q2&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q3&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q4&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Microsoft&lt;/td&gt;
            &lt;td&gt;20.3&lt;/td&gt;
            &lt;td&gt;30.5&lt;/td&gt;
            &lt;td&gt;23.5&lt;/td&gt;
            &lt;td&gt;40.3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Google&lt;/td&gt;
            &lt;td&gt;50.2&lt;/td&gt;
            &lt;td&gt;40.63&lt;/td&gt;
            &lt;td&gt;45.23&lt;/td&gt;
            &lt;td&gt;39.3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Apple&lt;/td&gt;
            &lt;td&gt;25.4&lt;/td&gt;
            &lt;td&gt;30.2&lt;/td&gt;
            &lt;td&gt;33.3&lt;/td&gt;
            &lt;td&gt;36.7&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;IBM&lt;/td&gt;
            &lt;td&gt;20.4&lt;/td&gt;
            &lt;td&gt;15.6&lt;/td&gt;
            &lt;td&gt;22.3&lt;/td&gt;
            &lt;td&gt;29.3&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;


&lt;table id=&quot;newspaper-b&quot; summary=&quot;2007 Major IT Companies' Profit&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Company&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q1&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q2&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q3&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Q4&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
        &lt;tfoot&gt;
    	&lt;tr&gt;
        	&lt;td colspan=&quot;5&quot;&gt;&lt;em&gt;The above data were fictional and made up, please do not sue me&lt;/em&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Microsoft&lt;/td&gt;
            &lt;td&gt;20.3&lt;/td&gt;
            &lt;td&gt;30.5&lt;/td&gt;
            &lt;td&gt;23.5&lt;/td&gt;
            &lt;td&gt;40.3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Google&lt;/td&gt;
            &lt;td&gt;50.2&lt;/td&gt;
            &lt;td&gt;40.63&lt;/td&gt;
            &lt;td&gt;45.23&lt;/td&gt;
            &lt;td&gt;39.3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Apple&lt;/td&gt;
            &lt;td&gt;25.4&lt;/td&gt;
            &lt;td&gt;30.2&lt;/td&gt;
            &lt;td&gt;33.3&lt;/td&gt;
            &lt;td&gt;36.7&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;IBM&lt;/td&gt;
            &lt;td&gt;20.4&lt;/td&gt;
            &lt;td&gt;15.6&lt;/td&gt;
            &lt;td&gt;22.3&lt;/td&gt;
            &lt;td&gt;29.3&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;

&lt;table id=&quot;newspaper-c&quot; summary=&quot;Personal Movie Rating&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Favorite&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Great&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Nice&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Bad&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Passion of the Christ&lt;/td&gt;
            &lt;td&gt;Bourne Ultimatum&lt;/td&gt;
            &lt;td&gt;Shoot 'Em Up&lt;/td&gt;
            &lt;td&gt;Ali&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;The Big Fish&lt;/td&gt;
            &lt;td&gt;The Mummy&lt;/td&gt;
            &lt;td&gt;Apocalypto&lt;/td&gt;
            &lt;td&gt;Monster&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Shawshank Redemption&lt;/td&gt;
            &lt;td&gt;Cold Mountain&lt;/td&gt;
            &lt;td&gt;Indiana Jones&lt;/td&gt;
            &lt;td&gt;Dead or Alive&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Greatest Story Ever Told&lt;/td&gt;
            &lt;td&gt;I Am Legend&lt;/td&gt;
            &lt;td&gt;Star Wars&lt;/td&gt;
            &lt;td&gt;Saw 3&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;


&lt;table id=&quot;rounded-corner&quot; summary=&quot;2007 Major IT Companies' Profit&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot; class=&quot;rounded-company&quot;&gt;Company&lt;/th&gt;
            &lt;th scope=&quot;col&quot; class=&quot;rounded-q1&quot;&gt;Q1&lt;/th&gt;
            &lt;th scope=&quot;col&quot; class=&quot;rounded-q2&quot;&gt;Q2&lt;/th&gt;
            &lt;th scope=&quot;col&quot; class=&quot;rounded-q3&quot;&gt;Q3&lt;/th&gt;
            &lt;th scope=&quot;col&quot; class=&quot;rounded-q4&quot;&gt;Q4&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
        &lt;tfoot&gt;
    	&lt;tr&gt;
        	&lt;td colspan=&quot;4&quot; class=&quot;rounded-foot-left&quot;&gt;&lt;em&gt;The above data were fictional and made up, please do not sue me&lt;/em&gt;&lt;/td&gt;
        	&lt;td class=&quot;rounded-foot-right&quot;&gt;&nbsp;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Microsoft&lt;/td&gt;
            &lt;td&gt;20.3&lt;/td&gt;
            &lt;td&gt;30.5&lt;/td&gt;
            &lt;td&gt;23.5&lt;/td&gt;
            &lt;td&gt;40.3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Google&lt;/td&gt;
            &lt;td&gt;50.2&lt;/td&gt;
            &lt;td&gt;40.63&lt;/td&gt;
            &lt;td&gt;45.23&lt;/td&gt;
            &lt;td&gt;39.3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Apple&lt;/td&gt;
            &lt;td&gt;25.4&lt;/td&gt;
            &lt;td&gt;30.2&lt;/td&gt;
            &lt;td&gt;33.3&lt;/td&gt;
            &lt;td&gt;36.7&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;IBM&lt;/td&gt;
            &lt;td&gt;20.4&lt;/td&gt;
            &lt;td&gt;15.6&lt;/td&gt;
            &lt;td&gt;22.3&lt;/td&gt;
            &lt;td&gt;29.3&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;

&lt;table id=&quot;background-image&quot; summary=&quot;Meeting Results&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Employee&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Division&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Suggestions&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tfoot&gt;
    	&lt;tr&gt;
        	&lt;td colspan=&quot;4&quot;&gt;IE 6 users won't see the transparent background if the hack is not applied&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Stephen C. Cox&lt;/td&gt;
            &lt;td&gt;Marketing&lt;/td&gt;
            &lt;td&gt;Make discount offers&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Josephin Tan&lt;/td&gt;
            &lt;td&gt;Advertising&lt;/td&gt;
            &lt;td&gt;Give bonuses&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Joyce Ming&lt;/td&gt;
            &lt;td&gt;Marketing&lt;/td&gt;
            &lt;td&gt;New designs&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;James A. Pentel&lt;/td&gt;
            &lt;td&gt;Marketing&lt;/td&gt;
            &lt;td&gt;Better Packaging&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;


&lt;table id=&quot;gradient-style&quot; summary=&quot;Meeting Results&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Employee&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Division&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Suggestions&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Rating&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tfoot&gt;
    	&lt;tr&gt;
        	&lt;td colspan=&quot;4&quot;&gt;Give background color to the table cells to achieve seamless transition&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Stephen C. Cox&lt;/td&gt;
            &lt;td&gt;Marketing&lt;/td&gt;
            &lt;td&gt;Make discount offers&lt;/td&gt;
            &lt;td&gt;3/10&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Josephin Tan&lt;/td&gt;
            &lt;td&gt;Advertising&lt;/td&gt;
            &lt;td&gt;Give bonuses&lt;/td&gt;
        	&lt;td&gt;5/10&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Joyce Ming&lt;/td&gt;
            &lt;td&gt;Marketing&lt;/td&gt;
            &lt;td&gt;New designs&lt;/td&gt;
        	&lt;td&gt;8/10&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;James A. Pentel&lt;/td&gt;
            &lt;td&gt;Marketing&lt;/td&gt;
            &lt;td&gt;Better Packaging&lt;/td&gt;
            &lt;td&gt;8/10&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;


&lt;table id=&quot;pattern-style-a&quot; summary=&quot;Meeting Results&quot;&gt;
   &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Employee&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Salary&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Bonus&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Supervisor&lt;/th&gt;
        &lt;/tr&gt;
  &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Stephen C. Cox&lt;/td&gt;
            &lt;td&gt;$300&lt;/td&gt;
            &lt;td&gt;$50&lt;/td&gt;
            &lt;td&gt;Bob&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Josephin Tan&lt;/td&gt;
            &lt;td&gt;$150&lt;/td&gt;
            &lt;td&gt;-&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Joyce Ming&lt;/td&gt;
            &lt;td&gt;$200&lt;/td&gt;
            &lt;td&gt;$35&lt;/td&gt;
            &lt;td&gt;Andy&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;James A. Pentel&lt;/td&gt;
            &lt;td&gt;$175&lt;/td&gt;
            &lt;td&gt;$25&lt;/td&gt;
            &lt;td&gt;Annie&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;

&lt;table id=&quot;pattern-style-b&quot; summary=&quot;Meeting Results&quot;&gt;
    &lt;thead&gt;
    	&lt;tr&gt;
        	&lt;th scope=&quot;col&quot;&gt;Nation&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Capital&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Language&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Unique&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    	&lt;tr&gt;
        	&lt;td&gt;Japan&lt;/td&gt;
            &lt;td&gt;Tokyo&lt;/td&gt;
            &lt;td&gt;Japanese&lt;/td&gt;
            &lt;td&gt;Karate&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;South Korea&lt;/td&gt;
            &lt;td&gt;Seoul&lt;/td&gt;
            &lt;td&gt;Korean&lt;/td&gt;
            &lt;td&gt;Ginseng&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;China&lt;/td&gt;
            &lt;td&gt;Beijing&lt;/td&gt;
            &lt;td&gt;Mandarin&lt;/td&gt;
            &lt;td&gt;Kung-Fu&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        	&lt;td&gt;Indonesia&lt;/td&gt;
            &lt;td&gt;Jakarta&lt;/td&gt;
            &lt;td&gt;Indonesian&lt;/td&gt;
            &lt;td&gt;Batik&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
`)


chkData(`
##### (data_html.js) CSS 範例 #####
&lt;!-- file: mainCode_HTML_ --&gt;
&lt;style type=&quot;text/css&quot;&gt;
#myId
{
    /* position: relative (相對定位) / absolute (絕對定位) / fixed (浮動定位) / static (靜態定位-預設) */
    position:absolute;
    top:     50px;
    left:    50px;
    z-index: 10;    
	
    font-family: &quot;Microsoft JhengHei&quot;,&quot;微軟正黑體&quot;,&quot;Lucida Sans Unicode&quot;;
	font-size: 12px;
	background: #fff;
	

    font-weight: normal;
    font-weight: bold;

    margin: 15px;
    padding: 0px 0px 0px 0px;

	width:  480px;
    height: 300px;
	border-collapse: collapse;

	text-align: left;
    vertical-align: middle;

    overflow: auto;      /* 預設會自動使用捲軸 */
    overflow: visible;   /* 顯示的文字或圖片會直接超出範圍，不使用捲軸。*/
    overflow: hidden;    /* 自動隱藏超出的文字或圖片。*/
    overflow: scroll;    /* 自動產生捲軸。*/
    overflow: inherit;   /* 繼承自父元素的可見性*/

    border-style: dashed;
    border-style: dotted dashed solid double;
    border-style: dotted;
    border-style: double;
    border-style: groove;
    border-style: hidden;
    border-style: inset;
    border-style: none;
    border-style: outset;
    border-style: ridge;
    border-style: solid;

    cursor: crosshair;     /*十字線型*/
    cursor: cell;          /*十字小方格 Firefox, Opera*/
    cursor: move;          /*十字箭頭(移動)*/
    cursor: all-scroll;    /*四方捲動*/
    cursor: n-resize;      /*箭頭朝上*/
    cursor: s-resize;      /*箭頭朝下*/
    cursor: e-resize;      /*箭頭朝右*/
    cursor: w-resize;      /*箭頭朝左*/
    cursor: nw-resize;     /*箭頭左上*/
    cursor: sw-resize;     /*箭頭左下*/
    cursor: se-resize;     /*箭頭朝右上*/
    cursor: ne-resize;     /*箭頭朝右下*/
    cursor: col-resize;    /*改變直行數*/
    cursor: row-resize;    /*改變橫欄數*/
    cursor: text;          /*I 輸入文字符號*/
    cursor: vertical-text; /*垂直文字*/
    cursor: help;          /*協助加一問號*/
    cursor: wait;          /*等待中；漏斗*/
    cursor: progress;      /*進行中；作業中*/
    cursor: pointer;       /*手型，表示超連結*/
    cursor: not-allowed;   /*無法使用*/
    cursor: context-menu;  /*選單 Opera*/

}
&lt;/style&gt;
`)



chkData(`
##### (data_html.js) Form 表單 #####
&lt;!-- file: mainCode_HTML_ --&gt;
&lt;form action=&quot;test.php&quot; method=&quot;post&quot; target=&quot;my_iframe&quot;&gt;

    姓名：&lt;input type=&quot;text&quot; name=&quot;UserName&quot;&gt;   &lt;br&gt;
    內容：&lt;textarea name=&quot;Content&quot;&gt;&lt;/textarea&gt;  &lt;br&gt;

    &lt;!-- Checkboxes --&gt;
    &lt;input type=&quot;checkbox&quot; checked=&quot;checked&quot;&gt; &lt;label&gt;Milk  &lt;/label&gt;           &lt;br&gt;    
    &lt;input type=&quot;checkbox&quot;&gt;                   &lt;label&gt;Sugar &lt;/label&gt;           &lt;br&gt;
    &lt;input type=&quot;checkbox&quot; disabled&gt;          &lt;label&gt;Lemon (Disabled)&lt;/label&gt; &lt;br&gt;
    

    &lt;!-- radio --&gt;
    &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot; checked&gt;  &lt;label&gt;Male&lt;/label&gt;
    &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;female&quot;&gt;        &lt;label&gt;Female&lt;/label&gt;
    &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;&quot; disabled&gt;     &lt;label&gt;Don't know (Disabled)&lt;/label&gt; 

    &lt;br&gt;
    &lt;input type=&quot;submit&quot; value=&quot;送出表單&quot;&gt;

&lt;/form&gt;

&lt;!-- 隱藏的 iframe --&gt;
&lt;iframe name=&quot;my_iframe&quot; src=&quot;test2.php&quot; style='display:none;' scrolling='no' frameborder=0 &gt;&lt;/iframe&gt;
`)




chkData(`
##### (data_html.js) 表格合併 #####
&lt;!-- file: mainCode_HTML_ --&gt;
&lt;table&gt;
	&lt;tbody&gt;
		&lt;tr&gt;
			&lt;td colspan=&quot;2&quot;&gt;水平合併&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;&nbsp;&lt;/td&gt;
			&lt;td&gt;&nbsp;&lt;/td&gt;
		&lt;/tr&gt;
	&lt;/tbody&gt;
&lt;/table&gt;

&lt;table&gt;
	&lt;tbody&gt;
		&lt;tr&gt;
			&lt;td rowspan=&quot;2&quot;&gt;垂直合併&lt;/td&gt;
			&lt;td&gt;&nbsp;&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;&nbsp;&lt;/td&gt;
		&lt;/tr&gt;
	&lt;/tbody&gt;
&lt;/table&gt;
`)


chkData(`
##### (data_html.js) CSS 畫面滾動 position 定位 #####
&lt;!-- HTML CSS 畫面滾動 position 定位 --&gt;
&lt;!-- file: mainCode_HTML_ --&gt;

&lt;div id=&quot;fiexd-header&quot;&gt;
    &lt;h1&gt;test&lt;/h1&gt;
&lt;/div&gt;
&lt;style&gt;
#fiexd-header{
  position:fixed;
  top:  10;
  left: 10;
  z-index:100;
  background:#66CCCC;
  color:#FFFFFF;
  border-top:2px solid #336699;
  border-bottom:2px solid #336699;
  width:100%;

  /* CSS Hack：寫一些讓某種瀏覽器看得懂、某種瀏覽器看不懂的 CSS 語法 */
  _position:absolute;  /* position fixed for IE6 */
  _top:expression(documentElement.scrollTop+&quot;px&quot;);
}

&lt;/style&gt;
`)


chkData(`
##### (data_html.js) 各種瀏覽器 CSS #####
&lt;!-- HTML 各種瀏覽器 CSS --&gt;
&lt;!-- file: mainCode_HTML_ --&gt;

&lt;style type=&quot;text/css&quot;&gt; 
/* Chrome 29+	 */
@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
    #css-test
    {
        color:blue;
    }
}

/* IE 10 and above */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    #css-test
    {
        color:blue;
    }
}

/* IE 11 (and above..) */
_:-ms-fullscreen, :root 
#css-test
{
    color:blue;
}

/* Firefox */
@supports (-moz-appearance:none) {
    #css-test
    {
        color:blue;
    }
}
&lt;/style&gt;

&lt;font id=&quot;css-test&quot;&gt;1234&lt;/font&gt;
`)
