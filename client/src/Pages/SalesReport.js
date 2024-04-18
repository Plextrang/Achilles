import React, { useState, useEffect } from 'react';
import './SalesReport.css';
export default function SalesReport(){
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
      async function fetchData() {
          try {
              const response = await fetch('https://cosc-3380-6au9.vercel.app/api/handlers/history/getShoeReport/');
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setSalesData(data);
          } catch (error) {
              console.error('Error fetching sales report:', error);
          }
      }

      fetchData();
    }, []);
  
    //fake ass data pt2
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
                <th>Shoe Name</th>
                <th>Shoe ID</th>
                <th>Units Sold</th>
                <th>Total Sales</th>
                <th>Stock Remaining</th>
                {/* <th>Amount</th> */}
              </tr>
            </thead>
            <tbody>
              {salesData.map(report => (
                <tr key={report.product_id}>
                  <td>{report.item_name}</td>
                  <td>{report.product_id}</td>
                  <td>{report.units_sold}</td>
                  <td>${report.total_sales.toFixed(2)}</td>
                  <td>{report.stock}</td>
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