import { useState } from "react";
import { useAuth } from "../store/auth-context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signUp, loading, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/");
  };

  const handleSignUp = async () => {
    try {
      await signUp({ email, password }, onSuccess);
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
        <button onClick={handleSignUp} disabled={loading}>
          Submit
        </button>
      </form>
      <div>
        <h2>Already have an account?</h2>
        <Link to={"/signin"}>
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
