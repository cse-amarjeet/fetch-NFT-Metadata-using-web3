const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

const provider = new HDWalletProvider(
  "phase of meta mask",
  // remember to change this to your own phrase!
  "infura ethereum node provider"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);
};
deploy();
