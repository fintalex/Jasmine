// создаем глобальную переменную КОмпутер

window.Computer = {
	currentMemory: 2, // свойство - количество памяти в GB
	currentSpace: 1000, // свойство - количество памяти
	addMemory: function() { // метод - добавление слотов памяти, один параметр - один слот
		var memory = this.currentMemory; // кэшируем нашу память
		
		if (arguments.length > 2){  // проверка если слотов больше двух передали - то нафиг, у нас только два слота
			return false;
		}

		for (var i = 0, len = arguments.length; i < len ; i++) {
			memory += arguments[i]; // если все ок - увеличиваем нашу память
		};

		this.currentMemory = memory; // присваиваем нашей памяти компа - память с которой работали
		return this.currentMemory; // возвращаем текущую память
	}, 
	instal: function () { // метод установки ПО, также может принимать несколько объектов ПО
		for (var i= 0, len = arguments.length; i < len; i++) {
			if (arguments[i].space <= this.currentSpace){ // если у нас есть свободное пространство ,то мы можем установить ПО

				this.currentSpace -= arguments[i].space; // уменьшаем свободное пространство на диске компа
				arguments[i].installed = true; // устанавливаем текущему объекту свойсво - установлен
			}
		}

		for (var i= 0, len = arguments.length; i < len; i++) {
			if (arguments[i].installed == false) { // проверяем все ли по установлены
				return false; // если хоть одно ПО не установилось - возвращаем false
			}
		}

		return true; // если все четко установилось - возвращаем true
	},
	formatDrive: function(){ // мутод очистки памяти компа - форматирование диска
		this.currentSpace = 1000;
	}
}