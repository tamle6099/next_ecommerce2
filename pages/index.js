import Head from "next/head";
import {getData} from "../utils/fetchData"
import { useState } from "react";
import ProductItem from "../components/product/ProductItem"


export default function Home(props) {
  const [products, setProducts] = useState(props.products)
  return (
    <div className="products">
      <Head>
        <title>Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        products.length === 0 
        ? <h2>No Products</h2> :
        products.map(product => (
          <ProductItem key ={product._id} product={product} />
        ))
      }
    </div>
  )
}
  export async function getServerSideProps() {
    const res = await getData('product')
  return {
    props: {
      products: res.products,
      result: res.result,

    }, 
  }
}