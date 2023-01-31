import { Client } from 'faunadb'
interface teste {
    secret: string
}
export const fauna = new Client({
    secret: process.env.FAUNADB_KEY
})