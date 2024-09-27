import React from 'react';
import NavBar from '../../../components/layout/navBar';
import Sidebar from '../../../components/layout/sideBar';
import SummaryStatistics from './utils/summaryStatistics';
import SummaryEnquiries from './utils/summaryEnquiries';
import '../../../css/mainDashboard.css'; // For layout
import '../../../components/icons/search.png';
import Footer from '../../../components/layout/Footer';

const MainDashboard = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="main-content">
        <Sidebar />
        <div className="dashboard">
            <div className="search-container">
            <input type="text" placeholder="Search for functionality..." className="search-bar" />
            <img 
                src={require('../../../components/icons/search.png')} 
                alt="Search" 
                className="search-icon"
            />
            </div>

          {/* Dashboard content */}
          <SummaryStatistics />
          <SummaryEnquiries />
         
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MainDashboard;
