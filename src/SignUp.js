import "./App.css";

const SignUp = () => {
  return (
    <div className="input-container">
      <input type="text" placeholder="email"></input>
      <input type="password" placeholder="password"></input>
      <input type="password" placeholder="repeat password"></input>
      <button>Sign up</button>
    </div>
  );
};

export default SignUp;
