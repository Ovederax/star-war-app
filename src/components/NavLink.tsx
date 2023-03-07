import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'

const NavLinkStyled = styled(Link)<{ showLine?: boolean }>`
  display: inline-block;
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 25px;
  margin-bottom: 15px;

  &:after {
    display: none;
    content: '';
    position: absolute;
    bottom: -15px;
    border-radius: 3px;
    left: 50%;
    right: -50%;
    transform: translateX(-50%);
    height: 3px;
    z-index: -1;
    background: #cfdab0;
  }

  ${({ showLine }) => {
    if (showLine) {
      return `
      &:after {
        display: block;
        @keyframes show {
          0% {
            opacity: 0;
            width: 0;
          }
          100% {
            opacity: 1;
            width: calc(100% - 10px);
          }
        }
        animation: show .2s linear;
      }
    `
    }
    return ''
  }}
`

interface Props {
  to: string
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const location = useLocation()
  const showLine = props.to === location.pathname

  return (
    <NavLinkStyled to={props.to} showLine={showLine}>
      {props.children}
    </NavLinkStyled>
  )
}

export default React.memo(NavLink)
