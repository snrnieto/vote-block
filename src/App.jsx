// src/App.jsx
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import ContractJson from "../src/artifacts/contracts/VoteBlock.sol/VoteBlock.json";
const VoteApp = () => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [candidates, setCandidates] = useState([]);

  const connectToBlockchain = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setAccount(await signer.getAddress());

        // Reemplaza con la dirección de tu contrato
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        // Reemplaza con el ABI de tu contrato
        const contractABI = ContractJson.abi;
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setContract(contractInstance);
      } catch (error) {
        console.error("Error connecting to blockchain:", error);
      }
    } else {
      console.error("Metamask not detected!");
    }
  };

  console.log(candidates);

  const getCandidates = async () => {
    try {
      const candidateCountBigNumber = await contract.getCandidateCount();
      const candidateCount = candidateCountBigNumber.toNumber();
      console.log("Number of candidates:", candidateCount);
      setCandidates([...Array(candidateCount)]);
    } catch (error) {
      console.error("Error getting information from the contract:", error);
    }
  };

  const vote = async (candidateId) => {
    try {
      await contract.vote(candidateId);
      console.log("Vote successful!");
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  useEffect(() => {
    connectToBlockchain();
  }, []);

  return (
    <div>
      <h1>VoteBlock DApp</h1>
      <button onClick={getCandidates}>Get Candidates</button>

      <h2>Candidates</h2>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <p>Candidate: {index}</p>
          <button onClick={() => vote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default VoteApp;
