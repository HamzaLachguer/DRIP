import Clock from "./Clock"

const Header = () => {
  
  return (
    <header className="text-sm font-medium leading-none p-4 grid grid-cols-2 bg-white border-b border-[#ededed] fixed z-50 top-0 left-0 w-full">
      <div className="flex flex-col-reverse items-start gap-4 md:grid md:grid-cols-2 md:items-center md:gap-0">
        <Clock />

        <a className="h-fit w-fit" href="/index.html">
          <img className="h-3.5" src="./public/logo.png" alt="DRIP logo mark" />
        </a>
      </div>

      <div className="flex justify-end items-center">
        <a href="#menu" className="uppercase cursor-pointer">menu</a>
      </div>
    </header>
  )
}

export default Header