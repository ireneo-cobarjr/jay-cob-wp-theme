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
						<div class="is-flex-mobile is-hidden-tablet" style="margin-bottom: 5em">
							<?php get_template_part('template-parts/components/jcWP-cube'); ?>
						</div>
						<div class="buttons are-large is-centered">
							<button class="button has-background-success has-text-light" id="go-to-services-section">Services</button>
							<button class="button has-background-dark has-text-light">Testimonials</button>
							<button class="button has-background-dark has-text-light">About</button>
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
	<div class="columns is-vcentered is-centered jcWP-screensize">
		<div class="column jcWP-100vh is-8">
			<div id="service-description-area">
				<div class="service-description">
					<div id="service-overlay"></div>
					<div class="is-hidden-tablet" id="mobile-service-list">
						<div class="select is-primary">
						  <select class="has-background-dark has-text-light">
							<option class="service-selected service-name" data-svc="website">WordPress Website</option>
							<option class="service-item service-name" data-svc="theme">Custom WordPress Theme</option>
							<option class="service-item service-name" data-svc="wix">Wix to WordPress</option>
							<option class="service-item service-name" data-svc="mockup">Mock-up to HTML</option>
							<option class="service-item service-name" data-svc="basic">Basic Website</option>
							<option class="service-item service-name" data-svc="others">Others</option>
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
					<li class="has-text-grey-light service-item service-name" data-svc="theme">Custom WordPress Theme</li>
					<li class="has-text-grey-light service-item service-name" data-svc="wix">Wix to WordPress</li>
					<li class="has-text-grey-light service-item service-name" data-svc="mockup">Mock-up to HTML</li>
					<li class="has-text-grey-light service-item service-name" data-svc="basic">Basic Website</li>
					<li class="has-text-grey-light service-item service-name" data-svc="others">Others</li>
				</ul>
			</div>
		</div>
	</div>
</section>
