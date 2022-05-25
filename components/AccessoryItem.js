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
    </Link>
  )
}
