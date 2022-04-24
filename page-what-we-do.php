<?php get_header(); ?>

  <div class="content">
    <div class="pg-banner">
      <div class="overlay">
        <div class="title">What we do</div>
        <div class="pg-cap"><?php echo get_field('services_caption'); ?></div>
      </div>
    </div>
  </div>

  <div class="section no-lft-rght-pad clearfix">
    <div class="inner-wrap">
      
      <div class="hm-srv-wrap pt-60 clearfix">  

        <?php
          $args = array(
          'post_type' => 'Services',
          'posts_per_page' => -1,

          );

          $details = new WP_Query($args);
  
          while($details->have_posts()) {
              $details->the_post();
              
        ?>

            <div class="srv-hld">
              <div class="srv-photo" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>')"></div>
              <a href="<?php echo the_permalink(); ?>"><span><?php echo the_title(); ?></span></a>
            </div>

        <?php
          } wp_reset_query();
        ?>

      </div>

    </div>
  </div>

  <div class="section no-pad">
    <div class="inner-wrap top-bd clearfix">
      <div class="car-cap"><?php echo get_field('contact_caption'); ?></div>
      <div class="car-det">
        <div class="car-text"><?php echo get_field('contact_details'); ?></div>
        <div class="cta">
          <a href="<?php echo site_url('/contact'); ?>">
            <span>Contact Us</span>
            <span class="f-arrow"><i class="fas fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </div>
  </div>

      
<?php get_footer(); ?>