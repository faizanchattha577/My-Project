import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../node_modules/react-calendar/dist/Calendar.css";
// import SelectService from "./SelectService";
const Appointment = (props) => {
  const [val, setValue] = useState(new Date());
  const{setDate}=props;
  return (
    <div className="container pt-3">
      <h3 className="fw-bold pb-2" style={{ fontSize: 25 }}>
        Select Date
      </h3>
      <Calendar value={val} onChange={setValue} />
      <Link to="/FormSubmit">
        <button
          type="button"
          class="btn nextButton btn-danger position-fixed m-0 mb-1 category "
          onClick={()=>{
            setDate(val.toString())
          }}
          style={{ bottom: "25px", right: "25px" }}
        >
          Continue <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </Link>
    </div>
  );
};

export default Appointment;
