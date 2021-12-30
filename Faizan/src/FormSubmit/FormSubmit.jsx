import React, {useEffect} from 'react'
import "./FormSubmit.css"

const FormSubmit = (props) => {
    const {sBill,gDate} = props;
    useEffect(()=>{
        console.log(gDate);
    }, [])
  return (
    <div>
      <div className="container mt-5">
            <section>
                <div className="row">
                    <div className="col-md-8 mb-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0" style={{fontSize:"1.3vw"}}>Biling details</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                    {/* 2 column grid layout with text inputs for the first and last names */}
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="form6Example1"
                                                    className="form-control"
                                                    style={{fontSize:"1.2vw"}}
                                                />
                                                <label className="form-label"style={{fontSize:"1.3vw"}} htmlFor="form6Example1">
                                                    First name
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="form6Example2"
                                                    className="form-control"
                                                    style={{fontSize:"1.2vw"}}
                                                    
                                                />
                                                <label className="form-label"style={{fontSize:"1.3vw"}} htmlFor="form6Example2">
                                                    Last name
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Text input */}
                                    
                                    <div className="form-outline mb-4">
                                     
                                        <label className="form-label"style={{fontSize:"1.3vw"}} htmlFor="form6Example3">
                                           
                                           Selected Date

                                        </label>
                                        <div>
                                          <p style={{fontSize:"1.3vw"}}>"{gDate}"</p>
                                      </div>
                                    </div>
                                    {/* Text input */}
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form6Example4" className="form-control" style={{fontSize:"1.2vw"}} />
                                        <label className="form-label"style={{fontSize:"1.3vw"}} htmlFor="form6Example4">
                                            Address
                                        </label>
                                    </div>
                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form6Example5" className="form-control" style={{fontSize:"1.2vw"}} />
                                        <label className="form-label" style={{fontSize:"1.3vw"}}htmlFor="form6Example5">
                                            Email
                                        </label>
                                    </div>
                                    {/* Number input */}
                                    <div className="form-outline mb-4">
                                        <input
                                            type="number"
                                            id="form6Example6"
                                            className="form-control"
                                            style={{fontSize:"1.2vw"}}
                                        />
                                        <label className="form-label"style={{fontSize:"1.3vw"}} htmlFor="form6Example6">
                                            Phone
                                        </label>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="form-check ms-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="checkoutForm1"
                                            style={{fontSize:"1.2vw"}}
                                        />
                                        <label className="form-check-label " style={{fontSize:"1.3vw"}} htmlFor="checkoutForm1">
                                           Send Worker on the same as my billing address
                                        </label>
                                    </div>
                                    <div className="form-check mb-4 ms-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="checkoutForm2"
                                            defaultChecked
                                            style={{fontSize:"1.2vw"}}
                                        />
                                        <label className="form-check-label" style={{fontSize:"1.3vw"}} htmlFor="checkoutForm2">
                                            Save this information for next time
                                        </label>
                                    </div>
                                    <hr className="my-4" />
                                    <h5 className="mb-4" style={{fontSize:"1.3vw"}}>Payment</h5>
                                    <div className="form-check ms-4">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="checkoutForm3"
                                            defaultChecked
                                            style={{fontSize:"1.2vw"}}
                                        />
                                        <label className="form-check-label" style={{fontSize:"1.3vw"}} htmlFor="checkoutForm3">
                                            Credit card
                                        </label>
                                    </div>
                                    <div className="form-check ms-4">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="checkoutForm4"
                                            style={{fontSize:"1.2vw"}}
                                        />
                                        <label className="form-check-label" style={{fontSize:"1.3vw"}} htmlFor="checkoutForm4">
                                            Debit card
                                        </label>
                                    </div>
                                    <div className="form-check mb-4 ms-4">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="checkoutForm5"
                                            style={{fontSize:"1.2vw"}}
                                        />
                                        <label className="form-check-label"style={{fontSize:"1.3vw"}} htmlFor="checkoutForm5">
                                            Paypal
                                        </label>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="formNameOnCard"
                                                    className="form-control"
                                                    style={{fontSize:"1.2vw"}}
                                                />
                                                <label className="form-label"style={{fontSize:"1.3vw"}} htmlFor="formNameOnCard">
                                                    Name on card
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="formCardNumber"
                                                    style={{fontSize:"1.2vw"}}
                                                    className="form-control"
                                                />
                                                <label className="form-label"style={{fontSize:"1.3vw"}} htmlFor="formCardNumber">
                                                    Credit card number
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="formExpiration"
                                                    className="form-control"
                                                    style={{fontSize:"1.2vw"}}
                                                />
                                                <label className="form-label"style={{fontSize:"1.3vw"}} htmlFor="formExpiration">
                                                    Expiration
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-outline">
                                                <input type="text" id="formCVV" className="form-control" style={{fontSize:"1.2vw"}}/>
                                                <label className="form-label" style={{fontSize:"1.3vw"}} htmlFor="formCVV">
                                                    CVV
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block"style={{fontSize:"1.3vw"}} type="submit">
                                        Continue to checkout
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0" style={{fontSize:"1.3vw"}}>
                                        Products
                                        <span>Rs. {sBill}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0" style={{fontSize:"1.3vw"}}>
                                        Shipping
                                        <span>Gratis</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3" style={{fontSize:"1.3vw"}}>
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0" style={{fontSize:"1.3vw"}}>(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span>
                                            <strong style={{fontSize:"1.3vw"}}>Rs. {sBill}</strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
  )
}

export default FormSubmit
