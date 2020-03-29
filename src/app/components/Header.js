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

const Avatar = styled.div`
  display: inline-block;
  float: left;
  margin: 5px 0px;
  width: 26px;
  height: 26px;
  background: white; /*url(../../logo.svg);*/
  background-blend-mode: normal;
`

const User = styled.div`
  float: left;
  display: inline-block;
  margin: 11px 10px;
  font-size: 13px;
  font-family: Short Stack;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  color: #ffffff;
`

const Jong = styled.span`
  float: left;
  display: inline-block;
  margin: 8px 10px;
  overflow: hidden;
  background: url(https://static.wehago.com/imgs/common/sp_gnb.png) 0 0
    no-repeat;
  line-height: 100em;
  display: inline-block;
  vertical-align: top;
  width: 20px;
  height: 20px;
  background-position: -60px 0;
`
const ulHead = styled.ul`float: right;`

const liHead = styled.li`float: left;`

const Header = () => {
  return (
    <Head>
      <LogoTitle>TRAVLE MAKER</LogoTitle>
      LOGIN
      <div style={{ float: 'right', marginRight: '10px' }}>
        <Jong>알림</Jong>
        <Avatar />
        <User>jaeny</User>
      </div>
    </Head>
  )
}

export default Header
