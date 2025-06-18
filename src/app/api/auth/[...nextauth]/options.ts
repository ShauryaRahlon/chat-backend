import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error("No user found with the given credentials");
          }
          if (user.isVerified === false) {
            throw new Error("User is not verified");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Incorrect password");
          }
        } catch (error) {
          throw new Error("Database connection failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.email = user.email;
        token.username = user.username;
        token.isVerified = user.isVerified;
        token.isAcceptingMessages = user.isAcceptingMessages;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.isVerified = token.isVerified;
        session.user.isAcceptingMessages = token.isAcceptingMessages;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
