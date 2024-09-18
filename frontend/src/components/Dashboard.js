import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Import Header
import Sidebar from './Sidebar'; // Import Sidebar
import Employees from './Employees'; // Import Employees (to display employee list)

const Dashboard = () => {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard'); // Track the active page (dashboard/employees/etc.)
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  };

  // Handle menu click from the sidebar
  const handleMenuClick = (page) => {
    setActivePage(page); // Change the page based on user click
  };

  return (
    <div className="h-full w-screen flex flex-col">
      {/* Add Header at the top */}
      <Header toggleSidenav={toggleSidenav} />

      {/* Main layout with sidebar and content */}
      <div className="flex flex-row h-full">
        <Sidebar sidenavOpen={sidenavOpen} toggleSidenav={toggleSidenav} onMenuClick={handleMenuClick} />

        {/* Main content */}
        <div className="flex-grow p-4">
          {activePage === 'dashboard' && (
            <>
              <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-2">Total Employees</h2>
                  <p className="text-3xl font-bold text-teal-500">120</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-2">Active Projects</h2>
                  <p className="text-3xl font-bold text-teal-500">15</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-2">Pending Tasks</h2>
                  <p className="text-3xl font-bold text-teal-500">45</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-2">Upcoming Meetings</h2>
                  <p className="text-3xl font-bold text-teal-500">3</p>
                </div>

                {/* Card 5 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-2">Support Tickets</h2>
                  <p className="text-3xl font-bold text-teal-500">8</p>
                </div>

                {/* Card 6 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-2">New Employees</h2>
                  <p className="text-3xl font-bold text-teal-500">5</p>
                </div>
              </div>

              {/* Recent Activities Section */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
                <ul className="space-y-2">
                  <li className="p-4 bg-gray-100 rounded-lg shadow-md">
                    John Doe completed the task "Design Homepage."
                  </li>
                  <li className="p-4 bg-gray-100 rounded-lg shadow-md">
                    Meeting scheduled with the Project Team on 15th Sept.
                  </li>
                  <li className="p-4 bg-gray-100 rounded-lg shadow-md">
                    Sarah completed the onboarding process.
                  </li>
                </ul>
              </div>
            </>
          )}

         {/* Employees Page */}
         {activePage === 'employees' && <Employees />}
          

          {/* You can add more sections for reports, messages, etc. in a similar way */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
