import React from 'react'
import { Button } from '../components/Button'
import PageContainer from '../components/PageContainer'
import { useNavigate } from 'react-router-dom'
import { routes } from '../const'

import teamRocket from '../resources/teamRocket.png'
import { Box, Stack, Typography } from '@mui/material'

const norFoundBG = '#17002F'

const NotFound = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(routes.home)
  }

  return (
    <PageContainer color="#FFF" background={norFoundBG} sx={{ alignItems: 'center' }}>
      <Stack spacing={8} flexGrow={1}>
        <Box
          display="flex"
          position="relative"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <Typography
            fontSize="min(50vw, 70vh)"
            lineHeight="min(50vw, 70vh)"
            color="rgba(255, 255, 255, 0.5)"
          >
            404
          </Typography>
          <img
            className="image"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate3d(-50%, -50%, 0)',
              maxHeight: '90%',
              maxWidth: '50%',
            }}
            src={teamRocket}
            alt="404 error"
          />
        </Box>
        <Stack alignItems="center">
          <Button btnColor="green" onClick={onClick}>
            Return
          </Button>
        </Stack>
      </Stack>
    </PageContainer>
  )
}

export default NotFound
