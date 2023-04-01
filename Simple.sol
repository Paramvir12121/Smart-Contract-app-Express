//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.7;

contract getsendContract {
    
    string public farmerName;
    string public farmerId;
    string public lenderName = "Rutul";
    string public lenderId ;
    string internal amount="2000";
    string public borrowed_amount;

    function getamount() external view returns(string memory) {
        return amount;
    }

    function changeamount(string memory _word) external {
        borrowed_amount = _word;
        amount = borrowed_amount;
    }
}