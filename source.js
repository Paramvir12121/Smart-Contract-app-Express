let account;
const connectMetamask = async () => {
  if (window.ethereum !== "undefined") {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    account = accounts[0];
    document.getElementById("accountArea").innerHTML = account;
  }
};

//2- connect to smart contract
const connectContract = async () => {
  const ABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_word",
          type: "string",
        },
      ],
      name: "changeamount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "farmerId",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "farmerName",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getamount",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lenderId",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lenderName",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  //contract address
  const Address = "0xEFF2586646eD17C6cDa258F205d52B089d927f9b";
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(ABI, Address);
  document.getElementById("contractArea").innerHTML =
    "Connected to smart contract";
};

//3-read data from smart contract
const readContract = async () => {
  const farmerName = await window.contract.methods.farmerName().call();
  const farmerId = await window.contract.methods.farmerId().call();
  const lenderName = await window.contract.methods.lenderName().call();
  const lenderId = await window.contract.methods.lenderId().call();
  //const amount = await window.contract.methods.amount().call();
  document.getElementById("farmerNameArea").innerHTML = farmerName;
  document.getElementById("farmerIdArea").innerHTML = farmerId;
  document.getElementById("lenderNameArea").innerHTML = lenderName;
  document.getElementById("lenderIdArea").innerHTML = lenderId;
  //document.getElementById("amountArea").innerHTML = amount;

  //4-change data in smart contract
};
