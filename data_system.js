// ### system ###

// chkData(`
// ##### (data_system.js) 主旨放這裡 #####
// 內容放這裡
// `)

// chkData(`
// ##### (data_system.js) 主旨放這裡 #####
// 內容放這裡
// `)

chkData(`
##### (data_system.js) https ssl 憑證 #####

## 產生憑證 ##
openssl req -x509 -new -nodes -sha256 -utf8 -days 3650 -newkey rsa:2048 -keyout cert.key -out cert.crt -config ssl.conf

## 基本設定檔 ssl.conf##
[req]
prompt = no
default_md = sha256
default_bits = 2048
distinguished_name = dn
x509_extensions = v3_req

[dn]
C = TW
ST = Taiwan
L = Taipei
O = MyCompanyName
OU = MIS Department
emailAddress = admin@mycompany.com
CN = test.mycompany.com

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = test.mycompany.com
IP.1 = 192.168.1.10
`)








