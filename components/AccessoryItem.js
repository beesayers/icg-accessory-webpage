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
                width={140} 
                height={175}
            />
          </div>
          <div className={styles.info}>
            <h2>{accessories.manufacturer}</h2>
            <h3>{accessories.description}</h3>
            <span class="blue">
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
