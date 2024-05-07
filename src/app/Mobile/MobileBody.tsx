import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function MobileBody() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/loginMobile");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <p className="w-full px-6 py-0 text-white text-center text-xs leading-[1.3333333333]">
        By clicking Join, you agree to our{" "}
        <span className="underline cursor-pointer font-bold">Terms.</span> Learn
        how we process your data in our{" "}
        <span className="underline cursor-pointer font-bold">
          Privacy Policy
        </span>{" "}
        and{" "}
        <span className="underline cursor-pointer font-bold">
          Cookies Policy.
        </span>
      </p>
      <button className="w-11/12 px- py-5 bg-white text-black font-bold text-sm leading-none tracking-wider text-center rounded-[32px] cursor-pointer">
        JOIN OKCUPID
      </button>
      <button
        onClick={navigateToLogin}
        className="mt-2 border-none text-white flex justify-center items-center w-11/12 py-2.5 px-4  bg-transparent cursor-pointer font-bold text-sm leading-none tracking-wider text-center rounded-[2px] overflow-wrap break-word border-2 min-h-[48px]"
      >
        SIGN IN <FontAwesomeIcon className="pl-2" icon={faChevronRight} />
      </button>
      <p className="w-full px-6 pb-4 text-white text-center text-xs leading-[1.3333333333] underline cursor-pointer font-bold ">
        from Match Group
      </p>
    </div>
  );
}
export default MobileBody;
