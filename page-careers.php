<?php get_header(); ?>

  <div class="content">
    <div class="pg-banner">
      <div class="overlay">
        <div class="title">Careers</div>
        <div class="pg-cap"><?php echo get_field('careers_caption'); ?></div>
      </div>
    </div>
  </div>

  <div class="section no-lft-rght-pad">
    <div class="inner-wrap pt-60">
      <div class="sec-photo">
        <img src="<?php echo get_the_post_thumbnail_url(); ?>" />
      </div>
      <div class="sec-det space"><?php echo get_field('careers_details'); ?></div>
    </div>
  </div>

      
<?php get_footer(); ?>