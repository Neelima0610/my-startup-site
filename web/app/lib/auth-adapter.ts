// web\app\lib\auth-adapter.ts
import { PrismaClient, User as PrismaUser } from "@prisma/client";
import { PrismaAdapter as NextAuthPrismaAdapter } from "@next-auth/prisma-adapter";
import type { AdapterUser } from "next-auth/adapters";

export function PrismaAdapter(prisma: PrismaClient) {
  const originalAdapter = NextAuthPrismaAdapter(prisma);

  return {
    ...originalAdapter,

    // Override createUser to satisfy required fields
    createUser: async (user: Omit<AdapterUser, "id">& { username?: string }): Promise<AdapterUser> => {
      const createdUser = await prisma.user.create({
        data: {
          name: user.name ?? null,
          email: user.email ?? null,
          image: user.image ?? null,
          emailVerified: user.emailVerified ?? null,
          // Generate a username if not provided
          username:
            (user.username) ||
            (user.name
              ? user.name.replace(/\s+/g, "").toLowerCase() +
                Math.floor(Math.random() * 1000)
              : "user" + Math.floor(Math.random() * 10000)),
          // Required by your Prisma model
          mobile: null,
          hashedPassword: null,
        },
      });

      // Map PrismaUser to AdapterUser type
      return {
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        image: createdUser.image,
        emailVerified: createdUser.emailVerified,
        username: createdUser.username,
        isPro: false, // Default value for new users
      } as AdapterUser;
    },
  };
}
