import type { ActionFunctionArgs } from 'react-router-dom'
import { fetcher } from './fetcher'

export const characterLoader = ({ params }: ActionFunctionArgs) => {
  const res = fetcher(
    `https://gateway.marvel.com/v1/public/characters/${params.characterId}`,
  )

  return res
}
