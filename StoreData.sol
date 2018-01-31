
contract StoreData {
  // state
  
  mapping (address => bytes32[]) private shaValues;
  
  // bytes32[] private shaValues;
  // store a identifier in the contract state
  // *transactional function* 
  
  
  function storeIdentifier(bytes32 identifier,address addr) {
    //calculate and store the sha value of the identifier
	
	//byte32[] tempShaValues = shaValues[addr]
	
    shaValues[addr].push(identifier);
    }
	
  // *transactional function*
  
  function store(string identifier,address addr) returns (bool){
    var shaValue = calculateSHA(identifier);
    storeIdentifier(shaValue,addr);
	return true;
  }
  
  // helper function to get a identifier's sha256
  // *read-only function*
  
  
  function calculateSHA(string identifier) constant returns (bytes32) {
    return sha256(identifier);
  }
  
  
  // check if a identifier has been stored
  // *read-only function*
  
  
  function checkIdentifier(string identifier,address addr) constant returns (bool) {
    var shaValue = calculateSHA(identifier);
    return hasSHAValue(shaValue,addr);
  }
  
  
  // returns true if shaValue is stored
  // *read-only function*
  
  
  function hasSHAValue(bytes32 shaValue,address addr) constant returns (bool) {
  
  bytes32[] tempShaValues = shaValues[addr];
  
    for (var i = 0; i < tempShaValues.length; i++) {
      if (tempShaValues[i] == shaValue) {
        return true;
      }
    }
    return false;
  }
}