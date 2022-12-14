import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   credentials: {},
    //   // @ts-ignore
    //   async authorize(credentials, _) {
    //     const { email, password } = credentials as {
    //       email: string;
    //       password: string;
    //     };
    //     if (!email || !password) {
    //       throw new Error("Missing username or password");
    //     }
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email,
    //       },
    //     });
    //     // if user doesn't exist or password doesn't match
    //     if (!user || !(await compare(password, user.password))) {
    //       throw new Error("Invalid username or password");
    //     }
    //     return user;
    //   },
    // }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token, user }) {
      // (session as any).user.id = token.id;

      // console.log("session from callback", session, token, user);

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
