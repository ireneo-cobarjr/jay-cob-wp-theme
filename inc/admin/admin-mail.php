<?php
/**
 * Jay-cob WP Theme Admin Page Mail Section
 *
 * @link https://jay-cob.com
 *
 * @package Jay-cob Theme
 * @since 0.0.1
 *
 * This Sets SMTP for sending E-mails.
 */

function jcWP_admin_mail_page() {
	add_menu_page('Site Mail Options', 'Mail', 'manage_options', 'jcWP_mail', 'jcWP_admin_mail_options', 'dashicons-email-alt2', 85);
	add_submenu_page('jcWP_mail', 'Site Mail Options', 'General', 'manage_options', 'jcWP_mail', 'jcWP_admin_mail_options');

	add_action('admin_init', 'jcWP_mail_settings');
}

add_action('admin_menu', 'jcWP_admin_mail_page');

//hook options to wordpress
function jcWP_mail_settings() {
	//main section
	add_settings_section('jcWP-mail-smtp', 'SMTP Set-Up','jcWP_mail_smtp', 'jcWP_mail');

	//activate
	register_setting('jcWP-mail-option', 'jcWP_mail_smtp_status');
	add_settings_field('smtp_status', 'Activate', 'jcWP_cb_smtp_status', 'jcWP_mail', 'jcWP-mail-smtp');

	//send to address
	register_setting('jcWP-mail-option', 'jcWP_mail_smtp_send_to');
	add_settings_field('smtp_send_to', 'Send To', 'jcWP_cb_smtp_send_to', 'jcWP_mail', 'jcWP-mail-smtp');

	//host name
	register_setting('jcWP-mail-option', 'jcWP_mail_smtp_host_name');
	add_settings_field('smtp_host_name', 'Host Name', 'jcWP_cb_smtp_host_name', 'jcWP_mail', 'jcWP-mail-smtp');

	//encryption
	register_setting('jcWP-mail-option', 'jcWP_mail_smtp_encryption');
	add_settings_field('smtp_host_encryption', 'Encryption', 'jcWP_cb_smtp_encryption', 'jcWP_mail', 'jcWP-mail-smtp');

	//port number
	register_setting('jcWP-mail-option', 'jcWP_mail_smtp_port_number');
	add_settings_field('smtp_port_number', 'Port Number', 'jcWP_cb_smtp_port_number', 'jcWP_mail', 'jcWP-mail-smtp');

	//username
	register_setting('jcWP-mail-option', 'jcWP_mail_smtp_username');
	add_settings_field('smtp_username', 'Username', 'jcWP_cb_smtp_username', 'jcWP_mail', 'jcWP-mail-smtp');

	//password
	register_setting('jcWP-mail-option', 'jcWP_mail_smtp_password');
	add_settings_field('smtp_password', 'Password', 'jcWP_cb_smtp_password', 'jcWP_mail', 'jcWP-mail-smtp');
}

//main section
function jcWP_mail_smtp() {
	echo 'Set-Up SMTP for Site E-mail capability.';
	echo '<p>All outgoing e-mails from your website will be sent from'." ".get_bloginfo("admin_email").'. This is based on the value set at Settings > General > Email Address.</p>';
}

///////////////////////////////////
//field generation
function jcWP_cb_smtp_status() {
	$status = esc_attr(get_option('jcWP_mail_smtp_status'));
	$status_checkbox = "";

	if ($status !== 'active') {
		$status_checkbox = "<input type='checkbox' name='jcWP_mail_smtp_status' id='smtp-status' value='active'/>";
	} else {
		$status_checkbox = "<input type='checkbox' name='jcWP_mail_smtp_status' id='smtp-status' value='active' checked='checked'/>";
	}

	echo "<label id='mail-status'  for='smtp-status'>".$status_checkbox."Activating this will enable this SMTP configuration to be used on sending e-mails from this website.</label>";
}

function jcWP_cb_smtp_send_to() {
	$send_to = esc_attr(get_option('jcWP_mail_smtp_send_to'));
	echo "<input type='text' name='jcWP_mail_smtp_send_to' placeholder='incoming@email.com' value='".$send_to."'/>";
	echo "<p class='jcWP-admin-note'>This is the e-mail address where incoming messages from your website will go and this cant be the same as"." ".get_bloginfo("admin_email")."</p>";
}

function jcWP_cb_smtp_host_name() {
	$host = esc_attr(get_option('jcWP_mail_smtp_host_name'));
	echo "<input type='text' name='jcWP_mail_smtp_host_name' placeholder='domain.com' value='".$host."'/>";
}

function jcWP_cb_smtp_encryption() {
	$encr = esc_attr(get_option('jcWP_mail_smtp_encryption'));
	$encr_select['none'] = "";
	$encr_select['ssl'] = "";
	$encr_select['tsl'] = "";
	if ($encr == 'none') {
		$encr_select['none'] = "checked='checked'";
	} else if ($encr == 'ssl') {
		$encr_select['ssl'] = "checked='checked'";
	} else {
		$encr_select['tsl'] = "checked='checked'";
	}
	echo "<label for='mail_smtp_encryption_none'><input type='radio' id='mail_smtp_encryption_none' name='jcWP_mail_smtp_encryption' value='none'".$encr_select['none']."/>None</label>";
	echo "<label for='mail_smtp_encryption_ssl'><input type='radio' id='mail_smtp_encryption_ssl' name='jcWP_mail_smtp_encryption' value='ssl'".$encr_select['ssl']."/>SSL</label>";
	echo "<label for='mail_smtp_encryption_tsl'><input type='radio' id='mail_smtp_encryption_tsl' name='jcWP_mail_smtp_encryption' value='tsl'".$encr_select['tsl']."/>TSL</label>";
}

function jcWP_cb_smtp_port_number() {
	$port = esc_attr(get_option('jcWP_mail_smtp_port_number'));
	echo "<input type='number' id='mail-port' name='jcWP_mail_smtp_port_number' placeholder='8080' value='".$port."'/>";
}

function jcWP_cb_smtp_username() {
	$name = esc_attr(get_option('jcWP_mail_smtp_username'));
	echo "<input type='text' name='jcWP_mail_smtp_username' placeholder='john@domain.com' value='".$name."'/>";
}

function jcWP_cb_smtp_password() {
	$pass = esc_attr(get_option('jcWP_mail_smtp_password'));
	echo "<input type='password' name='jcWP_mail_smtp_password' placeholder='*****' value='".$pass."'/>";
}

///////////////////////////////////

//admin mail option page generation
function jcWP_admin_mail_options() {
	require_once( get_template_directory() . '/inc/admin/templates/admin-mail-template.php' );
}