// import { Form } from "semantic-ui-react";
import React, { useState } from "react";
import axios from "axios";
const CreateContact = () => {
    const [contactname, setContactname] = useState("");
    const [ email, setEmail] = useState("");
    const [job, setJob] = useState("");
    const [phone, setPhone ] = useState("");

    // const postData = (event) => {
    //     event.preventDefault();
    //     console.log(contactname);
    //     console.log(email);
    //     console.log(job);
    //     console.log(phone);
    //     setContactname("");
    //     setEmail("");
    //     setJob("");
    //     setPhone("")
    // }
    const postData = (event) => {
        event.preventDefault();
        axios.post(`https://6304e96294b8c58fd7280ac4.mockapi.io/fakeData`, {
            name: contactname,
            email: email,
            job: job,
            phone: phone
        })
        console.log("first")
    }
    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  return (
    <>
      <div className="text-center ">
        <form 
        // onSubmit={handleOnSubmit}
       className="flex-col" >
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text font-medium text-1xl pr-4">Your Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
            //   value={contactname}
              placeholder="Daniel Enoch" 
              onChange={(e) => setContactname(e.target.value)}
              className="input input-bordered base-300 w-1/2 mt-2"
            />
          </label>
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text font-medium text-1xl pr-4">Your Email</span>
          </label>
          <label className="input-group">
            <input
              type="text"
            //   value={email}
              placeholder="info@site.com" 
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered base-300 w-1/2 mt-2"
            />
          </label>
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-textfont-medium text-1xl pr-4">Job</span>
          </label>
          <label className="input-group">
            <input
              type="text"
            //   value={job}
              placeholder="software developer" 
              onChange={(e) => setJob(e.target.value)}
              className="input input-bordered base-300 w-1/2 mt-2"
            />
          </label>
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-textfont-medium text-1xl pr-4">Phone</span>
          </label>
          <label className="input-group">
            <input
              type="text"
            //   value={phone}
              placeholder="+234" 
              onChange={(e) => setPhone(e.target.value)}
              className="input input-bordered base-300 w-1/2 mt-2"
            />
          </label>
        </div>
        <button className="btn btn-accent mt-7 px-10 py-3 bg-slate-800 text-white hover:to-blue-800" type='submit' onClick={postData}>ADD</button>
        </form>
      </div>
    </>
  );
};
export default CreateContact;
