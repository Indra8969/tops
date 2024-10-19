import React, { useState } from "react";
import useValidateForm from "./useValidateForm";

//Functional Register component
export const Register = () => {
  const RequiredFields = ["email", "password", "confirmPassword", "fname", "lname", "phoneNumber", "address", "region", "country"]
    //using state for the feilds of the form {name, value} pair
  const [fields, setFields] = useState({});
  //using the custom hook useValidateForm
  const [result, check] = useValidateForm();

  //this function handle the change in the inputs
  const handleChange = (e) => {
    //destructuring the name and value form the target element
    const { name, value } = e.target;
    //settting feils on change
    setFields({
      ...fields,
      [name]: value,
    });
  };

  //this function handle the form submission
  const handleSubmit = (e) => {
    //preventing the form to submit
    e.preventDefault();
    // using the method of the custom hook useValidatonForm to check is form is valid or not >
    check(fields, RequiredFields);
    check(fields, RequiredFields);
    if(result && result.status == "valid"){
        alert("Submitted")
    }
  };

  return (
    <div className="container">
      {/* continaer */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>USER REGISTRATION</h1>
          </div>
          <div>
            <p>Fields marked * are required</p>
            <div>
              <label htmlFor="email">Email*</label>
              <input
                onChange={handleChange}
                name="email"
                type="text"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password*</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
              />
            </div>
            <div>
              <label htmlFor="confirm-pass">Confirm Password*</label>
              <input
                onChange={handleChange}
                name="confirmPassword"
                type="password"
                id="confirm-pass"
              />
            </div>
            <div>
              <label htmlFor="fname">First Name*</label>
              <input
                name="fname"
                onChange={handleChange}
                type="text"
                id="fname"
              />
            </div>
            <div>
              <label htmlFor="lname">Last Name*</label>
              <input
                name="lname"
                onChange={handleChange}
                type="text"
                id="lname"
              />
            </div>
            <div>
              <label htmlFor="phone-no">Phone Number*</label>
              <input
                name="phoneNumber"
                onChange={handleChange}
                type="tel"
                id="phone-no"
              />
            </div>
            <div>
              <label htmlFor="address">Address*</label>
              <input
                name="address"
                onChange={handleChange}
                type="text"
                id="address"
              />
            </div>
            <div>
              <label htmlFor="town">Town</label>
              <input
                name="town"
                onChange={handleChange}
                type="text"
                id="town"
              />
            </div>
            <div>
              <label htmlFor="region">Region*</label>
              <input
                name="region"
                onChange={handleChange}
                type="text"
                id="region"
              />
            </div>
            <div>
              <label htmlFor="postcode">Postcode / Zip*</label>
              <input
                name="postcode"
                onChange={handleChange}
                type="number"
                id="postcode"
              />
            </div>
            <div>
              <label htmlFor="country">Country*</label>
              <input
                name="country"
                onChange={handleChange}
                type="text"
                id="country"
              />
            </div>
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
          {
            result.errors.map((item)=>(
                <p key={item} style={{color: "brown"}}>{item}</p>
            ))
          }
        </form>
      </div>
    </div>
  );
};
