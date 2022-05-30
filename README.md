# BlockChain_experiments

Test Driven Solidity with Truffle

### Prerequisites

1. `brew install npm`
2. `npm install truffle -g`
3. `npm install ganache-cli -g`


### Configuration
`truffle.js` - This is the configuration file that contains information such as development network settings for the project. This file will be used to configure the development network.

`contracts` folder - this folder is a container for all of our smart contracts. Truffle goes to the contracts folder and looks for the compatible files ( .sol ) to compile while compiling the project. 

`test`
All the tests — either written in Solidity or JavaScript — will go to this folder.
Truffle will create a build folder to hold artifacts of the compiled contracts. We will see this folder when we run `$ truffle compile` command but before that, we need to set up our private network first.


## Preparing the Test Environment
run `ganache-cli`
add corresponding information to `truffle.js`

for example:
```
module.exports = {
  networks:{
    development:{
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // match any netwrok id
    }
  }
};
```


## Run tests
`truffle test`

example of execution
```
  Contract: SimpleContract
    ✔ should return the name
    ✔ should return change the name (69ms)
    ✔ should execute only by the owner (1051ms)
    ✔ should fail (1329ms)
    ✔ should check the type of the event (1060ms)
    ✔ should emit with correct paremeters (1227ms)
    Events emitted in tx 0xb54567002c89c17348b0bc777331046e80364e5a094978311ce993d1378f1665:
    ----------------------------------------------------------------------------------------
    NameEvent(0: hello event, __length__: 1, evPram: hello event)
    ----------------------------------------------------------------------------------------

    ✔ should print the event paremeters (1092ms)


  7 passing (6s)
```

run single test: `truffle test ./test/simple_contract.js`