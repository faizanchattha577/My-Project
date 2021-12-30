
const Validation = (Values) => {
    let errors={};
   
   
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
   

    return errors;
}

export default Validation;
