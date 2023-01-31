import { query as q} from "faunadb"

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import {fauna} from "../../../services/fauna"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  jwt: {
    signingKey: process.env.SIGNING_KEY,
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const eMail = user

      try {
        await fauna.query(
          q.Create(
            q.Collection('users'),
            { data: {eMail} }
          )
        )

        return true
      } catch {
        return false
      }
      
    }
  }
})



