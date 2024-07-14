import web3 from './web3';
import DocumentStorage from './build/contracts/DocumentStorage.json';

const instance = new web3.eth.Contract(
  DocumentStorage.abi,
  '0x3c329516f6A9efA9Ce1Fe0D702E9fA72537c02e2'
);

export default instance;
