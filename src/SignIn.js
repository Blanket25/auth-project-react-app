import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { onSignIn } from "./users";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const body = {
    email: email,
    password: password,
  };

  async function onSignInClicked() {
    const data = await onSignIn(body);
    setData(JSON.stringify(data));
  }
  return (
    <div className="flex-container">
      <div>
        <h2>Sign In</h2>
      </div>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="email"
      />

      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="password"
      />

      <button onClick={onSignInClicked}>Sign in</button>
      <p>Don't have an account</p>
      <button>
        <Link to="/sign-up" className="link">
          Sign up
        </Link>
      </button>
      <div>{data}</div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default SignIn;
