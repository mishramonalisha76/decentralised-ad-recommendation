
import { ethers } from "ethers";
import { creator } from "./contracts/DeAdsCreator";
import { main } from "./contracts/DeAdsMain";
import { useProvider } from 'wagmi';
import { user } from "./contracts/DeAdsUser";

let provider;
const USERADD = "0x93C0545ef91dAEe2469c27f3311f91b768f5B871"

export const initiliaseWeb3 = async () => {
  if (window.ethereum) {
    // Modern DApp browsers
    provider = new ethers.providers.Web3Provider(window.ethereum)
    console.log(provider);
    try {
      await window.ethereum.enable();
    } catch (error) {
      // User denied account access
      alert("User denied");
    }
  } else if (window.web3) {
    // Legacy dapp browsers
     provider = new ethers.providers.Web3Provider(window.ethereum)
     console.log(provider);
  } else {
    // Non-dapp browsers
    alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
  // web3.eth.handleRevert = true
};

// export const checkChain = async () => {
//   if (!(provider.givenProvider.networkVersion == 80001)) {
//     window.alert("Please switch to Polygon Testnet");
//     return false;
//   }

//   return true;
// };

// export const fetchAccount = async (callback) => {
//   // web3.eth.handleRevert = true
//   web3.eth.getAccounts((error, result) => {
//     if (error) {
//       alert("Can't fetch account");
//     } else {
//       callback(result);
//     }
//   });
// };

// export const fetchBalance = async (walletAddress) => {
//   initiliaseWeb3();
//   const balance = await web3.eth.getBalance(walletAddress);
//   return web3.utils.fromWei(balance.toString(), "ether");
// };

// export const initiliaseCreatorContract = async () => {
//   let contract = new web3.eth.Contract(creator);
//   return contract;
// };

// export const initiliaseMainContract = async () => {
//   let contract = new web3.eth.Contract(main);
//   return contract;
// };
// export const initiliaseUserContract = async () => {
 
//   let contract = new ethers.Contract(USERADD, user, providers);
//   console.log(contract);
//   return contract;
// };
