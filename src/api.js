import Web3 from "web3";
let isItConnected = false;
// const chainId = 137 // Polygon Mainnet
const networks = {
  bsc: {
    chainId: `0x${Number(303).toString(16)}`,
    chainName: "WYZ Mainnet",
    nativeCurrency: {
      name: "WYZTH",
      symbol: "WYZTH",
      decimals: 18,
    },
    rpcUrls: [
      "https://rpc-mainnet3.wyzthchain.org",
      "https://data-seed-prebsc-1-s3.binance.org:8545/"
      // "https://polygon-rpc.com"
    ],
    blockExplorerUrls: ["https://legacy.wyzthscan.org/"],
  },
};
const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName]
        },
      ],
    });
  } catch (err) {
    console.log("not found", err);
  }
};
const handleNetworkSwitch = async (networkName) => {
  await changeNetwork({ networkName });
};
let accounts;
const getAccounts = async () => {
  const web3 = window.web3;
  try {
    accounts = await web3.eth.getAccounts();
    return accounts;
  } catch (error) {
    console.log("Error while fetching acounts: ", error);
    return null;
  }
};
export const disconnectWallet = async () => {
  await window.ethereum.request({
    method: "eth_requestAccounts",
    params: [{ eth_accounts: {} }],
  });
  console.log("disconnect");
};
export const loadWeb3 = async () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      await window.web3.eth.getChainId((err, netId) => {
        // console.log("networkId==>", netId);
        switch (netId.toString()) {
          case "97":
            isItConnected = true;
            break;
          // case "137":
          //   isItConnected = true;
          //   break;
          default:
            handleNetworkSwitch("bsc");
            isItConnected = false;
        }
      });
      if (isItConnected == true) {
        let accounts = await getAccounts();
        return accounts[0];
      } else {
        let res = "Wrong Network";
        return res;
      }
    } else {
      let res = "No Wallet";
      return res;
    }
  } catch (error) {
    let res = "No Wallet";
    return res;
  }
};