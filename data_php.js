
// chkData(`
// ##### (data_php.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_php.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_php.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_php.js) 主旨放這裡 #####
// 內容放這裡
// `)





chkData(`
##### (data_php.js) multi level associative array #####
$languages = array();
  
$languages['Python'] = array(
    "first_release" => "1991", 
    "latest_release" => "3.8.0", 
    "designed_by" => "Guido van Rossum",
    "description" => array(
        "extension" => ".py", 
        "typing_discipline" => "Duck, dynamic, gradual",
        "license" => "Python Software Foundation License"
    )
);
  
print_r($languages['Python']['description']);
echo $languages['Python']['latest_release'];
`)


chkData(`
##### (data_php.js) 執行外部命令 #####

$data = shell_exec("chmod a+rwx $filename");
`)



chkData(`
##### (data_php.js) Err 顯示設定 #####

error_reporting( E_ALL );
ini_set( "display_errors", 1 );
`)




chkData(`
##### (data_php.js) 寫入檔案 #####

function write_file($filename,$txt)
	{
		$myfile = fopen("$filename", "w") or die("Unable to open file!");
		fwrite($myfile, $txt);
		fclose($myfile);
	}
`)





chkData(`
##### (data_php.js) 分割字串 #####

list($a,$b,$c) = explode( ',' , $string );
`)



chkData(`
##### (data_php.js) POST 範例 #####

$url = "http://localhost/test/aa.php";

$data = array(
    'UserName' => 'Ryan' , 
    'ext'      => '1075'
);

$options = array(   // use key 'http' even if you send the request to https://...
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);

$context  = stream_context_create($options);
$result   = file_get_contents($url, false, $context);
if ($result === FALSE) { /* Handle error */ }

print "$result";
`)




chkData(`
##### (data_php.js) 讀取 https #####

$url = "https://username:password@192.168.1.100/admin/";
$arrContextOptions=array(
    "ssl"=>array(
          "verify_peer"=>false,
          "verify_peer_name"=>false,
      ),
  );  

$response = file_get_contents($url, false, stream_context_create($arrContextOptions));
print "$response";
`)



chkData(`
##### (data_php.js) json 傳值後轉換 #####

$arr = json_decode(  $_POST['data']  );

while($arr)
{
    $array = object_array( array_shift($arr) );
    print $array['name'] . "\n";
    print $array['dep'] . "\n";
}


function object_array($array) {  
    if(is_object($array)) {  
        $array = (array)$array;  
     } if(is_array($array)) {  
         foreach($array as $key=>$value) {  
             $array[$key] = object_array($value);  
             }  
     }  
     return $array;  
}
`)



chkData(`
##### (data_php.js) 搜尋比對字串 #####

if(strpos(  '今天天氣好' , '天氣' ) !== false )
{ 
    echo '包含'; 
}else
{
    echo '不包含'; 
}
`)

