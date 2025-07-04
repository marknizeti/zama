// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title A counter contract (simplified for testing without FHE)
contract FHECounter {
    uint32 private _count;

    /// @notice Returns the current count
    function getCount() external view returns (uint32) {
        return _count;
    }

    /// @notice Increments the counter by a value
    function increment(uint32 value) external {
        _count += value;
    }

    /// @notice Decrements the counter by a value
    function decrement(uint32 value) external {
        require(_count >= value, "FHECounter: cannot decrement below zero");
        _count -= value;
    }
}
