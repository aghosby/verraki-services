<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<meta name="format-detection" content="telephone=no" />
<link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/assets/img/favicon.png">
<?php wp_head(); ?>

</head>

<body>
  
  <div id="main_wrapper">

    <div class="header home">
        <div class="hdr clearfix">

          <div class="menu_icon">
            <div class="menu_text">Menu</div>
            <div class="burger_icon"> 
                <span class="burger_bar_top"></span> 
                <span class="burger_bar_middle"></span> 
                <span class="burger_bar_bottom"></span> 
            </div>
          </div>

          <a href="<?php echo site_url('/'); ?>">
            <div class="brandname">
              <img src="<?php bloginfo('template_directory'); ?>/assets/img/logo-crop.png" />
            </div>
          </a>

          <div class="menu">
            <div class="nav">
              <ul>
                <li <?php if(is_front_page()){ echo 'class="active"';} ?>><a href="<?php echo site_url('/'); ?>">Home</a></li>
                <li <?php if(is_page('About')){ echo 'class="active"';} ?>><a href="<?php echo site_url('/about'); ?>">About Us</a></li>
                <li <?php if(is_page('What We Do')){ echo 'class="active"';} ?>><a href="<?php echo site_url('/what-we-do'); ?>">What we do</a></li>
                <li <?php if(is_page('Careers')){ echo 'class="active"';} ?>><a href="<?php echo site_url('/careers'); ?>">Careers</a></li>            
                <li <?php if(is_page('Contact')){ echo 'class="active"';} ?>><a href="<?php echo site_url('/contact'); ?>">Contact</a></li>
              </ul>
            </div>
          </div>

        </div>
    
    </div>

    


