"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

let url_img = "https://image.tmdb.org/t/p/w500";

const PeliCard = ({peli}:any) => {
    const router = useRouter();
    return (
        <a className="cursor-pointer" onClick={()=>{router.push(`/dashboard/pelicula/${peli.id}`)}}>
            <Image src={url_img + peli.poster_path} width={500} height={500} alt={peli.title} />
        </a>
    )
}

export default PeliCard;
