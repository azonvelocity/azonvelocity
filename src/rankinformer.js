import React, { useState } from 'react';

export default function RankInformer() {
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('Books');
  const [result, setResult] = useState(null);

  const thresholds = {
    'Books': { green: 100000, yellow: 500000 },
    'Toys & Games': { green: 50000, yellow: 150000 },
    'Home & Kitchen': { green: 100000, yellow: 300000 },
    'Electronics': { green: 40000, yellow: 120000 },
    'Clothing': { green: 75000, yellow: 200000 },
  };

  const evaluateRank = () => {
    const rankNum = parseInt(rank.replace(/,/g, ''));
    if (isNaN(rankNum) || !thresholds[category]) {
      setResult('invalid');
      return;
    }

    const { green, yellow } = thresholds[category];
    if (rankNum <= green) setResult('green');
    else if (rankNum <= yellow) setResult('yellow');
    else setResult('red');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>AzonVelocity</h1>
      <div>
        <label>Sales Rank:</label>
        <input
          type="text"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          placeholder="e.g. 45,000"
          style={{ marginLeft: '1rem' }}
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ marginLeft: '1rem' }}>
          {Object.keys(thresholds).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <button onClick={evaluateRank} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Evaluate
      </button>
      {result && (
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          {result === 'green' && <span style={{ color: 'green' }}>Fast Seller (within a week)</span>}
          {result === 'yellow' && <span style={{ color: 'orange' }}>Moderate Seller (1-4 weeks)</span>}
          {result === 'red' && <span style={{ color: 'red' }}>Slow Seller (over a month)</span>}
          {result === 'invalid' && <span style={{ color: 'gray' }}>Invalid input. Please try again.</span>}
        </div>
      )}
    </div>
  );
}