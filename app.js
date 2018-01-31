var accounts;
var account;
var strData;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};
function setStatus1(message) {
  var status = document.getElementById("status1");
  status.innerHTML = message;
};
function setStatus3(message) {
  var status = document.getElementById("account");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = MetaCoin.deployed();

  meta.getBalance.call(account, {from: account}).then(function(value) {
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};


web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


abi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "shaValue",
				"type": "bytes32"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "hasSHAValue",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "identifier",
				"type": "string"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "checkIdentifier",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "identifier",
				"type": "string"
			}
		],
		"name": "calculateSHA",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "identifier",
				"type": "string"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "store",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "identifier",
				"type": "bytes32"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "storeIdentifier",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
VotingContract = web3.eth.contract(abi);
//Get your deployed contract address.
contractInstance = VotingContract.at('0x7b974ce96225528d7d679962e50eee4203d7bf1e');




function check() {
	
	var tempAccount = document.getElementById("account1").value;
	
	
	var tempString = document.getElementById("identifier1").value;
	
	setStatus("Verifying. Please wait.."+tempAccount);
	
//   contractInstance.checkIdentifier(tempString,tempAccount).then(function(response) {
// 	  console.log("success!",response);
	  
// 	  var temp = response;
	  
	  
// 	  if(temp == true)
// 	  {
// 	  	setStatus("Identifier verified successfully.");
// 	  }
// 	  else
// 	  {
// 	  	setStatus("Identifier not found.");
// 	  }
	 
	  
//   },function(error){
// 	  console.log("Error!",error);
// 	   setStatus("error"+response);
//   }
// );

var result = contractInstance.checkIdentifier(tempString,tempAccount,function(err,result){
	if(!err){
		console.log(result);
		var temp = result;
	  
	  
	  if(temp == true)
	  {
	  	setStatus("Identifier verified successfully.");
	  }
	  else
	  {
	  	setStatus("Identifier not found.");
	  }
	 
		}
		else {
			console.err(error);
		}
});
  
	
};







function store() {
	
	setStatus("Entered the check block");
	
	var tempAccount = document.getElementById("account2").value;
	
	var tempString = document.getElementById("identifier2").value;
	
	setStatus("Storing. Please wait.."+tempAccount);
	
	
  //   contractInstance.store(tempString,tempAccount,{from: tempAccount}).then(function(response) {
  // 	  console.log("success!",response);
  // 	   setStatus("Successfully stored "+tempString);
	//    //check1();

  //   },function(error){
  // 	  console.log("Error!",error);
  // 	   setStatus("error"+response);
  //   }
	// );
	
	
	var result = contractInstance.store(tempString,tempAccount,{from: tempAccount},function(err,result){
		if(!err){
			console.log(result);
			setStatus("Successfully stored "+tempString);
		  }
		  else {
				console.err(error);
				setStatus("error"+response);
		  }
	});
};

