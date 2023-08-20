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

      // Here you would make API calls to fetch risk score and other data
      // based on walletAddress and blockchainNetwork.

      // For now, let's simulate a delay to show loading state.
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulating a random risk score for demonstration.
      const randomRiskScore = Math.floor(Math.random() * 100);
      setRiskScore(randomRiskScore);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Blockchain Wallet Analytics</h1>
      <div>
        <label>Wallet Address:</label>
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Blockchain Network:</label>
        <select
          value={blockchainNetwork}
          onChange={(e) => setBlockchainNetwork(e.target.value)}
        >
          <option value="Ethereum">Ethereum</option>
          <option value="Binance">Binance</option>
          {/* Add more options for other networks */}
        </select>
      </div>
      <button onClick={handleSearch} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      {riskScore !== null && (
        <div>
          <h2>Risk Score: {riskScore}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
