/**
* @type import('hardhat/config').HardhatUserConfig
*/

require("@nomiclabs/hardhat-ethers");
require("./scripts/deploy.js");
require('dotenv').config();

const { ALCHEMY_MUMBAI_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "local",
  networks: {
    hardhat: {},
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mumbai: {
      url: `${ALCHEMY_MUMBAI_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}