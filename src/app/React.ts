import { Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from "react"

export type State<T> = [T, Dispatch<SetStateAction<T>>]
export type Ref<T> = ((x: T) => void) | MutableRefObject<T | null> | null

export function useStorage<T>(key: string, def: T): State<T> {
  const [state, setState] = useState(() => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) as T : def
  })

  useEffect(() => {
    const item = JSON.stringify(state)
    localStorage.setItem(key, item)
  }, [key, state])

  return [state, setState]
}