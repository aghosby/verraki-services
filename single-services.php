<?php get_header(); ?>

  <div class="content">
    <div class="pg-banner">
      <div class="overlay">
        <div class="title">Services</div>
        <?php if(have_posts()) : while(have_posts()) : the_post(); ?>
        <div class="pg-cap"><?php echo the_title(); ?></div>
      </div>
    </div>
  </div>

  <div class="section no-lft-rght-pad">
    <div class="inner-wrap pt-60">
      <div class="sec-photo">
        <img src="<?php echo get_the_post_thumbnail_url(); ?>" />
      </div>
      <div class="sec-det space"><?php echo the_content(); ?></div>
    </div>
  </div>

  <?php endwhile; endif; ?>
  
<?php get_footer(); ?>