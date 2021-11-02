

chkData(`
##### (data_javascript.js) 隱藏指定物件 #####
###  JavaScript 隱藏指定物件 ####
&lt;script language="JavaScript" type="text/javascript"&gt;
function Hide(pid)
{
    if( document.getElementById(pid).style.display == "none" ){
        document.getElementById(pid).style.display = ""
    }
    else{
        document.getElementById(pid).style.display = "none"   }
}
&lt;/script&gt;
`)




chkData(`
##### (data_javascript.js) 動態高度/位置 #####
###  JavaScript 動態高度/位置 ####
&lt;script language="JavaScript" type="text/javascript"&gt;
/* ####### 動態高度 ########## */
dHeight()
function dHeight()
{
    setTimeout(function () {
        /** 左邊區塊浮動寬度 **/ 
        document.getElementById(id).style.width  = document.body.clientWidth - 500;
        /** 左邊區塊浮動高度 **/ 
        document.getElementById(id).style.height = 98 - ( 150 / document.body.clientHeight * 100 ) + '%'
        document.getElementById(id).style.height = document.body.clientHeight - 150 
        dHeight();
    }, 500);
}

/* ####### 動態位置 ########## */
dLocation()
function dLocation()
{
    document.getElementById(id).style.left = document.body.scrollLeft + document.body.clientWidth - 230
    document.getElementById(id).style.top  = document.body.scrollTop  + 50;
    setTimeout( "dLocation()" , 1000)
}
&lt;/script&gt;
`)



chkData(`
##### (data_javascript.js) 顯示滑鼠座標 #####
###  JavaScript 顯示滑鼠座標 ####
&lt;!-------JavaScript顯示滑鼠所在座標 START--------&gt;
&lt;script language="JavaScript1.2"&gt;
&lt;!--
var IE = document.all?true:false

if (!IE) document.captureEvents(Event.MOUSEMOVE)  // If NS -- that is, !IE -- then set up for mouse capture
document.onmousemove = getMouseXY; // Set-up to use getMouseXY function onMouseMove

var myLeft = 0  // Temporary variables to hold mouse x-y pos.s
var myTop = 0   // Temporary variables to hold mouse x-y pos.s

function getMouseXY(e)  // Main function to retrieve mouse x-y pos.s
{
	if (IE) 
	{
		// grab the x-y pos.s if browser is IE
		myLeft = event.clientX + document.body.scrollLeft
		myTop = event.clientY + document.body.scrollTop
	} 
	else 
	{
		// grab the x-y pos.s if browser is NS
		myLeft = e.pageX
		myTop = e.pageY
	}

	// catch possible negative values in NS4
	if ( myLeft &lt; 0 ){ myLeft = 0}
	if ( myTop  &lt; 0 ){ myTop  = 0}  
	
	// show the position values in the form named Show
	// in the text fields named MouseX and MouseY
	document.myForm.myTop.value  = myTop
	document.myForm.myLeft.value = myLeft
	return true
}
//--&gt;
&lt;/script&gt;

&lt;form name=myForm&gt;
Left: &lt;input type=text name=myLeft value=0&gt;
Top:  &lt;input type=text name=myTop  value=0&gt;
&lt;/form&gt;
`)






chkData(`
##### (data_javascript.js) 搜尋文件所有 id #####
###  JavaScript 搜尋文件所有 id ####
&lt;script language="JavaScript" type="text/javascript"&gt;
function bookingAllUser()
{
    for(i=1;i&lt;100;i++)
        {
            id = 'this' + i;
            if( document.getElementById(id) !== null ){
                    document.getElementById(id).innerHTML = 'test'; }
        }
}
&lt;/script&gt;
`)




chkData(`
##### (data_javascript.js) 偵測瀏覽器版本/修正CSS位置 #####
###  JavaScript 偵測瀏覽器版本 ####
&lt;script language="JavaScript" type="text/javascript"&gt;
function get_browser() 
{
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};         }   
    
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}         }   
    
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
}
var browser=get_browser();


// ########## Function 修正各個瀏覽器 CSS 座標位置 #############
if( browser.name == "MSIE" ){
    //document.getElementById("MenuButton").style.top  = "19px"
    //document.getElementById("MenuWide").style.width  = "90px" 
    //MenuButton
}
if( browser.name == "Chrome" ){
    //document.getElementById("MenuButton").style.top  = "19px"
    //document.getElementById("MenuWide").style.width  = "70px" 
}
if( browser.name == "Firefox" ){
    //document.getElementById("MenuButton").style.top  = "19px"
    //document.getElementById("MenuWide").style.width  = "17px" 
}
&lt;/script&gt;
`)




chkData(`
##### (data_javascript.js) 動態產生 DIV #####
###  JavaScript 動態產生 DIV ####
&lt;script&gt;
newPoint("id001","50","50","red","aaaa") 
function newPoint(id,top,left,color,StringData) 
{
    if( document.getElementById(id) != null ){
        var list=document.getElementById(id);
        list.parentNode.removeChild(list);
    }
    var x = document.createElement('div');
    //x.setAttribute("type", "text"); 
    x.setAttribute("id", id);
    document.body.appendChild(x);
    x.style.position = "absolute";
    x.style.zIndex = 100
    x.style.border = 1
    x.style.width = 50
    x.style.fontSize = 20
    x.style.color = color
    x.innerHTML = StringData

    x.style.top  = ( top - 6  ).toString()
    x.style.left = ( left - 6 ).toString()
}
&lt;/script&gt;
`)



chkData(`
##### (data_javascript.js) cookie #####
###  JavaScript PHP cookie ####
&lt;?php
setcookie( "user" , "data" , time()+3600);
print $_COOKIE['user'];
?&gt;

&lt;script language="JavaScript" type="text/javascript"&gt;
function setCookie( cname, cvalue, exdays ) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i &lt;ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
&lt;/script&gt;
`)



chkData(`
##### (data_javascript.js) Hight line 顏色標示 #####
###  JavaScript color Hight line 顏色標示 ####

&lt;script language="JavaScript" type="text/javascript"&gt;

ddColor(pid,'0000b3') //Hight line 藍色
// ddColor(pid,'ff3333') //Hight line 紅色

function ddColor(pid,color)
{
    setTimeout(function () {

        document.getElementById(pid).style.backgroundColor = color

        // 藍色
        if(color == '0000b3'){ ddColor(pid,'0000cc'); }
        if(color == '0000cc'){ ddColor(pid,'0000e6'); }
        if(color == '0000e6'){ ddColor(pid,'1a1aff'); }
        if(color == '1a1aff'){ ddColor(pid,'3333ff'); }
        if(color == '3333ff'){ ddColor(pid,'4d4dff'); }
        if(color == '4d4dff'){ ddColor(pid,'6666ff'); }
        if(color == '6666ff'){ ddColor(pid,'8080ff'); }
        if(color == '8080ff'){ ddColor(pid,'9999ff'); }
        if(color == '9999ff'){ ddColor(pid,'b3b3ff'); }
        if(color == 'b3b3ff'){ ddColor(pid,'ccccff'); }
        if(color == 'ccccff'){ ddColor(pid,'e6e6ff'); }
        if(color == 'e6e6ff'){ ddColor(pid,'ffffff'); }

        // 紅色
        // if(color == 'ff3333'){ ddColor(pid,'ff4d4d'); }
        // if(color == 'ff4d4d'){ ddColor(pid,'ff6666'); }
        // if(color == 'ff6666'){ ddColor(pid,'ff8080'); }
        // if(color == 'ff8080'){ ddColor(pid,'ff9999'); }
        // if(color == 'ff9999'){ ddColor(pid,'ffb3b3'); }
        // if(color == 'ffb3b3'){ ddColor(pid,'ffcccc'); }
        // if(color == 'ffcccc'){ ddColor(pid,'ffe6e6'); }
        // if(color == 'ffe6e6'){ ddColor(pid,'ffffff'); }

    }, 50);
}

&lt;/script&gt;
`)



chkData(`
##### (data_javascript.js) Ctrl+Enter  #####
###  JavaScript Ctrl+Enter ####
&lt;input id=aa type=text&gt;
&lt;textarea  onkeydown="keySend(event);" &gt;&lt;/textarea&gt;

&lt;script language="JavaScript" type="text/javascript"&gt;
function keySend(event)
{
    if (event.ctrlKey && event.keyCode == 13)
    {
        document.getElementById('aa').value = "okok"
    }
}
&lt;/script&gt;
`)



chkData(`
##### (data_javascript.js) jquery #####
###  JavaScript jquery ####
&lt;script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.js"&gt;&lt;/script&gt;

&lt;script type="text/javascript"&gt;
$(document).ready(function(){
    $("p").click(function(){      $(this).hide();      });
});
&lt;/script&gt;
    
&lt;p&gt;If you click on me, I will disappear.&lt;/p&gt;
&lt;input type=text id=aa value="123"&gt;

&lt;div id=bb&gt;456&lt;/div&gt;

&lt;input type=button id=cc value="ok"&gt;

&lt;script&gt;
$("#aa").val("aaaa")
$("#cc").click(function(){
    $("#bb").text("bbbb")
})
&lt;/script&gt;




`)
