// src/components/Enquiries.js
import React from 'react';
import '../../../../css/mainDashboard.css'; 
import '../../../../components/icons/schools.png';

const SummaryEnquiries = () => {
  return (
    <div className="enquiries-cards-container">
      <div className="enquiry-card">
        <div className="card-header">
          <img src={require('../../../../components/icons/enrollment.png')} alt="Enquiry Icon" className="card-header-icon" />
          <h4 className="card-header-text">School Enrolment</h4>
        </div>
        <p className="subheader">Total Enrolled: 34</p>
        <button className="outline-button">Respond</button>
      </div>

      <div className="enquiry-card">
        <div className="card-header">
          <img src={require('../../../../components/icons/enquiry.png')} alt="Enquiry Icon" className="card-header-icon" />
          <h4 className="card-header-text">Enquiries</h4>
        </div>
        <p className="subheader">Total: 15</p>
        <button className="outline-button">View All</button>
      </div>

      <div className="enquiry-card">
        <div className="card-header">
          <img src="" alt="" className="card-header-icon" />
          <h4 className="card-header-text"></h4>
        </div>
        <p className="subheader"></p>
        <button className="outline-button"></button>
      </div>
    </div>
  );
};

export default SummaryEnquiries;
