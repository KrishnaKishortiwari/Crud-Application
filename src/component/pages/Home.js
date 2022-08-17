import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, SetUser] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get("http://localhost:3001/posts");
    SetUser(result.data.reverse());
  };
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3001/posts/${id}`);
    loadData();
  };

  return (
    <div className="container">
      <h2>Home Component</h2>
      <table className="table">
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-primary m-2" to={`/users/${user.id}`}>
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary m-2"
                  to={`/users/edit/${user.id}`}
                >
                  Edit
                </Link>
                <a
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
