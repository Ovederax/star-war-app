import axiosInstance, { AxiosResponse } from './axios'

export interface People {
  name: string
  height?: string
  mass?: string
  hair_color?: string
  skin_color?: string
  eye_color?: string
  birth_year?: string
  gender?: string
  homeworld: string
  films?: string[]
  species?: string[]
  vehicles?: string[]
  starships?: string[]
  created: string
  edited: string
  url: string
}

export interface PeoplesResult {
  count: number
  next: string
  previous: string | null
  results: People[]
}

interface GetAllParams {
  page?: number
  format?: 'wookiee'
}

type GetAllResponse = AxiosResponse<PeoplesResult>

export const getPeoplesData = async (params: GetAllParams): Promise<GetAllResponse> => {
  return axiosInstance.get<GetAllParams, GetAllResponse>('/people/', {
    params,
  })
}

interface GetParams {
  id?: number
}

type GetResponse = AxiosResponse<People>

export const getPeopleData = async (params: GetParams): Promise<GetResponse> => {
  return axiosInstance.get<GetParams, GetResponse>('/people/', {
    params,
  })
}
