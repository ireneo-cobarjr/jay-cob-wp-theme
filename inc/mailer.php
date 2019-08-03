<?php
/**
 * Jay-cob WP Theme SMTP Mail Option
 *
 * @link https://jay-cob.com
 *
 * @package Jay-cob Theme
 * @since 0.0.1
 */

$jcWPMailStatus = get_option('jcWP_mail_smtp_status');

if ($jcWPMailStatus === 'active') {
	add_action('phpmailer_init', 'jcWPMail');
}

function jcWPMail($phpmailer) {
	$host = get_option('jcWP_mail_smtp_host_name');
	$port = get_option('jcWP_mail_smtp_port_number');
	$name = get_option('jcWP_mail_smtp_username');
	$pass = get_option('jcWP_mail_smtp_password');
	$encr = get_option('jcWP_mail_smtp_encryption');

	$phpmailer->isSMTP();
	$phpmailer->Host = $host;
	$phpmailer->SMTPAuth = true;
	$phpmailer->Port = $port;
	$phpmailer->Username = $name;
	$phpmailer->Password = $pass;
	$phpmailer->SMTPSecure = $encr;
}