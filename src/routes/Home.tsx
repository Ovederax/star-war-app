import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { Button } from '../components/Button'
import yoda from '../resources/yoda.png'
import PageContainer from '../components/PageContainer'
import { useNavigate } from 'react-router-dom'
import { fontFamilyKarla, routes } from '../const'

const homeBG = 'linear-gradient(to bottom, #291f63, #17002f)'

const Home = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(routes.characters)
  }

  return (
    <PageContainer color="#FFF" background={homeBG}>
      <Grid
        container
        maxWidth={1200}
        width="0 auto"
        pt={{
          xs: 4,
          sm: 8,
          md: 12,
        }}
        columnSpacing={2}
        rowSpacing={6}
      >
        <Grid item xs={12} sm={12} md={7} lg={6}>
          <Stack
            spacing={{
              xs: 4,
              sm: 6,
              md: 8,
            }}
            alignItems="flex-start"
          >
            <Typography
              fontSize="72px"
              lineHeight="84px"
              letterSpacing="4px"
              fontFamily={fontFamilyKarla}
              maxWidth="515px"
            >
              <b>Find</b> all your favorite <b>character</b>
            </Typography>
            <Typography
              fontSize="32px"
              lineHeight="37px"
              fontFamily={fontFamilyKarla}
              maxWidth="515px"
            >
              You can find out all the information about your favorite characters
            </Typography>
            <Button onClick={onClick}>See more...</Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={6}>
          <img className="image" src={yoda} alt="Yoda" />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Home
