import md5 from 'md5'

const PRIV_KEY = process.env.REACT_APP_PRIV_KEY
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

export const fetcher = (endpoint: string, params?: {}) => {
  const ts = new Date().getTime().toString()
  const hash = md5(ts + PRIV_KEY + PUBLIC_KEY).toString()

  const searcParams = new URLSearchParams({
    ts,
    apikey: PUBLIC_KEY,
    hash,
    ...params,
  })

  return fetch(`${endpoint}?${searcParams}`)
}
