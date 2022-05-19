import Link from "next/link"
import Image from "next/image"

export default function AccessoryItem({accessory}) {
  return (
    <Link href={`/accessories/${accessory.slug}`}>
      <div key={accessory.id} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={accessory.image}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              {/* <a href={accessory.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {accessory.name}
              </a> */}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{accessory.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{accessory.payment.thirtysix_month}</p>
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
