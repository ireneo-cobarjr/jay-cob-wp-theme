
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
		}, 402)
		svcOut.playCSS()

			svcBackg.innerHTML = svcItems.breakdown
			svcDesc.innerHTML  = svcItems.desc

		Array.prototype.forEach.call(services, svc => {
			svc.classList.remove('service-selected')
			svc.classList.add('service-item')
		})
		service.classList.add('service-selected')
		service.classList.remove('service-item')


	})
})
