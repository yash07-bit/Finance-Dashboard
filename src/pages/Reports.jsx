import React from 'react'

const Reports = () => {
  const reports = [
    { id: 1, name: 'Monthly Summary', date: 'Oct 2024', format: 'PDF', size: '2.4 MB' },
    { id: 2, name: 'Quarterly Review', date: 'Q3 2024', format: 'PDF', size: '5.1 MB' },
    { id: 3, name: 'Annual Report', date: '2023', format: 'PDF', size: '8.7 MB' }
  ]

  return (
    <main className="ml-64 pt-24 pb-12 px-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Reports</h1>
          <p className="text-gray-500">View and download your financial reports</p>
        </div>
        <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
          + Generate Report
        </button>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        {[
          { title: 'Monthly Statements', count: '12 available' },
          { title: 'Quarterly Reports', count: '4 available' },
          { title: 'Annual Summaries', count: '3 available' }
        ].map((type, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <span className="material-symbols-outlined text-3xl text-blue-700 mb-3 block">description</span>
            <h3 className="font-bold text-gray-900 mb-1">{type.title}</h3>
            <p className="text-sm text-gray-500">{type.count}</p>
          </div>
        ))}
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Report Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Format</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Size</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{report.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{report.date}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{report.format}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{report.size}</td>
                <td className="px-6 py-4 text-sm flex gap-2">
                  <button className="text-blue-700 hover:underline font-medium">Download</button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="material-symbols-outlined text-sm">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Reports
