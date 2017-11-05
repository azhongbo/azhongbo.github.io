#!/usr/bin/perl

$myTime = time() + 0 * 24 * 3600;
($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime($myTime);
$mon+=1;
$year=$year + 1900;
$min  = '0'.$min  if length($min)  < 2;
$sec  = '0'.$sec  if length($sec)  < 2;
$mon  = '0'.$mon  if length($mon)  < 2;
$mday = '0'.$mday if length($mday) < 2;
$hour = '0'.$hour if length($hour) < 2;
$year = '0'.$year if length($year) < 2;



$ip = '192.168.5.104/24';

@data = `nbtscan $ip`;
system('clear');
$a = shift(@data);
$a = shift(@data);
$a = shift(@data);
$a = shift(@data);

print "\n";

while(@data)
    {
        $a = shift(@data);
        chomp($a);

        $a =~ s/  / /g;
        $a =~ s/  / /g;
        $a =~ s/  / /g;
        $a =~ s/  / /g;
        $a =~ s/  / /g;

        ($ip,$str1,$str2,$str3,$str4) = split( ' ' , $a );

        print "$ip $a\n";

    }







#$sql = "CREATE TABLE IF NOT EXISTS 'main'.'ryanliu' ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE ,  'h0' VARCHAR , 'h1' VARCHAR , 'h2' VARCHAR , 'h3' VARCHAR , 'h4' VARCHAR , 'h5' VARCHAR , 'h6' VARCHAR , 'h7' VARCHAR , 'h8' VARCHAR , 'h9' VARCHAR , 'h10' VARCHAR , 'h11' VARCHAR , 'h12' VARCHAR , 'h13' VARCHAR , 'h14' VARCHAR , 'h15' VARCHAR , 'h16' VARCHAR , 'h17' VARCHAR , 'h18' VARCHAR , 'h19' VARCHAR , 'h20' VARCHAR , 'h21' VARCHAR , 'h22' VARCHAR , 'h23' VARCHAR ); ";
#$cmd = `sqlite3 nbtscan-$year.$mon.$mday.sqlite "$sql"`;
