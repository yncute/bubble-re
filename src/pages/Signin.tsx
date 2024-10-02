import { useState } from "react";
import { useAuth } from "../store/auth-context";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { signIn, signOut, user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signIn({ email, password });
      navigate("/dashboard");
    } catch (error) {
      console.error("error signing in: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("error signing out: ", error);
    }
  };

  const testGetUser = () => {
    console.log(user);
  };

  if (user)
    return (
      <div>
        <button onClick={testGetUser}>get current user</button>
        <h1>You are already signed in</h1>
        <Link to={"/dashboard"}>
          <button>To Dashboard</button>
        </Link>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );

  return (
    <div>
      <button onClick={testGetUser}>get current user</button>
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
