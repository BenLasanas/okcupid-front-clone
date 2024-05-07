import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterItem } from "./Models/FooterItem";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  const footerItems: FooterItem[] = [
    {
      title: "COMPANY",
      items: ["About", "Careers", "Press", "Ad Choices"],
    },
    {
      title: "CONDITIONS",
      items: [
        "Privacy",
        "Cookie - Manage Preference",
        "Terms",
        "Community Guidelines",
        "Consumer Health Data Privacy Policy",
      ],
    },
    {
      title: "CONTACT",
      items: ["Support", "Security", "Safety Tips", "Impressum"],
    },
    {
      title: "FOLLOW",
      items: ["Blog", "Tech Blog", "Facebook", "Instagram", "Twitter"],
    },
    { title: "SPECIAL", items: ["Download Apps"] },
  ];

  return (
    <footer className="flex justify-center items-start space-x-8 h-full bg-[#1a1a1a] pt-10 pb-11">
      {" "}
      <div className="flex flex-col items-center justify-center space-y-2 mt-4">
        <button className="flex items-center justify-center p-0 border-0 w-56 text-white cursor-pointer  box-border h-10 mt-5.5 rounded bg-[#4d5bff] font-bold tracking-wider text-center text-base leading-[3.875]">
          JOIN OKCUPID
        </button>
        <p className="text-white">© OkCupid 2024</p>
        <p className="text-white">from</p>
        <img src="https://cdn.okccdn.com/media/img/logos/match-group-darkbg.png"></img>
      </div>
      <div className="flex flex-col">
        <h1 className="pr-5 py-3 text-white font-semibold text-base tracking-wider ">
          LANGUAGE
        </h1>
        <button
          className="border-[#f1f1f1] text-[#f1f1f1] flex flex-row justify-between items-center p-2 border border-solid rounded-sm bg-transparent text-sm min-w-[11.25rem] m-2"
          value="English"
        >
          English
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {footerItems.map((footerItem) => (
        <div key={footerItem.title} className="flex flex-col items-start">
          <h1 className="pr-5 py-3 text-white font-bold text-base tracking-wider">
            {footerItem.title}
          </h1>
          {footerItem.items.map((item) => (
            <p key={item} className="text-white  tracking-wider text-sm pb-1">
              {item}
            </p>
          ))}
        </div>
      ))}
    </footer>
  );
}
export default Footer;
