import React from 'react';
import '../styles/variables.css';
import './RiskBadge.css';

const colors = {
  HIGH: '#D32F2F',
  MEDIUM: '#F57C00',
  LOW: '#388E3C',
  UNKNOWN: '#757575',
};

const RiskBadge = ({ risk }) => (
  <span className="risk-badge" style={{ backgroundColor: colors[risk] || colors.UNKNOWN }}>
    {risk}
  </span>
);

export default RiskBadge;
