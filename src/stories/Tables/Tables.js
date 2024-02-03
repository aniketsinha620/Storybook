import React from 'react';
import "./Tables.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export default function Tables() {
  const data = [
    {
      name: "Peter John",
      email: "Peter@gmail.com",
      role: "Owner",
      locations: "Adam Stall",
      lastActive: "Sep 13, 2023 5:51 PM",
      permissions: "All Permissions",
      status: "Active"
    },
    {
      name: "Lingan",
      email: "Lin@gmail.com",
      role: "Executive",
      locations: "MMDA",
      lastActive: "Today, 2023 2:11 PM",
      permissions: "3 Permissions",
      status: "Active"
    },
    {
      name: "Adam",
      email: "Adam@gmail.com",
      role: "Admin",
      locations: "DEO Office",
      lastActive: "Sep 13, 2023 5:51 PM",
      permissions: "6 Permissions",
      status: "Active"
    },
    {
      name: "Smith",
      email: "Smith@gmail.com",
      role: "Supervisor",
      locations: "Plot Hub",
      lastActive: "Sep 13, 2023 5:51 PM",
      permissions: "5 Permissions",
      status: "Active"
    },
    {
      name: "John Abraham",
      email: "Jhon@gmail.com",
      role: "Executive",
      locations: "CA",
      lastActive: "Sep 13, 2023 5:51 PM",
      permissions: "2 Permissions",
      status: "Inactive"
    }
  ];

  return (
    <div className='tables'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Locations</th>
            <th>Last Active</th>
            <th>Permissions</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.locations}</td>
              <td>{item.lastActive}</td>
              <td>{item.permissions}</td>
              <td><button className={item.status === 'Inactive' ? 'inactive' : ''}>{item.status}</button></td>
              <td>
                <FaRegEdit size={24} />
                <span style={{ margin: '0 8px' }}></span> {/* Add space between icons */}
                <RiDeleteBinLine size={24} style={{ color: 'red' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
