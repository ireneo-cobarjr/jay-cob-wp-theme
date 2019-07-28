
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