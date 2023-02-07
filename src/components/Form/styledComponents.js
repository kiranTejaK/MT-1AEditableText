import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const CardContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 32px;
`
export const Heading = styled.h1`
  font-size: 24px;
  color: #000;
  font-family: 'Roboto';
  margin-bottom: 28px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const InputField = styled.input`
  color: #323f4b;
  height: 32px;
  border: 2px solid #cbd2d9;
  border-radius: 6px;
  padding: 5px 10px;
  margin-right: 16px;
  font-size: 18px;
`
export const ParagraphText = styled.p`
  margin-right: 18px;
  color: #323f4b;
  font-weight: normal;
  font-size: 18px;
`
export const Button = styled.button`
  outline: none;
  border: none;
  font-size: 12px;
  padding: 10px;
  background-color: #d946ef;
  color: #ffffff;
`
