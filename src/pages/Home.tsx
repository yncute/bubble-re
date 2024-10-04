import { useAuth } from "../store/auth-context";

const Home = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    signOut();
  };

  return (
    <div>
      homepage, user: {user?.displayName}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
