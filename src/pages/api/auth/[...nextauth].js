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
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_amil'),
                  q.Casefold(use.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              {data: { email }}
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(use.email)
              )
            )
          )
        )

        return true
      } catch {
        return false
      }
      
    }
  }
})



