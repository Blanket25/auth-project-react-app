import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { onSignUp } from "./users";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const body = {
    name: name,
    email: email,
    password: password,
  };

  async function onSignUpClicked() {
    const data = await onSignUp(body);
    setData(JSON.stringify(data));
  }
  return (
    <div className="flex-container">
      <h2>Sign Up</h2>

      <input
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
      />
      <input
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
      />
      <input
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      />
      <button onClick={onSignUpClicked}>Sign up</button>
      <div>{data}</div>

      <p>Already have an account?</p>
      <button>
        <Link to="/sign-in" className="link">
          Sign in
        </Link>
      </button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default SignUp;
