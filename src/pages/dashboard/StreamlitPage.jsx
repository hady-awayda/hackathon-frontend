import React from 'react';
import { useLocation } from 'react-router-dom';

const StreamlitPage = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const streamlitUrl = `http://localhost:8501/?data=${encodeURIComponent(JSON.stringify(data))}`;

  return (
    <div className="streamlit-container h-screen">
      <iframe
        src={streamlitUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Streamlit Dashboard"
      />
    </div>
  );
};

export default StreamlitPage;
