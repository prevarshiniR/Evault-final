import web3 from './web3';
import DocumentStorage from './build/contracts/DocumentStorage.json';

const instance = new web3.eth.Contract(
  DocumentStorage.abi,
  '0x48c764f753EF2C06A4b0aC69d353C8DF7EFF1414'
);

export default instance;
