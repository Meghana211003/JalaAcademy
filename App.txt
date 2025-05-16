import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Menu/Home";
import EmployeeCreate from "./components/Menu/Employee/EmployeeCreate";
import EmployeeSearch from "./components/Menu/Employee/EmployeeSearch";
import MoreMenuCRUD from "./components/Menu/More/MoreMenuCRUD";
import Settings from "./components/Menu/Settings";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <nav className="w-64 bg-gray-800 text-white flex flex-col p-4">
          <h1 className="text-2xl font-bold mb-6">JALA Academy</h1>
          <Link
            to="/"
            className="mb-3 hover:bg-gray-700 rounded px-3 py-2"
          >
            Home
          </Link>
          <div>
            <p className="font-semibold">Employee</p>
            <Link
              to="/employee/create"
              className="ml-4 block hover:bg-gray-700 rounded px-3 py-1"
            >
              Create
            </Link>
            <Link
              to="/employee/search"
              className="ml-4 block hover:bg-gray-700 rounded px-3 py-1"
            >
              Search
            </Link>
          </div>
          <Link
            to="/more"
            className="mt-4 mb-3 hover:bg-gray-700 rounded px-3 py-2"
          >
            More
          </Link>
          <Link
            to="/settings"
            className="hover:bg-gray-700 rounded px-3 py-2"
          >
            Settings
          </Link>
        </nav>
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee/create" element={<EmployeeCreate />} />
            <Route path="/employee/search" element={<EmployeeSearch />} />
            <Route path="/more" element={<MoreMenuCRUD />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;