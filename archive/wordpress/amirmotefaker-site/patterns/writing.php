<?php
/**
 * Title: Writing
 * Slug: amirmotefaker/writing
 * Categories: posts
 */
?>
<!-- wp:group {"className":"am-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group am-section">
    <!-- wp:heading -->
    <h2 class="wp-block-heading">نوشته‌ها</h2>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"className":"am-muted"} -->
    <p class="am-muted">آرشیو نوشته‌های تاریخی و یادداشت‌های جدید درباره فناوری، محصول و بازار.</p>
    <!-- /wp:paragraph -->
    <!-- wp:query {"query":{"perPage":6,"postType":"post","order":"desc","orderBy":"date","inherit":false}} -->
    <div class="wp-block-query"><!-- wp:post-template --><!-- wp:post-title {"isLink":true} /--><!-- wp:post-excerpt /--><!-- /wp:post-template --><!-- wp:query-pagination /--></div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->
