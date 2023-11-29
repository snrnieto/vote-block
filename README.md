# VoteBlock DApp

VoteBlock is a decentralized application (DApp) built to facilitate secure voting using Ethereum blockchain.

## Installation

Before running the project, ensure that you have Node.js and npm installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/snrnieto/vote-block.git
   ```

2. Navigate to the project directory:

   ```
   cd vote-block
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### 1. Smart Contract

Run this command to run a local blockchain on your machine

```
npx hardhat node
```

It will give you 10 accounts with some ETH to test

Run this command to deploy the smart contract into the local blockchain

```
npx hardhat run .\scripts\deploy.js --network localhost
```

Make sure you have deployed your smart contract on the Ethereum blockchain. Replace the variable contractAddress and contractABI in `src/App.jsx` with your actual contract address and ABI.

### 2. Connect MetaMask

1. Install [MetaMask](https://metamask.io/) in your browser.
2. Connect MetaMask to the Ethereum Local Network given by hardhat
3. Import Accounts given in hardhat node blockchain into Metamask

### 3. Run the DApp

Run the following command to start the development server:

```
npm run dev
```
