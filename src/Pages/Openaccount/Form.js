import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
import Login from "../Login";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function submitForm() {
    setIsSubmitting(true);
  }
  return (
    <div className="Openaccount">
      {!isSubmitting ? <FormSignUp submitForm={submitForm} /> : <Login />}
    </div>
  );
};

export default Form;
