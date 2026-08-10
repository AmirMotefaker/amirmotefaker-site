<?php
/**
 * Title: Technology news
 * Slug: amirmotefaker/technology-news
 * Categories: posts
 */
?>
<!-- wp:group {"className":"am-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group am-section">
    <!-- wp:heading -->
    <h2 class="wp-block-heading">اخبار فناوری</h2>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"className":"am-muted"} -->
    <p class="am-muted">خبرهای منبع‌محور فناوری؛ پایلوت انتشار در وضعیت Draft-only و با بازبینی انسانی انجام می‌شود.</p>
    <!-- /wp:paragraph -->
    <!-- wp:query {"query":{"perPage":4,"postType":"post","order":"desc","orderBy":"date","inherit":false}} -->
    <div class="wp-block-query"><!-- wp:post-template --><!-- wp:post-title {"isLink":true} /--><!-- wp:post-date /--><!-- /wp:post-template --></div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->
