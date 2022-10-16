import UseWeather from '../hooks/useWeather'
import PanelComponent from './panel'
import WeatherComponent from './weather'
export default function Home ({ paramlocation }) {
  const { weather, weatherCondition, time, timeOfDay, btnColor, dateFormated, setLocation } = UseWeather({ location: paramlocation })
  return (
    <div style={{ backgroundImage: `url(img/${timeOfDay}/${weatherCondition}blur.webp)` }} className={`duration-500 transform overflow-y-auto ease-in-out h-screen grid place-items-center bg-center ${!timeOfDay ? 'opacity-0' : 'opacity-100'} before:content-[""] before:absolute top-0 left-0 before:h-screen before:w-screen before:bg-black/30 bg-black `}>
      <div style={{ backgroundImage: `url(img/${timeOfDay}/${weatherCondition}.webp)` }} className={`duration-500 transform ease-in-out  lg:w-[90%] font-rubik m-0 lg:h-[90vh] lg:rounded-xl h-screen w-screen relative text-white bg-day-rainy bg-center bg-no-repeat bg-cover before:content-[""] before:absolute top-0 left-0 lg:before:rounded-xl before:h-screen before:w-screen lg:before:w-[100%] lg:before:h-[90vh] before:bg-black/30 ${!timeOfDay ? 'opacity-0' : 'opacity-100'}`}>
        <div className='lg:absolute top-0 left-0 w-[100%] z-0 h-[100%] lg:flex lg:justify-between lg:items-start lg:flex-col lg:pt-8 lg:px-4 xl:px-8 lg:pb-16 relative '>
          <p className='text-xl'>Weather</p>
          <WeatherComponent weatherEntry={weather} time={time} dateFormated={dateFormated} />
          <PanelComponent btnColor={btnColor} weatherEntry={weather} setLocation={setLocation} />
        </div>
      </div>
    </div>
  )
}
