// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
    address private contractOwner;
    uint private uniqueID ;
    // address contractAddr;
    constructor() public {
      contractOwner=msg.sender;
      uniqueID=100001;
   }
    struct Customer {
      string name;
      string fatherName;
      string motherName;
      string dateOfBirth;
      string addr;
      uint adharNumber;
      uint panNumber;
      string gender;
      address userAccountAddress;
      string uploadDate;
      uint phone;

   }
     mapping (uint => Customer) public product;


      function addData(string memory  date,string memory  name, string memory fatherName,string memory motherName, uint adharNumber,string memory dateOfBirth,string memory addr,
      uint panNumber,string memory gender,address userAccountAddress,uint phone) public returns(uint){    
          Customer memory p = Customer(name,fatherName,motherName,dateOfBirth,addr,adharNumber,panNumber,gender,userAccountAddress,date,phone);
                product[uniqueID]=p;
               
                uniqueID+=1;
            
            return (uniqueID-1);
       
    }

    function getData(uint id) public view returns( string memory  date,string memory  name, string memory fatherName,string memory motherName, uint adharNumber,string memory dateOfBirth,string memory addr,uint panNumber,string memory gender,address userAccountAddress,uint phone ){
        return(
            product[id].uploadDate,
            product[id].name,
            product[id].fatherName,
            product[id].motherName,
            product[id].adharNumber,
            product[id].dateOfBirth,
            product[id].addr,
            product[id].panNumber,
            product[id].gender,
            product[id].userAccountAddress,
            product[id].phone
            );

      }

}
