<div id="services-sidebar">
	<div id="close-sidebar">
		<span>
			<i class="fas fa-chevron-left" id="chevron-left"></i>
		</span>
	</div>
	<div id="services-sidebar-body">
		<h1 id="sidebar-title">test</h1>
		<form action="#" method="post" id="client-service-form" name="clientForm" data-url="<?php echo admin_url('admin-ajax.php'); ?>">
		<!-- name field -->
			<div class="field">
				<label class="label">Name</label>
				<div class="control has-icons-left has-icons-right">
					<input class="input" type="text" placeholder="Your Name" id="client-name" name="Name">
					<span class="icon is-small is-left">
						<i class="fas fa-user"></i>
					</span>
					<span class="icon is-small is-right">
						<i class="fas fa-check" id="name-status"></i>
					</span>
				</div>
				<p class="help is-danger" id="name-error">Error goes here.</p>
			</div>

			<!-- email address -->
			<div class="field">
				<label class="label">Email</label>
				<div class="control has-icons-left has-icons-right">
					<input class="input" type="email" placeholder="you@email.com" id="client-mail" name="Mail">
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
					<span class="icon is-small is-right">
						<i class="fas fa-check" id="mail-status"></i>
					</span>
				</div>
				<p class="help is-danger" id="mail-error">Please enter a valid email.</p>
			</div>

			<!-- budget -->
			<div class="field">
				<label class="label">Budget</label>
				<div class="control has-icons-left has-icons-right" id="client-budget-area">
					<input class="input" type="text" placeholder="50" id="client-budget" name="Budg">
					<span class="icon is-small is-left">
						<i class="fas fa-dollar-sign"></i>
					</span>
					<span class="icon is-small is-right">
						<i class="fas fa-check" id="budget-status"></i>
					</span>
				</div>
				<p class="help is-danger" id="budget-error">Please specify your budget. ($10 minimum)</p>
			</div>

			<div class="field">
				<label class="label">Details</label>
				<div class="control">
					<textarea class="textarea" placeholder="Provide the neccessary details here." id="client-detail" name="Desc"></textarea>
					<p class="help is-danger" id="detail-error">Should be atleast 12 characters.</p>
				</div>
			</div>

			<div class="field">
				<div class="control">
					<label class="checkbox">
						<input type="checkbox" value="true" checked='checked' id='client-agree' name="client-agree">
						I agree to the <a href="#">terms and conditions</a>
					</label>
				</div>
			</div>

			<div class="field is-grouped">
				<div class="control">
					<button class="button is-medium has-background-dark has-text-light has-font-weight-bold" id="client-submit" type="submit" disabled="disabled">Submit</button>
				</div>
			</div>
		</form>


	</div>
</div>
<div id="page-overlay"></div>