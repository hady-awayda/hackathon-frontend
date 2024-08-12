import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ show, onClose, onSave, idea }) => {
  const [formData, setFormData] = useState({
    ideaName: idea?.name || '', // Added ideaName field
    category: idea?.category || '',
    size: idea?.size || '',
    type: idea?.type || '',
    price: idea?.price || '',
    content_rating: idea?.content_rating || '',
    genres: idea?.genres || '',
    current_ver: idea?.current_ver || '',
    android_ver: idea?.android_ver || '',
    sentiment: idea?.sentiment || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>✖</button>
        <h2 className="modal-title">Details</h2>
        <form>
          <div className="form-group">
            <label>Idea Name</label>
            <input
              type="text"
              name="ideaName"
              placeholder="Enter idea name"
              value={formData.ideaName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Size</label>
              <input
                type="text"
                name="size"
                placeholder="Enter size"
                value={formData.size}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Type</label>
              <input
                type="text"
                name="type"
                placeholder="Enter type"
                value={formData.type}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Content Rating</label>
              <input
                type="text"
                name="content_rating"
                placeholder="Enter content rating"
                value={formData.content_rating}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Genres</label>
              <input
                type="text"
                name="genres"
                placeholder="Enter genres"
                value={formData.genres}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Current Version</label>
              <input
                type="text"
                name="current_ver"
                placeholder="Enter current version"
                value={formData.current_ver}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Android Version</label>
              <input
                type="text"
                name="android_ver"
                placeholder="Enter Android version"
                value={formData.android_ver}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Sentiment</label>
              <input
                type="text"
                name="sentiment"
                placeholder="Enter sentiment"
                value={formData.sentiment}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="button" className="modal-save-btn" onClick={handleSubmit}>Check Detailed Analysis</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
