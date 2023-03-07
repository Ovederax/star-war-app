export const isExist = (value?: string) => {
  return value && value !== 'n/a' && value !== 'unknown'
}

export const getGenderBg = (gender: string | undefined) => {
  if (gender === 'male') {
    return '#73D677'
  }
  if (gender === 'female') {
    return '#C956FF'
  }
  return '#F5DB13'
}
