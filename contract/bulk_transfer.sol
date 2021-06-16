// SPDX-License-Identifier: MIT
pragma solidity ^ 0.4.0;

contract BulkSend {

    // Public variable; owns this contract
    address public owner;

    // Event which stores details of each individual transfer
    event Transfer(address indexed _from, address indexed _to, uint256 _amount);

    // Constructor which sets the public variable (owner) to the external account address who deployed this contract
    constructor() {
        owner = msg.sender;
    }

    // Modifier to ensure only the owner can perform certain function calls
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    // Given 100 external account addresses and 100 corresponding amounts in wei; Perform 100 transfers (as internal tx)
    function bulkSendEth(address[100] memory addresses, uint256[100] memory amounts) public payable onlyOwner returns(bool success) {
        // transfer to each address
        for (uint8 j = 0; j < 100; j++) {
            if((addresses[j] != address(0)) && (amounts[j] * 1 wei) != 0){
                addresses[j].transfer(amounts[j] * 1 wei);
                emit Transfer(msg.sender, addresses[j], amounts[j] * 1 wei);
            }
        }

        return true;
    }

    // Check balance of any external account
    function getbalance(address addr) public view returns(uint value) {
        return addr.balance;
    }

    // Allow the owner of the contract to withdraw any left over network tokens
    function withdrawEther(address addr, uint amount) public onlyOwner returns(bool success) {
        addr.transfer(amount * 1 wei);
        return true;
    }

    // Allow the owner to destroy the contract and subsequently receive any left over network tokens
    function destroy(address _to) public onlyOwner {
        selfdestruct(_to);
    }
}
