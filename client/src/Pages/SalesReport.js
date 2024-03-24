
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
    const mockEmployees = [
        // "john doe", "sneha jacob", "your mom"
        {name: "john doe", pno: "123-456-7890", bday: '01-01-2024'},
        {name: "jane doe", pno: "321-654-0987", bday: '01-01-2024'},
        {name: "sneha jacob", pno: "888-888-8888", bday: '01-01-2024'},

    ];
  
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
              {salesData.map(report => (
                <tr key={report.id}>
                  <td>{report.date}</td>
                  <td>{report.shoeType}</td>
                  <td>{report.employeeName}</td>
                  <td>{report.quantity}</td>
                  <td>${report.amount}</td>
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
                <th>Phone Number</th>
                <th>Birth Date</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {mockEmployees.map(employee => (
                <tr key={employee.name}>
                  <td>{employee.name}</td>
                  <td>{employee.pno}</td>
                  <td>{employee.bday}</td>
                  <td>
                    {/* ${salesData.filter(sale => sale.employeeName === employee)}
                    {salesData.reduce((total, sale) => total + sale.amount, 0)} */}
                    ${salesData
                    .filter(report => report.employeeName === employee.name)
                    .reduce((total, report) => total + report.amount, 0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    //todo: create a export to pdf button 
}