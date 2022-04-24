<?php get_header(); ?>

  <div class="content">
    <div class="pg-banner">
      <div class="overlay">
        <div class="title">About Us</div>
        <div class="pg-cap"><?php echo get_field('about_caption'); ?></div>
      </div>
    </div>
  </div>

  <div class="section no-lft-rght-pad">
    <div class="inner-wrap pt-60">
      <div class="sec-photo">
        <img src="<?php echo get_the_post_thumbnail_url(); ?>" />
      </div>
      <div class="sec-det space"><?php echo get_field('about_details'); ?></div>
    </div>
  </div>

  <div class="section no-lft-rght-pad clr-sec stmts">
    <div class="inner-wrap pt-60">
      <div class="sec-title">Our Vision</div>
      <div class="sec-det"><p><?php echo get_field('vision'); ?></p></div>

      <div class="sec-title top-pad">Our Mission</div>
      <div class="sec-det"><p><?php echo get_field('mission'); ?></p></div>

    </div>
  </div>
      
<?php get_footer(); ?>