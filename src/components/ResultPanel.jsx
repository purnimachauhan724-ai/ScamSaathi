import React from 'react';
import '../styles/variables.css';
import './ResultPanel.css';
import RiskBadge from './RiskBadge';

const ResultPanel = ({ result }) => {
  if (!result) return null;
  return (
    <div className="result-panel">
      <h3>Analysis Result</h3>
      <RiskBadge risk={result.risk} />
      <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(0)}%</p>
      {result.indicators && result.indicators.length > 0 && (
        <p><strong>Indicators:</strong> {result.indicators.join(', ')}</p>
      )}
      <p>{result.explanation}</p>
      <p className="recommendation">{result.recommendation}</p>
    </div>
  );
};

export default ResultPanel;
