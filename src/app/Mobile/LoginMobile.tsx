import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
function LoginMobile() {
  const navigate = useNavigate();
  return (
    <div className="p-10 bg-[#f0f2f6] h-screen">
      <button className="text-[#0500be]" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-[310px] font-bold text-2xl text-center text-[#2a2f35]">
          Enter email and password
        </h1>
        <form className="w-2/5 flex flex-col ">
          <label
            htmlFor="email"
            className=" text-[#030320] font-normal text-left text-lg leading-[1.875rem]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="block w-full mx-auto mb-2.5 px-4 py-2.5 border border-[#c7c7c7] text-lg leading-[1.1764705882] rounded-md shadow-md"
          />
          <label
            htmlFor="password"
            className=" text-[#030320] font-normal text-left text-lg leading-[1.875rem]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="block w-full mx-auto mb-2.5 px-4 py-2.5 border border-[#c7c7c7] text-lg leading-[1.1764705882] rounded-md shadow-md"
          />
          <button
            type="submit"
            disabled
            className="px-5 py-5 mt-3 block w-full max-w-[360px] rounded-sm mx-auto mb-5 bg-[#949aa6] text-white font-bold text-base leading-[18px] tracking-wider text-center relative"
          >
            Next
          </button>
        </form>
        <button className="px-0 pb-1 w-full mb-3.5 text-[#0000bf] font-bold text-sm tracking-wider text-center">
          FORGOT PASSWORD?
        </button>
        <hr className="w-full border-black mb-5" />
        <button className="px-5 py-5 block w-full max-w-[360px] rounded-sm mx-auto mb-5 bg-[#0000bf] text-white font-bold text-base leading-[18px] tracking-wider text-center relative">
          LOG IN WITH PHONE
        </button>
      </div>
    </div>
  );
}
export default LoginMobile;
