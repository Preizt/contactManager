import React from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
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
                    />
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-evenly">
                    <button
                      type="submit"
                      className="btn btn-warning custom-btn"
                    >
                      Update
                    </button>
                    <Link to="/">
                      <button type="button" className="btn btn-dark custom-btn">
                        Cancel
                      </button>
                    </Link>
                  </div>
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
