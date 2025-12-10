import { useEffect, useState } from "react"

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval); 
  }, []);

  const fomatedTime = time.toLocaleTimeString("en-MA", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  })

  return (
    <div className="font-geist-mono">
      <span>MA </span><span>{ fomatedTime }</span>
    </div>
  )
}

export default Clock