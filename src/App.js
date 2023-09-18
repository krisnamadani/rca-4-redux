import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthLoginForm from "./features/AuthLoginForm";
import Home from "./features/Home";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state);
  return (
    <BrowserRouter>
      <div className="App">
        {data.auth.isLoginSuccess ? <Home /> : <AuthLoginForm />}
      </div>
    </BrowserRouter>
  );
}

export default App;
