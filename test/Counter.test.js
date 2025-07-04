const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let Counter, counter, owner, addr1;

  beforeEach(async function () {
    Counter = await ethers.getContractFactory("Counter");
    [owner, addr1] = await ethers.getSigners();
    counter = await Counter.deploy();
    await counter.waitForDeployment();
  });

  it("Should initialize with count 0", async function () {
    expect(await counter.getCount()).to.equal(0);
  });

  it("Should increment count correctly", async function () {
    await counter.increment(5);
    expect(await counter.getCount()).to.equal(5);
  });

  it("Should decrement count correctly", async function () {
    await counter.increment(10);
    await counter.decrement(3);
    expect(await counter.getCount()).to.equal(7);
  });

  it("Should revert on decrement below zero", async function () {
    await expect(counter.decrement(1)).to.be.revertedWith("Counter: cannot decrement below zero");
  });
});
