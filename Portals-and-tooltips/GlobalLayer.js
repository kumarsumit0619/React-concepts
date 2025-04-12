import React from 'react';
import ReactDOM from 'react-dom';

const GlobalLayer = ({children}) => {
  return ReactDOM.createPortal(
    <div style={styles.globalLayer}>{children}</div>,
    document.getElementById('portal-root')
  );
};

const styles = {
  globalLayer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none', // Allow clicks to pass through unless explicitly handled
  },
};

export default GlobalLayer;
