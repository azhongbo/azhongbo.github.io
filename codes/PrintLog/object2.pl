#!/usr/bin/perl

## 讀取目錄路徑
my ($enterStr);
foreach $enterStr (@ARGV){ push @key , $enterStr; }
$path = shift(@key);chomp($path);



for($i=180;$i<=600;$i++)
	{

		$myTime = time() - $i * 24 * 3600;
		($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime($myTime);
		$mon+=1;
		$year=$year + 1900;
		$min  = '0'.$min  if length($min)  < 2;
		$sec  = '0'.$sec  if length($sec)  < 2;
		$mon  = '0'.$mon  if length($mon)  < 2;
		$mday = '0'.$mday if length($mday) < 2;
		$hour = '0'.$hour if length($hour) < 2;
		$year = '0'.$year if length($year) < 2;

		push @mons, "$year$mon";
	}

@mons = do { my %seen; grep { !$seen{$_}++ } @mons };



while(@mons)
	{
		$mon = shift(@mons);
		#print "$mon\n";

	}