import React from 'react'
import { People } from '../api/api'
import { Box, Grid, Modal, Stack, Typography } from '@mui/material'
import { getGenderBg, isExist } from '../utils'

import ufo from '../resources/ufo.png'
import female from '../resources/female.png'
import male from '../resources/male-icon.png'
import { Tag } from './Tag'
import CloseIcon from '@mui/icons-material/Close'
import Parameter from './Parameter'
import { fontFamilyKarla } from '../const'

interface Props {
  isOpen: boolean
  people?: People | null
  handleClose: () => void
}

const modalStyle = {
  display: 'flex',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  minHeight: 380,
  maxWidth: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  maxHeight: 'calc(100% - 24px)',
  overflowY: 'auto',
}

const getGenderSrc = (gender: string | undefined) => {
  if (gender === 'male') {
    return male
  }
  if (gender === 'female') {
    return female
  }
  return ufo
}

const ParameterBox = ({ value, name }: { value: string | undefined; name: string }) => {
  return (
    <Box py={1} px={3} sx={{ borderRadius: '8px', background: '#FDFDFD' }}>
      <Parameter value={value} name={name} />
    </Box>
  )
}

const ModalContent = ({ people, handleClose }: { people: People; handleClose: () => void }) => {
  const { name, gender, birth_year, hair_color, skin_color, eye_color, height, mass } = people
  const showBox = isExist(hair_color) || isExist(skin_color) || isExist(eye_color)

  return (
    <Box sx={modalStyle}>
      <Grid container flexGrow={1}>
        <Grid
          item
          xs={5}
          position="relative"
          sx={{ background: '#1F2A63' }}
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img className="image" src={getGenderSrc(gender)} alt="Profile Icon" />

          {(isExist(gender) || isExist(birth_year)) && (
            <Stack
              direction="row"
              spacing={1.5}
              position="absolute"
              sx={{ bottom: '12px', right: '12px' }}
            >
              {isExist(gender) && <Tag style={{ background: getGenderBg(gender) }}>{gender}</Tag>}
              {isExist(birth_year) && <Tag style={{ background: '#07D6F2' }}>{birth_year}</Tag>}
            </Stack>
          )}
        </Grid>
        <Grid
          item
          xs={7}
          height="100%"
          display="flex"
          position="relative"
          sx={{ background: 'linear-gradient(180deg, #17002F 42.19%, #1F2A63 100%);' }}
        >
          <Box position="absolute" top={8} right={8}>
            <CloseIcon
              sx={{ fontSize: '2.5rem', color: '#fff', cursor: 'pointer' }}
              onClick={handleClose}
            />
          </Box>
          <Stack justifyContent="space-between" flexGrow={1} pt={2} px={2} pb={3}>
            <Stack spacing={2} color="#fff">
              <Typography fontFamily={fontFamilyKarla} fontSize="36px" fontWeight={700}>
                {name}
              </Typography>
              {showBox && (
                <Box py={1} px={3} sx={{ borderRadius: '8px', background: '#FDFDFD' }} color="#000">
                  {isExist(hair_color) && (
                    <Typography fontFamily={fontFamilyKarla}>hair color: {hair_color}</Typography>
                  )}
                  {isExist(skin_color) && (
                    <Typography fontFamily={fontFamilyKarla}>skin color: {skin_color}</Typography>
                  )}
                  {isExist(eye_color) && (
                    <Typography fontFamily={fontFamilyKarla}>eye color: {eye_color}</Typography>
                  )}
                </Box>
              )}
            </Stack>
            <Stack direction="row" spacing={1.5}>
              {isExist(height) && <ParameterBox value={height} name="height" />}
              {isExist(mass) && <ParameterBox value={mass} name="mass" />}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

const CardModal = (props: Props) => {
  const { isOpen, people, handleClose } = props
  return (
    <Modal open={isOpen} onClose={handleClose}>
      {people ? <ModalContent people={people} handleClose={handleClose} /> : <Box></Box>}
    </Modal>
  )
}

export default CardModal
