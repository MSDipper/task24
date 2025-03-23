
interface ImagesProps {
    images: string[];
   className?: string
}

export const Images = ({ images, className }: ImagesProps) => {
    return (
        <>
            {images.map((imgSrc, index) => (
                <img className={className} key={index} src={imgSrc} alt={`Изображения ${index + 1}`} />
            ))}
        </>
    );
};
