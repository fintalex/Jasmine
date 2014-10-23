describe('Computer', function() { // describe - описываем на объект
	beforeEach(function() { // beforeEach - выполняется перед каждым тестом
		Computer.currentMemory = 2; // устанавливаем значение по умолчанию, сбрасываем
		Computer.currentSpace = 1000; // устанавливаем значение по умолчанию, сбрасываем
	});

	// описываем отдельно тесты для метода мемори
	// но можно и по другому делить описания
	describe('When Computer increse Computer memory', function() { // тест
		it('should increse its operation memory', function() {
			expect(Computer.addMemory(6)).toEqual(8); //  - проверка добавления памяти- передаем мнимые данные
		});

		it('should show its memory and equal 2GB ' , function() { // тест
			expect(Computer.currentMemory).toBeDefined(); //  - проверка что currentMemory определена 
			expect(Computer.currentMemory).toEqual(2); // и currentMemory равна 2
		});

		it ('should forbid add the memory more then 2 plats', function() { // тест 
			expect(Computer.addMemory(6,8) ).toEqual(16); // - при добавлении двух слотов по 6 и 8 получаем 16 (тоже передаем мнимые данные для метода)
			expect(Computer.addMemory(6,8,4) ).toBe(false); // и передаем 3 слота, но в ответ получаем "болт" так как, можно устанавливать только 2 слота памяти
		});
	});
	
	describe('When Computer instal program', function () { // тест 
		it ('should be able to instal program', function() {
			// проверка при при инсталляции двух программ что получим труе, тоесть все четвко установится
			expect( Computer.instal(
				{name: 'GTA4', space: 600, installed: false}, 
				{name: 'PhotoShop', space: 400, installed: false} ) ).toBe(true);
		});	

		it ('should forbid instal program when free space is empty', function() { // тест
			// проверка при установке 3 ПО - для последнего ПО не хватает памяти (и здесь тоже передаем мнимые выдуманные ПО)
			expect( Computer.instal(
				{name: 'GTA4', space: 600, installed: false},  
				{name: 'PhotoShop', space: 400, installed: false}, 
				{name: 'sublime', space: 100, installed: false})).toBe(false);
		});
	});

	it ('should be able format hard drive', function () { // тест
		Computer.instal({name: 'GTA4', space: 600, installed: false}); // как бы перед началом цикла поставим програмулинку одну 

		console.log(Computer.currentSpace); // посмотрим что наша память подуменьшилась чутка

		Computer.formatDrive(); // отформатируем диск

		expect(Computer.currentSpace).toEqual(1000); // и проверим что наша память должна стать обратно 1000 ГБ
	});
	
});