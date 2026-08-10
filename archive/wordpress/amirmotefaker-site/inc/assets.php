<?php
/**
 * Local theme assets.
 *
 * @package AmirMotefaker
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action(
    'wp_enqueue_scripts',
    static function (): void {
        $styles = array(
            'base'       => 'assets/css/base.css',
            'components' => 'assets/css/components.css',
            'dark'       => 'assets/css/dark.css',
            'light'      => 'assets/css/light.css',
            'rtl'        => 'assets/css/rtl.css',
        );

        foreach ( $styles as $handle => $relative_path ) {
            $absolute_path = get_theme_file_path( $relative_path );
            wp_enqueue_style(
                'amirmotefaker-' . $handle,
                get_theme_file_uri( $relative_path ),
                array(),
                file_exists( $absolute_path ) ? (string) filemtime( $absolute_path ) : null
            );
        }

        foreach ( array( 'theme-toggle', 'navigation' ) as $script ) {
            $relative_path = 'assets/js/' . $script . '.js';
            $absolute_path = get_theme_file_path( $relative_path );
            wp_enqueue_script(
                'amirmotefaker-' . $script,
                get_theme_file_uri( $relative_path ),
                array(),
                file_exists( $absolute_path ) ? (string) filemtime( $absolute_path ) : null,
                true
            );
        }
    }
);
