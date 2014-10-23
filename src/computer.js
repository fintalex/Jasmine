window.Computer = {
	currentMemory: 2,
	currentSpace: 1000,
	addMemory: function() {
		var memory = this.currentMemory;
		
		if (arguments.length > 2){
			return false;
		}

		for (var i = 0, len = arguments.length; i < len ; i++) {
			memory += arguments[i];
		};

		this.currentMemory = memory;
		return this.currentMemory;
	}, 
	instal: function () {
		for (var i= 0, len = arguments.length; i < len; i++) {
			if (arguments[i].space <= this.currentSpace){

				this.currentSpace -= arguments[i].space;
				arguments[i].installed = true;
			}
		}

		for (var i= 0, len = arguments.length; i < len; i++) {
			if (arguments[i].installed == false) {
				return false;
			}
		}

		return true;
	},
	formatDrive: function(){
		this.currentSpace = 1000;
	}
}