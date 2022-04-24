<?php

// adding the CSS and JS files


function my_filter_head() {

    remove_action('wp_head', '_admin_bar_bump_cb');
}

add_action('get_header', 'my_filter_head');


add_filter( 'wpcf7_autop_or_not', '__return_false' );



function load_stylesheets() {
	
	wp_register_style('style', get_template_directory_uri().'/style.css', array(), false, 'all');
	wp_enqueue_style('style');
	
	wp_register_style('fonts', get_template_directory_uri().'/assets/css/fonts.css', array(), false, 'all');
	wp_enqueue_style('fonts');

	wp_register_style('responsive', get_template_directory_uri().'/assets/css/responsive.css', array(), false, 'all');
	wp_enqueue_style('responsive');

	wp_register_style('fancybox', get_template_directory_uri().'/assets/css/jquery.fancybox.min.css', array(), false, 'all');
	wp_enqueue_style('fancybox');
		
	wp_enqueue_style( 'font-awesome-free', '//use.fontawesome.com/releases/v5.7.2/css/all.css' );
		
}
add_action('wp_enqueue_scripts', 'load_stylesheets');


function loadjs() {
	
	wp_register_script('main', get_stylesheet_directory_uri().'/assets/js/main.js', array('jquery'), true);
	wp_enqueue_script('main');
	
	wp_register_script('scrolltofixed', get_stylesheet_directory_uri().'/assets/js/jquery-scrolltofixed.js', array('jquery'), true);
	wp_enqueue_script('scrolltofixed');
	
	wp_register_script('flexslider', get_stylesheet_directory_uri().'/assets/js/jquery.flexslider-min.js', array('jquery'), true);
	wp_enqueue_script('flexslider');

}
add_action('wp_enqueue_scripts', 'loadjs');



function optimist_init() {
	add_theme_support('post-thumbnails');
	add_theme_support('title-tag');
	add_theme_support('menus');
	
}
add_action('after_setup_theme', 'optimist_init');


//Optimist Post types


//Home Page Banner Post type
function banner() {
	register_post_type('Banner',
	  array(
	    'rewrite' => array('slug' => 'banner'),
		'labels' => array(
		  'name' => 'Banner',
		  'singular_name' => 'Banner',
		  'add_new_item' => 'Add Banner',
		  'edit_item' => 'Edit Banner'
		),
		'menu-icon' => 'dashicons-clipboard',
		'public' => true,
		'has_archive' => true,
		'supports' => array(
		  'title', 'thumbnail', 'editor', 'excerpt', 'revisions'
		)
	));
	
}
add_action('init', 'banner');


//Services Post type
function services() {
	register_post_type('Services',
	  array(
	    'rewrite' => array('slug' => 'services'),
		'labels' => array(
		  'name' => 'Services',
		  'singular_name' => 'service',
		  'add_new_item' => 'Add Service',
		  'edit_item' => 'Edit Service'
		),
		'menu-icon' => 'dashicons-clipboard',
		'public' => true,
		'has_archive' => true,
		'supports' => array(
		  'title', 'thumbnail', 'editor', 'excerpt', 'revisions'
		)
	));
	
}
add_action('init', 'services');












