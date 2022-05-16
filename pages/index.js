import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import Layout from "@/components/Layout"
import {API_URL} from "@/config/index"
import AccessoryItem from "@/components/AccessoryItem"

export default function HomePage({accessories}) {
  return (
    <div>
      <Layout>
        <h1>Latest Accessories</h1>
        {accessories.length === 0 && <h3>Sorry, We Are Out of Stock!</h3>}
        {accessories.map((item) => (
          <AccessoryItem key={item.id} accessories={item} />
        ))}
      </Layout>
    </div>
  )
};


// Pre-renders the page on each request
// (more efficient for client)
// (kinda overkill for this demo)
// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/accessories`);
//   const accessories = await res.json();

//   return {
//     props: {accessories},
//   };
// }


// switched to static rendering with 3sec refresh
// hover over was sending too many requests
// and killing page performance
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/accessories`);
  const accessories = await res.json();

  return {
    props: {accessories},
    revalidate: 3
  };
}