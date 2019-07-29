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
	$name = wp_strip_all_tags($_POST["name"]);
	$mail = wp_strip_all_tags($_POST["mail"]);
	$budg = wp_strip_all_tags($_POST["budg"]);
	$desc = wp_strip_all_tags($_POST["desc"]);

	echo $name . "," . $mail . "," . $budg . "," . $desc;

	die();
}
