import { Dispatch, MutableRefObject, RefObject, SetStateAction, useEffect, useState } from "react"

export type State<T> = [T, Dispatch<SetStateAction<T>>]
export type Ref<T> = ((x: T | null) => void) | RefObject<T> | null

export interface Openable {
  open: () => void
  close: () => void
}

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