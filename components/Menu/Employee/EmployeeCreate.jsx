import React, { useState } from "react";

export default function EmployeeCreate() {
  const [employee, setEmployee] = useState({ name: "", email: "", phone: "" });
  const [employees, setEmployees] = useState([]);

  const handleChange = (e) =>
    setEmployee({ ...employee, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.name || !employee.email) {
      alert("Name and Email are required.");
      return;
    }
    setEmployees([...employees, employee]);
    setEmployee({ name: "", email: "", phone: "" });
    alert("Employee Created!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create Employee</h2>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="phone"
          value={employee.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create
        </button>
      </form>

      <div className="mt-8">
        <h3 className="font-semibold text-xl">Created Employees (Session only):</h3>
        <ul className="list-disc list-inside">
          {employees.map((emp, i) => (
            <li key={i}>
              {emp.name} - {emp.email} - {emp.phone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}