import React, { useState } from "react";

const dummyEmployees = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "1234567890" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "0987654321" },
  { id: 3, name: "Carol White", email: "carol@example.com", phone: "5555555555" },
];

export default function EmployeeSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = dummyEmployees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(query.toLowerCase()) ||
        emp.email.toLowerCase().includes(query.toLowerCase()) ||
        emp.phone.includes(query)
    );
    setResults(filtered);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search Employee</h2>
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          placeholder="Search by name, email or phone"
          className="w-full max-w-md border px-3 py-2 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="ml-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div>
        {results.length === 0 ? (
          <p>No employees found</p>
        ) : (
          <ul className="list-disc list-inside">
            {results.map((emp) => (
              <li key={emp.id}>
                {emp.name} - {emp.email} - {emp.phone}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}