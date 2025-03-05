import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { viewContact } from "../services/allAPI";


const ViewContact = () => {


  const [viewSingleUser,setViewSingleUser] = useState({})

  useEffect(()=>{
    viewSingleUserContact()
    //nammal view cheyunna time venam display cheyipikann , athin vendi aan useEffect use cheyunne , aa page load aghumbool display details display cheyanam.

  },[])


  // console.log("Hello",viewSingleUser);


  const viewSingleUserContact =async ()=>{
     const userId = sessionStorage.getItem("contactId")
     const apiResponse = await viewContact(userId)
    //  console.log(apiResponse.data);
     setViewSingleUser(apiResponse.data)
  }

  

  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm p-4">
            <div className="text-center">
              {/* Contact Image */}
              <div id="card-image">
              <img
                src={viewSingleUser.photoUrl}
                alt="Contact"
                className="img-fluid rounded-5 mb-3"
                
              />
              </div>
              
              <h4 className="card-title">{viewSingleUser.name}</h4>
              <p className="text-muted">{viewSingleUser.title}</p>
            </div>

            {/* Contact Details */}
            <div className="mt-4 text-center">
              <p>
                <strong>Mobile:</strong> {viewSingleUser.mobile}
              </p>
              <p>
                <strong>Email:</strong> {viewSingleUser.email}
              </p>
              <p>
                <strong>Company:</strong> {viewSingleUser.company}
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
