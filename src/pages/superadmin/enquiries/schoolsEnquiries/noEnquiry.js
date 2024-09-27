// Enquiries.js
import React from 'react';
import '../../../../components/icons/ex-mark.png';

const Enquiries = () => {
  return (

    <div style={styles.enquiries}>
      <p style={styles.text}>No enquiries yet</p>
      <img 
        src={require('../../../../components/icons/ex-mark.png')}
        alt="Icon"
        style={styles.icon}
      />
    </div>
  );
};

const styles = {
  enquiries: {
    display: 'flex',
    flexDirection: 'column', // Stack children vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px', // Full height of the viewport
    border: '1px solid black', // Black border
    borderRadius: '8px', // Optional: rounded corners
    padding: '20px', // Optional: padding inside the div
    boxSizing: 'border-box', // Ensures padding is included in total width/height
    margin: 'auto', // Centers the div horizontally
    width: '80%', // Responsive width
    maxWidth: '500px', // Maximum width
  },

  text: {
    margin: '0', // Remove default margin from <p>
    fontSize: '18px', // Optional: adjust font size
    textAlign: 'center', // Center the text
  },
  icon: {
    marginTop: '20px', // Space between text and icon
    width: '50px', // Set the width of the icon (adjust as needed)
    height: 'auto', // Maintain aspect ratio
  },
};

export default Enquiries;

