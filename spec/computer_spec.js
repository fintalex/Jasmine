describe('Computer', function() {
	beforeEach(function() {
		Computer.currentMemory = 2;
		Computer.currentSpace = 1000;
	});

	describe('When Computer increse Computer memory', function() {
		it('should increse its operation memory', function() {
			expect(Computer.addMemory(6)).toEqual(8);
		});

		it('should show its memory and equal 2GB ' , function() {
			expect(Computer.currentMemory).toBeDefined();
			expect(Computer.currentMemory).toEqual(2);
		});

		it ('should forbid add the memory more then 2 plats', function() {
			expect(Computer.addMemory(6,8) ).toEqual(16);
			expect(Computer.addMemory(6,8,4) ).toBe(false);
		});
	});
	
	describe('When Computer instal program', function () {
		it ('should be able to instal program', function() {
			expect( Computer.instal({name: 'GTA4', space: 600, installed: false}, {name: 'PhotoShop', space: 400, installed: false} ) ).toBe(true);
		});	

		it ('should forbid instal program when free space is empty', function() {
			expect( Computer.instal({name: 'GTA4', space: 600, installed: false},  {name: 'PhotoShop', space: 400, installed: false}, {name: 'sublime', space: 100, installed: false})).toBe(false);
		});
	});

	it ('should be able format hard drive', function () {
		Computer.instal({name: 'GTA4', space: 600, installed: false});

		console.log(Computer.currentSpace);

		Computer.formatDrive();

		expect(Computer.currentSpace).toEqual(1000);
	});
	
});