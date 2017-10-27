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
        document.getElementById('info').innerHTML = tempX + "," + tempY
        
		return true
	}
// ########## Function END  ######################
</script>


<style>
#map
{   position:  absolute;
    top:       0px;
    left:      0px;
    z-index:   10;
}
#info
{   position:  absolute;
    top:       0px;
    left:      0px;
    z-index:   20;
}

</style>
<img id=map src=maps/T1-RF.png width=900px;>
<div id=info>aaa</div>


