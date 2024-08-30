import { Outlet } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  ButtonGroup,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Root = () => {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language

  const changeLanguage = (lng: string) => () => {
    i18n.changeLanguage(lng)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" color="error">
        <Container>
          <Toolbar variant="dense" disableGutters>
            <Typography variant="button" component="h1" sx={{ flexGrow: 1 }}>
              {t('pageTitle')}
            </Typography>

            <ButtonGroup
              variant="text"
              size="small"
              aria-label="Basic button group"
              color="inherit"
              disableElevation
            >
              <Button
                onClick={changeLanguage('en')}
                disabled={currentLanguage === 'en'}
              >
                English
              </Button>

              <Button
                onClick={changeLanguage('pt-BR')}
                disabled={currentLanguage === 'pt-BR'}
              >
                Português
              </Button>
            </ButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </Box>
  )
}
