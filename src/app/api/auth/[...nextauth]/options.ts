import { IEnterpreneuer } from "@/types/auth/EnterpreneuerType";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
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
          "https://dealin-api-production.up.railway.app/api/dj-rest-auth/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            cache: "no-cache",
          }
        );
        console.log("Res", res);
        const data = await res.json();
        console.log("data", data);
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
        token.username = user.username;
        token.email = user.email;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.date_birth = user.date_birth;
        token.id_number = user.id_number;
        token.physical_address = user.physical_address;
        token.legal_address = user.legal_address;
        token.mobile_number = user.mobile_number;
        token.first_citizenship = user.first_citizenship;
        token.second_citizenship = user.second_citizenship;
        token.gender = user.gender;
        token.picture = user.profile_picture; // Assuming you want to use profile_picture as picture
        token.name = user.name;
        token.sub = user.sub;
      }
      token = { ...token, ...user };
      console.log("token", token);
      console.log("user", user);

      return token;
    },

    async session({ token, session }) {
      console.log("tsttss");
      session.user = token as unknown as IEnterpreneuer;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

// import { IEnterpreneuer } from "@/types/auth/EnterpreneuerType";
// import useErorState from "@/zustand/ErorMesageInLoginConfirm";
// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import router from "next/router";

// export const options: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: {
//           label: "Username:",
//           type: "text",
//           placeholder: "enter username",
//         },
//         password: {
//           label: "Password:",
//           type: "password",
//           placeholder: "enter password",
//         },
//       },
//       async authorize(credentials) {
//         const res = await fetch(
//           "https://dealin-api-production.up.railway.app/api/dj-rest-auth/login/",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(credentials),
//             cache: "no-cache",
//           }
//         );

//         const data = await res.json();
//         if (res.ok) {
//           return data["user_info"]; // return user information on successful login
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       // If user is defined (on login), extend token with user info
//       if (user) {
//         token.user = user; // add user info to token
//       }
//       return token;
//     },

//     async session({ token, session }) {
//       if (token.user) {
//         // Save the user information from token to session
//         session.user = token.user as IEnterpreneuer; // explicitly cast to IEnterpreneuer
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };
