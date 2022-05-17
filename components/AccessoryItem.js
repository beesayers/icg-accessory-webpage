import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/AccessoryItem.module.css"

export default function AccessoryItem({accessories}) {
  return (
    <Link href={`/accessories/${accessories.slug}`}>
      <div className={styles.accessories}>
        <div className={styles.img}>
            <Image 
                src={accessories.image ? accessories.image: "No Image"} 
                width={350} 
                height={470}
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.blue}>{accessories.manufacturer}</h2>
            <h3>{accessories.description}</h3>
            <span className={styles.blue}>
              {accessories.payment.thirtysix_month ? accessories.payment.thirtysix_month : accessories.payment.twentyfour_month ? accessories.payment.twentyfour_month : accessories.payment.upfront ? accessories.payment.upfront : "FREE"}
            </span>
            <span>
              {accessories.payment.thirtysix_month ? "/mo" : accessories.payment.twentyfour_month ? "/mo" : accessories.payment.upfront ? "" : 
              "FREE"}
            </span>
          </div>
      </div>
    </Link>
  )
}
