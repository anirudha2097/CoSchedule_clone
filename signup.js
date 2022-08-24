let signupData=JSON.parse(localStorage.getItem("signup")) || [];
let started=() =>
{
  let data=
  {
    name:document.getElementById("fullname").value,
    email:document.getElementById("email").value,
    password:document.getElementById("password").value,
  }
 
  if(data.name==="" || data.email==="" || data.password==="")
  {
    alert("Fill all the data");
    return;
  }
  if(data.password.length<8)
  {
    alert("Password should be of atleast 8 character");
    return;
  }


  signupData.push(data);
  localStorage.setItem("signup",JSON.stringify(signupData));
  alert("Signup Successful");
  window.location.href="signin.html";
  console.log(signupData);
}