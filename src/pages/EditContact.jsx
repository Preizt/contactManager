import React, {  useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { updatingContact, viewContact } from "../services/allAPI";
import { toast } from "react-toastify";


const EditContact = () => {
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const [editData, setEditData] = useState({
    name: "",
    photoUrl: "",
    mobile: "",
    email: "",
    company: "",
    title: "",
  });

  // console.log(editData);
  const contactID = localStorage.getItem("editId");
  // console.log(contactID);

  const editContactDetails = async () => {
    let res = await viewContact(contactID);
    setData(res.data);

    // console.log(contactID);
  };

  const load = () => {
    setEditData({
      name: data.name || "",
      photoUrl: data.photoUrl || "",
      mobile: data.mobile || "",
      email: data.email || "",
      company: data.company || "",
      title: data.title || "",
    });
  };

  // console.log(editData);

  useEffect(() => {
    editContactDetails();
  }, []);

  useEffect(() => {
    load();
  }, [data]);

  const updateContact = async (e) => {
    e.preventDefault();

    
    await updatingContact(contactID, editData);
    toast.warning("Contact Updated");
    navigate("/")
    // alert("sdkghu")
    
  };

  return (
    <>
      <div className="container-fluid bg-light min-vh-100">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4">
            <div className="card custom-card shadow-lg">
              <div className="card-body p-5">
                <h3 className="card-title text-center mb-4">
                  Edit <span className="text-warning">Contact</span>
                </h3>

                <form autocomplete="off">
                  {/* Name Input */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      id="name"
                      placeholder="Enter your name"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                    />
                  </div>

                  {/* Photo URL Input */}
                  <div className="mb-3">
                    <label htmlFor="photoUrl" className="form-label">
                      Photo URL
                    </label>
                    <input
                      type="url"
                      className="form-control custom-input"
                      id="photoUrl"
                      placeholder="Enter image URL"
                      value={editData.photoUrl}
                      onChange={(e) =>
                        setEditData({ ...editData, photoUrl: e.target.value })
                      }
                    />
                  </div>

                  {/* Mobile Input */}
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      className="form-control custom-input"
                      id="mobile"
                      placeholder="Enter your mobile number"
                      value={editData.mobile}
                      onChange={(e) =>
                        setEditData({ ...editData, mobile: e.target.value })
                      }
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control custom-input"
                      id="email"
                      placeholder="Enter your email"
                      value={editData.email}
                      onChange={(e) =>
                        setEditData({ ...editData, email: e.target.value })
                      }
                    />
                  </div>

                  {/* Company Input */}
                  <div className="mb-3">
                    <label htmlFor="company" className="form-label">
                      Company
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      id="company"
                      placeholder="Enter your company name"
                      value={editData.company}
                      onChange={(e) =>
                        setEditData({ ...editData, company: e.target.value })
                      }
                    />
                  </div>

                  {/* Title Input */}
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      id="title"
                      placeholder="Enter your job title"
                      value={editData.title}
                      onChange={(e) =>
                        setEditData({ ...editData, title: e.target.value })
                      }
                    />
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-evenly">
                    <button
                      type="submit"
                      className="btn btn-warning custom-btn"
                      onClick={(e)=>updateContact(e)}
                    >
                      Update
                    </button>
                    <Link to="/">
                      <button
                        type="button"
                        className=" btn btn-dark custom-btn"
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-primary custom-btn w-100 mt-3"
                    >
                      Back
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContact;
