import { useEffect, useState } from "react"

const Clock = () => {
    const [secRotation, setSecRotation] = useState(0)
    const [minRotation, setMinRotation] = useState(0)
    const [hourRotation, setHourRotation] = useState(0)

    useEffect(() =>{
        const interval = setInterval(()=>{
            setTime()
        }, 1000)
        return () => clearInterval(interval)
    })

    const setTime = () =>{
        const now = new Date()
        console.log(now.toLocaleTimeString())
        let seconds = now.getSeconds()
        let secDeg = 360/60*seconds
        setSecRotation(secDeg)

        let minutes = now.getMinutes();
        let minDeg = 360/60*minutes
        setMinRotation(minDeg + secDeg/60)

        let hour = now.getHours();
        let hourDeg = 360/12*hour
        setHourRotation(hourDeg + minDeg/12)
    }

    return (
        <div className="w-[30rem] h-[30rem] relative p-[2rem] border-solid border-[7px] border-[#050816] 
        shadow-inner-[4px_4px_10px_rgba(0,0,0,0.5)]
        shadow-inner-[-4px_-4px_10px_rgba(67,67,67,0.5)]
        shadow-[4px_4px_10px_rgba(255,192,203,0.3)]
        rounded-full mx-auto">
            <span className="absolute w-full py-1 bg-[#008d93] z-0
            bottom-1/2 left-0"
            ></span>
            <span className="rotate-90 absolute w-full py-1 bg-[#008d93] z-0
            bottom-[49%] left-0"
            ></span>
            <span className="rotate-30 absolute w-full py-1 bg-white z-0
            bottom-[49%] left-0"
            ></span>
            <span className="rotate-60 absolute w-full py-1 bg-white z-0
            bottom-[49%] left-0"
            ></span>
            <span className="rotate-120 absolute w-full py-1 bg-white z-0
            bottom-[49%] left-0"
            ></span>
            <span className="rotate-150 absolute w-full py-1 bg-white z-0
            bottom-[49%] left-0"
            ></span>
            
            <div className=" 
            w-full h-full bg-[#050816] rounded-full relative align-center p-2">
                <span style={{transform:`rotate(${secRotation}deg)`}}
                className="origin-bottom absolute w-1 h-[45%] content-[''] m-auto bg-red-500 z-0
                bottom-1/2 left-1/2 ease-linear"
                ></span>
                <span style={{transform:`rotate(${hourRotation}deg)`}}  className="
                origin-bottom
                absolute w-1 h-[30%] m-auto bg-[#583d28] z-0
                bottom-1/2 left-1/2 ease-linear"
                ></span>
                <span style={{transform:`rotate(${minRotation}deg)`}} className="
                origin-bottom
                absolute w-1 h-[40%] m-auto bg-[#583d28] z-0
                bottom-1/2 left-1/2 ease-linear"
                ></span>
                <span className="absolute self-center w-5 h-5 rounded-full bg-white z-0
                bottom-[48%] left-[48%]"
                ></span>
            </div>
        </div>
    )
}

export default Clock