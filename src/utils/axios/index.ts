// import { RefreshTokenMutation } from '@/adapter/operators/mutations/refreshToken/refreshToken'
import Axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { config } from '@/configs'
import { helper } from '../helpers'

// const refreshTokenQuery = new RefreshTokenMutation()

const authRequestInterceptor = (axiosConfig: InternalAxiosRequestConfig) => {
  const token = helper.getLocalStorage('token')

  // For image not use 'application/json'
  // axiosConfig.headers['Content-Type'] =
  //   axiosConfig.headers['Content-Type'] ?? 'application/json'

  if (token) axiosConfig.headers.Authorization = `Bearer ${token}`

  return axiosConfig
}

const authResponseInterceptor = (response: AxiosResponse) => {
  return response
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authResponseErrorInterceptor = async (error: any) => {
  const originalRequest = error.config

  // If the error is 401 Unauthorized and the request has not been retried yet
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true

    try {
    // refresh token
      return serviceApi(originalRequest)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (refreshError: any) {
      console.log('refreshError', refreshError);
      helper.removeLocalStorage('token')
      window.location.href = '/login'
      // throw refreshError
    }
  }

  return Promise.reject(error)
}

const serviceApi = Axios.create({
  baseURL: config.apiEndpoint,
})

serviceApi.interceptors.request.use(authRequestInterceptor)
serviceApi.interceptors.response.use(
  authResponseInterceptor,
  authResponseErrorInterceptor,
)

export default serviceApi


export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await serviceApi.get(url, { ...config });

  return res.data;
};

export const fetcherPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await serviceApi.post(url, { ...config });

  return res.data;
};

export const optionsOnceTime = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false
};
