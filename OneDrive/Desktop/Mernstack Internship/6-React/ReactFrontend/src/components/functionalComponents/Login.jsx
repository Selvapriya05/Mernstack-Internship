import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // get stored user
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Account not found. Please Sign Up.");
      navigate("/signup");
    } else if (
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        No account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
