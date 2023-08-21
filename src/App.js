import React, { useState } from 'react';
import './App.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [blockchainNetwork, setBlockchainNetwork] = useState('Ethereum');
  const [riskScore, setRiskScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      // Simulate loading...
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate a random risk score for demonstration.
      const randomRiskScore = Math.floor(Math.random() * 100);
      setRiskScore(randomRiskScore);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Blockchain Wallet Analytics</h1>
      </header>
      <div className="app-content">
        <div className="input-container">
          <label htmlFor="wallet-address">Wallet Address:</label>
          <input
            type="text"
            id="wallet-address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="blockchain-network">Blockchain Network:</label>
          <select
            id="blockchain-network"
            value={blockchainNetwork}
            onChange={(e) => setBlockchainNetwork(e.target.value)}
          >
            <option value="Ethereum">Ethereum</option>
            <option value="Binance">Binance</option>
            {/* Add more options for other networks */}
          </select>
        </div>
        <button className="search-button" onClick={handleSearch} disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
        {riskScore !== null && (
          <div className="risk-score">
            <h2>Risk Score: {riskScore}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
