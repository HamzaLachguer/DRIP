const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 pt-14 md:pt-64 pb-6 flex flex-col gap-[108px]">
      <div className="flex flex-col gap-[108px]">
        <div className="flex flex-col gap-6">
          <h2 className="uppercase text-5xl md:text-[65px] lg:text-[78px]">Where Coffee Meets <br /> Craft.</h2>

          <nav className="font-clash flex flex-col gap-2.5 font-medium leading-tight">
            <a href="" className="uppercase text-gray hover:underline">Pinterest</a>
            <a href="" className="uppercase text-gray hover:underline">Instagram</a>
          </nav>
        </div>

        <div className="grid md:grid-cols-2 items-start">
          <div className="flex flex-col gap-12 leading-tight">
            <p className="text-gray text-xs">Berenstraat 0, 107 GH Berlin</p>

            <div className="flex flex-col gap-2">
              <p className="text-xs">Everyday</p>
              <h4 className="text-[32px] font-bold">10:00 - 19:00</h4>
            </div>
          </div>

          <nav className="font-clash text-gray flex flex-col gap-2 leading-tight font-bold uppercase">
            <a href="#ideas" className="hover:underline">ideas</a>
            <a href="#story" className="hover:underline">story</a>
            <a href="#bean's" className="hover:underline">bean's</a>
            <a href="#menu" className="hover:underline">menu</a>
          </nav>
        </div>
      </div>

      <p className="text-xs text-gray">Copyright 2025©</p>
    </footer>
  )
}


export default Footer;