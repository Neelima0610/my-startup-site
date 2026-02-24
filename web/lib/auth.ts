import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "../lib/auth-adapter"; // point to your new wrapper
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import { compare } from "bcryptjs"; // for password hashing
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    // Credentials provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Email / Username / Mobile", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Auth options loaded");
        console.log("Credentials.identifier:", credentials?.identifier);
        console.log("Credentials.password:", credentials?.password);
        if (!credentials?.identifier || !credentials?.password) {
          return null;
        }
        console.log("credentials:", credentials.password);        
        const user = await prisma.user.findUnique({
          where: { email: credentials.identifier },
        });
        console.log("User found:", user?.hashedPassword);
        if (!user || !user.hashedPassword) {
          return null;
        }        
        console.log("user:", user.hashedPassword);
         const isValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
         console.log("is valid user:", isValid);
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.username,
          image: user.image,
          isPro: user.isPro,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login", // custom login page
    error: "/login",  // redirect back on error
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isPro = user.isPro;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.isPro = token.isPro as boolean;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};