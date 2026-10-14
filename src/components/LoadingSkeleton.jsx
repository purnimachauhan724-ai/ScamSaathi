import React from 'react';
import '../styles/variables.css';
import './LoadingSkeleton.css';

export const LoadingSkeleton = ({ width = '100%', height = '1rem' }) => (
  <div
    className="skeleton"
    style={{ width, height }}
    aria-hidden="true"
  />
);

export default LoadingSkeleton;
