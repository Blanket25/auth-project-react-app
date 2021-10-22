import "./App.css";

const Login = () => {
  return (
    <div className="input-container">
      <input type="text" placeholder="email"></input>
      <input type="password" placeholder="password"></input>
      <button>Log in</button>
      <button>Sign up</button>
    </div>
  );
};

export default Login;
