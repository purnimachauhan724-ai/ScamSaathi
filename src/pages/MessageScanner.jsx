import React, { useState } from 'react';
import api from '../services/api';
import ResultPanel from '../components/ResultPanel';
import { LoadingSkeleton } from '../components/LoadingSkeleton';
import { Toast } from '../components/Toast';
import '../styles/variables.css';
import './MessageScanner.css';

const MessageScanner = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setToast({ message: 'Please paste a message first.', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      const { data } = await api.post('/api/v1/analyze/message', { text });
      setResult(data);
    } catch (err) {
      setToast({ message: 'Failed to analyze – try again.', type: 'error' });
    }
    setLoading(false);
  };

  return (
    <section className="scanner-page">
      <h2>Message Scanner</h2>
      <textarea
        rows={8}
        placeholder="Paste a suspicious message, SMS, WhatsApp text…"
        value={text}
        onChange={e => setText(e.target.value)}
        className="scanner__textarea"
      />
      <div className="scanner__actions">
        <button onClick={handleAnalyze} disabled={loading} className="btn-primary">
          {loading ? <LoadingSkeleton width="80px" height="1rem" /> : 'Analyze'}
        </button>
        <button onClick={() => setText('')} disabled={loading} className="btn-secondary">
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

export default MessageScanner;
