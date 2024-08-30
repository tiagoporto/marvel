import { Fragment } from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import { ExpandMore } from '@mui/icons-material'

import { Character } from '../../schema/character.schema'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Loading } from '../../components/Loading/'

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
            <Card key={c.name}>
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

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>{t('comics')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {c.comics?.items?.map((s) => (
                      <Typography key={s.name}>{s.name}</Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>{t('series')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {c.series?.items?.map((s) => (
                      <Typography key={s.name}>{s.name}</Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>{t('stories')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {c.stories?.items?.map((s) => (
                      <Typography key={s.name}>{s.name}</Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          )
        })
      )}
    </>
  )
}
