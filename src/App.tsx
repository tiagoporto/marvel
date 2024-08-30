import { RouterProvider } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ErrorBoundary } from './components/ErrorBoundary'
import { router } from './router'

export const App = () => {
  return (
    <>
      <CssBaseline />

      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  )
}
