import { useState } from "react";
import "./App.css";

export default function App() {
 const initialUser = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false
}
  const [userDetails, setUserDetails] = useState(initialUser);

  const inputHandler = (e) => {
    e.preventDefault();
   const fields= e.target.elements;
   const copyUserDetails =Object.assign({}, initialUser);
  for(let i = 0; i <fields.length; i++) {
    const inputName = fields[i].name;
    const inputValue = fields[i].value;
    copyUserDetails[inputName]=inputValue
  }
  setUserDetails(copyUserDetails);
}

const resetUserDetails = () => {
  setUserDetails(initialUser);
}

  return (
    <>
      <form className="form"  onSubmit={inputHandler}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required />
          </label>
          <label>
            Address
            <input type="text" name="address" />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" />
          </label>

          <label>
            Email
            <input type="email" name="email" />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
