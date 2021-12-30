import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { cart, removeCart, SetCart, sBill, setSBill } = props;
  const [items, setitems] = useState(1);
  const [bill, setBill] = useState(0);

  const decItem = () => {
    if (items > 1) {
      setitems((e) => e - 1);
    }
  };
  useEffect(() => {
    //button Add Product price
    let tem = 0;
    cart.forEach((p) => {
      tem = tem + (p.price* p.quantity);
    });

    //Bill pass to checkout page
    setBill(tem);
    setSBill(tem);
  }, [cart]);

  const decQuantity = (id) => {
    const newdata =cart.map(p=>(
      p.id == id ? {id: p.id, image: p.image, title: p.title,info: p.info, price: p.price,category:p.category, quantity: p.quantity-1 }: p 
    ))
    const newdata2 = newdata.filter((pNo) => (
      pNo.quantity != 0
  ))
  SetCart(newdata2);
  };
  const incQuantity = (id) => {
    // SetCart((cart[id].quantity = cart[id].quantity + 1));
    
    //
    const newdata =cart.map(p=>(
      p.id == id ? {id: p.id, image: p.image, title: p.title,info: p.info, price: p.price,category:p.category, quantity: p.quantity+1 }: p 
    ))
    SetCart(newdata);
  };
  return (
    <div>
      <div className="container pt-5">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th className="col">Quantity</th>
              <th className="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((e, index) => (
              <tr>
                <th scope="row">{index+1}</th>
                <td>
                  <img
                    src={e.image}
                    width={150}
                    class="img-fluid rounded-start img border"
                    alt="..."
                  />
                </td>
                <td>
                  <h5 class="card-title  m-0 mb-1  title1"> {e.title}</h5>
                  <p class="card-text m-0 mb-1 category "> {e.category}</p>
                </td>
                <td>
                  <p class="card-text m-0 mb-1 category "> {e.price}</p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div>
                      <p
                        className="bg-danger px-3 text-white"
                        style={{ fontSize: "20px", borderRadius: "10px" }}
                        onClick={() => decQuantity(e.id)}
                      >
                        -
                      </p>
                    </div>
                    <p
                      className="mx-2 px-2 border rounded"
                      style={{ fontSize: "20px" }}
                    >
                      {e.quantity}
                    </p>
                    <div>
                      <p
                        className="bg-info px-3 text-white"
                        style={{ fontSize: "20px", borderRadius: "10px" }}
                        onClick={()=>{incQuantity(e.id)}}
                      >
                        +
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-sm btn-success "
                    onClick={() => removeCart(e.id)}
                  >
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/Appointment">
        <button
          type="button"
          class="btn nextButton btn-danger position-fixed m-0 mb-1 category "
          style={{ bottom: "25px", right: "25px" }}
        >
          Bill: {bill}Rs Continue{" "}
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </Link>
    </div>
  );
};

export default Cart;
