import {
  Form,
  Link,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Character } from '../../schema/character.schema'
import { Loading } from '../../components/Loading/'

export const ListCharacters = () => {
  const { t } = useTranslation()
  const { state } = useNavigation()
  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1', 10)

  // useLoaderData has unknown type does not accept generics
  const { results, total } = useLoaderData() as {
    results: Character[]
    total: number
  }

  return (
    <>
      <Box>
        <Form method="get">
          <TextField
            fullWidth
            id="name"
            name="name"
            label={t('searchLabel')}
            type="search"
            sx={{ mb: 2 }}
          />
        </Form>

        <Typography>{t('total', { count: total })}</Typography>
      </Box>
      {state === 'loading' ? (
        <Loading />
      ) : (
        <>
          <List>
            {results?.map((c) => (
              <ListItem key={c.id} alignItems="flex-start" disablePadding>
                <ListItemButton component={Link} to={`character/${c.id}`}>
                  <ListItemAvatar>
                    <Avatar
                      src={`${c.thumbnail?.path}.${c.thumbnail?.extension}`}
                      alt={c.name}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={c.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <Pagination
              page={page}
              count={Math.ceil(total / 20)}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`?page=${item.page}`}
                  {...item}
                />
              )}
            />
          </Stack>
        </>
      )}
    </>
  )
}
