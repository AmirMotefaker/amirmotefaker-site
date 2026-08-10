<?php
/**
 * AmirMotefaker V1 theme foundation.
 *
 * @package AmirMotefakerV1
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

add_action(
    'after_setup_theme',
    static function (): void {
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_theme_support('editor-styles');
    }
);
