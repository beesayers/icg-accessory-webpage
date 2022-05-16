import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import Layout from "@/components/Layout"
import {API_URL} from "@/config/index"

export default function HomePage({accessories}) {
  return (
    <div>
      <Layout>
        <h1>Latest Accessories</h1>
        {accessories.length === 0 && <h3>Sorry, We Are Out of Stock!</h3>}
      </Layout>
    </div>
  )
};


// Pre-renders the page on each request
// (more efficient for client)
// (kinda overkill for this demo)
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/accessories`);
  const accessories = await res.json();

  return {
    props: {accessories},
  };
}