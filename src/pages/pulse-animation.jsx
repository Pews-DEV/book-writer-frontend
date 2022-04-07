import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'

const Pulse = keyframes`
  0%{
    -webkit-text-stroke-width: 1.5px;
  }

  25%{
    -webkit-text-stroke-width: 2.5px;
  }

  50%{
    -webkit-text-stroke-width: 3.5px;
  }

  75%{
    -webkit-text-stroke-width: 2.5px;
  }

  100%{
    -webkit-text-stroke-width: 1.5px;
  }
`

const PulseAnimation = css`
  animation: ${Pulse} 500ms linear infinite;
`

const Card = styled.div`
  font-size: 3em;
  cursor: pointer;
  color: transparent;
  transform: rotate(90deg);

  background-image: ${(props) =>
    props.isLiked ? 'linear-gradient(to right, red 100%, red 100%)' : 'white'};
  -webkit-background-clip: text;
  -webkit-text-stroke-color: ${(props) => (props.isLiked ? 'red' : 'black')};
  -webkit-text-stroke-width: 1px;
  ${(props) => props.isLiked && PulseAnimation}
`

const Container = styled.div`
gap: 40px;
display: flex;
max - width: 100 %;
overflow - x: auto;
align - items: center;
-ms - overflow - style: none;
scrollbar - width: none;
  &:: -webkit - scrollbar {
  display: none;
}

  &: nth - child(0) {
  margin - left: 56px;
}
`

const Aa = () => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Container>
      <Card onClick={() => setIsLiked(!isLiked)} isLiked={isLiked}>
        ❥
      </Card>
    </Container>
  )
}

export default Aa
