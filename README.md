# Dapp_testrpc
This is sample dapp built uisng testrpc. This Dapp code will explain how can we connect the deployed contract and UI and make transactions.
In this example I am using a sample contract which will store a string and address pair, And then will check whether the address pair exist or not.
There are two html files. In index.html we can verify and In store.html we can store the pair.

Steps for connecting the contract to UI:
1. Get the ABI of the contract.
2. Get the contract address from the blockchain
3. Include web3.js in your html file.
4. Initialize a web3 object with metamask provider or the blockchain RPC address in which you have deployed your contract
5. Create a contract object using ABI.
6. Get the deployed contract instance into this object.
7. Then call your methods uisng the contract instance object.
