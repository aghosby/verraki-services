<?php get_header(); ?>

  <div class="content">
    <div class="pg-banner">
      <div class="overlay">
        <div class="title">Contact Us</div>
        <div class="pg-cap"><?php echo get_field('contact_caption'); ?></div>
      </div>
    </div>
  </div>

  <div class="section no-lft-rght-pad">
    <div class="inner-wrap pt-60">
      <div class="sec-det rd"><?php echo get_field('contact_details'); ?></div>
      <div class="cont">
        <div class="cont-wrap clearfix">
          <div class="cont-hld">
            <div class="cont-hd">Address</div>
            <?php echo get_field('address'); ?>
          </div>
          <div class="cont-hld">
            <div class="cont-hd">Email</div>
            <?php echo get_field('email'); ?>
          </div>
          <div class="cont-hld">
            <div class="cont-hd">Phone</div>
            <?php echo get_field('phone'); ?>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section clr-sec clearfix">
    <div class="inner-wrap">

      <div class="th_row clearfix">
        <div class="s_cont"><?php echo do_shortcode('[contact-form-7 id="31" title="Contact Form"]'); ?></div>
      </div>

      <div id="map"></div>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCINHyvamD8qS4UkEabVgTBYspQAXgYuvM"></script>
      <script>
        var myCenter = new google.maps.LatLng(6.481482235056514, 3.360719554830105);
        function initialize() {
          var mapProp = {
            center:myCenter,
            zoom:15,
            mapTypeId:google.maps.MapTypeId.ROADMAP
          };

          var map = new google.maps.Map(document.getElementById("map"),mapProp);

          var marker = new google.maps.Marker({
            position:myCenter,
          });

          marker.setMap(map);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
      </script>
    
    </div>
  </div>
      
<?php get_footer(); ?>