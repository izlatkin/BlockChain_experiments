const SimpleStorage = artifacts.require("SimpleStorage");
const truffleAssert = require('truffle-assertions');

contract('SimpleStorage', (accounts) => {

  it("should set the value of dat variable", async () => {
    const simpleStorage = await SimpleStorage.deployed();
    await simpleStorage.set('test_name');
    const result = await simpleStorage.get();
    assert(result === 'test_name');
  });


});
