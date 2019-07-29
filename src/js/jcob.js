
var jumpToServices = document.getElementById('go-to-services-section')

jumpToServices.addEventListener('click', () => {
	Jump('#services-section')
})


//////////////////////////////////
///// Scene Animations ///////////
//////////////////////////////////
var svcOut = new Scene(
	{
		'#service-title' : {
			0  : 'opacity: 1 ; transform: translate(0,0)',
			0.2: 'opacity: .5; transform: translate(0,5px)',
			0.4: 'opacity: 0; transform: translate(0,20px)',
		},
		'#service-background' : {
			0  : 'opacity: 1 ; transform: translate(0,0)',
			0.2: 'opacity: .5; transform: translate(0,5px)',
			0.4: 'opacity: 0; transform: translate(0,20px)',
		},
		'#service-background': {
			0  : 'color: #1f292e',
			0.2: 'color: #263238',
			0.4: 'color: #263238',
		},
		'#service-overlay': {
			0     : 'top: -105%',
			0.35  : 'top: 0',
		}
	},
		{
		    selector: true,
		    fillMode: 'forwards',
		    direction: 'alternate',
		    delay: 0.02,
		    iterationCount: 2
	  	}
	)


//////////////////////////////////
//////////////////////////////////

//service animation on desktop
var svcTitle = document.getElementById('service-title')
var svcDesc  = document.getElementById('service-description')
var svcBackg = document.getElementById('service-background')
var services = document.getElementsByClassName('service-name')
Array.prototype.forEach.call(services, service => {
	service.addEventListener('click', () => {
		var svcItems = Services[service.getAttribute('data-svc')]
		setTimeout( () => {
			svcTitle.innerHTML = svcItems.title
			svcBackg.innerHTML = svcItems.breakdown
			svcDesc.innerHTML  = svcItems.desc
		}, 405)
		svcOut.playCSS()

		Array.prototype.forEach.call(services, svc => {
			svc.classList.remove('service-selected')
			svc.classList.add('service-item')
		})
		service.classList.add('service-selected')
		service.classList.remove('service-item')


	})
})

//service animation on mobile
//sidebar validation
const nameError        = document.getElementById('name-error')
const nameStatus       = document.getElementById('name-status')
const mailError        = document.getElementById('mail-error')
const mailStatus       = document.getElementById('mail-status')
const budgetError      = document.getElementById('budget-error')
const budgetStatus     = document.getElementById('budget-status')
const detailError      = document.getElementById('detail-error')
const clientName       = document.getElementById('client-name')
const clientMail       = document.getElementById('client-mail')
const clientBudget     = document.getElementById('client-budget')
const clientDetail     = document.getElementById('client-detail')
const clientAgree      = document.getElementById('client-agree')
const clientSubmit     = document.getElementById('client-submit')

document.addEventListener('input', function (ev) {


	// Only run on our select menu
	if (ev.target.id == 'services-mobile') {
		var svcItems = Services[(ev.target.options[event.target.selectedIndex]).getAttribute('data-svc')]
		setTimeout( () => {
			svcTitle.innerHTML = svcItems.title
			svcBackg.innerHTML = svcItems.breakdown
			svcDesc.innerHTML  = svcItems.desc
		}, 405)
		svcOut.playCSS()
	} else if (ev.target.id == 'client-name') {
		var s = ev.target.value
		if (s.length < 3) {
			nameStatus.style.opacity = 1
			nameStatus.classList.add('fa-exclamation-triangle')
			nameStatus.classList.remove('fa-check')
			nameError.innerHTML = 'Should be atleast 3 letters.'
			nameError.style.opacity = 1
			svcForm.name = 0
			if (svcForm.status() == 5) {
				clientSubmit.disabled = false
			} else {
				clientSubmit.disabled = true
			}
		} else {
			if (/[^a-z\s]/i.test(s)) {
				nameStatus.style.opacity = 1
				nameStatus.classList.add('fa-exclamation-triangle')
				nameStatus.classList.remove('fa-check')
				nameError.innerHTML = 'Name should only be letters.'
				nameError.style.opacity = 1
				svcForm.name = 0
				if (svcForm.status() == 5) {
					clientSubmit.disabled = false
				} else {
					clientSubmit.disabled = true
				}
			} else {
				nameStatus.style.opacity = 1
				nameStatus.classList.remove('fa-exclamation-triangle')
				nameStatus.classList.add('fa-check')
				nameError.style.opacity = 0
				svcForm.name = 1
				if (svcForm.status() == 5) {
					clientSubmit.disabled = false
				} else {
					clientSubmit.disabled = true
				}
			}
		}
	} else if (ev.target.id == 'client-mail') {
		var s = ev.target.value
		if (validMail.test(s.trim())) {
			mailStatus.style.opacity = 1
			mailStatus.classList.add('fa-check')
			mailStatus.classList.remove('fa-exclamation-triangle')
			mailError.style.opacity = 0
			svcForm.mail = 1
			if (svcForm.status() == 5) {
				clientSubmit.disabled = false
			} else {
				clientSubmit.disabled = true
			}
		} else {
			mailStatus.style.opacity = 1
			mailStatus.classList.remove('fa-check')
			mailStatus.classList.add('fa-exclamation-triangle')
			mailError.style.opacity = 1
			svcForm.mail = 0
			if (svcForm.status() == 5) {
				clientSubmit.disabled = false
			} else {
				clientSubmit.disabled = true
			}
		}
	} else if (ev.target.id == 'client-detail') {
		var s = ev.target.value
		if (s.length < 12) {
			detailError.style.opacity = 1
			svcForm.detail = 0
			if (svcForm.status() == 5) {
				clientSubmit.disabled = false
			} else {
				clientSubmit.disabled = true
			}
		} else {
			detailError.style.opacity = 0
			svcForm.detail = 1
			if (svcForm.status() == 5) {
				clientSubmit.disabled = false
			} else {
				clientSubmit.disabled = true
			}
		}
	} else if (ev.target.id == 'client-budget') {
		var s = ev.target.value
		var x = s.replace(/[^0-9]/g, '')
		ev.target.value = x
		if (x.length < 2) {
			budgetError.style.opacity = 1
			budgetStatus.style.opacity = 1
			budgetStatus.classList.add('fa-exclamation-triangle')
			budgetStatus.classList.remove('fa-check')
			svcForm.budget = 0
			if (svcForm.status() == 5) {
				clientSubmit.disabled = false
			} else {
				clientSubmit.disabled = true
			}
		} else {
			budgetError.style.opacity = 0
			budgetStatus.style.opacity = 1
			budgetStatus.classList.add('fa-check')
			budgetStatus.classList.remove('fa-exclamation-triangle')
			svcForm.budget = 1
			if (svcForm.status() == 5) {
				clientSubmit.disabled = false
			} else {
				clientSubmit.disabled = true
			}
		}
	}
		else {
		return
	}

}, false);

clientAgree.addEventListener('change', ev => {
	if (ev.target.checked) {
		svcForm.agree = 1
		if (svcForm.status() == 5) {
			clientSubmit.disabled = false
		} else {
			clientSubmit.disabled = true
		}
	} else {
		svcForm.agree = 0
		if (svcForm.status() == 5) {
			clientSubmit.disabled = false
		} else {
			clientSubmit.disabled = true
		}
	}
})

//form submission

const svcClientForm = document.getElementById('client-service-form')
svcClientForm.addEventListener('submit', ev => {
	ev.preventDefault()
	var data = {
		action: 'get_client_service_request',
		name: document.clientForm.Name.value,
		mail: document.clientForm.Mail.value,
		budg: document.clientForm.Budg.value,
		desc: document.clientForm.Desc.value,
	}

	var req = new sXHR(svcClientForm.getAttribute('data-url'))
	req.send(data).response()

		document.clientForm.Name.value = ''
		document.clientForm.Mail.value = ''
		document.clientForm.Budg.value = ''
		document.clientForm.Desc.value = ''


})

//////////////////////////////////
///// sidebar ////////////////////
//////////////////////////////////
const availBtn     = document.getElementById('service-avail')
const svcSidebar   = document.getElementById('services-sidebar')
const closeSidebar = document.getElementById('close-sidebar')
const pageOverlay  = document.getElementById('page-overlay')

availBtn.addEventListener('click', () => {
	svcSidebar.classList.add('show-sidebar')
	pageOverlay.classList.add('cover')				
})

closeSidebar.addEventListener('click', () => {
	svcSidebar.classList.remove('show-sidebar')
	pageOverlay.classList.remove('cover')				
})



console.log(document.cookie)


window.onload = () => {
	clientName.value   = ''
	clientMail.value   = ''
	clientBudget.value = ''
	clientDetail.value = ''
}

