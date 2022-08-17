
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/posts/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">First Name: {user.fname}</li>
        <li className="list-group-item">Last Name: {user.lname}</li>
        <li className="list-group-item">Email Id: {user.email}</li>
      </ul>
    </div>
  );
};

export default User;
