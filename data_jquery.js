
// chkData(`
// ##### (data_jquery.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_jquery.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_jquery.js) 主旨放這裡 #####
// 內容放這裡
// `)


chkData(`
##### (data_jquery.js) table tr td add #####
表格欄位資料增加
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script>
<div id=aa></div>
<table id="mytable" border=1>
    <tbody>
        <tr>
            <td>Jack</td><td>18</td>
        </tr>
        <tr>
            <td>Eason</td><td>21</td>
        </tr>
        <tr>
            <td>Mary</td><td>19</td>
        </tr>
    </tbody>
</table>

<script>
$("#aa").html("1234")

// cell 新增資料
var data1 = "<td>1234</td>"
var data2 = "<td>5678</td>"
var data3 = "<td>abcd</td>"
$("#mytable").children().children().append(data1)
$("#mytable").children().children().append(data2)
$("#mytable").children().children().append(data3)

// row 新增資料
var data = "<tr><td>111</td><td>222</td></tr>"
$("#mytable").children().append(data)
$("#mytable").children().append(data)
$("#mytable").children().append(data)
$("#mytable").children().append(data)

// 某一欄變更資料
$("#mytable").children().children()[1].children[1].innerHTML = "H!";
</script>
`)



