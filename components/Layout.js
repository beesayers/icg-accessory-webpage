import Head from "next/head";
import styles from "@/styles/Layout.module.css"
import Header from "./Header"
import Footer from "./Footer"
import {useRouter} from "next/router"
import Hero from "./Hero"

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
  return (
    <div>
        <Head>
          <title>{title}</title>
          <meta name="descriptions" content={description}/>
          <meta name="keywords" content={keywords}/>
        </Head>
        <Header />
        
        {/* conditional to only display hero on homepage */}
        {router.pathname === "/" && <Hero />}
        <div className="{styles.container}">{children}</div>
        <Footer />
    </div>
  );
}

Layout.defaultProps = {
    title: "Accessories",
    description: "Find the latest accessories",
    keywords: "wearables, cases, headphones, speakers, storage, stylus, bundle, power, screen protector, charge cable"
};

export default Layout;