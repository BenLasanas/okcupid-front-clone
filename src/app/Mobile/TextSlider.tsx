import { useState } from "react";
import { Story } from "../Models/Story";
function TextSlider() {
  const Stories: Story[] = [
    {
      story:
        "“Both of us lived in the Bay Area for years but had no idea each other existed until OKCupid brought us together in the sunny summer of ’16. We knew after the first date when we both had butterflies and barely touched our lunches that we were each other’s someone special. Love can spring from anywhere given the chance and we will always be grateful to OKCupid for helping give us our chance and being the start to our strong and beautiful relationship.”",
      author: "🖤 CARLENE AND COLIN 🖤",
    },
    {
      story:
        "We met on OkCupid way back in 2013. Online dating can be intimidating but connecting on OKC was simple. We got to see and read a little about each other, message back and forth, and eventually meet in person! That one message was life changing. It led us to start dating, move in together, get married, and we just welcomed our first child in 2021! I’m so thankful that OKC (and Michelle’s bravery) led me to my adventure partner for life.”",
      author: "🖤 CANDACE AND MICHELLE 🖤",
    },
    {
      story:
        "“The wildest part is that, when we met, it was her first night on the app! We had a lot in common, from a love of burgers to Todd Rundgren, and both of us rearranged our schedules to meet up as soon as we possibly could. That was in 2016. Almost 6 years later, we are married, we have two cats, a niece and a nephew. We are each other’s family, and we gained new, amazing extended families as well. We love everything about one another, aside from the times we have to be apart. We’ve built this amazing life together and it all started on OkCupid.”",
      author: "🖤 KYLE AND ASHLEY 🖤",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleScroll = (e: any) => {
    const index = Math.round(
      (e.target.scrollLeft / e.target.scrollWidth) * Stories.length
    );
    setCurrent(index);
  };
  return (
    <div>
      <div
        className="flex overflow-x-scroll space-x-4 p-4 scroll-snap-x-mandatory"
        onScroll={handleScroll}
      >
        {Stories.map((story, index) => (
          <div
            key={index}
            className="flex-none w-full pb-14 bg-white p-4 rounded-md shadow-md scroll-snap-center"
          >
            <p className="mb-4">{story.story}</p>
            <p className="font-bold">{story.author}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        {Stories.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full ${
              index === current ? "bg-[#1a1a1a]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default TextSlider;
