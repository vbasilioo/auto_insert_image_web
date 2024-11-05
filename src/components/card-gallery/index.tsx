import Image from "next/image";
import { Lens } from "../ui/lens";
import { useState } from "react";

interface ICardGalleryComponent {
    imageUrl: string;
}

export function CardGalleryComponent({ imageUrl }: ICardGalleryComponent) {
    const [hovering, setHovering] = useState<boolean>(false);

    return (
        <div className="bg-accent rounded-lg aspect-[16/6] md:aspect-square flex items-center justify-center relative">
            <Lens hovering={hovering} setHovering={setHovering} zoomFactor={2} lensSize={250}>
                <Image
                    src={imageUrl}
                    alt="Gato"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover aspect-[16/6] md:aspect-square"
                />
            </Lens>
        </div>
    );
}