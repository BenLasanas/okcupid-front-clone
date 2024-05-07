import { useState, useEffect } from "react";
type ImageSlideshowProps = {
  onImageChange: (index: number) => void;
  onMobileImageUsed: () => void;
};
function ImageSlideshow({
  onImageChange,
  onMobileImageUsed,
}: ImageSlideshowProps) {
  const images = [
    "https://cdn.okccdn.com/media/img/every_single_person/photos/eating_couple.png",
    "https://cdn.okccdn.com/media/img/every_single_person/photos/door.png",
    "https://cdn.okccdn.com/media/img/every_single_person/photos/proposing.png",
    "https://cdn.okccdn.com/media/img/every_single_person/photos/two_women.png",
  ];

  const mobileImage =
    "https://cdn.okccdn.com/media/img/every_single_person/photos/ice_cream.png";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [currentImageIndex, images.length]);

  useEffect(() => {
    onImageChange(currentImageIndex);
  }, [onImageChange, currentImageIndex]);

  useEffect(() => {
    if (windowWidth < 1095) {
      onMobileImageUsed();
    }
  }, [windowWidth, onMobileImageUsed]);

  return (
    <div className="w-2/3 py-4">
      <img
        className={`max-w-screen-sm h-full transition duration-1500 ease-in-out${
          windowWidth >= 1095 ? "animate-pulse" : ""
        }`}
        src={windowWidth < 1095 ? mobileImage : images[currentImageIndex]}
        alt="carousel"
      />
    </div>
  );
}

export default ImageSlideshow;
