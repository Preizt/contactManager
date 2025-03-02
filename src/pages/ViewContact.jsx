import React from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {

  

  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm p-4">
            <div className="text-center">
              {/* Contact Image */}
              <div id="card-image">
              <img
                src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                alt="Contact"
                className="img-fluid rounded-5 mb-3"
                
              />
              </div>
              
              <h4 className="card-title">Preiztly Tennyson</h4>
              <p className="text-muted">Software Engineer</p>
            </div>

            {/* Contact Details */}
            <div className="mt-4 text-center">
              <p>
                <strong>Mobile:</strong> +91 9847396145
              </p>
              <p>
                <strong>Email:</strong> preiztyl.tennyson@gmail.com
              </p>
              <p>
                <strong>Company:</strong> Tech Innovators
              </p>
              
            </div>

            {/* Action Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <Link to="/" className="btn btn-dark  custom-btn">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContact;
