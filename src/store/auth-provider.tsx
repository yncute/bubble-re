import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
  firebaseSignUp,
  firebaseSignIn,
  firebaseSignOut,
} from "../firebase/auth";
import { onAuthStateChanged, User } from "firebase/auth";
import { IAuth, LoginFormValues } from "../interfaces/interfaces";
import LoadingPage from "../components/LoadingPage";

export const AuthContext = createContext<IAuth>({
  user: auth.currentUser,
  loading: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);

  //not needed ? bc of ProtectedRoute

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  const signUp = (creds: LoginFormValues) => {
    setIsLoading(true);
    firebaseSignUp(creds)
      .then(async (signUpResult) => {
        const { user } = signUpResult; //object destructuring
        if (user) {
          setCurrentUser(user);
        } else {
          //do something if user is empty like an alert
        }
        setIsLoading(false);
      })
      .catch((error) => {
        //check for error
        if (error.code === "auth/email-already-in-use") {
          //show an alert or console
        } else if (error.code === "auth/too-many-requests") {
          //do something like an alert
        }
        // you can check for more error like email not valid or something
        setIsLoading(false);
      });
  };

  const signIn = async (creds: LoginFormValues) => {
    setIsLoading(true);
    firebaseSignIn(creds)
      .then((signInResult) => {
        const { user } = signInResult;
        if (user) {
          setCurrentUser(user);
          console.log(
            `signed in successfully with user id: ${user.uid}\n`,
            user
          );
        } else {
          //do something
        }
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          //show error
        } else if (error.code === "auth/too-many-requests") {
          //show error
        }
        setIsLoading(false);
      });
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await firebaseSignOut();
      setCurrentUser(null);
    } catch (e) {
      setIsLoading(false);
      console.log("error signing out: ", e);
    }
  };

  const authValues: IAuth = {
    user: currentUser,
    loading: isLoading,
    signIn,
    signUp,
    signOut,
  };

  return isAuthLoading ? (
    <LoadingPage />
  ) : (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
