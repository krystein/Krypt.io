export default function validateinfo(value){
    let error = {}
//username
    if(!value.username.trim()){
        error.username='Username is required'
    }
//email
    if(!value.email){
        error.email='Email is required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)){
        error.email = 'Email address is invalid'
    }
//date of birth
    if(!value.DOB){
        error.DOB = 'Date of Birth is required'
    }
//address
    if(!value.Address){
        error.Address='Address is required'
    }
//phone
    if(!value.phone){
        error.phone='Phone is required'
    } else if(!value.phone){
        error.phone = 'Phone is invalid'
    }
//password
    if(!value.password){
        error.password='Password is required'
    } else if(value.password.length < 6){
        error.password = 'passwordneeds to be 6 charaters or more'
    }
//password2
    if(!value.password2){
        error.password2='password is required'
    } else if(value.password2 !== value.password){
        error.password2='password does not match'
    }
    return error;
}