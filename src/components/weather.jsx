
export default function Weathercomponent ({ weatherEntry, time, dateFormated }) {
  return (
    <div className='flex justify-center lg:max-w-2xl mx-4 xl:max-w-none items-center lg:mt-[58vh]'>
      <p className='xl:mx-4 mx-2 text-6xl xl:text-8xl m-0'>{weatherEntry.current.temp_c}&#176;</p>
      <div className='xl:mx-4 mx-2 my-10'>
        <p className='m-0 lg:text-4xl overflow-hidden truncate max-w-[18rem] hover:text-clip text-base'>{weatherEntry.location.name}</p>
        <p className='lg:text-lg'> {weatherEntry.location.country} </p>
        <small>
          <span className='text-sm'> {time} </span>
          -
          <span className='text-sm'> {dateFormated} </span>
        </small>
      </div>
      <div className='xl:mx-4 mx-2'>
        <img className='block' src={weatherEntry.current.condition.icon} width={64} height={64} alt='' />
        <span className='text-sm'>{weatherEntry.current.condition.text}</span>
      </div>
    </div>
  )
}
