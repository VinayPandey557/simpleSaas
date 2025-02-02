import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prismaClient } from "@/app/lib/db"; // Ensure Prisma client is correctly imported
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      async profile(profile) {
        // Check if user already exists
        const existingUser = await prismaClient.user.findUnique({
          where: { email: profile.email },
        });

        if (!existingUser) {
          await prismaClient.user.create({
            data: {
              email: profile.email,
              username: profile.name ?? `GoogleUser_${profile.sub}`, // Default username
              provider: "Google",
              role: "EndUser", // Default role
            },
          });
        }

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          throw new Error("Username and password are required");
        }

        const user = await prismaClient.user.findUnique({
          where: { username: credentials.username },
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword as any
        );

        if (!isValidPassword) {
          throw new Error("Invalid Password");
        }

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
  },
  
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },

  callbacks: {
    async signIn({ user, account }) {
      if (!user.email) return false;

      if (account?.provider === "google") {
        try {
          const existingUser = await prismaClient.user.findUnique({
            where: { email: user.email },
          });

          if (!existingUser) {
            await prismaClient.user.create({
              data: {
                email: user.email,
                username: user.name ?? `GoogleUser_${user.email.split("@")[0]}`, // Default username
                provider: "Google",
                role: "EndUser"
              },
            });
          }
        } catch (e) {
          console.error("Error creating user:", e);
          return false;
        }
      }

      return true;
    },

    async session({ session, token }) {
      if (!session.user)
        return session;
         session.user.id = token.id as string;
      return session;
    },

    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
  },
});

export { handler as GET, handler as POST };
