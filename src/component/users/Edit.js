import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  let navigate = useNavigate();
  const {id} =useParams();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: ""
})
 const {fname, lname, email} = user;
const onInputChange = e =>{
  setUser({...user,[e.target.name]: e.target.value})
};

useEffect(() => {
    loadUser();
  }, []);

const onSubmit = async e => {
  e.preventDefault();
  await axios.put(`http://localhost:3001/posts/${id}`, user);
  navigate("/");
};

const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/posts/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Edit User Detail</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="fname"
            value={fname}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Username"
            name="lname"
            value={lname}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group m-2">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your E-mail Address"
            name="email"
            value={email}
            onChange={e => onInputChange(e)}
          />
        </div>
        
        <button className="btn btn-warning btn-block">Update User</button>
      </form>
    </div>
  </div>
  );
}

export default Edit;
