// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
import IEnterpreneuer from "../auth/EnterpreneuerType";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface JWT {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    date_birth: string;
    id_number: string | null;
    physical_address: string | null;
    legal_address: string | null;
    mobile_number: string | null;
    first_citizenship: string | null;
    second_citizenship: string | null;
    gender: string | null;
    profile: string;
  }
  interface Session {
    user: IEnterpreneuer & DefaultSession["user"];
  }
}
