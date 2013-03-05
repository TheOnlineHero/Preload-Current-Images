<?php
/*
Plugin Name: Preload Current Images
Plugin URI: http://wordpress.org/extend/plugins/preload-current-images/
Description: Preloads all images on the current page, making the images render faster. Works especially well for slides.

Installation:

1) Install WordPress 3.5.2 or higher

2) Download the following file:

http://downloads.wordpress.org/plugin/preload-current-images.zip

3) Login to WordPress admin, click on Plugins / Add New / Upload, then upload the zip file you just downloaded.

4) Activate the plugin.

Version: 1.0
Author: TheOnlineHero - Tom Skroza
License: GPL2
*/

add_action('wp_head', 'add_preload_current_images_js');
function add_preload_current_images_js() { 
  wp_enqueue_script('jquery');
  wp_register_script( 'my-jquery-preload-images', plugins_url("/js/application.js", __FILE__) );
  wp_enqueue_script('my-jquery-preload-images');
}

?>