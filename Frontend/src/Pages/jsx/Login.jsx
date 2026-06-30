import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const Navigate = useNavigate();
  const [formdata, setformdata] = useState({
    Email: "",
    Password: "",
    no: "80722222",
    add: "",
    roll_no: "",
  });
  const onChange1 = (e) => {
    setformdata({ 
        ...formdata,
        [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    Navigate("/show-student");
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
          onChange={onChange1}
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          name="Password"
          onChange={onChange1}
        />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login;
