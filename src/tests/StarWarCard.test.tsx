import React from 'react'
import { render, screen } from '@testing-library/react'
import StarWarCard, { testIdBirthYear, testIdGender } from '../components/StarWarCard'
import { People } from '../api/api'

export const peopleWithTextContent: People = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
}

test('SHOULD render parameters', () => {
  const fn = jest.fn()
  const { asFragment } = render(<StarWarCard data={peopleWithTextContent} showModal={fn} />)

  const elements = [
    screen.getByText(peopleWithTextContent.height || ''),
    screen.getByText(peopleWithTextContent.mass || ''),
    screen.getByText(peopleWithTextContent.gender || ''),
    screen.getByText(peopleWithTextContent.birth_year || ''),
    screen.getByTestId(testIdGender),
    screen.getByTestId(testIdBirthYear),
  ]

  for (const it of elements) {
    expect(it).toBeInTheDocument()
  }
  expect(asFragment()).toMatchSnapshot()
})

export const peopleWithoutTextContent: People = {
  name: 'Luke Skywalker',
  height: 'n/a',
  mass: 'unknown',
  gender: 'n/a',
  homeworld: 'https://swapi.dev/api/planets/1/',
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
}

test('SHOULD NOT render parameters WHEN have not data', () => {
  const fn = jest.fn()
  const { asFragment } = render(<StarWarCard data={peopleWithoutTextContent} showModal={fn} />)

  const elements = [
    screen.queryByText('height'),
    screen.queryByText('mass'),
    screen.queryByTestId(testIdGender),
    screen.queryByTestId(testIdBirthYear),
  ]

  for (const it of elements) {
    expect(it).not.toBeInTheDocument()
  }
  expect(asFragment()).toMatchSnapshot()
})

test('SHOULD invoke showModal WHEN user click on card', () => {
  const fn = jest.fn()
  render(<StarWarCard data={peopleWithoutTextContent} showModal={fn} />)
  screen.getByText(peopleWithoutTextContent.name).click()
  expect(fn).toBeCalledTimes(1)
})
