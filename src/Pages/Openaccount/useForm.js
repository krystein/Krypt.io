import {useEffect, useState} from 'react'


function useForm(Callback,Validate) {
    const [value,setValue] = useState({username:'',email:'',DOB:'',
    Address:'',phone:'',
    password:'',password2:''
});
    const [error,setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = e=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e=>{
        e.preventDefault();
        setError(Validate(value));
        setIsSubmitting(true);
    }
    
    useEffect(()=>{
        if(Object.keys(error).length === 0 && isSubmitting){
            Callback();
        }
    });

  return {handleChange,value,handleSubmit,error};
}

export default useForm