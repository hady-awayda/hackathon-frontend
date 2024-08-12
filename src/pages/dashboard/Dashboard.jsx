import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import './dashboard.css';
import Modal from '../components/modal/Modal.jsx';

const Dashboard = () => {
  const [ideas, setIdeas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token); 
    const userEmail = decodedToken.email;

    const storedIdeas = JSON.parse(localStorage.getItem(`ideas_${userEmail}`)) || [];
    setIdeas(storedIdeas);
  }, []);

  const handleIdeaClick = (idea) => {
    setSelectedIdea(idea);
    setShowModal(true);
  };

  const handleAddNewIdea = () => {
    setSelectedIdea(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedIdea(null);
  };

  const handleSaveIdea = async (formData) => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token); 
    const userEmail = decodedToken.email; 
    const apiUrl = process.env.REACT_APP_API_URL; 

    try {
      const { ideaName, ...apiData } = formData;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(apiData),
      });

      const data = await response.json();

      const successRate = data.prediction[0];
      const tips = data.prediction[1].join(' ');

      const newIdea = {
        name: ideaName,
        category: formData.category,
        size: formData.size,
        type: formData.type,
        price: formData.price,
        content_rating: formData.content_rating,
        genres: formData.genres,
        current_ver: formData.current_ver,
        android_ver: formData.android_ver,
        sentiment: formData.sentiment,
        successRate: successRate || 0,
        tips: tips || 'No tips available',
        userEmail: userEmail, 
      };

      const updatedIdeas = [...ideas, newIdea];
      setIdeas(updatedIdeas);
      localStorage.setItem(`ideas_${userEmail}`, JSON.stringify(updatedIdeas));

      setShowModal(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteIdea = (index) => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token); 
    const userEmail = decodedToken.email; 

    const updatedIdeas = ideas.filter((_, i) => i !== index);
    setIdeas(updatedIdeas);
    localStorage.setItem(`ideas_${userEmail}`, JSON.stringify(updatedIdeas)); 
  };

  return (
    <div className="idea-list h-screen bg">
      <h2 className="text-white text-3xl mb-6">Welcome back</h2>
      <div className="table-wrapper">
        <div className="table-header">
          <div className="idea-col-header idea-name-col">Idea Name</div>
          <div className="idea-col-header success-rate-col mg">Success rate</div>
          <div className="idea-col-header tips-col">Tips</div>
          <div className="idea-col-header"></div>
        </div>
        {ideas.map((idea, index) => (
          <div key={index} className="idea-row">
            <div 
              className="idea-col idea-name-col hover:border-cyan-500"
              onClick={() => handleIdeaClick(idea)}
            >
              {idea.name}
            </div>
            <div className={`idea-col success-rate-col ${idea.successRate >= 80 ? 'text-green-500' : idea.successRate < 50 ? 'text-red-500' : 'text-yellow-500'}`}>
              {idea.successRate}%
            </div>
            <div className="idea-col tips-col">{idea.tips}</div>
            <div>
              <button onClick={() => handleDeleteIdea(index)} className="delete-btn">🗑</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-idea-wrapper">
        <button className="add-idea-btn" onClick={handleAddNewIdea}>+ New Idea</button>
      </div>
      <Modal 
        show={showModal} 
        onClose={handleCloseModal} 
        onSave={handleSaveIdea}
        idea={selectedIdea}
      />
    </div>
  );
};

export default Dashboard;
