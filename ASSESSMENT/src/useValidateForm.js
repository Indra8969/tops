import { isValidElement, useState } from "react";

const useValidateForm = () => {
  //result object that will be returned;
  const [result, setResult] = useState({
    status: "",
    errors: [],
    shouldNotEmpty: [],
  });

  //method to check is the values are added in the form is follow the correct format or not ?
  const check = (fields, RequiredFields) => {
    //notRequiredFileds is going to be the array of names which are not required to be filled in the form , if other than those are empty then it shows the error;
    const errors = [];
    const shouldNotEmpty = [];

    //checking the required filed is any is empty and checking validation the email and the pass must match the confirm pass;
    RequiredFields.forEach((element) => {
        console.log(fields, RequiredFields)
      if (fields[element] == "" || !fields[element]) {
        shouldNotEmpty.push(element);
        errors.push(`${element} is required`);
        return;
      }
      if (element == "password") {
        if (fields["password"] != fields["confirmPassword"]) {
          errors.push(`password and the confirm password must match`);
        }
        if (fields["password"].length < 8) {
          errors.push(`password must contain a 8 characters`);
        }
      }
      if (element == "email") {
        const emailReg =
          /^[a-zA-Z0-9._%+-]+\.tops@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isEmailValid = emailReg.test(fields[element]);
        if (!isEmailValid) {
          errors.push(`email must follow the format mail.tops@gmail.com`);
        }
      }
      if (element == "fname" || element == "lname") {
        if (fields[element].length < 4) {
          errors.push(`${element} must be more than 4 character long`);
        }
      }
    });

    const status =
      errors.length == 0 && shouldNotEmpty.length == 0 ? "valid" : "not valid";
    setResult({
      errors,
      status,
      shouldNotEmpty,
    });
  };
  //returning the result and the methos check();
  return [result, check];
};

//exporting the useValidateForm hook
export default useValidateForm;
