import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import {API_URL} from "@/config/index";
import styles from "@/styles/Accessories.module.css";


// Q: are multiple accessories being passed in or only one?
export default function SingleAccessory({accessory}) {
    const router = useRouter();
    return (
        <Layout>
            <Link href ={API_URL}>
                <a className={`${styles.blue}`}>See all accessories</a>
            </Link>

            {accessory.image && (
                <div className={styles.image}>
                    <Image src={accessory.image} width={350} height={470}/>
                </div>
            )}
            
            <div className={styles.accessories}>
                <h2 className={`${styles.upper} ${styles.blue}`}>{accessory.manufacturer}</h2>
                <h3>{accessory.description}</h3>
            </div>
            
            <h4>Choose your color</h4>
            <p>{accessory.color}</p>
            
            <h4>Payment options</h4>
            <p>{accessory.payment.thirtysix_month}/MO</p>
            <p>{accessory.payment.twentyfour_month}/MO</p>
            <p>{accessory.payment.upfront}</p>

        </Layout>
    );
}

export async function getServerSideProps({query: {slug}}) {
    const res = await fetch(`${API_URL}/api/accessories/${slug}`);
    const accessory = await res.json();
    return {
        props: {
            accessory: accessory[0],
        }
    }
}