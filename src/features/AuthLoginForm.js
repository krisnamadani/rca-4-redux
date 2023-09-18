import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLoginAPI } from "./users/authSlice";

function AuthLoginForm() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLoginAPI({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <br />
      <div>
        {authState.isLoginPending && <p>Loading...</p>}
        {authState.isLoginSuccess && <p>Login success</p>}
        {authState.errorMessages && <p>{authState.errorMessages}</p>}
      </div>
    </div>
  );
}

export default AuthLoginForm;
