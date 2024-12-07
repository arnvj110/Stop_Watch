import React, { useEffect, useRef, useState } from 'react'

const Clock = ({ setLap }) => {
    const S = 99;
    const M = 59;
    const H = 59;
    const [mm, setMM] = useState(0);
    const [s, setS] = useState(0);
    const [m, setM] = useState(0);
    const [h, setH] = useState(0);
    const [showLap, setshowLap] = useState(false);
    let time = useRef(null);

    useEffect(() => {
        return () => clearInterval(time.current);
    }, []);
    function addtolap() {
        setLap(prev => [...prev, [h, m, s, mm]]);

    };
    function start() {
        setshowLap(true);
        time.current = setInterval(() => {
            setMM((mm) => {
                if (mm >= S) {
                    setS((s) => {
                        if (s >= M) {
                            setM((m) => {
                                if (m >= H) {
                                    setH((h) => h + 1);
                                    return 0;
                                }
                                return m + 1;
                            });
                            return 0;
                        }
                        return s + 1;
                    });
                    return 0;
                }
                return mm + 1;
            });
        }, 10);
    }
    function ruk() {
        clearInterval(time.current);
        time.current = null;
        setshowLap(false);
    }
    function reset() {
        ruk();
        setMM(0);
        setS(0);
        setM(0);
        setH(0);
        setshowLap(true);
        setLap([]);
    }

    const timeh = String(h).padStart(2, 0);
    const timem = String(m).padStart(2, 0);
    const times = String(s).padStart(2, 0);
    const timemm = String(mm).padStart(2, 0);
    const timeDisplay = `${timeh}:${timem}:${times}:${timemm}`;
    return (

        <div className='flex flex-col bg-white w-fit justify-center items-center m-auto mt-[100px] p-[60px] shadow-xl rounded-xl'>
            <h1 className='font-mono font-bold text-5xl pb-[40px]'>{timeDisplay}</h1>
            <div className='flex gap-4'>
                {time.current && <button className='p-3 pl-5 pr-5 rounded-xl transition-all active:scale-100 duration-300 ease-in-out hover:scale-105 bg-bg3 border border-blue-500' onClick={addtolap}>Lap</button>}
                {!time.current && <button className='p-3 pl-5 pr-5 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-100 bg-bg1 border border-blue-500' onClick={start}>Start</button>}



                <button className='p-3 pl-5 pr-5 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-100 bg-bg2 border border-blue-500' onClick={ruk}>Stop</button>

                <button className='p-3 pl-5 pr-5 rounded-xl transition-all active:scale-100 duration-300 ease-in-out hover:scale-105 bg-bg3 border border-blue-500' onClick={reset}>Reset</button>

            </div>

        </div>
    )
}

export default Clock
