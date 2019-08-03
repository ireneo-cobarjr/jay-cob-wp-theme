<?php settings_errors(); ?>
<form action="options.php" method="post">
	<?php settings_fields('jcWP-mail-option'); ?>
	<?php do_settings_sections('jcWP_mail'); ?>
	<?php submit_button(); ?>
</form>