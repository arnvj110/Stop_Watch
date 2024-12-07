import React from 'react'

const LapHistory = ({ lap }) => {
  function timeConvert([h,m,s,mm]) {
    const timeh = String(h).padStart(2, 0);
    const timem = String(m%60).padStart(2, 0);
    const times = String(s%60).padStart(2, 0);
    const timemm = String(mm%100).padStart(2, 0);
    const timeDisplay = `${timeh}:${timem}:${times}:${timemm}`;
    return timeDisplay;
  }
  function convertTimetomm(e){
    return (e[0]*3600+e[1]*60+e[2])*100+e[3];
  }
  function convertmmtoTime(l){
    let mm=l%100;
    let s=Math.floor(l/100);
    let m=Math.floor(s/60);
    let h=Math.floor(m/60);
    return [h,m,s,mm];
  }
  function calculateLapTime(e,i){
    
    if(i==0) return e;
    let lapTime=convertTimetomm(e)-convertTimetomm(lap[i-1]);
    return convertmmtoTime(lapTime);
  }
  
  return (
    <div className='bg-white mt-[100px] flex flex-col justify-center align-center m-auto shadow-xl rounded-xl p-5 w-[60%]'>
      <h1 className={`flex font-bold justify-between ${lap.length==0?'':'border-b-2 border-solid border-gray-400'}`}>
        <span>Laps</span>
        <span>Time</span>
        <span>Total Time</span>
      </h1>

      {
        lap.map((e, i) => {
          let lapcount=i+1;
          let laptime=calculateLapTime(e,i);
          let totaltime=e;
          let a=timeConvert(e);
          
          return <div key={i} className='bg-bg4 flex justify-between p-2 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer active:scale-100'>
            <span className='w-10 text-center'>{lapcount}</span>
            <span>{timeConvert(laptime)}</span>
            <span>{timeConvert(totaltime)}</span>
            </div>
        })
      }
    </div>
  )
}

export default LapHistory
