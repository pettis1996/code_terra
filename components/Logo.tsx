import Image from "next/image";

function Logo(props: any) {
    const { renderDefault, title } = props;

    return <div className="flex items-center space-x-2">
        <Image 
            className = "rounded-full"
            height = {100}
            width = {100}
            src = "https://www.looper.com/img/gallery/why-rick-and-morty-will-be-just-fine-without-justin-roiland/l-intro-1674617894.jpg"
            alt = "Logo"
        />
        <>{renderDefault(props)}</>
    </div>
}

export default Logo
