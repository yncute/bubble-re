import { useAuth } from "../store/auth-context";

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    signOut();
  };

  return (
    <div>
      <h1>Welcome, {user?.displayName}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
