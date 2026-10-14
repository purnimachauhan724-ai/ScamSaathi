import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, Link as LinkIcon } from 'lucide-react';
import '../styles/variables.css';
import './Home.css';

const Home = () => (
  <section className="home">
    <div className="hero">
      <h1>Stay One Step Ahead of Scams</h1>
      <p>Think before you trust. Stay safe online with ScamSaathi.</p>
      <Link to="/message" className="btn-primary">
        Analyze a Message
      </Link>
    </div>
    <div className="quick-actions">
      <Link to="/message" className="action-card">
        <MessageSquare size={32} />
        <span>Message Scanner</span>
      </Link>
      <Link to="/url" className="action-card">
        <LinkIcon size={32} />
        <span>URL Checker</span>
      </Link>
      <Link to="/learn" className="action-card">
        <BookOpen size={32} />
        <span>Learn &amp; Stay Safe</span>
      </Link>
    </div>
    <div className="footer-note">
      <small>
        Automated assessments may contain errors. Always verify with official sources.
      </small>
    </div>
  </section>
);

export default Home;
