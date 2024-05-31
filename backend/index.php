<?php
	// echo 'Hello World 22!';
	// mail('anurag.131092@gmail.com','An email to two people', 'Message goes here.');

	// $to = "anurag.131092@gmail.com, question@babyprogress.fr";
	// $subject = "First Baby Progress Email";
	// $txt = "This is the first Email";
	// $headers = "From: webmaster@babyprog.fr" . "\r\n" .
	// "CC: anurag.hotncool_1@live.com";

	// mail($to,$subject,$txt,$headers);

    $to = "anurag.131092@gmail.com";
    $subject = "First Baby Progress Email";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers.= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers.= "From: Baby Progress Admin <webmaster@babyprog.fr>";
    $txt = "Hello, Baby Progress Team<br/>";
    $txt.= "You have received a new contact information with the following details:<br/>";
    // $txt.= "<b>Qualification:</b> ".$data["qual"]["value"]."<br/>"; 
    $txt.= "<b>Qualification:</b> "."Not qualified"."<br/>"; 

	mail($to,$subject,$txt,$headers);
?>
