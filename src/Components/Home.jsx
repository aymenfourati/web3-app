import React from 'react'
import "./Home.css";
import Web3 from'web3';

function Home() {
  var contract;
  var address="0xD65c266e72eFdB07967aA30FEd6eBE3C18A7f44A";
  var abi=[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "voted",
          "type": "string"
        }
      ],
      "name": "voteUpdate",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_post",
          "type": "string"
        }
      ],
      "name": "addpost",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_post",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_updown",
          "type": "string"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_post",
          "type": "string"
        }
      ],
      "name": "getVotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "upvotes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "downvotes",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "voteArray",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

window.web3= new Web3(window.ethereum);
contract = new Web3.eth.Contract(abi,address);



  (document).ready( () =>
  {
    initpost("ETHER");
    initpost("bitcoin");
    initpost("Link");

  })

  function initpost(_post){
    contract.methods.addpost.call(_post);
  }

  function vote(_post,_updown){
      contract.methods.vote.call(_post,_updown);
  }

  return (
    <div>
        <div className="intro">
    <h1>Welcome to vote-on-block</h1>
    <p>You can vote safely on your favorite cryptocurrency using your wallet account.</p>
    <button>Learn More</button>
  </div>
  <div className="achievements">
    <div className="work">
      <i className="fas fa-atom"></i>
      <p className="work-heading">ETHER</p>
      <p className="work-text">Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether.</p>
      <button className="btn btn-primary" style={{padding:15}}>up</button>
    <button className="btn btn-secondary" style={{padding:15}}>down</button>
    </div>
    <div className="work">
      <i className="fas fa-skiing"></i>
      <p className="work-heading">Bitcoin</p>
      <p className="work-text">Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto.</p>
      <button className="btn btn-primary" style={{padding:15}} >up</button>
    <button className="btn btn-secondary" style={{padding:15}}>down</button>
    </div>
    <div className="work">
      <i className="fas fa-ethernet"></i>
      <p className="work-heading">Link</p>
      <p className="work-text">Founded in 2017, Chainlink is a blockchain abstraction layer that enables universally connected smart contracts.</p>
      <button className="btn btn-primary" style={{padding:15}}>up</button>
    <button className="btn btn-secondary" style={{padding:15}}>down</button>
    </div>
  </div>

  <footer className="footer">
  <div className="copy">&copy; 2022 Developer</div>
  <div className="bottom-links">
    <div className="links">
      <span>More Info</span>
    
    </div>
    <div className="links">
      <span>Social Links</span>

    </div>
  </div>
</footer>
    </div>
  )
}

export default Home