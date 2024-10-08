import { User } from "firebase/auth";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface IAuth {
  user: User | null; //type User comes from firebase
  loading: boolean;
  signIn: (creds: LoginFormValues, onSuccess: () => void) => void;
  signUp: (creds: LoginFormValues, onSuccess: () => void) => void;
  signOut: () => void;
}
