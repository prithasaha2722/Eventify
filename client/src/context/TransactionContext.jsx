import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../constant";
import { createContext } from "react";
import { useDispatch } from "react-redux";
import {authActions} from '../Store/index'

export const TransactionContext = createContext();

const { ethereum } = window;

const EthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
    );

    console.log({
        provider,
        signer,
        transactionContract,
    });
};

export const TransactionProvider = ({ children }) => {
    const[wallet,setWallet] = useState('')

    const checkWalletConnection = async() => {
        if(!ethereum) return alert("Please install metamask")

        const accounts = await ethereum.request({method: "eth_accounts"});
    }
    const connectWallet = async() => {
        if(!ethereum) return alert("Please install metamask")

        const accounts = await ethereum.request({method: "eth_requestAccounts"});

        setWallet(accounts[0])
    }


    return (
        <TransactionContext.Provider value={{connectWallet, wallet}}>
            {children}
        </TransactionContext.Provider>
    );
};