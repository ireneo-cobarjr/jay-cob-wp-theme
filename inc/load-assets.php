<?php 
/**
 * Jay-cob WP Theme CSS and JS files definitions
 *
 * @link https://jay-cob.com
 *
 * @package Jay-cob Theme
 * @since 0.0.1
 */


function jcWP_theme_load_assets() {

/////////////////////////////////////////////////
// ENVARS
	$jcWP_CSS_MAIN    = get_template_directory_uri() . "/assets/css/jcob.min.css";
	$jcWP_JS_MAIN     = get_template_directory_uri() . "/assets/js/jcob.min.js";
	$jcWP_GOOGLE_FONT = "https://fonts.googleapis.com/css?family=Jaldi:700|Montserrat&display=swap";
	$jcWP_FONT_ICON   = "https://kit.fontawesome.com/c16f7ffde4.js";
/////////////////////////////////////////////////

	wp_enqueue_style("jcWP_CSS_FILE", $jcWP_CSS_MAIN, array(), wp_get_theme()->get( "Version"));
	wp_enqueue_style("jcWP-google-fonts", $jcWP_GOOGLE_FONT, false);
	wp_enqueue_script("jcWP_JS_FILE", $jcWP_JS_MAIN, array(), wp_get_theme()->get( "Version" ), true);
	wp_enqueue_script("jcWP-font-icons", $jcWP_FONT_ICON, array(), wp_get_theme()->get( "Version" ), false);
}

add_action( "wp_enqueue_scripts", "jcWP_theme_load_assets" );
