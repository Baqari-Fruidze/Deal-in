// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
import IEnterpreneuer from "../auth/EnterpreneuerType";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: IEnterpreneuer & DefaultSession["user"];
  }
}
