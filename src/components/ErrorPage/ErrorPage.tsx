import { Button, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const ErrorPage = () => {
  const { t } = useTranslation()
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="p" gutterBottom>
        {t('errorPage.message')}
      </Typography>

      <Button
        onClick={() => {
          window.location.reload()
        }}
        variant="contained"
      >
        {t('errorPage.buttonLabel')}
      </Button>
    </Container>
  )
}
