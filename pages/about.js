import Link from "next/Link";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <div>
      <Layout title="About ICG.com Accessories">
        <h1>About</h1>
        <p>We sell accessories. Lots of em.</p>
        <Link href="/">
            <a>Home</a>
        </Link>
      </Layout>
    </div>
  )
}
