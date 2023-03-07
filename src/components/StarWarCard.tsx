import React from 'react'
import { Card, Stack, Typography } from '@mui/material'
import { People } from '../api/api'
import { getGenderBg, isExist } from '../utils'
import { Tag } from './Tag'
import Parameter from './Parameter'

interface Props {
  data: People
  showModal: (people: People) => void
}

const fontFamilyKarla = `'Karla', 'Roboto'`

export const testIdGender = 'card-gender-tag'
export const testIdBirthYear = 'card-birth-year-tag'

const StarWarCard = (props: Props) => {
  const { data, showModal } = props
  const { name, gender, birth_year, height, mass } = data

  const onShowModal = () => {
    showModal(data)
  }

  return (
    <Card
      sx={{ minWidth: 240, minHeight: '100%', cursor: 'pointer', background: '#F0F0F0' }}
      elevation={3}
      onClick={onShowModal}
    >
      <Stack spacing={1.5} pt={1} pb={1.5} px={3}>
        <Typography fontSize="18px" color="#212121" fontWeight="bold" fontFamily={fontFamilyKarla}>
          {name}
        </Typography>

        {(isExist(height) || isExist(mass)) && (
          <Stack direction="row" spacing={1.5}>
            {isExist(height) && <Parameter value={height} name="height" />}
            {isExist(mass) && <Parameter value={mass} name="mass" />}
          </Stack>
        )}

        {(isExist(gender) || isExist(birth_year)) && (
          <Stack direction="row" spacing={1.5}>
            {isExist(gender) && (
              <Tag data-testid={testIdGender} style={{ background: getGenderBg(gender) }}>
                {gender}
              </Tag>
            )}
            {isExist(birth_year) && (
              <Tag data-testid={testIdBirthYear} style={{ background: '#07D6F2' }}>
                {birth_year}
              </Tag>
            )}
          </Stack>
        )}
      </Stack>
    </Card>
  )
}

export default StarWarCard
