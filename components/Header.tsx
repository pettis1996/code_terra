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
                    src = "https://i.ibb.co/LzgB8sB/logo-dark.png"
                    alt = "Logo"
                />
            </Link>
            <h1>
                Code Terra Blog
            </h1>
        </div>

        <div>
            <Link 
                href="/"
                className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#9258c4] flex items-center rounded-full text-center"
            >
                Sign Up Here
            </Link>
        </div>
    </header>
  )
}

export default Header
