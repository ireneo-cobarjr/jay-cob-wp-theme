<?php
/**
 * Jay-cob WP Theme Custom XHR Calls definition
 *
 * @link https://jay-cob.com
 *
 * @package Jay-cob Theme
 * @since 0.0.1
 */

// For getting data from Services sidebar
// action = get_client_service_request
add_action("wp_ajax_nopriv_get_client_service_request", "jcWP_get_client_service_request");
add_action("wp_ajax_get_client_service_request", "jcWP_get_client_service_request");

function jcWP_get_client_service_request() {
	$srvc = sanitize_text_field($_POST["srvc"]);
	$name = sanitize_text_field($_POST["name"]);
	$mail = sanitize_email($_POST["mail"]);
	$budg = sanitize_text_field($_POST["budg"]);
	$desc = sanitize_text_field($_POST["desc"]);

	$resp = array();

	//validate name:
	if(isset($name) === true && $name === '') {
	    
	        // It's empty
			$ename["error"]   = 1;
			$ename["message"] = "name is empty";
			$ename["data"]    = $name;
			$resp["name"] = $ename;
    }
    else {
    
        // It's not empty
    	if(preg_match("/[^a-z]/i", $name)) {
    		//name have invalid characters
			$ename["error"]   = 1;
			$ename["message"] = "name have invalid character(s)";
			$ename["data"]    = $name;
			$resp["name"] = $ename;
		}

		if(strlen($name) < 3) {
			//name length is invalid
			$ename["error"]   = 1;
			$ename["message"] = "name have invalid length";
			$ename["data"]    = $name;
			$resp["name"] = $ename;
		} 
    }

	//validate email:
	if(isset($mail) === true && $mail === '') {
	    
	        // It's empty
			$email["error"]   = 1;
			$email["message"] = "email is empty";
			$email["data"]    = $mail;
		$resp["mail"] = $email;
    }
    else {
    
        // It's not empty
    	if(!(is_email($mail))) {
    		//invalid email format
			$email["error"]   = 1;
			$email["message"] = "email is invalid";
			$email["data"]    = $mail;
			$resp["mail"] = $email;
		}
    }

	//validate budget:
	if(isset($budg) === true && $budg === '' && strlen($budg) > 1) {
	    
	        // It's empty
			$ebudg["error"]   = 1;
			$ebudg["message"] = "budget count is invalid";
			$ebudg["data"]    = $budg;
			$resp["budg"] = $ebudg; 
    }
    else {
    
        // It's not empty
    	if(preg_match("/[^0-9]/", $budg)) {
    		//budget have non-numeric characters
			$ebudg["error"]   = 1;
			$ebudg["message"] = "budget have non-numeric characters";
			$ebudg["data"]    = $budg;
			$resp["budg"] = $ebudg;
		}
    }


	//validate description/detail:
	if(isset($desc) === true && $desc === '' && strlen($desc) > 11) {
	    
	        // It's empty
			$edesc["error"]   = 1;
			$edesc["message"] = "Details is too short";
			$edesc["data"]    = $desc;
			$resp["desc"] =$edesc;
    }	

    $to = get_option("jcWP_mail_smtp_send_to");
    $subject = "Request to avail service";
    $message = "<h1 style='text-transform: capitalize'>Request to avail"." ". $srvc ."</h1>" . "<ul style='list-style-type: none;'>" . "<li style='text-transform: capitalize;font-size: 1rem'>Client Name:"." ". $name ."</li>" . "<li style='text-transform: capitalize;font-size: 1rem'>Client e-mail:"." ". $mail ."</li>" . "<li style='text-transform: capitalize;font-size: 1rem'>". "Budget is" . " " . "$" . $budg ."</li>" ."</ul>" . "<p style='font-size:1.2rem;min-height: 150px;border: 2px solid #00BCD4; border-radius: 7px; padding: .5em .4em; text-align: justify'>". $desc ."</p>";

    $headers[] = "From: ".get_bloginfo('name')."<".get_bloginfo('admin_email').">";
    $headers[] = "Reply-To: ".$name."<".$mail.">";
    $headers[] = "Content-Type: text/html; charset=iso-8859-1";

    $mail_sent_status = wp_mail($to, $subject, $message, $headers);

    if ($mail_sent_status) {
		$status["error"]   = 0;
		$status["message"] = "email sent";
		$status["data"]    = "service " . $srvc .";"." ". "name: " . $name . ";" ." ". "mail: " . $mail . ":" ." ". "budget: " . $budg . ";" ." ". "detail: " . $desc;
    } else {
		$status["error"]   = 1;
		$status["message"] = "email was not sent";
		$status["data"]    = "email sent status was"." ".$mail_sent_status;
    }

    $resp["status"] = $status;


	header('Content-Type: application/json');
	$ret = json_encode($resp);
	echo $ret;

	die();
}
