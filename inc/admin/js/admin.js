window.onload = function() {
	const jCWPport = document.getElementById('mail-port');
	document.getElementById('mail_smtp_encryption_none').addEventListener('change', function(ev){
		if(ev.target.checked) {
			jCWPport.value = 25;
		}
	});
	document.getElementById('mail_smtp_encryption_ssl').addEventListener('change', function(ev){
		if(ev.target.checked) {
			jCWPport.value = 465;
		}
	});
	document.getElementById('mail_smtp_encryption_tsl').addEventListener('change', function(ev){
		if(ev.target.checked) {
			jCWPport.value = 587;
		}
	});
}