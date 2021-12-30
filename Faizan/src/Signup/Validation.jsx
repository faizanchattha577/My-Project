
const Validation = (Values) => {
    let errors={};
   
   if(!Values.fullname){
       errors.fullname="Name Is Required."
   }
   if(!Values.Email){
       errors.Email="Email Is Required."
   }
   else if(!/\S+@\S+\.\S+/.test(Values.email)){
       errors.Email="Email is Invalid."
   }
   if(!Values.password){
       errors.password="password is required."
   }
   else if(Values.password.lenght<5){
       errors.password="Password Must be more than five Character"
   }
   if(!Values.PhoneNumber){
       errors.PhoneNumber="PhoneNumber is required."
   }
   else if(Values.PhoneNumber.lenght<=11){
       errors.PhoneNumber="PhoneNumber Must be more than five Character"
   }
   

    return errors;
}

export default Validation;
