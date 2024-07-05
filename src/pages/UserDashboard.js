import React, { useState } from "react";

const UserDashboard = ({ userName, onAddPolicy }) => {
  const [form, setForm] = useState({
    policyNumber: "",
    policyHolder: "",
    companyName: "",
    insuranceType: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onAddPolicy(form);
    setForm({
      policyNumber: "",
      policyHolder: "",
      companyName: "",
      insuranceType: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl mb-4">Welcome, {userName} (user)</h1>
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Policy Number</label>
          <input
            type="text"
            name="policyNumber"
            value={form.policyNumber}
            onChange={handleChange}
            className="border px-2 py-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Policy Holder</label>
          <input
            type="text"
            name="policyHolder"
            value={form.policyHolder}
            onChange={handleChange}
            className="border px-2 py-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="border px-2 py-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Insurance Type</label>
          <input
            type="text"
            name="insuranceType"
            value={form.insuranceType}
            onChange={handleChange}
            className="border px-2 py-1 w-full"
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserDashboard;
