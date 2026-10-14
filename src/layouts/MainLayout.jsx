import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/variables.css';
import './MainLayout.css';

const MainLayout = ({ children }) => (
  <>
  <Navbar />
  <div className="main-layout">
    <Sidebar />
    <main className="layout__content">{children}</main>
  </div>
</>
);

export default MainLayout;
