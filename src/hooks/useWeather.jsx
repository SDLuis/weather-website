import { useState, useEffect } from 'react'
import { getWeathers } from '../services/weather.service'

export default function UseWeather ({ location }) {
  const [weather, setWeather] = useState(location)
  const [Location, setLocation] = useState(weather.location.name)

  useEffect(() => {
    getWeathers(Location).then((response) => {
      setWeather(response)
    })
  }, [Location])

  const date = weather.location.localtime
  const y = parseInt(date.substr(0, 4))
  const m = parseInt(date.substr(5, 2))
  const d = parseInt(date.substr(8, 2))
  const time = date.substr(11)
  const dateFormated = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`

  const timeOfDay = !weather.current.is_day ? 'night' : 'day'
  const btnColor = !weather.current.is_day ? '#181e27' : '#fa6d1b'

  function dayOfTheWeek (day, month, year) {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    return weekday[new Date(`${month} ${day},${year}`).getDay()]
  }

  const code = weather.current.condition.code
  const cloudy = [1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282]
  const rainy = [1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204, 1207, 1240, 1243, 1246, 1249, 1252]

  let weatherCondition
  if (code === 1000) {
    weatherCondition = 'clear'
  } else if (cloudy.includes(code)) {
    weatherCondition = 'cloudy'
  } else if (rainy.includes(code)) {
    weatherCondition = 'rainy'
  } else {
    weatherCondition = 'snowy'
  }

  return { weatherCondition, weather, time, timeOfDay, dateFormated, btnColor, Location, setLocation }
}
