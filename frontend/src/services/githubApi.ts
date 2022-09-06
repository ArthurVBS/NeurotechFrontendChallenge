import axios from 'axios'

const BASE_URL = 'https://api.github.com/users/'

export const githubApi = axios.create({
  baseURL: BASE_URL,
})

export const getData = async (username: string) => {
  return await githubApi.get(username).catch(err => {
    return err.response
  })
}
