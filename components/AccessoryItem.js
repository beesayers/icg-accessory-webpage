import Link from "next/link"
import Image from "next/image"

export default function AccessoryItem({accessory}) {
  return (
    <Link href={`/accessories/${accessory.slug}`}>
      <div key={accessory.id} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={accessory.image}
            className="w-full h-full object-center object-contain p-6 lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-2 flex justify-between">
          <div>
            <h3 className="text-med text-rose-800 font-medium">
              <span aria-hidden="true" className="absolute inset-0" />
              {accessory.description}
            </h3>
            <p className="mt-1 text-med text-gray-700">{accessory.color}</p>
          </div>
          <p className="text-med font-medium text-sky-600">{accessory.payment.thirtysix_month}/month</p>
        </div>
      </div>






      {/* <div className={styles.accessories}>
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
      </div> */}
    </Link>
  )
}
