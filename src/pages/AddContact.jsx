import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { uploadData } from "../services/allAPI";
import { toast, ToastContainer } from "react-toastify";

const AddContact = () => {
  const navigate = useNavigate();

  //by using the spread operator to alterante the object
  const [contact, setContact] = useState({
    name: "",
    photoUrl: "",
    mobile: "",
    email: "",
    company: "",
    title: "",
  });

  const createContact = async (e) => {
    e.preventDefault();
    if (
      contact.name &&
      contact.photoUrl &&
      contact.mobile &&
      contact.email &&
      contact.company &&
      contact.title
    ) {
      // console.log("success");

      try {
        let response = await uploadData(contact);
        // console.log(response);
        if (response.status >= 200 && response.status <= 300) {
          // alert("Successfully saved your Contact");

          // status code check cheyath to let know if the data has been saved or not in the json server
          setContact({
            name: "",
            photoUrl: "",
            mobile: "",
            email: "",
            company: "",
            title: "",
          });
          toast.success("Contact Created");
          navigate("/");
          //to clear the input value after saving the data
        } else {
          alert("Error Occured , Please contact the ADMIN");
        }
      } catch (error) {
        alert("An error occurred");
      }
    } else {
      toast.warning("Fill all the Details");
    }
  };

  return (
    <>
      {/* Background with gradient */}
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="col-md-4">
          {/* Glassmorphism Card */}
          <div
            className="card border-0 shadow-lg p-4 rounded-4"
            style={glassmorphismStyle}
          >
            <div className="card-body">
              <h3 className="card-title text-center mb-4 fw-bold text-dark">
                Create <span className="text-primary">Contact</span>
              </h3>

              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    onChange={(e) =>
                      setContact({ ...contact, name: e.target.value })
                    }
                    type="text"
                    className="form-control input-style"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="photoUrl" className="form-label fw-semibold">
                    Photo URL
                  </label>
                  <input
                    onChange={(e) =>
                      setContact({ ...contact, photoUrl: e.target.value })
                    }
                    type="url"
                    className="form-control input-style"
                    id="photoUrl"
                    placeholder="Enter image URL"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label fw-semibold">
                    Mobile
                  </label>
                  <input
                    onChange={(e) =>
                      setContact({ ...contact, mobile: e.target.value })
                    }
                    type="tel"
                    className="form-control input-style"
                    id="mobile"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                    type="email"
                    className="form-control input-style"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="company" className="form-label fw-semibold">
                    Company
                  </label>
                  <input
                    onChange={(e) =>
                      setContact({ ...contact, company: e.target.value })
                    }
                    type="text"
                    className="form-control input-style"
                    id="company"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-semibold">
                    Title
                  </label>
                  <input
                    onChange={(e) =>
                      setContact({ ...contact, title: e.target.value })
                    }
                    type="text"
                    className="form-control input-style"
                    id="title"
                    placeholder="Enter your job title"
                  />
                </div>

                {/* Select Group
                <div className="mb-4">
                  <label htmlFor="group" className="form-label fw-semibold">
                    Select Group
                  </label>
                  <select
                    className="form-select input-style"
                    onChange={(e) =>
                      setContact({ ...contact, group: e.target.value })
                    }
                  >
                    <option value="">Select Group</option>
                    <option value="work">👔 Work</option>
                    <option value="friends">🎉 Friends</option>
                    <option value="family">🏡 Family</option>
                  </select>
                </div> */}

                <div className="d-flex justify-content-between">
                  <button
                    type="submit"
                    className="btn btn-primary custom-btn"
                    onClick={createContact}
                  >
                    Create Contact
                  </button>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-outline-dark custom-btn"
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



// Glassmorphism effect for modern UI
const glassmorphismStyle = {
  background: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(10px)",
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

// Custom styles for inputs and buttons
const styleSheet = `
  .input-style {
    border-radius: 8px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
  .input-style:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  }
  .custom-btn {
    padding: 10px 16px;
    font-weight: bold;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  .custom-btn:hover {
    transform: translateY(-2px);
  }
`;

// Injecting custom styles into the document
const styleTag = document.createElement("style");
styleTag.innerHTML = styleSheet;
document.head.appendChild(styleTag);

export default AddContact;
