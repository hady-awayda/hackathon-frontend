import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import PaidUserModal from '../components/modal/PaidUserModal.jsx';

const PaidFeatureDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    rating: '',
    reviews: '',
    size: '',
    installs: '',
    price: '',
    average_sentiment_analysis: '',
    average_sentiment_subjectivity: '',
  });

  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token); 
    const userEmail = decodedToken.email;

    const storedResult = JSON.parse(localStorage.getItem(`paidUserResult_${userEmail}`)); 
    if (storedResult) {
      setResult(storedResult);
    }
  }, []);

  const handleAddNewIdea = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveIdea = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token); 
    const userEmail = decodedToken.email; 
    const apiUrl = process.env.REACT_APP_API_URL_KMEANS; 

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setResult(data);
        localStorage.setItem(`paidUserResult_${userEmail}`, JSON.stringify(data));
        setShowModal(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDetailsClick = () => {
    navigate('/streamlit', { state: { data: result } }); 
  };

  return (
    <div className="idea-list h-screen bg">
      <h2 className="text-white text-3xl mb-6">Welcome back, Paid User!</h2>
      <div className="add-idea-wrapper">
        <button className="add-idea-btn" onClick={handleAddNewIdea}>+ Submit New Idea</button>
      </div>
      {result && (
        <div className="result mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Similar Apps:</h3>
          {result.similar_apps && result.similar_apps.length > 0 ? (
            <ul className="list-disc list-inside mb-6">
              {result.similar_apps.map((app, index) => (
                <li key={index}>
                  <strong>{app.app}</strong> - Rating: {app.rating}, Reviews: {app.reviews}, Installs: {app.installs}
                </li>
              ))}
            </ul>
          ) : (
            <p>No similar apps found.</p>
          )}
          <button className="details-btn" onClick={handleDetailsClick}>View All Details in Streamlit</button>
          {result.aggregation && result.aggregation.mean && (
            <div className="aggregated-data">
              <h4 className="text-xl font-semibold">Aggregated Data:</h4>
              <p>Average Rating: {result.aggregation.mean.rating}</p>
              <p>Average Reviews: {result.aggregation.mean.reviews}</p>
              <p>Average Size: {result.aggregation.mean.size} MB</p>
              <p>Average Installs: {result.aggregation.mean.installs}</p>
            </div>
          )}
        </div>
      )}
      <PaidUserModal 
        show={showModal} 
        onClose={handleCloseModal} 
        onSave={handleSaveIdea}
        formData={formData}
        handleChange={handleChange}
      />
    </div>
  );
};

export default PaidFeatureDashboard;
