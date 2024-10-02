import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "./config";
import { LoginFormValues } from "../interfaces/interfaces";

//persists user login after closing/leaving tab
setPersistence(auth, browserLocalPersistence);

export const firebaseSignIn = async ({ email, password }: LoginFormValues) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};

export const firebaseSignUp = async ({ email, password }: LoginFormValues) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
};

export const firebaseSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
