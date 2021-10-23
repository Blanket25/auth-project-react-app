import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-container">
      <p>WELCOME!</p>
      <button>
        <Link to="/sign-in" className="link">
          Sign in
        </Link>
      </button>
    </div>
  );
};

export default Home;
