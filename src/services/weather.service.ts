import axios from 'axios'
import type { IweatherData } from '../types'

const key: string = '77a4116fddmsh247406efc0bf65bp181c64jsna63179ead414'

export const getWeathers = async (city: string): Promise<IweatherData> => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }
  return await axios.request(options)
    .then((response) => {
      return response.data
    })
}
