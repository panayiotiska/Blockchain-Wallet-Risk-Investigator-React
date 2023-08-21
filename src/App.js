import React, { useState } from 'react';
import './App.css';

// function getColorForRiskScore(score) {
//   // Define color thresholds and corresponding colors
//   const thresholds = [20, 40, 60, 80, 90];
//   const colors = ['#ffffff', '#00ff00', '#66ff33', '#ffcc00', '#ff9933', '#ff0000'];

//   // Find the appropriate color based on the score
//   let colorIndex = 0;
//   for (let i = 0; i < thresholds.length; i++) {
//     if (score <= thresholds[i]) {
//       colorIndex = i;
//       break;
//     }
//   }

//   return colors[colorIndex];
// }

function getColorForRiskScore(score) {
  const colorMap = [
    { score: 0, color: '#00ff00' },
    { score: 20, color: '#66ff33' },
    { score: 40, color: '#ffcc00' },
    { score: 60, color: '#ff9933' },
    { score: 80, color: '#ff0000' },
    { score: 90, color: '#ff0000' } // Max score
  ];

  for (let i = 0; i < colorMap.length - 1; i++) {
    if (score <= colorMap[i].score) {
      return colorMap[i].color;
    }
  }

  return colorMap[colorMap.length - 1].color;
}

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
            <h2>Risk Score: <span className="risk-score-number">{riskScore}</span></h2>
            <div
              className="risk-score-color"
              style={{ backgroundColor: getColorForRiskScore(riskScore) }}
            ></div>
          </div>
        )}
        {/* {riskScore !== null && (
          <div className="risk-score">
            <h2>Risk Score: {riskScore}</h2>
            <div
              className="risk-score-color"
              style={{ backgroundColor: getColorForRiskScore(riskScore) }}
            ></div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default App;
