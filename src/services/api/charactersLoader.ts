import type { ActionFunctionArgs } from 'react-router-dom'
import { fetcher } from './fetcher'

export const charactersLoader = async ({ request }: ActionFunctionArgs) => {
  const url = new URL(request.url)
  const currentPage = Number(url.searchParams.get('page')) || 1
  const name = url.searchParams.get('name') || null

  const offset = (currentPage - 1) * 20 || 0

  const res = fetcher(
    'https://gateway.marvel.com/v1/public/characters',
    Object.assign({ limit: 20, offset }, name && { name }),
  )

  return res
}
