import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { query } from './db';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        const user = await query('SELECT * FROM users WHERE email = $1', [credentials.email]);
        if (user && (await bcrypt.compare(credentials.password, user.password))) {
          return { id: user.id, email: user.email, name: user.name };
        }
        return null;
      }
    })
  ],
  // Add more configuration options as needed
};

export default NextAuth(authOptions);
