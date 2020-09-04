export function lsGet(key: string) {
  if (typeof window === "undefined") return
  return localStorage.getItem(key)
}

export function lsSet(key: string, value: string) {
  if (typeof window === "undefined") return
  localStorage.setItem(key, value)
}
