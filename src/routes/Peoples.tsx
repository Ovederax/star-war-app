import React, { useEffect, useState } from 'react'
import {
  Box,
  CircularProgress,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  SxProps,
  Typography,
} from '@mui/material'
import StarWarCard from '../components/StarWarCard'
import PageContainer from '../components/PageContainer'
import buttonBG from '../resources/round-btn-svg.svg'
import { getPeoplesData, People, PeoplesResult } from '../api/api'
import { SelectChangeEvent } from '@mui/material/Select/SelectInput'
import CardModal from '../components/CardModal'

const fontFamilyKarla = `'Karla', 'Roboto'`

type Language = 'en' | 'wookie'
enum Color {
  All = 'All',
  brown = 'brown',
  red = 'red',
  blue = 'blue',
  white = 'white',
}

const languageOption = ['en', 'wookie']
const colorOptions = ['All', 'brown', 'red', 'blue', 'white']

const peoplesBG = 'linear-gradient(to bottom, #fff, #f5f5f5f)'

const fabStyle = {
  position: 'fixed',
  bottom: 64,
  right: 64,
  width: '90px',
  height: '90px',
  background: '#F28F16',
  boxShadow: 'unset',
  '&:hover': {
    boxShadow: 'unset',
    background: '#dc8623',
  },
  '&:active': {
    boxShadow: 'unset',
    background: '#c77f3a',
  },
}

const fab = {
  color: 'primary' as const,
  sx: fabStyle as SxProps,

  label: 'Refresh',
}

const PAGE_SIZE = 10

const Peoples = () => {
  const [baseLoading, setBaseLoading] = useState(true)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<PeoplesResult | null>(null)
  const [language, setLanguage] = useState<Language>('en')
  const [color, setColor] = useState<Color>(Color.All)
  const [page, setPage] = React.useState(1)
  const [refreshCount, setRefreshCount] = useState(0)
  const [selectedPeople, setSelectedPeople] = useState<People | null>(null)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  const onRefresh = () => {
    setBaseLoading(true)
    setRefreshCount((previous: number) => previous + 1)
  }

  const allDataCount = data?.count || 0
  const pagesCount = Math.ceil(allDataCount / PAGE_SIZE)

  const onShowModal = (people: People) => {
    setSelectedPeople(people)
  }

  const handleClose = () => {
    setSelectedPeople(null)
  }

  useEffect(() => {
    const load = async () => {
      try {
        const format = language === 'en' ? undefined : 'wookiee'
        setLoading(true)
        const result = await getPeoplesData({ page, format })
        setData(result.data)
      } catch (e: unknown) {
        setData(null)
      } finally {
        setLoading(false)
        setBaseLoading(false)
      }
    }
    load()
  }, [page, language, refreshCount])

  if (baseLoading) {
    return (
      <PageContainer background={peoplesBG} sx={{ alignItems: 'center' }}>
        <CircularProgress size={72} />
      </PageContainer>
    )
  }

  const filteredItems =
    data?.results?.filter((it: People) => {
      if (color === Color.All) {
        return true
      }
      if (it.eye_color === color) {
        return true
      }
      return false
    }) || []

  const items = filteredItems.map((it: People) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={it.url}>
        <StarWarCard data={it} showModal={onShowModal} />
      </Grid>
    )
  })

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    const value = event.target.value
    setLanguage(value as Language)
  }

  const handleChangeColor = (event: SelectChangeEvent) => {
    const value = event.target.value
    setColor(value as Color)
  }

  return (
    <PageContainer background={peoplesBG}>
      <Box width="100%" maxWidth={1200} mt={3.5} display="flex" flexDirection="column">
        <Box display="flex" justifyContent="flex-end">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>language:</Typography>
            <FormControl fullWidth>
              <Select
                value={language}
                onChange={handleChangeLanguage}
                sx={{ minWidth: '100px' }}
                size="small"
              >
                <MenuItem value="en">en</MenuItem>
                <MenuItem value="wookie">wookie</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>
        <Box mt={3.5}>
          <Typography fontSize="2.1875rem" fontFamily={fontFamilyKarla} align="center">
            {allDataCount} <b>Peoples</b> for you to choose your favorite
          </Typography>
        </Box>
        <Stack mt={4} direction="row" spacing={2} alignItems="center">
          <Typography>color eye</Typography>
          <FormControl>
            <Select
              value={color}
              onChange={handleChangeColor}
              sx={{ minWidth: '120px' }}
              size="small"
            >
              {colorOptions.map(it => {
                return (
                  <MenuItem key={it} value={it}>
                    {it}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Stack>
        <Pagination
          sx={{ pt: 3 }}
          count={pagesCount}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
        {loading ? (
          <Box pt={12} display="flex" justifyContent="center">
            <CircularProgress size={72} />
          </Box>
        ) : (
          <Grid container spacing={4} mt={1}>
            {items}
            {items?.length === 0 ? <Grid item>Nothing to show</Grid> : null}
          </Grid>
        )}
      </Box>
      <Fab
        sx={fab.sx}
        aria-label={fab.label}
        disableRipple
        disableFocusRipple
        disableTouchRipple
        onClick={onRefresh}
      >
        <img className="image" src={buttonBG} alt="Refresh" />
      </Fab>
      <CardModal isOpen={!!selectedPeople} people={selectedPeople} handleClose={handleClose} />
    </PageContainer>
  )
}

export default Peoples
