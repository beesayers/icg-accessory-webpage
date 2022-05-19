export default function Banner() {
    return (
        <div className="relative bg-white flex">
            <div className="flex items-baseline px-4 py-4 sm:px-6 md:justify-start md:space-x-10 bg-rose-800 w-10/12">
                <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                    <nav className="flex space-x-10">
                        <a href="#" className="text-base font-medium text-white hover:opacity-75">
                        Internet
                        </a>
                        <a href="#" className="text-base font-medium text-white hover:opacity-75">
                        Mobile
                        </a>
                        <a href="#" className="text-base font-medium text-white hover:opacity-75">
                        TV
                        </a>
                        <a href="#" className="text-base font-medium text-white hover:opacity-75">
                        Connected Home
                        </a>
                        <a href="#" className="text-base font-medium text-white hover:opacity-75">
                        Deals
                        </a>
                    </nav>
                </div>
            </div>
            <div className="flex items-baseline ml-6 px-2 py-4 sm:px-6 md:justify-end md:space-x-10 bg-rose-800 w-2/12">
                <div className="flex items-center md:ml-4">
                    <nav className="flex">
                        <a href="#" className="text-base font-medium text-white hover:opacity-75">
                        My Account
                        </a>
                        
                    </nav>
                </div>
            </div>
        </div>
    )
}
  