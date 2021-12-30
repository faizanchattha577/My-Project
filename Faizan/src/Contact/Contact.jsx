import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div>
      <div className="wrapper">
  <div className="overlay">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-9">
        <div className="contact-us1 text-center">
          <h3 className='dataa' style={{fontSize:"1.3vw"}} >Contact Us</h3>
          <p className="mb-5"style={{fontSize:"1.1vw"}}>
           We Always here to help you in every problem which is Solved by us..
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="mt-5 text-center px-3">
                <div className="d-flex flex-row align-items-center">
                  {" "}
                  <span className="icons">
                    <i className="fa fa-map-marker" />
                  </span>
                  <div className="address text-left"style={{fontSize:"1.3vw"}}>
                    {" "}
                    <span>Address</span>
                    <p className='dataa'>461, Lahore.Punjab,Pakistan</p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mt-3">
                  {" "}
                  <span className="icons">
                    <i className="fa fa-phone" />
                  </span>
                  <div className="address text-left"style={{fontSize:"1.3vw"}}>
                    {" "}
                    <span>Phone</span>
                    <p className='dataa'>0300-9189557</p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mt-3">
                  {" "}
                  <span className="icons">
                    <i className="fa fa-envelope-o" />
                  </span>
                  <div className="address text-left"style={{fontSize:"1.3vw"}}>
                    {" "}
                    <span>Address</span>
                    <p className='dataa'>FaizanChattha57@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center px-1">
                <div className="forms p-4 py-5 bg-white">
                  <h5 style={{fontSize:"1.3vw"}}>Send Message</h5>
                  <div className="mt-4 inputs">
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      style={{fontSize:"1.3vw"}}
                    />{" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      style={{fontSize:"1.3vw"}}
                      />{" "}
                    <textarea
                      className="form-control"
                      style={{fontSize:"1.3vw"}}
                      placeholder="Type your message"
                      defaultValue={""}
                    />{" "}
                  </div>
                  <div className="button mt-4 text-left">
                    {" "}
                    <button className="btn btn-dark"style={{fontSize:"1.3vw"}}>Send</button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact
