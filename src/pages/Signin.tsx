import { useState } from "react";
import { useAuth } from "../store/auth-context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { signIn, user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/");
  };

  const handleSignIn = async () => {
    try {
      await signIn({ email, password }, onSuccess);
    } catch (error) {
      console.error("error signing in: ", error);
    }
  };

  const testGetUser = () => {
    console.log("user:", user, "\nloading:", loading);
  };

  return (
    <div>
      <button onClick={testGetUser}>get user context data</button>
      <h1>Sign In</h1>
      <form className="flex flex-col items-start gap-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={handleSignIn} disabled={loading}>
          Submit
        </button>
      </form>
      <div>
        <h2>Don't have an account yet?</h2>
        <Link to={"/signup"}>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
