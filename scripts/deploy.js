// import ethers from Hardhat package
// import { ethers } from 'hardhat';
const hardhat = require('hardhat');

const { ethers } = hardhat;

async function deployContract() {
  try {
    // create an nftContract factory for instances of GameItem contract using ethers.getContractFactory() which is used to deploy new contracts
    const nftContract = await ethers.getContractFactory('GameItem');

    // deploy the contract
    const deployedContract = await nftContract.deploy();

    // log result to console
    console.log('Deployed contract ', deployedContract);

  } catch (error) {
    console.log('Warning: Error occured', error);
    process.exit(1);
  }
}

deployContract();