import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StorySlider from "./components/StorySlider";
import { articlesList, menu } from "./js/data";
import BeanOverview from "./components/BeanOverview";
import Article from "./components/Article";

const App = () => {
  return (
    <>
    
      <Header />

      <main className="text-black">
        <section className="hero-section pt-24 lg:pt-48 px-4 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-[65px] lg:text-[78px]">Where Coffee <br className="md:hidden" /> Meets Craft.</h1>
            <p className="text-sm text-gray leading-tight font-normal max-w-[576px]">OUR COZY SPACE IS DESIGNED FOR CONNECTION, CREATIVITY, AND COMFORT- WHETER YOU ARE HERE TO SAVOR YOUR FAVORITE BREW, MEET FRIENDS, OR SIMPLY ENJOY A MOMENT OF CALM</p>
          </div>

          <div className="w-full h-full overflow-hidden">
            <img 
              className="object-center object-cover aspect-[2.25/1]"
              src="https://framerusercontent.com/images/MkhLdSjfhoBdu38DoDE4YGl8fQ.webp?scale-down-to=2048" 
              alt="vintage coffee shop photo" />
          </div>
        </section>

        <section className="flex flex-col-reverse items-center gap-6 px-4 mt-12 md:mt-32 md:grid md:grid-cols-2 md:items-end">
          <div className="h-full w-full overflow-hidden">
            <img  
              className="object-center object-cover aspect-[2/1.5]"
              src="https://framerusercontent.com/images/Pik6VGMQTtXhMXYl5KLSm8oczM.webp?scale-down-to=2048" 
              alt="about shop" />
          </div>

          <div className="flex justify-end">
            <p className="text-sm text-gray leading-tight font-normal max-w-[]">STEP INTO A SPACE WHERE COFFE MEETS <br /> CRAFT AND EVERY DETAIL IS INTENTIONAL.</p>
          </div>
        </section>

        <section id="story" className="flex flex-col gap-8 px-4 mt-12 md:mt-32">
          <h2 className="uppercase text-gray">story</h2>

          <StorySlider />
        </section>

        <section className="pt-24 lg:pt-48 px-4 flex flex-col-reverse gap-6 md:grid md:grid-cols-2 md:gap-0">
          <div className="flex items-end">
            <p className="text-gray leading-tight max-w-[465px] lg:max-w-[417px] text-sm">WE BELIVE GRET COFFE STARTS WITH RESPECT-FOR THE FARMERS, THE PROCESS, AND THE PEOPE WE SERVE.</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="h-full w-full overflow-hidden">
              <img 
                className="h-full w-full object-center object-cover"
                src="https://framerusercontent.com/images/4ZBCvdwGHzlmbgvX8QTipvzXV0.webp?scale-down-to=2048" alt="" />
            </div>
            <div className="h-full w-full overflow-hidden">
              <img 
                className="h-full w-full object-center object-cover"
                src="https://framerusercontent.com/images/M8ytwiVssy1AVLYBQGFUJCvnuC4.webp?scale-down-to=1024" alt="" />
            </div>
          </div>
        </section>

        <section className="pt-24 lg:pt-48 px-4 md:grid md:grid-cols-2">
          <div className="h-full w-full overflow-hidden">
            <img 
              className="h-full w-full object-center object-cover"
              src="https://framerusercontent.com/images/MsFcLjDeT71QJbIfpnSdE6D6Kcc.webp?scale-down-to=2048" alt="" />
          </div>
        </section>

        <section id="menu" className="pt-24 lg:pt-28 px-4 flex flex-col gap-8">
          <h2 className="uppercase text-gray">MENU</h2>

          <div className="md:grid md:grid-cols-[1fr_2fr]">
            <div></div>
            <ul className="flex flex-col gap-16 leading-none">
              { menu.map((item) => {
                return (
                  <li key={item.id} className="flex flex-col gap-6">
                    <h4 className="text-5xl font-semibold uppercase">{item.header}</h4>

                    <ul className="flex flex-col font-clash font-medium">
                      { item.items.map(i => {
                        return (
                          <li key={i.id} className="py-2 grid grid-cols-2">
                            <div className="flex justify-between">
                              <span>{i.title}</span>
                              <span className="text-gray">{i.kcal} KCAL</span>
                            </div>
                            <div className="flex justify-end">{i.price} $</div>
                          </li>
                        )
                      }) }
                    </ul>
                  </li>
                )
              }) }
            </ul>
          </div>
        </section>

        <section className="pt-24 lg:pt-48 px-4 relative">
          <div className="h-full w-full overflow-hidden">
            <img src="https://framerusercontent.com/images/LgtvopOH2SvkPtjIB7RVcztxb8.png" alt="" />
          </div>

          <div className="absolute top-0 left-0 pt-24 lg:pt-48 h-full w-full grid place-items-center">
            <h2 className="text-center text-white px-5 uppercase text-5xl md:text-[65px] lg:text-[78px]">Where Coffee <br /> Meets Craft.</h2>
          </div>
        </section>

        <section id="bean's" className="pt-24 lg:pt-28 px-4 flex flex-col gap-8">
          <h2 className="uppercase text-gray">BEAN'S</h2>

          <BeanOverview />
        </section>

        <section id="ideas" className="py-24 lg:py-28 px-4 flex flex-col gap-8">
          <h2 className="uppercase text-gray">IDEAS</h2>

          <div className="grid md:grid-cols-[2fr_3fr]">
            <div></div>

            <ul className="grid gap-6 md:grid-cols-2 md:gap-9">
              {articlesList.map(article => {
                return (
                  <li>
                    <Article {...article} />
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App