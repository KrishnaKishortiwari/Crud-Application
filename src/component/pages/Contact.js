import React from "react";

function Contact() {
  return (
    <div className="container">
      <h2>Contact Component</h2>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Krishna Kishor Tiwari" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="kt827047@gmail.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">mobile number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="8377817360" />
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Confirm</button>
  </div>
    </div>
  );
}

export default Contact;
