import Cookies from 'universal-cookie'

const cookies = new Cookies(null, { path: '/' })

export const setCookie = (key: string, value: string, maxAge?: number) => {
  if (typeof window !== 'undefined') {
    const options = maxAge
      ? {
          maxAge,
          path: '/',
        }
      : {
          path: '/',
        }
    cookies.set(key, value, options)
  }
}

export const removeCookie = (key: string) => {
  if (typeof window !== 'undefined') {
    cookies.remove(key)
  }
}

export const getCookie = (key: string) => {
  return cookies.get(key)
}
