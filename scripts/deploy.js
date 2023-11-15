// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.

const VoteBlock = await ethers.deployContract("VoteBlock");

await VoteBlock.waitForDeployment();

console.log(`VoteBlock deployed to ${VoteBlock.target}`);
