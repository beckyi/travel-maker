import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import immer from 'immer'
import styled from 'styled-components'
import door from '../../styles/svg/door.svg'

const WrapBackGround = styled.section`
  margin: 0px;
  padding: 0px;
  background: #34558b;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

const SquareTitle = styled.section`
  position: relative;
  width: 525px;
  height: 525px;
  margin: auto;
  border: 15px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
`

const LogoTitle = styled.div`
  position: relative;
  /*width: 450px;*/
  /*height: 200px;*/
  margin: 198px auto;
  font-family: Signika;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 99px;
  text-align: center;
  /*letter-spacing: 3px;*/
  color: #ffffff;
  text-shadow: 0px 0px 14px rgba(0, 0, 0, 0.75);
`

const SVGICON = styled.div`
  position: absolute;
  right: 10px;
  top: 9px;
  &:hover {
    cursor: pointer;
  }
`

const Landing = () => {
  const [steps, setSteps] = useState(0)

  let handleOnClick = (e, a) => {
    console.log(a, 'handleOnClick ? >', e, steps)
    debugger
    setSteps(steps => steps + 1)
    return false // stop both caturing and bubling (preventDefault, stopPropagation)
  }

  return (
    <WrapBackGround>
      <SVGICON onClick={handleOnClick}>
        <Link to='/main' />
        <svg
          width='30px'
          height='35px'
          viewBox='0 0 43 43'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 12.3745V37.4578C0 37.933 0.188765 38.3887 0.524767 38.7247C0.86077 39.0607 1.31649 39.2495 1.79167 39.2495H7.16667V35.6662H3.58333V14.1662H7.16667V10.5828H1.79167C1.31649 10.5828 0.86077 10.7716 0.524767 11.1076C0.188765 11.4436 0 11.8993 0 12.3745ZM25.5169 10.6366L11.1836 7.05326C10.9195 6.98739 10.6439 6.98256 10.3777 7.0391C10.1115 7.09565 9.86168 7.2121 9.64719 7.37962C9.4327 7.54713 9.2592 7.76131 9.13984 8.00589C9.02048 8.25047 8.95841 8.51902 8.95833 8.79117V41.0412C8.95771 41.3135 9.01932 41.5825 9.13847 41.8274C9.25761 42.0724 9.43114 42.2868 9.64581 42.4545C9.86048 42.6221 10.1106 42.7385 10.3771 42.7948C10.6436 42.8511 10.9195 42.8457 11.1836 42.7791L25.5169 39.1958C25.9047 39.099 26.249 38.8754 26.4951 38.5605C26.7412 38.2456 26.8749 37.8575 26.875 37.4578V12.3745C26.8749 11.9749 26.7412 11.5867 26.4951 11.2718C26.249 10.9569 25.9047 10.7333 25.5169 10.6366ZM17.9167 25.253C17.896 25.7143 17.6982 26.1499 17.3645 26.469C17.0308 26.7882 16.5868 26.9663 16.125 26.9663C15.6632 26.9663 15.2192 26.7882 14.8855 26.469C14.5517 26.1499 14.354 25.7143 14.3333 25.253V24.5775C14.3336 24.1024 14.5226 23.6467 14.8587 23.3109C15.1949 22.9751 15.6507 22.7865 16.1259 22.7868C16.6011 22.787 17.0567 22.976 17.3925 23.3122C17.7284 23.6483 17.9169 24.1042 17.9167 24.5793V25.253Z'
            fill='white'
          />
        </svg>
      </SVGICON>
      <SquareTitle>
        <LogoTitle>Travel Maker</LogoTitle>
      </SquareTitle>
    </WrapBackGround>
  )
}

export default Landing
