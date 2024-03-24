
import React, { useState, useEffect } from 'react';
import './SalesReport.css';
export default function SalesReport(){
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        //fake ass data 
      const mockData = [
        { id: 1, date: '02-14-2064', shoeType: 'Converse', employeeName: 'john doe', quantity: 5, amount: 1000 },
        { id: 2, date: '01-01-2024', shoeType: 'More Converse', employeeName: 'sneha jacob', quantity: 10000, amount: 150000 },
      ];
      setSalesData(mockData);
    }, []);
  
    //only get unique employee names 
    const uniqueEmployees = ["john doe", "sneha jacob", "your mom"];
  
    return (
      <div className="sales-report-container">
        <h1 className="report-heading">Sales Report</h1>
  
        <div className="data-table">
          <h2>Sales Data</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Shoe Type</th>
                <th>Employee Name</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map(sale => (
                <tr key={sale.id}>
                  <td>{sale.date}</td>
                  <td>{sale.shoeType}</td>
                  <td>{sale.employeeName}</td>
                  <td>{sale.quantity}</td>
                  <td>${sale.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="data-table">
          <h2>Employee Details</h2>
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {uniqueEmployees.map(employee => (
                <tr key={employee}>
                  <td>{employee}</td>
                  <td>
                    {/* ${salesData.filter(sale => sale.employeeName === employee)}
                    {salesData.reduce((total, sale) => total + sale.amount, 0)} */}
                    ${salesData
                    .filter(sale => sale.employeeName === employee)
                    .reduce((total, sale) => total + sale.amount, 0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}