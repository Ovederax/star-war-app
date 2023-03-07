import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

const PageContainer = styled(Box)<{ background?: string }>`
  flex-grow: 1;
  ${({ background }) => (background ? `background: ${background};` : '')}
  padding: 0 24px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default PageContainer
