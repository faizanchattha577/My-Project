
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const NavBar = (props) => {
  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand"  href="/">
              E-Worker     
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/Home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/services/">
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/MainAbout">
                    About
                  </Link>
                </li>
               
                <li class="nav-item">
                  <Link class="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Cart">
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>{props.cart.length!==0?props.cart.length:null}
                  </Link>
                </li>
             
              </ul>
              <form class="d-flex">
               
               <Link to="/Login">
               <button  class="btn btn-primary style"  type="submit">
                  Log In
                </button>
               
               </Link>
                
                <Link to="/Signup">
                {/* <button class="btn btn-danger style"  type="submit">
                  Sign Up
                </button> */}
                </Link>
               
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default NavBar;
