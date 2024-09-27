// Sidebar.js
import { Link } from "react-router-dom";
import React from 'react';
import '../icons/notif.png';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.menuItem}>
        {/* Prefix image for Statistics */}
        <img src={require('../icons/stats.png')} alt='' style={{ width: '24px', height: '24px' }} /> 
        Statistics
      </div>
      <hr/>
      <div style={styles.menuItem}>
        {/* Prefix image for School Enrollment */}
        <img src={require('../icons/enrollment.png')} alt='' style={{ width: '36px', height: '36px' }} /> 
        School Enrollment
      </div>
      <hr/>
      <Link to="/superadmin-dashboard/enquiries-from-schools" style={styles.menuItem}>
        {/* Prefix image for Enquiries */}
        <img src={require('../icons/enquiry.png')} alt='' style={{ width: '36px', height: '36px' }} /> 
        Enquiries
      </Link>
      <hr/>

      {/* Footer menu item: Get Started */}
      
      <div style={styles.footerItem}>
        <div style={styles.menuItem}>
          {/* Prefix image for Get Started */}
          <img src={require('../icons/get-start.png')} alt='' style={{ width: '24px', height: '24px' }} />
          Getting Started
        </div>
      </div>
    </div>

    
  );
};

const styles = {
  sidebar: {
    position: 'relative',  // Enable absolute positioning of the footer
    width: '250px',
    padding: '10px',
    backgroundColor: '#B2D4F9',
    height: '100%', // Full viewport height
  },
  menuItemsContainer: {
    // No more flex-grow, just stack the items normally
  },
  menuItem: {
    display: 'flex', // Align image and text side by side
    alignItems: 'center', // Aligns text vertically in the center
    cursor: 'pointer',
    padding: '30px',
  },
  footerItem: {
    position: 'absolute', // Fix this at the bottom
    alignItems: 'center',
    display: 'flex', 
    bottom: '0', // Ensure it takes the full width of the sidebar
    padding: '20px',
    borderTop: '2px solid #fff', // Optional border for separation
  },
};

export default Sidebar;
