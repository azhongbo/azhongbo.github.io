#!/usr/bin/perl
@dat = `cat color.txt`;

while(@dat)
	{
		$a = shift(@dat);
		chomp($a);

		$a =~ s/	/ /g;
		$a =~ s/	/ /g;
		$a =~ s/	/ /g;
		$a =~ s/	/ /g;
		$a =~ s/  / /g;
		$a =~ s/  / /g;
		$a =~ s/  / /g;
		$a =~ s/  / /g;
		$a =~ s/  / /g;
		$a =~ s/  / /g;
		$a =~ s/  / /g;
		$a =~ s/  / /g;

		$a =~ s/  / /g;
		$a =~ s/  / /g;

		($c1,$c2,$c3,$c4) = split( ' ' , $a );


$nnn = "
.$c1 {        color: $c2;  border: 2px $c2 solid;  }
.$c1:hover {  color: #fff;     background-color: $c2;  }
";


		print "$nnn\n";

	}