import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteContactDetails, displayAllContact } from "../services/allAPI";
import { toast, ToastContainer } from "react-toastify";

const ContactList = () => {
  useEffect(() => {
    displayContacts();
  }, []);
  //useEffect use cheyumbool  nammak oru callback function ann kittunath
  //empty array to avoid continuos running

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  console.log(search);

  const displayContacts = async () => {
    //same name kodukaruth for variable and function

    try {
      let apiResponse = await displayAllContact();
      if (apiResponse.status >= 200 && apiResponse.status <= 300) {
        // console.log(apiResponse);


        setData(apiResponse.data);
      } else {
        console.error("apiResponse.statusText");
      }
    } catch (error) {
      console.log("Error Occured at api calling");
    }
  };

  const viewContact = (id) => {
    //  console.log(id);
    sessionStorage.setItem("contactId", id);
    navigate(`/${id}/view`);
  };

  const deleteContact = async (id) => {
    await deleteContactDetails(id);
    toast.error("Contact Deleted");
    // to automatically reload the data
    displayContacts();
  };

  const editContact = (id) => {
    localStorage.setItem("editId", id);
  };

  const reverseData=[...data].reverse()
  
  
  
  //to get the data  reversed to show the first latest addded contact on the front page

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
            <Link to="/add">
              <button className="btn btn-primary rounded-5 ms-3 px-4 custom-btn">
                <i className="fa-solid fa-plus"></i> New
              </button>
            </Link>
          </div>
          <div className=" col-6 mt-3 d-flex">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Search your Connection"
              aria-label="Search"
            />
            {/* <button className="btn btn-primary ms-3 custom-btn"> Search</button> */}
          </div>
        </div>
      </div>

      {/* Card Section */}

      <div>
        <div className="container mt-5">
          <div className="bg-light p-4 rounded-3 shadow-sm">
            <div className="d-flex gap-3 flex-wrap justify-content-around">
              {/* Card design */}

              {reverseData

                .filter(
                  (item) =>
                    //will receive the object in the array
                    search.toLowerCase() === ""
                      ? //search input ulla value lower case akkum enittu ath null ano enn check cheyum
                        item
                      : //null allengil aah object (card )full display cheyum.
                        item.name.toLowerCase().includes(search.toLowerCase())
                  //name lowercase ll convert cheyum
                  //&input search value ihtil indo en ann nokkunne
                )
                //filter method filters a single object in an array

                .map((obj, index) => (
                  <div
                    className="card mt-3"
                    style={{ width: "19rem" }}
                    key={index}
                  >
                    <div className="card-body">
                      {/* Image section */}
                      <div className="text-center mb-4">
                        <div id="card-image">
                          <img
                            style={{ cursor: "pointer" }}
                            onClick={() => viewContact(obj.id)}
                            src={obj.photoUrl}
                            alt="Contact"
                            className="img-fluid rounded-circle"
                          />
                        </div>
                      </div>

                      {/* Contact details */}
                      <h5 className="card-title text-center">{obj.name}</h5>
                      <p className="card-text">Contact : {obj.mobile}</p>
                      <p className="card-text">Email: {obj.email}</p>

                      {/* Edit and Delete buttons */}
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-success w-48 custom-btn"
                          onClick={() => viewContact(obj.id)}
                        >
                          View
                        </button>

                        <Link to="/edit">
                          <button
                            className="btn btn-primary w-48 custom-btn"
                            onClick={() => editContact(obj.id)}
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger w-48 custom-btn"
                          onClick={() => deleteContact(obj.id)}
                        >
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
