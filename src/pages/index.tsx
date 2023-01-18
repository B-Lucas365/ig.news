import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { Container } from './homeStyle'

export default function Home() {
  return (
    <>
      <Head><title>Home | Ig.news</title></Head>

      <Container>
        <section className='hero'>
          <span>Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publication <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton/>
        </section>

        <img src="/images/Mulher.svg" alt="Girl coding" className='girl-coding'/>
      </Container>
    </>
  )
}

