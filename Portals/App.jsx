import React, { useState } from 'react';
import './style.css';

import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = () => {
    setToastMessage('Records updated!!!');
    setTimeout(() => setToastMessage(null), 3000);
  };
  
  return (
      <div>
        <button className="btn" onClick={showToast}>
          Show Toast notification
        </button>
        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        )}
      </div>
  );
}
