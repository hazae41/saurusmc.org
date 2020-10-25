import { useCallback, useEffect, useState } from "react"

export interface TyperOptions {
  delay?: number,
}

export function useTyper(text: string, options: TyperOptions = {}) {
  const delay = options.delay ?? 100

  const [times, setTimes] = useState(0)
  const [input, setInput] = useState("")

  const f = useCallback(async () => {
    if (input.length === text.length) {
      if (times === 10) {
        setTimes(0)
        setInput("")
      } else {
        setTimes(times + 1)
      }
    } else {
      const i = input.length
      setInput(input + text[i])
    }
  }, [input, times])

  useEffect(() => {
    const t = setTimeout(f, delay)
    return () => clearTimeout(t)
  }, [f])

  return input
}