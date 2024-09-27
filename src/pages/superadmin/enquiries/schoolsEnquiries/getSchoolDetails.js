import React from 'react';
import '../../../../css/mainDashboard.css'; 

const GetSchoolDetails = ({ school, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>School Details</h2>
        <div className="details-grid">
          <div>
            <strong>Name of School:</strong> {school.name}
          </div>
          <div>
            <strong>Name of Town:</strong> {school.town}
          </div>
          <div>
            <strong>Name of Province:</strong> {school.province}
          </div>
          <div>
            <strong>Name of Country:</strong> {school.country}
          </div>
          <div>
            <strong>Name of School Head:</strong> {school.head}
          </div>
          <div>
            <strong>Head’s Phone Number:</strong> {school.headPhone}
          </div>
          <div>
            <strong>Head's Email:</strong> {school.headEmail}
          </div>
          <div>
            <strong>Name of Admin:</strong> {school.admin}
          </div>
          <div>
            <strong>Admin’s Phone Number:</strong> {school.adminPhone}
          </div>
          <div>
            <strong>Admin’s Email:</strong> {school.adminEmail}
          </div>
          <div>
            <strong>Number of Students:</strong> {school.students}
          </div>
          <div>
            <strong>Number of Teachers:</strong> {school.teachers}
          </div>
          <div>
            <strong>School Phone Number:</strong> {school.schoolPhone}
          </div>
          <div>
            <strong>School Address:</strong> {school.address}
          </div>
          <div>
            <strong>Superadmin’s comment:</strong> Lorem ipsum dolo sit amet. Regina incolam dat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSchoolDetails;
