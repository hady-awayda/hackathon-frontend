import React, { useState } from "react";
import "./Profile.css";
import Header from "../../components/header/Header";

const Profile = () => {
  const [profile, setProfile] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardType: "debit",
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvcNumber: "",
    billingAddress: "",
    stateProvince: "",
    zipCode: "",
    country: "",
  });

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header/>
      <div className="profile-page">
        <div className="profile-container">
          <h2>Profile</h2>
          <div className="profile-picture">
            <img src="/pp.png" alt="Profile" width={50} height={50} />
            <div className="profile-buttons">
              <div className="buttons-inside">
                <button className="upload-btn">
                  <i className="fas fa-upload"></i> Upload
                </button>
                <button className="remove-btn">
                  <i className="fas fa-trash-alt"></i> Remove
                </button>
              </div>
              <button className="premium-btn">
                <i className="fas fa-crown"></i> Premium
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={profile.email}
              onChange={handleProfileChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={profile.firstName}
              onChange={handleProfileChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={profile.lastName}
              onChange={handleProfileChange}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={profile.phoneNumber}
              onChange={handleProfileChange}
            />
            <input
              type="password"
              name="currentPassword"
              placeholder="Current password"
              value={profile.currentPassword}
              onChange={handleProfileChange}
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New password"
              value={profile.newPassword}
              onChange={handleProfileChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={profile.confirmPassword}
              onChange={handleProfileChange}
            />
          </form>
        </div>

        <div className="payment-container">
          <h2>Payment Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="card-type">
              <label
                className={`card-type-option ${
                  paymentInfo.cardType === "credit" ? "selected" : ""
                }`}
              >
                <div>
                  <i className="fas fa-money-check-alt"></i> Credit Card
                </div>
                <span className="circle"></span>
                <input
                  type="radio"
                  name="cardType"
                  value="credit"
                  checked={paymentInfo.cardType === "credit"}
                  onChange={handlePaymentChange}
                />
              </label>
              <label
                className={`card-type-option ${
                  paymentInfo.cardType === "debit" ? "selected" : ""
                }`}
              >
                <div>
                  <i className="fas fa-money-check-alt"></i> Debit Card
                </div>
                <span className="circle"></span>
                <input
                  type="radio"
                  name="cardType"
                  value="debit"
                  checked={paymentInfo.cardType === "debit"}
                  onChange={handlePaymentChange}
                />
              </label>
            </div>

            <input
              type="text"
              name="nameOnCard"
              placeholder="Name on card"
              value={paymentInfo.nameOnCard}
              onChange={handlePaymentChange}
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card number"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={paymentInfo.expiryDate}
              onChange={handlePaymentChange}
            />
            <input
              type="text"
              name="cvcNumber"
              placeholder="CVC number"
              value={paymentInfo.cvcNumber}
              onChange={handlePaymentChange}
            />
            <input
              type="text"
              name="billingAddress"
              placeholder="Billing address"
              value={paymentInfo.billingAddress}
              onChange={handlePaymentChange}
            />
            <input
              type="text"
              name="stateProvince"
              placeholder="State / Province"
              value={paymentInfo.stateProvince}
              onChange={handlePaymentChange}
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={paymentInfo.zipCode}
              onChange={handlePaymentChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={paymentInfo.country}
              onChange={handlePaymentChange}
            />

            <div className="button-container">
              <button type="submit" className="apply-changes-btn">
                Apply changes
              </button>
              <button type="button" className="clear-payment-btn">
                Clear Payment Method
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Profile;
