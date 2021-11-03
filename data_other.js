
// chkData(`
// ##### (data_other.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_other.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_other.js) 主旨放這裡 #####
// 內容放這裡
// `)



chkData(`
##### (data_other.js) Perl 命令列傳入 #####
###  Perl 命令列傳入 ####
my ($str);
foreach $str (@ARGV){ push @key , $str; }
`)


chkData(`
##### (data_other.js) Except 自動 telnet #####

#!/usr/bin/expect -f
set timeout 3
set ip [lindex $argv 0]
spawn telnet $ip
expect "Password: "
send "password\\\\r"
expect '>'
send "show arp\\\\r"
send "                                                                          \\\\r"
send "                                                                          \\\\r"
send "                                                                          \\\\r"
send "exit\\\\r"
expect eof
`)



