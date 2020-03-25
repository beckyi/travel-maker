import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
  position: absolute;
  width: 100%;
  height: 37px;
  background: #282c34;
`

const LogoTitle = styled.span`
  position: absolute;
  width: 128px;
  height: 37px;
  left: 43px;
  top: 7px;

  font-family: Signika;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;

  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const Avatar = styled.span`
  position: absolute;
  width: 26px;
  height: 26px;
  left: 1044px;
  top: 6px;

  background: white; /*url(../../logo.svg);*/
  background-blend-mode: normal;
`

const User = styled.span`
  position: relative;
  float: right;
  right: 15px;
  top: 10px;

  font-family: Short Stack;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;

  color: #ffffff;
`

const headUL = styled.ul`float: right;`

const headLI = styled.li`float: left;`

const Header = () => {
  return (
    <Head>
      <headUL>
        <headLI>
          <LogoTitle>TRAVLE MAKER</LogoTitle>
        </headLI>
        LOGIN
        <headLI>
          <Avatar />
        </headLI>
        <headLI>
          <User>jaeny</User>
        </headLI>
      </headUL>
    </Head>
  )
}

export default Header
