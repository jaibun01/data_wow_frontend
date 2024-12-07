class NamespacedLocalStorage {
  localStorage?: typeof window.localStorage
  key: string

  constructor(key: string, localStorage?: typeof window.localStorage) {
    this.localStorage = localStorage
    this.key = key
  }

  _makeKey(key: string) {
    return `${this.key}__${key}`
  }

  getItem(name: string) {
    return this.localStorage?.getItem(this._makeKey(name))
  }

  setItem(name: string, value: string) {
    return this.localStorage?.setItem(this._makeKey(name), value)
  }

  removeItem(name: string) {
    return this.localStorage?.removeItem(this._makeKey(name))
  }
}

export default class BrowserPersistence {
  static KEY = 'WOW_BROWSER_PERSISTENCE'
  storage: NamespacedLocalStorage

  constructor() {
    const localStorage =
      typeof window !== 'undefined' ? window.localStorage : undefined

    this.storage = new NamespacedLocalStorage(
      BrowserPersistence.KEY,
      localStorage,
    )
  }

  getItem(name: string) {
    const now = Date.now()
    const item = this.storage?.getItem(name)
    if (!item) {
      return undefined
    }
    const { value, ttl, timeStored } = JSON.parse(item)

    if (ttl && now - timeStored > ttl) {
      this.storage.removeItem(name)
      return undefined
    }
    return JSON.parse(value)
  }

  // Expiry Time(ttl)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItem(name: string, value: any, ttl: number = 1000 * 60 * 60 * 23) {
    const timeStored = Date.now()
    this.storage.setItem(
      name,
      JSON.stringify({
        value: JSON.stringify(value),
        timeStored,
        ttl,
      }),
    )
  }

  removeItem(name: string) {
    this.storage.removeItem(name)
  }
}
