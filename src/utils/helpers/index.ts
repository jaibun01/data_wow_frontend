import BrowserPersistence from "./browserPersistence";

const browserPersistence = new BrowserPersistence()

export const helper = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setLocalStorage({ key, value }: { key: string; value: any }) {
      browserPersistence.setItem(key, value)
    },
    getLocalStorage(key: string) {
      return browserPersistence.getItem(key)
    },
    removeLocalStorage(key: string) {
      return browserPersistence.removeItem(key)
    },
    getTokenFromLocal() {
      return browserPersistence.getItem('token')
    },
    clearLocalStorage() {
      localStorage.clear()
    }
}
