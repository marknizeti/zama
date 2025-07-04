// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "fhevm-contracts/contracts/FHE.sol";

/// @title A counter contract using Fully Homomorphic Encryption
contract FHECounter {
    euint32 private _count;

    /// @notice Returns the encrypted count (as ciphertext)
    function getCount() external view returns (bytes memory) {
        return FHE.asEuint32(_count).encrypt();
    }

    /// @notice Increments the counter by an encrypted value
    function increment(bytes calldata encryptedValue) external {
        euint32 value = FHE.asEuint32(encryptedValue);
        _count = _count + value;
    }

    /// @notice Decrements the counter by an encrypted value
    function decrement(bytes calldata encryptedValue) external {
        euint32 value = FHE.asEuint32(encryptedValue);
        require(FHE.asEuint32(_count >= value), "FHECounter: cannot decrement below zero");
        _count = _count - value;
    }
}
