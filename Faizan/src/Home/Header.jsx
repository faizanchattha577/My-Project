import React from 'react'
import pic from '../images/Home1.jpg'
import web from '../images/image2.jpg'

export const Header = () => {
    return (
        <>
             <header className='Overall'>
                 <section className="container main-hero-container">
                     <div className="row">
                         <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start">
                             <h1 className="display-2">
                             Easy to find <br />
                             Online Worker     
                             </h1>
                           <p className="main-hero-para">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem facilis perferendis dolores quidem unde obcaecati animi ratione doloremque, 
                               
                               
                           </p>
                           <h3> Get Easy Access</h3>
                           <div  className="input-group mt-3">
                               <input type="text"
                               className="rounded=pill w-75 me-3 p-2 form-control-text round"
                               placeholder='Enter Your Email'
                               />
                               <div className="input-group-button">
                                  Get Now
                               </div>
                           </div>
                         </div>
                         {/* -------------------main header div------------------- */}
                            <div className="col-12 col-lg-6 header-right-side  d-flex justify-content-center align-item-start main-images">
                              <img src={pic}
                               alt="headerpic"
                               className="img-fluid" />
                              <img src={web}
                               alt="headerpic"
                               className="img-fluid img-2" />
                            </div>
                           
                     </div>

                 </section>
             </header>
            
        </>
    )
}
export default Header;