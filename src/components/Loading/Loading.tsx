import { Backdrop, CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
