<?php

add_action( 'widgets_init', 'register_social_media_widget' );

function register_social_media_widget() {
	register_widget( 'Social_Media_Widget' );
}

class Social_Media_Widget extends WP_Widget {

	public function __construct() {
		parent::__construct(
			'shopkeeper_social_media', // Base ID
			__('Shopkeeper Social Media Profiles', 'shopkeeper'), // Name
			array( 'description' => __( 'A widget that displays Social Media Profiles', 'shopkeeper' ), ) // Args
		);
	}

	public function widget( $args, $instance ) {

		if( isset( $instance['title'] ) ) {
			$title = apply_filters( 'widget_title', $instance['title'] );
		}

		echo $args['before_widget'];
		
		if ( ! empty( $title ) )
			echo $args['before_title'] . $title . $args['after_title'];
		
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
		
		if ( $facebook ) echo('<a href="' . $facebook . '" target="_blank"><span class="spk-icon-facebook-f"></span></a>' );
		if ( $pinterest ) echo('<a href="' . $pinterest . '" target="_blank"><span class="spk-icon-pinterest"></span></a>' );
		if ( $linkedin ) echo('<a href="' . $linkedin . '" target="_blank"><span class="spk-icon-linkedin"></span></a>' );
		if ( $twitter ) echo('<a href="' . $twitter . '" target="_blank"><span class="spk-icon-twitter"></span></a>' );
		if ( $googleplus ) echo('<a href="' . $googleplus . '" target="_blank"><span class="spk-icon-google-plus"></span></a>' );
		if ( $rss ) echo('<a href="' . $rss . '" target="_blank"><span class="spk-icon-rss"></span></a>' );
		if ( $tumblr ) echo('<a href="' . $tumblr . '" target="_blank"><span class="spk-icon-tumblr"></span></a>' );
		if ( $instagram ) echo('<a href="' . $instagram . '" target="_blank"><span class="spk-icon-instagram"></span></a>' );
		if ( $youtube ) echo('<a href="' . $youtube . '" target="_blank"><span class="spk-icon-youtube"></span></a>' );
		if ( $vimeo ) echo('<a href="' . $vimeo . '" target="_blank"><span class="spk-icon-vimeo"></span></a>' );
		if ( $behance ) echo('<a href="' . $behance . '" target="_blank"><span class="spk-icon-behance"></span></a>' );
		if ( $dribbble ) echo('<a href="' . $dribbble . '" target="_blank"><span class="spk-icon-dribbble"></span></a>' );
		if ( $flickr ) echo('<a href="' . $flickr . '" target="_blank"><span class="spk-icon-flickr"></span></a>' );
		if ( $git ) echo('<a href="' . $git . '" target="_blank"><span class="spk-icon-github"></span></a>' );
		if ( $skype ) echo('<a href="' . $skype . '" target="_blank"><span class="spk-icon-skype"></span></a>' );
		if ( $weibo ) echo('<a href="' . $weibo . '" target="_blank"><span class="spk-icon-weibo"></span></a>' );
		if ( $foursquare ) echo('<a href="' . $foursquare . '" target="_blank"><span class="spk-icon-foursquare"></span></a>' );
		if ( $soundcloud ) echo('<a href="' . $soundcloud . '" target="_blank"><span class="spk-icon-soundcloud"></span></a>' );
		if ( $vk ) echo('<a href="' . $vk . '" target="_blank"><span class="spk-icon-vk"></span></a>' );
		if ( $houzz ) echo('<a href="' . $houzz . '" target="_blank"><span class="spk-icon-houzz"></span></a>' );
		if ( $naver ) echo('<a href="' . $naver . '" target="_blank"><span class="spk-icon-naver-line-logo"></span></a>' );
		if ( $tripadvisor ) echo('<a href="' . $tripadvisor . '" target="_blank"><span class="spk-icon-tripadvisor"></span></a>' );
		if ( $wechat ) echo('<a href="' . $wechat . '" target="_blank"><span class="spk-icon-wechat"></span></a>' );
		
		echo $args['after_widget'];
	}

	public function form( $instance ) {
		
		if ( isset( $instance[ 'title' ] ) ) {
			$title = $instance[ 'title' ];
		}
		else {
			$title = __( 'Get Connected', 'shopkeeper' );
		}
		?>
		
        <p>
		<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:', 'shopkeeper' ); ?></label> 
		<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
		</p>
		
		<?php 
	}

	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

		return $instance;
	}

}