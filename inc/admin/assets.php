<?php 
/**
 * Jay-cob WP Theme CSS and JS files definitions for admin pages
 *
 * @link https://jay-cob.com
 *
 * @package Jay-cob Theme
 * @since 0.0.1
 */


function jcWP_theme_load_admin_assets() {

	wp_enqueue_style("jcWP_ADMIN_CSS_FILE", get_template_directory_uri() . '/inc/admin/css/admin.css', array(), wp_get_theme()->get( "Version"));
	wp_enqueue_script("jcWP_ADMIN_JS_FILE", get_template_directory_uri() . '/inc/admin/js/admin.js', array(), wp_get_theme()->get( "Version" ), true);
}

add_action( "admin_enqueue_scripts", "jcWP_theme_load_admin_assets" );