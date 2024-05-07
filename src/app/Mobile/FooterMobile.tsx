import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterItem } from "../Models/FooterItem";
import {
  faChevronRight,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function FooterMobile() {
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
    <div className="flex flex-col bg-[#1a1a1a]">
      <div className="flex justify-between border-b border-[#333333] px-4 py-2">
        <h1 className="pr-5 py-3 text-white text-base tracking-wider font-bold">
          LANGUAGE
        </h1>
        <button
          className="border-[#f1f1f1] text-[#f1f1f1] flex flex-row justify-between items-center p-2 border border-solid rounded-sm bg-transparent text-sm min-w-[11.25rem] m-2"
          value="English">
          English
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {footerItems.map((footerItem, index) => {
        const [showItems, setShowItems] = useState(false);
        return (
          <div
            key={index}
            className={`hover:cursor-pointer px-4 py-2 bg-[#1a1a1a] ${
              index === footerItems.length - 1
                ? ""
                : "border-b border-[#333333]"
            }`}
            onClick={() => setShowItems(!showItems)}>
            <div className="flex justify-between">
              <h1 className="pr-5 py-3 text-white text-base tracking-wider font-bold">
                {footerItem.title}
              </h1>
              <button
                onClick={() => setShowItems(!showItems)}
                className="text-white hover:cursor-pointer">
                <FontAwesomeIcon icon={showItems ? faMinus : faPlus} />
              </button>
            </div>
            {showItems && (
              <ul className="space-y-4">
                {footerItem.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`text-white text-lg font-normal ${
                      itemIndex === footerItem.items.length - 1 ? "pb-4" : ""
                    }`}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
      <div className="flex justify-between  px-4 py-6">
        <p className="text-[#c0c0c0] text-sm leading-[1.71]">© OkCupid 2024</p>
        <h1 className="text-white font-bold underline hover:cursor-pointer ">
          from Match Group
        </h1>
      </div>
    </div>
  );
}
export default FooterMobile;
