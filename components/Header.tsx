import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <Image 
                    className = "rounded-full"
                    height = {100}
                    width = {100}
                    src = "https://www.looper.com/img/gallery/why-rick-and-morty-will-be-just-fine-without-justin-roiland/l-intro-1674617894.jpg"
                    alt = "Logo"
                />
            </Link>
            <h1>
                Code Terra Blog
            </h1>
        </div>

        <div>

        </div>
    </header>
  )
}

export default Header
