import Image from "next/image";

function Logo(props: any) {
    const { renderDefault, title } = props;

    return <div>
        <Image 
            className = "rounded-2xl"
            height = {100}
            width = {100}
            src = "https://images.thedirect.com/media/article_full/rick1.jpg"
            alt = "Logo"
        />
        <>{renderDefault(props)}</>
    </div>
}

export default Logo
