import type { ActionFunctionArgs } from 'react-router-dom'
import { fetcher } from './fetcher'

export const characterLoader = async ({ params }: ActionFunctionArgs) => {
  const res = await fetcher(
    `https://gateway.marvel.com/v1/public/characters/${params.characterId}`,
  )

  const { data } = await res.json()

  return data
}
