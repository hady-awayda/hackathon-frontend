import React, { useState } from 'react';
import './dashboard.css';
import Modal from '../components/modal/Modal.jsx';

const dummyIdeas = [
  { name: 'Idea 1', successRate: 98, tips: 'Keep it up!' },
  { name: 'Idea 2', successRate: 32, tips: 'Need New Idea' },
  { name: 'Idea 3', successRate: 65, tips: 'Need more Budget' },
  { name: 'Idea 4', successRate: 65, tips: 'Need more Budget' },
  { name: 'Idea 5', successRate: 65, tips: 'Need more Budget' },
  { name: 'Idea 6', successRate: 65, tips: 'Need more Budget' },
  { name: 'Idea 7', successRate: 65, tips: 'Need more Budget' },
];

const Dashboard = ({ ideas = dummyIdeas, deleteIdea }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);

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

  const handleSaveIdea = (formData) => {
    fetch('http://127.0.0.1:8000/api/v1/predict/random_forest_classifier', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setShowModal(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="idea-list h-screen bg">
      <h2 className="text-white text-3xl mb-6">Welcome back Mohammad</h2>
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
              <button onClick={() => deleteIdea ? deleteIdea(index) : null} className="delete-btn">🗑</button>
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
