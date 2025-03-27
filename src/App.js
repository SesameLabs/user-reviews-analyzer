import React, { useState } from 'react';
import CSVUploader from './CSVUploader';
import ReviewInsights from './ReviewInsights';
import { analyzeReviewsBatch } from './mockLLM';

function App() {
  const [reviews, setReviews] = useState([]);
  const [analyzedData, setAnalyzedData] = useState([]);

  const handleUpload = async (uploadedReviews) => {
    console.log('Uploaded reviews:', uploadedReviews);
    setReviews(uploadedReviews);
    // Make a single API call with all reviews
    const analyzed = await analyzeReviewsBatch(uploadedReviews);
    setAnalyzedData(analyzed);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Reviews Analyzer</h2>
      <CSVUploader onUpload={handleUpload} />
      {analyzedData.length > 0 && (
        <div>
          <h3>Analysis Results:</h3>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '5px',
            overflow: 'auto',
            maxHeight: '500px'
          }}>
            {JSON.stringify(analyzedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
