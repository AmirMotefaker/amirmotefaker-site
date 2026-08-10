<?php
/**
 * Plugin Name: AmirMotefaker Core
 * Description: Core content-model and product functionality foundation for AmirMotefaker.ir.
 * Version: 0.1.0
 * Requires PHP: 8.1
 * Author: Amir Motefaker
 * Text Domain: amirmotefaker-core
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

/**
 * Foundation activation hook.
 *
 * No Production data mutation is included in this release.
 */
function amirmotefaker_core_activate(): void
{
    // Intentionally empty during the source-foundation milestone.
}

register_activation_hook(__FILE__, 'amirmotefaker_core_activate');
