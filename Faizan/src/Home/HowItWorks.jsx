import React,{useState} from 'react'
import WorkApi from '../Api/WorkApi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faDownload,
//   faChalkboardTeacher,
//   faDonate,

}

from "@fortawesome/free-solid-svg-icons";
 


const HowItWorks = () => {
   const[WorkData]=useState(WorkApi);
   console.log(WorkData);
    return (
        <>
            <section>
                <div className="work-container container">
                   <h1 className="main-heading text-center">How It Works</h1>
                   <div className="row data-row">
                       {WorkData.map((curElem) => {
                         const{title,info}=curElem;
                        
                       return<>
                           <div className="col-12 col-lg-4 text-center work-container-subdiv">
                       <i className="fontAwesome"> <FontAwesomeIcon icon={   faDownload} /></i>
                         <h2 > {title}</h2>
                         <p className="main-hero-para w-100">{info}</p>
                         </div>
                       </>
                       
                   
                      })}
                       
                       
                   </div>
                </div>

            </section>
        </>
    )
}

export default HowItWorks;
