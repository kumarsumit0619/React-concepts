import React, { useState } from 'react';
import './style.css';

import GlobalLayer from './Components/GlobalLayer';

export default function App() {
  const [tooltip, setTooltip] = useState(null);

  const showTooltip = (event) => {
    debugger;
    //
    const { clientX, clientY } = event;
    const tooltipWidth = 150; // Example width
    const tooltipHeight = 50; // Example height
    const adjustedX = clientX + tooltipWidth > window.innerWidth ? clientX - tooltipWidth : clientX;
    const adjustedY = clientY + tooltipHeight > window.innerHeight ? clientY - tooltipHeight : clientY;
    setTooltip({ x: adjustedX, y: adjustedY, text: 'This is a tooltip !!!' });
    //
  };

  return (
    <div>
      <button onMouseOver={showTooltip} onMouseOut={() => setTooltip(null)}>
        Hover Me!!!
      </button>
      {tooltip && (
        <GlobalLayer>
          <div
            style={{
              position: 'absolute',
              top: tooltip?.y,
              left: tooltip?.x,
              background: '#333',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '3px',
            }}
          >
            {tooltip.text}
          </div>
        </GlobalLayer>
      )}

      <button
        className="submit--btn"
        onMouseOver={showTooltip}
        onMouseOut={() => setTooltip(null)}
      >
        Submit!!!
      </button>
    </div>
  );
}
