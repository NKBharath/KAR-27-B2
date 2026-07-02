import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const Navigate = useNavigate();
  //const [Email, setEmail] = useState("");
  //const [Password, setPassword] = useState("");
  const [formdata, setformdata] = useState({
    Email: "",
    Password: "",
    number: "",
    roll_no: "",
  });

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

     const handlesubmit = (e) => {
       e.preventDefault();
       console.log(formdata);
       if(formdata.Email === "admin@example.com" && formdata.Password === "1234") {
         Navigate("/show-student");
       } else {
          alert("Invalid email or password");
       }
   }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          name="Email"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          name="Password"
          onChange={handlechange}
        />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login;
