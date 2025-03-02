import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { displayAllContact } from "../services/allAPI";

const ContactList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    displayContacts();
  }, []);
  //useEffect use cheyumbool  nammak oru callback function ann kittunath
  //empty array to avoid continuos running

  const displayContacts = async () => {
    //same name kodukaruth for variable and function

    try {
      let apiResponse = await displayAllContact();
      if (apiResponse.status >= 200 && apiResponse.status <= 300) {
        console.log(apiResponse);
        setData(apiResponse.data);
      } else {
        console.error("apiResponse.statusText");
      }
    } catch (error) {
      console.log("Error Occured at api calling");
    }
  };

  return (
    <>
      <div className="container" id="searchbar">
        <div className="row mt-5">
          <div className="col-7">
            {/* <h5 className='mt-5'>Add Contact</h5> */}
            <p>
              "With <span className="text-primary">ContactHub</span>, keeping
              track of your contacts is simple. Easily store, update, and search
              your contact information in one secure place, so you never lose
              touch with the people who matter most."
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex">
          <div className="col-6 d-flex mt-2">
            <h3>Create Connection</h3>
            <Link to="/contact/add">
              <button className="btn btn-primary rounded-5 ms-3 px-4 custom-btn">
                <i className="fa-solid fa-plus"></i> New
              </button>
            </Link>
          </div>
          <div className=" col-6 mt-3 d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search your Connection"
              aria-label="Search"
            />
            <button className="btn btn-primary ms-3 custom-btn"> Search</button>
          </div>
        </div>
      </div>

      {/* Card Section */}

      <div>
        <div className="container mt-5">
          <div className="bg-light p-4 rounded-3 shadow-sm">
            <div className="d-flex gap-3 flex-wrap justify-content-around">
              {/* Card design */}

              {data.map((obj, index) => (
                <div
                  className="card mt-3"
                  style={{ width: "19rem" }}
                  key={index}
                >
                  <div className="card-body">
                    {/* Image section */}
                    <div className="text-center mb-4">
                      <div id="card-image">
                        <Link to={"/contact/view"}>
                          <img
                            src={obj.photoUrl}
                            alt="Contact"
                            className="img-fluid rounded-circle"
                          />
                        </Link>
                      </div>
                    </div>

                    {/* Contact details */}
                    <h5 className="card-title text-center">{obj.name}</h5>
                    <p className="card-text">Contact : {obj.mobile}</p>
                    <p className="card-text">Email: {obj.email}</p>

                    {/* Edit and Delete buttons */}
                    <div className="d-flex justify-content-between">
                      <Link to="/contact/view">
                        <button className="btn btn-success w-48 custom-btn">
                          View
                        </button>
                      </Link>
                      <Link to="/contact/edit">
                        <button className="btn btn-primary w-48 custom-btn">
                          Edit
                        </button>
                      </Link>
                      <button className="btn btn-danger w-48 custom-btn">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* End of Card */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
