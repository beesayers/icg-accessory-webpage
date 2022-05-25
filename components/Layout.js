import Head from "next/head";
import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"
import {useRouter} from "next/router"

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
        <Banner />      
        <div>{children}</div>
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