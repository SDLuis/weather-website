import axios from 'axios'
import type { IweatherData } from '../types'

const key: string = '4d53f4bb7de04526b3e200729221310'

export const getWeathers = async (city: string): Promise<IweatherData> => {
  return await axios
    .get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
    .then((response) => {
      return response.data
    })
}
