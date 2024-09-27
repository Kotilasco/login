// src/components/Statistics.js
import React from 'react';
import '../../../../css/utils/summaryStatistics.css';
import '../../../../components/icons/schools.png';

const SummaryStatistics = () => {
  return (
    <div className="cards-wrapper">
      <h2 className="section-title">Here are your statistics</h2> {/* Add title at the top */}
      
      <div className="card-container">
        <div className="card">
          <div className="card-text"><strong>13,200</strong><br />Total Users</div>
          <img src={require('../../../../components/icons/users.png')} alt="Users" className="card-icon" />
        </div>
        <div className="card">
          <div className="card-text"><strong>21</strong><br />Total Schools</div>
          <img src={require('../../../../components/icons/schools.png')} alt="Schools" className="card-icon" />
        </div>
        <div className="card">
          <div className="card-text"><strong>11,524</strong><br />Total Students</div>
          <img src={require('../../../../components/icons/stedents.png')} alt="Students" className="card-icon" />
        </div>
      </div>

      {/* Outline Button centered below cards */}
      <button className="outline-button">View More Statistics</button>
    </div>
  );
};

export default SummaryStatistics;
