<?php
/*
Template Name: Custom Page Example
*/
?>
<?php do_action( '__before_main_wrapper' ); ##hooks the header with get_header ?>
<?php tc__f('rec' , __FILE__ , __FUNCTION__ ); ?>
<div id="main-wrapper" class="container">
	<?php do_action( '__before_main_container' ); ##hooks the featured page (priority 10) and breadcrumb (priority 20)...and whatever you need! ?>
	<div class="container" role="main">
		<div class="row">
			<?php do_action( '__sidebar' , 'left' ); ?>
				<div class="span1 article-container"></div><?php //romain marge de 1 ?>
				<div class="<?php echo tc__f( '__screen_layout' , tc__f ( '__ID' ) , 'class' ) ?> article-container">
					
					<?php do_action ('__before_loop');##hooks the header of the list of post : archive, search... ?>
						
						<?php
							global $wp_query;
							##do we have posts? If not are we in the no search result case?
							if ( have_posts() || (is_search() && 0 == $wp_query -> post_count) ) : ?>
								<?php if ( is_search() && 0 == $wp_query -> post_count ) : ##no search results case ?>
									<article <?php tc__f('__article_selectors') ?>>
										<?php //do_action( '__loop' ); ?>
									</article>
								<?php endif; ?>

								<?php while ( have_posts() ) : ##all other cases for single and lists: post, custom post type, page, archives, search, 404 ?>
									<?php the_post(); ?>
									 
									<article <?php tc__f('__article_selectors') ?>>
										<?php
										//do_action( '__loop' );
										
										
										$icon_class = in_array(get_post_format(), array(  'quote' , 'aside' , 'status' , 'link' )) ? 'format-icon':'';

										 ?>

										<div class="featurette-divider"></div>
				
										<header class="entry-header">
										<?php tc__f( 'tip' , __FUNCTION__ , __CLASS__, __FILE__); ?>
										<?php //bubble color computation
											$style                      = ( 0 == get_comments_number() ) ? 'style="color:#ECECEC" ':'';

												if ((get_the_title() != null)) {
													printf( 
													'<h2 class="entry-title format-icon">%1$s %2$s</h2>' ,
													//'<a href="'.get_permalink().'" title="'.esc_attr( sprintf( __( 'Permalink to %s' , 'customizr' ), the_title_attribute( 'echo=0' ) ) ).'" rel="bookmark">'.((get_the_title() == null) ? __( '{no title} Read the post &raquo;' , 'customizr' ):get_the_title()).'</a>' ,
													get_the_title(),
													//check if comments are opened AND if there are comments to display
													(comments_open() && get_comments_number() != 0) ? '<span class="comments-link"><span '.$style.' class="fs1 icon-bubble"></span><span class="inner">'.get_comments_number().'</span></span>' : ''
													);
												}
											?>
											<div class="entry-meta">
												<?php //meta not displayed on home page, only in archive or search pages
													if ( !tc__f('__is_home') ) { 
														do_action( '__post_metas' );
													}
												?>

											</div><!-- .entry-meta -->
										
										</header><!-- .entry-header -->



										<?php tc__f( 'tip' , __FUNCTION__ , __CLASS__, __FILE__ ); ?>    

										<section class="entry-content <?php echo $icon_class ?>">
											<?php the_content( __( 'Continue reading <span class="meta-nav fleche-grise-droite">></span>' , 'customizr' ) ); ?>

											<?php wp_link_pages( array( 'before' => '<div class="pagination pagination-centered">' . __( 'Pages:' , 'customizr' ), 'after' => '</div>' ) ); ?>
										</section><!-- .entry-content -->

					
										<?php
										##we don't want to display more than one post if 404!
										if ( is_404() )
											break;
										?>
									</article>
								<?php endwhile; ?>

							<?php endif; ##end if have posts ?>

					<?php do_action ('__after_loop');##hooks the comments and the posts navigation with priorities 10 and 20 ?>

				</div><!--.article-container -->

<div class="span1 article-container"></div>
                <div class="span3 right tc-sidebar">
                  <div id="right" class="widget-area" role="complementary">
                     <?php if ( is_active_sidebar( 'right' ) ) : ?>
                        <?php do_action( '__before_right_sidebar' );##hook of social icons ?>

                          <?php dynamic_sidebar( 'communiques' ); ?>

                        <?php do_action( '__after_right_sidebar' ); ?>
                      <?php endif; ?>
                  </div><!-- #right -->
                </div><!--.tc-sidebar .span3 -->


		</div><!--.row -->
	</div><!-- .container role: main -->
	<?php do_action( '__after_main_container' ); ?>
</div><!--#main-wrapper"-->
<?php do_action( '__after_main_wrapper' );##hooks the footer with get_get_footer ?>

