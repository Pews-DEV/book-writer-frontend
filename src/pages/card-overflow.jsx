import styled from 'styled-components'
import { useState } from 'react'

const Card = styled.div`
  min-width: 178px;
  height: 278px;
  background: #eaeaea;
  display: block;
  cursor: grab;

  &:nth-child(1) {
    margin-left: 56px;
  }
`

const Container = styled.div`
  gap: 40px;
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  align-items: center;
  scroll-behavior: smooth;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const ScrolledCard = (props) => {
  const [posX, setPosX] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  function mouseMoveHandler(e) {
    if (isClicked) {
      const container = document.getElementById('container')

      const dx = e.clientX - posX

      container.scrollLeft = props.left - dx
    }
  }

  function mouseDowmHandler(e) {
    const container = document.getElementById('container')

    setPosX(e.clientX)

    props.setLeft(container.scrollLeft)
    setIsClicked(true)
  }

  return (
    <Card
      onMouseDown={mouseDowmHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={() => setIsClicked(false)}
    />
  )
}

const Aa = () => {
  const [left, setLeft] = useState(0)
  return (
    <Container
      id="container"
      onWheelCapture={(e) => {
        e.target.scrollLeft += e.deltaY
      }}
    >
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
      <ScrolledCard left={left} setLeft={setLeft} />
    </Container>
  )
}

export default Aa
