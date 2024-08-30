import { createHashRouter, redirect } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
import { Root } from './pages/Root'
import { lazy } from 'react'
import { charactersLoader } from './services/api/charactersLoader'
import { characterLoader } from './services/api/characterLoader'

const ListCharacters = lazy(() => import('./pages/ListCharacters'))
const ListCharacter = lazy(() => import('./pages/ListCharacter'))

export const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ListCharacters />,
        loader: charactersLoader,
      },
      {
        path: 'character/:characterId',
        element: <ListCharacter />,
        loader: characterLoader,
      },
    ],
  },
  {
    path: '*',
    loader: () => {
      return redirect('/')
    },
  },
])
