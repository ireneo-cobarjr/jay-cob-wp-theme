<?php get_template_part('template-parts/homepage/services-sidebar'); ?>
<section class="has-background-primary no-overflow">
	<div class="yellow-section">
		<div class="container">
			<div class="columns jcWP-100vh is-vcentered">
				<div class="column" id="mobile-no-padding">
					<div class="has-text-centered is-flex" id="homepage-slogan">
						<div>
							<p class="has-text-dark is-hidden-mobile">You dont need an alchemist to turn  "ideas" to a "website"</p>
							<h1 class="is-hidden-mobile">You Only need Me</h1>
						</div>
						<div class="social-buttons">
							<div id="fb">
								<?php get_template_part('template-parts/components/fb-btn'); ?>
							</div>
							<div id="tweeter">
								<?php get_template_part('template-parts/components/tweet-btn'); ?>
							</div>
						</div>
						<div class="is-flex-mobile is-hidden-tablet" style="margin-bottom: 5em">
							<?php get_template_part('template-parts/components/jcWP-cube'); ?>
						</div>
						<div class="buttons are-large is-centered">
							<button class="button has-background-success has-text-light" id="go-to-services-section">Services</button>
							<!-- <button class="button has-background-dark has-text-light">Testimonials</button> -->
							<button class="button has-background-dark has-text-light" id="go-to-about-section">About</button>
						</div>
					</div>
				</div>
				<div class="column is-hidden-mobile">
					<?php get_template_part('template-parts/components/jcWP-cube'); ?>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="has-background-dark" id="services-section">
	<div class="columns is-vcentered is-centered jcWP-screensize" id="services-adjust-height">
		<div class="column jcWP-100vh is-8">
			<div id="service-description-area">
				<div class="service-description">
					<div id="service-overlay"></div>
					<div class="is-hidden-tablet" id="mobile-service-list">
						<div class="select is-primary">
						  <select class="has-background-dark has-text-light" id="services-mobile">
							<option data-svc="website">WordPress Website</option>
							<option data-svc="theme">WordPress Theme</option>
							<option data-svc="wix">Wix to WordPress</option>
							<option data-svc="mockup">Mock-up to HTML</option>
							<option data-svc="basic">Basic Website</option>
							<option data-svc="others">Others</option>
						  </select>
						</div>
					</div>
					<div id="service-background">Website</div>
					<h2 class="has-text-light" id="service-title">WordPress Website</h2>
					<p class="has-text-light has-text-weight-bold" id="service-description">
						A full Website on WordPress. This already includes a Custom Personlized Theme. Name the pages you need and the sections that are important to you.
					</p>
					<button class="button has-background-success has-text-light is-medium" id="service-avail">Avail this Service</button>
				</div>
			</div>
		</div>
		<div class="column  jcWP-100vh is-4 has-background-grey-darker is-paddingless is-hidden-mobile">
			<div class="is-flex" id="services-list">
				<ul>
					<li class="has-text-grey-light service-selected service-name" data-svc="website">WordPress Website</li>
					<li class="has-text-grey-light service-item service-name" data-svc="theme">WordPress Theme</li>
					<li class="has-text-grey-light service-item service-name" data-svc="wix">Wix to WordPress</li>
					<li class="has-text-grey-light service-item service-name" data-svc="mockup">Mock-up to HTML</li>
					<li class="has-text-grey-light service-item service-name" data-svc="basic">Basic Website</li>
					<li class="has-text-grey-light service-item service-name" data-svc="others">Others</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="has-background-success-gradient" id="about-section">
	<div class="columns is-desktop">
		<div class="column is-one-third-desktop jcWP-50vh">
			<div class="card has-background-dark">
				<div class="card-content">
					<p class="title has-text-light">Ireneo Cobar Jr</p>
					<p class="subtitle has-text-light has-text-weight-bold">Web Developer</p>
					<div class="content">
						<div class="has-text-light has-text-weight-bold">
							<span class="icon">
							  <i class="fas fa-envelope has-text-light"></i>
							</span>
							ireneo@jay-cob.com
						</div>
						<div class="has-text-light has-text-weight-bold">
							<span class="icon">
							  <i class="fas fa-map-marker-alt has-text-light"></i>
							</span>
							Naic Cavite 4110 Philippines
						</div>
						<div class="has-background-primary">
							<div id="skill-stack">
								<span class="icon">
								  <i class="fas fa-laptop-code"></i>
								</span>
								Skill Stack
								<ul>
									<li>
										<span class="icon">
										  <i class="fab fa-vuejs has-text-dark"></i>
										</span>
										Vue.js
									</li>
									<li>
										<span class="icon">
										  <i class="fab fa-wordpress-simple has-text-dark"></i>
										</span>
										WordPress
									</li>
									<li>
										<span class="icon">
										  <i class="fab fa-laravel has-text-dark"></i>
										</span>
										Laravel
									</li>
									<li>
										<span class="icon">
										  <i class="fab fa-php has-text-dark"></i>
										</span>
										PHP
									</li>
									<li>
										<span class="icon">
										  <i class="fab fa-sass has-text-dark"></i>
										</span>
										Sass
									</li>
								</ul>
							</div>							
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="column jcWP-50vh adjust-from-tab-size">
			<div class="colums is-centered">
				<div class="column adjust-from-tab-size">
					<a href="https://jay-cob.com" id="about-brand">
						<?php get_template_part('/template-parts/components/jcWP-logo'); ?>
					    <h3 id="jcWP-banner" class="has-text-light">Jay Cob</h3>
					</a>
					<div class="content">
						<div class="" style="padding: 1.5em 1.75em">
							<p class="has-text-light has-text-justified has-text-weight-medium">
								As a Web Developer, the best way to show our skills is by having our own website.
							</p>
							<p class="has-text-light has-text-justified has-text-weight-medium">
								That's why I created <a class="has-text-light has-text-weight-bold" href="https://jay-cob.com">Jay-Cob.com</a>, a website built on <a class="has-text-light has-text-weight-bold" href="https://wordpress.org" target="_blank">WordPress</a>.
							</p>
							<p class="has-text-light has-text-justified has-text-weight-medium">
								No 3rd Party themes or plugins were used. All hand-coded,<br> even the SMTP email functionality.
							</p>
						</div>
						<div class="social-buttons">
							<div id="fb">
								<?php get_template_part('template-parts/components/fb-btn'); ?>
							</div>
							<div id="tweeter">
								<?php get_template_part('template-parts/components/tweet-btn'); ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
