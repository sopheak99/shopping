import React from 'react';

export default class menu extends React.Component {
    constructor() {
        super()
        this.state.menu = [
            {
                menu: []
            }
        ]
    }
    componentWillMount() {
        this.state.menu = [
            {
				name:''
            }
        ]
    }
    render() {
           var Menus = this.state.Menus.map(menu => {
            return <li>{menu.name}</li>
        })
        return (
            <div id="main-menu" class="main-nav zn_mega_wrapper ">
			<ul id="menu-main-menu" class="main-menu zn_mega_menu">
				<li class="menu-item-has-children menu-item-mega-parent"><a href="index.php">HOMEPAGES &amp; NICHE</a>
					<ul class="hg_mega_container container clearfix">
						<li class="menu-item-has-childern col-sm-4"><a href="#" class="zn_mega_title">HOMEPAGES</a>
							<ul class="clearfix">
								<li><a href="index.php">ARIES Homepage</a></li>
								<li><a href="orion-homepage.php">ORION Homepage</a></li>
								<li><a href="vega-homepage.php">VEGA Homepage</a></li>
								<li><a href="aura-homepage.php">AURA Homepage</a></li>
								<li><a href="homepages-agency.php">Agency Homepage</a></li>
								<li><a href="one-page.php">One Page</a></li>
								<li><a href="kuma-homepage.php">KUMA Homepage</a></li>
								<li><a href="ara-homepage.php">ARA Homepage</a></li>
								<li><a href="kronos-homepage.php">KRONOS Homepage</a></li>
								<li><a href="apollo-homepage.php">APOLLO Homepage</a></li>
								<li><a href="artemis-homepage.php">Artemis Homepage</a></li>
								<li><a href="eos-homepage.php">EOS Homepage</a></li>
								<li><a href="atlas-homepage.php">ATLAS Homepage</a></li>
								<li><a href="atlas-homepage-alt.php">ATLAS Homepage - Alt</a></li>
							</ul>
						</li>
						<li class="menu-item-has-childern col-sm-4"><a href="#" class="zn_mega_title">NICHE</a>
							<ul class="clearfix">
								<li><a href="_15-cargo-homepage.php" target="_blank">CARGO</a></li>
								<li><a href="_14-gym-homepage.php" target="_blank">GYM</a></li>
								<li><a href="_13-charity-homepage.php" target="_blank">CHARITY</a></li>
								<li><a href="_12-architecture-homepage.php" target="_blank">ARCHITECTURE</a></li>
								<li><a href="_11-interior-homepage.php" target="_blank">INTERIOR DESIGN</a></li>
								<li><a href="_10-university-homepage.php" target="_blank">UNIVERSITY</a></li>
								<li><a href="_9-dental-clinic-homepage.php" target="_blank">DENTAL CLINIC</a></li>
								<li><a href="_8-dance-homepage.php" target="_blank">DANCE SCHOOL</a></li>
								<li><a href="_16-lawyer-homepage.php" target="_blank">LAWYER</a></li>
								<li><a href="_7-construction-homepage.php" target="_blank">CONSTRUCTION</a></li>
								<li><a href="_6-business-homepage.php" target="_blank">BUSINESS</a></li>
								<li><a href="_3-restaurant-onepage.php" target="_blank">RESTAURANT</a></li>
								<li><a href="_4-furniture-homepage.php" target="_blank">FURNITURE</a></li>
								<li><a href="_5-fashion-homepage.php" target="_blank">FASHION</a></li>
								<li><a href="_1-travel-homepage.php" target="_blank">TRAVEL</a></li>
								<li><a href="_2-hotel-homepage.php" target="_blank">HOTEL</a></li>
								<li><a href="_17-automotive-homepage.php" target="_blank">AUTOMOTIVE</a></li>
							</ul>
						</li>
						<li class="menu-item-has-childern col-sm-4"><a href="#" class="zn_mega_title ">CLASSIC HOMEPAGES</a>
							<ul class="clearfix">
								<li><a href="homepages-homepage-1-classic.php">Homepage 1</a></li>
								<li><a href="homepages-homepage-2-classic.php">Homepage 2</a></li>
								<li><a href="homepages-homepage-3-classic.php">Homepage 3</a></li>
								<li><a href="homepages-homepage-4-classic.php">Homepage 4</a></li>
								<li><a href="homepages-homepage-5-classic.php">Homepage 5</a></li>
								<li><a href="homepages-homepage-6-classic.php">Homepage 6</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="menu-item-has-children menu-item-mega-parent"><a href="#">SLIDERS</a>
					<ul class="hg_mega_container container clearfix">
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title">Presentation Oriented</a>
							<ul class="clearfix">
								<li><a href="sliders-ios-slider-default.php">IOS SLIDER (DEFAULT)</a></li>
								<li><a href="sliders-ios-slider-alternative.php">IOS SLIDER (ALTERNATIVE)</a></li>
								<li><a href="sliders-ios-slider-mood.php">IOS SLIDER - MOOD</a></li>
								<li><a href="sliders-creative-slider-revolution.php">CREATIVE SLIDER (REVOLUTION)</a></li>
								<li><a href="sliders-simple-and-modern.php">SIMPLE N’ MODERN SLIDER</a></li>
								<li><a href="sliders-3d-cute-slider.php">3D CUTE SLIDER</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title">Portfolio Oriented</a>
							<ul class="clearfix">
								<li><a href="sliders-css3-panels.php">CSS3 PANELS</a></li>
								<li><a href="sliders-css3-panels-alternative.php">CSS3 PANELS (ALTERNATIVE)</a></li>
								<li><a href="sliders-portfolio-frames.php">PORTFOLIO FRAMES</a></li>
								<li><a href="sliders-laptop-slider.php">LAPTOP SLIDER</a></li>
								<li><a href="sliders-laptop-slider-alternative.php">LAPTOP SLIDER (ALTERNATIVE)</a></li>
								<li><a href="sliders-icarousel.php">ICAROUSEL</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title">Shop Oriented</a>
							<ul class="clearfix">
								<li><a href="sliders-shop-slider-revolution.php">SHOP SLIDER (PART 1)</a></li>
								<li><a href="sliders-shop-slider-part-2.php">SHOP SLIDER (PART 2)</a></li>
								<li><a href="sliders-circular-catalogue.php">CIRCULAR CATALOGUE</a></li>
								<li><a href="sliders-circular-carousel.php">CIRCULAR CAROUSEL</a></li>
								<li><a href="sliders-circular-carousel-alternative.php">CIRCULAR CAROUSEL (ALTERNATIVE)</a></li>
								<li><a href="sliders-fancy-slider.php">FANCY SLIDER</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title">Others</a>
							<ul class="clearfix">
								<li><a href="sliders-simple-n-classic.php">SIMPLE N’ CLASSIC</a></li>
								<li><a href="sliders-nivo-slider.php">NIVO SLIDER</a></li>
								<li><a href="sliders-wow-slider-blast.php">WOW SLIDER / BLAST</a></li>
								<li><a href="sliders-wow-slider-flyout.php">WOW SLIDER / FLYOUT</a></li>
								<li><a href="sliders-wow-slider-blinds.php">WOW SLIDER / BLINDS</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3 cleft"><a href="#" class="zn_mega_title">Based on Revolution Slider</a>
							<ul class="clearfix">
								<li><a href="__rev-slider_agency-website-header.php">AGENCY WEBSITE HEADER</a></li>
								<li><a href="__rev-slider_agency-website-header1.php">AGENCY WEBSITE HEADER 1</a></li>
								<li><a href="__rev-slider_app-landing.php">APP LANDING</a></li>
								<li><a href="__rev-slider_better-youtube-gallery.php">YOUTUBE GALLERY</a></li>
								<li><a href="__rev-slider_car-dealership.php">CAR DEALERSHIP</a></li>
								<li><a href="__rev-slider_christmas-snow-scene.php">CHRISTMAS SNOW SCENE</a></li>
								<li><a href="__rev-slider_coming-soon.php">COMING SOON</a></li>
								<li><a href="__rev-slider_concept.php">CONCEPT</a></li>
								<li><a href="__rev-slider_content-zoom1.php">CONTENT ZOOM</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title zn_mega_title_hide v-hidden">Revolution Slider</a>
							<ul class="clearfix">
								<li><a href="__rev-slider_creative-frontpage.php">CREATIVE FRONTPAGE</a></li>
								<li><a href="__rev-slider_duotone1.php">DUOTONE</a></li>
								<li><a href="__rev-slider_exploration-header.php">EXPLORATION HEADER</a></li>
								<li><a href="__rev-slider_fashion.php">FASHION</a></li>
								<li><a href="__rev-slider_focus-parallax.php">FOCUS PARALLAX</a></li>
								<li><a href="__rev-slider_fullscreen-menu.php">FULLSCREEN MENU</a></li>
								<li><a href="__rev-slider_gym.php">GYM</a></li>
								<li><a href="__rev-slider_highlight-carousel1.php">HIGHLIGHT CAROUSEL</a></li>
								<li><a href="__rev-slider_innovation1.php">INNOVATION</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title zn_mega_title_hide v-hidden">Revolution Slider</a>
							<ul class="clearfix">
								<li><a href="__rev-slider_inspiration-header.php">INSPIRATION HEADER</a></li>
								<li><a href="__rev-slider_levano-restaurant-bar.php">RESTAURANT BAR</a></li>
								<li><a href="__rev-slider_magazine-posts.php">MAGAZINE POSTS</a></li>
								<li><a href="__rev-slider_main-slider.php">MAIN SLIDER</a></li>
								<li><a href="__rev-slider_newsletter-hero1.php">NEWSLETTER HERO</a></li>
								<li><a href="__rev-slider_notgeneric1.php">NOT GENERIC</a></li>
								<li><a href="__rev-slider_restaurant-header.php">RESTAURANT HEADER</a></li>
								<li><a href="__rev-slider_rock-band-music.php">ROCK BAND MUSIC</a></li>
								<li><a href="__rev-slider_rotating-words.php">ROTATING WORDS</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title zn_mega_title_hide v-hidden">Revolution Slider</a>
							<ul class="clearfix">
								<li><a href="__rev-slider_scroll-effect1.php">SCROLL EFFECT</a></li>
								<li><a href="__rev-slider_showcase-carousel.php">SHOWCASE CAROUSEL</a></li>
								<li><a href="__rev-slider_sleek-landing-page.php">SLEEK LANDING PAGE</a></li>
								<li><a href="__rev-slider_sports-hero1.php">SPORTS HERO</a></li>
								<li><a href="__rev-slider_vimeo-hero.php">VIMEO HERO</a></li>
								<li><a href="__rev-slider_web-product-dark.php">WEB PRODUCT DARK</a></li>
								<li><a href="__rev-slider_web-product-light.php">WEB PRODUCT LIGHT</a></li>
								<li><a href="__rev-slider_youtube-hero.php">YOUTUBE HERO</a></li>
							</ul>
						</li>
					</ul>	
				</li>
				<li class="menu-item-has-children"><a href="#">HERO SCENES</a>
					<ul class="sub-menu clearfix">
						<li><a href="static-content-default-layout.php">SIMPLE LAYOUT</a></li>
						<li><a href="static-content-simple-boxes.php">SIMPLE BOXES</a></li>
						<li><a href="static-content-showroom-carousel.php">SHOWROOM CAROUSEL</a></li>
						<li><a href="static-content-booking-panel.php">BOOKING PANEL</a></li>
						<li><a href="static-content-weather-panel.php">WEATHER PANEL</a></li>
						<li><a href="static-content-simple-text-with-mask.php">SIMPLE TEXT WITH MASK</a></li>
						<li><a href="static-content-event-countdown.php">EVENT COUNTDOWN</a></li>
						<li><a href="static-content-google-maps.php">GOOGLE MAPS</a></li>
						<li><a href="static-content-video-launcher.php">VIDEO LAUNCHER</a></li>
						<li><a href="static-content-text-with-register.php">TEXT WITH REGISTER</a></li>
						<li><a href="static-content-product-presentation.php">PRODUCT PRESENTATION</a></li>
						<li><a href="static-content-product-presentation-alt.php">PRODUCT PRESENTATION - ALT</a></li>
						<li><a href="static-content-video-background.php">VIDEO BACKGROUND</a></li>
						<li><a href="static-content-simple-text.php">SIMPLE TEXT</a></li>
						<li><a href="static-content-text-pop.php">TEXT POP</a></li>
						<li><a href="static-content-text-play.php">TEXT PLAY</a></li>
						<li><a href="static-content-immersive-video.php">IMMERSIVE VIDEO</a></li>
						<li><a href="static-content-heat-distortion.php">HEAT DISTORTION</a></li>
						<li><a href="static-content-isometric-grids-scroll.php">ISOMETRIC GRIDS - SCROLL</a></li>
						<li><a href="static-content-isometric-grids-static.php">ISOMETRIC GRIDS - STATIC</a></li>
						<li><a href="static-content-point-of-interest.php">POINT OF INTEREST</a></li>
					</ul>
				</li>
				<li class="menu-item-has-children"><a href="#">FEATURES</a>
					<ul class="sub-menu clearfix">
						<li><a href="http://rsvisualeditor.themepunch.com/index.php?c=account&amp;m=login" target="_blank">VISUAL SLIDER BUILDER</a></li>
						<li><a href="#">Knowledge base</a>
							<ul class="sub-menu clearfix">
								<li><a href="kb-home.php">Homepage</a></li>
								<li><a href="kb-category-page.php">Category page</a></li>
								<li><a href="kb-category-page-2cols.php">Category page 2 cols</a></li>
								<li><a href="kb-sub-category-page.php">Sub-category page</a></li>
								<li><a href="kb-video-article.php">Video article</a></li>
								<li><a href="kb-single-article.php">Single article</a></li>
								<li><a href="kb-search-page.php">Search page</a></li>
								<li><a href="kb-404-page.php">404 page</a></li>
							</ul>
						</li>
						<li><a title="separator" href="#">separator</a></li>
						<li class="menu-item-has-children"><a href="#">CUSTOM SUBHEADERS</a>
							<ul class="sub-menu clearfix">
								<li><a href="subheader-background-image.php">BACKGROUND IMAGE</a></li>
								<li><a href="subheader-background-video.php">BACKGROUND VIDEO</a></li>
								<li><a href="subheader-background-full-color.php">BACKGROUND COLORS</a></li>
								<li><a href="subheader-animated-sparkles.php">ANIMATED SPARKLES</a></li>
								<li><a href="subheader-animated.php">ANIMATED PARTICLES</a></li>
								<li><a href="subheader-animated-mask.php">ANIMATED MASK</a></li>
								<li><a href="subheader-animated-rain.php">ANIMATED RAIN</a></li>
								<li><a title="separator" href="#">separator</a></li>
								<li><a href="subheader-easter-holidays.php">EASTER HOLIDAYS</a></li>
								<li><a href="subheader-st-patrick.php">ST. PATRICK’S</a></li>
								<li><a href="subheader-4th-july.php">4th JULY</a></li>
								<li><a href="subheader-christmas.php">CHRISTMAS</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children"><a href="#">THEME STYLES</a>
							<ul class="sub-menu clearfix">
								<li><a href="styles-typography.php">TYPOGRAPHY</a></li>
								<li><a href="styles-icons.php">ICONS</a></li>
								<li><a href="styles-tables.php">TABLES</a></li>
							</ul>
						</li>
						<li><a title="separator" href="#">separator</a></li>
						<li><a class="inner-elem" href="bigblog.php">BLOG - FLIP BOOK</a></li>
						<li><a href="blog.php">BLOG</a></li>
						<li><a href="blog-alternative-layout.php">ALTERNATIVE BLOG</a></li>
						<li><a href="latest-news.php">LATEST NEWS</a></li>
						<li><a href="sortable-portfolio.php">SORTABLE PORTFOLIO</a></li>
						<li><a href="sortable-portfolio-full.php">SORTABLE PORTFOLIO FULL</a></li>
						<li><a href="carousel-portfolio.php">CAROUSELS PORTFOLIO</a></li>
						<li><a href="carousel-portfolio-alt.php">CAROUSELS PORTFOLIO ALT.</a></li>
						<li><a href="portfolio-fullwidth.php">PORTFOLIO - FULLWIDTH</a></li>
						<li><a href="portfolio-creative.php">PORTFOLIO - CREATIVE</a></li>
						<li><a href="#">PORTFOLIO CATEGORIES</a>
							<ul class="sub-menu clearfix">
								<li><a href="portfolio-category-4-cols.php">PORTFOLIO CAT. – 4 COLS</a></li>
								<li><a href="portfolio-category-3-cols.php">PORTFOLIO CAT. – 3 COLS</a></li>
								<li><a href="portfolio-category-2-cols.php">PORTFOLIO CAT. – 2 COLS</a></li>
								<li><a href="portfolio-category-1-col.php">PORTFOLIO CAT. – 1 COL</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="menu-item-has-children active"><a href="shop-landing-page-default.php">SHOP</a>
					<ul class="sub-menu clearfix">
						<li class="active"><a href="shop-landing-page-default.php">LANDING PAGE (DEFAULT)</a></li>
						<li><a href="shop-landing-page-alternative.php">LANDING PAGE (ALT.)</a></li>
						<li><a href="shop-landing-page-classic.php">LANDING PAGE (CLASSIC)</a></li>
						<li><a href="product-category.php">CATEGORY WITH SIDEBAR</a></li>
						<li><a href="product-page.php">PRODUCT PAGE</a></li>
						<li><a href="product-page-no-sidebar.php">PRODUCT (NO SUBHEADER)</a></li>
						<li><a href="cart.php">SHOPPING CART</a></li>
						<li><a href="checkout.php">CHECKOUT PROCESS</a></li>
						<li><a href="my-account.php">MY ACCOUNT</a></li>
					</ul>
				</li>
				<li class="menu-item-has-children menu-item-mega-parent"><a href="#">PAGES</a>
					<ul class="hg_mega_container container clearfix">
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title">The Company</a>
							<ul class="clearfix">
								<li><a href="about-us.php">ABOUT US</a></li>
								<li><a href="about-us-alt.php">ABOUT US - ALT</a></li>
								<li><a href="about-me.php">ABOUT ME</a></li>
								<li><a href="contact-us.php">CONTACT US</a></li>
								<li><a href="our-services.php">OUR SERVICES</a></li>
								<li><a href="our-team.php">OUR TEAM</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title">Work &amp; Stories</a>
							<ul class="clearfix">
								<li><a href="blog-post.php">BLOG POST</a></li>
								<li><a href="photo-gallery.php">PHOTO GALLERY</a></li>
								<li><a href="photo-gallery-alt.php">PHOTO GALLERY ALT.</a></li>
								<li><a href="portfolio-item.php">PORTFOLIO ITEM</a></li>
								<li><a href="testimonials.php">TESTIMONIALS</a></li>
								<li><a href="agency-product-page.php">AGENCY - PRODUCT</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title">Dynamics</a>
							<ul class="clearfix">
								<li><a href="historic.php">HISTORIC</a></li>
								<li><a href="faq.php">F.A.Q.</a></li>
								<li><a href="process.php">PROCESS</a></li>
								<li><a href="careers.php">CAREERS</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title">System</a>
							<ul class="clearfix">
								<li><a href="404.php">404 PAGE</a></li>
								<li><a href="coming-soon.php">COMING SOON / OFFLINE</a></li>
								<li><a href="page-without-sidebar.php">PAGE WITHOUT SIDEBAR</a></li>
								<li><a href="page-with-sidebar.php">PAGE WITH SIDEBAR</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="menu-item-has-children menu-item-mega-parent"><a href="#">ELEMENTS</a>
					<ul class="hg_mega_container container clearfix">
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title zn_mega_title_hide">Col</a>
							<ul class="clearfix">
								<li><a href="elements-screenshots-box.php">SCREENSHOT BOX</a></li>
								<li><a href="elements-grid-photo-gallery.php">GRID PHOTO GALLERY</a></li>
								<li><a href="elements-grid-photo-gallery-full-width.php">GRID PHOTO GALLERY FULL-WIDTH</a></li>
								<li><a href="elements-photo-gallery-alt.php">PHOTO GALLERY ALTERNATIVE</a></li>
								<li><a href="elements-recent-work.php">RECENT WORK</a></li>
								<li><a href="elements-latest-posts.php">LATEST POSTS</a></li>
								<li><a href="elements-devices.php">DEVICES ELEMENT</a></li>
								<li><a href="elements-media-container.php">MEDIA CONTAINER</a></li>
								<li><a href="elements-media-container-custom-content.php">MEDIA CONTAINER ALT.</a></li>
								<li><a href="elements-google-map.php">GOOGLE MAP</a></li>
								<li><a href="elements-search-box.php">SEARCH BOX</a></li>
								<li><a href="elements-diagram.php">DIAGRAM ELEMENT</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title zn_mega_title_hide">Col</a>
							<ul class="clearfix">
								<li><a href="elements-action-box.php">ACTION BOX</a></li>
								<li><a href="elements-big-social.php">BIG SOCIAL BLOCKS</a></li>
								<li><a href="elements-call-out-banner.php">CALL-OUT BANNER</a></li>
								<li><a href="elements-partners-testimonials.php">PARTNERS &amp; TESTIMONIALS</a></li>
								<li><a href="elements-circle-title-box.php">CIRCLE TITLE BOX</a></li>
								<li><a href="elements-historic-element.php">HISTORIC ELEMENTS</a></li>
								<li><a href="elements-hover-boxes.php">HOVER BOXES</a></li>
								<li><a href="elements-hover-icons.php">HOVER ICONS</a></li>
								<li><a href="elements-services.php">SERVICES BOXES</a></li>
								<li><a href="elements-image-boxes-carousel.php">IMAGE BOXES CAROUSEL</a></li>
								<li><a href="elements-video-box.php">VIDEO BOX</a></li>
								<li><a href="elements-team-carousel.php">TEAM BOXES CAROUSEL</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title zn_mega_title_hide">Col</a>
							<ul class="clearfix">
								<li><a href="elements-icon-box.php">ICON BOX</a></li>
								<li><a href="elements-icon-box-grid.php">GRID ICON BOXES</a></li>
								<li><a href="elements-image-box.php">IMAGE BOX</a></li>
								<li><a href="elements-steps-box.php">STEPS BOXES</a></li>
								<li><a href="elements-info-box.php">INFO BOX</a></li>
								<li><a href="elements-statistics.php">STATISTICS</a></li>
								<li><a href="elements-stage-and-icon-boxes.php">STAGE &amp; ICON BOXES</a></li>
								<li><a href="elements-team-boxes.php">TEAM BOXES</a></li>
								<li><a href="elements-price-list.php">PRICE LIST</a></li>
								<li><a href="elements-progress-bars.php">PROGRESS BARS</a></li>
								<li><a href="elements-image-boxes-carousel-alt.php">IMAGE BOXES CAROUSEL - ALT</a></li>
								<li><a href="elements-partners-testimonials-fancy.php">TESTIMONIALS FANCY</a></li>
							</ul>
						</li>
						<li class="menu-item-has-children col-sm-3"><a href="#" class="zn_mega_title zn_mega_title_hide">Col</a>
							<ul class="clearfix">
								<li><a href="elements-system-elements.php">SYSTEM ELEMENTS</a></li>
								<li><a href="elements-tabs.php">TABS</a></li>
								
								<li><a href="elements-parallax-section.php">PARALLAX SECTION + CAROUSEL</a></li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
        );
    }
}