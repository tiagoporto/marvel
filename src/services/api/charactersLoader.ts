import type { ActionFunctionArgs } from 'react-router-dom'
import { fetcher } from './fetcher'

export const charactersLoader = ({ request }: ActionFunctionArgs) => {
  const url = new URL(request.url)
  const currentPage = Number(url.searchParams.get('page')) || 1

  const offset = (currentPage - 1) * 20 || 0

  const res = fetcher('https://gateway.marvel.com/v1/public/characters', {
    limit: 20,
    offset,
  })

  return res
}
