import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-16 py-8 ">
      <svg
        width="100"
        height="33"
        viewBox="0 0 100 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.48 12.964c-.859 0-1.62.345-2.05.88l-.926 6.246c.33.095.728.126 1.29.126 2.083 0 3.672-1.382 3.672-4.52 0-1.979-.596-2.732-1.986-2.732zM10.748 12.964c-2 0-3.114 1.938-3.114 4.532 0 1.876.557 2.72 2.163 2.72 1.802 0 3.18-1.657 3.18-4.501 0-1.844-.525-2.751-2.23-2.751zM86.26 17.343c0 1.956.737 2.49 1.953 2.49.706 0 1.345-.251 1.793-.724l.834-6.306c-.417-.19-.834-.221-1.346-.221-1.954 0-3.234 1.64-3.234 4.761z"
          fill="#000"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M92.688 23.122c-1.215 0-2.046-.511-2.046-1.853 0-.064.032-.35.063-.512-.767 1.726-2.397 2.334-4.09 2.334-2.974 0-4.7-1.31-4.7-4.986 0-5.529 2.972-8.405 6.648-8.405 1.374 0 2.238.191 2.782.607l.606-4.442c.257-2.013.927-2.493 2.526-2.493.895 0 1.79.224 2.333.64L94.956 17.37c-.159 1.12-.192 1.695-.192 2.079 0 .319.096.543.575.543.289 0 .799-.033 1.151-.128.352.288.48.606.48 1.087 0 1.47-1.63 2.172-4.282 2.172zm-15.44-.031c-1.567 0-2.494-.608-2.494-1.982 0-.543.095-1.438.191-2.109l1.086-6.232-1.469.032c-.257-.32-.32-.735-.32-1.15 0-1.406 1.246-1.919 4.09-1.919 2.11 0 2.558.607 2.368 1.918l-.737 4.986c-.224 1.47-.448 2.493-.448 2.908 0 .224.097.448.48.448.288 0 .799-.033 1.183-.128.351.256.51.639.51 1.055 0 1.502-1.341 2.173-4.44 2.173zm2.81-19.655c1.503 0 2.174.863 2.174 2.046 0 1.405-.991 2.365-2.653 2.365-1.183 0-2.237-.417-2.237-1.982 0-1.375 1.024-2.43 2.717-2.43zM65.469 22.93c-.353 0-.992 0-1.28-.031l-.832 6.263c-.606.224-1.598.255-2.268.255-1.406 0-2.078-.574-2.078-1.789 0-.352.096-.959.224-1.822l1.727-13.04-1.47.033c-.225-.32-.289-.735-.289-1.15 0-1.406 1.247-1.919 4.091-1.919 1.854 0 2.365.416 2.206 1.472l-.191 1.182c.863-2.238 2.363-2.717 4.026-2.717 3.1 0 4.474 1.853 4.474 5.306 0 5.017-3.259 7.957-8.34 7.957zm-10.644.191c-1.565 0-2.237-.48-2.013-1.981l.095-.639c-.927 1.694-2.302 2.589-4.954 2.589-2.269 0-3.548-.927-3.548-3.004 0-.895.065-1.47.353-2.972l.798-4.347-1.47.032c-.256-.32-.32-.735-.32-1.15 0-1.406 1.247-1.919 4.092-1.919 2.108 0 2.589.607 2.365 1.918l-.8 4.986c-.16.895-.32 1.95-.32 2.493 0 .639.353.863 1.216.863.894 0 1.854-.415 2.46-1.406l.864-6.392c.256-2.014.735-2.525 2.333-2.525.895 0 1.918.223 2.46.639l-1.022 7.606c-.063.543-.16 1.119-.16 1.663 0 .223.128.415.512.415.287 0 .735-.033 1.118-.128.352.256.511.672.511 1.087 0 1.5-1.47 2.172-4.57 2.172zm-12.208-9.97c-.734-.224-1.502-.352-2.684-.352-2.302 0-3.613 1.342-3.613 4.219 0 2.109.64 2.876 2.333 2.876.96 0 2.078-.224 3.293-.671.448.224.671.863.671 1.342 0 1.63-1.47 2.59-5.082 2.59-3.867 0-5.945-1.567-5.945-5.626 0-5.05 3.068-7.894 7.895-7.894 3.036 0 3.771.927 3.771 2.141 0 .671-.224 1.055-.639 1.374zM27.09 23.09c-1.246 0-1.694-.448-2.366-1.886l-2.14-4.379-.8 6.009c-.607.224-1.597.256-2.27.256-1.405 0-2.044-.575-2.044-1.79 0-.351.063-.958.19-1.821l1.79-13.615c.257-2.013.928-2.493 2.527-2.493.894 0 1.79.224 2.332.64l-1.502 11.25c3.804-5.274 4.155-5.594 6.073-5.594 2.013 0 2.717.576 2.717 1.726 0 .67-.192 1.118-.512 1.47-.48-.032-.959-.032-1.342-.032-.671 0-1.054.16-2.94 2.748l2.172 3.931c.16.256.32.48.672.48.288 0 .768-.033 1.15-.128.32.224.448.672.448 1.087 0 1.5-1.502 2.14-4.155 2.14zm-18.02.064c-3.643 0-6.041-1.6-6.041-5.657 0-4.73 2.877-7.895 7.832-7.895 4.633 0 6.264 2.302 6.264 5.722 0 4.826-2.94 7.83-8.055 7.83zm89.3-5.614l-.386-.317L100 2.693l-1.387-1.064C97.183.532 95.391.369 94.451.369c-3.22 0-5.073 1.721-5.505 5.117l-.166 1.212a9.21 9.21 0 0 0-3.94.786c.236-.611.37-1.282.37-2.002 0-2.973-2.129-5.05-5.177-5.05-3.26 0-5.72 2.336-5.72 5.433 0 .48.054.932.159 1.357a5.239 5.239 0 0 0-1.065.5c-1.124-.687-2.497-1.058-4.098-1.058-1.222 0-2.246.218-3.102.579-.957-.44-2.025-.516-2.94-.516-1.781 0-3.055.185-4.076.588-1.27-.57-2.623-.65-3.241-.65-1.888 0-3.092.636-3.867 1.478-1.237-1.263-3.003-1.416-4.251-1.416-1.923 0-3.256.213-4.315.685-.973-.47-2.28-.78-4.059-.78-2.369 0-4.43.556-6.11 1.563-.828-.856-2.203-1.53-4.494-1.53-.727 0-1.354.065-1.922.214l.33-2.47.23-1.722-1.38-1.058C24.681.532 22.89.369 21.95.369c-3.22 0-5.073 1.721-5.505 5.117l-.304 2.303c-1.424-.776-3.201-1.19-5.307-1.19C4.354 6.6 0 10.98 0 17.5c0 5.421 3.38 8.66 9.044 8.66 2.524 0 4.712-.601 6.46-1.7.878 1.04 2.26 1.635 3.985 1.635 1.44 0 2.492-.14 3.31-.442l1.208-.445c.755.545 1.732.887 3.057.887 2.401 0 4.004-.497 5.073-1.2 1.405.833 3.206 1.265 5.372 1.265 2.388 0 4.307-.622 5.735-1.581 1.04.918 2.56 1.516 4.683 1.516 1.46 0 2.735-.225 3.84-.683 1.195.715 2.518.715 3.031.715.476 0 .916-.022 1.336-.054-.094.638-.154 1.118-.154 1.557 0 2.386 1.575 4.643 5.082 4.793 2.635.112 5.009-1.071 5.009-1.071l.727-5.477c2.22-.203 4.155-.908 5.72-2.02.841 1.3 2.377 2.24 4.704 2.24 2.06 0 3.555-.264 4.709-.83.123-.062.232-.134.348-.2 1.166.671 2.608 1.03 4.31 1.03 1.219 0 2.337-.22 3.317-.639.768.433 1.702.671 2.756.671 6.762 0 7.286-3.963 7.286-5.176 0-1.748-.858-2.819-1.578-3.41z"
          fill="#000"
        ></path>
      </svg>
      <div className="flex space-x-4 items-center">
        <h2>Have an account?</h2>
        <button
          onClick={() => setModalIsOpen(true)}
          className="inline-block h-9 px-3.5 border border-black rounded bg-transparent text-black font-semibold cursor-pointer text-sm leading-9"
        >
          Sign In
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="w-[374px] h-[566px] mx-auto mt-20 bg-white rounded-lg overflow-auto"
        style={{
          overlay: {
            backgroundColor: "rgba(17, 17, 17, 0.7)",
          },
        }}
      >
        <div className="flex justify-center items-center bg-[#f0f2f6] h-full px-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="max-w-[310px] font-bold text-2xl text-center pb-4 text-[#2a2f35]">
              Enter email and password
            </h1>
            <form className="w-full flex flex-col ">
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
            <hr className="w-full border-black mb-5 -mx-10" />
            <button className="px-5 py-5 block w-full rounded-sm mx-auto mb-5 bg-[#0000bf] text-white font-bold text-base leading-[18px] tracking-wider text-center relative hover:bg-[#5c69ff]">
              LOG IN WITH PHONE
            </button>
          </div>
        </div>
      </Modal>
    </header>
  );
}

export default Header;
