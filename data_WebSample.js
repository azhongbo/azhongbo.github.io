
// chkData(`
// ##### (data_WebSample.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_WebSample.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_WebSample.js) 主旨放這裡 #####
// 內容放這裡
// `)





chkData(`
##### (data_WebSample.js) 表格輸入範例 #####

&lt;script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.js"&gt;&lt;/script&gt;
&lt;?php
$mydb = new PDO("sqlite:mydb.sqlite");
function createData()
{
    global $mydb;
    $sql = "DROP TABLE IF EXISTS main.chgData;";
    $qry = $mydb-&gt;prepare($sql);
    $qry-&gt;execute();
    
    $sql = "
    CREATE TABLE IF NOT EXISTS main.chgData ( 
        id     INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , 
        name VARCHAR,  age   VARCHAR,  sex   VARCHAR )";
    $qry = $mydb-&gt;prepare($sql);
    $qry-&gt;execute();
    
    $sql = "INSERT INTO main.chgData VALUES 
    (NULL,'Ryan','28','M'),
    (NULL,'Alex','32','M'),
    (NULL,'Anita','19','F'); ";
    $qry = $mydb-&gt;prepare($sql);
    $qry-&gt;execute();
}

function selectData()
{
    global $mydb;
    $sql = "SELECT * FROM main.chgData WHERE 1";
    $qry = $mydb-&gt;prepare($sql);
    $qry-&gt;execute();
    while($row = $qry-&gt;fetch(PDO::FETCH_ASSOC))
        {
            $id    = $row['id'];
            $name  = $row['name'];
            $age   = $row['age'];
            $sex   = $row['sex'];
    
            $tab = $tab . "
            &lt;tr&gt;
                &lt;td&gt;&lt;input id=name$id type=text value='$name' &gt;&lt;/td&gt;
                &lt;td&gt;&lt;input id=age$id type=text value='$age'   &gt;&lt;/td&gt;
                &lt;td&gt;&lt;input id=sex$id type=text value='$sex'   &gt;&lt;/td&gt;
            &lt;/tr&gt;        
            ";
        }
    return $tab;
}
// createData();

?&gt;

&lt;table id=myTab border=0&gt;
    &lt;?php
    print selectData();
    ?&gt;
&lt;/table&gt;
&lt;hr&gt;
&lt;input id=tmpBox1 style='width:95%;' type=text value=tmpBox1 title=tmpBox1&gt; &lt;br&gt;
&lt;input id=tmpBox2 style='width:95%;' type=text value=tmpBox2 title=tmpBox2&gt; &lt;br&gt;

&lt;script&gt;
var IdBox = [];
$('#myTab').click(function(){ logID() })
// $('#myTab').on('keydown', function(e){    if(e.keyCode == '9'){ logID(); }   });
$('#myTab').on('keyup', function(){  logID(); })

function logID()
{
    // focusID = $(':focus').attr('id'); //取得 focus 定位點的 id
    // focusValue = $(':focus').val();   //取得 focus 定位點的 值
    currentID = $(':focus').attr('id');

    if( currentID != null )
    {
        $('#tmpBox2').val( currentID )
        IdBox.push( currentID )
        IdBox = IdBox.filter( onlyUnique ); 
        $('#tmpBox1').val( IdBox )
    }
}

// array 移除重複
function onlyUnique(value, index, self) { return self.indexOf(value) === index; }
&lt;/script&gt;
`)

