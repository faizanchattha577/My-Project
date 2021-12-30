import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
export default function Footer() {
  return (
    <footer
      class="page-footer font-small  pt-6"
    >
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-3 mb-md-0 mb-3">
            <h3 class="text-uppercase">ABOUT US</h3>

            <ul class="list-unstyled">
              <li>
                <a href="#!">FAQ</a>
              </li>
             
              <li>
                <a href="#!">Terms</a>
              </li>
              <li>
                <a href="#!">Privacy</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-md-0 mb-3">
            <h3 class="text-uppercase">CONTACT & SITEMAP</h3>

            <ul class="list-unstyled">
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
              <li>
                <a href="#!">Sitemap</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-md-0 mb-3">
            <h3 class="text-uppercase">MY ACCOUNT</h3>

            <ul class="list-unstyled">
              <li>
                <Link to="/Login">Log In</Link>
              </li>
              <li>
                <Link to="/Signup">Register</Link>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mb-md-0 mb-3">
            <h3 class="text-uppercase">FOLLOW US ON</h3>

            <ul class="list-unstyled">
              <li>
                <a href="#!">FaceBook</a>
              </li>
              <li>
                <a href="#!">Insta</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2021 PakBirds. All Rights Reserved.
      </div>
    </footer>
  );
}
