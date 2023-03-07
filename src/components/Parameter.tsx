import React from 'react'
import styled from '@emotion/styled'
import { Stack, Typography } from '@mui/material'
import { fontFamilyKarla } from '../const'

const Circle = styled('div')`
  border: 3px solid #212121;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`

const Parameter = (props: { value: string | undefined; name: string }) => {
  const { value, name } = props

  return (
    <Stack spacing={0.5}>
      <Circle>{value}</Circle>
      <Typography fontFamily={fontFamilyKarla} color="#4B4B4B">
        {name}
      </Typography>
    </Stack>
  )
}

export default Parameter
