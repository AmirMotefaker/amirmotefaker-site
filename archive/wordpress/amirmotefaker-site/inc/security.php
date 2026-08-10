<?php
/**
 * Conservative frontend security headers.
 *
 * @package AmirMotefaker
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action(
    'send_headers',
    static function (): void {
        if ( headers_sent() ) {
            return;
        }

        header( 'X-Content-Type-Options: nosniff' );
        header( 'Referrer-Policy: strict-origin-when-cross-origin' );
        header( 'Permissions-Policy: camera=(), microphone=(), geolocation=()' );
    }
);
