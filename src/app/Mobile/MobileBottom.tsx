import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import TextSlider from "./TextSlider";

function MobileBottom() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="flex flex-col bg-[#f0f2f6] items-center justify-center">
        <h1 className="text-sm leading-[1.43] pb-0 font-bold text-center">
          SUCCESS STORIES
        </h1>
        <TextSlider></TextSlider>
        <div className="pt-4 px-4 pb-16">
          <p className="mb-4 text-[#666] text-sm leading-[1.71]">
            Get the best online dating app for singles to find a match based on
            who you really are and what you love. No matter who you are or what
            you are looking for, you are welcome at OkCupid.
          </p>
          {!isVisible && (
            <button
              onClick={handleClick}
              className="order-1 text-[#0000bf] text-left text-sm leading-[1.29] p-0 border-0 bg-transparent cursor-pointer rounded-[2px] outline-none font-bold tracking-wider no-underline overflow-wrap break-word"
            >
              READ MORE <FontAwesomeIcon icon={faChevronDown} />
            </button>
          )}
          {isVisible && (
            <>
              <p className="mb-4 text-[#666] text-sm leading-[1.71]">
                Great dates come from great connections - that’s why OkCupid
                shows off who you are beyond a photo. Meet new people and find
                love based on what makes you, well, you - because you deserve
                it. Our free dating app helps you meet singles, connect, chat or
                have a deep conversation through our one-of-a-kind messaging
                system.
              </p>
              <p className="mb-4 text-[#666] text-sm leading-[1.71]">
                Love doesn’t discriminate, and neither does OkCupid. You love
                your own way - if you’re straight, LGBTQ, gay, lesbian,
                nonbinary, or don’t fit into any one label, OkCupid can help you
                find love too. You can even set your pronouns at registration.
                Flirt, find love, build connections and go on great dates with
                OkCupid!
              </p>
            </>
          )}
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center pt-6">
        <h1 className="static mb-2 font-bold text-sm">
          Download the OkCupid App
        </h1>
        <div className="flex space-x-2 pb-6">
          <img src="https://cdn.okccdn.com/media/img/app-store-badges/ios/en.svg"></img>
          <img
            src="https://cdn.okccdn.com/media/img/app-store-badges/android/en.svg"
            className="w-32"
          ></img>
        </div>
      </div>
    </>
  );
}

export default MobileBottom;
