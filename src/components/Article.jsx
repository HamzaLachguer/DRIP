const Article = ( {id, heading, desc, image} ) => {
  return (
    <article key={id} className="flex flex-col gap-2 group cursor-pointer">
      <div className="h-full w-full overflow-hidden aspect-square group-hover:opacity-75 transition-all duration-300">
        <img 
          className="h-full w-full object-center object-cover" 
          src={image} alt="" />
      </div>

      <div className="flex flex-col gap-2 leading-tight">
        <h3 className="text-sm">{heading}</h3>
        <p className="text-sm text-gray">{desc}</p>
      </div>
    </article>
  )
}

export default Article;