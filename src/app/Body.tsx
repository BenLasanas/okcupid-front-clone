function Body() {
  return (
    <div className="w-full relative ">
      <h1
        className=" mx-2 my-4 w-fit text-white font-black text-[3.625rem] leading-[64px]"
        style={{
          textShadow: "-6px 2px 0px black",
          WebkitTextStrokeColor: "black",
          WebkitTextStrokeWidth: "thin",
        }}
      >
        DATING FOR EVERY <br /> SINGLE PERSON
      </h1>
      <h2 className="pt-5 text-[#2d282f] text-lg font-normal leading-normal">
        OkCupid is the only dating app that matches you <br /> on what matters
        to you.
        <br />
        You deserve to find who you’re looking for.
        <br /> Meet them today!
      </h2>
      <h3 className="py-4 text-lg leading-normal font-normal">
        By clicking Join, you agree to our <br />
        <span className="underline cursor-pointer font-semibold">
          Terms.
        </span>{" "}
        Learn how we process your <br /> data in our{" "}
        <span className="underline cursor-pointer text-[#1e1e1e] font-semibold">
          Privacy Policy
        </span>{" "}
        and <br />
        <span className="underline cursor-pointer font-semibold">
          Cookies Policy.
        </span>
      </h3>
      <button className="p-0 border-0 text-white cursor-pointer inline-block box-border w-72 h-16 mt-5.5 rounded bg-black font-bold tracking-wider text-center text-base leading-[3.875]">
        JOIN OKCUPID
      </button>
      <div className="flex flex-col">
        <h2 className="inline-block mr-6 font-bold text-base leading-[2.6875] tracking-wider">
          GET THE APP
        </h2>
        <div className="flex space-x-4">
          <img src="https://cdn.okccdn.com/media/img/app-store-badges/ios/en.svg"></img>
          <img
            src="https://cdn.okccdn.com/media/img/app-store-badges/android/en.svg"
            className="w-32"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Body;
