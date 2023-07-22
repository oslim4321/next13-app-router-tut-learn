import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Goggle_Client_Id,
      clientSecret: process.env.Goggle_Client_Secret,
    }),
    // ...add more providers here
  ],
};
