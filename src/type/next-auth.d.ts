import NextAuth, { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface User {
    _id?: string;
    email?: string;
    username?: string;
    isAcceptingMessages?: boolean;
    isVerified?: boolean;
  }
  interface Session {
    user: {
      _id?: string;
      email?: string;
      username?: string;
      isAcceptingMessages?: boolean;
      isVerified?: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    email?: string;
    username?: string;
    isAcceptingMessages?: boolean;
    isVerified?: boolean;
  }
  interface DefaultJWT {
    _id?: string;
    email?: string;
    username?: string;
    isAcceptingMessages?: boolean;
    isVerified?: boolean;
  }
}
