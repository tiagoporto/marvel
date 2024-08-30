import { Fragment } from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Character } from '../../schema/character.schema'
import { Loading } from '../../components/Loading'
import { ListItem } from './components/ListItem'

export const ListCharacter = () => {
  const { t } = useTranslation()
  const { results } = useLoaderData() as { results: Character[] }

  const { state } = useNavigation()

  return (
    <>
      {state === 'loading' ? (
        <Loading />
      ) : (
        results?.map((c) => {
          return (
            <Card key={c.id}>
              <CardHeader
                title={c?.name}
                avatar={
                  <Avatar
                    variant="square"
                    alt={c?.name}
                    src={`${c?.thumbnail?.path}.${c?.thumbnail?.extension}`}
                    sx={{ width: 56, height: 56 }}
                  />
                }
              />

              <CardContent>
                <Typography variant="body2">{c?.description}</Typography>

                <ListItem title={t('comics')} id="comics-panel">
                  <ul>
                    {c.comics?.items?.map((s, i) => (
                      <li key={`comic-${i}`}>{s.name}</li>
                    ))}
                  </ul>
                </ListItem>

                <ListItem title={t('series')} id="series-panel">
                  <ul>
                    {c.series?.items?.map((s, i) => (
                      <li key={`serie-${i}`}>{s.name}</li>
                    ))}
                  </ul>
                </ListItem>

                <ListItem title={t('stories')} id="stories-panel">
                  <ul>
                    {c.stories?.items?.map((s, i) => (
                      <li key={`story-${i}`}>{s.name}</li>
                    ))}
                  </ul>
                </ListItem>
              </CardContent>
            </Card>
          )
        })
      )}
    </>
  )
}
