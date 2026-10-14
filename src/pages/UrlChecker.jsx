import React, { useState } from 'react';
import api from '../services/api';
import ResultPanel from '../components/ResultPanel';
import { LoadingSkeleton } from '../components/LoadingSkeleton';
import { Toast } from '../components/Toast';
import '../styles/variables.css';
import './UrlChecker.css';

const UrlChecker = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setToast({ message: 'Please enter a URL.', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      const { data } = await api.post('/api/v1/analyze/url', { url });
      setResult(data);
    } catch (err) {
      setToast({ message: 'Failed to analyse URL.', type: 'error' });
    }
    setLoading(false);
  };

  return (
    <section className="scanner-page">
      <h2>URL Safety Checker</h2>
      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="scanner__input"
      />
      <div className="scanner__actions">
        <button onClick={handleAnalyze} disabled={loading} className="btn-primary">
          {loading ? <LoadingSkeleton width="80px" height="1rem" /> : 'Analyze'}
        </button>
        <button onClick={() => setUrl('')} disabled={loading} className="btn-secondary">
          Clear
        </button>
      </div>
      {result && <ResultPanel result={result} />}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default UrlChecker;
