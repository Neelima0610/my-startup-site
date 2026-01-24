import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
          clientId: process.env.GITHUB_ID!,
          clientSecret: process.env.GITHUB_SECRET!,
        }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.isPro = token.isPro as boolean;
      return session;
    },
    async jwt({ token }) {
      token.isPro = false; // later from DB
      return token;
    },
  },
};

// 2️⃣ Actual handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
