import { useContext } from "react";
import { IAuth } from "../interfaces/interfaces";
import { AuthContext } from "./auth-provider";

export const useAuth = (): IAuth => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
