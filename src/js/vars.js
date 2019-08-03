const Services = {
	website: {
		title     : 'WordPress Website',
		breakdown : 'Website',
		desc      : 'A full Website on WordPress. This already includes a Custom Personalized Theme and guaranteed to be responsive and mobile ready. Name the pages you need and the sections that are important to you.',
		delivery  : '7 Days'
	},
	theme: {
		title     : 'WordPress Theme',
		breakdown : 'Theme',
		desc      : 'A full WordPress Theme. Customizable footers and header, fonts and colors based on your brand, you have it. Guaranteed to be responsive and mobile ready.',
		delivery  : '5 Days'
	},
	wix: {
		title     : 'Wix to WordPress',
		breakdown : 'Wix',
		desc      : 'If you need your Wix Site to be converted to a WordPress Website, I have you covered. Guaranteed to be responsive and mobile ready. Just provide the link and we have a deal.',
		delivery  : '3 Days'
	},
	mockup: {
		title     : 'Mock-up to HTML',
		breakdown : 'Mock-up',
		desc      : 'You have a design created using Photoshop, Figma, Sketch, Moqups, or any other wireframe that you need to be recreated as a webpage or UI component? I can do that for you.',
		delivery  : '1 Day'
	},
	basic: {
		title     : 'Basic Website',
		breakdown : 'Basic',
		desc      : 'You are a student or you really just want your website created using Vanilla HTML-CSS-Javascript, with or without any frameworks I can do that for you and its guaranteed to be responsive and mobile ready.',
		delivery  : '1 Day'
	},
	others: {
		title     : 'Others',
		breakdown : 'Others',
		desc      : 'Your Website / Project needs to be on a framework, Laravel, Vue.js or anything else. Or its something more specific that you need, Just Provide the details and lets talk about it.',
		delivery  : 'Depends on the project'
	}
}


const validMail = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

const svcForm = {
	name   :  0,
	mail   :  0,
	budget :  0,
	detail :  0,
	agree  :  1,
	status : function () {
		return this.name + this.mail + this.budget + this.detail + this.agree
	},
	reset  : function () {
		this.name   = 0
		this.mail   = 0
		this.budget = 0
		detail      = 0
		agree       = 1
	}
}

function Notification () {
	this.success = function () {
		document.getElementById('notification-modal').classList.remove('is-danger', 'is-warning')
		document.getElementById('notification-modal').classList.add('is-success')
		document.getElementById('notification-message').classList.add('has-text-light')
		return this
	}
	this.warning = function() {
		document.getElementById('notification-modal').classList.remove('is-success', 'is-danger')
		document.getElementById('notification-modal').classList.add('is-warning')
		document.getElementById('notification-message').classList.remove('has-text-light')
		return this
	}
	this.msg = function(m) {
		document.getElementById('notification-message').innerHTML = m
	}
	this.show = function() {
		document.getElementById('modal-body').classList.add('is-active')
	}
	this.close = function() {
		document.getElementById('modal-body').classList.remove('is-active')
	}
}

var notify = new Notification()
const closeNotif = document.getElementById('close-modal-notification')
closeNotif.addEventListener('click', () => notify.close())
