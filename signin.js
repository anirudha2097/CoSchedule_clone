let signupData = JSON.parse(localStorage.getItem("signup")) || [];
  let signin = () => {
    let signinData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
let query=false;
    signupData.forEach((el) => {
      if (
        el.email === signinData.email &&
        el.password === signinData.password
      ) {
        query=true;
      }
     
    });
    if(query)
    {
      alert("Signin successful");
    }
    else
    {
      alert("User doesn't exist");
    }
  };