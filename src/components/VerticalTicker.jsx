import { useEffect, useState } from "react";

const VerticalTicker = () => {
  const [index, setIndex] = useState(0);

  const items = [
    "Discover the world’s hidden gems",
    "একজন ভালো ভ্রমণকারীর কোনো নির্দিষ্ট পরিকল্পনা নেই, এবং পৌঁছানোর অভিপ্রায় নেই",
    "ভ্রমণ প্রথমে তোমাকে নির্বাক করে দেবে তারপর তোমাকে গল্প বলতে বাধ্য করবে",
    "Make memories that last forever",
    "শুধুমাত্র যা আপনি সবসময় আপনার সাথে বহন করতে পারেন তার মালিক আপনি",
    "Adventure begins where plans end",
    "পৃথিবীর প্রতিটি কোণেই একটি নতুন গল্প লুকিয়ে আছে",
    "Travel far enough, and you meet yourself along the way",
    "ভ্রমণ তোমাকে শিখায়, তুমি কতটা ছোট, কিন্তু কতটা বড় অভিজ্ঞতা অর্জন করতে পারো",
    "Life is short and the world is wide — explore as much as you can"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000); // 3s per quote
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full mx-auto overflow-hidden rounded-2xl shadow-lg bg-gradient-to-r from-blue-100 via-white to-blue-100 h-20 flex items-center justify-center relative">
      {items.map((text, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center text-center text-blue-800 font-semibold text-lg lg:text-xl px-4 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default VerticalTicker;
