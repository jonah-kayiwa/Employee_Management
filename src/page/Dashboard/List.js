import React from 'react';

function List({ employees, handleEdit, handleDelete }) 
{
  const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
  });

  
  return (
    <div className="overflow-x-auto w-screen">
      <table className="w-full border-collapse">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 text-center">No.</th>
            <th className="px-4 py-2 text-center">First Name</th>
            <th className="px-4 py-2 text-center">Last Name</th>
            <th className="px-4 py-2 text-center">Email</th>
            <th className="px-4 py-2 text-center">Contact</th>
            <th className="px-4 py-2 text-center">Salary</th>
            <th className="px-4 py-2 text-center">Location</th>
            <th className="px-4 py-2 text-center">Date</th>
            <th className="px-4 py-2 col-span-2 text-center">Decision</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="border px-4 py-2 text-center">{i + 1}</td>
                <td className="border px-4 py-2 text-center">{employee.firstName}</td>
                <td className="border px-4 py-2 text-center">{employee.lastName}</td>
                <td className="border px-4 py-2 text-center">{employee.email}</td>
                <td className="border px-4 py-2 text-center">{employee.contact}</td>
                <td className="border px-4 py-2 text-center">{formatter.format(employee.salary)}</td>
                <td className="border px-4 py-2 text-center">{employee.location}</td>
                <td className="border px-4 py-2 text-center">{employee.date}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleEdit(employee.id)}
                  >
                    UPDATE
                  </button>
                  <button
                    className="bg-red-400 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleDelete(employee.id)}
                  >
                    TERMINATE
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border px-4 py-2 col-span-7 text-center">You have no Employees, Please recruit More!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
