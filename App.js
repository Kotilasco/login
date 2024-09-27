import React from "react";
// import Login from "./pages/auth/Login";
import { BrowserRouter as Router, Routes } from "react-router-dom";
/* import EnrolYourSchool from "./pages/EnrolYourSchool";
import SchoolEnquiries from "./pages/superadmin/enquiries/schoolsEnquiries/schoolEnquiry";
import MainDashboard from "./pages/superadmin/mainDashboard/mainDashboard"; */

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */} {/* To be added */}
        {/* <Route path="/raise_an_enquiry" element={<RaiseAnEnquiry />} /> */}{" "}
        {/* To be added */}
        {/*  <Route path="/enrol_your_school" element={<EnrolYourSchool />} />
        <Route path="/superadmin-dashboard/enquiries-from-schools" element={<SchoolEnquiries />} />
        <Route path="/superadmin-dashboard" element={<MainDashboard />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/about" element={<About />} /> */} {/* To be added */}
        {/* <Route path="/contact" element={<Contact />} /> */}{" "}
        {/* To be added */}
        {/* <Route path="/terms" element={<Terms />} /> */} {/* To be added */}
        {/* <Route path="/privacy" element={<Privacy />} /> */}{" "}
        {/* To be added */}
        {/* <Route path="*" element={<NotFound />} /> */} {/* To be added */}
      </Routes>
    </Router>
  );
};

export default App;
