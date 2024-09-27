// App.js
import React from 'react';
import Sidebar from '../../../../components/layout/sideBar';
import NavBar from '../../../../components/layout/navBar';
import Footer from '../../../../components/layout/Footer';
import GetEnquiry from './getEnquiries';

function SchoolEnquiries() {
  return (
    <div className="app">
      <NavBar />
      <div className="main-content">
        <Sidebar />
        
        <GetEnquiry/>

        
      </div>
      <Footer/>
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
  },
};

export default SchoolEnquiries;
