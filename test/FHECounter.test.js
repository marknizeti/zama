const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FHECounter", function () {
  let FHECounter, fheCounter, owner, addr1;

  beforeEach(async function () {
    FHECounter = await ethers.getContractFactory("FHECounter");
    [owner, addr1] = await ethers.getSigners();
    fheCounter = await FHECounter.deploy();
    await fheCounter.waitForDeployment();
  });

  it("Should initialize with count 0", async function () {
    expect(await fheCounter.getCount()).to.equal(0);
  });

  it("Should increment count correctly", async function () {
    await fheCounter.increment(5);
    expect(await fheCounter.getCount()).to.equal(5);
  });

  it("Should decrement count correctly", async function () {
    await fheCounter.increment(10);
    await fheCounter.decrement(3);
    expect(await fheCounter.getCount()).to.equal(7);
  });

  it("Should revert on decrement below zero", async function () {
    await expect(fheCounter.decrement(1)).to.be.revertedWith("FHECounter: cannot decrement below zero");
  });
});
