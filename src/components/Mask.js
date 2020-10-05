import React from 'react'
import styled from 'styled-components'

const Mask = () => <Item />

const Item = styled.div`
  width: 100%;
  height: 400px;
  background-image: linear-gradient(to bottom, #d3d7d6, #ffffff);
  pointer-events: none;
  position: absolute;
  top: 0;
`
export default Mask
