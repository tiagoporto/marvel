import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { PropsWithChildren } from 'react'

export type ListItemProps = PropsWithChildren<{
  id: string
  title: string
}>

export const ListItem = ({ id, title, children }: ListItemProps) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls={id} id={id}>
        <Typography>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}
