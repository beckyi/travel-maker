import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../Header'

const Main = styled.div`
  margin: 50px 20px;
  transition: margin .25s;
`

class MainBoard extends Component {
  render () {
    return <>
      <Header />
      <Main>TEST 123 !!!</Main>
    </>
  }
}

export default MainBoard
