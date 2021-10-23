import "./App.css";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
