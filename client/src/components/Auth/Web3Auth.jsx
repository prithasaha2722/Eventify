import React from "react";
import $ from "jquery";
import {rpc} from "./web3RPC";

const Web3Auth = () => {
    let web3auth = null;
    let provider = null;

    (async function init() {
      $(".btn-logged-in").hide();
      $("#sign-tx").hide();

      const clientId = "BDf_eZ_FLtl5uLQiW04RTYT12kB5WPcIJNCxcY7w5nxwPMzh6Z7uRmQT1uyflcf6wbZvsmSrRO3LC4IoQtfTCdI"; // get your clientId from https://dashboard.web3auth.io

    web3auth = new window.Modal.Web3Auth({
      clientId,
      chainConfig: {
        chainNamespace: "eip155",
        chainId: "0x1",
        rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app
      },
    });
    await web3auth.initModal();
      if (web3auth.provider) {
        $(".btn-logged-in").show();
        $(".btn-logged-out").hide();
        if (web3auth.connectedAdapterName === "openlogin") {
          $("#sign-tx").show();
        }
      } else {
        $(".btn-logged-out").show();
        $(".btn-logged-in").hide();
      }
    })();

    const login = async(event) => {
      try {
        const provider = await web3auth.connect();
        $(".btn-logged-out").hide();
        $(".btn-logged-in").show();
      } catch (error) {
        console.error(error.message);
      }
    };

    const userInfo = async(event) => {
      try {
        const user = await web3auth.getUserInfo();
        console.log(user);
      } catch (error) {
        console.error(error.message);
      }
    };

    const logout = async(event) => {
      try {
        await web3auth.logout();
        $(".btn-logged-in").hide();
        $(".btn-logged-out").show();
      } catch (error) {
        console.error(error.message);
      }
    };

    const getAccount = async(event) => {
      try {
        const accounts = await rpc.getAccounts(web3auth.provider);
        console.log(accounts);
      } catch (error) {
        console.error(error.message);
      }
    };

    const getBalance = async(event) => {
      try {
        const balance = await rpc.getBalance(web3auth.provider);
        console.log(balance);
      } catch (error) {
        console.error(error.message);
      }
    };

    const sendTransaction = async(event) => {
      try {
        const receipt = await rpc.sendTransaction(web3auth.provider);
        console.log(receipt);
      } catch (error) {
        console.error(error.message);
      }
    };

    const signTransaction = async(event) => {
      try {
        const receipt = await rpc.signTransaction(web3auth.provider);
        console.log(receipt);
      } catch (error) {
        console.error(error.message);
      }
    };

    const signMessage = async(event) => {
      try {
        const signedMsg = await rpc.signMessage(web3auth.provider);
        console.log(signedMsg);
      } catch (error) {
        console.error(error.message);
      }
    };

    const getPrivateKey = async(event) => {
      try {
        const privateKey = await rpc.getPrivateKey(web3auth.provider);
        console.log(privateKey);
      } catch (error) {
        console.error(error.message);
      }
    };
  return (
    <div className="container">
      <h1 className="title">
        <a target="_blank" href="http://web3auth.io/">
          Web3Auth
        </a>{" "}
        & JS Integration Example
      </h1>
      <div className="grid btn-logged-in">
        <button id="get-user-info" onClick={userInfo} className="btn">
          Get User Info
        </button>
        <button id="get-accounts" onClick={getAccount} className="btn">
          Get Accounts
        </button>
        <button id="get-balance" onClick={getBalance} className="btn">
          Get Balance
        </button>
        <button id="sign-message" onClick={signMessage} className="btn">
          Sign Message
        </button>
        <button id="sign-transaction" onClick={signTransaction} className="btn">
          Sign Transaction
        </button>
        <button id="send-transaction"  onClick={sendTransaction} className="btn">
          Send Transaction
        </button>
        <button id="privateKey" onClick={getPrivateKey} className="btn">
          Private Key
        </button>

        <button id="logout" onClick={logout} className="btn">
          Logout
        </button>

        <div className="console" id="console">
          <p id="code" className="code"></p>
        </div>
      </div>

      <div className="grid btn-logged-out">
        <button id="login" onClick={login} className="btn">
          Login
        </button>
      </div>
      <footer className="footer">
        <a
          href="https://github.com/Web3Auth/Web3Auth/tree/master/examples/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </footer>
    </div>
  );
};

export default Web3Auth;
