import React, { useState } from 'react';
import Layout from '../../common/Layout';
const Affiliation = () => {
  // Sample data - this could be passed as a prop in a real application
  const initialData = [
    {
      id: 1,
      grade: 'Grade 1',
      tuitionFee: 25000,
      libraryFee: 2000,
      labFee: 3000,
      sportsFee: 1500,
      totalFee: 31500,
      dueDate: '2025-03-15'
    },
    {
      id: 2,
      grade: 'Grade 2',
      tuitionFee: 27000,
      libraryFee: 2000,
      labFee: 3500,
      sportsFee: 1500,
      totalFee: 34000,
      dueDate: '2025-03-15'
    },
    {
      id: 3,
      grade: 'Grade 3',
      tuitionFee: 29000,
      libraryFee: 2000,
      labFee: 4000,
      sportsFee: 1500,
      totalFee: 36500,
      dueDate: '2025-03-15'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [data] = useState(initialData);

  const filteredData = data.filter(item =>
    item.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">School Fees Structure 2025</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-50 text-black">
              <th className="border p-3 text-left">Grade</th>
              <th className="border p-3 text-right">Tuition Fee</th>
              <th className="border p-3 text-right">Library Fee</th>
              <th className="border p-3 text-right">Lab Fee</th>
              <th className="border p-3 text-right">Sports Fee</th>
              <th className="border p-3 text-right">Total Fee</th>
              <th className="border p-3 text-center">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 text-black">
                <td className="border p-3">{item.grade}</td>
                <td className="border p-3 text-right">₹{item.tuitionFee.toLocaleString()}</td>
                <td className="border p-3 text-right">₹{item.libraryFee.toLocaleString()}</td>
                <td className="border p-3 text-right">₹{item.labFee.toLocaleString()}</td>
                <td className="border p-3 text-right">₹{item.sportsFee.toLocaleString()}</td>
                <td className="border p-3 text-right font-medium">₹{item.totalFee.toLocaleString()}</td>
                <td className="border p-3 text-center">{new Date(item.dueDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default Affiliation;