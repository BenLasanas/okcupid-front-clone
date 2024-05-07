import { useState, useEffect } from "react";
type ImageSlideshowProps = {
  onImageChange: (index: number) => void;
};
function ImageSlideshow({ onImageChange }: ImageSlideshowProps) {
  const images = [
    "https://cdn.okccdn.com/media/img/every_single_person/photos/eating_couple.png",
    "https://cdn.okccdn.com/media/img/every_single_person/photos/door.png",
    "https://cdn.okccdn.com/media/img/every_single_person/photos/proposing.png",
    "https://cdn.okccdn.com/media/img/every_single_person/photos/two_women.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [currentImageIndex, images.length]);

  useEffect(() => {
    onImageChange(currentImageIndex);
  }, [onImageChange, currentImageIndex]);

  return (
    <div className="w-2/3 py-4">
      <img
        className={`max-w-screen-sm h-full transition duration-1500 ease-in-out`}
        src={images[currentImageIndex]}
        alt="carousel"
      />
    </div>
  );
}

export default ImageSlideshow;
