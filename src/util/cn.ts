import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export function get(
  object: Record<string, string>,
  key: string,
  label: string,
) {
  if (!Object.keys(object)?.includes(key)) {
    throw Error(
      `Invalid ${label} ${key}. Available are: ${Object.keys(object)}`,
    )
  }

  return object[key as keyof typeof object]
}
