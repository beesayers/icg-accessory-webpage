import Layout from "@/components/Layout"
import {API_URL} from "@/config/index"
import AccessoryItem from "@/components/AccessoryItem"

export default function HomePage({accessories}) {
  return (
    <div>
      <Layout title={"Accessories"}>
        <h1>Accessories</h1>
        <div className="mt-6 mx-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {accessories.map((accessory) => (
                <AccessoryItem key={accessory.id} accessory={accessory} />
              ))}
        </div>
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


// switched to static rendering with 3sec refresh
// hover over was sending too many requests
// and killing page performance
// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/accessories`);
//   const accessories = await res.json();

//   return {
//     props: {accessories},
//     revalidate: 3
//   };
// }