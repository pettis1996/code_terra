function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-6xl">
            Code Terra Blog
        </h1>
        <h2 className="mt-5 md:mt-0">
            Welcome to{" "}
            <span className="underline decoration-4 decoration-[#9258c4]">
                the Best Blog
            </span>{" "}
            for developers, engineers and anyone into tech!
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Latest Tech News | Programming Tutorials | Leetcode Solutions & More!
      </p>
    </div>
  )
}

export default Banner
