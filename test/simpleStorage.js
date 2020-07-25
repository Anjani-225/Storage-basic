const SimpleStorage = artifacts.require('SimpleStorage');

contarct('SimpleStorage', () => {
	it('Should set the value of data variables', async () => {
		const simpleStorage = await SimpleStorage.deployed();
		await simpleStorage.set('this');
		const result = await SimpleStorage.get();
		assert(result === 'this');
	});
});