/* eslint-disable prettier/prettier */
import axios from 'axios'

// already installed in template
const instance = axios.create({
  baseURL: 'https://api.magicthegathering.io/v1/',
})

const useApi = () => {
  return { instance }
}

export default useApi
