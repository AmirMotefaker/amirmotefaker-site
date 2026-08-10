<?php
/**
 * Pattern categories.
 *
 * @package AmirMotefaker
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action(
    'init',
    static function (): void {
        register_block_pattern_category(
            'amirmotefaker',
            array(
                'label' => __( 'AmirMotefaker.ir', 'amirmotefaker' ),
            )
        );
    }
);
