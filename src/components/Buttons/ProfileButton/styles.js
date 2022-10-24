import { devices } from "@/utils/devices"
import styled from "styled-components"


export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 100px;
  transition: all 0.2s ease-in-out;
  background-color: #FFFFFF;
  cursor: pointer;
  max-width: 200px;

  :hover {
    filter: brightness(0.9);
  }
`

export const PhotoContainer = styled.span`
  min-width: 44px;
  height: 44px;

  background-color: #790AE9;

  border-radius: 100%;
  border: 1px solid #790AE9;
`

export const Name = styled.h4`
  display: none;
  font-size: 18px;
  
  @media ${devices.mobileL} {
    display: initial;
  }
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid #790AE9;
`
