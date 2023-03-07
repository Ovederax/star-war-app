import styled from '@emotion/styled'

interface Props {
  btnColor?: 'yellow' | 'green' | string
}

const colorShadeB = ({ btnColor }: Props) => (btnColor === 'green' ? '#73D677' : '#FFC107')
const colorShadeC = ({ btnColor }: Props) => (btnColor === 'green' ? '#5EAF62' : '#D19E06')
const colorShadeE = ({ btnColor }: Props) => (btnColor === 'green' ? '#70c973' : '#E9B310')

export const Button = styled('button')<Props>`
  min-width: 230px;
  min-height: 56px;
  font-weight: bold;
  font-size: 24px;

  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  text-decoration: none;
  color: #000;
  font-family: inherit;

  margin: 6px 3px;
  padding: 3px 6px;
  border-width: 0;
  border-radius: 9px;
  background: ${colorShadeB};
  transform-style: preserve-3d;
  transition: all 0.2s linear;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colorShadeC};
    border-radius: inherit;
    transform: translate3d(0, 9px, -1em);
    transition: all 0.2s linear;
  }

  &:hover,
  &:active {
    background: ${colorShadeE};
  }

  &:active {
    transform: translate(0em, 7px);
  }

  &:active::before {
    transform: translate3d(0, 0, -1em);
  }
`
