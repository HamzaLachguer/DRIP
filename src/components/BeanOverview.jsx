import { useState } from "react";
import { beansArray } from "../js/data";

const BeanOverview = () => {
  const [currentBean, setCurrentBean] = useState(0);
  
  const current = beansArray[currentBean];

  return (
    <div className="flex flex-col gap-12 md:grid md:grid-cols-[2fr_3fr]">
      <p className="text-sm max-w-[530px] md:max-w-[345px] leading-tight">{ current.desc }</p>

      <div className="grid grid-cols-[1fr_5fr] md:grid-cols-[1fr_6fr] gap-2">
        <div className="grid gap-2 h-fit">
          {
            beansArray.map((type, index) => {
              return (
                <button 
                  key={type.id}
                  onClick={() => setCurrentBean(index)}
                  className={`h-full aspect-[1/1.2] overflow-hidden transition-all duration-300 ${index === currentBean ? "opacity-100" : "opacity-50" } hover:opacity-100`}
                  aria-label={`go to image id: ${type.id}`}>
                  <img className="h-full w-full object-center object-cover" src={ type.image } alt={`image id: ${type.id}`} />
                  
                </button>
              )
            })
          }
        </div>

        <div className="overflow-hidden aspect-[1/1.2] md:aspect-square">
          <img 
            className="h-full w-full object-center object-cover" 
            src={ current.image } alt={`image id: ${current.id}`} />
        </div>
      </div>
    </div>
  )
}

export default BeanOverview;