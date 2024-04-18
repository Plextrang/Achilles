import React, { useState, useEffect } from 'react';
import './SalesReport.css';
export default function SalesReport(){
    const [salesData, setSalesData] = useState([]);
    const [custData, setCustData] = useState([]);

    useEffect(() => {
      async function fetchSalesData() {
        try {
          const salesResponse = await fetch('https://cosc-3380-6au9.vercel.app/api/handlers/history/getShoeReport/');
          if (!salesResponse.ok) {
              throw new Error('Failed to fetch sales data');
          }
          const salesData = await salesResponse.json();
          setSalesData(salesData);
        } catch (error) {
          console.error('Error fetching sales data:', error);
        }
      }

      async function fetchCustomerData() {
        try {
          const custResponse = await fetch('https://cosc-3380-6au9.vercel.app/api/handlers/history/getCustomerReport/');
          if (!custResponse.ok) {
              throw new Error('Failed to fetch customer data');
          }
          const custData = await custResponse.json();
          setCustData(custData);
        } catch (error) {
          console.error('Error fetching customer data:', error);
        }
      }

      fetchSalesData();
      fetchCustomerData();
    }, []);
  
  
    return (
      <div className="sales-report-container">
        <h1 className="report-heading">Sales Report</h1>
        <nav className="filters">
          <a href="#" className="active">
            Inventory
          </a>
          <a href="#">Employees</a>
          <a href="#">Supplier</a>
        </nav>
  
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
          <h2>Customer Details</h2>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th># of Transactions</th>
                <th>Units Bought</th>
                <th>Total Expenditure</th>
              </tr>
            </thead>
            <tbody>
              {custData.map(customer => (
                <tr key={customer.user_id}>
                  <td>{customer.user_id}</td>
                  <td>{customer.full_name}</td>
                  <td>{customer.total_transactions ? customer.total_transactions : 0}</td>
                  <td>{customer.units_bought ? customer.units_bought : 0}</td>
                  <td>${customer.total_expenditure ? customer.total_cost_of_purchases.toFixed(2) : 'N/A'}</td>
                </tr>
              ))}
          </tbody>
          </table>
        </div>
      </div>
    );
    //todo: create a export to pdf button 
}