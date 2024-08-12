import React from 'react';
import './Modal.css';

const PaidUserModal = ({ show, onClose, onSave, formData, handleChange }) => {

  const handleSubmit = () => {
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>✖</button>
        <h2 className="modal-title">Submit Your App Details</h2>
        <form>
          <div className="form-group-row">
            <div className="form-group">
              <label>Rating</label>
              <input
                type="number"
                name="rating"
                placeholder="Enter rating"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Reviews</label>
              <input
                type="number"
                name="reviews"
                placeholder="Enter number of reviews"
                value={formData.reviews}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Size (MB)</label>
              <input
                type="number"
                name="size"
                placeholder="Enter size in MB"
                value={formData.size}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Installs</label>
              <input
                type="number"
                name="installs"
                placeholder="Enter number of installs"
                value={formData.installs}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Price ($)</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Average Sentiment Analysis</label>
              <input
                type="number"
                name="average_sentiment_analysis"
                placeholder="Enter sentiment analysis score"
                value={formData.average_sentiment_analysis}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Average Sentiment Subjectivity</label>
              <input
                type="number"
                name="average_sentiment_subjectivity"
                placeholder="Enter sentiment subjectivity score"
                value={formData.average_sentiment_subjectivity}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="button" className="modal-save-btn" onClick={handleSubmit}>Get Similar Apps</button>
        </form>
      </div>
    </div>
  );
};

export default PaidUserModal;
