import React from "react";
import { generatePDF } from "../utils/pdfGenerator";

const AdminDashboard = ({ userName, policies }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl mb-4">Welcome, {userName} (admin)</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Policy Number</th>
            <th className="py-2">Policy Holder</th>
            <th className="py-2">Company Name</th>
            <th className="py-2">Insurance Type</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((policy, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{policy.policyNumber}</td>
              <td className="border px-4 py-2">{policy.policyHolder}</td>
              <td className="border px-4 py-2">{policy.companyName}</td>
              <td className="border px-4 py-2">{policy.insuranceType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => generatePDF(policies)}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default AdminDashboard;
