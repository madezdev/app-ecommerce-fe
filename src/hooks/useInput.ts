import { useState } from 'react'

type Validator = (_value: string) => string | null

export const useInput = (initialValue: string = '', validator?: Validator) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState<string | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)

    if (validator) {
      setError(validator(newValue))
    }
  }

  const reset = () => {
    setValue(initialValue)
    setError(null)
  }

  return {
    value,
    error,
    onChange,
    reset
  }
}