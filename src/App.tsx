import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./app/Body";
import Footer from "./app/Footer";
import Header from "./app/Header";
import ImageSlideshow from "./app/ImageSlideshow";
import FooterMobile from "./app/Mobile/FooterMobile";
import HeaderMobile from "./app/Mobile/HeaderMobile";
import MobileBody from "./app/Mobile/MobileBody";
import Loading from "./assets/Loading";
import LoginMobile from "./app/Mobile/LoginMobile";
import MobileBottom from "./app/Mobile/MobileBottom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundColors = [
    "#f9dbff",
    "#c0dffb",
    "#c0ccfb",
    "#fac4eb",
    "#879ae6",
  ];
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1095);

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1095);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLargeScreen && (
                <div>
                  <div
                    className={`flex flex-col items-center justify-center  bg-[${backgroundColors[currentImageIndex]}]`}
                  >
                    <div className="flex flex-col h-max">
                      <Header />
                      <div className="flex justify-start px-4">
                        <Body />
                        <ImageSlideshow onImageChange={handleImageChange} />
                      </div>
                    </div>
                  </div>
                  <Footer />
                </div>
              )}
              {!isLargeScreen && (
                <div>
                  <div
                    className="flex flex-col justify-between bg-[#879ae6] w-full h-screen"
                    style={{
                      backgroundImage:
                        'url("https://cdn.okccdn.com/media/img/every_single_person/photos/ice_cream.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <HeaderMobile />
                    <MobileBody />
                  </div>
                  <div>
                    <MobileBottom />
                    <FooterMobile />
                  </div>
                </div>
              )}
            </>
          }
        />
        <Route path="/loginMobile" element={<LoginMobile />} />
      </Routes>
    </Router>
  );
}

export default App;
