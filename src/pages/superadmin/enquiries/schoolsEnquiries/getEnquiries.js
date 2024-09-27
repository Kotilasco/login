import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"
import '../../../../css/mainDashboard.css'; 
import '../../../../components/icons/ex-mark.png';
import GetSchoolDetails from './getSchoolDetails';


const GetEnquiry = () => {
  const data = [
    {
      name: 'Jesse Pinkman High School',
      address: '303 Negra Arroyo St Harare, ZW',
      admin: 'Saul Salamanca',
      adminPhone: '+263 777777777',
      adminEmail: 'saulsal@jesse.com',
      schoolPhone: '+263 301 029',
      date: '2024-10-25',
      status: 'Pending',
    },
    {
      name: 'Asante Primary School',
      address: 'Stand 2 Ilanga Bulawayo, ZW',
      admin: 'Lalo Goodman',
      adminPhone: '+263 71222342',
      adminEmail: 'lalo@gmail.com',
      schoolPhone: '+263 956 647',
      date: '2024-09-24',
      status: 'Resolved',
    },
    {
      name: 'Cheng Academy',
      address: '292 Rd Rezende Buchwa',
      admin: 'Senzeni Na',
      adminPhone: '+263 72334422',
      adminEmail: 'senna@cheng.ac.zw',
      schoolPhone: '+263 712 125',
      date: '2024-09-24',
      status: 'Resolved',
    },
    {
      name: 'Cheng Academy',
      address: '292 Rd Rezende Buchwa',
      admin: 'Senzeni Na',
      adminPhone: '+263 72334422',
      adminEmail: 'senna@cheng.ac.zw',
      schoolPhone: '+263 712 125',
      date: '2024-09-23',
      status: 'Pending',
    },
    {
      name: 'Kimiko High School',
      address: '464 Pi Rd Buerne Su Chiredzi',
      admin: 'Grace Baracas',
      adminPhone: '+263 77144322',
      adminEmail: 'grace@gmail.com',
      schoolPhone: '+263 749 942',
      date: '2024-08-15',
      status: 'Resolved',
    },{
      name: 'Kimiko High School',
      address: '464 Pi Rd Buerne Su Chiredzi',
      admin: 'Grace Baracas',
      adminPhone: '+263 77144322',
      adminEmail: 'grace@gmail.com',
      schoolPhone: '+263 749 942',
      date: '2024-08-15',
      status: 'Resolved',
    },{
      name: 'Kimiko High School',
      address: '464 Pi Rd Buerne Su Chiredzi',
      admin: 'Grace Baracas',
      adminPhone: '+263 77144322',
      adminEmail: 'grace@gmail.com',
      schoolPhone: '+263 749 942',
      date: '2024-08-15',
      status: 'Resolved',
    },{
      name: 'Kimiko High School',
      address: '464 Pi Rd Buerne Su Chiredzi',
      admin: 'Grace Baracas',
      adminPhone: '+263 77144322',
      adminEmail: 'grace@gmail.com',
      schoolPhone: '+263 749 942',
      date: '2024-08-15',
      status: 'Resolved',
    },{
      name: 'Kimiko High School',
      address: '464 Pi Rd Buerne Su Chiredzi',
      admin: 'Grace Baracas',
      adminPhone: '+263 77144322',
      adminEmail: 'grace@gmail.com',
      schoolPhone: '+263 749 942',
      date: '2024-08-15',
      status: 'Resolved',
    },{
      name: 'Kimiko High School',
      address: '464 Pi Rd Buerne Su Chiredzi',
      admin: 'Grace Baracas',
      adminPhone: '+263 77144322',
      adminEmail: 'grace@gmail.com',
      schoolPhone: '+263 749 942',
      date: '2024-08-15',
      status: 'Resolved',
    },
    {
      name: 'Kimiko High School',
      address: '464 Pi Rd Buerne Su Chiredzi',
      admin: 'Grace Baracas',
      adminPhone: '+263 77144322',
      adminEmail: 'grace@gmail.com',
      schoolPhone: '+263 749 942',
      date: '2024-08-15',
      status: 'Resolved',
    }
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const [sortBy, setSortBy] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Table Sorting logic
  const sortedData = [...data].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'date') {
      return new Date(a.date) - new Date(b.date);
    }
    return 0; // Default case if no sorting is applied
  });

  // Table Filtering logic
  const filteredData = filterStatus
    ? sortedData.filter((school) => school.status === filterStatus)
    : sortedData;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [selectedSchool, setSelectedSchool] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (school) => {
    setSelectedSchool(school);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSchool(null);
  };



  return (
    
    <div className="table-container">
    <div className="search-container">
            <input type="text" placeholder="Search enquiry by school name, admin name or location..." className="search-bar" />
            
            </div>

            {/* Sort by and Filter by dropdowns */}
      <div className="controls">
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </label>

        <label>
          Filter by:
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="">None</option>
            <option value="Pending">Pending</option>
            <option value="Resolved">Resolved</option>
          </select>
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name of school</th>
            <th>School Address</th>
            <th>Name of Admin</th>
            <th>Admin's phone number</th>
            <th>Admin's email</th>
            <th>School phone number</th>
            <th>Date</th>
            <th>Status</th>
            <th>Edit Status</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((school, index) => (
            <tr key={index}>
              <td>{school.name}</td>
              <td>{school.address}</td>
              <td>{school.admin}</td>
              <td>{school.adminPhone}</td>
              <td>{school.adminEmail}</td>
              <td>{school.schoolPhone}</td>
              <td>{school.date}</td>
              <td>
                <span className={school.status === 'Resolved' ? 'resolved' : 'pending'}>
                  {school.status}
                </span>
              </td>
              <td className="viewMore">
              <Link to="">
              <img 
                  src={require('../../../../components/icons/edit.png')}
                  alt="Edit" style={{ width: '24px', height: '24px' }}
                />
                </Link>
              </td>
              <td className="viewMore">
              <Link to="">
              <img 
                  src={require('../../../../components/icons/eye.png')}
                  alt="Details" onClick={() => handleViewDetails(school)} style={{ width: '30px', height: '24px' }}
                />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for viewing details */}
      <GetSchoolDetails school={selectedSchool} isOpen={isModalOpen} onClose={closeModal} />

      {/* Pagination Controls */}
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GetEnquiry;
