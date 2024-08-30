import { Fragment } from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import { ExpandMore } from '@mui/icons-material'

import { Character } from '../../schema/character.schema'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

export const ListCharacter = () => {
  const { t } = useTranslation()
  const { results } = useLoaderData() as { results: Character[] }

  const { state } = useNavigation()

  return (
    <>
      {state === 'loading' ? (
        <Typography>Loading</Typography>
      ) : (
        results?.map((c) => {
          return (
            <Fragment key={c.name}>
              <Avatar
                variant="square"
                alt={c?.name}
                src={`${c?.thumbnail?.path}.${c?.thumbnail?.extension}`}
                sx={{ width: 56, height: 56 }}
              />
              <Typography component="h2">{c?.name}</Typography>
              <Typography>{c?.description}</Typography>

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
            </Fragment>
          )
        })
      )}
    </>
  )
}
