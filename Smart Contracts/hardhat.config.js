require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const API_KEY ='ZYW8TH6YDCFS18VQ7V6YVM9H986ZEJ3VAA'
const ROPSTEN_ETHEREUM = "https://ropsten.infura.io/v3/beddc520fdc345acb7728c205d89f90d"
const PRIVATE_KEY ='df0a3924bfad9480b572e5c3006cf7b98dcbb07ddcce4301cd29a37215327750'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths:{
  artifacts:'../src/artifacts',
  },
  networks:{
    hardhat:{
      chainId:1337,
    },
    ropsten:{
      url: ROPSTEN_ETHEREUM,
      accounts: [PRIVATE_KEY]
    },
  },
  etherscan :{
    apiKey:{
      ropsten: API_KEY
    } 
  }
};
