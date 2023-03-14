// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
    uint256 value;
    address private contractOwner;
    address contractAddr;
    constructor(address publisher) public {
      contractOwner=publisher;
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
      string UploadDate;
      uint phone;

   }
    function read() public view returns (uint256) {
        return value;
    }

    function write(uint256 newValue) public {
        value = newValue;
    }
}
