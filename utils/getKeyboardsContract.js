import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x5a4B094C3A8218DA8018DbD49386A4b122Fadc41';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
