import React, {useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddUsers() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
})
 const {fname, lname, email} = user;
const onInputChange = e =>{
  setUser({...user,[e.target.name]: e.target.value})
};
const onSubmit = async e => {
  e.preventDefault();
  await axios.post("http://localhost:3001/posts", user);
  navigate("/");
};

  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Add A User</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="fname"
            value={fname}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Username"
            name="lname"
            value={lname}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your E-mail Address"
            name="email"
            value={email}
            onChange={e => onInputChange(e)}
          />
        </div>
        
        <button className="btn btn-primary btn-block">Add User</button>
      </form>
    </div>
  </div>
  );
}

export default AddUsers;