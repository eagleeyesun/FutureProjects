import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide"

const variantStyles : Record<BookCoverVariant, string> = {
    extraSmall :'  w-[28.95px] h-10',
    small :'w-[55px] h-[76px]',
    medium :'w-[144px] h-[199px]',
    regular :'sm:w-[174px] w-[114px] sm:h-[239px] h-[169px]',
    wide :' sm:w-[296px] w-[256px] sm:h-[404px] h-[354px]',
}

interface props {
    className?: string
    variant?: BookCoverVariant;
    coverColor: string
    coverImage?: string
}

const BookCover = ({
    className,
     variant = 'regular',
      coverColor ='#012B48',
      coverImage = 'https://www.placehold.co/400x600.png'
}: props) => {
    return (
        <div 
         className={cn("relative transition-all duration-300", variantStyles[variant],className)}>
            <BookCoverSvg coverColor={coverColor} />
            <div className="absolute z-10" style={{ left:'12%', width:'87.5%', height:'88%'}}>
                <Image src={coverImage} alt="Book Cover" fill className="rounded-sm object-fill" />
            </div>
         </div>
    )
}

export default BookCover