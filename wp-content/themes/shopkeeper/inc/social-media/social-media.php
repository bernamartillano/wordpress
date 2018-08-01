<?php

/******************************************************************************/
/* Social Media ***************************************************************/
/******************************************************************************/	

function getbowtied_social_media() {

	global $shopkeeper_theme_options;

	$facebook = "";
	$pinterest = "";
	$linkedin = "";
	$twitter = "";
	$googleplus = "";
	$rss = "";
	$tumblr = "";
	$instagram = "";
	$youtube = "";
	$vimeo = "";
	$behance = "";
	$dribbble = "";
	$flickr = "";
	$git = "";
	$skype = "";
	$weibo = "";
	$foursquare = "";
	$soundcloud = "";
	$vk = "";
	$tripadvisor = "";
	$wechat = "";
	$houzz = "";
	$naver = "";
	
	if ( isset ($shopkeeper_theme_options['facebook_link']) && !empty($shopkeeper_theme_options['facebook_link']) ) $facebook = $shopkeeper_theme_options['facebook_link'];
	if ( isset ($shopkeeper_theme_options['pinterest_link']) && !empty($shopkeeper_theme_options['pinterest_link']) ) $pinterest = $shopkeeper_theme_options['pinterest_link'];
	if ( isset ($shopkeeper_theme_options['linkedin_link']) && !empty($shopkeeper_theme_options['linkedin_link']) ) $linkedin = $shopkeeper_theme_options['linkedin_link'];
	if ( isset ($shopkeeper_theme_options['twitter_link']) && !empty($shopkeeper_theme_options['twitter_link']) ) $twitter = $shopkeeper_theme_options['twitter_link'];
	if ( isset ($shopkeeper_theme_options['googleplus_link']) && !empty($shopkeeper_theme_options['googleplus_link']) ) $googleplus = $shopkeeper_theme_options['googleplus_link'];
	if ( isset ($shopkeeper_theme_options['rss_link']) && !empty($shopkeeper_theme_options['rss_link']) ) $rss = $shopkeeper_theme_options['rss_link'];
	if ( isset ($shopkeeper_theme_options['tumblr_link']) && !empty($shopkeeper_theme_options['tumblr_link']) ) $tumblr = $shopkeeper_theme_options['tumblr_link'];
	if ( isset ($shopkeeper_theme_options['instagram_link']) && !empty($shopkeeper_theme_options['instagram_link']) ) $instagram = $shopkeeper_theme_options['instagram_link'];
	if ( isset ($shopkeeper_theme_options['youtube_link']) && !empty($shopkeeper_theme_options['youtube_link']) ) $youtube = $shopkeeper_theme_options['youtube_link'];
	if ( isset ($shopkeeper_theme_options['vimeo_link']) && !empty($shopkeeper_theme_options['vimeo_link']) ) $vimeo = $shopkeeper_theme_options['vimeo_link'];
	if ( isset ($shopkeeper_theme_options['behance_link']) && !empty($shopkeeper_theme_options['behance_link']) ) $behance = $shopkeeper_theme_options['behance_link'];
	if ( isset ($shopkeeper_theme_options['dribbble_link']) && !empty($shopkeeper_theme_options['dribbble_link']) ) $dribbble = $shopkeeper_theme_options['dribbble_link'];
	if ( isset ($shopkeeper_theme_options['flickr_link']) && !empty($shopkeeper_theme_options['flickr_link']) ) $flickr = $shopkeeper_theme_options['flickr_link'];
	if ( isset ($shopkeeper_theme_options['git_link']) && !empty($shopkeeper_theme_options['git_link']) ) $git = $shopkeeper_theme_options['git_link'];
	if ( isset ($shopkeeper_theme_options['skype_link']) && !empty($shopkeeper_theme_options['skype_link']) ) $skype = $shopkeeper_theme_options['skype_link'];
	if ( isset ($shopkeeper_theme_options['weibo_link']) && !empty($shopkeeper_theme_options['weibo_link']) ) $weibo = $shopkeeper_theme_options['weibo_link'];
	if ( isset ($shopkeeper_theme_options['foursquare_link']) && !empty($shopkeeper_theme_options['foursquare_link']) ) $foursquare = $shopkeeper_theme_options['foursquare_link'];
	if ( isset ($shopkeeper_theme_options['soundcloud_link']) && !empty($shopkeeper_theme_options['soundcloud_link']) ) $soundcloud = $shopkeeper_theme_options['soundcloud_link'];
	if ( isset ($shopkeeper_theme_options['vk_link']) && !empty($shopkeeper_theme_options['vk_link']) ) $vk = $shopkeeper_theme_options['vk_link'];
	if ( isset ($shopkeeper_theme_options['houzz_link']) && !empty($shopkeeper_theme_options['houzz_link']) ) $houzz = $shopkeeper_theme_options['houzz_link'];
	if ( isset ($shopkeeper_theme_options['naver_line_link']) && !empty($shopkeeper_theme_options['naver_line_link']) ) $naver = $shopkeeper_theme_options['naver_line_link'];
	if ( isset ($shopkeeper_theme_options['tripadvisor_link']) && !empty($shopkeeper_theme_options['tripadvisor_link']) ) $tripadvisor = $shopkeeper_theme_options['tripadvisor_link'];
	if ( isset ($shopkeeper_theme_options['wechat_link']) && !empty($shopkeeper_theme_options['wechat_link']) ) $wechat = $shopkeeper_theme_options['wechat_link'];
	
	?>
	
	<?php if ( $facebook != "" ) { ?> 		<li><a href="<?php echo $facebook; ?>" target="_blank" class="social_media"><span class="spk-icon-facebook-f"></span></a></li> 		<?php } ?>
	<?php if ( $pinterest != "" ) { ?> 		<li><a href="<?php echo $pinterest; ?>" target="_blank" class="social_media"><span class="spk-icon-pinterest"></span></a></li> 		<?php } ?>
	<?php if ( $linkedin != "" ) { ?> 		<li><a href="<?php echo $linkedin; ?>" target="_blank" class="social_media"><span class="spk-icon-linkedin"></span></a></li> 		<?php } ?>
	<?php if ( $twitter != "" ) { ?> 		<li><a href="<?php echo $twitter; ?>" target="_blank" class="social_media"><span class="spk-icon-twitter"></span></a></li> 			<?php } ?>
	<?php if ( $googleplus != "" ) { ?> 	<li><a href="<?php echo $googleplus; ?>" target="_blank" class="social_media"><span class="spk-icon-google-plus"></span></a></li> 	<?php } ?>
	<?php if ( $rss != "" ) { ?> 			<li><a href="<?php echo $rss; ?>" target="_blank" class="social_media"><span class="spk-icon-rss"></span></a></li> 					<?php } ?>
	<?php if ( $tumblr != "" ) { ?> 		<li><a href="<?php echo $tumblr; ?>" target="_blank" class="social_media"><span class="spk-icon-tumblr"></span></a></li> 			<?php } ?>
	<?php if ( $instagram != "" ) { ?> 		<li><a href="<?php echo $instagram; ?>" target="_blank" class="social_media"><span class="spk-icon-instagram"></span></a></li> 		<?php } ?>
	<?php if ( $youtube != "" ) { ?> 		<li><a href="<?php echo $youtube; ?>" target="_blank" class="social_media"><span class="spk-icon-youtube"></span></a></li> 			<?php } ?>
	<?php if ( $vimeo != "" ) { ?> 			<li><a href="<?php echo $vimeo; ?>" target="_blank" class="social_media"><span class="spk-icon-vimeo"></span></a></li> 				<?php } ?>
	<?php if ( $behance != "" ) { ?> 		<li><a href="<?php echo $behance; ?>" target="_blank" class="social_media"><span class="spk-icon-behance"></span></a></li> 			<?php } ?>
	<?php if ( $dribbble != "" ) { ?> 		<li><a href="<?php echo $dribbble; ?>" target="_blank" class="social_media"><span class="spk-icon-dribbble"></span></a></li> 		<?php } ?>
	<?php if ( $flickr != "" ) { ?> 		<li><a href="<?php echo $flickr; ?>" target="_blank" class="social_media"><span class="spk-icon-flickr"></span></a></li> 			<?php } ?>
	<?php if ( $git != "" ) { ?> 			<li><a href="<?php echo $git; ?>" target="_blank" class="social_media"><span class="spk-icon-github"></span></a></li> 				<?php } ?>
	<?php if ( $skype != "" ) { ?> 			<li><a href="<?php echo $skype; ?>" target="_blank" class="social_media"><span class="spk-icon-skype"></span></a></li> 				<?php } ?>
	<?php if ( $weibo != "" ) { ?> 			<li><a href="<?php echo $weibo; ?>" target="_blank" class="social_media"><span class="spk-icon-sina-weibo"></span></a></li> 		<?php } ?>
	<?php if ( $foursquare != "" ) { ?> 	<li><a href="<?php echo $foursquare; ?>" target="_blank" class="social_media"><span class="spk-icon-foursquare"></span></a></li> 	<?php } ?>
	<?php if ( $soundcloud != "" ) { ?> 	<li><a href="<?php echo $soundcloud; ?>" target="_blank" class="social_media"><span class="spk-icon-soundcloud"></span></a></li> 	<?php } ?>
	<?php if ( $vk != "" ) { ?> 		  	<li><a href="<?php echo $vk; ?>" target="_blank" class="social_media"><span class="spk-icon-vk"></span></a></li> 					<?php } ?>
	<?php if ( $houzz != "" ) { ?> 	  		<li><a href="<?php echo $houzz; ?>" target="_blank" class="social_media"><span class="spk-icon-houzz"></span></a></li> 				<?php } ?>
	<?php if ( $naver != "" ) { ?> 	  		<li><a href="<?php echo $naver; ?>" target="_blank" class="social_media"><span class="spk-icon-naver-line-logo"></span></a></li> 	<?php } ?>
	<?php if ( $tripadvisor != "" ) { ?> 	<li><a href="<?php echo $tripadvisor; ?>" target="_blank" class="social_media"><span class="spk-icon-tripadvisor"></span></a></li> 	<?php } ?>
	<?php if ( $wechat != "" ) { ?> 		<li><a href="<?php echo $wechat; ?>" target="_blank" class="social_media"><span class="spk-icon-wechat"></span></a></li> 			<?php } ?>

	<?php

}
add_action( 'getbowtied_social_media', 'getbowtied_social_media' );