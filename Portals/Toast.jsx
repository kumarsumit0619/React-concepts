import React from 'react';
import ReactDOM from 'react-dom';

const Toast = ({ message, onClose }) => {
  return ReactDOM.createPortal(
    <div style={styles.toast}>
      {message}
      <button style={styles.button} onClick={onClose}>
        Close
      </button>
    </div>,
    document.getElementById('portal-root')
  );
};

export default Toast;

const styles = {
  toast: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#333',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
  button: {
    marginLeft: '10px',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
};
