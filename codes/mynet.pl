#!/usr/bin/perl

@device = `nmcli device`;


while(@device)
	{
		$a = pop(@device);
		chomp($a);
		if( $a =~ /connect/ )
			{
				@nn = split( " " , $a );
				$dev = @nn[0];
				&runCmd("nmcli device disconnect $dev");
				&runCmd("nmcli device connect $dev");
			}
	}



$ifconfig = `ifconfig`;

if( $ifconfig =~ /192.168.42./ ){ $gw = "192.168.42.129"; }
else{                             $gw = "10.12.24.254"  ; }


open(ww,'>/tmp/resolv.conf');
print ww 'nameserver 192.168.21.22\n';
print ww 'search winfoundry.com\n';
close(ww);

&runCmd("route del -net default");

&runCmd("route add -net default gw $gw");
&runCmd("route add -net 192.168.0.0/16 gw 10.12.24.254");
&runCmd("route add -net 10.24.1.0/24   gw 192.168.42.129");
&runCmd("route add -net 10.0.0.0/8     gw 10.12.24.254");
&runCmd("route add -net 172.17.0.0/16  gw 10.12.24.254");
&runCmd("cp /tmp/resolv.conf /run/resolvconf/resolv.conf");

sub runCmd()
	{
		$cmd = $_[0];
		print "sudo $cmd\n\n";
		system("sudo $cmd");
	}


