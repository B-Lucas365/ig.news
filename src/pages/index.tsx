import { GetStaticProps } from 'next'

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import { Container } from './homeStyle'

interface HomeProps {
  product:{
    priceId: string,
    amount: number
  }
}

export default function Home({product}: HomeProps) {
  
  return (
    <>
      <Head><title>Home | Ig.news</title></Head>

      <Container>
        <section className='hero'>
          <span>Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publication <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/Mulher.svg" alt="Girl coding" className='girl-coding'/>
      </Container>
    </>
  )
}
// Server Side Rendering
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1MRkeaEVcRKOMyRvMJ69FIss')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100)
  } 

  return {
    props: {
      product,
    },

    revalidate: 60 *60 *24 , //24horas
  }
}
