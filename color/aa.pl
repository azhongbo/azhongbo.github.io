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

		($colorName,$colorCode,$c3,$c4) = split( ' ' , $a );

		if( $colorName =~ /[a-z]/ ){ $totalColors = $totalColors + 1; }


		### FOR CSS
		$all_color = $all_color . ".$colorName {        color: $colorCode;  border: 2px $colorCode solid;  }\n";
		$all_color = $all_color . ".$colorName:hover {  color: #fff;     background-color: $colorCode;  }\n";

		
		## FOR JAVASCRIPT Array
		$js_arr = $js_arr . "'$colorName',";

	}


## FOR JAVASCRIPT Array
## var colors = ['red','blue','green' ......    ]; 
$js_arr = "var colors = [" . substr( $js_arr , 0 , -1 ) . "]" ;



print &CSS($all_color)      . "\n\n"; 
print &JAVASCRIPT($js_arr)  . "\n\n"; 


print "Total $totalColors colors \n\n";











######################  SUB Func #####################################
sub CSS()

	{

		my $all_color = $_[0];

		my $css = '
			<style type="text/css">
			.btn {
				margin: 0px 2px;
				border-radius: 5px;
				text-decoration: none;
				padding: 7px 15px ;
				font-size: 14px;
				transition: .3s;
				-webkit-transition: .3s;
				-moz-transition: .3s;
				-o-transition: .3s;
				display: inline-block;
			}

			--ALL COLOR HERE--
			  
			.buttons 
			{
				padding-top: 30px;
				text-align: center;
			}
			</style>';

			
			$css =~ s/			//g;
			$css =~ s/--ALL COLOR HERE--/$all_color/g;

			return $css;
	}



sub JAVASCRIPT()
	{
		my $jscode = $_[0];

		$js = '
			<script language="JavaScript">
			--JS CODE HERE--
			<script>
			';


		$js =~ s/			//g;
		$js =~ s/--JS CODE HERE--/$jscode/g;

		return $js;
	}