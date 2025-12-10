import { useEffect, useState } from "react";
import { storyList } from "../js/data"

const StorySlider = () => {
  const [storyIndex, setStoryIndex] = useState(0);

  const nextSlide = () => setStoryIndex((prev) => (prev + 1) % storyList.length);

  const current = storyList[storyIndex];

  useEffect(() => {
    const inertval = setInterval(nextSlide, 4000);
    return () => clearInterval(inertval)
  }, [nextSlide])
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base leading-tight max-w-[556px] ">{ current.desc }</p>

      <div className="relative">
        <div className="w-full h-full overflow-hidden">
          <img 
            className="object-center object-cover w-full aspect-square md:aspect-[2.5/1]"
            src={ current.imgSrc } alt="2023 creation" />
        </div>

        <h2 className="absolute right-5 top-5 text-2xl lg:text-[108px] font-medium leading-none">{ current.year }</h2>

        {/*  */}
        <div className="mt-2 flex gap-4 md:absolute right-5 bottom-5">
          {
            storyList.map((slide, index) => {
              return (
                <button 
                key={slide.id} 
                className={`slide-btn ${ storyIndex === index ? "bg-gray" : "bg-[#f6f6f6]" }`}
                onClick={() => setStoryIndex(index)}></button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default StorySlider;