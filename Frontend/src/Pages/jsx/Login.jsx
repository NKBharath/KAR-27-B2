import { useState } from "react";
function Login() {
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
  console.log(formdata);
  return (
    <div>
        
      <h1>Login</h1>
      <form>
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
        <input type="text" placeholder="Enter your address" name="add" onChange={onChange1} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
