#!/usr/bin/perl

## 讀取目錄路徑
my ($enterStr);
foreach $enterStr (@ARGV){ push @key , $enterStr; }
$path = shift(@key);chomp($path);


## 找到使用者目錄
@Users = `dir $path /b`;
while(@Users)
	{
		$aduser = shift(@Users);
		chomp($aduser);

		if( -d "$path\\$aduser")
			{
				if( $aduser =~ /[A-Z]/ or $aduser =~ /[a-z]/  )
					{
						&toSearchFile($path,$aduser);
					}
			}
	}

sub toSearchFile()
	{
		my $path   = $_[0];
		my $aduser = $_[1];

		my @Files = `dir $path\\$aduser\\*.pq.* /b 2>NUL`;

		$totalFiles = $#Files + 1;
		print "Name\\$aduser	Total: $totalFiles files\n";

		while(@Files)
			{
				$filename = shift(@Files);
				chomp($filename);

				$newPath = substr($filename,0,6);

				if( ! -d "$path\\$aduser\\$newPath")
					{
						&runCmd("MD $path\\$aduser\\$newPath > NUL");
					}

				if( -e "$path\\$aduser\\$filename" and  ! -e "$path\\$aduser\\$newPath\\$filename" )
					{
						&runCmd("MOVE /y $path\\$aduser\\$filename $path\\$aduser\\$newPath > NUL");
					}

				#&runCmd("IF NOT EXIST $path\\$aduser\\$newPath MD $path\\$aduser\\$newPath > NUL");
				#&runCmd("MOVE /y $path\\$aduser\\$filename $path\\$aduser\\$newPath > NUL");
			}

		#system("pause");
	}


sub runCmd()
	{
		my $cmd = $_[0];
		#print "$cmd\n";
		system("$cmd");
	}
