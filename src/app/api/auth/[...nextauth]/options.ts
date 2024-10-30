import useErorState from "@/zustand/ErorMesageInLoginConfirm";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import router from "next/router";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "enter username",
        },
        password: {
          label: "Password:",
          type: "text",
          placeholder: "enter password",
        },
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://dealin-api-production.up.railway.app/api/dj-rest-auth/send-code/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            cache: "no-cache",
          }
        );
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          return data["user_info"];
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
