<?php
/**
 * Theme setup.
 *
 * @package AmirMotefaker
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action(
    'after_setup_theme',
    static function (): void {
        load_theme_textdomain( 'amirmotefaker', get_template_directory() . '/languages' );
        add_theme_support( 'wp-block-styles' );
        add_theme_support( 'responsive-embeds' );
        add_theme_support( 'editor-styles' );
        add_editor_style( 'assets/css/base.css' );
    }
);
