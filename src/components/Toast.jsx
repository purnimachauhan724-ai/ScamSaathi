import React from 'react';
import '../styles/variables.css';
import './Toast.css';

export const Toast = ({ message, type = 'info', duration = 4000, onClose }) => {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  if (!visible) return null;
  return <div className={`toast toast--${type}`}>{message}</div>;
};

export default Toast;
