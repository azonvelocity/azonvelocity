import React, { useState } from "react";

const thresholds = {
  "Books": { green: 100000, yellow: 500000 },
  "Toys & Games": { green: 50000, yellow: 150000 },
  "Electronics": { green: 40000, yellow: 120000 },
  "Home & Kitchen": { green: 100000, yellow: 300000 },
  "Clothing": { green: 75000, yellow: 200000 },
  "Beauty & Personal Care": { green: 60000, yellow: 180000 },
  "Pet Supplies": { green: 30000, yellow: 90000 },
  "Grocery & Gourmet Food": { green: 25000, yellow: 75000 },
  "Office Products": { green: 40000, yellow: 100000 },
  "Sports & Outdoors": { green: 60000, yellow: 180000 }
};

export default function ToolPage() {
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('Books');
  const [result, setResult] = useState('');

  const evaluate = () => {
    const rankNum = parseInt(rank.replace(/,/g, ''));
    if (!rankNum || !thresholds[category]) {
      setResult("Invalid input.");
      return;
    }

    const { green, yellow } = thresholds[category];
    if (rankNum <= green) setResult("green");
    else if (rankNum <= yellow) setResult("yellow");
    else setResult("red");
  };

  return (
    <div className="container">
      <img src="/favicon.ico" alt="AzonVelocity Logo" className="logo" />
      <h2>Sales Rank Evaluation</h2>
      <input value={rank} onChange={e => setRank(e.target.value)} placeholder="Enter Rank" /><br /><br />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {Object.keys(thresholds).map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select><br /><br />
      <button onClick={evaluate}>Evaluate</button>
      {result && (
        <div className="bar-visual">
          <div className={`bar ${result === 'red' ? 'red' : ''}`}></div>
          <div className={`bar ${result === 'yellow' ? 'yellow' : ''}`}></div>
          <div className={`bar ${result === 'green' ? 'green' : ''}`}></div>
        </div>
      )}
    </div>
  );
}