import Layout from "@/components/Layout";
import {useRouter} from "next/router";

export default function SingleAccessory() {
    const router = useRouter();
    console.log("router====>", router);
    return (
        <Layout>
            <h2>Single Accessory</h2>
            <h3>{router.query.slug}</h3>
        </Layout>
    )
}
