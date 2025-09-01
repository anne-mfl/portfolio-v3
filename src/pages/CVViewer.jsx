import React from 'react';

const CVViewer = () => {
  return (
    <div style={{ width: '100dvw', height: '100dvh', margin: 0, padding: 0 }}>
      <embed 
        src='/Anne_Lee_CV.pdf' 
        // src={`Anne_Lee_CV.pdf`} 
        type="application/pdf" 
        width="100%" 
        height="100%" 
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default CVViewer;