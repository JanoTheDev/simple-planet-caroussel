"use client";

import Image from "next/image";
import earth from "../public/Earth.png";
import Jupiter from "../public/Jupiter.png";
import mars from "../public/mars.png";
import mercury from "../public/mercury.png";
import moon from "../public/moon.png";
import neptune from "../public/neptune.png";
import saturn from "../public/saturn.webp";
import uranus from "../public/uranus.png";
import venus from "../public/venus.png";
import { useEffect, useState } from "react";

export default function App() {
  const planets = [
    {
      image: mercury,
      name: "Mercury",
      description:
        "Mercury is the smallest planet in our solar system and the closest to the Sun. It has a very thin atmosphere, leading to extreme temperature fluctuations, ranging from scorching highs of 800°F (430°C) during the day to freezing lows of -290°F (-180°C) at night. Mercury's surface is covered in craters, similar to our Moon, and it has no moons of its own.",
    },
    {
      image: venus,
      name: "Venus",
      description:
        "Venus, often called Earth's twin due to its similar size, is the hottest planet in our solar system, with surface temperatures reaching around 900°F (475°C). Its thick atmosphere, composed mainly of carbon dioxide, traps heat in a runaway greenhouse effect. Venus has a landscape dominated by vast plains, towering volcanoes, and mountains, all hidden beneath dense clouds of sulfuric acid.",
    },
    {
      image: earth,
      name: "Earth",
      description:
        "Earth is the third planet from the Sun and the only known planet to support life. It has diverse ecosystems, ranging from polar ice caps to tropical rainforests, and is covered mostly by water, which makes it appear blue from space. Earth's atmosphere is rich in nitrogen and oxygen, and it has a magnetic field that protects it from harmful solar radiation.",
    },
    {
      image: moon,
      name: "Moon",
      description:
        "The Moon is Earth's only natural satellite and is the fifth-largest moon in our solar system. It has a surface marked by craters from meteorite impacts and large, dark plains formed by ancient volcanic eruptions. The Moon's gravitational pull is responsible for Earth's tides, and it plays a crucial role in stabilizing Earth's axial tilt, which affects our climate.",
    },
    {
      image: mars,
      name: "Mars",
      description:
        "Mars, known as the Red Planet due to its iron oxide-rich soil, is a cold, desert-like world with a thin atmosphere composed mostly of carbon dioxide. Mars has the tallest volcano in the solar system, Olympus Mons, and a vast canyon system called Valles Marineris. Evidence suggests that Mars once had liquid water on its surface, raising the possibility that it may have supported life in the past.",
    },
    {
      image: Jupiter,
      name: "Jupiter",
      description:
        "Jupiter is the largest planet in our solar system, with a mass more than twice that of all the other planets combined. It is a gas giant, composed mostly of hydrogen and helium, and is known for its Great Red Spot, a massive storm that has been raging for centuries. Jupiter has at least 79 moons, including the four largest, known as the Galilean moons: Io, Europa, Ganymede, and Callisto.",
    },
    {
      image: saturn,
      name: "Saturn",
      description:
        "Saturn is famous for its stunning rings, made up of ice and rock particles, which are the most extensive and complex in our solar system. It is a gas giant like Jupiter, composed mainly of hydrogen and helium, and has at least 82 moons, including Titan, which is larger than the planet Mercury. Titan has a thick atmosphere and liquid methane lakes, making it one of the most intriguing bodies in the solar system.",
    },
    {
      image: uranus,
      name: "Uranus",
      description:
        "Uranus is an ice giant, unique for its tilted axis, which causes it to rotate on its side. This tilt results in extreme seasonal variations, with each pole getting 42 years of continuous sunlight followed by 42 years of darkness. Uranus has a faint ring system and is composed mostly of water, ammonia, and methane ices. Its blue-green color comes from methane in the atmosphere, which absorbs red light.",
    },
    {
      image: neptune,
      name: "Neptune",
      description:
        "Neptune, the farthest planet from the Sun, is an ice giant known for its deep blue color, also due to methane in its atmosphere. It has the strongest winds in the solar system, with speeds reaching up to 1,200 miles per hour (2,000 kilometers per hour). Neptune has 14 known moons, with Triton being the largest, which orbits the planet in the opposite direction to its rotation, suggesting it was captured by Neptune's gravity.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const [animationText, setAnimationText] = useState("");
  const [animationDescription, setAnimationDescription] = useState("");

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const nextIndex = index + 1 < planets.length ? index + 1 : 0;
    setAnimation("spinner");
    setAnimationText("text");
    setAnimationDescription("description");

    setTimeout(() => {
      setIndex(nextIndex);
      setAnimation("reversespinner");

      setAnimationText("reversetext");
      setAnimationDescription("reversedescription");
    }, 490);

    setTimeout(() => {
      setAnimation("");
    }, 990);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1200);
  };

  const handleBack = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const prevIndex = index - 1 >= 0 ? index - 1 : planets.length - 1;
    setAnimation("spinner");
    setAnimationText("text");
    setAnimationDescription("description");

    setTimeout(() => {
      setIndex(prevIndex);
      setAnimation("reversespinner");

      setAnimationText("reversetext");
      setAnimationDescription("reversedescription");
    }, 490);

    setTimeout(() => {
      setAnimation("");
    }, 990);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1200);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#373737]">
      <Image
        key={index}
        src={planets[index].image}
        alt={`Planet ${index}`}
        width={300}
        height={300}
        className={`${animation} w-[300px] h-[300px]`}
      />

      <div className="max-w-[500px] h-[200px]">
        <p
          className={`${animationText} mt-[3px] lg:mt-[10px] text-[32px] text-white font-bold text-center`}
        >
          {planets[index].name}
        </p>
        <p
          className={`${animationDescription} mx-3 mb-5 lg:mb-0 lg:mx-0  lg:mt-[5px] text-lg text-white text-center`}
        >
          {planets[index].description}
        </p>
      </div>

      <div className="mt-[200px] flex space-x-4">
        <button
          onClick={handleBack}
          disabled={isAnimating}
          className={`px-6 py-2 rounded-xl bg-white hover:opacity-85 transition ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className={`px-6 py-2 rounded-xl bg-white hover:opacity-85 transition ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
