import NextAuth, { DefaultSession } from "next-auth";
import type { User as PrismaUser } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // made non-optional
      name?: string | null;
      email?: string | null;
      image?: string | null;
      isPro: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    isPro: boolean;
  }

}

declare module "next-auth/adapters" {

  interface AuthUser {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    isPro: boolean ;
  }

  interface AuthSession {
    user: AuthUser & DefaultSession["user"];
    expires: string;
  }

  type AdapterUser = PrismaUser;
}

declare module "next-auth/jwt" {
  interface JWT {
    isPro: boolean;
  }
}
