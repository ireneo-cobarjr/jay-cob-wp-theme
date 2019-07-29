(function(window, factory){
	(window.sXHR = factory);
})(window, function(link) {
	function post(l,params,cb) {

		var p = setParams(params);
		console.log(p);
		var hr = new XMLHttpRequest();
		hr.open("POST", l, true);
		hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		hr.onreadystatechange=function() {
    		if (this.readyState == 4 && this.status == 200) {
      			var resp = this.responseText;
      			cb(resp);
    		} else if (this.status != 200){
    			console.error(`XHR status is ${this.status}`);
    			console.error(`${this.responseText}`);
    		}
  		};

		hr.send(p); 
	}
	var x = function () {}
	function setParams (p) {
		var arr = Object.keys(p);
		var args = '';
		arr.forEach(function (a){
			args = `${args}${a}=${p[a]}&`;
		});
		return args.slice(0, -1);
	}
	return new function () {
		Object.defineProperty(this, 'link', {value: link, enumerable: false, writable: true});
		Object.defineProperty(this, 'params', {value: {}, enumerable: true, writable: true});
		this.send = function (p) {
			//p should be an object
			this.params = p;
			return this;
		};
		this.response = function (cb = x) {
			post(this.link,this.params,cb);
		};
	};
});