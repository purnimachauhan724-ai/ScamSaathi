import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Link as LinkIcon, BookOpen } from 'lucide-react';
import '../styles/variables.css';
import './Sidebar.css';

const items = [
  { to: '/', label: 'Home', icon: <Home size={18} /> },
  { to: '/message', label: 'Message Scanner', icon: <MessageSquare size={18} /> },
  { to: '/url', label: 'URL Checker', icon: <LinkIcon size={18} /> },
  { to: '/learn', label: 'Learn & Stay Safe', icon: <BookOpen size={18} /> },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <aside className="sidebar">
      <nav>
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className={`sidebar__item ${pathname === it.to ? 'active' : ''}`}
          >
            {it.icon}
            <span>{it.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
