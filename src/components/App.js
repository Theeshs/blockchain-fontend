import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { API_BASE_URL } from "../config";

const App = () => {
  const [walletInfo, setwalletInfo] = useState({})

  useEffect(() => {
    fetch(`${API_BASE_URL}/wallet/info`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setwalletInfo(json)
      })
  }, [])

  const { address, balance } = walletInfo
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo not available" />
      <h3>Welcome to pychain</h3>
      <br />
      <Link to='/blockchain'>Blockchain</Link>
      <Link to='/conduct-transaction'>Conduct Transaction</Link>
      <Link to='/transaction-pool'>Transaction Pool</Link>
      <div className="WalletInfo">
        <div>Address: {address}</div>
        <div>Blance: {balance}</div>
      </div>
    </div>
  );
}

export default App;
